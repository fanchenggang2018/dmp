import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [MainComponent, HeaderComponent, DetailComponent]
})
export class MainModule { }
