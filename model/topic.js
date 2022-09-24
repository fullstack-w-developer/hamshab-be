import mongoose from "mongoose";

const topicSchema = new Schema({
  topic: {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  comments: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
      date: {
        type: String,
      },
      status: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
});

const topic = mongoose.model("topic", topicSchema);

export default topic;
