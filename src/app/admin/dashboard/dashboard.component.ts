import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stats = [
    { title: 'Sales', value: 120,label:10 },
    { title: 'Users', value: 50,label:10 },
    { title: 'Revenue', value: '$10k' ,label:10},
    { title: 'Growth', value: '12%' ,label:10}
  ];


  topBrands = [
    { name: 'Nike', sales: 1000,orders:10,rank:3.4,profit:10 },
    { name: 'Adidas', sales: 800 ,orders:10,rank:3.4,profit:10},
    { name: 'Puma', sales: 500,orders:10,rank:3.4,profit:10 }
  ];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100000
      }
    }
  };

  public barChartLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [70000, 45000, 25000, 23000, 60000, 48000, 75000, 69000, 80000, 87000, 89000, 90000],
      backgroundColor: '#f5b041'
    }
  ];

  public barChartType: ChartType = 'bar';






}
