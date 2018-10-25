import { ServerURLInterceptor } from './core/server.url.interceptor.service';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginModule } from './pages/login/login.module';
import { InitGuardService } from './services/init-guard.service';
import { MainModule } from './pages/main/main.module';
import { MainRoutingRoutes } from './pages/main/main-routing.routing';
import { provideInterceptorService } from 'ng2-interceptors';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    MainRoutingRoutes,
    LoginModule,
    MainModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService,
    InitGuardService,
    provideInterceptorService([
      ServerURLInterceptor
    ])
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
