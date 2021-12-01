import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  accessToken:any=null;
  userId:any =null;
}
