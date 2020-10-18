import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-for',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css'],
})
export class DirectiveNgForComponent implements OnInit {
  public DanhSachSinhVien: Array<any> = [
    {
      MaSV: '01',
      tenSV: 'Cybersoft',
      tuoi: 15,
    },
    {
      MaSV: '02',
      tenSV: 'Cybersoft2',
      tuoi: 16,
    },
    {
      MaSV: '03',
      tenSV: 'Cybersoft3',
      tuoi: 17,
    },
  ];
  constructor() {}
  ThemSinhVien(maSV: string, hoTen: string, tuoi: number): void {
    this.DanhSachSinhVien.push({
      MaSV: maSV,
      tenSV: hoTen,
      tuoi: tuoi,
    });
  }
  ngOnInit(): void {}
}
