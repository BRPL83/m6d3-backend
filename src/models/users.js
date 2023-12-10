import mongoose, { Schema } from "mongoose";

const FriendSchema = new Schema({
  greenting: String,
  favoriteFruit: String,
});

const UserSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  guid: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
  },
  name: {
    type: {
      firt: String,
      last: String,
    },
    required: true,  
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  range: {
    type: [Number],
    required: true,
  },
  friends: {
    type: [FriendSchema],
    required: true,
  },
});

export const User = mongoose.model("users", UserSchema);