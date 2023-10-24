import userModel from "../model/userModel.js";

export const getUserProfileData = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user !== null) {
      res
        .status(200)
        .send({
          success: true,
          message: "Fetched user data",
          user: {
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
          },
        });
    } else {
      res
        .status(403)
        .send({ success: false, message: "Please provide a valid token" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
