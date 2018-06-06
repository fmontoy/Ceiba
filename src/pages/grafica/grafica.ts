import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import {GraficadorProvider} from '../../providers/graficador/graficador';

@Component({
  selector: 'page-grafica',
  templateUrl: 'grafica.html'
})
export class GraficaPage {

    @ViewChild('lineCanvas') lineCanvas;

    apiUrl = "https://charging-station.herokuapp.com/api/plot";
    barChart: any;
    doughnutChart: any;
    lineChart: any;
    dataSubmit = {};
    puntos = {};

    constructor(public navCtrl: NavController, public graficadorProvider: GraficadorProvider) {
 
    }

    submitForm(){
        this.postServer();

    }
 
    ionViewDidLoad() {
        
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                
                datasets: [{
                    label: "Empty",
                    data:{},
                    fill: false,
                    borderColor: [
                      '#001f51',
                    ],
                    borderWidth: 2
                }

            ]
            },  
    
            
        
            options: {
                scales: {
                    xAxes: [{
                        display:true,
                        type: 'time',
                        position: 'bottom'
                    }]
                },
                elements: {
                    point: {
                        radius: 3
                    }
                }
            }
 
        });

 
    }

    graficar(){

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                
                datasets: [{
                    label: 'Luz',
                    lineTension: 0,
                    data:this.puntos["light"],
                    fill: false,
                    borderColor: [
                      '#001f51',
                    ],
                    borderWidth: 2,

                },
                {
                    label: 'Temp',
                    lineTension: 0,
                    data:this.puntos["temp"],
                    fill: false,
                    borderColor: [
                      '#ff91e9',
                    ],
                    borderWidth: 2,

                },
                {
                    label: 'Humedad',
                    lineTension: 0,
                    data:this.puntos["humidity"],
                    fill: false,
                    borderColor: [
                      '#6b95ff',
                    ],
                    borderWidth: 2,

                },
                {
                    label: 'Presión',
                    lineTension: 0,
                    data:this.puntos["airPress"],
                    fill: false,
                    borderColor: [
                      '#ffe13a',
                    ],
                    borderWidth: 2,

                }

            ]
            },  
    
            
        
            options: {
                bezierCurve : false,
                scales: {
                    xAxes: [{
                        display:true,
                        type: 'time',
                        position: 'bottom'
                    }]
                },
                elements: {
                    point: {
                        radius: 3
                    }
                }
            }
 
        });

    }

    public postServer() {
        console.log(this.dataSubmit);
      this.graficadorProvider.post(this.dataSubmit, this.apiUrl)
      .then(result => {
        this.puntos = result;
        console.log(this.puntos);
        this.graficar();
      }, (err) => {
        console.log(err);
      });
    }
 
 
}