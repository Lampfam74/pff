<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('titre')</title>

    <link rel="stylesheet" href="{{ asset('/css/fontawesome-all.css')}}">
    <link rel="stylesheet" href="{{ asset('/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{ asset('/css/fontawesome-.css')}}">
    <link rel="stylesheet"  href="{{ asset('/css/mdb.min.css')}}">
    <link rel="stylesheet"  href="{{ asset('/style.css')}}">
    <link rel="stylesheet"  href="{{ asset('/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <link rel="stylesheet" href="https:/cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet"  href="{{ asset('/css/jquery.dataTables.min.css')}}">
   
    <style>
        .invoice-title h2, .invoice-title h3 {
            display: inline-block;
        }
        
        .table>tbody>tr>.no-line {
            border-top: none;
        }
        
        .table>thead>tr>.no-line {
            border-bottom: none;
        }
        /* .table > tbody > tr > .thick-line {
            border-top: 2px solid;
        } */
        </style>
    <script type="text/javascript"  src="{{ asset('/js/mdb.min.js')}}"></script>
    <script type="text/javascript"  src="{{ asset('/js/jquery.min.js')}}"></script>
    <script type="text/javascript"  src="{{ asset('/js/jquery.dataTables.min.js')}}"></script>

    <script type="text/javascript"  src="/js/bootstrap.min.js"></script>

</head>
<body style="background-image:url('img/1.png');background-repeat:no repeat;background-size:cover;background-color:rgba(255, 249, 249, 0.801)">
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-white bg-white  ">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <i style="font-size:24px" class="fa">&#xf0c9;</i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
    <a class="navbar-brand mt-2 mt-lg-0" href="{{route('dashboard.index')}}">
        <img
          src="/img/1.png"
          style="
          height:70px;
         "
        />
      </a>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="outline:none">
        <li class="nav-item" style="color: none">
          <a class="nav-link" style="color: black" href="{{route('dashboard.index')}}">Accueil</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" style="color: black" href="{{route('clients.index')}}">Clients</a>
        </li>
       

      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
    <div>{{Auth::user()->prenom }} {{Auth::user()->nom }}</div>
     <form id="logout-form" action="{{ route('logout') }}" method="POST">
            @csrf
            <div class="nav-link">
                <input type="submit" class="form-control btn btn-outline-danger" value="Se déconnecter">
            </div>
        </form>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
<section class="container-fluid" style="background-color:rgb(253, 249, 249);height:100vh">
  @yield('content')
</section>
 {{-- <script src="{{ asset('/js/app.js') }}"></script> --}}
</body>
</html>
