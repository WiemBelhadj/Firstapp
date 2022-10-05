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
import { ConfirmDiamogComponent } from './confirm-diamog/confirm-diamog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EtudiantComponent,
    MemberFormComponent,
    ConfirmDiamogComponent,
    LayoutComponent,
    DashboardComponent,
    ArticlesComponent,
    ToolsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,MatIconModule,
    BrowserAnimationsModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,MatDialogModule,MatSidenavModule,MatToolbarModule,MatListModule,MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
