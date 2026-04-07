/// protect route


const auth = require("../middleware/auth");

router.get("/secure", auth, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

