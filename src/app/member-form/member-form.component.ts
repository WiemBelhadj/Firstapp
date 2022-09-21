import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
form:any;
  // injection de dépendances ::  constructor(MemberService : MemberService) { }
  constructor(private MemberService : MemberService) { }



// ngOnInit() assra3 ml Constructeur
  ngOnInit(): void {
    this.initForm(); // créer l'object avec ses 4 attributs
  }

  initForm(): void {
    this.form = new FormGroup({
      cin : new FormControl(null, Validators.required),
      name : new FormControl(null, Validators.required),
      cv : new FormControl(null, Validators.required),
      type : new FormControl(null, Validators.required)
    });
  }

  OnSub(): void {
    console.log(this.form.value);
    // appeler la fonction saveMember du service pour ajouter la ligne dans le tableau
    const objectToSubmit = this.form.value;
    this.MemberService.saveMember(objectToSubmit);////
  }


  // OnSub(): void {
  //   console.log(this.form.value);
  // }



}
