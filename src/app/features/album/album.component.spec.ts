import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { selectAlbumsError, selectAlbumsLoading, selectSelectedAlbum } from 'src/app/store/selectors/album.selector';
import { loadAlbum } from 'src/app/store/actions/album.action';
import { Album } from 'src/app/models/album';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let store: MockStore;
  const initialState = {
    albums: {
      albums: [],
      selectedAlbum: null,
      loading: false,
      error: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    store.overrideSelector(selectSelectedAlbum, null);
    store.overrideSelector(selectAlbumsLoading, false);
    store.overrideSelector(selectAlbumsError, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadAlbum action on init', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadAlbum({ id: 1 }));
  });

  it('should select album from the store', (done) => {
    const album: Album = {
      id: 1,
      title: 'Test Album',
      viewCount: 100,
      thumbnail: 'test-thumbnail-url',
      imageUrl: 'test-image-url',
    };
    store.overrideSelector(selectSelectedAlbum, album);

    component.album$.subscribe((selectedAlbum) => {
      expect(selectedAlbum).toEqual(album);
      done();
    });

    store.refreshState();
  });

  it('should select loading state from the store', (done) => {
    store.overrideSelector(selectAlbumsLoading, true);

    component.loading$.subscribe((loading) => {
      expect(loading).toBe(true);
      done();
    });

    store.refreshState();
  });

  it('should select error state from the store', (done) => {
    const error = 'Test error';
    store.overrideSelector(selectAlbumsError, error);

    component.error$.subscribe((errorState) => {
      expect(errorState).toBe(error);
      done();
    });

    store.refreshState();
  });
});
