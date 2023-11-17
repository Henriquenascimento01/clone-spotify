import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    this.verifyTokenUrlCallback();
  }

  verifyTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();

    if (!!token) {
      this.spotifyService.toDefineAcessToken(token);
      this.router.navigate(['/player']);
    }

  }

  openLoginPage() {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
