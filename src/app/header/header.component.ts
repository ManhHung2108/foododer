import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
