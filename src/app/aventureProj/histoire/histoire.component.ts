import { Component, OnInit } from '@angular/core';
import { ArventureFeature } from 'src/app/class/ArventureFeature';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {

  arventure = new ArventureFeature();
  constructor() { }

  ngOnInit(): void {
    this.arventure.start();
  }

}
