import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdministrationService {

    constructor(
        private http: HttpClient
    ) {}

    getCaseList( params?: any){
        return this.http.get<any>( `${environment.apiUrl}/administration/getCaseList`, { params });
    }

    getGlobalStat( params?: any){
        return this.http.get<any>( `${environment.apiUrl}/dashboard/getGlobalStat`, { params });
    }
}