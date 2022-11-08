<div class="sidebar" >
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="{{ asset('default.jpg') }}" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">
            {{ auth()->user()->username }}

        </a>
      </div>
    </div>

    {{-- <!-- SidebarSearch Form -->
    <div class="form-inline">
      <div class="input-group" data-widget="sidebar-search">
        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-sidebar">
            <i class="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div> --}}

    <!-- Sidebar Menu -->
    <nav class="mt-2">

        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <a href="#" class="nav-link ">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Tableau de bord
                    </p>
                </a>
            </li>

            <li class="nav-item">

                <form id="logout-form" action="{{ route('logout') }}" method="POST" >
                    @csrf
                    <div class="nav-link">
                        <input type="submit" class="form-control" value="Logout">
                    </div>
                </form>

            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
</div>
