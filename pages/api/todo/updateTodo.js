import connectMongo from '../../../utils/connectMongo';
import Todo from '../../../models/todoModel';

const updateTodo = async (req, res) => {
  const { _id, task, completed } = req.body;

  try {
    await connectMongo();

    const data = await Todo.findById(_id);

    data.task = task;
    data.completed = completed;

    await data.save();

    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export default updateTodo;
