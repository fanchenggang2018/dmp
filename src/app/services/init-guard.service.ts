import { USER_INFO } from './local-storage.namespace';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class InitGuardService implements CanActivate {
  constructor(
    private store: LocalStorageService,
    private router: Router,
  ) { }
  /**
   * 链接激活前验证用户登陆信息是否在本地存在，如果存在，直接进入main页面，否则进入登陆页面
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const init = !!this.store.get(USER_INFO);

    if (state.url.includes('login') && init) {
      this.router.navigateByUrl('/main');
      return false;
    }
    if (!state.url.includes('login') && !init) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
