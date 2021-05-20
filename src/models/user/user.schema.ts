import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    email: String,
    password: String,
    system_status_id: Number,
    confirmation_code: String,
    confirmed_at: Date,
    accepted_conditions_at: Date,
    created_at: Date,
    updated_at: Date,
    registration_method: String,
    token: String,
    recovery_password_code: String
});