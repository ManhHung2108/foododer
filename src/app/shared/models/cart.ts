import { CartItem } from './cartItem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price; //get price bên lớp cartItem
    });
    return totalPrice;
  }

  get totalFood(): number {
    let totalFood = 0;
    this.items.forEach((item) => {
      totalFood += item.quantity; //get price bên lớp cartItem
    });
    return totalFood;
  }
}
