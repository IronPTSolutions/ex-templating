
module.exports.home = (req, res, next) => {
  // Iteration 1: render home view
  res.render('commons/home', {title: 'Welcome to fistro pecadorrr' })
}
