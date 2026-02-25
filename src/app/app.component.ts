import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet , RouterLinkActive} from '@angular/router';
import { ChildComponent } from './child/child.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective } from './CustomDirectives/setbackground.directive';
import { BgcolorDirective } from './CustomDirectives/bgcolor.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { Component1Component } from './service-components/component1/component1.component';
import { Component2Component } from './service-components/component2/component2.component';
import { FormsModule } from '@angular/forms';
// import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { TemplateformsComponent } from "./templateforms/templateforms.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIWorksComponent } from './api-works/api-works.component';
import { AuthenNAuthorComponent } from './authen-n-author/authen-n-author.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LearningRxjsComponent } from "./learning-rxjs/learning-rxjs.component";






@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
    APIWorksComponent,
    MatTableComponent,
    FormsModule,
    RouterLink,
    BgcolorDirective,
    HttpClientModule,
    RouterLinkActive,
    HostListenerComponent,
    // LazyLoadingComponent,
    RouterOutlet,
    ChildComponent,
    TemplateReferenceVariableComponent,
    SetBackgroundDirective,
    ViewChildComponent,
    NgContentComponent,
    ContentChildComponent,
    CommonModule,
    Component2Component,
    Component1Component,
    TemplateformsComponent,
    AuthenNAuthorComponent,
    DialogboxComponent,
    LearningRxjsComponent
]
})
export class AppComponent implements OnInit {

  constructor(private dialog : MatDialog){
    

  }
  ngOnInit(): void {
    
  }

  title = 'Angular17';


  parentdata:string ="Hello, everyone!"

  recievedfromchild:string = "";

  phones=["Iphone", "Samsung" , "Oneplus", "Xiaomi"];

  par_event(data:string){
    this.recievedfromchild = data;
    console.log("data got from ");
  }

  opendialog(){
    this.dialog.open(DialogboxComponent, {
      width:'50%',
      height: '400px'
    })
  }
 

}
