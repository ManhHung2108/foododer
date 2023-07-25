import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { AthserviceService } from '../services/Athenticated/athservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart!: Cart;
  //Ẩn hiện menuUsers
  isAdminUser = false;

  constructor(
    private cartService: CartService,
    private service: AthserviceService
  ) {
    this.setCart();
  }

  ngOnInit(): void {
    if (this.service.getUserRole() === 'admin') {
      this.isAdminUser = true;
    } else {
      this.isAdminUser = false;
    }
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

  isLoggedIn() {
    if (sessionStorage.getItem('userName') !== null) {
      return true;
    } else return false;
  }
}
