import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AthserviceService } from './athservice.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AthserviceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //Check nếu đã loggedIn, và check quyền admin
    if (this.authService.isLoggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if (menu === 'users') {
          if (this.authService.getUserRole() === 'admin') {
            return true;
          } else {
            this.toastr.warning('Bạn không có quyền truy cập');
            this.router.navigate(['']);
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true; //Chấp nhận truy cập
      }
    } else {
      this.router.navigate(['login']); //chuyển về trang login
      return false; //từ chối truy cập
    }
  }
}
