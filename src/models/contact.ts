import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  line: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
