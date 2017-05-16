import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda = 'https://api.spotify.com/v1/search?';
  urlArtista = 'https://api.spotify.com/v1/artists/';

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

  getArtista(id: string) {

    let query = `${id}`;
    const url = this.urlArtista + query;

    return this._http.get(url).map(res => {
      // console.log(res.json().artists.items);
      return res.json();
    });
  }

  getTop(id: string) {

    let query = `${id}/top-tracks?country=US`;
    const url = this.urlArtista + query;

    return this._http.get(url).map(res => {
      return res.json().tracks;
    });
  }
}
