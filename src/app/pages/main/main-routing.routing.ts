import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { InitGuardService } from 'src/app/services/init-guard.service';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ InitGuardService ],
    children:[
    ]
  }
];

export const MainRoutingRoutes = RouterModule.forChild(routes);
