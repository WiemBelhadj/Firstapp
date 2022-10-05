import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { LayoutComponent } from './layout/layout.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [{
  path:'members',
  pathMatch: 'full',
  component: MembersComponent,
},{
  path:'create',
  pathMatch: 'full',
  component:MemberFormComponent,
},
{
  path:'members/:id/edit',
  pathMatch: 'full',
  component:MemberFormComponent
},
{
  path:'dashboard',
  pathMatch: 'full',
  component:LayoutComponent,
},
{
  path:'articles',
  pathMatch: 'full',
  component:ArticlesComponent,
},
{
  path:'tools',
  pathMatch: 'full',
  component:LayoutComponent,
},
{
  path:'events',
  pathMatch: 'full',
  component:LayoutComponent,
},
{
  path:'**',
  redirectTo:'/members',
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
