import { albumReducer, AlbumState } from './album.reducer';
import * as fromAlbum from '../actions/album.action';

describe('Albums Reducer', () => {
  const initialState: AlbumState = {
    albums: [],
    selectedAlbum: null,
    loading: false,
    error: null,
  };

  it('should return the default state', () => {
    const action = { type: 'Unknown' } as any;
    const state = albumReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should set loading to true on loadAlbums', () => {
    const action = fromAlbum.loadAlbums();
    const state = albumReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should update albums and set loading to false on loadAlbumsSuccess', () => {
    const albums = [{ id: 1, title: 'Album 1', viewCount: 0, thumbnail: '', imageUrl: '' }];
    const action = fromAlbum.loadAlbumsSuccess({ albums });
    const state = albumReducer(initialState, action);
    expect(state.albums).toBe(albums);
    expect(state.loading).toBe(false);
  });

  it('should set error and loading to false on loadAlbumsFailure', () => {
    const error = 'Error';
    const action = fromAlbum.loadAlbumsFailure({ error });
    const state = albumReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });

  it('should set selectedAlbum and loading to false on loadAlbumSuccess', () => {
    const album = { id: 1, title: 'Album 1', viewCount: 0, thumbnail: '', imageUrl: '' };
    const action = fromAlbum.loadAlbumSuccess({ album });
    const state = albumReducer(initialState, action);
    expect(state.selectedAlbum).toBe(album);
    expect(state.loading).toBe(false);
  });

  it('should set error and loading to false on loadAlbumFailure', () => {
    const error = 'Error';
    const action = fromAlbum.loadAlbumFailure({ error });
    const state = albumReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });
});