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

  getDirectionChemin(){
    return this.http.get(`https://localhost:7178/api/DirectionChemins`);
  }
  getEtatPetiteFille(){
    return this.http.get(`https://localhost:7178/api/EtatPersonnages`);
  }
}
