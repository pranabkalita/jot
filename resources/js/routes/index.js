import Vue from 'vue';
import VueRouter from 'vue-router';

import ExampleComponent from '../views/Components/Home';
import ContactsCreate from '../views/Contacts/Create'
import ContactsShow from '../views/Contacts/Show'
import ContactsIndex from '../views/Contacts/Index'
import BirthdaysIndex from '../views/Birthdays/Index'
import Logout from '../views/Components/Actions/Logout'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: ExampleComponent, meta: { title: 'Welcome' } },
        { path: '/contacts', component: ContactsIndex, meta: { title: 'Contacts' } },
        { path: '/contacts/create', component: ContactsCreate, meta: { title: 'Add New Contact' } },
        { path: '/contacts/:id', component: ContactsShow, meta: { title: 'Details For Contact' } },
        { path: '/contacts/:id/edit', component: ContactsCreate, meta: { title: 'Edit Contact' } },

        { path: '/birthdays', component: BirthdaysIndex, meta: { title: 'This Month\'s Birthday' } },
        { path: '/logout', component: Logout, meta: { title: 'Logout' } },
    ],
    mode: 'history',
});
