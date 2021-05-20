import { Document } from 'mongoose';

export interface User extends Document{
    _id: string;
    email: string;
    password: string;
    system_status_id: number;
    confirmation_code: string;
    confirmed_at: Date;
    accepted_conditions_at: Date;
    created_at: Date;
    updated_at: Date;
    registration_method: string;
    token: string;
    recovery_password_code: string;
}
