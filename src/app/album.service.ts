import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  Albums: Album[];

  constructor(private database: AngularFireDatabase) {  
    this.database.list<Album>('albums').valueChanges().subscribe((data) => {
      this.Albums = data;
      console.log(this.Albums);
    })
  };

  getAlbums() {
    return this.Albums;
  }

  getAlbum(id: number) {
    for(let album of this.Albums) {
      if(album.id == id) {
        return album;
      }
    }
  }
}
