
import { NgModule } from '@angular/core';



import { ConcilRoutingModule, routedComponents } from './concil-routing.module';
import { ThemeModule  } from '../../@theme/theme.module';


import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {UiFeaturesModule} from '../ui-features/ui-features.module';
import {UniversityPieComponent} from './university/university-pie.component';
import {ChartsModule} from '../charts/charts.module';
import {AngularEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';


@NgModule({
    imports: [
        ConcilRoutingModule,
        ThemeModule,
        Ng2SmartTableModule,
        UiFeaturesModule,
        ChartsModule,
        AngularEchartsModule,
        NgxChartsModule,
        ChartModule,
    ],
    declarations: [
        ...routedComponents,
        UniversityPieComponent,
    ],
    providers: [
      SmartTableService,
    ],
})
export class ConcilModule {


}
