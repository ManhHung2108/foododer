import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AthserviceService } from '../services/Athenticated/athservice.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
})
export class UpdatepopupComponent implements OnInit {
  constructor(
    private fomBuilder: FormBuilder,
    private toastr: ToastrService,
    private service: AthserviceService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, //được gửi từ bên userList sang
    private dialog: MatDialogRef<UpdatepopupComponent>
  ) {}

  rolelist: any;
  editdata: any;
  //Gọi ngay sau khi component được khởi tạo
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res) => {
      this.rolelist = res;
    });

    if (this.data.usercode != null && this.data.usercode != '') {
      this.service.GetByCode(this.data.usercode).subscribe((res) => {
        //lấy ra được user cần sửa
        this.editdata = res;
        this.registerForm.setValue({
          id: this.editdata.id,
          name: this.editdata.name,
          password: this.editdata.password,
          email: this.editdata.email,
          gender: this.editdata.gender,
          role: this.editdata.role,
          isActive: this.editdata.isActive,
        });
      });
    }
  }

  registerForm = this.fomBuilder.group({
    id: this.fomBuilder.control(''),
    name: this.fomBuilder.control(''),
    password: this.fomBuilder.control(''),
    email: this.fomBuilder.control(''),
    gender: this.fomBuilder.control('male'),
    role: this.fomBuilder.control('', Validators.required),
    isActive: this.fomBuilder.control(false),
  });

  updateUser() {
    console.log(this.registerForm.value.isActive);
    if (this.registerForm.valid) {
      this.service
        .UpdateUser(this.registerForm.value.id, this.registerForm.value)
        .subscribe((res) => {
          this.toastr.success('Cập nhập thành công');
          //lấy ra ref của dialog bằng MatdiglogRef để xử lý đóng nó lại
          this.dialog.close();
        });
    } else {
      this.toastr.warning('Hãy chọn Role');
    }
  }
}

// - @Inject(MAT_DIALOG_DATA) public data: any: Đây là một biến được chú thích (annotated) bằng @Inject và có kiểu dữ liệu any.
// Trong ngữ cảnh này, @Inject được sử dụng để tiêm dữ liệu vào một biến từ một nguồn dữ liệu bên ngoài. Trong trường hợp này,
// nó có thể được sử dụng để truyền dữ liệu vào dialog (hộp thoại) thông qua tham số data khi mở dialog đó.
