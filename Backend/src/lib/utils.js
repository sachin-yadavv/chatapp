import JWT from 'jsonwebtoken';
export const generateToken = (userid,res) =>{
    const token=JWT.sign({userid},process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  secure: true,          // REQUIRED for SameSite=None
  sameSite: "none",      // REQUIRED for cross-site (Vercel ↔ Render)
});

return token;
}
    