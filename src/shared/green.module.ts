import { NgModule } from '@angular/core'
import { NggBadgeModule } from '@sebgroup/green-angular'

const green = [NggBadgeModule];
//Import seb green components and export to other modules here

@NgModule({
  imports: [...green],
  exports: [...green],
})
export class GreenModule {}