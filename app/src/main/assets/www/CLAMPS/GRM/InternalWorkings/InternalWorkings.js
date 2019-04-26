(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"InternalWorkings_atlas_", frames: [[0,3070,750,305],[2256,2763,750,305],[3008,2763,750,305],[752,1842,750,305],[0,2456,750,305],[3008,614,750,305],[752,1228,750,305],[0,921,750,305],[2256,307,750,305],[1504,307,750,305],[1504,4912,750,305],[2256,3991,750,305],[3008,3991,750,305],[0,4298,750,305],[3008,3070,750,305],[2256,614,750,305],[752,4298,750,305],[3008,0,750,305],[1504,1228,750,305],[752,2763,750,305],[0,0,750,305],[752,1535,750,305],[752,307,750,305],[0,2763,750,305],[1504,3070,750,305],[3008,307,750,305],[752,2149,750,305],[1504,614,750,305],[1504,4298,750,305],[2256,4298,750,305],[0,614,750,305],[3008,2149,750,305],[0,2149,750,305],[3008,4298,750,305],[0,4605,750,305],[752,614,750,305],[752,2456,750,305],[752,3070,750,305],[2256,3070,750,305],[1504,2456,750,305],[2256,4912,750,305],[2256,921,750,305],[3008,921,750,305],[1504,2763,750,305],[1504,2149,750,305],[2256,2149,750,305],[1504,1535,750,305],[1504,1842,750,305],[2256,1842,750,305],[752,4605,750,305],[3008,1842,750,305],[2256,2456,750,305],[3008,2456,750,305],[2256,1535,750,305],[2256,0,750,305],[1504,4605,750,305],[3008,1535,750,305],[0,3377,750,305],[752,3377,750,305],[1504,3377,750,305],[0,1842,750,305],[752,0,750,305],[2256,3377,750,305],[752,921,750,305],[0,307,750,305],[1504,0,750,305],[3008,3377,750,305],[0,3684,750,305],[0,1228,750,305],[2256,4605,750,305],[752,3684,750,305],[1504,3684,750,305],[2256,3684,750,305],[0,1535,750,305],[3008,3684,750,305],[0,3991,750,305],[2256,1228,750,305],[3008,1228,750,305],[3008,4605,750,305],[0,4912,750,305],[752,3991,750,305],[1504,3991,750,305],[1504,921,750,305],[752,4912,750,305]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Internal_Body_Bearing_Hold = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0000 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0001 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0002 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0003 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0004 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0005 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0006 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0007 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0008 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0009 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0010 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0011 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0012 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0013 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0014 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Body_Bearings_0015 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0000 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0001 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0002 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0003 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0004 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0005 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0006 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0007 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0008 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0009 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0010 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0011 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0012 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0013 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0014 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_0015 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Internal_Jaw_Bushings_STILL = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0000 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0001 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0002 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0003 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0004 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0005 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0006 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0007 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0008 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0009 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0010 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0011 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0012 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0013 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0014 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_0015 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Internal_lockingramp_hold = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0000 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0001 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0002 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0003 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0004 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0005 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0006 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0007 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0008 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0009 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0010 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0011 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0012 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0013 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0014 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_0015 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Internal_piston_hold = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0000 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0001 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0002 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0003 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0004 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0005 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0006 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0007 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0008 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0009 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0010 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0011 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0012 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0013 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0014 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Internals_main_cycle_0015 = function() {
	this.spriteSheet = ss["InternalWorkings_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.piston_cycle_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAsIgxg+IAAAAIAAA+IgbAAIAAhXIApAAIAyA/IAAg/IAaAAIAABXg");
	this.shape.setTransform(300.3,218.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgCAIgDQAHgBAKgBIApAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAgXgUIgFADIgDAGIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAhAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgGIgFgDIgIgBIgfAAIgIABg");
	this.shape_1.setTransform(286.9,218.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAsIAAhBIgmAAIAAgWIBlAAIAAAWIgmAAIAABBg");
	this.shape_2.setTransform(274.9,218.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAtIgPgBQgHgBgEgDQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAFIACAEQACABAGAAIAgAAIAIgBIACgDIABgDIgBgFQgBgBgDgBIgMgBIgTgBIgYAAIgIgCIgFgDIgEgDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAAAQgCgFAAgJIABgKQABgGADgDIAFgDIAGgDIAIgCIALgBIAlAAQAHABALABIAGADIAEADQADADABAFIABALIAAACIgaAAQAAgFgCgCIgEgCIgHAAIgdAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAABABAAQAAAAABAAQAAAAABABQAFABAVAAIAZAAIAJACIAHACQADABACADIADADIABAHIABAIQgBALgBADQgBADgCACIgEADIgFADIgIACIgWABg");
	this.shape_3.setTransform(263.4,218.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAsIAAhXIAZAAIAABXg");
	this.shape_4.setTransform(254.8,218.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAsIAAhXIBIAAQAGABAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgBAGgDADQgDAFgFACQgHACgEAAIg0AAIAAAXgAgYAAIAoAAQAEAAACgBQACgDAAgEIAAgDQAAgFgCgCQgDgDgFAAIgmAAg");
	this.shape_5.setTransform(246.7,218.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 2
	this.instance = new lib.Internal_piston_0000();
	this.instance.parent = this;

	this.instance_1 = new lib.Internal_piston_0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Internal_piston_0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Internal_piston_0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Internal_piston_0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Internal_piston_0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Internal_piston_0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Internal_piston_0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Internal_piston_0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Internal_piston_0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Internal_piston_0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Internal_piston_0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Internal_piston_0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Internal_piston_0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Internal_piston_0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Internal_piston_0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Internal_piston_hold();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_stopblocks_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzArIAAhVIBHAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgBAGgDADQgDAFgFACQgGACgFABIg1AAIAAAVgAgZAAIApAAQAEAAACgCQACgCABgEIAAgEQgBgEgCgDQgDgCgFAAIgnAAg");
	this.shape.setTransform(353.1,213.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtArIAAg9IgjA9IgTAAIgjg9IAAA9IgaAAIAAhVIApAAIAdA2IAeg2IApAAIAABVg");
	this.shape_1.setTransform(339,213.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjArIgIgPIg1AAIgIAPIgeAAIAvhVIAiAAIAwBVgAARAKIgRggIgQAgIAhAAg");
	this.shape_2.setTransform(324.5,213.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaArIAAgKIAAgFIgCgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgFgBIgpAAIAAAWIgaAAIAAhVIBPAAQAIAAAFABQAFACADAEQADADABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAOgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_3.setTransform(311.8,213.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAnAAQAHAAALACIAGACIAEADQAEAEABAFIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHgBIgcAAIgJABQgDABgCACQgCACgBADIAAAKIAAAJIAAAJQABAEACACQACACADABIAJAAIAbAAQAHABADgCIADgDIABgFIAAgCIggAAIAAgRIA7AAIAAAYIgBAIIgCAGIgDAFQgCABgDABIgGACIgHACIgTABg");
	this.shape_4.setTransform(293.4,213.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASArIgxg+IgBAAIAAA+IgaAAIAAhVIAqAAIAwA+IAAg+IAbAAIAABVg");
	this.shape_5.setTransform(280.2,213.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMArIAAhVIAZAAIAABVg");
	this.shape_6.setTransform(271,213.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUArIgmghIgMAAIAAAhIgaAAIAAhVIAaAAIAAAfIANAAIAggfIAlAAIgvAqIA0Arg");
	this.shape_7.setTransform(262.9,213.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAeAAQAJAAAOACIAHABIAGAEIADAEIACAGQACAGAAAJIgbAAIAAgCQAAgFgDgCQgDgBgHAAIgcAAIgIABIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAbAAIAIAAIAFgCIACgEIABgGIAbAAIAAAJQAAAFgCAFQgBAEgDAEQgEADgGACQgKACgGABg");
	this.shape_8.setTransform(249.9,213.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIApAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAIIgCAIIgDAFIgFAFIgFACIgHACQgGACgKAAgAgXgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAhAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIgfAAIgIABg");
	this.shape_9.setTransform(236.9,213.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqArIAAhVIAaAAIAAA/IA7AAIAAAWg");
	this.shape_10.setTransform(225.7,213.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 2
	this.instance = new lib.Internal_lockingramp_0000();
	this.instance.parent = this;

	this.instance_1 = new lib.Internal_lockingramp_0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Internal_lockingramp_0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Internal_lockingramp_0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Internal_lockingramp_0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Internal_lockingramp_0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Internal_lockingramp_0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Internal_lockingramp_0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Internal_lockingramp_0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Internal_lockingramp_0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Internal_lockingramp_0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Internal_lockingramp_0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Internal_lockingramp_0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Internal_lockingramp_0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Internal_lockingramp_0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Internal_lockingramp_0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Internal_lockingramp_hold();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_sliderbearing_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAtIgPgBQgHgCgEgCQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIACADQACACAGAAIAgAAIAIgBIACgDIABgDIgBgFQgBgCgDAAIgMgBIgTAAIgYgBIgIgCIgFgDIgEgDQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAgBAAgBQgCgEAAgIIABgLQABgGADgDIAFgEIAGgCIAIgCIALAAIAlAAQAHAAALABIAGADIAEADQADADABAFIABALIAAACIgaAAQAAgFgCgCIgEgCIgHAAIgdAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAFACAVAAIAZAAIAJACIAHACQADABACACIADAEIABAHIABAIQgBALgBADQgBADgCACIgEADIgFADIgIACIgWABg");
	this.shape.setTransform(292.9,205.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAnAAQAHAAALABIAGADIAEADQAEADABAGIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHgBIgcAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAbAAQAHAAADgBIADgDIABgFIAAgDIggAAIAAgRIA7AAIAAAZIgBAIIgCAGIgDAFQgCABgDABIgGACIgHACIgTABg");
	this.shape_1.setTransform(280.4,205.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAsIgxg+IAAAAIAAA+IgbAAIAAhWIApAAIAxA+IAAg+IAbAAIAABWg");
	this.shape_2.setTransform(267.2,205.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAAhWIAZAAIAABWg");
	this.shape_3.setTransform(258,205.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAsIAAgLIAAgFIgCgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgpAAIAAAXIgaAAIAAhWIBPAAQAIAAAFABQAFACADAEQADADABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAPgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_4.setTransform(249.5,205.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjAsIgIgQIg1AAIgIAQIgeAAIAvhWIAiAAIAwBWgAARAKIgRggIgQAgIAhAAg");
	this.shape_5.setTransform(236.8,205.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvAsIAAhWIBeAAIAAAUIhEAAIAAAOIBAAAIAAARIhAAAIAAANIBFAAIAAAWg");
	this.shape_6.setTransform(224.7,205.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3AsIAAhWIBMAAQAIgBAGACQAGABAEACQAEAEACADQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAIQAAAHgCAFQgCAEgEADQgDACgFABIgLACgAgcAWIAvAAIAHgBQACgBAAgDQAAgFgCgBQgDgCgEAAIgvAAgAgcgIIAuAAQAEAAACgBQACgCAAgDQAAgEgCgCQgCgBgEgBIguAAg");
	this.shape_7.setTransform(212.8,205.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAsIAAgLIAAgFIgCgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgpAAIAAAXIgaAAIAAhWIBPAAQAIAAAFABQAFACADAEQADADABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAPgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_8.setTransform(194.2,205.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvAsIAAhWIBeAAIAAAUIhEAAIAAAOIBAAAIAAARIhAAAIAAANIBFAAIAAAWg");
	this.shape_9.setTransform(182.5,205.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5AsIAAhWIBPAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAgfAVIAvAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAg");
	this.shape_10.setTransform(170.3,205.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAsIAAhWIAZAAIAABWg");
	this.shape_11.setTransform(161.1,205.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqAsIAAhWIAaAAIAAA/IA7AAIAAAXg");
	this.shape_12.setTransform(154.2,205.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAtIgPgBQgHgCgEgCQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIACADQACACAGAAIAgAAIAIgBIACgDIABgDIgBgFQgBgCgDAAIgMgBIgTAAIgYgBIgIgCIgFgDIgEgDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAgBQgCgEAAgIIABgLQABgGADgDIAFgEIAGgCIAIgCIALAAIAlAAQAHAAALABIAGADIAEADQADADABAFIABALIAAACIgaAAQAAgFgCgCIgEgCIgHAAIgdAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAFACAVAAIAZAAIAJACIAHACQADABACACIADAEIABAHIABAIQgBALgBADQgBADgCACIgEADIgFADIgIACIgWABg");
	this.shape_13.setTransform(142.8,205.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 1
	this.instance = new lib.Internal_Body_Bearings_0000();
	this.instance.parent = this;

	this.instance_1 = new lib.Internal_Body_Bearings_0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Internal_Body_Bearings_0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Internal_Body_Bearings_0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Internal_Body_Bearings_0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Internal_Body_Bearings_0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Internal_Body_Bearings_0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Internal_Body_Bearings_0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Internal_Body_Bearings_0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Internal_Body_Bearings_0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Internal_Body_Bearings_0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Internal_Body_Bearings_0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Internal_Body_Bearings_0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Internal_Body_Bearings_0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Internal_Body_Bearings_0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Internal_Body_Bearings_0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Internal_Body_Bearing_Hold();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_jaw_roller_bearings_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAsIgPgBQgHAAgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAGIACACQACACAGAAIAgAAIAIgBIACgCIABgFIgBgEQgBgCgDAAIgMgBIgTAAQgSAAgGgCIgIgBIgFgCIgEgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAgBQgCgEAAgIIABgMQABgFADgEIAFgDIAGgCIAIgCIALAAIAlAAQAHAAALACIAGACIAEADQADADABAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIgHgBIgdAAQgFAAgCACQgDACAAADIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAFABAVAAIAZABIAJACIAHACQADABACACIADAEIABAHIABAIQgBALgBADQgBADgCACIgEAEIgFACIgIABIgWABg");
	this.shape.setTransform(319,201.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgDAIgCQAHgBAKAAIAnAAQAHAAALACIAGACIAEADQAEADABAGIABAMIAAACIgaAAIgBgFIgDgDQgCgCgHABIgcAAIgJAAQgDABgCACQgCACgBAEIAAAJIAAAJIAAAJQABAEACACQACACADABIAJAAIAbAAQAHABADgCIADgDIABgFIAAgCIggAAIAAgRIA7AAIAAAYIgBAHIgCAHIgDAFQgCACgDAAIgGACIgHACIgTAAg");
	this.shape_1.setTransform(306.4,201.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIgxg+IgBAAIAAA+IgaAAIAAhVIAqAAIAwA+IAAg+IAbAAIAABVg");
	this.shape_2.setTransform(293.3,201.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMArIAAhVIAZAAIAABVg");
	this.shape_3.setTransform(284.1,201.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaArIAAgKIAAgFIgCgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgFgBIgpAAIAAAWIgaAAIAAhVIBPAAQAIAAAFACQAFABADADQADAEABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAOgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_4.setTransform(275.5,201.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjArIgIgPIg1AAIgIAPIgeAAIAvhVIAiAAIAwBVgAARAKIgRggIgQAgIAhAAg");
	this.shape_5.setTransform(262.8,201.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvArIAAhVIBeAAIAAAUIhEAAIAAANIBAAAIAAARIhAAAIAAAOIBFAAIAAAVg");
	this.shape_6.setTransform(250.8,201.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3ArIAAhVIBMAAQAIAAAGABQAGABAEACQAEADACAEQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAEgEADQgDADgFAAIgLABgAgcAWIAvAAIAHAAQACgCAAgEQAAgEgCgBQgDgCgEAAIgvAAgAgcgIIAuAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgBgEgBIguAAg");
	this.shape_7.setTransform(238.8,201.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaArIAAgKIAAgFIgCgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgFgBIgpAAIAAAWIgaAAIAAhVIBPAAQAIAAAFACQAFABADADQADAEABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAOgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_8.setTransform(220.3,201.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvArIAAhVIBeAAIAAAUIhEAAIAAANIBAAAIAAARIhAAAIAAAOIBFAAIAAAVg");
	this.shape_9.setTransform(208.5,201.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqArIAAhVIAaAAIAAA/IA7AAIAAAWg");
	this.shape_10.setTransform(198.3,201.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqArIAAhVIAaAAIAAA/IA7AAIAAAWg");
	this.shape_11.setTransform(188.5,201.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgDAIgCQAHgBAKAAIApAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAgXgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAhAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIgfAAIgIABg");
	this.shape_12.setTransform(176.7,201.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaArIAAgKIAAgFIgCgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgFgBIgpAAIAAAWIgaAAIAAhVIBPAAQAIAAAFACQAFABADADQADAEABAFIABALIAAAFIAAAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAOgAgaAAIArAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgpAAg");
	this.shape_13.setTransform(163.8,201.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 1
	this.instance = new lib.Internal_Jaw_Bushings_0000();
	this.instance.parent = this;

	this.instance_1 = new lib.Internal_Jaw_Bushings_0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Internal_Jaw_Bushings_0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Internal_Jaw_Bushings_0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Internal_Jaw_Bushings_0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Internal_Jaw_Bushings_0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Internal_Jaw_Bushings_0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Internal_Jaw_Bushings_0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Internal_Jaw_Bushings_0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Internal_Jaw_Bushings_0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Internal_Jaw_Bushings_0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Internal_Jaw_Bushings_0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Internal_Jaw_Bushings_0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Internal_Jaw_Bushings_0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Internal_Jaw_Bushings_0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Internal_Jaw_Bushings_0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Internal_Jaw_Bushings_STILL();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},14).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.main_cycle_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Internals_main_cycle_0000();
	this.instance.parent = this;

	this.instance_1 = new lib.Internals_main_cycle_0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Internals_main_cycle_0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Internals_main_cycle_0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Internals_main_cycle_0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Internals_main_cycle_0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Internals_main_cycle_0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Internals_main_cycle_0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.Internals_main_cycle_0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.Internals_main_cycle_0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.Internals_main_cycle_0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.Internals_main_cycle_0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.Internals_main_cycle_0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.Internals_main_cycle_0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.Internals_main_cycle_0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Internals_main_cycle_0015();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},14).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.txt_internalWorkings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8898A6").s().p("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");
	this.shape.setTransform(35.7,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.7,-7.8,223,10.4);


(lib.btn_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C7C8CA").ss(1,1,1).p("Ao6hpQgdAdAAAqIAABFQAAAqAdAdQAdAdAqAAIPnAAQAqAAAdgdQAdgdAAgqIAAhFQAAgqgdgdQgdgdgqAAIvnAAQgqAAgdAdg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E495B").s().p("AnzCHQgqAAgdgdQgdgdAAgqIAAhFQAAgqAdgdQAdgdAqAAIPnAAQAqAAAdAdQAdAdAAAqIAABFQAAAqgdAdQgdAdgqAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_stopblock_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACcBnIAAhXIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAHIAAAIIgBAJQgBAGgDADQgDAFgEACQgHACgFAAIg1AAIAAAWgAC3A8IApAAQAFAAACgDQACgCAAgEIAAgEQAAgEgCgDQgDgCgGAAIgnAAgABwBnIAAg+IgjA+IgUAAIgjg+IAAA+IgZAAIAAhXIAoAAIAeA4IAeg4IApAAIAABXgAgqBnIgIgPIg2AAIgIAPIgeAAIAvhXIAjAAIAwBXgAg8BFIgRggIgRAgIAiAAgAiyBnIgBgQIgCgEQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgqAAIAAAWIgbAAIAAhXIBRAAQAHAAAFACQAFACADADQADAEACAFIABAKIAAAGIgBAIIgCAGIgFAEIgHADIAFACIAFADQACACABAEIABAIIAAAPgAjnA7IAsAAQAFAAADgCQACgCAAgFIAAgDIgBgFIgCgCQgDgCgGAAIgqAAgAE6gNQgJAAgHgCIgMgEIgEgFIgEgFIgCgHIAAgJIAAgaIAAgIIACgHIAEgGIAEgEQADgCAJgDQAHgBAJAAIAoAAQAIAAAKACIAGACIAFADQADAEACAFIABAMIAAADIgbAAIAAgGIgDgDQgDgBgHAAIgdAAIgIABQgEAAgBACQgCACgBAEIgBAJIAAALIABAJQABADACACQABACAEABIAIABIAdAAQAGAAADgCIADgDIABgFIAAgCIghAAIAAgSIA8AAIAAAhIgCAGIgEAFQgBACgDABIgGACIgIABIgTABgAh4gNQgKAAgHgCIgMgEIgEgFIgDgFIgCgHIgBgJIAAgaIABgIIACgHIADgGIAEgEQAEgCAIgDQAHgBAKAAIAfAAQAJAAAOACIAHACIAGADIADAFIACAFQACAGAAAKIgbAAIAAgDQAAgEgDgCQgDgCgHAAIgdAAIgIABIgFAEIgDAFIAAAIIAAAJIAAAIQABADACACQABACADABIAIABIAkAAIAFgCIACgDIABgHIAbAAIAAAJQAAAGgCAEQgBAFgDADQgEAEgGACQgKACgGAAgAj+gNQgJAAgHgCIgMgEIgEgFIgEgFIgCgHIAAgJIAAgaIAAgIIACgHIAEgGIAEgEQADgCAJgDQAHgBAJAAIArAAQAJAAAHABIAGACQAEABACACIAEAEIAEAGIABAHIABAIIAAAaIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHACgJAAgAkBhPIgFAEIgCAFIgBAIIAAAJIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgIIgCgFIgFgEIgJgBIgfAAIgJABgADbgOIgyg/IgBAAIAAA/IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgABggOIAAhXIAaAAIAABXgAAvgOIgngiIgLAAIAAAiIgaAAIAAhXIAaAAIAAAgIAMAAIAhggIAlAAIgvAqIA0AtgAmEgOIAAhXIAaAAIAABAIA8AAIAAAXg");
	this.shape.setTransform(0.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("ACcBnIAAhXIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAHIAAAIIgBAJQgBAGgDADQgDAFgEACQgHACgFAAIg1AAIAAAWgAC3A8IApAAQAFAAACgDQACgCAAgEIAAgEQAAgEgCgDQgDgCgGAAIgnAAgABwBnIAAg+IgjA+IgUAAIgjg+IAAA+IgZAAIAAhXIAoAAIAeA4IAeg4IApAAIAABXgAgqBnIgIgPIg2AAIgIAPIgeAAIAvhXIAjAAIAwBXgAg8BFIgRggIgRAgIAiAAgAiyBnIgBgQIgCgEQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgqAAIAAAWIgbAAIAAhXIBRAAQAHAAAFACQAFACADADQADAEACAFIABAKIAAAGIgBAIIgCAGIgFAEIgHADIAFACIAFADQACACABAEIABAIIAAAPgAjnA7IAsAAQAFAAADgCQACgCAAgFIAAgDIgBgFIgCgCQgDgCgGAAIgqAAgAE6gNQgJAAgHgCIgMgEIgEgFIgEgFIgCgHIAAgJIAAgaIAAgIIACgHIAEgGIAEgEQADgCAJgDQAHgBAJAAIAoAAQAIAAAKACIAGACIAFADQADAEACAFIABAMIAAADIgbAAIAAgGIgDgDQgDgBgHAAIgdAAIgIABQgEAAgBACQgCACgBAEIgBAJIAAALIABAJQABADACACQABACAEABIAIABIAdAAQAGAAADgCIADgDIABgFIAAgCIghAAIAAgSIA8AAIAAAhIgCAGIgEAFQgBACgDABIgGACIgIABIgTABgAh4gNQgKAAgHgCIgMgEIgEgFIgDgFIgCgHIgBgJIAAgaIABgIIACgHIADgGIAEgEQAEgCAIgDQAHgBAKAAIAfAAQAJAAAOACIAHACIAGADIADAFIACAFQACAGAAAKIgbAAIAAgDQAAgEgDgCQgDgCgHAAIgdAAIgIABIgFAEIgDAFIAAAIIAAAJIAAAIQABADACACQABACADABIAIABIAkAAIAFgCIACgDIABgHIAbAAIAAAJQAAAGgCAEQgBAFgDADQgEAEgGACQgKACgGAAgAj+gNQgJAAgHgCIgMgEIgEgFIgEgFIgCgHIAAgJIAAgaIAAgIIACgHIAEgGIAEgEQADgCAJgDQAHgBAJAAIArAAQAJAAAHABIAGACQAEABACACIAEAEIAEAGIABAHIABAIIAAAaIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHACgJAAgAkBhPIgFAEIgCAFIgBAIIAAAJIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgIIgCgFIgFgEIgJgBIgfAAIgJABgADbgOIgyg/IgBAAIAAA/IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgABggOIAAhXIAaAAIAABXgAAvgOIgngiIgLAAIAAAiIgaAAIAAhXIAaAAIAAAgIAMAAIAhggIAlAAIgvAqIA0AtgAmEgOIAAhXIAaAAIAABAIA8AAIAAAXg");
	this.shape_1.setTransform(0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_sliderbearings_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF9BoIgPgBQgGgBgEgDQgFgDgBgEQgCgFAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEgBIgLgBIgVAAQgSAAgGgBIgIgCIgFgCIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgFAAgIIABgLQABgGACgDIAFgDIAGgDIAIgCIAxAAQAHAAALACIAGACIAEADQAEADAAAFIABALIAAACIgaAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAQAFABAWAAIAaAAIAIACIAHACQADABACADIADAEIACAHIAAAIQgBALgBAEQgBACgCACIgDAEIgGACIgIACIgWABgAECBoQgJAAgHgCIgMgEIgFgFIgDgFIgCgHIgBgJIAAgaIABgIIACgHIADgGIAFgEQADgCAJgDQAHgBAJAAIAoAAQAHAAALACIAGACIAEADQAEAEACAFIAAAMIAAADIgaAAIAAgGIgDgDQgDgBgHAAIgdAAIgJABQgDAAgBACQgCACgBAEIgBAJIAAALIABAJQABADACACQABACADABIAJABIAdAAQAGAAADgCIADgDIABgFIAAgCIghAAIAAgSIA8AAIgBAhIgBAGIgEAFQgBACgDABIgHACIgHABIgTABgACiBnIgxg/IgBAAIAAA/IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAAnBnIAAhXIAbAAIAABXgAgGBnIgBgQIgCgEQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFgBIgqAAIAAAXIgbAAIAAhXIBRAAQAGAAAGACQAEABAEAEQADADABAFIABALIAAAFIgBAIIgCAGIgFAFIgHADIAFABIAGAEQACACAAADIABAJIAAAPgAg7A7IAsAAQAFAAADgDQACgCAAgFIAAgCIgBgFIgCgDQgDgCgGAAIgqAAgAh9BnIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAiPBFIgRghIgRAhIAiAAgAlJBnIAAhXIBfAAIAAAUIhEAAIAAAOIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAnIBnIAAhXIBNAAQAIAAAFABQAHABADADQAFADABAEQACAEAAAHIgBAJQgBADgBACIgFAEIgEACIAHACQADABABADQACACACAEIABAJQAAAHgDAEQgBAFgEACQgEADgEABIgLABgAmuBSIAxAAIAGgBQADgCAAgDQAAgFgDgBQgCgCgEAAIgxAAgAmuAyIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAkXgOIgPgBQgHgBgEgCQgDgDgDgFQgCgEAAgHIAAgGIAbAAIABAFIACADQACACAGAAIAhAAIAIgBIACgDIABgEIgBgEQgBgCgDAAIgMgBIgUgBIgXgBIgIgBIgGgDIgEgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgBgEgBgJIABgLQACgFADgEIAEgDIAGgCIAJgCIAwgBQAHAAALACIAGADIAEADQADADACAFIAAAKIAAADIgaAAQAAgFgCgCIgEgCIglAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAFIABAHIABAIQAAAKgCAEQAAADgCACIgFADIgFADIgIABIgVABgAEcgPIgBgQIgCgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgGAAIgpAAIAAAWIgbAAIAAhXIBRAAQAHAAAFACQAFACADADQADAEABAFIACAKIAAAGIgBAIIgDAGIgEAEIgHADIAFACIAFADQACACABAEIABAIIAAAPgADng7IAsAAQAFAAACgCQADgCAAgFIAAgDIgBgFIgDgCQgCgCgHAAIgpAAgABbgPIAAhXIBgAAIAAAVIhFAAIAAANIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAgogPIAAhXIBPAAQAHAAAKACIAGACIAGADIADAFIACAFQACAFAAAJIAAAaQAAAIgCAGIgCAFIgDAEIgGADIgGADIgRABgAgOglIAvAAIAHgBIAFgCQACgCABgDIAAgIIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAhXgPIAAhXIAaAAIAABXgAi7gPIAAhXIAbAAIAABBIA8AAIAAAWg");
	this.shape.setTransform(0.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AF9BoIgPgBQgGgBgEgDQgFgDgBgEQgCgFAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEgBIgLgBIgVAAQgSAAgGgBIgIgCIgFgCIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgFAAgIIABgLQABgGACgDIAFgDIAGgDIAIgCIAxAAQAHAAALACIAGACIAEADQAEADAAAFIABALIAAACIgaAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAQAFABAWAAIAaAAIAIACIAHACQADABACADIADAEIACAHIAAAIQgBALgBAEQgBACgCACIgDAEIgGACIgIACIgWABgAECBoQgJAAgHgCIgMgEIgFgFIgDgFIgCgHIgBgJIAAgaIABgIIACgHIADgGIAFgEQADgCAJgDQAHgBAJAAIAoAAQAHAAALACIAGACIAEADQAEAEACAFIAAAMIAAADIgaAAIAAgGIgDgDQgDgBgHAAIgdAAIgJABQgDAAgBACQgCACgBAEIgBAJIAAALIABAJQABADACACQABACADABIAJABIAdAAQAGAAADgCIADgDIABgFIAAgCIghAAIAAgSIA8AAIgBAhIgBAGIgEAFQgBACgDABIgHACIgHABIgTABgACiBnIgxg/IgBAAIAAA/IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAAnBnIAAhXIAbAAIAABXgAgGBnIgBgQIgCgEQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFgBIgqAAIAAAXIgbAAIAAhXIBRAAQAGAAAGACQAEABAEAEQADADABAFIABALIAAAFIgBAIIgCAGIgFAFIgHADIAFABIAGAEQACACAAADIABAJIAAAPgAg7A7IAsAAQAFAAADgDQACgCAAgFIAAgCIgBgFIgCgDQgDgCgGAAIgqAAgAh9BnIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAiPBFIgRghIgRAhIAiAAgAlJBnIAAhXIBfAAIAAAUIhEAAIAAAOIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAnIBnIAAhXIBNAAQAIAAAFABQAHABADADQAFADABAEQACAEAAAHIgBAJQgBADgBACIgFAEIgEACIAHACQADABABADQACACACAEIABAJQAAAHgDAEQgBAFgEACQgEADgEABIgLABgAmuBSIAxAAIAGgBQADgCAAgDQAAgFgDgBQgCgCgEAAIgxAAgAmuAyIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAkXgOIgPgBQgHgBgEgCQgDgDgDgFQgCgEAAgHIAAgGIAbAAIABAFIACADQACACAGAAIAhAAIAIgBIACgDIABgEIgBgEQgBgCgDAAIgMgBIgUgBIgXgBIgIgBIgGgDIgEgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgBgEgBgJIABgLQACgFADgEIAEgDIAGgCIAJgCIAwgBQAHAAALACIAGADIAEADQADADACAFIAAAKIAAADIgaAAQAAgFgCgCIgEgCIglAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAFIABAHIABAIQAAAKgCAEQAAADgCACIgFADIgFADIgIABIgVABgAEcgPIgBgQIgCgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgGAAIgpAAIAAAWIgbAAIAAhXIBRAAQAHAAAFACQAFACADADQADAEABAFIACAKIAAAGIgBAIIgDAGIgEAEIgHADIAFACIAFADQACACABAEIABAIIAAAPgADng7IAsAAQAFAAACgCQADgCAAgFIAAgDIgBgFIgDgCQgCgCgHAAIgpAAgABbgPIAAhXIBgAAIAAAVIhFAAIAAANIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAgogPIAAhXIBPAAQAHAAAKACIAGACIAGADIADAFIACAFQACAFAAAJIAAAaQAAAIgCAGIgCAFIgDAEIgGADIgGADIgRABgAgOglIAvAAIAHgBIAFgCQACgCABgDIAAgIIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAhXgPIAAhXIAaAAIAABXgAi7gPIAAhXIAbAAIAABBIA8AAIAAAWg");
	this.shape_1.setTransform(0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_rollerbearings_GRMiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("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");
	this.shape_1.setTransform(0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_piston = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/A0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgdIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAyAAQALAAAIACIAHACQAEABADACIAFAFIAEAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgCADIgFAFIgHADIgHACQgIACgLAAgAB8gXQgEABgCADQgCACgBAEIgBAJIAAAKIABAJQABAEACACQACADADABIAJABIAoAAIAJgBQADgBACgDQACgCABgEIABgJIAAgKIgBgJQgBgEgCgCIgGgEQgEgCgGAAIgkAAQgGAAgEACgAiSA0IgSgBQgIgCgEgDQgFgDgCgFQgDgFAAgIIAAgHIAgAAIAAAGIADADQACACAIAAIAmAAQAGAAADgBIADgDIABgEIgBgGQgBgBgEgBIgOgBIgXgBIgcgBIgJgCQgEgBgDgCQgDgBgBgDIgDgEQgBgFAAgKIAAgNQACgGADgEIAFgEIAIgDIAJgCIA5gBQAJAAAMACIAHADIAFAEQAEADABAGQABAFAAAHIAAADIgfAAQAAgGgCgCIgFgBIgIgBIgjAAQgFAAgDACQgDACAAAEIABAFQABACAEABQAFABAaAAIAdABIALABIAIADIAFAEIAEAFIACAHIAAAKQAAAMgCAFIgDAFIgFAEIgGADIgJACIgZABgAFKAzIg6hJIgBAAIAABJIgfAAIAAhlIAwAAIA7BJIAAAAIAAhJIAfAAIAABlgAgCAzIAAhLIgsAAIAAgaIB1AAIAAAaIgrAAIAABLgAjuAzIAAhlIAgAAIAABlgAl5AzIAAhlIBUAAQAIAAALADIAGADIAFAEQAEAFACAGQABAGAAAIIAAAJQAAAGgBAEQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAlaAAIAwAAQAFAAADgCQACgDAAgFIAAgEQAAgFgDgDQgDgCgHAAIgtAAg");
	this.shape.setTransform(-0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AB/A0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgdIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAyAAQALAAAIACIAHACQAEABADACIAFAFIAEAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgCADIgFAFIgHADIgHACQgIACgLAAgAB8gXQgEABgCADQgCACgBAEIgBAJIAAAKIABAJQABAEACACQACADADABIAJABIAoAAIAJgBQADgBACgDQACgCABgEIABgJIAAgKIgBgJQgBgEgCgCIgGgEQgEgCgGAAIgkAAQgGAAgEACgAiSA0IgSgBQgIgCgEgDQgFgDgCgFQgDgFAAgIIAAgHIAgAAIAAAGIADADQACACAIAAIAmAAQAGAAADgBIADgDIABgEIgBgGQgBgBgEgBIgOgBIgXgBIgcgBIgJgCQgEgBgDgCQgDgBgBgDIgDgEQgBgFAAgKIAAgNQACgGADgEIAFgEIAIgDIAJgCIA5gBQAJAAAMACIAHADIAFAEQAEADABAGQABAFAAAHIAAADIgfAAQAAgGgCgCIgFgBIgIgBIgjAAQgFAAgDACQgDACAAAEIABAFQABACAEABQAFABAaAAIAdABIALABIAIADIAFAEIAEAFIACAHIAAAKQAAAMgCAFIgDAFIgFAEIgGADIgJACIgZABgAFKAzIg6hJIgBAAIAABJIgfAAIAAhlIAwAAIA7BJIAAAAIAAhJIAfAAIAABlgAgCAzIAAhLIgsAAIAAgaIB1AAIAAAaIgrAAIAABLgAjuAzIAAhlIAgAAIAABlgAl5AzIAAhlIBUAAQAIAAALADIAGADIAFAEQAEAFACAGQABAGAAAIIAAAJQAAAGgBAEQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAlaAAIAwAAQAFAAADgCQACgDAAgFIAAgEQAAgFgDgDQgDgCgHAAIgtAAg");
	this.shape_1.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_back_slider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape.setTransform(0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape_1.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_back_roller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape.setTransform(0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape_1.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_back_ramp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape.setTransform(0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape_1.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


(lib.btn_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape.setTransform(0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A9FD8").s().p("AA0A0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQACADAEABIAJABIAqgBIAFgBQACgCABgDIABgHIAfAAIAAAJQAAAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgAD3AzIgsgnIgOAAIAAAnIgfAAIAAhlIAfAAIAAAmIAOAAIAogmIAqAAIg3AyIA9AzgAgjAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAg4ALIgVglIgTAlIAoAAgAkiAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgCACIgFAEIgGACIAAAAQAFAAAEACQADACACADQADADABAEIABAKQAAAIgDAFQgCAGgEADQgEACgGACIgMABgAkDAaIA4AAQAFAAADgBQADgCAAgEQAAgFgDgCQgDgBgFAAIg4AAgAkDgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAg");
	this.shape_1.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance = new lib.btn_background("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-14.5,122,29);


// stage content:
(lib.InternalWorkings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,pistonfade:12,roller:24,slider:32,ramp:40});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_piston.addEventListener('click', playpi);
		function playpi(evt) {
			var name = "pistonfade";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_rollerbearings.addEventListener('click', playrb);
		function playrb(evt) {
			var name = "roller";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_sliderbearings.addEventListener('click', playsb);
		function playsb(evt) {
			var name = "slider";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_stopblock.addEventListener('click', playst);
		function playst(evt) {
			var name = "ramp";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* import flash.events.MouseEvent;
		btn_piston.addEventListener(MouseEvent.CLICK, playpiston);
		btn_rollerbearings.addEventListener(MouseEvent.CLICK, playroll);
		btn_sliderbearings.addEventListener(MouseEvent.CLICK, playslide);
		btn_stopblock.addEventListener(MouseEvent.CLICK, playramp);
		//
		function playpiston(event:MouseEvent):void
		{
		   trace("goto playpiston");
		   stop();
		   gotoAndPlay("pistonfade");
		}
		function playroll(event:MouseEvent):void
		{
		   trace("goto playroll");
		   stop();
		   gotoAndPlay("roller");
		}
		function playslide(event:MouseEvent):void
		{
		   trace("goto playslide");
		   stop();
		   gotoAndPlay("slider");
		}
		function playramp(event:MouseEvent):void
		{
		   trace("goto playramp");
		   stop();
		   gotoAndPlay("ramp");
		}*/
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		var self = this;
		
		this.btn_backpist.addEventListener('click', playbpi);
		function playbpi(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		var self = this;
		
		this.btn_backRoll.addEventListener('click', playbkroll);
		function playbkroll(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		var self = this;
		
		this.btn_backslide.addEventListener('click', playbkslide);
		function playbkslide(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		var self = this;
		
		this.btn_backramp.addEventListener('click', playbkramp);
		function playbkramp(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(5).call(this.frame_12).wait(6).call(this.frame_18).wait(6).call(this.frame_24).wait(7).call(this.frame_31).wait(1).call(this.frame_32).wait(7).call(this.frame_39).wait(1).call(this.frame_40).wait(7).call(this.frame_47).wait(1));

	// Titles
	this.instance = new lib.txt_internalWorkings("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.5,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// buttons
	this.btn_stopblock = new lib.btn_stopblock_GRMiw();
	this.btn_stopblock.parent = this;
	this.btn_stopblock.setTransform(72,196.1);
	new cjs.ButtonHelper(this.btn_stopblock, 0, 1, 2, false, new lib.btn_stopblock_GRMiw(), 3);

	this.btn_sliderbearings = new lib.btn_sliderbearings_GRMiw();
	this.btn_sliderbearings.parent = this;
	this.btn_sliderbearings.setTransform(72,155.1);
	new cjs.ButtonHelper(this.btn_sliderbearings, 0, 1, 2, false, new lib.btn_sliderbearings_GRMiw(), 3);

	this.btn_rollerbearings = new lib.btn_rollerbearings_GRMiw();
	this.btn_rollerbearings.parent = this;
	this.btn_rollerbearings.setTransform(72,114.1);
	new cjs.ButtonHelper(this.btn_rollerbearings, 0, 1, 2, false, new lib.btn_rollerbearings_GRMiw(), 3);

	this.btn_piston = new lib.btn_piston();
	this.btn_piston.parent = this;
	this.btn_piston.setTransform(72,73.1);
	new cjs.ButtonHelper(this.btn_piston, 0, 1, 2, false, new lib.btn_piston(), 3);

	this.btn_backpist = new lib.btn_back();
	this.btn_backpist.parent = this;
	this.btn_backpist.setTransform(72,253.1);
	new cjs.ButtonHelper(this.btn_backpist, 0, 1, 2, false, new lib.btn_back(), 3);

	this.btn_backRoll = new lib.btn_back_roller();
	this.btn_backRoll.parent = this;
	this.btn_backRoll.setTransform(72,253.1);
	new cjs.ButtonHelper(this.btn_backRoll, 0, 1, 2, false, new lib.btn_back_roller(), 3);

	this.btn_backslide = new lib.btn_back_slider();
	this.btn_backslide.parent = this;
	this.btn_backslide.setTransform(72,253.1);
	new cjs.ButtonHelper(this.btn_backslide, 0, 1, 2, false, new lib.btn_back_slider(), 3);

	this.btn_backramp = new lib.btn_back_ramp();
	this.btn_backramp.parent = this;
	this.btn_backramp.setTransform(72,253.1);
	new cjs.ButtonHelper(this.btn_backramp, 0, 1, 2, false, new lib.btn_back_ramp(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_piston},{t:this.btn_rollerbearings},{t:this.btn_sliderbearings},{t:this.btn_stopblock}]}).to({state:[{t:this.btn_backpist}]},12).to({state:[{t:this.btn_backRoll}]},12).to({state:[{t:this.btn_backslide}]},8).to({state:[{t:this.btn_backramp}]},8).wait(8));

	// main
	this.main = new lib.main_cycle_GRMiw();
	this.main.parent = this;
	this.main.setTransform(375,152.5,1,1,0,0,0,375,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).to({_off:true},12).wait(36));

	// piston
	this.piston = new lib.piston_cycle_GRMiw();
	this.piston.parent = this;
	this.piston.setTransform(375,152.5,1,1,0,0,0,375,152.5);

	this.timeline.addTween(cjs.Tween.get(this.piston).to({_off:true},24).wait(24));

	// rollerbearings
	this.rollerbearings = new lib.mc_jaw_roller_bearings_GRMiw();
	this.rollerbearings.parent = this;
	this.rollerbearings.setTransform(375,152.6,1,1,0,0,0,375,152.5);
	this.rollerbearings._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rollerbearings).wait(24).to({_off:false},0).to({_off:true},8).wait(16));

	// slider_bearing
	this.sliderbearings = new lib.mc_sliderbearing_GRMiw();
	this.sliderbearings.parent = this;
	this.sliderbearings.setTransform(375,152.6,1,1,0,0,0,375,152.5);
	this.sliderbearings._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sliderbearings).wait(32).to({_off:false},0).to({_off:true},8).wait(8));

	// stopblock
	this.stopblock = new lib.mc_stopblocks_GRMiw();
	this.stopblock.parent = this;
	this.stopblock.setTransform(375,152.6,1,1,0,0,0,375,152.5);
	this.stopblock._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stopblock).wait(40).to({_off:false},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,126.3,750,331.3);
// library properties:
lib.properties = {
	width: 750,
	height: 305,
	fps: 30,
	color: "#40485B",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/InternalWorkings_atlas_.png", id:"InternalWorkings_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;