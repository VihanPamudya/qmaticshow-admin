import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getDeviceTypes() {
    return this.http.get<any>(`/rest/digitalsignage/branches/1/displayPoints/deviceTypes/Cinematic/`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
