@extends('dashboard')
@section('content')
<br>
<br>
<br>
	<div class="row container-fluid" >
		<button type="button" class="btn btn-primary col-sm-2"
			data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">
			Add Clients</button>
        <br> <br>
        @if(session()->has('success'))
<div class="alert alert-success">
    {{ session()->get('success') }}
</div>
@endif
		<table class="table table-hover text-nowrap " id="tab">
			<thead>
				<tr>
					<th scope="col">nom</th>
					<th scope="col">Prenom</th>
					<th scope="col">Email</th>
					<th scope="col">Telephone</th>
					<th scope="col">plus</th>
					
				</tr>
			</thead>
			<tbody>
               
                @foreach($clients as $per)
				<tr >
					
                    <td>{{$per->nom}}</td>
                    <td> {{$per->prenom}} </td>
                    <td> {{$per->email}}</td>
                    <td>{{$per->telephone}}</td>
                <td><a href="{{route('clients.show',$per->id)}}" class="btn btn-outline-primary">dimennsionnement</a>&nbsp;&nbsp;&nbsp;
					<a  href="#" class="btn btn-outline-primary">Rapport</a>
					</td>
					
                </tr>
                @endforeach

			</tbody>
			<script>
					$(document)
							.ready(
									function() {
										$('#tab')
												.DataTable(
														{
															"searching" : true,
															"info" : false,
															"bLengthChange" : false,
															"pageLength" : 10,
															"language" : {
																"sEmptyTable" : "Aucune donnée disponible dans le tableau",
																"sInfoPostFix" : "",
																"sInfoThousands" : ",",
																"oPaginate" : {
																	"sNext" : "Suivant",
																	"sPrevious" : "Précédent"
																}
															},
															"aaSorting" : [],
															columnDefs : [ {
																orderable : false,
																targets : 4
															} ]
														});
										$('.dataTables_length').addClass(
												'bs-select');
									});
				</script>
		</table>

	</div>
	<!-- <div th:replace="fragment/menu.html :: jsfiles"></div> -->

	<!-- Modal -->
	<div class="modal fade" id="staticBackdrop" data-mdb-backdrop="static"
		data-mdb-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Add
						Clients</h5>
					<button type="button" class="btn-close" data-mdb-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
                <form method="post" action="{{route('clients.store')}}" >
                        <!-- 2 column grid layout with text inputs for the first and last names -->
                        @csrf
						<div class="row mb-4">
							<div class="col">
								<!-- Text input -->
								<div class="form-outline mb-4">
									<input type="text" id="form6Example4" name="nom" class="form-control" />
									<label class="form-label" for="form6Example4">Nom
										</label>
								</div>

								<!-- Email input -->
								<div class="form-outline mb-4">
									<input type="text" id="form6Example5" name="prenom" class="form-control" />
									<label class="form-label" for="form6Example5">prenom</label>
								</div>

								<!-- Number input -->
								<div class="form-outline mb-4">
									<input type="text" id="form6Example6" name="email" class="form-control" />
									<label class="form-label" for="form6Example6">email</label>
								</div>

								<!-- Message input -->
								<div class="form-outline mb-4">
									<input type="text" id="form6Example6" name="telephone" class="form-control" />
									<label class="form-label" for="form6Example7">Telephone</label>
								</div>
								<!-- Message input -->
						 <div class="form-outline mb-4">
                         <input type="hidden" id="user_id"   name="user_id" value="{{$user}}" />
									
								</div>

								<!-- Submit button -->
								<!--  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>-->

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary"
									data-mdb-dismiss="modal">Annuler</button>
								<button type="submit" class="btn btn-primary">Add
									Client</button>

							</div>
							</div>
					</form>
		
				</div>
			</div>
		</div>
		</div>
	
@endsection
