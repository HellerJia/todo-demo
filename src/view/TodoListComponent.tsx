import React from "react";
import { connect } from "react-redux";
import { TodoList, Todo, DataModel } from "../model/dataMod";
import TodoItem from "./TodoItem";

class ListComponent extends React.Component< {dataList: TodoList}, { filter: (todo: Todo) => boolean } > {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: () => true
    };
  }

  render() {
    const items = this.props.dataList.filter(this.state.filter).map( data => (
      <li>
        <TodoItem todo={data}/>
      </li>
    ) );

    return (
      <div>
        <button onClick={this.chooseTodo}>Choose Todo</button>
        <button onClick={this.chooseDone}>Choose Done</button>
        <button onClick={this.clearFilter}>Clear Filter</button>
        <ul>{items}</ul>
      </div>
    );
  }

  private chooseDone = () => {
    this.setState({
      filter: (todo) => todo.completed
    });
  }

  private chooseTodo = () => {
    this.setState({
      filter: (todo) => !todo.completed
    });
  }

  private clearFilter = () => {
    this.setState({
      filter: () => true
    });
  }

  static mapStateToProps = (state: DataModel) => ({dataList: state.todoList})
}

export default connect(
  ListComponent.mapStateToProps
)(ListComponent);