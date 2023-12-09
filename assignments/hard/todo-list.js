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
    constructor(todo = []) {
        this.todo = []
    }
    add(todo){
        this.todo.push(todo)
    }
    remove(indexOfTodo){
        this.todo.splice(indexOfTodo, 1)
    }
    update(index, updatedTodo){
        this.todo[index] = updatedTodo
    }
    getAll(){
        return this.todo
    }
    get(indexOfTodo){
        if (this.isValidIndex(indexOfTodo)) {
            return this.todo[indexOfTodo];
        } else {
            return null
        }
    }
    clear(){
        this.todo = []
    }

    isValidIndex(index) {
        return index >= 0 && index < this.todo.length;
    }
}

// let too = new Todo()
//
// too.add("mice")
// too.add("dice")
//
// console.log("the element at the index is: ", too.get(0))
//
// console.log(too.getAll())

module.exports = Todo;
