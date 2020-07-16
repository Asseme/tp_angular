import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  public host:String="http://localhost:8080/"
  constructor(private httpClient: HttpClient) { }
  getProduits(page:number,size:number):Observable<any>{
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }
}
