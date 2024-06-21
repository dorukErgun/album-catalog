import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AlbumActions from '../actions/album.action';
import { Album } from 'src/app/models/album';

@Injectable()
export class AlbumEffects {
  constructor(private actions$: Actions, private http: HttpClient) {
  }

  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.loadAlbums),
      mergeMap(() =>
        this.http.get<{ albums: Album[] }>('assets/albums.json').pipe(
          map((data) => {
            console.log("hettt",data);
            return AlbumActions.loadAlbumsSuccess({ albums: data.albums })
          }),          
          catchError((error) => {
            console.error('Error loading albums', error); // Logging
            return of(AlbumActions.loadAlbumsFailure({ error: error.message }));
          })
        )
      )
    )
  );
}
