<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


class DeliveryController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function create(Request $r)
    {
        $date = $r->all();

        if(empty($date['location_to']) ||empty($date['location_from']) ||empty($date['to_name']) ||empty($date['delivery_date']))
            return response('Preencha todos os campos', 400);

        $created = \App\Delivery::create($date);

        if($created){
           return response()->json($created)->setStatusCode(201);
        } else {
            return response('Ocorreu um erro na criação', 500);
        }
    }

    public function retrieveById(Request $r, $id = null)
    {   
        if(is_null($id))
            return response('Item não informado', 400);

        $item = \App\Delivery::where('id', $id)->first();

        if(!$item)
            return response('Item nao encontrado', 404);
        return $item;
    }

    public function listAll(Request $r) 
    {
        $results = \App\Delivery::where('delivery_date', '>=', date('Y-m-d'))->orderBy('delivery_date','ASC')->get();
        return $results;
    }
    //
}
