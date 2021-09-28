module.exports = (req, res) => {
  res.json({
    Content-Encoding: br,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
