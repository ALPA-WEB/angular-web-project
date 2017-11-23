/**
 * Created by chou6 on 2017-11-21.
 */
/**
 * Created by chou6 on 2017-11-20.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarketComponent} from './market/market.component';
import {ConvComponent} from './convenience.component';

const routes: Routes = [{
    path: '',
    component: ConvComponent,
    children: [{
        path: 'market',
        component: MarketComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConvRoutingModule { }

export const routedComponents = [
    MarketComponent,
];
