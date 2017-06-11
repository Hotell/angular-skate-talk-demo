import { Observable } from 'rxjs/Observable';
import { Directive, Input } from '@angular/core';
import { CounterObservable, Props } from './CounterObservable';

@Directive({
  selector: CounterObservable.is
})
export class CounterObservableDirective implements Props {
  @Input() counter$: Observable<number>;

}
