import { Component } from '@angular/core';
import { Album } from 'src/types/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  albums: Album[] = [
    {
        "id": 1,
        "title": "Vultures 1",
        "viewCount": 23405,
        "thumbnail": "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 2,
        "title": "Donda (Deluxe)",
        "viewCount": 5340523323,
        "thumbnail": "https://via.assets.so/album.png?id=2&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=2&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 3,
        "title": "Donda",
        "viewCount": 734053232,
        "thumbnail": "https://via.assets.so/album.png?id=3&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=3&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 4,
        "title": "JESUS IS KING",
        "viewCount": 73,
        "thumbnail": "https://via.assets.so/album.png?id=4&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=4&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 5,
        "title": "ye",
        "viewCount": 13403235,
        "thumbnail": "https://via.assets.so/album.png?id=5&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=5&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 6,
        "title": "The Life Of Pablo",
        "viewCount": 440335,
        "thumbnail": "https://via.assets.so/album.png?id=6&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=6&q=95&w=360&h=360&fit=fill"
    },
    {
        "id": 6,
        "title": "Yeezus",
        "viewCount": 993405,
        "thumbnail": "https://via.assets.so/album.png?id=6&q=95&w=360&h=360&fit=fill",
        "imageUrl": "https://via.assets.so/album.png?id=6&q=95&w=360&h=360&fit=fill"
    }
  ] 

}
