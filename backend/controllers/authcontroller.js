
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) return res.status(400).send("All fields required");

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed, role });

  res.status(201).send({ message: "User registered" });
});
