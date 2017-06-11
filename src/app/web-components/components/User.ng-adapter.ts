import { Directive, Input, Output, EventEmitter } from '@angular/core';

import {User, Props} from './User';



@Directive({
  selector: User.is
})
export class UserDirective implements Props {
  @Input() name: string;
  @Input() age: number;
  @Output() newTrick: EventEmitter<string>;
}
