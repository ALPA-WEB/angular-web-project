
import { NgModule } from '@angular/core';



import { ConcilRoutingModule, routedComponents } from './concil-routing.module';
import { ThemeModule  } from '../../@theme/theme.module';

// import { UiFeaturesModule } from '../ui-features/ui-features.module';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        ConcilRoutingModule,
        ThemeModule,
        Ng2SmartTableModule,
        // UiFeaturesModule,
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [
      SmartTableService,
    ],
})
export class ConcilModule {


}
