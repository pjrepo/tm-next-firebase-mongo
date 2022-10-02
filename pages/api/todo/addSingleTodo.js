import connectMongo from '../../../utils/connectMongo';
import Todo from '../../../models/todoModel';
import admin from '../../../utils/firebaseAdmin';

const addSingleTodo = async (req, res) => {
  const { task, completed } = req.body;
  const accessToken = req.headers.authorization;

  try {
    await connectMongo();
    const userData = await admin.auth().verifyIdToken(accessToken);
    const data = await Todo.create({ task, completed, uid: userData.uid });

    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export default addSingleTodo;
