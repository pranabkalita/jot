import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAllContacts({ commit }) {
      let response;

      try {
          response = await axios.get('/api/contacts');
      } catch (error) {
          throw error;
      }

      return response.data.data;
    },

    async getAllBirthdays({ commit }) {
      let response;

      try {
          response = await axios.get('/api/birthdays');
      } catch (error) {
          throw error;
      }

      return response.data.data;
    },

    async createContact({ commit }, data) {
        let response;

        try {
            response = await axios.post('/api/contacts', data);
        } catch (error) {
            throw error;
        }

        return response.data.data;
    },

    async getContact({ commit }, id) {

      let response;

      try {
        response = await axios.get('/api/contacts/' + id);
      } catch (error) {
        throw error;
      }

      return response.data.data;
    },

    async updateContact({ commit }, data) {
      let response;

      try {
          response = await axios.patch('/api/contacts/' + data.id, data.data);
      } catch (error) {
          throw error;
      }

      return response.data.data;
    },

    async destroyContact({ commit }, id) {

      let response;

      try {
        response = await axios.delete('/api/contacts/' + id);
      } catch (error) {
        throw error;
      }

      return response.data.data;
    },

    async search({ commit }, data) {
      let response;

      try {
          response = await axios.post('/api/search', data);
      } catch (error) {
          throw error;
      }

      return response.data.data;
    },

    async logout({ commit }) {
      let response;

      try {
          response = await axios.post('/logout');
      } catch (error) {
          throw error;
      }

      return response;
    },
  },
  modules: {}
})
