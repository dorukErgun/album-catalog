import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { loadAlbums } from 'src/app/store/actions/album.action';
import { selectAlbumsError, selectAlbumsLoading, selectAllAlbums } from 'src/app/store/selectors/album.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    albums$: Observable<Album[]>;
    loading$: Observable<boolean>;
    error$: Observable<string | null>;
  
    constructor(private store: Store) {
      this.albums$ = this.store.select(selectAllAlbums);
      this.loading$ = this.store.select(selectAlbumsLoading);
      this.error$ = this.store.select(selectAlbumsError);
    }
  
    ngOnInit() {
        console.log("this.albums$",this.albums$, this.loading$, this.error$);
      this.store.dispatch(loadAlbums());
    }
}
