import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AthserviceService } from '../services/Athenticated/athservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AthserviceService,
    private router: Router
  ) {
    sessionStorage.clear(); //reset lại session
  }

  userData: any;

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.GetByCode(this.loginForm.value.username).subscribe((res) => {
        this.userData = res;
        console.log(this.userData);
        if (this.userData.password === this.loginForm.value.password) {
          if (this.userData.isActive) {
            sessionStorage.setItem('userName', this.userData.id);
            sessionStorage.setItem('userRole', this.userData.role);
            this.router.navigate(['']); //vào trang home
          } else {
            this.toastr.error(
              'Làm ơn liên hệ với admin',
              'Tài khoản không hoạt động'
            );
          }
        } else {
          this.toastr.error('Tài khoản hoặc mật khẩu không hợp lệ!');
        }
      });
    }
  }
}
