import {h, Component} from 'skatejs';

type Props = {};
class Counter extends Component<Props> {
  static get is(){ return 'sk-counter'; }
  renderCallback() {
    return <div>Hello world</div>;
  }

}

export {
  Counter
}
