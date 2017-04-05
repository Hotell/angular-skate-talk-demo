import { h, Component, prop } from 'skatejs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
type Props = {
  counter$: Observable<number>,
};
class CounterObservable extends Component<Props> {

  static get is(){ return 'sk-counter-observable'; }
  static get props () {
    return {
      counter$: prop.object(),
      count: prop.number(),
    };
  }

  counter$: Observable<number>;
  private count: number;

  private counterSubscription: Subscription;

  updatedCallback( prevProps: Props ) {
    // init phase
    if ( !prevProps ) {
      this.counterSubscription = this.counter$.subscribe(( num ) => {
        this.count = num;
      } );
    }
    return super.updatedCallback( prevProps );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.counterSubscription.unsubscribe();
  }

  renderCallback() {
    const {count} = this;
    return <div>Hello Observable tick: <b>{count}</b></div>;
  }

}

export {
  CounterObservable
}
