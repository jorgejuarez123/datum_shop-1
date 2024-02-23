import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-pie-chart3',
  templateUrl: './pie-chart3.component.html',
  styleUrls: ['./pie-chart3.component.scss']
})
export class PieChart3Component implements OnInit {

  public pieChart3 =  chartData.pieChart3
  constructor() { }

  ngOnInit(): void {
  }

}