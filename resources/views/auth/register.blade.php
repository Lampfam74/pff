
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head >
<meta charset="ISO-8859-1">
<title>Administrateur</title>
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />

<link rel="stylesheet" href="/bootstrap/css/jquery.dataTables.min.css" />


<link href="/bootstrap/css/bootstrap.css" rel="stylesheet" />
<link href="/bootstrap/css/fontawesome-all.css" rel="stylesheet" />
<link href="/bootstrap/css/swiper.css" rel="stylesheet" />
<link href="/bootstrap/css/styles.css" rel="stylesheet" />
{{-- <link href="style.css" rel="stylesheet" id="bootstrap-css">  --}}
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
<body class="bg-white">
<!-- <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
<!------ Include the above in your HEAD tag ---------->

<div class="sidenav container col-sm-12 text-center" style="
 padding:50px">
         <div class="col-sm-6 login-main-text " style="background-color:#F0BF3F">
            <!-- <h2>Application<br> Login Page</h2> -->
            
            <img alt="img" src="/img/1.png" height="80%">
            
            <!-- <p>Login or register from here to access.</p> -->
         </div>
    
      <div class="main col-sm-6">
         <div class="col-md-12 col-sm-12" style="position:left">
            <div class="login-form">
			<form action="/register" method="post" >
				@csrf
                    <input type="hidden" name="id">
					<div class="form-group">
                        <label class="control-label" for="firstName"> Prenom </label> 
                        <input
							id="prenom" class="form-control" 
							name="prenom" required autofocus="autofocus" />
					</div>

					<div class="form-group">
                        <label class="control-label" for="lastName"> NOM</label> 
                        
                        <input
							id="nom" class="form-control" name="nom"
							required autofocus="autofocus" />
					</div>
                    <div class="form-group">
						<label class="control-label" for="email"> Telephone </label> <input
							id="telephone" class="form-control"  required
							name="telephone"  pattern="[[0-0]{9}]" autofocus="autofocus" />
					</div>
					<div class="form-group">
						<label class="control-label" for="email"> Email </label> <input
							id="email" class="form-control"  required
							name="email" autofocus="autofocus" />
					</div>

					<div class="form-group">
						<label class="control-label" for="password"> Password </label> <input
							id="password" class="form-control" type="password"
							name="password"  required
							autofocus="autofocus" />
						
					</div>
					<div class="form-group">
						<label class="control-label" for="password"> confirmation </label>
						<input type="password" class="form-control" name="password_confirmation" placeholder="confirmation Mot de passe">
					  </div>
					<div class="form-group">
						<button type="submit" class="btn btn-success">Register</button>
						<span>Already registered? <a href="login">Login
								here</a></span>
					</div>
				</form>
				@if(session()->has('statut'))
				<div class="alert alert-danger">
					{{ session()->get('statut') }}
				</div>
				@endif
				@if(session()->has('data'))
				<div class="alert alert-danger">
					{{ session()->get('data') }}
				</div>
				@endif
				@if ($errors->any())
				<div class="alert alert-danger">
					<ul>
						@foreach ($errors->all() as $error)
							<li>{{ $error }}</li>
						@endforeach
					</ul>
				</div>
				@endif
            </div>
         </div>
      </div>
      </div>
      </body>
</html>