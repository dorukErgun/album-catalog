import { Album } from 'src/app/models/album';
import * as fromAlbums from './album.action';

describe('Albums Actions', () => {
  it('should create a loadAlbums action', () => {
    const action = fromAlbums.loadAlbums();
    expect(action.type).toBe('[Album] Load Albums');
  });

  it('should create a loadAlbumsSuccess action', () => {
    const albums: Album[] = [];
    const action = fromAlbums.loadAlbumsSuccess({ albums });
    expect(action.type).toBe('[Album] Load Albums Success');
    expect(action.albums).toBe(albums);
  });

  it('should create a loadAlbumsFailure action', () => {
    const error = 'Error';
    const action = fromAlbums.loadAlbumsFailure({ error });
    expect(action.type).toBe('[Album] Load Albums Failure');
    expect(action.error).toBe(error);
  });

  it('should create a loadAlbum action', () => {
    const id = 1;
    const action = fromAlbums.loadAlbum({ id });
    expect(action.type).toBe('[Album] Load Album');
    expect(action.id).toBe(id);
  });

  it('should create a loadAlbumSuccess action', () => {
    const album: Album = {
      id: 1,
      title: 'Test Album',
      viewCount: 0,
      thumbnail: '',
      imageUrl: ''
    };
    const action = fromAlbums.loadAlbumSuccess({ album });
    expect(action.type).toBe('[Album] Load Album Success');
    expect(action.album).toBe(album);
  });

  it('should create a loadAlbumFailure action', () => {
    const error = 'Error';
    const action = fromAlbums.loadAlbumFailure({ error });
    expect(action.type).toBe('[Album] Load Album Failure');
    expect(action.error).toBe(error);
  });
});