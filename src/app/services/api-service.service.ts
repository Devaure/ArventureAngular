import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }


  getHistoire(id:number):Observable<object>{
    return this.http.get(`https://localhost:7178/api/Histoires/${id}`);
     
  }

  getMechant():Observable<object>{
    return this.http.get(`https://localhost:7178/api/AnimalMechants`);
  }

  getObjetsTrouves():Observable<object>{
    return this.http.get(`https://localhost:7178/api/ObjetTrouves`);
  }
  
  getEtatPetiteFille():Observable<object>{
    return this.http.get(`https://localhost:7178/api/EtatPersonnages`);
  }

  getPlaceCarte(lieu:string):Observable<object>{
    return this.http.get(`https://localhost:7178/api/Lieux/GetLieuByName?endroit=${lieu}`);
  }
  
  getHistoireSiAffame():Observable<object>{
    return this.http.get(`https://localhost:7178/api/TextCookies`);
  }

  getCarte():Observable<object>{
    return this.http.get(`https://localhost:7178/api/Cartes`);
  }
}
