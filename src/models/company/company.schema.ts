import { Schema } from 'mongoose';

export const CompanySchema = new Schema({
    legal_name: String,
    short_name: String,
    account_name: String,
    logo: String,
    cover: String,
    created_at: Date,
    updated_at: Date,
});