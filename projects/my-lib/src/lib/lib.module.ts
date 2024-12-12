import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';

@NgModule({
  declarations: [NewComponentComponent],
  imports: [CommonModule],
  exports: [NewComponentComponent],
})
export class LibModule {}
