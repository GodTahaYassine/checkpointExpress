timeController = (req, res, next) => {
	var day = new Date().getDay();
	var hour = new Date().getHours();
	if (day > 0 && day < 6 && hour > 8 && hour < 18) { //? accounting for UTC+1 timezone
		next();
	} else {
		res.render("closed");
	}
};

module.exports = timeController;
