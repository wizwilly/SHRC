
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

let Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const articles = await Article.find();
    res.status(200).json(articles);
  } else if (req.method === 'POST') {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  }
}
