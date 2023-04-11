import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        personal: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Personal',
            },
        ],
    },
    { timestamps: true },
)

export default mongoose.model('User', UserSchema)