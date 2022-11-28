<?php
namespace App\Helpers;

class AppHelpers
{
      static $Puissance_de_pointeResult=0;
      static $Energie_consomme = 0;
      static $Puissance_onduleurResultats=0;
      static $Puissance_max_requiseResultat=0;
      static $Puissance_PV_installeeResultat=0;
      static $Capacite_batterie=0;
      static $Nombre_batteries =0;


    // 
    public static  function Puissance_de_pointe($Eq){
        foreach($Eq as $equi){
           self::$Puissance_de_pointeResult+=$equi['puissance'] * $equi['nombre'];
        //    echo self::$Puissance_de_pointeResult;
        }
        return self::$Puissance_de_pointeResult;
       

    }
   public  static function Energie_consomme($E){
    foreach($E as $equi){ 
        self::$Energie_consomme +=$equi->puissance * $equi->nombre * $equi->heureUtilisation;
    }
    return self::$Energie_consomme;
    

    }
    public static function Puissance_onduleur ($pointeResult){
        self::$Puissance_onduleurResultats=$pointeResult/0.96;
        return  self::$Puissance_onduleurResultats;
    }
    public static  function Puissance_max_requise($requiseResultat){
        self::$Puissance_max_requiseResultat=$requiseResultat/0.98;
        return self::$Puissance_max_requiseResultat;
    } 
    public static  function  Puissance_PV_installee($Energie){
        self::$Puissance_PV_installeeResultat=$Energie/4.24;
        return self::$Puissance_PV_installeeResultat;
  }
  public static  function  Capacite_batterie($capacite){
    self::$Capacite_batterie=(($capacite/(0.8*0.6))/24);
    return self::$Capacite_batterie;
}
public static  function  Nombre_batteries($nombre){
    self::$Nombre_batteries=$nombre/25;
    return self::$Nombre_batteries;
}

}