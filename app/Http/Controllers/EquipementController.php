<?php

namespace App\Http\Controllers;

use App\Models\equipement;
use Illuminate\Http\Request;

class EquipementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'libelle' => ['required', 'string', 'max:255'],
            'heureUtilisation' => ['required', 'string','max:255'],
            'puissance' => ['required', 'string', 'max:255'],
            'nombre' => ['required'],
            'client_id'=> 'required',
        ]);
        Equipement::create([
            'libelle'=>$request['libelle'],
            'heureUtilisation'=>$request['heureUtilisation'],
            'puissance'=>$request['puissance'],
            'nombre'=>$request['nombre'],
            'client_id'=>$request['client_id'],

        ]);
        return  redirect()->back()->with('success',"ajout reussi avec success");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\equipement  $equipement
     * @return \Illuminate\Http\Response
     */
    public function show(equipement $equipement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\equipement  $equipement
     * @return \Illuminate\Http\Response
     */
    public function edit(equipement $equipement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\equipement  $equipement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, equipement $equipement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\equipement  $equipement
     * @return \Illuminate\Http\Response
     */
    public function destroy(equipement $equipement)
    {
        //
    }
}
