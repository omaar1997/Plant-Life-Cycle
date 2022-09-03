(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1920,1086]]},
		{name:"index_atlas_2", frames: [[0,0,1118,1175]]},
		{name:"index_atlas_3", frames: [[0,0,1116,1075],[0,1077,1184,740]]},
		{name:"index_atlas_4", frames: [[759,516,135,152],[474,516,283,104],[0,516,472,197],[0,0,1029,514],[474,622,131,129]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5576,1522);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5477,2942);


(lib.Image_0 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.initialize(img.Image_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5641,1726);


(lib.Image_1_0 = function() {
	this.initialize(img.Image_1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5433,2853);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3178,1049);


(lib.Image_2_0 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(img.Image_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6380,2742);


(lib.Image_4 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset11111 = function() {
	this.initialize(img.Asset11111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3582,2237);


(lib.Asset111111 = function() {
	this.initialize(img.Asset111111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3582,2237);


(lib.Asset2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset22222 = function() {
	this.initialize(img.Asset22222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3582,2237);


(lib.Asset3 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset7 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3();
	this.instance.setTransform(-765.55,-82.5,0.24,0.24);

	this.instance_1 = new lib.Image_3();
	this.instance_1.setTransform(-765.55,-575.5,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.5,-575.5,1531.1,1151.1);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjvAMbIAA41MBHfAAAIAAY1g");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.8,-79.5,457.70000000000005,159);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzdSxMAAAglhMAm7AAAMAAAAlhg");
	this.shape.setTransform(-0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-120,249.2,240.1);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1();
	this.instance.setTransform(-657.2,-353.05,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-657.2,-353,1314.5,706), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_0();
	this.instance.setTransform(-134.15,-141,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-134.1,-141,268.29999999999995,282), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-66,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-66,-64,131,129), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-515,-257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-515,-257,1029,514), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,472,197), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_4();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,284.2,177.6), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1_1();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1353.8,414.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1338.2,365.3), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,762.7,251.8), null);


(lib.SproutQues = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3dKBIAA0BMAu7AAAIAAUBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SproutQues, new cjs.Rectangle(-150.2,-64.1,300.5,128.2), null);


(lib.SproutAns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Asqa7MAAAg11IZVAAMAAAA11g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SproutAns, new cjs.Rectangle(-81.1,-172.2,162.2,344.5), null);


(lib.SeedQues = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3dKBIAA0BMAu7AAAIAAUBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeedQues, new cjs.Rectangle(-150.2,-64.1,300.5,128.2), null);


(lib.SeedAns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsMQ6MAAAghzIYZAAMAAAAhzg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeedAns, new cjs.Rectangle(-78.1,-108.1,156.3,216.3), null);


(lib.RestartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArBLCIAA2DIWDAAIAAWDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-70.6,141.2,141.2);


(lib.ReplayBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A09WCMAAAgsDMAp7AAAMAAAAsDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,-141,268.29999999999995,282);


(lib.PlayBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egk3APZIAA+xMBJvAAAIAAexg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236,-98.5,472,197);


(lib.PlantQues = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3dKBIAA0BMAu7AAAIAAUBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlantQues, new cjs.Rectangle(-150.2,-64.1,300.5,128.2), null);


(lib.PlantAns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Asqa7MAAAg11IZVAAMAAAA11g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlantAns, new cjs.Rectangle(-81.1,-172.2,162.2,344.5), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Image_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2_0();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_2_1, new cjs.Rectangle(0,0,267.9,258), null);


(lib.Image_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1_0();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_1_2, new cjs.Rectangle(0,0,1303.9,684.7), null);


(lib.muteBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(12,1,1).p("Am4pYINxSx");
	this.shape.setTransform(0.025,-6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Asset3();
	this.instance.setTransform(-67.5,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-76,135,152);


(lib.MotherCorrect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset7();
	this.instance.setTransform(-141.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MotherCorrect, new cjs.Rectangle(-141.5,-52,283,104), null);


(lib.HardCorrect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset7();
	this.instance.setTransform(-142,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HardCorrect, new cjs.Rectangle(-142,-42,283,104), null);


(lib.FlowerQues = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3dKBIAA0BMAu7AAAIAAUBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FlowerQues, new cjs.Rectangle(-150.2,-64.1,300.5,128.2), null);


(lib.FlowerAns = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Asqa7MAAAg11IZVAAMAAAA11g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FlowerAns, new cjs.Rectangle(-81.1,-172.2,162.2,344.5), null);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-1587.5);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(0,-436.45);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(0,436.4);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(0,1587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.5,-2163,1531.1,4326);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-1587.5);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(0,-436.45);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(0,436.4);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(0,1587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.5,-2163,1531.1,4326);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-1587.5);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(0,-436.45);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(0,436.4);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(0,1587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.5,-2163,1531.1,4326);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-0.05,-1587.5);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-0.05,-436.45);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(-0.05,436.4);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(-0.05,1587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.6,-2163,1531.2,4326);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-1587.5);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(0,-436.45);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(0,436.4);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(0,1587.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-765.5,-2163,1531.1,4326);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween8("synched",0);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(100.2,0);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(-100.15,0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},75).to({state:[{t:this.instance_2}]},88).to({state:[{t:this.instance_3}]},90).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:100.2},75).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},75).to({_off:true,x:-100.15},88).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},88).to({_off:true,x:0},90).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-865.7,-2163,1731.5,4326);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1_2();
	this.instance.setTransform(0,0.05,1,1,0,0,0,651.9,342.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-651.9,-342.3,1303.9,684.7), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2_1();
	this.instance.setTransform(0,0,1,1,0,0,0,133.9,129);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-133.9,-129,267.9,258), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1_1();
	this.instance.setTransform(0,0,1,1,0,0,0,960,540);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ECxwBPmQiIhsjMhlQqMlCw4h/Qr4hZjRgSQlYgekDAPQjkAMm9BDQqMBnoOBMQqgBhliBMQhLAQkoBOQiQAmjxAYQkmAesCAwQpsAmqPA2QqVA3iZAKQluAXlggEQmBgEpbglQuRg4g9gHQm5g3t5hVQvkhfz2hkQubhJpehHQkggimJg3QkfglifADQjBADjXA6QjLA2lrCPUgJRADphMFgWEQ3ym67mopQtzkUpDi9QF1ovHKpsQOUzVGokpQC+iFCViZQC4i8BohVQHrmPZ/tpUANqgHLgikgCfQsNg5zegXI9kgXQtqgLhngcQiDgkNThbUAYpgCpB+MgKAUB3ggJfBfkgDzUBMdgDDA5wAAsUApPAAgAbxACUQN4BKFpBEQAzEyB/FkQD+LIF+D+QBUA4DFB0QD5CSBmA/QHLEbD5D0QFXFPAiFLQAqGPmSGSQllFknUJcQoMK5kHFPQnIJFlkFQQnIGvm9C7UgMlAFTgkeARcMgh8AQYQgbgihFg2g");
	mask.setTransform(669.0646,257.7616);

	// Layer_1_copy
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(765.55,3241.05);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(765.55,-2271.45);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},85).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1}]},514).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({y:2684.2,alpha:0},59).to({y:2580.35,alpha:1},11).to({_off:true,y:-2271.45},514).wait(22));

	// Layer_1
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(765.55,3241.05);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(765.55,-2271.45);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},547).to({state:[]},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:2891.75,alpha:1},37).to({_off:true,y:-2271.45},547).wait(107));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-260.4,1731.6000000000001,1036.4);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_81 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(81).call(this.frame_81).wait(1));

	// Symbol_11
	this.instance = new lib.Symbol11();
	this.instance.setTransform(51.95,-118,3.6294,3.6294);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:0.9109,scaleY:0.9109},4).to({scaleX:1,scaleY:1},3).wait(62));

	// Layer_2
	this.RestartBtn = new lib.ReplayBtn();
	this.RestartBtn.name = "RestartBtn";
	this.RestartBtn.setTransform(12.15,259);
	this.RestartBtn._off = true;
	new cjs.ButtonHelper(this.RestartBtn, 0, 1, 2, false, new lib.ReplayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.RestartBtn).wait(20).to({_off:false},0).wait(62));

	// Symbol_12
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-16.35,122.55,4.6451,4.6451);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.7227,scaleY:0.7227,x:7.7,y:243.1},4).to({scaleX:1,scaleY:1,x:6,y:237},2).wait(5).to({rotation:720},36,cjs.Ease.quadInOut).wait(26));

	// Symbol_13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(12.15,224.75,4.6451,4.6451);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:0.7227,scaleY:0.7227,y:259},4).to({scaleX:1,scaleY:1},2).wait(67));

	// Symbol_14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.setTransform(29.6,-44.45,2.0235,2.0235);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({scaleX:0.9477,scaleY:0.9477,y:-32.85},4).to({scaleX:1,scaleY:1,y:-33.4},2).wait(73));

	// Symbol_15
	this.instance_4 = new lib.Symbol15();
	this.instance_4.setTransform(13.1,368.05,4.6451,4.6451);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,x:12.35,y:289.85},4).wait(69));

	// Symbol_16
	this.instance_5 = new lib.Symbol16();
	this.instance_5.setTransform(32.95,20.95,2.0235,2.0235);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleX:0.9477,scaleY:0.9477,x:31.15,y:-2.15},4).to({scaleX:1,scaleY:1,x:31.25,y:-1.05},2).wait(73));

	// Symbol_17
	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(8.25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1817.2,-1050.7,3734.7,2018);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Layer_2
	this.PlayBtn = new lib.PlayBtn();
	this.PlayBtn.name = "PlayBtn";
	this.PlayBtn.setTransform(-222.7,191.25);
	this.PlayBtn._off = true;
	new cjs.ButtonHelper(this.PlayBtn, 0, 1, 2, false, new lib.PlayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.PlayBtn).wait(27).to({_off:false},0).wait(58));

	// Symbol_6
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-222.8,191.55,2.797,2.797,0,0,0,235.9,98.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:235.8,scaleX:0.7627,scaleY:0.7627,x:-222.85,y:191.45},3).to({regX:235.9,scaleX:1,scaleY:1,x:-222.8},2).wait(58));

	// Symbol_1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-236.3,-174.5,3.6859,3.6859,0,0,0,381.4,125.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regY:125.9,scaleX:0.7944,scaleY:0.7944,x:-236.45,y:-173.9},4).to({scaleX:1,scaleY:1},2).wait(65));

	// Symbol_2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(66.8,-419.8,4.8697,4.8697,0,0,0,990,223.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regX:669.1,regY:182.6,scaleX:1,scaleY:1,x:-253.55,y:-460.4},4).wait(73));

	// Symbol_3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(-586.65,-388.95,2.8141,2.8141,0,0,0,403.9,277.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:676.9,regY:207.1,scaleX:0.909,scaleY:0.909,x:-313.6,y:-458.95},4).to({scaleX:1,scaleY:1,x:-313.65},2).wait(78));

	// Symbol_7
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(-273.9,-317.35,1,1,0,0,0,765.6,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// Symbol_5
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(-1447.35,314.85,1,1,0,0,0,142.1,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-1030.4},7).wait(78));

	// Layer_4
	this.instance_6 = new lib.Asset11111();
	this.instance_6.setTransform(-1983,-1410);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4754.2,-1506.7,6840.7,6264.4);


