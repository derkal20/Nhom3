
class CvController {
  async index(req, res) {
    res.render('Cvpage')
  }
}
module.exports = new CvController()