@extends('dashboard')
@section('content')
<br>
<br>
<br>
	<div class="row">
	<div class="col-sm-8 text-center">
	<canvas id="myChart" width="100px" height="50px"></canvas>
	</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script>
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['clients',  'Dimensionnement'],
        datasets: [{
            label: 'tableau de pour l\'utilisateur {{Auth::user()->id}}',
            data: [{{ Js::from($coutClient)}},{{ Js::from($coutClient)}}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
});

</script>



	
@endsection