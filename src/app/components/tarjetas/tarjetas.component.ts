import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent{

  @Input() querie: any = {};

  @Input() items: any[] = [];

  delete: boolean[];

  
  constructor( private router: Router) { }

  verArtista(item: any){
      
      let artistaId;
      artistaId = item.id;
      
      this.router.navigate([ '/artist', artistaId ]);
      

  }


}
