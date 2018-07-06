import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-graphics1',
    templateUrl: './graphics1.component.html',
    styleUrls: ['./graphics1.component.css']
})
export class Graphics1Component implements OnInit {

    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    constructor() { }

    ngOnInit() {
    }

}
