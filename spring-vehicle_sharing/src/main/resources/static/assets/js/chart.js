const URL_VEICOLI = "http://localhost:9014/api/veicoli";

var datiChart = [0, 0, 0, 0];

fetch(URL_VEICOLI)
  .then(data => data.json())
  .then(response => {
    
    response.forEach(element => {
    
        switch (element.tipologia) {
          case 'Bicicletta' || 'bicicletta':
            datiChart[0]++;
            break;
          case 'Monopattino' || 'monopattino':
            datiChart[1]++;
            break;
          /*case 'Motorino' || 'motorino':
            datiChart[2] ++;
            break;*/
          case 'Auto' || 'auto':
            
            if (element.alimentazione.toLowerCase() == 'elettrica' || element.alimentazione.toLowerCase() == 'elettrico') {

              datiChart[2]++;
            } else if (element.alimentazione.toLowerCase() == 'ibrida' || element.alimentazione.toLowerCase() == 'ibrido') {

              datiChart[3]++;
            }
            break;
        }

    });
    creaGrafico();
});

const ctx = document.getElementById('myChart');

function creaGrafico() {
	
	datiChart[0] *= 1;
	datiChart[1] *= .95;
	//datiChart[2] *= 0;
	datiChart[2] *= .6;
	datiChart[3] *= .4;
	//console.log(datiChart);
	new Chart(ctx, {
	  type: 'pie',
	  data: {
	    labels: ['Biciclette', 'Monopattini', /*'Motorini',*/ 'Auto Elettriche', 'Auto Ibride'],
	    datasets: [{
	      label: ' kg di CO2 risparmiati',
	      data: datiChart,
	      borderWidth: 1
	    }]
	  },
		options: {
		    scales: {
		        xAxes: {
					display: false, //this will remove all the x-axis grid lines
		            ticks: {
		                display: false //this will remove only the label
		            }
		        }
		    },
		    plugins: {
			    legend:{
					position: 'bottom',
					labels: {
					          boxWidth: 10,
					          boxHeight: 10,
					          padding: 30
					        }
					}
			}
		}
	});
}
