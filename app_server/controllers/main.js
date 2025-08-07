
const index = (req, res) => {
    res.render('index', { title: 'Express MVC ApP' });
};

module.exports = {
    index
};
