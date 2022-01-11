import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }


  getHistoire(id:number){
    return this.http.get(`https://localhost:7178/api/Histoires/${id}`);
     
  }

  getMechant():any{
    return this.http.get(`https://localhost:7178/api/AnimalMechants`);
  }

  getObjetsTrouves(){
    return this.http.get(`https://localhost:7178/api/ObjetTrouves`);
  }
  
  getEtatPetiteFille(){
    return this.http.get(`https://localhost:7178/api/EtatPersonnages`);
  }

  getPlaceCarte(lieu:string){
    return this.http.get(`https://localhost:7178/api/Lieux/GetLieuByName?endroit=${lieu}`);
  }
  
  getHistoireSiAffame(){
    return this.http.get(`https://localhost:7178/api/TextCookies`);
  }

  getCarte(){
    return this.http.get(`https://localhost:7178/api/Cartes`);
  }
}
