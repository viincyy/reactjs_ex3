import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  constructor() { }
  public name:string = "Cybersoft";
  public objHV:any = {
    name: 'Cybersoft',
    age: 19
  }
  ngOnInit(): void {
  }
  ChangeName(obj): void{
    this.objHV.name = obj.value;
  }
}
