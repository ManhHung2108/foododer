import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AthserviceService } from '../services/Athenticated/athservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fomBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: AthserviceService,
    private router: Router
  ) {}

  registerForm = this.fomBuilder.group({
    id: this.fomBuilder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.fomBuilder.control('', Validators.required),
    password: this.fomBuilder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})'),
      ])
    ),
    email: this.fomBuilder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.fomBuilder.control('male'),
    role: this.fomBuilder.control(''),
    isActive: this.fomBuilder.control(false),
  });

  proceedregisteration() {
    //Nếu hợp lệ
    if (this.registerForm.valid) {
      this.service.Proceedregister(this.registerForm.value).subscribe((res) => {
        this.toastr.success(
          'Làm ơn liên hện admin để cho phép truy cập',
          'Đăng ký thành công!'
        );
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Hãy nhập dữ liệu hợp lệ!');
    }
  }
}
