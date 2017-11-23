/**
 * Created by chou6 on 2017-11-20.
 */
/**
 * Created by chou6 on 2017-11-13.
 */
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule, routedComponents} from './auth-routing.module';

@NgModule({
    imports: [
        AuthRoutingModule,
    ],
    declarations: [
        LoginComponent,
        AuthComponent,
        ...routedComponents,
    ],
    exports: [
        LoginComponent,
        AuthComponent,
    ],

})
export class AuthModule {


}
