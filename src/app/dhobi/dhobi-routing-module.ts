import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DhobiComponent } from './dhobi.component';

const routes: Routes = [
    {
        path: '',
        component: DhobiComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class dhobiRoutingModule {}
