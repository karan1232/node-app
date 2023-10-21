import JWT from "jsonwebtoken";

export const authorizeApiCall = async (req, res,next) => {
  try {
    const header = req.headers.authorization;
   const decodedUser = await JWT.verify(header,process.env.jsonWebTokenRounds);
   req.user = decodedUser;
   next();

  } catch (error) {
    console.log(error);
    res.status(403).send({success : false,message:"Unauthorized"})
  }
};
