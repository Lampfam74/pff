@extends('dashboard')
@section('content')
<br>
<br>
<br>
	<div class="row container" >
		<button type="button" class="btn btn-primary col-sm-2"
			data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">
			Add Demensionnement</button>
		<br> <br>
		<table class="table table-hover text-nowrap " id="tabsous">
			<thead>
				<tr>
					<th scope="col">nom Equipement</th>
					<th scope="col">Nombre d'equipement</th>
					<th scope="col">Type de Systeme</th>
 				<th scope="col"> puissance</th>
					<th scope="col">Nombre d'heure dimensionnement</th>
					
					
				</tr>
			</thead>
			<tbody>
                @foreach($equipement as $per)
				<tr >
					<td>{{$per->libelle}}</td>
                    <td> {{$per->nombre}} </td>
					<td> {{$per->type}} </td>
                    <td> {{$per->puissance}}</td>
                    <td>{{$per->heureUtilisation}}</td>
                {{-- <td><a href="{{route('equipement.show',$per->id)}}" class="btn btn-outline-primary">editer</a>&nbsp;&nbsp;&nbsp; --}}
				
					{{-- </td> --}}
					
                </tr>
                @endforeach
			</tbody>
				<script>
					$(document)
							.ready(
									function() {
										$('#tabsous')
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

		<!-- Modal DIMENSIONNEMENT-->
	<div class="modal fade" id="staticBackdrop" data-mdb-backdrop="static"
		data-mdb-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Add
						Dimension</h5>
					<button type="button" class="btn-close" data-mdb-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
                <form method="post" action="{{route('equipement.store')}}" >
                        <!-- 2 column grid layout with text inputs for the first and last names -->
                        @csrf
						<div class="row mb-4">
                        <input type="hidden" id="client_id" name="client_id"  value="{{$clients}}"  class="form-control" />
							<div class="col">
								<!-- Text input -->
								<div class="form-outline mb-4">
									<input type="number" id="form6Example4"   name="puissance" class="form-control" />
									<label class="form-label" for="form6Example4">puissance
										</label>
								</div>

								<!-- Email input -->
								<div class="form-outline mb-4">
									<input type="number" id="form6Example5"   class="form-control" name="nombre" />
									<label class="form-label" for="form6Example5">nombre d'equipement</label>
								</div>
								<select class="form-select" aria-label="Default select example" name="type">
									<option selected>Type de systeme</option>
									<option value="Hybride">Hybride</option>
									<option value="Isolee">Isolee</option>
								  </select>
								  <br>
								<!-- Number input -->
								<div class="form-outline mb-4">
									<input type="text" id="form6Example6"   class="form-control" name="libelle" />
									<label class="form-label" for="form6Example6">libelle Equipement</label>
								</div>

								<!-- Message input -->
								<div class="form-outline mb-4">
									<input type="number" id="form6Example6"  class="form-control" name="heureUtilisation" />
									<label class="form-label" for="form6Example7">Nombre d'heure d'utilisation </label>
								</div>

								<!-- Submit button -->
								<!--  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>-->

							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary"
									data-mdb-dismiss="modal">Annuler</button>
								<button type="submit" class="btn btn-primary">Add
									Dimensionnement</button>

							</div>
							</div>
					</form>
				</div>
			</div>
		</div>
		</div>
	
	
			<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></script>
@endsection