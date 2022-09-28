import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../modals/Member';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
// utiliser la classe hors composant 
export class MembersComponent implements OnInit {
  dataSource:Member[]; // members hiya titre mtaa tableau fil DB
  constructor(private MemberService: MemberService) { 
    this.dataSource = this.MemberService.tab;
  }
// Se lance avant constructeur 
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate', 'cv', 'type','actions'];

}
