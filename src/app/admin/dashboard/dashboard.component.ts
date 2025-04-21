import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stats = [
    { title: 'Sales', value: 120, label: 10 },
    { title: 'Users', value: 50, label: 10 },
    { title: 'Revenue', value: '$10k', label: 10 },
    { title: 'Growth', value: '12%', label: 10 }
  ];


  topBrands = [
    { name: 'Nike', sales: 1000, orders: 10, rank: 3.4, profit: 10 },
    { name: 'Adidas', sales: 800, orders: 10, rank: 3.4, profit: 10 },
    { name: 'Puma', sales: 500, orders: 10, rank: 3.4, profit: 10 }
  ];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          // padding: 30,
        },
        ticks: {
          // padding: 30,
        },
      },
      y: {
        beginAtZero: true,

      },
    },
    plugins: {
      legend: {
        display: false,
      },

    },

  };

  // public barChartLabels = [
  //   'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  //   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  // ];

  public barChartData: any =
    {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40, 90, 30, 55, 20, 100], label: 'Series A',
          backgroundColor: '#F5CDAD',
          borderRadius: 10,
          barPercentage: 0.4, // Increase spacing between bars
          categoryPercentage: 0.7
        },
      ],
    }
    ;

  public barChartType: ChartType = 'bar';



  // half circle
  progress: number = 50;
  updateDashOffset(progress: number) {
    const clamped = Math.min(Math.max(progress, 0), 100);
    const filled = (clamped / 100) * 138.25;
    return 138.25 - filled;
  }


}
