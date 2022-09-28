import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
form:any;
currentID:any;
  // injection de dépendances ::  constructor(MemberService : MemberService) { }
  constructor(private MemberService : MemberService, private router:Router, private activatedRoute :ActivatedRoute) { }



// ngOnInit() assra3 ml Constructeur
  ngOnInit(): void {
    
    this.initForm(); // créer l'object avec ses 4 attributs


    //etape 1 : récupération de l'id de URL 
    this.currentID=this.activatedRoute.snapshot.params.id;
    //etape 2 : si id a une valeur => declancher la fct du serv
    if(!!this.currentID){
      this.MemberService.getMemberById(this.currentID).then(()=>{});
    }
    //getMemberById(id) => member
    //etape 3 : sinon appeler initForm()
    else this.initForm();


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
    this.MemberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(['./members'])});
    
  }


  // OnSub(): void {
  //   console.log(this.form.value);
  // }



}
