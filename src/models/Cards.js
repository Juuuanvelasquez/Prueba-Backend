import { Schema, model } from "mongoose";

const cardSchema = new Schema(
  {
    titular: {
        type: String,
        require: true,
        trim: true
    },
    cardNumber: {
        type: Number,
        unique: true,
        require: true,
        trim: true
    },
    expireDate: {
        type: String,
        require: true,
        trim: true
    },
    cvv: {
        type: Number,
        require: true,
        trim: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Card", cardSchema);
