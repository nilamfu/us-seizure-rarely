const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const which = require("x-which-frequent"),
	psst = require("tea-psst-yippee"),
	rarely = require("x-rarely-opposite"),
	begonia = require("tea-begonia-instead"),
	truly = require("tea-truly-smooth"),
	male = require("tea-male-zowie"),
	usually = require("x-usually-longingly"),
	steel = require("tea-steel-zowie"),
	gosh = require("x-gosh-where"),
	numeric = require("x-numeric-police"),
	about = require("tea-about-minor"),
	prod = require("x-prod-yippee"),
	cheery = require("x-cheery-messenger"),
	playground = require("twt-playground"),
	lambkin = require("tea-lambkin-while"),
	worse = require("x-worse-clearly"),
	dismiss = require("x-dismiss-across"),
	anguish = require("x-anguish-notarize"),
	blah = require("tea-blah-concede"),
	fondue = require("x-fondue-indolent"),
	beside = require("tea-beside-yowza"),
	however = require("tea-however-sleep"),
	broil = require("x-broil-gadzooks"),
	beneath = require("x-beneath-ill-fated"),
	unlike = require("tea-unlike-often"),
	indeed = require("tea-indeed-workforce"),
	unearth = require("tea-unearth-promptly"),
	whereas = require("tea-whereas-safely"),
	infect = require("x-infect-likewise"),
	atop = require("x-atop-twister"),
	fare = require("x-fare-barring"),
	first = require("x-first-boohoo"),
	despite = require("x-despite-cruelly"),
	wearily = require("tea-wearily-well-lit"),
	floor = require("tea-floor-align"),
	pfft = require("tea-pfft-along"),
	slobber = require("tea-slobber-cucumber");

const USERNAME = "alta_kiehn18",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
