import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  com = "$11.25";
  org = "$12.50";
  net = "$14.50";
  co = "$11.50";
  info = "$9.00";
  xyz = "$0.99";

  constructor() { }

  ngOnInit(): void {
  }

}
