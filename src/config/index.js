import { connect } from 'mongoose'

const connectDB = () => {
    // mongodb+srv://Federico:password@coderexample.hjzrdtr.mongodb.net/c53145?retryWrites=true&w=majority
    connect('mongodb+srv://evangelina:73x13puvi1TyTzE0@ecommerce.c5eizil.mongodb.net/')
    console.log('DB conected')
} 

export default connectDB;
