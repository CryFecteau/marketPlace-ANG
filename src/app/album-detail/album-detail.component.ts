import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {

  albumId: number = null;
  album: Album;
  
  constructor(
    private activeRoute: ActivatedRoute, 
    private location: Location,
    private albumService: AlbumService
    ) { }

  ngOnInit() {
    this.activeRoute.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });

    this.album = this.albumService.getAlbum(this.albumId);
  }
}
