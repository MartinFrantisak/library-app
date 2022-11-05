import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
