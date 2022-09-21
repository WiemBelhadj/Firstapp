import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../modals/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
// utiliser la classe hors composant 
export class MembersComponent implements OnInit {

  constructor() { }
// Se lance avant constructeur 
  ngOnInit(): void {
  }

  dataSource:Member[]=GLOBAL._DB.members ; // members hiya titre mtaa tableau fil DB
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate', 'cv', 'type','actions'];

}
