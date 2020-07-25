import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../service/produits.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  currentProduct:Produit;
  url:string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private produitService: ProduitsService) { }

  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.produitService.getProduit(this.url)
    .subscribe(
      (data) => this.currentProduct = data,
      (err) => console.log(err)
    );

  }

  onUpdateProduit(value){
    this.produitService.updateProduit(this.url,value)
    .subscribe(
      (data) => {/* alert("Mise à jour éffectuée avec succès"); */this.router.navigateByUrl("/produits")},
      (err) => console.log(err)
    );
  }

}
