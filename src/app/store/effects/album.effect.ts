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
            return AlbumActions.loadAlbumsSuccess({ albums: data.albums })
          }),          
          catchError((error) => {
            return of(AlbumActions.loadAlbumsFailure({ error: error.message }));
          })
        )
      )
    )
  );

  loadAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.loadAlbum),
      mergeMap((action) =>
        this.http.get<{ albums: Album[] }>(`assets/albums.json`).pipe(
          map((data) => {
            console.log("[Try]", data, action.id);
            const album = data.albums.find((a) => a.id === action.id);
            console.log("[Found]", album);
            if (album) {
              console.log("Success");
              return AlbumActions.loadAlbumSuccess({ album });
            } else {
              console.log("Error");
              return AlbumActions.loadAlbumFailure({ error: 'Album not found' });
            }
          }),
          catchError((error) => of(AlbumActions.loadAlbumFailure({ error: error.message })))
        )
      )
    )
  );
}
