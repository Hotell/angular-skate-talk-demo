
import './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDirective, CounterDirective, CounterObservableDirective } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserDirective,
    CounterDirective,
    CounterObservableDirective
  ],
  declarations: [
    UserDirective,
    CounterDirective,
    CounterObservableDirective
  ],
  schemas: []
})
export class WebComponentsModule { }
