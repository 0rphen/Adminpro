import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promesas',
    templateUrl: './promesas.component.html',
    styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

    constructor() {
        this.contarTres().then(
            mensaje => console.log('Termino!', mensaje)
        ).catch(error => console.error('error en la promesa', error));
    }

    ngOnInit() {
    }

    contarTres(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let contador: number = 0;
            let intervalo = setInterval(() => {
                contador += 1;
                console.log(contador);
                if (contador === 3) {
                    //                    reject('un error');
                    resolve(true);
                    clearInterval(intervalo);
                }
            }, 1000);
        });
    }
}
