module.exports = {
  home: (req, res) => {
    return res.render('index',
      {
        title: 'La pasteleria mas creativa y sabrosa',
        mensaje: 'hecho con amor y pasión'
      });
  },

  inicio: (req, res) => {
    return res.render('inicio')
  },

  about: (req, res) => {
    return res.render('about')
  },

  categorias: (req, res) => {
    return res.render('categorias')
  },

  contactanos: (req, res) => {
    return res.render('contactanos')
  },

  novedades: (req, res) => {
    return res.render('novedades')
  },

  pregfrec: (req, res) => {
    return res.render('pregfrec')
  },

}


