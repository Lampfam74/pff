<?php 
namespace Calcul;
use App\Models\Equipement;
class Calcul{

    public static  $Puissance_de_pointeResult=0;
    public static  $Energie_consomme=0;
    public static  $Puissance_onduleurResultats=0;
    public static  $Puissance_max_requiseResultat=0;
    public static  $Puissance_PV_installeeResultat=0;

     public static function Puissance_de_pointe(Equipement $Eq){
          foreach($Eq as $equi){
              $Puissance_de_pointeResult+=$equi->puissance *$equi->nombre;
          }
          return $Puissance_de_pointeResult;
  
      }
     public  function Energie_consomme(Equipement $E){
      foreach($E as $equi){ 
          $Energie_consomme+=$equi->puissance * $equi->nombre * $equi->heureUtilisation;
      }
      // Energie_consomme=0;
      
  
      }
      public static function Puissance_onduleur (){
          $Puissance_onduleurResultats=$Puissance_de_pointeResult/0.96;
      }
      public static function Puissance_max_requise(){
         $Puissance_max_requiseResultat=$Puissance_onduleurResultats/0.98;
      }
      public static function  Puissance_PV_installee(){
        $Puissance_PV_installeeResultat=$Energie_consomme/0.98;
    }

}