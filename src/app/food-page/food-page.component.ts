import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private fs: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = fs.getFoodById(params['id']); //nếu thấy url thay đổi thì gửi id lấy được từ url cho getFoodById lấy dữ liệu
      }
    });
  }

  ngOnInit(): void {
    console.log(this.food);
  }
}
