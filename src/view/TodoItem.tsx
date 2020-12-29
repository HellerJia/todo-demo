import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_STATE, RMV } from '../model/action';
import { Todo } from '../model/dataMod';

class TodoItemComponent extends React.Component<{
  todo: Todo,
  changeTodoState: () => any,
  removeTodo: () => any,
}> {

  render() {
    const c = this.props.todo.completed ? 'Done' : 'To do';

    return (
      <div>
        <div>{this.props.todo.value}</div>
        <button onClick={this.props.changeTodoState}>{c}</button>
        <button onClick={this.props.removeTodo}>Remove</button>
      </div>
    );
  }

  static mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    changeTodoState: () => dispatch({
      type: CHANGE_STATE,
      id: ownProps.todo.id,
    }),
    removeTodo: () => dispatch({
      type: RMV,
      id: ownProps.todo.id,
    }),
  })
}

export default connect(
  null,
  TodoItemComponent.mapDispatchToProps,
)(TodoItemComponent);
