import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(
    private cartService: CartService,
    private foodSrevice: FoodService
  ) {
    //để sẵn dữ liệu để css, xóa sau khi css xong
    // let foods = foodSrevice.getAll();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[3]);
    // cartService.addToCart(foods[5]);

    //Khi component chạy thì gọi để khởi tạo hiển thị danh sách luôn
    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    this.cart = this.cartService.getCart();
  }

  //Lấy ra id của food trong cartItem để xóa
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //ReLoad data
  }

  changQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
