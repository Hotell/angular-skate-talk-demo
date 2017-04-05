import { h, Component, prop } from 'skatejs';

type Props = {
  count?: number,
  repeatInterval?: number,
};
class Counter extends Component<Props> {
  static get is(){ return 'sk-counter'; }

  static get props(){
    return {
      count: prop.number(),
      repeatInterval: prop.number(),
    };
  }

  count: number;
  repeatInterval = 1000;

  private timerID: number;

  connectedCallback() {
    super.connectedCallback();
    this.timerID = this.tick();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timerID);
  }
  renderCallback() {
    const {count} = this;
    return <div>Hello world tick: <b>{count}</b></div>;
  }

  private tick() {
    return window.setInterval(() => {
      this.count = this.count + 1;
    }, this.repeatInterval);
  }

}


export {
  Counter
}
