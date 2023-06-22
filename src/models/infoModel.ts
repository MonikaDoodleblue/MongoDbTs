import mongoose, { Schema, Document } from 'mongoose';

interface Info extends Document {
    name: string;
    email: string;
    password: string;
}

const InfoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
    },
}, {
    timestamps: true,
});

const Info = mongoose.model<Info>('Info', InfoSchema);

export default Info;