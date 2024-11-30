import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomManagementComponent } from './room-management/room-management.component';

const routes: Routes = [
  { path: 'room-management', component: RoomManagementComponent },
  { path: '', redirectTo: 'room-management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
