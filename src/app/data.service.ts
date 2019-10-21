import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://3df52e24.ngrok.io/api/Settings/GetDesignations';
  addUrl: string = 'https://3df52e24.ngrok.io/api/Settings/InsUpdateDesignation';
  delUrl: string = 'https://3df52e24.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';

  constructor(private _http: HttpClient) {}
  getAlldesignations() {
    return this._http.get(this.url);
  }
  getDeleteData(DesignationId) {
    console.log("sid:", DesignationId);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.delUrl + DesignationId, { headers: head });
  }
  adduser(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }
  editdesignation(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }


//   public globalGetService(url: string) {
//     return this._http.get(url).toPromise().
//       catch(e => {
//         //console.log("error happend", e);
//       });
//   }

//   public getAlldesignations(data: any) {
//     return this.globalGetService(this.url)
//         .then(data => {
//             return data;
//         });
// }
}
