import { Directive, Input } from '@angular/core';
import { Counter, Props } from './Counter';

@Directive({
  selector: Counter.is
})
export class CounterDirective implements Props {
  @Input() count?: number;
  @Input() repeatInterval?: number;

}
