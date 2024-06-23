// src/app/store/reducers/album.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { loadAlbum, loadAlbumFailure, loadAlbumSuccess, loadAlbums, loadAlbumsFailure, loadAlbumsSuccess } from '../actions/album.action';

export interface AlbumState {
  albums: Album[];
  loading: boolean;
  error: string | null;
  selectedAlbum: Album | null;
}

export const initialAlbumsState: AlbumState = {
  albums: [],
  selectedAlbum: null,
  loading: false,
  error: null,
};

const _albumReducer = createReducer(
  initialAlbumsState,
  on(loadAlbums, (state) => ({ ...state, loading: true })),
  on(loadAlbumsSuccess, (state, { albums }) => ({ ...state, loading: false, albums })),
  on(loadAlbumsFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(loadAlbum, (state) => ({ ...state, loading: true })),
  on(loadAlbumSuccess, (state, { album }) => ({ ...state, loading: false, selectedAlbum: album })),
  on(loadAlbumFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

export function albumReducer(state: AlbumState | undefined, action: Action) {
  return _albumReducer(state, action);
}