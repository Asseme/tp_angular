import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProduitsService} from '../service/produits.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any;
  private size:number=2;
  public currentPage:number=0;
  public totalPages:number=0;
  pages:Array<number>;
  private currentKeyword:string="";
  constructor(private produitsService: ProduitsService, private router:Router) { }

  ngOnInit(): void {
    this.chercherProduit();
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
    /* this.onGetProduct(); */
    this.chercherProduit()
  }

  onChercher(value:any){
    this.currentPage = 0;
    this.currentKeyword = value.keyword;
    this.chercherProduit();
  }

  chercherProduit(){
    this.produitsService.getProduitByKeyword(this.currentKeyword, this.currentPage, this.size)
    .subscribe(
      (data) => {
        this.produits = data._embedded.produits;
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
      }
    ) ;
  }

  onEditProduit(p:any){
    let url = p._links.self.href;
    this.router.navigateByUrl("edit-produit/"+btoa(url));
  }
  onDeleteProduit(p:any){
    let conf = confirm("Etes vous sur ?");
    if(conf){
      console.log(p._links.self.href);
      this.produitsService.deleteProduit(p._links.self.href)
      .subscribe(
        (data) => {
          this.chercherProduit();
        },
        (err) => {
          console.log(err);
        }
      ) ;
    }
  }
}
