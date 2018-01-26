import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'room',component:ChatRoomComponent},
    {path:'',redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}