import { Component, OnInit } from '@angular/core';
import { Vente } from '../vente';

@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent implements OnInit {
   
  vente: Vente[] = [];
  
  constructor(){}

  ngOnInit(): void {
      
  }



}
