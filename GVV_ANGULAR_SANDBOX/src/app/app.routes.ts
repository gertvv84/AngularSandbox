import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TestApi } from './test-api/test-api';
import { TestApiPost } from './test-api-post/test-api-post';
import { MasterComponent } from './childParentComponents/master-component/master-component';
import { TestModelInputMaster } from './testModelInput/test-model-input-master';
import { TestComWithServiceMaster } from './comBetweenComponentsWithService/test-com-with-service-master';

export const routes: Routes = [

    {path: '', component: Home},

    {path: 'testApi', component: TestApi},

    {path: 'testApiPost', component: TestApiPost},

    {path: 'childParentComponents', component: MasterComponent},
    
    {path: 'testModelInput', component: TestModelInputMaster},

    {path: 'testComWithService', component:TestComWithServiceMaster}

];
