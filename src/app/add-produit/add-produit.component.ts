import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../service/produits.service';
import { Router } from '@angular/router';
import{ Produit } from '../model/produit.model'
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  currentProduct:Produit;
  mode: number=1;
  constructor(private produitsService:ProduitsService, private router:Router) { }

  ngOnInit(): void {
  }
  onNewProduct(){
    this.mode = 1;
  }
  on

  onSaveProduit(data:any){
    this.produitsService.saveProduit(this.produitsService.host+"/produits",data)
    .subscribe(
      res => {
        console.log(res);
        console.log(data);
        this.currentProduct = res
        this.mode = 2;
        // this.router.navigateByUrl("/produits");

      },
      err => {
        console.log(err);
      }
    );

  }
}
