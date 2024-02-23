import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'

@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.scss']
})
export class Chart5Component implements OnInit {

  public chart5 = chartData.chart5;
  
  constructor() { }

  ngOnInit(): void {
  }

}