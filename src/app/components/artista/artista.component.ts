import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any;
  pistas: any[];

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.map(
      parametros => parametros['id']
    ).subscribe(id => {
      this._spotifyService.getArtista(id).subscribe(data => {
        this.artista = data;
      });

      this._spotifyService.getTop(id).subscribe(data => this.pistas = data);
    });
  }

}
