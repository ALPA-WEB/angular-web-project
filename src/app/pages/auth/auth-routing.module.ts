/**
 * Created by chou6 on 2017-11-20.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [{
        path: 'login',
        component: LoginComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }

export const routedComponents = [
    LoginComponent,
];
