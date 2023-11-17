import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { SpotifyService } from "../services/spotify.service";

export const userIsLoggedInResolver = () => new Promise(async (resolve, reject) => {
    const spotifyService = inject(SpotifyService);
    const router = inject(Router);

    const notAuthenticated = () => {
        localStorage.clear();
        router.navigateByUrl('/login');
        reject('USER NOT AUTHENTICATED!');
        return false;
    }

    const token = localStorage.getItem('token');

    if (!token) {
        return notAuthenticated();
    }

    const userInitialized = await spotifyService.initializeUser();
    if (userInitialized)
        resolve(true);
    else
        resolve(notAuthenticated());

    return false;
});
