<?php

namespace App\Http\Controllers;
use App\Models\Equipement;
use Illuminate\Http\Request;

class CalculController extends Controller

{
  public const  Puissance_de_pointeResult=0;
  public const  Energie_consomme=0;
  public const  Puissance_onduleurResultats=0;
  public const  Puissance_max_requiseResultat=0;
   public  Puissance_de_pointe(Equipement $E){
        foreach($E as $equi){
            Puissance_de_pointeResult+=$equi->puissance *$equi->nombre;
        }
        return Puissance_de_pointeResult;

    }
   public Energie_consomme(Equipement $E){
    foreach($E as $equi){ 
        Energie_consomme+=$equi->puissance*$equi->nombre*$equi->heureUtilisation;
    }
    // Energie_consomme=0;
    

    }
    public Puissance_onduleur (){
        Puissance_onduleurResultats=Puissance_de_pointeResult/0.96;
    }
    public  Puissance_max_requise(){
        Puissance_max_requiseResultat=Puissance_onduleurResultats
    }
}
