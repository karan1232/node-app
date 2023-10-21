import express from "express";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";

export const signupController = async (req, res) => {
  try {
    const { email, password, name, phone, address } = req.body;
    if (!email) {
      res.status(400).send({ successful: "false", error: "Email is required" });
    }
    if (!password) {
      res
        .status(400)
        .send({ successful: "false", error: "Password is required" });
    }
    if (!name) {
      res.status(400).send({ successful: "false", error: "Name is required" });
    }
    if (!phone) {
      res
        .status(400)
        .send({ successful: "false", error: "Phone number is required" });
    }
    if (!address) {
      res
        .status(400)
        .send({ successful: "false", error: "Address is required" });
    }

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res
        .status(200)
        .send({ success: false, message: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await new userModel({
      email,
      name,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User created successfully",
      user: { email, name, address, phone },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in registration", error });
  }
};

export const loginController = async (req,res) => {
  console.log("request received")
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).send({ success: false, message: "Email is required" });
    }
    if (!password) {
      res.status(400).send({ success: false, message: "Password is required" });
    }

    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return res
        .status(401)
        .send({ success: false, message: "User doesn't exist" });
    }

    const passwordMatches = comparePassword(password, userExists.password);

    if (!passwordMatches) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid password" });
    }

    const token = await JWT.sign(
      { _id: userExists._id },
      process.env.jsonWebTokenRounds,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).send({
      success: true,
      user: {
        email: userExists.email,
        address: userExists.address,
        phone: userExists.phone,
        name: userExists.name,
      },token
    });
  } catch (error) {
    console.log(error);
  }
};
