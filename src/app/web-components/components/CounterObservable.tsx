import { h, Component, props } from 'skatejs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
export type Props = {
  counter$: Observable<number>,
};
class CounterObservable extends Component<Props> {

  static readonly is = 'sk-counter-observable';
  static get props () {
    return {
      counter$: props.object,
      count: props.number,
    };
  }

  counter$: Observable<number>;
  private count: number;

  private counterSubscription: Subscription;

  propsUpdatedCallback( nextProps: Props, prevProps: Props ) {
    // init phase
    if ( !prevProps ) {
      this.counterSubscription = this.counter$.subscribe(( num ) => {
        this.count = num;
      } );
    }
    return super.propsUpdatedCallback(nextProps, prevProps);
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
