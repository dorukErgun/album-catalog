// src/app/store/reducers/album.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { loadAlbums, loadAlbumsFailure, loadAlbumsSuccess } from '../actions/album.action';

export interface AlbumState {
  albums: Album[];
  loading: boolean;
  error: string | null;
}

export const initialAlbumsState: AlbumState = {
  albums: [],
  loading: false,
  error: null,
};

const _albumReducer = createReducer(
  initialAlbumsState,
  on(loadAlbums, (state) => ({ ...state, loading: true })),
  on(loadAlbumsSuccess, (state, { albums }) => ({ ...state, loading: false, albums })),
  on(loadAlbumsFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

export function albumReducer(state: AlbumState | undefined, action: Action) {
  return _albumReducer(state, action);
}