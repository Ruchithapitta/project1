import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruchitha',
  templateUrl: './ruchitha.component.html',
  styleUrls: ['./ruchitha.component.scss']
})
export class RuchithaComponent implements OnInit {
  displayComponent = "good night";
  creating = "months";
  months=["january","february","march","april","may",
  "june","july","august","september","october","nov","dec"];
  isavailable=false;

  constructor() { }

  ngOnInit(): void {
  }

}
