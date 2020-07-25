import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  public host:String="http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }
  getProduits(page:number,size:number):Observable<any>{
    return this.httpClient.get<any>(this.host+"/produits?page="+page+"&size="+size);
  }
  getProduitByKeyword(keyword:string, page:number, size:number):Observable<any>{
    return this.httpClient.get<any>(this.host+"/produits/search/byDesignationPage?mc="+keyword+"&page="+page+"&size="+size);
  }

  deleteProduit(url){
     return this.httpClient.delete(url);
  }

  saveProduit(url,data):Observable<Produit>{
    return this.httpClient.post<Produit>(url,data) ;
  }

  getProduit(url):Observable<Produit>{
    return this.httpClient.get<Produit>(url);
  }

  updateProduit(url,data):Observable<Produit>{
    return this.httpClient.put<Produit>(url,data);
  }
}
