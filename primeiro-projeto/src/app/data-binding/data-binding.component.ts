import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-data-binding',
    templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
    constructor() { }
    url: string = 'http://loiane.com';
    urlImg: string = 'http://lorempixel.com/400/200/nature/';
    urlImg2: string = 'http://lorempixel.com/400/200/abstract/';
    urlImg3: string = 'http://lorempixel.com/400/200/nightlife/';

    getValor(){
        return 1;
    }
}
