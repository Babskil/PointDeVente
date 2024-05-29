import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vente } from './vente';
import { VenteService } from './vente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public vente: Vente[] = [];

  constructor(private venteService: VenteService){ }
  ngOnInit() {
    this.getVente();
      
  }
  public getVente(): void{
    this.venteService.getVente().subscribe(
      (response: Vente[]) =>{
        this.vente = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
