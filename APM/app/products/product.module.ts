import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { ProductListComponent }  from './product-list.component';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductFilterPipe }  from './product-filter.pipe';
import { ProductService }  from './product.service';
import { SharedModule }  from '../shared/shared.module';

import { ProductDetailGuard }  from './product-guard.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
                { path: 'product/:id', 
                    canActivate: [ProductDetailGuard ],
                    component: ProductDetailComponent },
        ])               
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}