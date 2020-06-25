<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

use Laravel\Scout\Searchable;

class Contact extends Model
{
    use Searchable;

    protected $guarded = [];

    protected $dates = ['birthday'];

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray() {
        $array = $this->toArray();

        // Customize array...

        return $array;
    }

    public function path() {
        return url('/contacts/' . $this->id);
    }

    public function setBirthdayAttribute($birthday) {
        $this->attributes['birthday'] = Carbon::parse($birthday);
    }

    public function user() {
        return $this->belongsTo(Contact::class);
    }

    public function scopeBirthdays($query) {
        return $query->whereRaw('birthday like "%-'. now()->format('m') .'-%"');
    }
}
