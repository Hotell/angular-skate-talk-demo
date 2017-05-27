import { Component, h, props, emit } from 'skatejs';
import { prop } from '../skate-decorators';

const styles = `
  .form-item {
    display: flex;
    flex-flow: column;
    padding: .5rem;
  }
  label {
    font-weight: bold;
    font-size: 1.1em;
  }
  input {
    padding: .5em;
    width: 50%;
    font-size: 1.1em;
  }
`;
type Props = {
  name: string,
  age: number
};

const List = ({name, age}: Props) => (
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
    </ul>
);

class User extends Component<Props> {
  static get is(){ return 'sk-user'; }
  static get props (){
    return {
      name: props.string,
      age: props.number,
      trickName: props.string,
    };
  }
  // @prop({type: String}) name: string;
  // @prop({type: Number}) age: number;
  // @prop({type: String}) private trickName: string;

  private trickName: string;

  renderCallback() {
    // const {age, name} = this;
    const {age, name} = this.props;
    return (
      <div>
        <style>{styles}</style>
        <List name={name} age={age}/>
        <form onSubmit={this.addNewTrick(this.trickName)}>
          <div class='form-item'>
            <label>Learn new trick:</label>
            <input type='text' onInput={this.handleInput} value={this.trickName}/>
          </div>
        </form>
        <div>
          <slot/>
        </div>
      </div>
    );
  }

   private addNewTrick = ( trick: string ) => {
    return ( ev: Event ) => {
      ev.preventDefault();
      emit( this, 'new-trick', { detail: trick } );
      this.trickName = '';
    };
  }

  private handleInput = (ev: KeyboardEvent) => {
    this.trickName = (ev.target as HTMLInputElement).value;
  }
}

export {
  User
}
