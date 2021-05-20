import { Schema } from 'mongoose';

export const PersonSchema = new Schema({
    name: String,
    first_name: String,
    last_name: String,
    company_id: String,
    user_id: String,
    created_at: Date,
    updated_at: Date,
});