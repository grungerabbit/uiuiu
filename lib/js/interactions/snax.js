$(document).ready(function () {
	var paper = Raphael(10, 10, 1000, 1000);

	var snacks = [
	    {
	        'name' : "Choco \n Sandwich",
	        'totCal' : 286,
	        'emptyCal' : 182,
	        'when' : "Before"
	    },
	    {
	        'name' : "Flavored \n Candies",
	        'totCal' : 249,
	        'emptyCal' : 177,
	        'when' : "Before"
	    },
	    {
	        'name' : "Donut",
	        'totCal' : 242,
	        'emptyCal' : 147,
	        'when' : "Before"
	    },
	    {
	        'name' : "Chocolate Bar",
	        'totCal' : 235,
	        'emptyCal' : 112,
	        'when' : "Before"
	    },
	    {
	        'name' : "Regular Cola",
	        'totCal' : 136,
	        'emptyCal' : 126,
	        'when' : "Before"
	    },
	    {
	        'name' : "Peanuts",
	        'totCal' : 170,
	        'emptyCal' : 0,
	        'when' : "After"
	    },
	    {
	        'name' : "Light Popcorn",
	        'totCal' : 161,
	        'emptyCal' : 17,
	        'when' : "After"
	    },
	    {
	        'name' : "Tortilla Chips",
	        'totCal' : 118,
	        'emptyCal' : 0,
	        'when' : "After"
	    },
	    {
	        'name' : "Granola Bar",
	        'totCal' : 95,
	        'emptyCal' : 32,
	        'when' : "After"
	    },
	    {
	        'name' : "Water",
	        'totCal' : 0,
	        'emptyCal' : 0,
	        'when' : "After"
	    },
	]

	function generateCircleArray(xStart, yStart, rowLength, radius, raw) {
	    var rowMultipler;
    
	    var total = raw.totCal;
	    var empty = raw.emptyCal;
	    var status = raw.when;
    
	    var blue = "#79b6e3";
	    var green = "#bdd530";
	    var trans = "transparent";
    
	    var fill, stroke;
    
	    for (var i = 0; i < total; i++) {
	        var xCoord, yCoord;
        
	        if (i % rowLength === 0) {
	            // start new row
	            xBase = 2 * radius + xStart;
	            rowMultiplier = i/rowLength;
            
	            yCoord = yStart + i * radius/1.5;
	            xCoord = xBase;
	        } else {
	            var xRowFix = i - (rowMultiplier * rowLength);
	            xCoord = xBase + (3 * radius) * xRowFix;   
	        }

	        point = paper.circle(xCoord, yCoord, radius);
    
	        if (status === "Before") {
	            if (i >= empty) {
	                fill = blue;
	            } else {
	                stroke = blue;
	            }
	        } else if (status === "After") {
	            if (i >= empty) {
	                fill = green;
	            } else {
	                stroke = green;
	            }
	        }
	        point.attr({"fill": fill, "stroke" : stroke});
	    }
	}

	function drawBars(originX, originY) {
	    var sL = snacks.length;
    
	    for (var k=0; k < sL; k++) {
	        var currentSnack = snacks[k];

	        var cal = currentSnack.totCal;

	        generateCircleArray(k*80, 100, 5, 4, currentSnack);

	        paper.text(k*80 + 30, 70, currentSnack.name).attr({"fill": "#222"});
	    }
	}

	drawBars();
});
