(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CPCCO_Stronger_300x250_atlas_", frames: [[0,0,300,250],[0,252,300,250],[0,504,259,107]]}
];


// symbols:



(lib.BLUR_300x250Clatsop = function() {
	this.initialize(ss["CPCCO_Stronger_300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BLUR_300x250Tillamook = function() {
	this.initialize(ss["CPCCO_Stronger_300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Buttonshad = function() {
	this.initialize(ss["CPCCO_Stronger_300x250_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BLUR_300x250Tillamook();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.HEAD2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D755").s().p("AhRBmQgMgJAAgQQAAgNAIgJQAHgHANAAQAPAAAFALQAGAMgIAOQAVgBAPglIAAgBIg6h7QgEgJgFAAIgLAAIAAgYIBVAAIAAAYIgMAAQgKAAAEAKIAjBNIAfhMQAFgLgLAAIgNAAIAAgYIBFAAIAAAYIgNAAQgGAAgEAJIg1B/QgOAhgNANQgQAPgZAAQgTAAgMgJg");
	this.shape.setTransform(105.775,149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D755").s().p("AgQBdQgMgLAAgbIAAhZIgVAAIAAgWIAMgBQASgDACgPIAEgdIAdAAIAAAtIAgAAIAAAZIghAAIAABZQAAAXAUAAQAIAAAHgDIAAAZQgNAFgPAAQgbAAgLgMg");
	this.shape_1.setTransform(90.9,143.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D755").s().p("AAMBTIAAgZIANAAQAGAAAAgJIAAhFQAAgggbgBQgiAAAAA1IAAAxQAAAJAGAAIANAAIAAAZIhTAAIAAgZIAOAAQAGAAAAgJIAAhbQAAgLgGAAIgOAAIAAgYIAZAAQAYAAAPgEIAAAhQAPgiAmAAQA0AAAAA9IAABGQAAAJAGAAIAOAAIAAAZg");
	this.shape_2.setTransform(76.025,145.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D755").s().p("AhKAXIAAhHQAAgJgGAAIgOAAIAAgZIBAAAIAABpQAAAfAbAAQAhAAAAgwIAAg2QAAgJgGAAIgQAAIAAgZIBDAAIAAB9QgBAKAGAAIAPAAIAAAZIgbAAQgXAAgPADIAAgdQgPAfgkAAQg1gBAAg7g");
	this.shape_3.setTransform(56.15,146.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D755").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_4.setTransform(37.275,145.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D755").s().p("AhHBUQgcgfAAg1QAAgyAcggQAcgfAtAAQAvAAAOAmIAJgiIAbAAIAABSIgmAAQgJg5gtAAQg6AAAABQIAAAKQAABQA7AAQA6gBAEg5IAeAEQgBAigWAWQgZAagtAAQgwAAgegeg");
	this.shape_5.setTransform(17,143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D755").s().p("AheBvIAAgZIAOAAQAGAAAAgIIAAiVQAAgKgGAAIgPAAIAAgYIAbAAQAXAAAPgEIAAAkQAPglAoAAQAhAAATAXQATAXAAAnQAAAlgUAXQgUAYghAAQgmAAgPgiIAAA1QABAIAFAAIAOAAIAAAZgAgThEQgLAOAAAaIAAAFQAAAZALAPQAMANAQAAQATAAALgNQAKgOABgaIAAgFQgBgagKgOQgLgNgTAAQgRAAgLANg");
	this.shape_6.setTransform(-11.8,148.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D755").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_7.setTransform(-30.825,145.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D755").s().p("AhCBHIAAgrIAhAAIAAAeQALADASAAQAfAAAAgVQAAgLgLgGQgHgDgTgEQgbgFgMgIQgSgLAAgXQAAgYASgOQATgPAhAAQAiAAAaANIAAArIghAAIAAgcQgIgEgRAAQgfAAAAAUQAAALALAFQAGADAUAEQAbAFAMAIQASALAAAYQAAAYgTAPQgTAPghAAQgeAAghgOg");
	this.shape_8.setTransform(-47.375,145.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2D755").s().p("AgQBdQgMgLAAgbIAAhZIgVAAIAAgWIAMgBQATgDABgPIAEgdIAdAAIAAAtIAgAAIAAAZIghAAIAABZQAAAXAUAAQAIAAAIgDIAAAZQgOAFgPAAQgaAAgMgMg");
	this.shape_9.setTransform(-60.5,143.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2D755").s().p("AhIBIQgNgLABgTQAAgcAcgOQAYgLA2gIIAAgKQgBgeggAAQgOAAgHADQAFAHAAALQAAAKgHAHQgHAHgLAAQgcAAAAgbQAAgrBNAAQAkAAARANQAQAMAAAeIAABMQAAAIAFAAIAPAAIAAAZIg2AAQgHgLgDgQQgHANgPAJQgQAKgUAAQgWAAgOgNgAgYALQgRAIAAAQQAAAWAXAAQASAAAKgNQAMgMAAgUIAAgMQggAEgOAHg");
	this.shape_10.setTransform(-74.45,145.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D755").s().p("AgoBvIAAgZIAOAAQAGAAAAgIIAAiWQAAgKgGAAIgPAAIAAgZIAbAAQAWAAAQgDIAAC8QAAAIAFAAIANAAIAAAZg");
	this.shape_11.setTransform(-88.675,142.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2D755").s().p("AhHBUQgcgfAAg1QAAgyAcggQAcgfAtAAQAuAAAPAmIAJgiIAbAAIAABSIgmAAQgJg5gtAAQg6AAAABQIAAAKQAABQA7AAQA6gBAEg5IAeAEQgBAigWAWQgZAagtAAQgwAAgegeg");
	this.shape_12.setTransform(-104.45,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,0,538,165.4);


(lib.HEAD1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D755").s().p("AhRBmQgMgJAAgQQAAgNAIgJQAHgHANAAQAPAAAFALQAGAMgIAOQAVgBAPglIAAgBIg6h7QgEgJgFAAIgLAAIAAgYIBVAAIAAAYIgMAAQgKAAAEAKIAjBNIAfhMQAFgLgLAAIgNAAIAAgYIBFAAIAAAYIgNAAQgGAAgEAJIg1B/QgOAhgNANQgQAPgZAAQgTAAgMgJg");
	this.shape.setTransform(125.575,149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D755").s().p("AgQBdQgMgLAAgbIAAhZIgVAAIAAgWIAMgBQASgDACgPIAEgdIAdAAIAAAtIAgAAIAAAZIghAAIAABZQAAAXAUAAQAIAAAHgDIAAAZQgNAFgPAAQgbAAgLgMg");
	this.shape_1.setTransform(110.7,143.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2D755").s().p("AAMBTIAAgZIANAAQAGAAAAgJIAAhFQAAgggbgBQgiAAAAA1IAAAxQAAAJAGAAIANAAIAAAZIhTAAIAAgZIAOAAQAGAAAAgJIAAhbQAAgLgGAAIgOAAIAAgYIAZAAQAYAAAPgEIAAAhQAPgiAmAAQA0AAAAA9IAABGQAAAJAGAAIAOAAIAAAZg");
	this.shape_2.setTransform(95.825,145.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2D755").s().p("AhKAXIAAhHQAAgJgGAAIgOAAIAAgZIBBAAIAABpQgBAfAbAAQAhAAAAgwIAAg2QAAgJgGAAIgQAAIAAgZIBDAAIAAB9QgBAKAGAAIAPAAIAAAZIgbAAQgXAAgPADIAAgdQgPAfgkAAQg1gBAAg7g");
	this.shape_3.setTransform(75.95,146.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2D755").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_4.setTransform(57.075,145.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D755").s().p("AhHBUQgcgfAAg1QAAgyAcggQAcgfAtAAQAvAAAOAmIAJgiIAbAAIAABSIgmAAQgJg5gtAAQg6AAAABQIAAAKQAABQA7AAQA6gBAEg5IAeAEQgBAigWAWQgZAagtAAQgwAAgegeg");
	this.shape_5.setTransform(36.8,143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D755").s().p("AALBvIAAgZIAMAAQAGAAgEgGIgbgrIgZAYIAAARQABAIAFAAIANAAIAAAZIhUAAIAAgZIAQAAQAFAAAAgIIAAiWQAAgKgFAAIgQAAIAAgZIAbAAQAYAAAOgDIAACOIAzgwQACgCgBgDQgBgDgDAAIgRAAIAAgYIBUAAIAAAYIgLAAQgKAAgGAGIghAcIAuBGQAEAGAGAAIAJAAIAAAZg");
	this.shape_6.setTransform(8.8,142.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2D755").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_7.setTransform(-9.925,145.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D755").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_8.setTransform(-28.275,145.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2D755").s().p("AA9BTIAAgZIAMAAQAHAAgBgJIAAhBQABgkgbAAQgfAAABAvIAAA2QgBAJAGAAIAOAAIAAAZIhRAAIAAgZIAMAAQAGAAAAgJIAAhEQAAghgaAAQggAAAAAvIAAA2QAAAJAGAAIANAAIAAAZIhTAAIAAgZIAPAAQAFAAAAgJIAAhbQAAgLgFAAIgPAAIAAgYIAZAAQAZAAAOgEIAAAgQAQggAigBQAmAAAJAlQANglAoAAQA1AAAAA/IAABEQAAAJAGAAIAOAAIAAAZg");
	this.shape_9.setTransform(-52.05,145.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D2D755").s().p("AhIBIQgNgLABgTQAAgcAcgOQAYgLA2gIIAAgKQgBgeggAAQgOAAgHADQAFAHAAALQAAAKgHAHQgHAHgLAAQgcAAAAgbQAAgrBNAAQAkAAARANQAQAMAAAeIAABMQAAAIAFAAIAPAAIAAAZIg2AAQgHgLgDgQQgHANgPAJQgQAKgUAAQgWAAgOgNgAgYALQgRAIAAAQQAAAWAXAAQASAAAKgNQAMgMAAgUIAAgMQggAEgOAHg");
	this.shape_10.setTransform(-75.8,145.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2D755").s().p("AgoBvIAAgZIAOAAQAGAAAAgIIAAiWQAAgKgGAAIgPAAIAAgZIAbAAQAWAAAQgDIAAC8QAAAIAFAAIANAAIAAAZg");
	this.shape_11.setTransform(-90.025,142.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2D755").s().p("AgoBvIAAgZIAOAAQAGAAAAgIIAAiWQAAgKgGAAIgPAAIAAgZIAbAAQAWAAAQgDIAAC8QAAAIAFAAIANAAIAAAZg");
	this.shape_12.setTransform(-99.575,142.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2D755").s().p("AgpBzIAAgZIAOAAQAGAAAAgJIAAhYQAAgNgIAAIgMAAIAAgZIAaAAQAXAAAPgDIAACBQAAAJAFAAIAOAAIAAAZgAgThEQgIgIAAgLQAAgLAIgIQAHgIAMAAQAMAAAIAIQAIAIgBALQABALgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_13.setTransform(-109,142.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2D755").s().p("AguBuIAAgZIASAAQAGAAAAgKIAAigIgYAAQgLAAgEACQgFACgBAHIgCATIgcAAIAAg2IDDAAIAAA2IgcAAIgCgTQgBgHgFgCQgEgCgLAAIgaAAIAACgQAAAKAGAAIASAAIAAAZg");
	this.shape_14.setTransform(-124.425,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,0,538,165.4);


(lib.HEAD0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgLAIgHQAHgHALAAQAMAAAHAHQAIAHAAALQAAALgIAIQgHAHgMAAQgLAAgHgHg");
	this.shape.setTransform(65.4,191.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBSIAAgYIAPAAQAFAAAAgJIAAhcQAAgJgFgBIgQAAIAAgYIAbAAQAXAAAQgEIAAAkQAJgkAhAAQASAAAKAKQALAKAAASQAAAQgJAJQgJAKgOAAQgJAAgGgHQgHgGAAgIQAAgRAQgFQgEgDgHAAQggAAAAA1IAAAyQAAAJAFAAIAPAAIAAAYg");
	this.shape_1.setTransform(54.175,185.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6A9QgWgXAAgmQAAglAXgXQAXgYAlAAQAlAAAUAXQAVAWAAAnIAAAIIh0AAQACAyArAAQAfAAANgfIAZALQgQAvg5AAQgpAAgXgYgAAkgNQAAgZgIgKQgIgKgRAAQgkAAgDAtIBIAAIAAAAg");
	this.shape_2.setTransform(37.6,185.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhBeQAAgXArgIQgjgGAAgbQAAgZAegHQgagOAAgfQAAgZAXgQQAVgQAiAAQAdAAAVANQAFgkAbAAQAKAAAHAGQAGAGAAAJQAAAJgGAGQgEAGgJAAQgOAAgDgMQgHAFgCAJQAOAPAAAVQABAbgWAPQgVANgiAAQgVAAgPgEQgLACABAIQAAAHAEACQAFADAMAAIBFgBQAzAAAAAuQAAAcgYAOQgaAPgtAAQhYAAAAgigAg+BbQAAASA2AAQA9AAAAgYQgBgLgGgDQgGgEgSAAIg+AAQgWAHAAARgAgogxIAAAFQAAAgAgAAQAeAAAAggIAAgFQAAgigeAAQggAAAAAig");
	this.shape_3.setTransform(20.1,187.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBSIAAgYIANAAQAGAAAAgJIAAhFQAAghgbAAQgiABAAA0IAAAxQAAAJAGAAIANAAIAAAYIhTAAIAAgYIAOAAQAGAAAAgJIAAhcQAAgJgGgBIgOAAIAAgYIAZAAQAYAAAPgEIAAAhQAPgiAmABQA0gBAAA9IAABGQAAAJAGAAIAOAAIAAAYg");
	this.shape_4.setTransform(0.375,185.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_5.setTransform(-18.825,185.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBSIAAgYIAPAAQAFAAAAgJIAAhcQAAgJgFgBIgQAAIAAgYIAbAAQAXAAAQgEIAAAkQAJgkAhAAQASAAAKAKQALAKAAASQAAAQgJAJQgJAKgOAAQgJAAgGgHQgHgGAAgIQAAgRAQgFQgEgDgHAAQggAAAAA1IAAAyQAAAJAFAAIAPAAIAAAYg");
	this.shape_6.setTransform(-35.575,185.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBeQgLgMAAgbIAAhZIgXAAIAAgWIANgBQATgEABgOIADgdIAeAAIAAAuIAgAAIAAAYIghAAIAABZQAAAXAVAAQAHAAAIgDIAAAaQgOAEgPAAQgbAAgLgLg");
	this.shape_7.setTransform(-49.1,183.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCBHIAAgrIAhAAIAAAeQALADASAAQAfAAAAgVQAAgLgLgGQgHgDgTgEQgbgFgMgIQgSgLAAgXQAAgYASgOQATgPAhAAQAiAAAaANIAAArIghAAIAAgcQgIgEgRAAQgfAAAAAUQAAALALAFQAGADAUAEQAbAFAMAIQASALAAAYQAAAYgTAPQgTAPghAAQgeAAghgOg");
	this.shape_8.setTransform(-61.575,185.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7A9QgVgXAAgmQAAglAXgXQAXgYAkAAQAmAAAVAXQAUAWAAAnIAAAIIhzAAQABAyArAAQAgAAAMgfIAZALQgQAvg4AAQgqAAgYgYgAAlgNQgBgZgIgKQgIgKgSAAQgjAAgCAtIBIAAIAAAAg");
	this.shape_9.setTransform(65.55,106.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALBvIAAgZIALAAQAHAAgEgGIgbgrIgYAYIAAARQgBAIAGAAIANAAIAAAZIhUAAIAAgZIAPAAQAGAAAAgIIAAiWQAAgKgGAAIgPAAIAAgZIAbAAQAYAAAPgDIAACOIAygwQACgCgBgDQgBgDgDAAIgRAAIAAgYIBUAAIAAAYIgMAAQgJAAgGAGIggAcIAtBGQAEAGAGAAIAJAAIAAAZg");
	this.shape_10.setTransform(47.35,102.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIBIQgMgLAAgTQAAgcAdgOQAWgLA3gIIAAgKQgBgeggAAQgNAAgJADQAHAHgBALQAAAKgHAHQgHAHgLAAQgbAAgBgbQAAgrBNAAQAkAAARANQAQAMAAAeIAABMQAAAIAFAAIAPAAIAAAZIg2AAQgHgLgDgQQgGANgQAJQgQAKgUAAQgWAAgOgNgAgYALQgRAIAAAQQAAAWAXAAQASAAAKgNQAMgMAAgUIAAgMQggAEgOAHg");
	this.shape_11.setTransform(28.95,106.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA+BTIAAgaIALAAQAHAAAAgIIAAhBQgBgkgaAAQgeAAAAAvIAAA2QgBAIAGAAIAOAAIAAAaIhRAAIAAgaIAMAAQAGAAAAgIIAAhEQAAghgaAAQggAAAAAvIAAA2QABAIAFAAIANAAIAAAaIhTAAIAAgaIAPAAQAFAAAAgIIAAhbQAAgKgFAAIgPAAIAAgZIAaAAQAYAAAOgDIAAAfQAQghAiAAQAmAAAJAlQANglAoAAQA1AAAAA/IAABEQAAAIAFAAIAPAAIAAAag");
	this.shape_12.setTransform(5,105.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhKAXIAAhIQAAgIgGAAIgPAAIAAgZIBCAAIAABoQAAAgAaAAQAhAAAAgwIAAg3QAAgIgFAAIgRAAIAAgZIBCAAIAAB9QABAKAFAAIAQAAIAAAZIgbAAQgYAAgPADIAAgdQgPAeglABQg0AAAAg8g");
	this.shape_13.setTransform(-27.5,106.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_14.setTransform(-46.375,106.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhRBmQgMgJAAgQQAAgNAIgJQAHgHANAAQAPAAAFALQAGALgIAPQAVgCAPgjIAAgCIg6h7QgEgJgFABIgLAAIAAgZIBVAAIAAAZIgMAAQgKAAAEAJIAjBNIAfhMQAFgKgLAAIgNAAIAAgZIBFAAIAAAZIgNAAQgGgBgEAJIg1B/QgOAhgNANQgQAPgZAAQgTAAgMgJg");
	this.shape_15.setTransform(-65.025,109.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAnIAAgWQAGACAHAAQAUAAABgSQgEACgFAAQgWAAAAgUQgBgKAIgHQAIgGALAAQAMAAAKAKQAKAKAAAQQAAAUgMAMQgNANgUAAQgHAAgJgCg");
	this.shape_16.setTransform(94.8,73.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBTIAAgaIAPAAQAFAAAAgIIAAhcQAAgKgFABIgQAAIAAgZIAbAAQAXAAAQgDIAAAjQAJgkAhAAQASAAAKAKQALALAAARQAAAQgJAKQgJAJgOAAQgJAAgGgHQgHgGAAgJQAAgQAQgFQgEgDgHAAQggAAAAA2IAAAxQAAAIAFAAIAPAAIAAAag");
	this.shape_17.setTransform(83.575,66);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag7A9QgVgXAAgmQAAglAXgXQAXgYAkAAQAmAAAVAXQAUAWAAAnIAAAIIhzAAQABAyArAAQAgAAAMgfIAZALQgQAvg4AAQgqAAgYgYgAAlgNQgBgZgIgKQgIgKgSAAQgiAAgDAtIBIAAIAAAAg");
	this.shape_18.setTransform(67,66.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhhBeQAAgXAqgIQgigGAAgbQAAgZAegHQgagOABgfQAAgZAVgQQAWgQAiAAQAdAAAUANQAGgkAbAAQAKAAAHAGQAGAGAAAJQAAAJgFAGQgGAGgIAAQgNAAgFgMQgFAFgDAJQAPAPAAAVQgBAbgUAPQgVANgjAAQgWAAgOgEQgLACAAAIQAAAHAGACQAEADAMAAIBFgBQAzAAAAAuQAAAcgZAOQgZAPguAAQhXAAAAgigAg+BbQAAASA2AAQA9AAgBgYQAAgLgGgDQgHgEgQAAIg+AAQgXAHAAARgAgngxIAAAFQAAAgAeAAQAfAAAAggIAAgFQAAgigeAAQgfAAAAAig");
	this.shape_19.setTransform(49.5,68.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMBTIAAgaIANAAQAGAAAAgIIAAhGQAAgfgbAAQgigBAAA1IAAAxQAAAIAGAAIANAAIAAAaIhTAAIAAgaIAOAAQAGAAAAgIIAAhcQAAgKgGABIgOAAIAAgZIAZAAQAYAAAPgDIAAAfQAPggAmAAQA0AAAAA7IAABHQAAAIAGAAIAOAAIAAAag");
	this.shape_20.setTransform(29.775,66);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_21.setTransform(10.575,66.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhIBTIAAgaIAPAAQAFAAAAgIIAAhcQAAgKgFABIgQAAIAAgZIAbAAQAXAAAQgDIAAAjQAJgkAhAAQASAAAKAKQALALAAARQAAAQgJAKQgJAJgOAAQgJAAgGgHQgHgGAAgJQAAgQAQgFQgEgDgHAAQggAAAAA2IAAAxQAAAIAFAAIAPAAIAAAag");
	this.shape_22.setTransform(-6.175,66);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQBeQgMgMAAgbIAAhZIgWAAIAAgWIANgBQASgEACgOIADgdIAeAAIAAAuIAgAAIAAAYIghAAIAABYQAAAYAVAAQAHAAAHgDIAAAZQgNAFgPAAQgaAAgMgLg");
	this.shape_23.setTransform(-19.7,64.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhCBHIAAgrIAhAAIAAAeQALADASAAQAfAAAAgVQAAgLgLgGQgHgDgTgEQgbgFgMgIQgSgLAAgXQAAgYASgOQATgPAhAAQAiAAAaANIAAArIghAAIAAgcQgIgEgRAAQgfAAAAAUQAAALALAFQAGADAUAEQAbAFAMAIQASALAAAYQAAAYgTAPQgTAPghAAQgeAAghgOg");
	this.shape_24.setTransform(-32.175,66.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6A9QgWgXAAgmQAAglAXgXQAXgYAkAAQAmAAAVAXQAUAWAAAnIAAAIIh0AAQACAyArAAQAfAAANgfIAZALQgQAvg4AAQgqAAgXgYgAAkgNQAAgZgIgKQgIgKgSAAQgiAAgEAtIBIAAIAAAAg");
	this.shape_25.setTransform(-56.1,66.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhIBTIAAgaIAPAAQAFAAAAgIIAAhcQAAgKgFABIgQAAIAAgZIAbAAQAXAAAQgDIAAAjQAJgkAhAAQASAAAKAKQALALAAARQAAAQgJAKQgJAJgOAAQgJAAgGgHQgHgGAAgJQAAgQAQgFQgEgDgHAAQggAAAAA2IAAAxQAAAIAFAAIAPAAIAAAag");
	this.shape_26.setTransform(-72.425,66);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhHBIQgOgLAAgTQABgcAdgOQAWgLA2gIIAAgKQAAgeggAAQgNAAgJADQAHAHAAALQgBAKgHAHQgHAHgLAAQgbAAgBgbQABgrBLAAQAlAAAQANQARAMAAAeIAABMQAAAIAGAAIANAAIAAAZIg1AAQgGgLgEgQQgHANgPAJQgQAKgUAAQgWAAgNgNgAgYALQgRAIAAAQQAAAWAXAAQASAAAKgNQALgMAAgUIAAgMQgfAEgOAHg");
	this.shape_27.setTransform(-89.15,66.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhKAYIAAhIQAAgJgFAAIgPAAIAAgYIBAAAIAABoQABAfAaAAQAhAAAAgwIAAg2QAAgJgGAAIgQAAIAAgYIBDAAIAAB9QAAAJAFAAIAPAAIAAAZIgbAAQgWAAgQADIAAgdQgPAfglgBQg0AAAAg6g");
	this.shape_28.setTransform(68.05,26.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag9A9QgXgXAAgmQAAglAXgXQAYgYAmAAQAmAAAXAYQAXAXAAAlQAAAmgXAXQgYAYgmAAQgmAAgXgYgAgogBIAAADQAAA4AoAAQApAAAAg4IAAgDQAAg4gpAAQgoAAAAA4g");
	this.shape_29.setTransform(49.175,26.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhRBmQgMgJAAgRQAAgNAIgHQAHgIANAAQAPAAAFALQAGAMgIAOQAVgBAPgkIAAgBIg6h8QgEgJgFAAIgLAAIAAgYIBVAAIAAAYIgMAAQgKAAAEAKIAjBNIAfhMQAFgLgLAAIgNAAIAAgYIBFAAIAAAYIgNAAQgGAAgEAJIg1B+QgOAigNANQgQAPgZAAQgTAAgMgJg");
	this.shape_30.setTransform(30.525,29.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMBSIAAgZIANAAQAGABAAgJIAAhFQAAghgbAAQgiABAAA0IAAAxQAAAJAGgBIANAAIAAAZIhTAAIAAgZIAOAAQAGABAAgJIAAhcQAAgKgGAAIgOAAIAAgYIAZAAQAYAAAPgDIAAAgQAPgiAmABQA0gBAAA9IAABGQAAAJAGgBIAOAAIAAAZg");
	this.shape_31.setTransform(3.775,26.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag6A9QgWgXAAgmQAAglAXgXQAXgYAlAAQAlAAAUAXQAVAWAAAnIAAAIIh0AAQACAyArAAQAfAAANgfIAZALQgQAvg5AAQgpAAgXgYgAAkgNQAAgZgIgKQgIgKgRAAQgjAAgEAtIBIAAIAAAAg");
	this.shape_32.setTransform(-14.95,26.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANBvIAAgZIANAAQAFAAAAgIIAAhGQAAgggaAAQgiAAAAA0IAAAyQAAAIAFAAIANAAIAAAZIhTAAIAAgZIAPAAQAFAAAAgIIAAiWQAAgKgFAAIgQAAIAAgZIAbAAQAYAAAPgDIAABZQAPggAmAAQA0AAAAA7IAABIQAAAIAFAAIAPAAIAAAZg");
	this.shape_33.setTransform(-33.525,23.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA0BuIg1iZIg2CZIgdAAIg6i5QgDgJgHAAIgPAAIAAgZIBcAAIAAAZIgQAAQgIAAADAJIAlB2IAqh3QADgIgHAAIgTAAIAAgZIBfAAIAAAZIgTAAQgHAAADAIIArB4IAlh3QACgJgIAAIgTAAIAAgZIBRAAIAAAZIgQAAQgJAAgDAJIg7C5g");
	this.shape_34.setTransform(-60.625,23.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HEAD0, new cjs.Rectangle(-150,0,300,205.3), null);


(lib.cpcofamilyreveps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cp-co-family-rev.eps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJCJQg3g2AAhTQAAhSA3g3QA2g1BTAAQBUAAA2A1QA3A3AABSQAABTg3A2Qg2A2hUAAQhTAAg2g2gAhRhVQgeAhAAA0QAAA0AeAiQAgAjAxAAQAyAAAfgjQAfgiAAg0QAAg0gfghQgfgjgyAAQgyAAgfAjg");
	this.shape.setTransform(544.825,212.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2CKQg4g2AAhUQAAhTA4g2QA3g1BSAAQBpAAA0BaIhEAhQgMgXgXgOQgZgQgdAAQgwAAggAjQggAhgBA0QABA0AgAiQAgAjAwAAQAdAAAZgQQAXgNAMgZIBEAhQg1BbhoAAQhSAAg3g1g");
	this.shape_1.setTransform(507.15,212.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2CKQg4g2gBhUQABhTA4g2QA3g1BRAAQBqAAAzBaIhDAhQgMgXgXgOQgagQgdAAQgvAAggAjQggAhgBA0QABA0AgAiQAgAjAvAAQAeAAAZgQQAXgOAMgYIBDAhQg0BbhpAAQhRAAg3g1g");
	this.shape_2.setTransform(471.25,212.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTBlQgogoAAg9QAAg9AognQAognA9AAQBIAAAiAwIguArQgUgdglAAQgfAAgUAWQgUAVAAAiQAAAjAUAVQAUAWAfAAQAkAAAVgdIAuAqQgjAxhHAAQg9AAgogng");
	this.shape_3.setTransform(425.725,217.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDDDIAAkKIBFAAIAAEKgAhiDDIAAjMIgtAAIAAg+IAtAAIAAgOQAAgrAZgZQAZgZAoAAQAdAAAVALIgPAzQgIgHgOAAQgPAAgIAKQgJAKAAASIAAAOIA1AAIAAA+Ig1AAIAADMgABHh6QgMgNAAgRQAAgRAMgNQANgMARAAQASAAAMAMQAMANAAARQAAARgMANQgMAMgSAAQgRAAgNgMg");
	this.shape_4.setTransform(396.15,211.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiDDIAAkKIBFAAIAAEKgAgdh6QgMgNAAgRQAAgRAMgNQANgMAQAAQARAAANAMQAMANAAARQAAARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape_5.setTransform(375.75,211.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTBlQgogoAAg9QAAg9AognQAognA9AAQAmAAAdAPQAYAMAPAVIguArQgUgdglAAQgfAAgUAWQgUAVAAAiQAAAjAUAVQAUAWAfAAQAkAAAVgdIAuAqQgjAxhHAAQg9AAgogng");
	this.shape_6.setTransform(357.175,217.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcB2QgfgZAAgpQAAgrAfgWQAZgUAlAAQA5AAAbAhIAAglQAAgUgQgNQgRgMgZAAQgrAAgjAgIgagvQAvgqBFAAQAzAAAeAVQAjAaAAA2IAACrIhGAAIAAgbQgOAQgWAJQgWAJgaAAQgkAAgagWgAglAXQgPAMAAASQAAASAPALQANAKAXAAQAlAAASgXIAAghQgSgXglAAQgWAAgOAKg");
	this.shape_7.setTransform(328.9,217.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiTC4IAAlwICrAAQA6AAAiAkQAgAhAAAzQAAAyggAgQgiAig6ABIhdAAIAACDgAhFgOIBTAAQAXAAAQgOQAPgOAAgXQAAgXgPgOQgQgOgXAAIhTAAg");
	this.shape_8.setTransform(300.575,212.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcB2QgfgZAAgpQAAgrAfgWQAZgUAlAAQA5AAAaAhIAAglQABgUgRgNQgQgMgZAAQgsAAgiAgIgbgvQAvgqBFAAQAzAAAeAVQAkAaAAA2IAACrIhHAAIAAgbQgNAQgXAJQgVAJgaAAQgjAAgbgWgAglAXQgPAMAAASQAAASAPALQAOAKAVAAQAmAAARgXIAAghQgRgXgmAAQgVAAgOAKg");
	this.shape_9.setTransform(253.6,217.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiDDIAAkKIBGAAIAAEKgAgdh6QgMgNAAgRQAAgRAMgNQANgMAQAAQASAAAMAMQAMAMAAASQAAARgMANQgMAMgSAAQgQAAgNgMg");
	this.shape_10.setTransform(234.2,211.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhACTIAAAiIhHAAIAAlwIBHAAIAACIQAfgoAyAAQA0gBAhAmQAiAnAAA/QAABBgiAnQghAkg0AAQgxAAgggpgAgmgUQgSAJgIAMIAABeQAIAOASAIQARAJARAAQAegBASgVQATgVAAgjQAAgjgTgUQgTgWgdAAQgRAAgRAJg");
	this.shape_11.setTransform(213.475,212.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACCCJIAAioQAAgqgoAAQgRAAgQAKQgNAIgJANIAACzIhGAAIAAioQAAgqgoAAQgQAAgQAKQgOAIgJANIAACzIhGAAIAAkKIBGAAIAAAjQAKgPAXgMQAbgPAbAAQA6AAAQAxQAMgUAYgOQAbgPAcAAQAmAAAUAUQAVAVAAAoIAADAg");
	this.shape_12.setTransform(174.525,217.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhnByQgVgVgBgpIAAi8IBHAAIAAChQAAAxAxABQAkgBAYgeIAAi0IBGAAIAAEKIhGAAIAAgiQgPASgXAKQgYANgfAAQgrAAgWgXg");
	this.shape_13.setTransform(136.6,217.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiC4IAAlwIBFAAIAAFwg");
	this.shape_14.setTransform(115.375,212.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhnBjQglgoAAg7QAAg6AlgoQAogpA/AAQBAAAAoApQAlAoAAA6QAAA7glAoQgoAphAAAQg/AAgogpgAgyg2QgRAWAAAgQAAAhARAWQATAXAfAAQAfAAATgXQASgWAAghQAAgggSgWQgTgXgfAAQgfAAgTAXg");
	this.shape_15.setTransform(94.075,217.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah2CKQg4g2AAhUQAAhTA4g2QA3g1BRAAQBqAAAzBaIhDAhQgMgXgXgOQgZgQgeAAQgvAAggAjQghAiAAAzQAAA0AhAiQAgAjAvAAQAeAAAZgQQAXgNAMgZIBDAhQg0BbhpAAQhRAAg3g1g");
	this.shape_16.setTransform(60.825,212.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhFByIAFghQAGADAIAAQARAAAHgOIAIgTIhDimIAmAAIAvB7IAwh7IAnAAIhQDCQgOAkgqABQgHAAgNgCg");
	this.shape_17.setTransform(523.95,284.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRByIAAjjIAjAAIAADjg");
	this.shape_18.setTransform(511.225,277.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRB2IAAikIAjAAIAACkgAgPhQQgGgGAAgJQAAgJAGgHQAHgGAIAAQAJAAAHAGQAGAGAAAKQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_19.setTransform(502.975,277.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABTBUIAAhqQAAgdgbgBQgLAAgLAIQgKAFgGAJIAAByIgjAAIAAhqQAAgdgbgBQgLAAgLAIQgKAGgGAIIAAByIgkAAIAAijIAkAAIAAAWQAGgJAOgIQARgKAQAAQAjAAAKAfQAIgMAOgJQAQgKASAAQAvAAAAAyIAAB2g");
	this.shape_20.setTransform(484.625,280.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BJQgSgQAAgZQAAgbASgNQAQgNAXAAQAjAAASAVIAAgYQAAgOgLgJQgLgIgQAAQgbAAgWAVIgPgZQAcgbApAAQAeAAASAOQAUAPAAAfIAABsIgjAAIAAgRQgUAWghAAQgWAAgRgOgAgaALQgKAIAAAOQAAANAKAIQAKAIAPAAQAaAAANgRIAAgZQgNgRgaAAQgPAAgKAIg");
	this.shape_21.setTransform(460.725,280.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhNByIAAjjICbAAIAAAjIhzAAIAAA8IBxAAIAAAiIhxAAIAABig");
	this.shape_22.setTransform(443.775,277.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAmBUIAAhlQAAgjgiAAQgMABgMAGQgKAGgHAJIAAByIgkAAIAAijIAkAAIAAAWQAJgLAOgHQAQgJASAAQA2AAAAA1IAABzg");
	this.shape_23.setTransform(415.075,280.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag9A9QgXgZAAgkQAAgkAXgYQAYgaAlAAQAmAAAYAaQAXAYAAAkQAAAlgXAYQgYAagmAAQglAAgYgagAgiglQgNAPAAAWQAAAXANAPQANARAVAAQAWAAANgRQANgPAAgXQAAgWgNgPQgNgRgWAAQgVAAgNARg");
	this.shape_24.setTransform(396.425,280.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhIBdIARgaQATAWAiAAQATAAAMgKQAQgMAAgXIAAgUQgVAbgfAAQghAAgTgWQgVgXAAgmQAAgoAVgXQAUgWAgAAQAgAAAUAbIAAgXIAkAAIAACbQAAApgbAUQgWAPgiAAQgrAAgbgZgAgehHQgNAPAAAYQAAAYANANQANAPAUAAQANAAALgHQANgGAFgJIAAg9QgFgKgNgGQgLgGgNAAQgVAAgMAOg");
	this.shape_25.setTransform(377.05,284.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5A/QgZgYAAgnQAAgkAYgYQAYgaAjAAQAlAAAXAaQAWAZAAAmIAAAJIh/AAQACATAOANQAOANAWAAQAcAAASgSIARAYQgaAYgpAAQglAAgYgYgAgggqQgLAMgBARIBcAAQgBgRgLgMQgMgOgXAAQgUAAgNAOg");
	this.shape_26.setTransform(358.175,280.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsBUIAAikIAkAAIAAAZQAJgNANgHQAPgIAQAAIAAAjIgMgBQgLAAgMAHQgMAGgGAJIAABvg");
	this.shape_27.setTransform(343.55,280.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhTBUQghggAAg0QAAgyAhgiQAhghAyAAQAzAAAhAhQAhAigBAyQABA0ghAgQghAigzAAQgyAAghgigAg2g6QgVAXAAAjQAAAjAVAXQAVAZAhAAQAhAAAWgZQAVgXAAgjQAAgjgVgXQgVgYgiAAQgiAAgUAYg");
	this.shape_28.setTransform(324.35,277.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag5A/QgYgYAAgnQAAgkAXgYQAYgaAjAAQAkAAAYAaQAVAZAAAmIAAAJIh+AAQACATAOANQAOANAWAAQAMAAAMgEQAOgFAJgJIAQAYQgaAYgpAAQgkAAgZgYgAgggqQgLAMgBARIBbAAQAAgRgKgMQgNgOgXAAQgUAAgNAOg");
	this.shape_29.setTransform(301.8,280.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgsBUIAAikIAkAAIAAAZQAJgNANgHQAPgIAQAAIAAAjIgLgBQgMAAgNAHQgMAGgFAJIAABvg");
	this.shape_30.setTransform(287.175,280.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2BJQgSgQAAgZQAAgbASgNQAQgNAXAAQAjAAASAVIAAgYQAAgOgLgJQgLgIgQAAQgcAAgVAVIgPgZQAcgbApAAQAeAAASAOQAUAPAAAfIAABsIgjAAIAAgRQgUAWghAAQgWAAgRgOgAgaALQgKAIAAAOQAAANAKAIQAKAIAPAAQAaAAANgRIAAgZQgNgRgaAAQgPAAgKAIg");
	this.shape_31.setTransform(270.875,280.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhGBVQgjghAAg0QAAgzAjghQAhghAxAAQA9AAAhAzIgjARQgIgOgPgJQgRgKgTAAQggAAgWAYQgWAXAAAjQAAAkAWAXQAWAXAgABQAUAAAQgKQAPgJAIgPIAjARQghA0g9AAQgxAAghghg");
	this.shape_32.setTransform(250.875,277.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag5A/QgZgYAAgnQAAgkAYgYQAYgaAjAAQAlAAAXAaQAWAZAAAmIAAAJIh/AAQACATAOANQAOANAWAAQAMAAANgEQANgFAJgJIAQAYQgZAYgqAAQglAAgYgYgAgggqQgLAMgBARIBcAAQgBgRgKgMQgNgOgXAAQgUAAgNAOg");
	this.shape_33.setTransform(220.625,280.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAmByIAAhoQAAgRgJgIQgIgHgRAAQgYAAgRAWIAAByIgkAAIAAjjIAkAAIAABWQAJgMAOgGQAQgJASAAQA2AAAAA1IAABzg");
	this.shape_34.setTransform(202.225,277.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXBBIAAhfIgcAAIAAgfIAcAAIAAgtIAjAAIAAAtIAhAAIAAAfIghAAIAABWQAAATAPAAQAMAAAEgGIAJAbQgLALgXAAQgpAAAAgqg");
	this.shape_35.setTransform(187.075,278.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaB0IAAiFIgbAAIAAgfIAbAAIAAgJQAAgbAPgQQANgPAYAAQAQAAAMAHIgHAaQgHgDgIAAQgXAAAAAcIAAAJIAiAAIAAAfIgiAAIAACFg");
	this.shape_36.setTransform(168.15,277.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag9A9QgXgZAAgkQAAgkAXgYQAXgaAmAAQAmAAAYAaQAXAYAAAkQAAAlgXAYQgYAagmAAQgmAAgXgagAgjglQgMAPAAAWQAAAXAMAPQAOARAVAAQAWAAANgRQAMgPAAgXQAAgWgMgPQgNgRgWAAQgVAAgOARg");
	this.shape_37.setTransform(152.5,280.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXBBIAAhfIgcAAIAAgfIAcAAIAAgtIAjAAIAAAtIAhAAIAAAfIghAAIAABWQAAATAPAAQAMAAAEgGIAJAbQgLALgXAAQgpAAAAgqg");
	this.shape_38.setTransform(128.475,278.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgsBUIAAikIAkAAIAAAZQAJgNANgHQAPgIAQAAIAAAjIgMgBQgLAAgNAHQgMAGgFAJIAABvg");
	this.shape_39.setTransform(117.275,280.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag2BJQgSgQAAgZQAAgbASgNQAQgNAXAAQAiAAASAVIAAgYQAAgOgKgJQgLgIgQAAQgbAAgWAVIgPgZQAcgbApAAQAeAAASAOQAUAPAAAfIAABsIgkAAIAAgRQgTAWghAAQgWAAgRgOgAgaALQgKAIAAAOQAAANAKAIQAKAIAPAAQAaAAAMgRIAAgZQgMgRgaAAQgPAAgKAIg");
	this.shape_40.setTransform(102.175,280.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhXByIAAjjIBjAAQAjAAAVAWQATATAAAeQAAAfgTATQgVAVgjAAIg7AAIAABVgAgvgFIA3AAQARAAALgKQAKgKABgRQgBgQgKgKQgLgJgRgBIg3AAg");
	this.shape_41.setTransform(85.25,277.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAlAvIgDgpQgCgTAAgVIAAAAQgEARgIASIgRAuIgIAAIgQgtIgLgkIgEBRIgMAAIAHheIAQAAIAQAvQAFAOAEAQIAAAAQADgMAHgSIARgvIAQAAIAFBeg");
	this.shape_42.setTransform(581.7,200.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFAvIAAhTIgdAAIAAgLIBFAAIAAALIgdAAIAABTg");
	this.shape_43.setTransform(572.525,200.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_44.setTransform(171.9,151.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ALpHdIixmWIBGAKIhGiYIA1AIIhwkgIhmDwIA4ANIh+DdIBhAPIiTElIhkgHIh+kTIA3AGIg3h7IA2AJIhjjYIhMCxIAuAKIhmC1IBOALIhlDLIiWgGIhJidIAsAEIgrhhIArAGIhRidIg8B/IAlAIIhQCQIA9AJIg2BsIhqgCIg9iLIAoAGIgohfIAoAGIhMjJIg/CjIAqAQIhLCLIA6AJIguBeIhHAAIAohDIhAgKIBbiMIgsgJICFk6ICGFvIgogIIArBBIBMhzIgvgJICKkEICKE6IgogIIBABjIgrgHIA3BnIBaiaIhSgMIB2i2Ig6gMICtlQICtGUIgzgJIBQB9Ig2gIIBFCAIBfihIhggOICKjUIhEgNIDLmwIDMIFIg2gJIBYCIIg/gJIC/FkgAohFyIAfg3IhBgKIACgEIgFAAg");
	this.shape_45.setTransform(387.9,95.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhSCpIgygHIBIhvIgjgHIBpjgIBpEJIgegGIAwBMIgggEIAPAcIg3ABIgahBIAeADIgehLIAeAFIgzh9IgsBmIAZAGIg3BuIAqAHIgOAgIg5ABg");
	this.shape_46.setTransform(288.9,116.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ApkFFIhBgJIBeiRIgugJICJkkICLFaIgpgIIBABkIgrgHIA3BnIBaiaIhSgMIB2i2Ig6gMICulvICsGzIgtgBIBLB0Ig2gIIBFCBIBeihIhggOICKjUIhEgOIDMnPIDVIpIg7gMIBeCcIg/gJIB+DqIhyACIiLlGIA3AGIhDiXIBCALIh3kzIhiEDIA4AMIh9DeIBgAOIiJEUIhvAHIhwkNIAqAEIg1h7IA1AJIhjjvIhQC7IAtALIhhDBIBOALIh5DyIhoALIhjjWIAsAFIgrhhIAqAGIhKi1IhCCWIAlAIIhRCQIA+AJIhnDNIhRAOg");
	this.shape_47.setTransform(203.375,94.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ATfAkQpFgiqaAAQqZAApFAiQo1AglsA4QA3gmC8gqQDDgsEcgkQKkhXMJAAQMHAAKiBXQEaAkDFAsQC8AqA8AmQlvg4oyggg");
	this.shape_48.setTransform(303.325,157.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.3,42.4,543.3000000000001,253.49999999999997);


(lib.BUTTONbkgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnmC7Qg1AAgmgmQglglAAg1IAAh1QAAg1AlglQAmgmA1AAIPNAAQA1AAAmAmQAlAlAAA1IAAB1QAAA1glAlQgmAmg1AAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-18.6,123,37.3);


(lib.BLURTillamook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BLUR_300x250Tillamook();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BLURTillamook, new cjs.Rectangle(-150,-125,300,250), null);


(lib.BLURClatsop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BLUR_300x250Clatsop();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BLURClatsop, new cjs.Rectangle(-150,-125,300,250), null);


(lib.covwhiteeps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.cpcofamilyreveps("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25,0,0,0,314.8,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-31.6,135.8,63.3);


(lib.BUTTON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8300").s().p("AgaA1IAAgQIAHAAIADgBIAAgFIAAgVIgagpQgDgFgEAAIgEAAIAAgQIA2AAIAAAQIgEAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAACABADIAMAUIAMgWQADgFgGAAIgGAAIAAgQIAsAAIAAAQIgFAAQgEAAgEAFIgZAoIAAAWQAAAFAEABIAHAAIAAAQg");
	this.shape.setTransform(31.525,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8300").s().p("AgrA1IAAgQIAFAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAg+QAAgFgEAAIgFAAIAAgQIA1AAIAAAQIgHAAQgDAAAAAFIAABEIAIAAIAKgBQADgBABgFIAFgQIARAAIAAAng");
	this.shape_1.setTransform(21.625,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8300").s().p("AgwA1IAAgQIAGAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAg+QAAgFgDAAIgGAAIAAgQIA2AAQAWAAAKAIQALAHAAARQAAASgKAGQgKAIgXAAIgLAAIAAATQAAAFAEABIAGAAIAAAQgAgFgDIAHAAQAPAAAAgRQAAgIgEgEQgDgEgIAAIgHAAg");
	this.shape_2.setTransform(12.35,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8300").s().p("AgwA1IAAgQIAGAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAg+QAAgFgDAAIgGAAIAAgQIA2AAQAWAAALAIQAKAHAAARQAAASgKAGQgLAIgWAAIgLAAIAAATQAAAFAEABIAGAAIAAAQgAgFgDIAHAAQAPAAAAgRQAAgIgDgEQgEgEgIAAIgHAAg");
	this.shape_3.setTransform(2.6,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8300").s().p("AAEA1IAAgQIAFAAQAFAAgCgGIgEgMIgdAAIgEAMQgCAGAFAAIAFAAIAAAQIgoAAIAAgQIAFAAIADgBIADgFIAfhTIAgAAIAfBTQACAGAEAAIAEAAIAAAQgAAEAEIgKgeIgKAeIAUAAg");
	this.shape_4.setTransform(-7.975,7.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8300").s().p("AgoAoQgPgPAAgZQAAgYAPgQQAQgOAZAAQAaAAAOAOQAPAPAAAZQAAAZgPAPQgPAPgaABQgZgBgPgPgAgPgbQgFAHAAARIAAAGQAAARAFAJQAFAGAKABQALgBAFgGQAFgJAAgRIAAgGQAAgRgFgHQgFgIgLAAQgJAAgGAIg");
	this.shape_5.setTransform(-22.575,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF8300").s().p("AgbA1IAAgQIAHAAQAEgBAAgFIAAhDIgCAAIgKABQgCABgBAFIgCAIIgPAAIAAgfIBhAAIAAAfIgPAAIgBgIQgBgEgEgCIgKgBIgCAAIAABDQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAIAHAAIAAAQg");
	this.shape_6.setTransform(-33.15,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF8300").s().p("AASA1IgSg2IgSA2IgaAAIgZhTQgCgGgEAAIgFAAIAAgQIAzAAIAAAQIgEAAIgEABIABAEIANArIANgrQACgFgFAAIgFAAIAAgQIAwAAIAAAQIgFAAQgEAAACAFIAOAsIANgsQABgFgEAAIgGAAIAAgQIAoAAIAAAQIgFAAIgEABIgCAFIgaBTg");
	this.shape_7.setTransform(38.15,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8300").s().p("AgoAoQgPgPAAgZQAAgYAPgQQAQgOAZAAQAaAAAOAOQAPAPAAAZQAAAZgPAPQgPAPgaAAQgZAAgPgPgAgPgbQgFAHAAARIAAAGQAAARAFAIQAFAIAKAAQALAAAFgIQAFgIAAgRIAAgGQAAgRgFgHQgFgIgLAAQgJAAgGAIg");
	this.shape_8.setTransform(24.525,-6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8300").s().p("AAHA1IAAgQIAFAAQAEgBAAgFIAAgYIgfAAIAAAYQAAAFAEABIAFAAIAAAQIg0AAIAAgQIAGAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAg+QAAgFgEAAIgGAAIAAgQIA0AAIAAAQIgFAAQgEAAAAAFIAAAYIAfAAIAAgYQAAgFgEAAIgFAAIAAgQIA0AAIAAAQIgGAAQgEAAAAAFIAAA+QAAAFAEABIAGAAIAAAQg");
	this.shape_9.setTransform(13.075,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8300").s().p("AAXA1IgxhEIAAAuQAAAFAEABIAHAAIAAAQIgpAAIAAgQIAHAAQAEgBAAgFIAAg+QAAgFgEAAIgHAAIAAgQIArAAIAnA3IAAgiQAAgFgDAAIgHAAIAAgQIApAAIAAAQIgHAAQgEAAAAAFIAABUg");
	this.shape_10.setTransform(-1.625,-6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF8300").s().p("AAcA1QgRAAgCgcQgCgJgCgDQgDgFgGABIgFAAIAAAWQAAAFADABIAGAAIAAAQIg0AAIAAgQIAFAAQAFgBAAgFIAAg+QAAgFgFAAIgFAAIAAgQIA8AAQAnAAAAAdQgBAVgWADQALAEAFAGQAEAHABALQAAAIAGAAIACAAIAAAQgAgJgEIAGAAQAIAAAFgEQADgDAAgKQAAgHgDgEQgEgEgHAAIgIAAg");
	this.shape_11.setTransform(-12.4,-6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF8300").s().p("AAEA1IAAgQIAFAAQAFAAgCgGIgEgMIgdAAIgEAMQgCAGAFAAIAFAAIAAAQIgoAAIAAgQIAFAAIADgBIADgFIAfhTIAgAAIAfBTQACAGAEAAIAEAAIAAAQgAAEAEIgKgeIgKAeIAUAAg");
	this.shape_12.setTransform(-23.375,-6.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF8300").s().p("AguA1IAAgQIAGAAQAEgBAAgFIAAg+QAAgFgEAAIgGAAIAAgQIBcAAIAAAeIgQAAIgDgIQgCgEgCgBIgJgBIgRAAIAAAcIAIAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAIABgGIAAgDIAPAAIAAAlIgPAAIAAgEQAAgIgFABIgIAAIAAAdIASAAQAHAAACgBQACgBADgFIACgHIAQAAIAAAeg");
	this.shape_13.setTransform(-33.925,-6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF8300").s().p("AgrA1IAAgQIAFAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAg+QAAgFgEAAIgFAAIAAgQIA1AAIAAAQIgHAAQgDAAAAAFIAABEIAIAAIAKgBQADgBABgFIAFgQIARAAIAAAng");
	this.shape_14.setTransform(-43.125,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.BUTTONbkgd();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.Buttonshad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69,-27,0.5544,0.5544);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BUTTON, new cjs.Rectangle(-69,-27,143.6,59.3), null);


// stage content:
(lib.CPCCO_Stronger_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_65 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65).call(this.frame_65).wait(123));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(188));

	// LOGO
	this.instance = new lib.covwhiteeps("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(348.5,332.5,1,1,0,0,0,266.9,125.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).to({alpha:1},10).wait(1));

	// BUTTON
	this.instance_1 = new lib.BUTTON();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.05,206.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},0).to({alpha:1},10).wait(1));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,22.4);
	this.instance_2.alpha = 0.25;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({alpha:1},4).to({_off:true},29).wait(120));

	// 2
	this.instance_3 = new lib.BLURClatsop();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,110,1,1.4);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({scaleY:1,y:125,alpha:1},6).to({_off:true},1).wait(149));

	// 1
	this.instance_4 = new lib.BLURTillamook();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,110,1,1.4);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},29).to({state:[{t:this.instance_5}]},6).to({state:[]},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({_off:true,scaleY:1.4,y:110,alpha:0.5,mode:"synched",startPosition:0},6).wait(153));

	// HEAD1
	this.instance_6 = new lib.HEAD1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({alpha:0.25},4).to({_off:true},1).wait(155));

	// HEAD0
	this.instance_7 = new lib.HEAD0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},113).wait(75));

	// bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009681").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,60,388,225.10000000000002);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CPCCO_Stronger_300x250_atlas_.png?1572130161258", id:"CPCCO_Stronger_300x250_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;