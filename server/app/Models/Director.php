<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    use HasFactory;

    protected $table = 'directors';

    protected $fillable = [
        'name',
        'bio',
        'birthdate',
        'photo_url',
    ];

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_director', 'director_id', 'movie_id');
    }
}
