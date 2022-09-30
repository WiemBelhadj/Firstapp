import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../modals/Member';
import { MemberService } from '../service/member.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
// utiliser la classe hors composant 
export class MembersComponent implements OnInit {
  dataSource: MatTableDataSource <Member>; // members hiya titre mtaa tableau fil DB
  constructor(private MemberService: MemberService) { 
    //this.dataSource = this.MemberService.tab;
    this.dataSource = new MatTableDataSource (this.MemberService.tab);
  }
// Se lance avant constructeur 
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate', 'cv', 'type','actions'];

  Ondelete(id:string): void {
  //1. ouvrir la boite de dialogue 

  //2. attendre le résultat (le click de user)

  //3. tester sur le boutton (retour)

  //4. if click sur confirme : j'exécute le code below
    this.MemberService.deleteMemberById(id).then(()=>{this.fetchDataSource()});
  }

  fetchDataSource(): void {
    //tableau : variable locale  
    this.MemberService.getAllMembers().then((tableau) => {this.dataSource.data=tableau});
    //.data pour accéder au éléments du tableau dataSource  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //forcer le casting des type pour appliquer la méthode prédéfinie filter
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
