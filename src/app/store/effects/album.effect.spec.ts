// src/app/store/albums/albums.effects.spec.ts
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { AlbumEffects } from './album.effect';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as fromAlbums from '../actions/album.action';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Album } from 'src/app/models/album';

describe('Albums Effects', () => {
  let actions$: Observable<any>;
  let effects: AlbumEffects;
  let httpMock: HttpTestingController;
  let store: MockStore;

  const initialState = {
    albums: [],
    selectedAlbum: null,
    loading: false,
    error: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AlbumEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });

    effects = TestBed.inject(AlbumEffects);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);
  });

  it('should load albums successfully', (done) => {
    const albums: Album[] = [{ id: 1, title: 'Album 1', viewCount: 0, thumbnail: '', imageUrl: '' }];
    actions$ = of(fromAlbums.loadAlbums());

    effects.loadAlbums$.subscribe((action) => {
      expect(action).toEqual(fromAlbums.loadAlbumsSuccess({ albums }));
      done();
    });

    const req = httpMock.expectOne('assets/albums.json');
    expect(req.request.method).toBe('GET');
    req.flush({ albums });
  });

  it('should handle load albums failure', (done) => {
    const error = 'Http failure response for assets/albums.json: 500 Server Error';
    actions$ = of(fromAlbums.loadAlbums());

    effects.loadAlbums$.subscribe((action) => {
      expect(action).toEqual(fromAlbums.loadAlbumsFailure({ error }));
      done();
    });

    const req = httpMock.expectOne('assets/albums.json');
    req.flush(error, { status: 500, statusText: 'Server Error' });
  });

  it('should load a single album successfully', (done) => {
    const album: Album = { id: 1, title: 'Album 1', viewCount: 0, thumbnail: '', imageUrl: '' };
    actions$ = of(fromAlbums.loadAlbum({ id: 1 }));

    effects.loadAlbum$.subscribe((action) => {
      expect(action).toEqual(fromAlbums.loadAlbumSuccess({ album }));
      done();
    });

    const req = httpMock.expectOne('assets/albums.json');
    expect(req.request.method).toBe('GET');
    req.flush({ albums: [album] });
  });

  it('should handle load album failure', (done) => {
    const error = 'Http failure response for assets/albums.json: 500 Server Error';
    actions$ = of(fromAlbums.loadAlbum({ id: 1 }));

    effects.loadAlbum$.subscribe((action) => {
      expect(action).toEqual(fromAlbums.loadAlbumFailure({ error }));
      done();
    });

    const req = httpMock.expectOne('assets/albums.json');
    req.flush(error, { status: 500, statusText: 'Server Error' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
