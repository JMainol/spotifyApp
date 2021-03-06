import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string ){
       const url = `https://api.spotify.com/v1/${ query }`;

       const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAh-B5WzaNBSMg1enzadwl1OP8_2GsvE7_nldrbKyzmt4GDR6fD72FWAlmrwR1qo38aFWS0AlbgWhOngX0'
       });

       return this.http.get(url, {headers});
   }


   get70Artists(addedArtist?:string){

    return this.getQuery(`artists?ids=22bE4uQ6baNwSHPVcDxLCe%2C0k17h0D3J5VfsdmQ1iZtE9%2C711MCceyCBcFnzjGY4Q7Un%2C36QJpDe2go2KgaRleHCDTp%2C568ZhdwyaiCyOGJRtNYhWf%2C1co4F2pPNH8JjTutZkmgSm%2C1dfeR4HaWDbWqFHLkxsg1d%2C07XSN3sPlIlB2L2XNcTwJw${'%2C' + addedArtist}`)
           .pipe(map( data => data['artists']));
 
 }

   getNewArtist(termino: string){
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                 .pipe(map( data => data['artists'].items));
   }

   getArtistPage(id: string){
    return this.getQuery(`artists/${ id }`);
   }

   getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe(map( data => data['tracks']));
   }
}
