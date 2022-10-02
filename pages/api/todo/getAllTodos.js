import connectMongo from '../../../utils/connectMongo';
import Todo from '../../../models/todoModel';
import admin from '../../../utils/firebaseAdmin';

const getAllTodos = async (req, res) => {
  const accessToken = req.headers.authorization;
  try {
    await connectMongo();
    const userData = await admin.auth().verifyIdToken(accessToken);

    const data = await Todo.find({ uid: userData.uid });

    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export default getAllTodos;
