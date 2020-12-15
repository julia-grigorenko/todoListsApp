const router = require('express').Router();
const date = require(__dirname + '/../libs/date.js');

let day = date();


router.route('/').get((req, res) => {

    res.render("list", {listTitle: day, listName: 'average', newListItems: []});
});

module.exports = router;
