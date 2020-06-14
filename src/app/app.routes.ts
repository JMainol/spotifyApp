import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES: Routes = [
    { path: 'playlist', component: HomeComponent },
    { path: 'busqueda', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'playlist'},
    { path: '**', pathMatch: 'full', redirectTo: 'playlist'}
];