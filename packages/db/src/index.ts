import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String ,
    password: String,
    email: String,
    purchasedProducts: [{ 
        imageLink: String,
        price: Number,
        description: String,
        title: String,
    }],
    cart: [{
        imageLink: String,
        price: Number,
        description: String,
        title: String,
    }],
});

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    imageLink: {
        type: String,
        required: true
    }
});

productSchema.index({ name: 'text', description: 'text', price: 'text' });

const adminSchema = new Schema({
    username: String,
    password: String
});

export const User = mongoose.model('User', userSchema);
export const Product = mongoose.model('Product', productSchema);
export const Admin = mongoose.model('Admin', adminSchema);

