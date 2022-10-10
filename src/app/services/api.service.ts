import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

postEmployye(data : any){
    return this.http.post<any>("http://localhost:3000/productList",data).pipe()
  }
// getEmployee(){
// return this.http.get<any>("http://localhost:3000/productList");
// }
// putEmployee(data:any,id: number){
//   return this.http.put<any>("http://localhost:3000/productList/"+id,data);
// }
// deleteEmployee(id:number){
//   return this.http.delete<any>("http://localhost:3000/productList/"+id);
// }

}