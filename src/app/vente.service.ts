import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vente } from "./vente";

@Injectable ({
    providedIn:'root'
})
export class VenteService{
    private apiServeUrl = '';

    constructor(private http: HttpClient){ }
    
    public getVente(): Observable<Vente[]>{
        return this.http.get<Vente[]>(`${this.apiServeUrl}/vente/all`);
    }
    public addVente(vente: Vente): Observable<Vente[]>{
        return this.http.post<Vente[]>(`${this.apiServeUrl}/vente/add`,vente);
    }
    public updateVente(vente: Vente): Observable<Vente[]>{
        return this.http.put<Vente[]>(`${this.apiServeUrl}/vente/update`,vente);
    }
    public deleteVente(vente: Vente): Observable<Vente[]>{
        return this.http.delete<Vente[]>(`${this.apiServeUrl}/vente/delete${vente}`);
    }
}