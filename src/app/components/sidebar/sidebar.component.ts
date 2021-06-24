import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  selectedList: string = "list"
  ngOnInit(): void {
  }

  onListClick(value: string) {
    this.selectedList = value
  }
}
