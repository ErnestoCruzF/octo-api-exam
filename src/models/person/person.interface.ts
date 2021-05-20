import { Document } from 'mongoose';

export interface Person extends Document{
    id: string;
    name: string;
    first_name: string;
    last_name: string;
    company_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
}
