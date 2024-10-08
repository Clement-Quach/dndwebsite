
require("./utils.js");

require('dotenv').config();
const express = require('express');
const session = require('express-session');



const port = process.env.PORT || 3000;

const app = express();




const expireTime = 1 * 60 * 60 * 1000; //expires after 1 day  (hours * minutes * seconds * millis)












app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));






app.use(express.static('public'));





// Route to handle the main page
app.get('/', (req, res) => {


   res.render('index');

});

app.get('/character', (req, res) => {
	res.render('character');
});

app.get('/species', (req, res) => {
	res.render('species');
});

app.get('/stats', (req, res) => {
	res.render('stats');
});


app.get('/classes', (req, res) => {
	res.render('classes');
});



app.get('/world', (req, res) => {
	res.render('world');
});

app.get('/divinity', (req, res) => {
	res.render('divinity');
});

app.get('/Panblack', (req, res) => {
	res.render('Panblack');
});

app.get('/Panwhite', (req, res) => {
	res.render('Panwhite');
});
app.get('/Panblue', (req, res) => {
	res.render('Panblue');
});


app.get('/Pangreen', (req, res) => {
	res.render('Pangreen');
});

app.get('/Pangrey', (req, res) => {
	res.render('Pangrey');
});





app.get('/map', (req, res) => {
	res.render('map');
});


app.get('/human', (req, res) => {
	res.render('human');
});
app.get('/elves', (req, res) => {
	res.render('elves');
});
app.get('/dwarf', (req, res) => {
	res.render('dwarf');
});
app.get('/orc', (req, res) => {
	res.render('orc');
});
app.get('/dragonborn', (req, res) => {
	res.render('dragonborn');
});
app.get('/giantkin', (req, res) => {
	res.render('giantkin');
});
app.get('/tiefling', (req, res) => {
	res.render('tiefling');
});

app.get('/goblin', (req, res) => {
	res.render('goblin');
});
app.get('/halfling', (req, res) => {
	res.render('halfling');
});
app.get('/beastfolk', (req, res) => {
	res.render('beastfolk');
});


app.get("*", (req,res) => {
	res.status(404);
	res.render('errorMessage', {error: '404, page not found'});
})

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 