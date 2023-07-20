import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: string): Food {
    let obj = this.getAll().find((food) => {
      console.log(food.id, id);
      return food.id.toString() == id; //so sánh này nó sẽ ko cần so sánh phải cùng kiểu như ===
    })!; //non-null Assertions: khẳng định ko null
    console.log(obj);
    return obj;
  }

  getAllFoodByTag(tag: string): Food[] {
    // if (tag == 'All') {
    //   return this.getAll();
    // } else {
    //   return this.getAll().filter((food) => {
    //     //trả về mảng mới theo tag
    //     return food.tags?.includes(tag); //tìm xem tag có trong mảng tags không
    //   });
    // }

    //viết ngắm
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag)); //tìm xem tag có trong mảng tags không
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: this.getAll().length },
      { name: 'FastFood', count: this.getCountTag('FastFood') },
      { name: 'SlowFood', count: this.getCountTag('SlowFood') },
      { name: 'Lunch', count: this.getCountTag('Lunch') },
      { name: 'Dinner', count: this.getCountTag('Dinner') },
      { name: 'Breakfast', count: this.getCountTag('Breakfast') },
    ];
  }

  getCountTag(name: string): number {
    let tagItems = this.getAll().filter((item) => {
      return item.tags?.includes(name);
    });
    return tagItems.length;
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Bánh mì dân tổ',
        cookTime: '10-15',
        price: 10,
        favorite: true,
        origins: ['Việt Nam'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Bánh mì', 'Lunch'],
      },
      {
        id: 2,
        name: 'Phở bò',
        cookTime: '10-15',
        price: 30,
        favorite: false,
        origins: ['Việt Nam'],
        stars: 5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Phở', 'Lunch'],
      },
      {
        id: 3,
        name: 'Bún trộn Nam bộ',
        cookTime: '15-20',
        price: 40,
        favorite: false,
        origins: ['Việt Nam'],
        stars: 4,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Bún trộn Nam Bộ', 'Lunch'],
      },
      {
        id: 4,
        name: 'Bún chả Hà Nội',
        cookTime: '5-10',
        price: 35,
        favorite: false,
        origins: ['Việt Nam'],
        stars: 5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['SlowFood', 'Bún chả', 'Lunch'],
      },
      {
        id: 5,
        name: 'Bò xào cần tỏi',
        cookTime: '20-25',
        price: 60,
        favorite: true,
        origins: ['Việt Nam'],
        stars: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Bò xào', 'Lunch'],
      },
      {
        id: 6,
        name: 'Bánh Hamburger',
        cookTime: '10-15',
        price: 50,
        favorite: true,
        origins: ['England'],
        stars: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Hamburger', 'Breakfast'],
      },
      {
        id: 7,
        name: 'Trứng ốp',
        cookTime: '10-15',
        price: 20,
        favorite: true,
        origins: ['Việt Nam'],
        stars: 4,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Trứng', 'Dinner'],
      },
      {
        id: 8,
        name: 'Bánh mì kẹp trứng',
        cookTime: '5-10',
        price: 30,
        favorite: true,
        origins: ['Italia'],
        stars: 3.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Breakfast'],
      },
    ];
  }
}
