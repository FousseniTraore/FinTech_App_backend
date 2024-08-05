import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
// import * as tf from '@tensorflow/tfjs-node';  // Ensure you're using the Node.js version

import path from 'path';

const app = express();
app.use(cors());

app.use(express.json()); // for parsing application/json

// Routes
app.use('/auth', authRoutes);

// let model;

// Load the model
// (async () => {
//   try {
//     const modelPath = `file://${path.resolve('C:/Users/user/Desktop/Honours Project/backend_hp_app/ML_model/model.json')}`;
//     model = await tf.loadLayersModel(modelPath);
//     console.log('Model loaded successfully');
//   } catch (error) {
//     console.error('Error loading model:', error);
//   }
// })();

// // Predict loan approval
// app.post('/predict', async (req, res) => {
//   try {
//     const input = tf.tensor2d([req.body.input], [1, req.body.input.length]);
//     const prediction = model.predict(input);
//     const result = prediction.dataSync()[0];

//     res.json({ result });
//   } catch (error) {
//     console.error('Error during prediction:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// Connect to MongoDB database using Mongoose
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
