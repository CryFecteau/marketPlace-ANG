import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  
  albums: Album[];
  
  constructor(
    private router: Router,
    private albumService: AlbumService
    ) { }
    
  ngOnInit() {

    setTimeout(() => {
      this.albums = this.albumService.getAlbums();
    }, 1000);
    console.log("market albums[]: "+ this.albums);
  }

  showDetails(album: Album) {
    this.router.navigate(['albums', album.id]);
  }
}
