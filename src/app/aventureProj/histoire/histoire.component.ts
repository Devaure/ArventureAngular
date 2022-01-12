import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})

export class HistoireComponent implements OnInit {
histoire:any;
  constructor(private route:Router, private apiServ:ApiServiceService) { }

  ngOnInit(): void {
  this.getHistoireService();
  }

  redirectPerso(){
    localStorage.setItem("toto", "0");
      this.route.navigateByUrl("/arventure");
  }

  getHistoireService(){
    this.apiServ.getHistoire(1).subscribe(response =>{
        this.histoire = response;
        console.log(response)
    })
  }
}
