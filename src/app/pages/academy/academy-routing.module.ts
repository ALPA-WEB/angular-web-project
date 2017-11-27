/**
 * Created by chou6 on 2017-11-21.
 */
/**
 * Created by chou6 on 2017-11-20.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Zero_oneComponent} from './zero_one/zero_one.component';
import {FifoComponent} from './fifo/fifo.component';
import {AlpaComponent} from './alpa/alpa.component';
import {JaramComponent} from './jaram/jaram.component';
import {HycubeComponent} from './hycube/hycube.component';

import {AcadComponent} from './academy.component';

const routes: Routes = [{
    path: '',
    component: AcadComponent,
    children: [{
        path: 'zero_one',
        component: Zero_oneComponent,
    },
    {
        path: 'fifo',
        component: FifoComponent,
    },
    {
        path: 'alpa',
        component: AlpaComponent,
    },
    {
        path: 'jaram',
        component: JaramComponent,
    },
    {
        path: 'hycube',
        component: HycubeComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AcadRoutingModule { }

export const routedComponents = [
];
