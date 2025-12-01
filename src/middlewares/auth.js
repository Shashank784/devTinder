const adminAuth = (req, res, next) => {
  // Logic of checking if the request is authorized
  console.log("Admin auth is getting checked here");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unauthorized");
    console.log("Admin Authorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  // Logic of checking if the request is authorized
  console.log("Admin auth is getting checked here");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unauthorized");
    console.log("Admin Authorized");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
