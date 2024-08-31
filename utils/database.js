import mongoose from 'mongoose';


let isConnected = false;

export const connectToDB = async () => {
    
    if (isConnected) {
        console.log('DB is already connected');
        return;
    }

    try {
        mongoose.set('strictQuery', true);

       await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'blogDB',
            bufferCommands: true
          
        });

        isConnected = true;

 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
