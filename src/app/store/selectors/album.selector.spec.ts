import { selectAllAlbums, selectAlbumsLoading, selectAlbumsError, selectSelectedAlbum } from './album.selector';
import { AlbumState } from '../reducers/album.reducer';

describe('Albums Selectors', () => {
  const initialState: AlbumState = {
    albums: [],
    selectedAlbum: null,
    loading: false,
    error: null,
  };

  it('should select all albums', () => {
    const result = selectAllAlbums.projector(initialState);
    expect(result).toBe(initialState.albums);
  });

  it('should select loading state', () => {
    const result = selectAlbumsLoading.projector(initialState);
    expect(result).toBe(initialState.loading);
  });

  it('should select error state', () => {
    const result = selectAlbumsError.projector(initialState);
    expect(result).toBe(initialState.error);
  });

  it('should select selected album', () => {
    const result = selectSelectedAlbum.projector(initialState);
    expect(result).toBe(initialState.selectedAlbum);
  });
});