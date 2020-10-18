import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.css'],
})
export class DirectiveIfComponent implements OnInit {
  private status: boolean = true;
  constructor() {}
  Hidden(): void {
    this.status = false;
  }
  Show(): void {
    this.status = true;
  }
  ngOnInit(): void {}
}
