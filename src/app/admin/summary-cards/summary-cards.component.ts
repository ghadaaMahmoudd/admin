import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent {
  stats = [
    { title: 'Sales', value: 120,label:10 },
    { title: 'Users', value: 50,label:10 },
    { title: 'Revenue', value: '$10k' ,label:10},
    { title: 'Growth', value: '12%' ,label:10}
  ];
}
