import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DemoComponent } from './demo/demo.component';
const routes: Routes = [

{path:'',component:DemoComponent},
{path:'case1',component:SidenavComponent},
{path:'case2',component:NavbarComponent},
{path:'case3',component:CheckboxComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
