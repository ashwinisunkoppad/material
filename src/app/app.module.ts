import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatTableModule,
  MatMenuModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatInputModule,
    MatSelectModule,
     MatRadioModule,
      MatCardModule,
       MatGridListModule,
        MatSortModule,
        MatDialogModule,
        MatCheckboxModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {SidebarModule} from 'primeng/sidebar';
import {MatPaginatorModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    CheckboxComponent,
    DemoComponent,
 ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    SidebarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
     MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
   MatDialogModule,
   MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


