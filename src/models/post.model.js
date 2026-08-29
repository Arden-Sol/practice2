import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export const Post = mongoose.model('Post', postSchema);
