@extends('dashboard')
@section('content')
        
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<div class="invoice-title">
                    <br>
                    <br>
					<h2>Rapport</h2>
					<h3 class="pull-right">
						By Energeticien N : <span>{{Auth::user()->prenom}} {{Auth::user()->nom}}</span>
					</h3>
				</div>
				<hr>
				<div class="row">
					<div class="col-xs-6">
						<address>
							<strong>Information client:</strong><br> prenom & Nom :
                        {{$client->prenom}} {{$client->nom}}<br> Telephone : {{$client->telephone}}<br> email:
							{{$client->email}}
						</address>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<address>
							<strong>Payment Method:</strong><br> wave<br> &<br>
							orange money: {{Auth::user()->telephone}}
						</address>
					</div>
					<div class="col-xs-6 text-right">
						<address>
							<strong>Date:</strong><br> <?php echo date('Y-d-m'); ?><br>
							<br>
						</address>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
                        <strong>Dimensionment client numero {{$client->id}}</strong>
						</h3>
					</div>
					<div class="panel-body">
						<div class="table-responsive">
							<table class="table table-striped">
								
								<tbody>
									
									<tr>
										<td class="thick-line"></td>
										<td class="thick-line"></td>
										<td class="thick-line text-center"><strong>Puissance
												onduleur</strong></td>
										<td class="thick-line text-right">{{$Puissance_onduleur}}</td>
									</tr>
									<tr>
										<td class="no-line"></td>
										<td class="no-line"></td>
										<td class="no-line text-center" scope="col"><strong>Puissance
												Pv </strong></td>
										<td class="no-line text-right" scope="col">{{$Puissance_PV_installee}}</td>
									</tr>
									<tr>
										<td class="no-line"></td>
										<td class="no-line"></td>
										<td class="no-line text-center"><strong>Nombre
												de batterie</strong></td>
										<td class="no-line text-right">{{$Nombre_batteries}}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

@endsection