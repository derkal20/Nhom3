class cvController {
  cv(req, res) {
    res.render("resume");
  }
}
module.exports = new cvController();