(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var st = this;
		var QuestionsTarget;
		var AnswersTarget;
		var flag;
		var counter = 4;
		
		var Questions = [st.SeedQuestion, st.SproutQuestion, st.PlantQuestion, st.FlowerQuestion];
		var Answers = [st.SeedAnswer, st.SproutAnswer, st.PlantAnswer, st.FlowerAnswer];
		
		var connection = null;
		var TargetDraw;
		st.SeedAnswer.Hit = st.SeedQuestion;
		st.SproutAnswer.Hit = st.SproutQuestion;
		st.PlantAnswer.Hit = st.PlantQuestion;
		st.FlowerAnswer.Hit = st.FlowerQuestion;
		st.SeedQuestion.Hit = st.SeedAnswer;
		st.SproutQuestion.Hit = st.SproutAnswer;
		st.PlantQuestion.Hit = st.PlantAnswer;
		st.FlowerQuestion.Hit = st.FlowerAnswer;
		var indexx;
		
		createjs.Touch.enable(stage);
		stage.mouseChildren = true;
		
		st.GameOver.RestartBtn.addEventListener('click', RestartClick);
		st.ReplayBtn.addEventListener('click', ReplayClick);
		//st.fullBtn.addEventListener('click', fullClick);
		st.muteBtn.addEventListener('click', muteIt);
		//st.InstructionsBtn.addEventListener('click', InstructionsClick);
		
		
		for (i = 0; i < Answers.length; i++) {
			Answers[i].addEventListener('mousedown', AnswersClick);
			Answers[i].addEventListener("pressmove", drawLine);
			Answers[i].addEventListener("pressup", endDraw);
			Questions[i].addEventListener('mousedown', AnswersClick);
			Questions[i].addEventListener("pressmove", drawLine);
			Questions[i].addEventListener("pressup", endDraw);
			
		}
		
		
		function AnswersClick(e) {
			connection = new createjs.Shape().set({
				x: e.currentTarget.x,
				y: e.currentTarget.y,
				mouseEnabled: false,
			});
			TargetDraw = e.currentTarget;
			st.addChild(connection);
		}
		
		function drawLine(e) {
			var fc = stage.globalToLocal(stage.mouseX, stage.mouseY);
			connection.graphics.clear()
				.s("#FFF").ss(8)
				.mt(0, 0).lt(fc.x - connection.x, fc.y - connection.y);
		}
		
		function endDraw(e) {
			var HitSpot = TargetDraw.Hit;
			var obj = HitSpot.globalToLocal(stage.mouseX, stage.mouseY);
			Indexs = Answers.indexOf(TargetDraw)
			var fc = stage.globalToLocal(stage.mouseX, stage.mouseY);
			if (HitSpot.hitTest(obj.x, obj.y)) {
				st.removeChild(connection);
				if(e.currentTarget.name == "SeedQuestion" || e.currentTarget.name == "SproutQuestion" || 
					e.currentTarget.name == "PlantQuestion" || e.currentTarget.name == "FlowerQuestion"){
					var temp = e.currentTarget.name.replace("Question", "");
				}
				else{
					var temp = e.currentTarget.name.replace("Answer", "");
				}
				createjs.Tween.get(st.getChildByName(temp + "Correct")).to({
					alpha: 1
				}, 1000);
				TargetDraw.mouseEnabled = false;
				createjs.Sound.play("correct" + String(Math.floor(Math.random() * 6)));
				counter--;
				if (counter == 0) {
					setTimeout(function () {
						st.gotoAndStop(1);
						createjs.Sound.play('CompleteSound');
					}, 1000);
				}
			} else {
				st.removeChild(connection);
				createjs.Sound.play("incorrect" + String(Math.floor(Math.random() * 4)));
			}
		}
		
		function RestartClick(e) {
			createjs.Sound.play('ClickSound');
			st.parent.gotoAndStop(4);
		}
		
		function ReplayClick(e) {
			createjs.Sound.play('ClickSound');
			st.parent.gotoAndStop(4);
		}
		
		function InstructionsClick(e) {
		
		}
		
		function fullClick() {
			createjs.Sound.play('ClickSound');
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
				(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
				(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
				(document.msFullscreenElement && document.msFullscreenElement !== null);
		
			var docElm = document.documentElement;
			if (!isInFullScreen) {
				if (docElm.requestFullscreen) {
					docElm.requestFullscreen();
				} else if (docElm.mozRequestFullScreen) {
					docElm.mozRequestFullScreen();
				} else if (docElm.webkitRequestFullScreen) {
					docElm.webkitRequestFullScreen();
				} else if (docElm.msRequestFullscreen) {
					docElm.msRequestFullscreen();
				}
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		}
		
		function muteIt(e) {
			if (soundOn == true) {
		
				soundOn = false;
				st.muteBtn.gotoAndStop(1);
				createjs.Sound.masterMute = true;
				createjs.Sound.masterVolume = 0;
				createjs.Sound.muted = true;
				createjs.Sound.volume = 0;
		
		
			} else {
		
				soundOn = true;
				st.muteBtn.gotoAndStop(0);
				createjs.Sound.masterMute = false;
				createjs.Sound.masterVolume = 1;
				createjs.Sound.muted = false;
				createjs.Sound.volume = 1;
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Match
	this.PlantCorrect = new lib.MotherCorrect();
	this.PlantCorrect.name = "PlantCorrect";
	this.PlantCorrect.setTransform(819.05,391.6,0.7333,1.179,0,-119.7054,-109.1411,-0.7,2.6);
	this.PlantCorrect.alpha = 0.0117;

	this.SeedCorrect = new lib.HardCorrect();
	this.SeedCorrect.name = "SeedCorrect";
	this.SeedCorrect.setTransform(474.8,382.7,1.0897,1.32,0,75.139,38.0862,0.1,-0.6);
	this.SeedCorrect.alpha = 0.0117;

	this.FlowerCorrect = new lib.HardCorrect();
	this.FlowerCorrect.name = "FlowerCorrect";
	this.FlowerCorrect.setTransform(617.55,386.75,2.1849,0.8612,0,-5.4342,-6.0056,0.4,0.3);
	this.FlowerCorrect.alpha = 0.0117;

	this.SproutCorrect = new lib.MotherCorrect();
	this.SproutCorrect.name = "SproutCorrect";
	this.SproutCorrect.setTransform(473,388.95,0.5179,1.2735,0,-57.9192,-39.6175,-2.1,3.6);
	this.SproutCorrect.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SproutCorrect},{t:this.FlowerCorrect},{t:this.SeedCorrect},{t:this.PlantCorrect}]}).to({state:[]},1).wait(1));

	// Hits
	this.PlantAnswer = new lib.PlantQues();
	this.PlantAnswer.name = "PlantAnswer";
	this.PlantAnswer.setTransform(915.8,480.1,0.6236,0.6084,0,0,0,0,0.1);
	this.PlantAnswer.alpha = 0.0117;

	this.SeedAnswer = new lib.SeedQues();
	this.SeedAnswer.name = "SeedAnswer";
	this.SeedAnswer.setTransform(697.6,480.1,0.6236,0.6084,0,0,0,0.1,0.1);
	this.SeedAnswer.alpha = 0.0117;

	this.SproutAnswer = new lib.SproutQues();
	this.SproutAnswer.name = "SproutAnswer";
	this.SproutAnswer.setTransform(473.55,476.05,0.6085,0.702,0,0,0,0.1,0);
	this.SproutAnswer.alpha = 0.0117;

	this.FlowerAnswer = new lib.FlowerQues();
	this.FlowerAnswer.name = "FlowerAnswer";
	this.FlowerAnswer.setTransform(253.3,477.1,0.5987,0.6552,0,0,0,0,0.1);
	this.FlowerAnswer.alpha = 0.0117;

	this.FlowerQuestion = new lib.FlowerAns();
	this.FlowerQuestion.name = "FlowerQuestion";
	this.FlowerQuestion.setTransform(908.55,260.9,0.8657,0.723,0,0,0,0,-0.5);
	this.FlowerQuestion.alpha = 0.0117;

	this.PlantQuestion = new lib.PlantAns();
	this.PlantQuestion.name = "PlantQuestion";
	this.PlantQuestion.setTransform(702.95,266.85,0.9571,0.748,0,0,0,0.1,-0.2);
	this.PlantQuestion.alpha = 0.0117;

	this.SproutQuestion = new lib.SproutAns();
	this.SproutQuestion.name = "SproutQuestion";
	this.SproutQuestion.setTransform(463.6,272.8,0.8555,0.6482,0,0,0,0,-0.4);
	this.SproutQuestion.alpha = 0.0117;

	this.SeedQuestion = new lib.SeedAns();
	this.SeedQuestion.name = "SeedQuestion";
	this.SeedQuestion.setTransform(257.1,273.6,0.9021,1.0059,0,0,0,1.2,0.8);
	this.SeedQuestion.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SeedQuestion},{t:this.SproutQuestion},{t:this.PlantQuestion},{t:this.FlowerQuestion},{t:this.FlowerAnswer},{t:this.SproutAnswer},{t:this.SeedAnswer},{t:this.PlantAnswer}]}).to({state:[]},1).wait(1));

	// Buttons
	this.muteBtn = new lib.muteBtn();
	this.muteBtn.name = "muteBtn";
	this.muteBtn.setTransform(70.1,342.55,0.6082,0.5463,0,0,0,0.1,-12.6);

	this.ReplayBtn = new lib.RestartBtn();
	this.ReplayBtn.name = "ReplayBtn";
	this.ReplayBtn.setTransform(70.6,235.15,0.6091,0.573,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ReplayBtn, 0, 1, 2, false, new lib.RestartBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ReplayBtn},{t:this.muteBtn}]}).to({state:[]},1).wait(1));

	// Game
	this.instance = new lib.Asset2();
	this.instance.setTransform(0,0,0.5294,0.5295);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// GameOver
	this.GameOver = new lib.Symbol9();
	this.GameOver.name = "GameOver";
	this.GameOver.setTransform(507.65,287.5,0.5333,0.5324,0,0,0,0.1,0);
	this.GameOver._off = true;

	this.timeline.addTween(cjs.Tween.get(this.GameOver).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,575);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,3,4];
	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		var st = this;
		var PlayBtn = st.StartScreen.PlayBtn;
		var NextBtn = st.NextBtn;
		var NextBtn1 = st.NextBtn1;
		//st.gotoAndStop(1);
		
		createjs.Touch.enable(stage);
		stage.mouseChildren = true;
		
		createjs.Sound.play('GameSound');
		
		PlayBtn.addEventListener('click', PlayClick);
		NextBtn.addEventListener('click',NextClick);
		NextBtn1.addEventListener('click',NextClick1);
		
		function PlayClick(e){
			createjs.Sound.stop();
			st.gotoAndStop(1);
			createjs.Sound.play('ClickSound');
		}
		
		function NextClick(e){
			createjs.Sound.stop();
			st.gotoAndStop(2);
			createjs.Sound.play('ClickSound');
		}
		
		function NextClick1(e){
			createjs.Sound.stop();
			st.gotoAndStop(3);
			createjs.Sound.play('ClickSound');
		}
	}
	this.frame_2 = function() {
		createjs.Sound.play('InstructionsSound');
	}
	this.frame_3 = function() {
		this.stop();
		var st = this;
		Game = new lib.game();
		st.addChild(Game)
		stt = st;
	}
	this.frame_4 = function() {
		this.stop();
		var st=this;
		stt.removeChild(Game);
		st.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// StartScreen
	this.StartScreen = new lib.Symbol8();
	this.StartScreen.name = "StartScreen";
	this.StartScreen.setTransform(639.4,369.05,0.5352,0.5384,0,0,0,1.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.StartScreen).to({_off:true},1).wait(4));

	// Objective
	this.NextBtn = new lib.Symbol19();
	this.NextBtn.name = "NextBtn";
	this.NextBtn.setTransform(525.9,437.1,0.5396,0.5779,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.NextBtn, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.instance = new lib.Asset22222();
	this.instance.setTransform(-422,-390,0.5341,0.5372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.NextBtn}]},1).to({state:[]},1).wait(3));

	// Instructions
	this.NextBtn1 = new lib.Symbol18();
	this.NextBtn1.name = "NextBtn1";
	this.NextBtn1.setTransform(531.25,438.3,0.6035,0.5885);
	new cjs.ButtonHelper(this.NextBtn1, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.instance_1 = new lib.Asset111111();
	this.instance_1.setTransform(-425,-395,0.5367,0.5401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.NextBtn1}]},2).to({state:[]},1).wait(2));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhRjgueMCjHAAAMAAABc9MijHAAAg");
	this.shape.setTransform(512,287.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhRjAufMAAAhc9MCjHAAAMAAABc9g");
	this.shape_1.setTransform(512,287.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-107.5,1680,3036.9);
// library properties:
lib.properties = {
	id: '5F91E1963650624C81E3BEC50BF41B7F',
	width: 1024,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1662221619142", id:"Image"},
		{src:"images/Image_1.png?1662221619142", id:"Image_1"},
		{src:"images/Image_1_1.png?1662221619142", id:"Image_1_1"},
		{src:"images/Image_1_0.png?1662221619142", id:"Image_1_0"},
		{src:"images/Image_2.png?1662221619142", id:"Image_2"},
		{src:"images/Image_3.png?1662221619142", id:"Image_3"},
		{src:"images/Asset11111.png?1662221619142", id:"Asset11111"},
		{src:"images/Asset111111.png?1662221619142", id:"Asset111111"},
		{src:"images/Asset22222.png?1662221619142", id:"Asset22222"},
		{src:"images/index_atlas_1.png?1662221618825", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1662221618825", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1662221618826", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1662221618826", id:"index_atlas_4"}
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
an.compositions['5F91E1963650624C81E3BEC50BF41B7F'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;