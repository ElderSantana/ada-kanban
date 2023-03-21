import { RemoveCardModalComponent } from './kanban/components/remove-card-modal/remove-card-modal.component';
import { EditCardModalComponent } from './kanban/components/edit-card-modal/edit-card-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { UserService } from './kanban/services/user.service';
import { CardsService } from './kanban/services/cards.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanContainerComponent } from './kanban/containers/kanban-container/kanban-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './kanban/components/card/card.component';
import { AddCardModalComponent } from './kanban/components/add-card-modal/add-card-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    KanbanContainerComponent,
    AddCardModalComponent,
    EditCardModalComponent,
    RemoveCardModalComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [
    CardsService,
     UserService,
     HttpClient,
     BsModalService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
