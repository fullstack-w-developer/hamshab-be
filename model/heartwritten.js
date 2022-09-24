import mongoose from "mongoose";

const heartwrittenSchema = new Schema({
  heartwritten: [
    {
      image: {
        type: String,
      },
      title: {
        type: String,
      },
      date: {
        type: String,
      },
      description: {
        type: String,
      },
      hashtag: {
        type: String,
      },
      view: {
        type: Number,
      },
      description: {
        type: String,
      },
      helpful: [
        {
          type: Number,
          user: mongoose.Types.ObjectId,
          ref: "user",
        },
      ],
      nothelpful: [
        {
          type: Number,
          user: mongoose.Types.ObjectId,
          ref: "user",
        },
      ],
    },
  ],
});

const heartwritten = mongoose.model(
  "heartwritten",
  heartwrittenSchema
);

export default heartwritten;
