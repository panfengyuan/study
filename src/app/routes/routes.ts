import { Routes } from '@angular/router'; 
import { OneComponent } from '../component/one/one.component';
import { TwoComponent } from '../component/two/two.component';
import { PingduoComponent } from '../component/pingduo/pingduo.component';
import { NameEditorComponent } from '../component/name-editor/name-editor.component';
import { ProfileEditorComponent } from '../component/profile-editor/profile-editor.component';
import { HeroseHomeComponent } from '../component/heroesOUt/herose-home/herose-home.component';
import { DashboardComponent } from '../component/heroesOUt/dashboard/dashboard.component';
import { HeroseListComponent } from '../component/heroesOUt/herose-list/herose-list.component';
import { HeroseDetailComponent } from '../component/heroesOUt/herose-detail/herose-detail.component';
import { MessagesComponent } from '../component/heroesOUt/messages/messages.component';
import { OperatorComponent } from '../component/operator/operator.component'
import { DataSetClassComponent } from '../component/data-set-class/data-set-class.component';


export const routes: Routes =[ 
    { path:'', component: TwoComponent },
    { path:'one', component: OneComponent },
    { path:'two', component: TwoComponent },
    { path:'pingduo', component: PingduoComponent },
    { path:'nameeditor', component: NameEditorComponent },
    { path:'profileeditor', component: ProfileEditorComponent },
    { path:'herosehome', component: HeroseHomeComponent,children:[
        { path:'tour', component: DashboardComponent },
        { path:'heroeslist', component: HeroseListComponent },
        { path:'herosedetail/:id', component: HeroseDetailComponent },
        { path:'', component: DashboardComponent },
    ] },
    { path:'operator', component: OperatorComponent },
    { path:'data-set-class', component: DataSetClassComponent },
    { path:'**', component: TwoComponent },
]