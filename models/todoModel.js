import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
  task: String,
  completed: Boolean,
  uid: String,
});

const Todo = models.Todo || model('Todo', todoSchema);

export default Todo;
