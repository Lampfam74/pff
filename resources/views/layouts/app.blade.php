<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>

            <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        {{-- @livewireStyles --}}
        <link rel="stylesheet" href="{{ asset('/css/fontawesome-all.css')}}">
        <link rel="stylesheet" href="{{ asset('/css/font-awesome.min.css')}}">
        <link rel="stylesheet" href="{{ asset('/css/fontawesome-.css')}}">
        <link rel="stylesheet"  href="{{ asset('/css/mdb.min.css')}}">
        <link rel="stylesheet"  href="{{ asset('/style.css')}}">
        <link rel="stylesheet"  href="{{ asset('/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
        <link rel="stylesheet" href="https:/cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet"  href="{{ asset('/css/jquery.dataTables.min.css')}}">
        <script type="text/javascript"  src="{{ asset('/js/mdb.min.js')}}"></script>
        <script type="text/javascript"  src="{{ asset('/js/bootstrap.min.js')}}"></script>
        <script type="text/javascript"  src="{{ asset('/js/jquery.min.js')}}"></script>
        <script type="text/javascript"  src="{{ asset('/js/jquery.dataTables.min.js')}}"></script>
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">

            {{-- <!-- Preloader -->
            <div class="preloader flex-column justify-content-center align-items-center">
                <h1 style="color: rgb(93,61,35); font-weight: bolder">Isep Diamniadio</h1>
                <img class="animation__shake" src="{{ asset('images/Logo-Isep.png') }}" alt="AdminLTELogo" height="60" width="240">
            </div> --}}

            <!-- Navbar -->
            @include('layouts.navigation')
            <!-- /.navbar -->

            <!-- Main Sidebar Container -->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <a href="#" class="brand-link">
                    <span class="brand-text font-weight-light">LAMPSolar</span>
                </a>

                <!-- Sidebar -->
                @include('layouts.sidebar')
                <!-- /.sidebar -->
            </aside>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            @yield('nav')
                        </div><!-- /.row -->
                    </div><!-- /.container-fluid -->
                </div>
                <!-- /.content-header -->

                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        @yield('content')
                    </div><!-- /.container-fluid -->
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <strong>Copyright &copy;<a href="https://github.com/FAMpapamagueye/GomyCodes.git">LampsDevs | GoMyBibliotec</a>.</strong>
                All rights reserved.
                <div class="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.1.0
                </div>
            </footer>

            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- Control sidebar content goes here -->
            </aside>
            <!-- /.control-sidebar -->
        </div>
        <!-- ./wrapper -->

        <script src="{{ asset('js/app.js') }}"></script>
        @livewireScripts
    </body>
</html>

