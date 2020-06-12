import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


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


  constructor(private spotify: SpotifyService) {

      this.loading = true;
      this.error = false;
    
      this.spotify.get70Artists()
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
