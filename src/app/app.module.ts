import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BasicInteractionComponent } from './basic-interaction/basic-interaction.component';
import { ParentComponent } from './other-interaction/parent/parent.component';
import { ChildComponent } from './other-interaction/child/child.component';
import { Parent1Component } from './ngOnchange/parent1/parent1.component';
import { Child1Component } from './ngOnchange/child1/child1.component';
import { Parent2Component } from './output/parent2/parent2.component';
import { Child2Component } from './output/child2/child2.component';
import { Child3Component } from './output/child3/child3.component';
import { Child4Component } from './output/child4/child4.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInteractionComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
