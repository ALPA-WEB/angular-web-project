/**
 * Created by chou6 on 2017-11-21.
 */
/**
 * Created by chou6 on 2017-11-20.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcilComponent} from './concil.component';
import {IctComponent} from './ict/ict.component';
import {SoftwareComponent} from './software/software.component';
import {UniversityComponent} from './university/university.component';

const routes: Routes = [{
    path: '',
    component: ConcilComponent,
    children: [{
        path: 'ict',
        component: IctComponent,
    },
    {
        path: 'software',
        component: SoftwareComponent,
    },
    {
        path: 'university',
        component: UniversityComponent,
    },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConcilRoutingModule { }

export const routedComponents = [
    ConcilComponent,
    IctComponent,
    SoftwareComponent,
    UniversityComponent,
];
