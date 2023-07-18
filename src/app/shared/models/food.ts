export class Food {
  id!: number; //Non-null Assertions
  price!: number;
  name!: string;
  favorite: boolean = false;
  stars: number = 0;
  tags?: string[]; //optional
  imageUrl!: string;
  cookTime!: string;
  origins!: string[];
}

// - Dấu chấm than (!) được sử dụng để khai báo một biến và khẳng định rằng biến đó sẽ không bao giờ là null hoặc undefined.
//Điều này giúp TypeScript và Angular kiểm tra kiểu dữ liệu một cách chính xác và tránh các lỗi có thể xảy ra khi truy cập vào biến
//chưa được khởi tạo.
