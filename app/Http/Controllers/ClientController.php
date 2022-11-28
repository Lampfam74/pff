<?php

namespace App\Http\Controllers;

use App\Models\{client,Equipement};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user=Auth::user()->id;
        $clients=Client::where('user_id',$user)->get();
        
        // $clients=Client::all();
        // dd($clients);
        return view('clients.index',[
            'clients'=>$clients,
            'user'=>$user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'nom' => ['required', 'string', 'max:255'],
            'prenom' => ['required', 'string','max:255'],
            'email' => ['required', 'string', 'unique:clients', 'max:255'],
            'telephone' => ['required','unique:clients'],
            'user_id'=> ['required'],
        ]);
        Client::create([
            'nom'=>$request['nom'],
            'prenom'=>$request['prenom'],
            'email'=>$request['email'],
            'telephone'=>$request['telephone'],
            'user_id'=>$request['user_id'],

        ]);
        return  redirect()->back()->with('success',"ajout reussi avec success");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\client  $client
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $clients=Client::find($id)->first();
        $equipement=Equipement::where('client_id',$id)->get();
        // $equipement=Equipement::all();
        // dd($id);
        return view('dimensionnement.index',[
            'clients'=>$id,
            'equipement'=>$equipement
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(client $client)
    {
        //
    }
}
