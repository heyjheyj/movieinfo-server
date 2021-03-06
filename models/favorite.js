const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    userfrom: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    movieId: {
      type: String
    },
    movieTitle: {
      type: String
    },
    moviePost: {
      type: String
    },
    movieRunTime: {
      type: String
    }
  },
  { timestamps: true }
);

const Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = { Favorite };
