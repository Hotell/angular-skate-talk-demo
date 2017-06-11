import { define } from 'skatejs';
import {Counter} from './Counter';
import {CounterObservable} from './CounterObservable';
import {User} from './User';

define(Counter);
define(CounterObservable);
define(User);

export {UserDirective} from './User.ng-adapter'
export {CounterDirective} from './Counter.ng-adapter'
export {CounterObservableDirective} from './CounterObservable.ng-adapter'
