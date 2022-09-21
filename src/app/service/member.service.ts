import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../modals/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
saveMember(member:any):Promise<Member> //le but de cette méthode est l'envoie d'une requete http afin d'ajouter une ligne dans le tableau 
{
  //this.httpClient.post<Member>('linktorestApi', member).toPromise() 

  //créer un tableau dans le service (copie de la BD) 
  // Ajouter l'element "member" dans le tableau du service : cache : les operations crud
}  
constructor(private httpClient:HttpClient) { }
}
