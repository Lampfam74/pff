<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        
        
        if(Auth::user()->statut == 0 ){
            $request->session()->invalidate();
            return redirect('/login')->with('statut','ce compte n est pas encore actif' );
        }else {
            $request->session()->regenerate();
            if(Auth::user()->role === 'admin'){
                // return redirect('/admin');
                return redirect()->intended(RouteServiceProvider::HOME);
    
            }if(Auth::user()->role === 'client'){
            //   return redirect('/caisse');
            return redirect()->intended(RouteServiceProvider::CLIENT);
            }
           
            
        }
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
