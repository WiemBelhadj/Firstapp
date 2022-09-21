import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EtudiantComponent } from './members/etudiant/etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EtudiantComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,MatIconModule,
    BrowserAnimationsModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
