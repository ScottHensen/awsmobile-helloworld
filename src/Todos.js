import React from 'react';
import { API } from 'aws-amplify';

class Todos extends React.Component {
  state = { team: "React", todos: [] };

  async componentDidMount() {
    let todos = await API.get('todosCRUD', `/todos/${this.state.team}`);
    this.setState({todos});
  }

  async saveTodo(event) {
    event.preventDefault();

    const { team, todos } = this.state;
    const todoId = todos.length + 1;
    const text = this.refs.newTodo.value;

    const newTodo = {team, todoId, text};
    await API.post('todosCRUD', '/todos', { body: newTodo });
    todos.push(newTodo);
    this.refs.newTodo.value = '';
    this.setState({ todos, team });
  }

  render() {
    let todoItems = this.state.todos.map(({todoId, text}) => {
      return <li key={todoId}>{text}</li>;
    });

    return (
      <div style={styles}>
        <h1>{this.state.team} Todos</h1>
        <ul>
          {todoItems}
        </ul>

        <form onSubmit={this.saveTodo.bind(this)}>
          <input ref="newTodo" type="text" placeholder="What do you want to do?" />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

let styles = {
  margin: "0 auto",
  //width: "25%"
};

export default Todos;
