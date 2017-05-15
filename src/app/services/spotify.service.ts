import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda = 'https://api.spotify.com/v1/search?';

  constructor(private _http: Http) { }


  getArtistas(termino: string) {

    let query = `q=${termino}&type=artist`;
    const url = this.urlBusqueda + query;

    return this._http.get(url).map(res => {
      // console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      console.log(this.artistas);

      return this.artistas;
    });

  }
}
