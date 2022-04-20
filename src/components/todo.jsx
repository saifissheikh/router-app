import React, { Component } from "react";

class Todo extends Component {
  listitems = ["getup", "eatbreakfast", "goto gym"];
  state = {
    todos: ["getup", "eatbreakfast", "goto gym"],
  };

  handleChange(item) {
    const { todos } = this.state;
    const index = todos.indexOf(item);
    todos[index] === "done"
      ? (todos[index] = this.listitems[index])
      : (todos[index] = "done");
    this.setState({ todos });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((item) => {
            return (
              <div>
                <li>
                  {item}
                  <input
                    type="checkbox"
                    onChange={() => this.handleChange(item)}
                  />
                </li>
              </div>
            );
          })}
        </ul>
        <input type="text"></input>
        <button onClick={addTodo}></button>
      </div>
    );
  }
}

export default Todo;
