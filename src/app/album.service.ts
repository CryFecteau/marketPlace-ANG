import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Albums } from './mock-albums'; 

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums(){
    return Albums;
  }
}
