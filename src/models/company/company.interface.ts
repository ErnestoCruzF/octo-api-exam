import { Document } from 'mongoose';

export interface Company extends Document{
    _id?: string;
    legal_name: string;
    short_name: string;
    account_name: string;
    logo: string;
    cover: string;
    created_at: Date;
    updated_at: Date;
}
