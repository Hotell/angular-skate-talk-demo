import { Component, h, prop, emit } from 'skatejs';

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
      trickName: prop.string(),
    };
  }
  name: string;
  age: number;

  trickName: string;

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

  renderCallback() {
    const {age, name} = this;
    return (
      <div>
        <style>{styles}</style>
        <List wat={name} age={age}/>
        <form onSubmit={this.addNewTrick(this.trickName)}>
          <div class='form-item'>
            <label>Learn new trick:</label>
            <input type='text' onInput={this.handleInput} value={this.trickName}/>
          </div>
        </form>
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
