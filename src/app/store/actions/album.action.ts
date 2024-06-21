// src/app/store/actions/album.actions.ts
import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/models/album';

export const loadAlbums = createAction('[Album] Load Albums');
export const loadAlbumsSuccess = createAction(
  '[Album] Load Albums Success',
  props<{ albums: Album[] }>()
);
export const loadAlbumsFailure = createAction(
  '[Album] Load Albums Failure',
  props<{ error: string }>()
);
