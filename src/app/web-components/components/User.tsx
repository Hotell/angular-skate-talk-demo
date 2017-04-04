import { Component, h, prop } from 'skatejs';
type Props = {
  wat: string,
  age: number
};

const List = ({wat, age}: Props) => (
    <ul>
      <li>Name: {wat}</li>
      <li>Age: {age}</li>
    </ul>
);

class User extends Component<Props> {
  static get is(){ return 'sk-user'; }
  static get props (){
    return {
      name: prop.string({attribute: {source: true}}),
      age: prop.number({attribute: {source: true}}),
    };
  }
  name: string;
  age: number;

  renderCallback() {
    const {age, name} = this;
    return (
      <div>
        <List wat={name} age={age}/>
        <div>
          <slot></slot>
        </div>
      </div>
    );
  }
}

export {
  User
}
