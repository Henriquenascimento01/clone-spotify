import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {

  menuSelected = 'Home';

  playlists: IPlaylist[] = [];

  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic;

  constructor(private spotifyServices: SpotifyService) { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  clickButton(button: string) {
    this.menuSelected = button;
  }


  async getPlaylist() {
    this.playlists = await this.spotifyServices.getPlaylistUser();
  }
}
