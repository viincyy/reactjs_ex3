import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  templateUrl: './bai-tap-binding.component.html',
  styleUrls: ['./bai-tap-binding.component.css']
})
export class BaiTapBindingComponent implements OnInit {
  public Email:string = 'twowaybidning';
  public FullName: string = 'eventbinding';

  constructor() { }
  ChangFullName(fullname: string): void{
    this.FullName = fullname;
  }
  ngOnInit(): void {
  }

}
