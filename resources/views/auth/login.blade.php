
<!DOCTYPE html>
<html >
<head >
<meta charset="ISO-8859-1">
<title>Administrateur</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />

<link rel="stylesheet" href="/bootstrap/css/jquery.dataTables.min.css" />


{{-- <link href="/bootstrap/css/bootstrap.css" rel="stylesheet" /> --}}
<link href="/bootstrap/css/fontawesome-all.css" rel="stylesheet" />
<link href="/bootstrap/css/swiper.css" rel="stylesheet" />
<link href="/css/style.css" rel="stylesheet" />
 {{-- <link href="/style.css" rel="stylesheet" id="bootstrap-css">  --}}
<script type="text/javascript" src="/bootstrap/js/jquery.min.js"> </script>
<script type="text/javascript" src="/bootstrap/js/bootstrap.min.js"> </script>
</head>
<style>
    .error {
        color: red;
    }
    .form-control{
    background-color:#F4EEE2;
    height:50px;
    }
    button{
    background-color:#F4EEE2;
    height:50px;
    }
</style>
<body class="bg-white container-fluid">
<!-- <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
<!------ Include the above in your HEAD tag ---------->

<div class="sidenav container col-sm-12 text-center" style="
 padding:50px">
         <div class="col-sm-6 login-main-text " style="background-color:#F0BF3F">
            <!-- <h2>Application<br> Login Page</h2> -->
            
            <img class="img-fluid" alt="img" src="/img/1.png" height="80%">
            
            <!-- <p>Login or register from here to access.</p> -->
         </div>
    
      <div class="main col-sm-6" style="
      padding:150px; ">
      		
         <div class="col-md-12 col-sm-12" style="position:left">
            <div class="login-form">
               <form method="post" action="/login" >
               @csrf
                  <div class="form-group">
                     <label>User Email</label>
                     <input type="email" name="email"  required="required" class="form-control" placeholder="User Name">
                    
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" name="password"   required="required" class="form-control" placeholder="Password">
                   
                  </div>
                
                  <!-- <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/> -->
                  <button type="submit" class="btn btn-black">Login</button>
                 
                 <!--  <button type="submit" class="btn btn-secondary">Register</button> -->
               </form>
               <span> registered? <a href="/register">register
                  here</a></span>
                  @if(session()->has('statut'))
				<div class="alert alert-success">
					{{ session()->get('statut') }}
				</div>
				@endif
            </div>
         </div>
      </div>
      </div>
      </body>
</html>