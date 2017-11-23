
import {NgModule} from '@angular/core';
import {MarketComponent} from './market/market.component';
import {ConvComponent} from './convenience.component';
import {ConvRoutingModule, routedComponents} from './convenience-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import {UiFeaturesModule} from '../ui-features/ui-features.module';

@NgModule({
    imports: [
        ConvRoutingModule,
        ThemeModule,
        UiFeaturesModule,
    ],
    declarations: [
        ConvComponent,
        MarketComponent,
        ...routedComponents,
    ],
    exports: [
        ConvComponent,
        MarketComponent,
    ],

})
export class ConvModule {


}
