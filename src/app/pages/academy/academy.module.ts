
import {NgModule} from '@angular/core';

import {ZerooneComponent} from './zeroone/zeroone.component';
import {FifoComponent} from './fifo/fifo.component';
import {AlpaComponent} from './alpa/alpa.component';
import {JaramComponent} from './jaram/jaram.component';
import {HycubeComponent} from './hycube/hycube.component';

import {AcadComponent} from './academy.component';
import {AcadRoutingModule, routedComponents} from './academy-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
// import {UiFeaturesModule} from '../ui-features/ui-features.module';

@NgModule({
    imports: [
        AcadRoutingModule,
        ThemeModule,
        // UiFeaturesModule,
    ],
    declarations: [
        AcadComponent,
        ZerooneComponent,
        FifoComponent,
        AlpaComponent,
        JaramComponent,
        HycubeComponent,
        ...routedComponents,
    ],
    exports: [
        AcadComponent,
        ZerooneComponent,
        FifoComponent,
        AlpaComponent,
        JaramComponent,
        HycubeComponent,
    ],

})
export class AcadModule {


}
