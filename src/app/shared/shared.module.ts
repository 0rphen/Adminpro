import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderComponent
    ],
    exports: [
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderComponent
    ]
})

export class SharedModule { }
