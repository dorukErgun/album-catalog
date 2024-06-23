// src/app/store/actions/album.actions.ts
import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/models/album';

export const loadAlbums = createAction('[Album] Load Albums');
export const loadAlbumsSuccess = createAction('[Album] Load Albums Success', props<{ albums: Album[] }>());
export const loadAlbumsFailure = createAction('[Album] Load Albums Failure', props<{ error: string }>());

export const loadAlbum = createAction('[Album] Load Album', props<{ id: number }>());
export const loadAlbumSuccess = createAction('[Album] Load Album Success', props<{ album: Album }>());
export const loadAlbumFailure = createAction('[Album] Load Album Failure', props<{ error: string }>());
