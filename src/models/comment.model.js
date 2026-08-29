import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    body: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export const Comment = mongoose.model('Comment', commentSchema);
