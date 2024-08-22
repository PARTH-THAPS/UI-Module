import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dob: { type: String, required: true }, 
    emailId: { type: String, unique: true },
    password: String,
});