import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../modals/Member';

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  constructor(private httpClient:HttpClient) { }
  public tab:Member[]=GLOBAL._DB.members;
  saveMember(member:Member):Promise<void> //le but de cette méthode est l'envoie d'une requete http afin d'ajouter une ligne dans le tableau 
    {const objectToInsert = {...member,
    id:Math.ceil(Math.random()*10000).toString(),
    createDate:new Date().toISOString(),
    };

//afficher la nouvelle ligne en haut + le reste du tableau sans la ligne ajoutée en 1er lieu
    this.tab=[objectToInsert,...this.tab.filter(item=>item.id!==objectToInsert.id)];
//ajout d'un retour car la fonction est de type void
    return new Promise(resolve => resolve());

  //this.httpClient.post<Member>('linktorestApi', member).toPromise() 

  //créer un tableau dans le service (copie de la BD) 
  // Ajouter l'element "member" dans le tableau du service : cache : les operations crud
}  

}
