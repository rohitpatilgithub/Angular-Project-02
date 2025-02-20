import { Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'app-main',
        pathMatch:'full'
    },{
        path:'app-main',
        component:MainComponent
    }
];
