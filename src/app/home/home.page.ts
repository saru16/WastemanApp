import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public platform:Platform) {
    this.platform.ready().then(()=>{
      google.charts.load('current', {'packages':['corechart']});
      // this.DrawPiechart();
    })
  }

  DrawPiechart()
  {
    var data = google.visualization.arrayToDataTable([
      ['Bin Status' , 'count'],
      ['Empty Bin' ,10],
      ['Half Bin',5],
      ['Full Bin',7]
    ]);
    var options = {
      title:'',
      is3D:true
    }
    var chart = new google.visualization.PieChart(document.getElementById('div-pie'));
    chart.draw(data,options);
  }
}
