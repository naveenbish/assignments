/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.obj = [];
  }

  // Add Todo list 
  add(str) {
    this.obj.push(str);

  }

  // Remove todo with the help of index 
  remove(index) {
    if (this.obj.length > index) {
      this.obj.splice(index, 1);
    }
  }

  update(index, str) {
    if (this.obj.length > index) {
      this.obj[index] = str;
    }
  }

  getAll() {
    return this.obj;
  }

  get(index) {
    if (index >= this.obj.length) {
      return null;
    } else {
      return this.obj[index];
    }
  }

  clear() {
    this.obj.length = 0;
  }
}
module.exports = Todo;
