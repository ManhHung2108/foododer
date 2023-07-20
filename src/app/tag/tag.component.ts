import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  @Input()
  foodPgaeTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[] = [];
  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPgaeTags) {
      this.tags = this.fs.getAllTag();
    }
  }
}
