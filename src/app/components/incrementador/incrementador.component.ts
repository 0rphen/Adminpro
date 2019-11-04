import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

    @Input('Nombre') leyenda: string = 'Leyenda';
    @Input() porcentaje: number = 50;

    @Output() cambioValor: EventEmitter<number> = new EventEmitter();

    @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    onChanges(newValue: number) {
        if (newValue > 100)
            this.porcentaje = 100;
        if (newValue < 0)
            this.porcentaje = 0;
        this.txtProgress.nativeElement.value = this.porcentaje;
        this.cambioValor.emit(this.porcentaje);
        this.txtProgress.nativeElement.focus();
    }

    valor(cantidad: number) {
        if (this.porcentaje + cantidad > 100)
            return;
        if (this.porcentaje + cantidad < 0)
            return;
        this.porcentaje += cantidad;
        this.cambioValor.emit(this.porcentaje);
        this.txtProgress.nativeElement.focus();
    }
}
