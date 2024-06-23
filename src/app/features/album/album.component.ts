import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { loadAlbum } from 'src/app/store/actions/album.action';
import { selectAlbumsError, selectAlbumsLoading, selectSelectedAlbum } from 'src/app/store/selectors/album.selector';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  album$: Observable<Album | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.album$ = this.store.select(selectSelectedAlbum);
    this.loading$ = this.store.select(selectAlbumsLoading);
    this.error$ = this.store.select(selectAlbumsError);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', id)
    this.store.dispatch(loadAlbum({ id }));
  }
}
