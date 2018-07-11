import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-grafico-dona',
    templateUrl: './grafico-dona.component.html',
    styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

    @Input('labels') label: string[] = [];
    @Input('data') data: number[] = [];
    @Input('tipo') tipo: string = '';
    @Input('leyenda') leyenda: string = '';

    public doughnutChartLabels: string[] = this.label;
    public doughnutChartData: number[] = this.data;
    public doughnutChartType: string = this.tipo;
    public doughnutChartLeyenda: string = this.leyenda;

    constructor() { }

    ngOnInit() {
    }

}
