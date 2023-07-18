import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fs.getAll().filter((food) => {
          return food.name
            .toLowerCase()
            .includes(params['searchItem'].toLowerCase()); //lấy ra mảng các phần tử có chứa giá trị searchItem
        });
      } else if (params['tag']) {
        //khi url thay đổi là tag thì gọi đến cái này
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.fs.getAll(); //lấy ra tất cả ảnh bên service
      }
    });
    // console.log(this.foods);
  }
}

// - this.route.params.subscribe((params) => { ... });: Bạn đang đăng ký một Observable để theo dõi sự thay đổi của tham số URL
// trong đường dẫn. Khi tham số thay đổi, đoạn mã trong hàm subscribe sẽ được thực thi.

// - if (params['searchItem']) { ... }: Bạn kiểm tra xem tham số searchItem có tồn tại hay không. Nếu có, bạn tiến hành lọc
// các mục trong danh sách foods dựa trên giá trị searchItem.
