// src/app/store/selectors/album.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlbumState, initialAlbumsState } from '../reducers/album.reducer';

export const selectAlbumState = createFeatureSelector<AlbumState>('albums');

export const selectAllAlbums = createSelector(
  selectAlbumState,
  (state: AlbumState = initialAlbumsState) => state.albums
);
export const selectAlbumsLoading = createSelector(
  selectAlbumState,
  (state: AlbumState = initialAlbumsState) => state.loading
);
export const selectAlbumsError = createSelector(
  selectAlbumState,
  (state: AlbumState = initialAlbumsState) => state.error
);
