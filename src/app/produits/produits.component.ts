import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProduitsService} from '../service/produits.service'
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any;
  private size:number=2;
  private currentPage:number=0;
  public totalPages:number=0;
  pages:Array<number>
  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
  }

  onGetProduct():void{

   this.produitsService.getProduits(this.currentPage, this.size)
   .subscribe(
     (data)=>{
       this.produits = data._embedded.produits;
       this.totalPages = data['page'].totalPages;
       this.pages = new Array<number>(this.totalPages);
       console.log(this.totalPages);
     },
     (err)=>{
       console.log(err)
     }
   )
  }

  onPageProduct(i):void{
    this.currentPage = i;
    this.onGetProduct();
  }
}
