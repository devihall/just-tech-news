const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);

module.exports = router;
