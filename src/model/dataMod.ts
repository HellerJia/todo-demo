export type DataModel = {
  todoList: TodoList
}

export type TodoList = Todo[]

export type Todo = {
  id: number,
  value: string,
  completed: boolean
}