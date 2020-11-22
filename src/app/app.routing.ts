import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'p1', component: P1Component, canActivate: [AuthGuard] },
    { path: 'p2', component: P2Component, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
