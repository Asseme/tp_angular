import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';


const routes: Routes = [
  {
    path:"produits",
    component:ProduitsComponent
  },
  {
    path:"new",
    component:AddProduitComponent
  },
  {
    path:"",
    redirectTo:"/produits",
    pathMatch:"full"
  },
  {
    path:"edit-produit/:id",
    component:EditProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
