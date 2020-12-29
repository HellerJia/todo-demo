import React from 'react';
import { connect } from 'react-redux';
import { ADD } from '../model/action';

class InputComponent extends React.Component<{
  addTodo: (value: string) => any,
}, {
  curValue: string,
}> {

  constructor(props: any) {
    super(props);
    this.state = { curValue: '' };
  }

  render() {
    return (
      <div className="todo-input">
        <input type="text" value={this.state.curValue} onChange={this.inputChange}/>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }

  private inputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ curValue: ev.target.value });
  }

  private addItem = () => {
    if (this.state.curValue.length > 0) {
      this.props.addTodo(this.state.curValue);
    }
    this.setState({ curValue: '' });
  }

  static mapDispatchToProps = (dispatch: any) => ({
    addTodo: (value: string) => dispatch({
      type: ADD,
      value,
      completed: false,
    }),
  })
}

export default connect(
  null,
  InputComponent.mapDispatchToProps,
)(InputComponent);
