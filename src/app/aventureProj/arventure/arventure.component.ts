import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-arventure',
  templateUrl: './arventure.component.html',
  styleUrls: ['./arventure.component.css']
})
export class ArventureComponent implements OnInit {
arventure:ArventureFeature;

  constructor(private route:Router,  private apiService:ApiServiceService) {
     this.arventure = new ArventureFeature(this.apiService);
   }
 
  ngOnInit(): void {
    this.arventure.start();
  }
 
} 