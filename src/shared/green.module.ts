import { NgModule } from '@angular/core'
import { NggBadgeModule, NggSegmentedControlModule } from '@sebgroup/green-angular'

const green = [NggBadgeModule,NggSegmentedControlModule];
//Import seb green components and export to other modules here

@NgModule({
  imports: [...green],
  exports: [...green],
})
export class GreenModule {}