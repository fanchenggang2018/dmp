import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import {MainRoutingRoutes} from '../main/main-routing.routing';
import { TestComponent } from '../test/test.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingRoutes
  ],
  declarations: [MainComponent, HeaderComponent, DetailComponent,TestComponent],
  exports: [RouterModule]
})

export class MainModule { }
