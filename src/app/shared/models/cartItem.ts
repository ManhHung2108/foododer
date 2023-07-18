import { Food } from './food';
export class CartItem {
  food: Food;
  quantity: number = 1;

  constructor(food: Food) {
    this.food = food;
  }

  get price(): number {
    return this.food.price * this.quantity;
  }
}

// - food: Food;: Đây là một thuộc tính của lớp CartItem để lưu trữ thông tin về món ăn (Food) trong mục giỏ hàng.

// - quantity: number = 1;: Đây là một thuộc tính số nguyên (number) để lưu trữ số lượng của món ăn trong giỏ hàng.
//Giá trị mặc định của quantity là 1.

// - constructor(food: Food) { ... }: Đây là phương thức khởi tạo của lớp CartItem nhận một đối tượng Food làm đối số.
//Khi một đối tượng CartItem được tạo, food sẽ được gán bằng đối tượng Food được truyền vào và quantity sẽ được đặt là 1.

// - getPrice(): Number { ... }: Đây là phương thức getPrice() để tính giá của món ăn trong mục giỏ hàng.
//Phương thức này nhân giá của food với quantity và trả về kết quả.
