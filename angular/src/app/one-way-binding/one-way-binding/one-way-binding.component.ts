import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  public name:string = "Cybersoft";
  public objHV:any = {
    name: 'Cybersoft',
    age: 19
  }
  constructor() { }
  ChangeName(obj: any): void{
    this.objHV.name = obj.value;
  }
  ngOnInit(): void {
  }

}
