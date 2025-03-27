import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: '404', component: NotFoundComponent },
    {
        path: 'login',
        component: LoginComponent
    }
];
