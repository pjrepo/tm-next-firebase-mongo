import connectMongo from '../../../utils/connectMongo';
import Todo from '../../../models/todoModel';

const deleteTodo = async (req, res) => {
  const { _id } = req.body;

  try {
    await connectMongo();

    const data = await Todo.findByIdAndRemove(_id);

    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export default deleteTodo;
