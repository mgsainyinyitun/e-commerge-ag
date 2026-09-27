import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'products', component: Products },
  { path: '', component: Home }
];
