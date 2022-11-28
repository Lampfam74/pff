<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{client,Equipement};
// use App\helpers\AppHelpers;
class RapportController extends Controller
{
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('rapport.index');
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client=Client::find($id);
        $rapport=Equipement::where('client_id',$id)->get();
        // dd($rapport);
        // PT
        $puissance=\App\helpers\AppHelpers::Puissance_de_pointe($rapport);
        // dd($puissance);
        // ET
        $energies=\App\helpers\AppHelpers::Energie_consomme($rapport);
        
        $Puissance_onduleur=\App\helpers\AppHelpers::Puissance_onduleur($puissance);

        $Puissance_max_requise=\App\helpers\AppHelpers::Puissance_max_requise($puissance);

        $Puissance_PV_installee=\App\helpers\AppHelpers::Puissance_PV_installee($energies);
        $Capacite_batterie=\App\helpers\AppHelpers::Capacite_batterie($energies);
        $Nombre_batteries=\App\helpers\AppHelpers::Nombre_batteries($Capacite_batterie);
        // dd($Nombre_batteries);
        return view('rapport.index',[
            'client'=>$client,
            'rapport'=>$rapport,
            'Puissance_onduleur'=>$Puissance_onduleur,
            'Puissance_PV_installee'=>$Puissance_PV_installee,
            'Nombre_batteries'=>$Nombre_batteries
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
}
