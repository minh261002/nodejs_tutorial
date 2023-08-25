const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getHome = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getHome,
};
