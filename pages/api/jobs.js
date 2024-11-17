
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salary: String,
  postedAt: { type: Date, default: Date.now },
});

let Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } else if (req.method === 'POST') {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  }
}
