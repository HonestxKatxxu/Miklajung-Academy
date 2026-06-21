const express = require("express");
const router = express.Router();

// ✅ FIXED ADMIN (NO REGISTRATION)
const ADMIN = {
  email: "admin@miklajung.com",
  password: "admin123",
};

// LOGIN ONLY
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    return res.json({
      success: true,
      message: "Login successful",
      token: "miklajung-admin-token",
      admin: {
        email: ADMIN.email,
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid admin credentials",
  });
});

module.exports = router;