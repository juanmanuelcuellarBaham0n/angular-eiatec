import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(page: number) {
    return this.httpClient.get(`${environment.base}/list?page=${page}`)
  }

  addData(body: any) {
    return this.httpClient.post(`${environment.base}/add`, body)
  }

  editData(body: any, id: number) {
    return this.httpClient.put(`${environment.base}/edit/${id}`, body)
  }

  deleteData(id: number) {
    return this.httpClient.delete(`${environment.base}/delete/${id}`)
  }

}
