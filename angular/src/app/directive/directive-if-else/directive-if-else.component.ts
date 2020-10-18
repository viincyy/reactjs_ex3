import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.css'],
})
export class DirectiveIfElseComponent implements OnInit {
  status: boolean = true;
  thongBao: string = '';
  constructor() {}
  DangXuat(): void {
    this.status = false;
    this.thongBao = 'Đăng xuất thành công';
  }
  DangNhap(email: string, pass: string): void {
    if (email === 'cybersoft@gmail.com' && pass === '123456') {
      this.status = true;
      this.thongBao = 'Đăng nhập thành công';
    } else {
      this.status = false;
      this.thongBao = 'Email hoặc Password chưa chính xác!';
    }
  }
  ngOnInit(): void {}
}
