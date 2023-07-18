import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => {
      return item.food.id === food.id;
    });

    //nếu đã tồn tại trong cart thì tăng số lượng
    if (cartItem) {
      this.changeQuantity(food.id, (cartItem.quantity += 1));
      return;
    }

    //nếu chưa có push nó vào mảng
    this.cart.items.push(new CartItem(food));
  }

  //Xóa
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => {
      return item.food.id !== foodId;
    });
  }

  //thay đổi số lượng
  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find((item) => {
      return item.food.id === foodId;
    });
    if (!cartItem) {
      return;
    }
    //Tăng lên 1
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
  constructor() {}
}
