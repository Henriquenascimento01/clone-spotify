import { Routes } from "@angular/router";
import { userIsLoggedInResolver } from "./resolvers/logged-user.resolver";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full',
    },
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
        resolve: {
            loggedUser: userIsLoggedInResolver,
        }
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    }
];
