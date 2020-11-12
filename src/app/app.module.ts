import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { InputOutputComponent } from './component/input-output/input-output.component';
import { TodoComponent } from './component/todo/todo.component';
import { TopTabScrollComponent } from './component/top-tab-scroll/top-tab-scroll.component';
import { OneComponent } from './component/one/one.component';
import { TwoComponent } from './component/two/two.component';
import { PingduoComponent } from './component/pingduo/pingduo.component';
import { NameEditorComponent } from './component/name-editor/name-editor.component';
import { ProfileEditorComponent } from './component/profile-editor/profile-editor.component';
import { HeroseHomeComponent } from './component/heroesOUt/herose-home/herose-home.component';
import { DashboardComponent } from './component/heroesOUt/dashboard/dashboard.component';
import { HeroseListComponent } from './component/heroesOUt/herose-list/herose-list.component';
import { HeroseDetailComponent } from './component/heroesOUt/herose-detail/herose-detail.component';
import { MessagesComponent } from './component/heroesOUt/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    TodoComponent,
    TopTabScrollComponent,
    OneComponent,
    TwoComponent,
    PingduoComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroseHomeComponent,
    DashboardComponent,
    HeroseListComponent,
    HeroseDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
