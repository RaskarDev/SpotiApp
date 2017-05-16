import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'domseguro' })
export class DomseguroPipe implements PipeTransform {
    constructor(private _domSanitizer: DomSanitizer) {
    }

    transform(value: any, url: string): any {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }
}