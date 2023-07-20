import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fs: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = fs.getFoodById(params['id']); //nếu thấy url thay đổi thì gửi id lấy được từ url cho getFoodById lấy dữ liệu
      }
    });
  }

  ngOnInit(): void {
    console.log(this.food);
  }

  addToCart() {
    //lấy ra được food từ trang detail(ở trên được lấy từ url)
    this.cartService.addToCart(this.food);
    //chuyển hướng sang đường dẫn /cart-page bằng Router
    this.router.navigateByUrl('/cart-page');
  }
}
