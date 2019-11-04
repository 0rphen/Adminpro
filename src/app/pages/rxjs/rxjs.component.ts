import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    constructor() {
        this.subscription = this.regresaObservable().pipe(
            retry(2)
        )
            .subscribe(
                numero => console.log('Subs ' + numero), //Recibiendo Datos del Observable
                error => console.error('Error' + error), //Notificación de Error
                () => console.log('El observador Termino') //Notificación de un observador terminado
            );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    regresaObservable(): Observable<any> {
        return new Observable((observer: Subscriber<any>) => {
            let contador: number = 0;
            let intervalo = setInterval(() => {
                contador += 1;
                const salida = {
                    valor: contador
                };
                observer.next(salida);
                if (contador === 30) {
                    clearInterval(intervalo);
                    observer.complete();
                }
                if (contador === 50) {
                    observer.error("Error");
                }
            }, 1000);
        }).pipe(
            map(resp => resp.valor),
            filter((resp) => {
                if ((resp % 2) === 1)
                    return true;
                else
                    return false;
            })
        );
    }
}
