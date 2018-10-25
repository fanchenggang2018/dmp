import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { InitGuardService } from 'src/app/services/init-guard.service';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ InitGuardService ]
  }
];

export const MainRoutingRoutes = RouterModule.forChild(routes);
