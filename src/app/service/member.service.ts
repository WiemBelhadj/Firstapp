import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../modals/Member';

@Injectable({
  providedIn: 'root'
})

export class MemberService {

  constructor(private httpClient: HttpClient) { }

  public tab: Member[] = GLOBAL._DB.members;

  saveMember(member: Member): Promise<void> //le but de cette méthode est l'envoie d'une requete http afin d'ajouter une ligne dans le tableau 
  {
    const objectToInsert = {
      ...member,
      id: member.id?? Math.ceil(Math.random() * 10000).toString(),
      createDate:member.createDate?? new Date().toISOString(),
    };

    //afficher la nouvelle ligne en haut + le reste du tableau sans la ligne ajoutée en 1er lieu
    this.tab = [objectToInsert, ...this.tab.filter(item => item.id !== objectToInsert.id)];
    //ajout d'un retour car la fonction est de type void
    return new Promise(resolve => resolve());

    //this.httpClient.post<Member>('linktorestApi', member).toPromise() 
    //id yemchi fi linktorestApi

    //créer un tableau dans le service (copie de la BD) 
    // Ajouter l'element "member" dans le tableau du service : cache : les operations crud
  }
  getMemberById(currentID: string): Promise<Member> {
    //return this.httpClient.get<Member>('link').toPromise();
    return new Promise(resolve => resolve(
      this.tab.filter(item => item.id === currentID)[0] ?? null))
  }

 deleteMemberById(id: string):Promise<void>{
  //return this.httpClient.delete<void>('link').toPromise();
  this.tab=this.tab.filter(item => item.id != id);
  return new Promise(resolve => resolve());
 }


 getAllMembers():Promise<Member[]>{
  //return this.httpClient.get<Member[]>('link').toPromise();
  return new Promise(resolve => resolve(this.tab));
 }

}
