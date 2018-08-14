<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Delivery extends Model
{
    
    protected $fillable = [
        'to_name',
        'delivery_date',
        'location_from',
        'location_to',
    ];
}
