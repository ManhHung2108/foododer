import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Nothing Found!';
  @Input() resetLinkText: string = 'Reset';
  @Input() restLinkRoute: string = '/';

  constructor() {}

  ngOnInit(): void {}
}

// - [ ] (square brackets - binding syntax): Khi bạn sử dụng cú pháp [ ] trong Angular, bạn đang sử dụng "two-way binding"
// (ràng buộc hai chiều). Điều này có nghĩa là bạn có thể truyền dữ liệu từ thành phần cha xuống thành phần con (component
// input binding) và đồng thời lắng nghe và bắt sự thay đổi từ thành phần con để cập nhật lại dữ liệu trong thành phần cha
// (component output binding).
