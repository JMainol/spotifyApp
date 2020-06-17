import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  term: string;

  artistas70: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  addedArtist: string;


  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService
                  ) {

      this.activatedRoute.params.subscribe(params =>{
        console.log(params.id);
        this.addedArtist = params.id;
        console.log(this.addedArtist);
      });

      this.loading = true;
      this.error = false;

      this.spotify.get70Artists(this.addedArtist)
          .subscribe( (data: any )=>{
              console.log(data);
              this.artistas70 = data;
              this.loading = false;
          }, (errorServicio) =>{
            this.loading = false;
            this.error = true;
            console.log(errorServicio);
            this.mensajeError = errorServicio.error.error.message;
          });

      

  }


}
