import { Component, ViewChild } from '@angular/core';
import { AthserviceService } from '../services/Athenticated/athservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  constructor(private service: AthserviceService, private dialog: MatDialog) {
    this.loadUser();
  }

  userList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: Sort;

  //Danh sách tên các cột để sử dụng material table
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];

  loadUser() {
    //Observable đăng ký một objservable
    this.service.GetAll().subscribe((res) => {
      console.log(res);
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //show Dialog
  UpdateUser(id: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        usercode: id,
      },
    });

    //sau khi đóng thì load lại data
    popup.afterClosed().subscribe((res) => {
      this.loadUser();
    });
  }

  opendialog() {}
}
