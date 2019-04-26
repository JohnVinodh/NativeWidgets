(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"PLC_InternalWorkings_atlas_", frames: [[2256,3638,750,305],[3008,3638,750,305],[3760,3638,750,305],[4512,3770,750,305],[5264,3770,750,305],[6016,3770,750,305],[6768,3770,750,305],[0,3945,750,305],[752,3945,750,305],[1504,3945,750,305],[2256,3945,750,305],[3008,3945,750,305],[3760,3945,750,305],[4512,4077,750,305],[5264,4077,750,305],[6016,4077,750,305],[6768,4077,750,305],[0,4252,750,305],[752,4252,750,305],[1504,4252,750,305],[2256,4252,750,305],[3008,4252,750,305],[3760,4252,750,305],[4512,4384,750,305],[5264,4384,750,305],[6016,4384,750,305],[6768,4384,750,305],[0,4559,750,305],[752,4559,750,305],[1504,4559,750,305],[2256,4559,750,305],[3008,4559,750,305],[3760,4559,750,305],[4512,4691,750,305],[5264,4691,750,305],[6016,4691,750,305],[6768,4691,750,305],[0,4866,750,305],[752,4866,750,305],[1504,4866,750,305],[2256,4866,750,305],[3008,4866,750,305],[3760,4866,750,305],[4512,4998,750,305],[5264,4998,750,305],[6016,4998,750,305],[6768,4998,750,305],[0,5173,750,305],[752,5173,750,305],[1504,5173,750,305],[2256,5173,750,305],[3008,5173,750,305],[3760,5173,750,305],[4512,5305,750,305],[5264,5305,750,305],[6016,5305,750,305],[6768,5305,750,305],[0,5480,750,305],[752,5480,750,305],[1504,5480,750,305],[2256,5480,750,305],[3008,5480,750,305],[3760,5480,750,305],[4512,5612,750,305],[5264,5612,750,305],[6016,5612,750,305],[6768,5612,750,305],[0,5787,750,305],[1504,5787,750,305],[2256,5787,750,305],[3008,5787,750,305],[3760,5787,750,305],[4512,5919,750,305],[5264,5919,750,305],[6016,5919,750,305],[6768,5919,750,305],[0,6094,750,305],[752,6094,750,305],[1504,6094,750,305],[2256,6094,750,305],[3008,6094,750,305],[3760,6094,750,305],[4512,6226,750,305],[5264,6226,750,305],[6016,6226,750,305],[6768,6226,750,305],[0,6401,750,305],[752,6401,750,305],[1504,6401,750,305],[2256,6401,750,305],[3008,6401,750,305],[3760,6401,750,305],[4512,6533,750,305],[5264,6533,750,305],[6016,6533,750,305],[6768,6533,750,305],[0,6708,750,305],[752,6708,750,305],[1504,6708,750,305],[2256,6708,750,305],[3008,6708,750,305],[3760,6708,750,305],[4512,6840,750,305],[5264,6840,750,305],[6016,6840,750,305],[6768,6840,750,305],[0,7015,750,305],[752,7015,750,305],[1504,7015,750,305],[2256,7015,750,305],[3008,7015,750,305],[3760,7015,750,305],[4512,7147,750,305],[5264,7147,750,305],[6016,7147,750,305],[6768,7147,750,305],[0,7322,750,305],[752,7322,750,305],[1504,7322,750,305],[2256,7322,750,305],[3008,7322,750,305],[3760,7322,750,305],[4512,7454,750,305],[5264,7454,750,305],[6016,7454,750,305],[6768,7454,750,305],[0,7629,750,305],[752,7629,750,305],[1504,7629,750,305],[2256,7629,750,305],[3008,7629,750,305],[3760,7629,750,305],[4512,7761,750,305],[5264,7761,750,305],[6016,7761,750,305],[6768,7761,750,305],[5194,1928,750,305],[5946,1928,750,305],[6698,1928,750,305],[5194,2235,750,305],[5946,2235,750,305],[6698,2235,750,305],[0,2410,750,305],[752,2410,750,305],[1504,2410,750,305],[2256,2410,750,305],[3008,2410,750,305],[3760,2410,750,305],[4512,2542,750,305],[5264,2542,750,305],[6016,2542,750,305],[6768,2542,750,305],[0,2717,750,305],[752,2717,750,305],[1504,2717,750,305],[2256,2717,750,305],[3008,2717,750,305],[3760,2717,750,305],[4512,2849,750,305],[5264,2849,750,305],[6016,2849,750,305],[6768,2849,750,305],[0,3024,750,305],[752,3024,750,305],[1504,3024,750,305],[2256,3024,750,305],[3008,3024,750,305],[3760,3024,750,305],[4512,3156,750,305],[5264,3156,750,305],[6016,3156,750,305],[6768,3156,750,305],[0,3331,750,305],[752,3331,750,305],[1504,3331,750,305],[2256,3331,750,305],[3008,3331,750,305],[3760,3331,750,305],[4512,3463,750,305],[5264,3463,750,305],[6016,3463,750,305],[6768,3463,750,305],[0,3638,750,305],[752,3638,750,305],[1504,3638,750,305],[752,5787,750,305],[2968,964,740,480],[3710,964,740,480],[4452,964,740,480],[5194,964,740,480],[5936,964,740,480],[6678,964,740,480],[7420,964,740,480],[0,1446,740,480],[742,1446,740,480],[1484,1446,740,480],[2226,1446,740,480],[2968,1446,740,480],[3710,1446,740,480],[4452,1446,740,480],[5194,1446,740,480],[5936,1446,740,480],[6678,1446,740,480],[7420,1446,740,480],[0,1928,740,480],[742,1928,740,480],[1484,1928,740,480],[2226,1928,740,480],[2968,1928,740,480],[3710,1928,740,480],[4452,1928,740,480],[0,0,740,480],[742,0,740,480],[1484,0,740,480],[2226,0,740,480],[2968,0,740,480],[3710,0,740,480],[4452,0,740,480],[5194,0,740,480],[5936,0,740,480],[6678,0,740,480],[7420,0,740,480],[0,482,740,480],[742,482,740,480],[1484,482,740,480],[2226,482,740,480],[2968,482,740,480],[3710,482,740,480],[4452,482,740,480],[5194,482,740,480],[5936,482,740,480],[6678,482,740,480],[7420,482,740,480],[0,964,740,480],[742,964,740,480],[1484,964,740,480],[2226,964,740,480]]},
		{name:"PLC_InternalWorkings_atlas_2", frames: [[0,0,750,305],[752,0,750,305],[0,307,750,305],[752,307,750,305],[0,614,750,305],[752,614,750,305],[0,921,750,305],[752,921,750,305],[0,1228,750,305],[752,1228,750,305],[0,1535,750,305],[752,1535,750,305],[0,1842,750,305],[752,1842,750,305],[0,2149,750,305],[752,2149,750,305],[0,2456,750,305]]}
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



(lib.PLCunitCycle_2screen0000 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0001 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0002 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0003 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0004 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0005 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0006 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0007 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0008 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0009 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0010 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0011 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0012 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0013 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0014 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0015 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0016 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0017 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0018 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0019 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0020 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0021 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0022 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0023 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0024 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0025 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0026 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0027 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0028 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0029 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0030 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0031 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0032 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0033 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0034 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0035 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0036 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0037 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0038 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0039 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0040 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0041 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0042 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0043 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0044 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0045 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0046 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0047 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0048 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0049 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_2screen0050 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0000 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0001 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0002 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0003 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0004 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0005 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0006 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0007 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0008 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0009 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0010 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0011 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0012 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0013 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0014 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0015 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0016 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0017 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0018 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0019 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0020 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0021 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0022 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0023 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0024 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0025 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0026 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0027 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0028 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0029 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0030 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0031 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0032 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0033 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0034 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0035 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0036 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0037 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0038 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0039 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0040 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0041 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0042 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0043 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0044 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0045 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0046 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0047 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0048 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0049 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_3rdScreen0050 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0000 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0001 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0002 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0003 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0004 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0005 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0006 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0007 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0008 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0009 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0010 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0011 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0012 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0013 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0014 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0015 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0016 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0017 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0018 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0019 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0020 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0021 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0022 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0023 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0024 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0025 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0026 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0027 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0028 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0029 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0030 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0031 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0032 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0033 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0034 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0035 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0036 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0037 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0038 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0039 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0040 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0041 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0042 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0043 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0044 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0045 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0046 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0047 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0048 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0049 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_4screen0050 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0001 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0002 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0003 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0004 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0005 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0006 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0007 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0008 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0009 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0011 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0012 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0013 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0014 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0015 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0016 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0017 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0018 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0019 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0020 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0021 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0022 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0023 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0024 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0025 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0026 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0027 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0028 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0029 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0030 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0031 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0032 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0033 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0034 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0035 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0036 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0037 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0038 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0039 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0040 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0041 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0042 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0043 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0044 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0045 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0046 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0047 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0048 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0049 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0050 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_solid0060 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0000 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0001 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0002 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0003 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0004 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0005 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0006 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0007 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0008 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0009 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0010 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0011 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0012 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0013 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0014 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0015 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0016 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0017 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0018 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0019 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0020 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0021 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0022 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0023 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0024 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0025 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0026 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0027 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0028 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0029 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0030 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0031 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0032 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0033 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0034 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0035 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0036 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0037 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0038 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0039 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(225);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0040 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(226);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0041 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(227);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0042 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(228);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0043 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(229);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0044 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(230);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0045 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(231);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0046 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(232);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0047 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(233);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0048 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(234);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0049 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(235);
}).prototype = p = new cjs.Sprite();



(lib.PLCunitCycle_TOP0050 = function() {
	this.spriteSheet = ss["PLC_InternalWorkings_atlas_"];
	this.gotoAndStop(236);
}).prototype = p = new cjs.Sprite();



(lib.txt_InternalWorkings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8898A6").s().p("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");
	this.shape.setTransform(35.7,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.7,-7.8,223,10.4);


(lib.TXT_DECREASEunitTrans_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("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");
	this.shape.setTransform(76.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,3.3,149.3,23.8);


(lib.mc_PLCtop_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLCunitCycle_TOP0025();
	this.instance.parent = this;

	this.instance_1 = new lib.PLCunitCycle_TOP0026();
	this.instance_1.parent = this;

	this.instance_2 = new lib.PLCunitCycle_TOP0027();
	this.instance_2.parent = this;

	this.instance_3 = new lib.PLCunitCycle_TOP0028();
	this.instance_3.parent = this;

	this.instance_4 = new lib.PLCunitCycle_TOP0029();
	this.instance_4.parent = this;

	this.instance_5 = new lib.PLCunitCycle_TOP0030();
	this.instance_5.parent = this;

	this.instance_6 = new lib.PLCunitCycle_TOP0031();
	this.instance_6.parent = this;

	this.instance_7 = new lib.PLCunitCycle_TOP0032();
	this.instance_7.parent = this;

	this.instance_8 = new lib.PLCunitCycle_TOP0033();
	this.instance_8.parent = this;

	this.instance_9 = new lib.PLCunitCycle_TOP0034();
	this.instance_9.parent = this;

	this.instance_10 = new lib.PLCunitCycle_TOP0035();
	this.instance_10.parent = this;

	this.instance_11 = new lib.PLCunitCycle_TOP0036();
	this.instance_11.parent = this;

	this.instance_12 = new lib.PLCunitCycle_TOP0037();
	this.instance_12.parent = this;

	this.instance_13 = new lib.PLCunitCycle_TOP0038();
	this.instance_13.parent = this;

	this.instance_14 = new lib.PLCunitCycle_TOP0039();
	this.instance_14.parent = this;

	this.instance_15 = new lib.PLCunitCycle_TOP0040();
	this.instance_15.parent = this;

	this.instance_16 = new lib.PLCunitCycle_TOP0041();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PLCunitCycle_TOP0042();
	this.instance_17.parent = this;

	this.instance_18 = new lib.PLCunitCycle_TOP0043();
	this.instance_18.parent = this;

	this.instance_19 = new lib.PLCunitCycle_TOP0044();
	this.instance_19.parent = this;

	this.instance_20 = new lib.PLCunitCycle_TOP0045();
	this.instance_20.parent = this;

	this.instance_21 = new lib.PLCunitCycle_TOP0046();
	this.instance_21.parent = this;

	this.instance_22 = new lib.PLCunitCycle_TOP0047();
	this.instance_22.parent = this;

	this.instance_23 = new lib.PLCunitCycle_TOP0048();
	this.instance_23.parent = this;

	this.instance_24 = new lib.PLCunitCycle_TOP0049();
	this.instance_24.parent = this;

	this.instance_25 = new lib.PLCunitCycle_TOP0050();
	this.instance_25.parent = this;

	this.instance_26 = new lib.PLCunitCycle_TOP0000();
	this.instance_26.parent = this;

	this.instance_27 = new lib.PLCunitCycle_TOP0001();
	this.instance_27.parent = this;

	this.instance_28 = new lib.PLCunitCycle_TOP0002();
	this.instance_28.parent = this;

	this.instance_29 = new lib.PLCunitCycle_TOP0003();
	this.instance_29.parent = this;

	this.instance_30 = new lib.PLCunitCycle_TOP0004();
	this.instance_30.parent = this;

	this.instance_31 = new lib.PLCunitCycle_TOP0005();
	this.instance_31.parent = this;

	this.instance_32 = new lib.PLCunitCycle_TOP0006();
	this.instance_32.parent = this;

	this.instance_33 = new lib.PLCunitCycle_TOP0007();
	this.instance_33.parent = this;

	this.instance_34 = new lib.PLCunitCycle_TOP0008();
	this.instance_34.parent = this;

	this.instance_35 = new lib.PLCunitCycle_TOP0009();
	this.instance_35.parent = this;

	this.instance_36 = new lib.PLCunitCycle_TOP0010();
	this.instance_36.parent = this;

	this.instance_37 = new lib.PLCunitCycle_TOP0011();
	this.instance_37.parent = this;

	this.instance_38 = new lib.PLCunitCycle_TOP0012();
	this.instance_38.parent = this;

	this.instance_39 = new lib.PLCunitCycle_TOP0013();
	this.instance_39.parent = this;

	this.instance_40 = new lib.PLCunitCycle_TOP0014();
	this.instance_40.parent = this;

	this.instance_41 = new lib.PLCunitCycle_TOP0015();
	this.instance_41.parent = this;

	this.instance_42 = new lib.PLCunitCycle_TOP0016();
	this.instance_42.parent = this;

	this.instance_43 = new lib.PLCunitCycle_TOP0017();
	this.instance_43.parent = this;

	this.instance_44 = new lib.PLCunitCycle_TOP0018();
	this.instance_44.parent = this;

	this.instance_45 = new lib.PLCunitCycle_TOP0019();
	this.instance_45.parent = this;

	this.instance_46 = new lib.PLCunitCycle_TOP0020();
	this.instance_46.parent = this;

	this.instance_47 = new lib.PLCunitCycle_TOP0021();
	this.instance_47.parent = this;

	this.instance_48 = new lib.PLCunitCycle_TOP0022();
	this.instance_48.parent = this;

	this.instance_49 = new lib.PLCunitCycle_TOP0023();
	this.instance_49.parent = this;

	this.instance_50 = new lib.PLCunitCycle_TOP0024();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},10).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,480);


(lib.mc_phdthree_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLCunitCycle_4screen0000();
	this.instance.parent = this;

	this.instance_1 = new lib.PLCunitCycle_4screen0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.PLCunitCycle_4screen0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.PLCunitCycle_4screen0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.PLCunitCycle_4screen0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.PLCunitCycle_4screen0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.PLCunitCycle_4screen0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.PLCunitCycle_4screen0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.PLCunitCycle_4screen0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.PLCunitCycle_4screen0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.PLCunitCycle_4screen0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.PLCunitCycle_4screen0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.PLCunitCycle_4screen0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.PLCunitCycle_4screen0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.PLCunitCycle_4screen0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.PLCunitCycle_4screen0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.PLCunitCycle_4screen0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PLCunitCycle_4screen0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.PLCunitCycle_4screen0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.PLCunitCycle_4screen0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.PLCunitCycle_4screen0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.PLCunitCycle_4screen0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.PLCunitCycle_4screen0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.PLCunitCycle_4screen0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.PLCunitCycle_4screen0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.PLCunitCycle_4screen0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.PLCunitCycle_4screen0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.PLCunitCycle_4screen0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.PLCunitCycle_4screen0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.PLCunitCycle_4screen0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.PLCunitCycle_4screen0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.PLCunitCycle_4screen0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.PLCunitCycle_4screen0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.PLCunitCycle_4screen0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.PLCunitCycle_4screen0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.PLCunitCycle_4screen0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.PLCunitCycle_4screen0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.PLCunitCycle_4screen0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.PLCunitCycle_4screen0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.PLCunitCycle_4screen0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.PLCunitCycle_4screen0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.PLCunitCycle_4screen0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.PLCunitCycle_4screen0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.PLCunitCycle_4screen0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.PLCunitCycle_4screen0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.PLCunitCycle_4screen0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.PLCunitCycle_4screen0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.PLCunitCycle_4screen0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.PLCunitCycle_4screen0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.PLCunitCycle_4screen0049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.PLCunitCycle_4screen0050();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},5).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_phd_two_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLCunitCycle_3rdScreen0000();
	this.instance.parent = this;

	this.instance_1 = new lib.PLCunitCycle_3rdScreen0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.PLCunitCycle_3rdScreen0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.PLCunitCycle_3rdScreen0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.PLCunitCycle_3rdScreen0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.PLCunitCycle_3rdScreen0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.PLCunitCycle_3rdScreen0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.PLCunitCycle_3rdScreen0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.PLCunitCycle_3rdScreen0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.PLCunitCycle_3rdScreen0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.PLCunitCycle_3rdScreen0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.PLCunitCycle_3rdScreen0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.PLCunitCycle_3rdScreen0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.PLCunitCycle_3rdScreen0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.PLCunitCycle_3rdScreen0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.PLCunitCycle_3rdScreen0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.PLCunitCycle_3rdScreen0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PLCunitCycle_3rdScreen0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.PLCunitCycle_3rdScreen0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.PLCunitCycle_3rdScreen0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.PLCunitCycle_3rdScreen0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.PLCunitCycle_3rdScreen0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.PLCunitCycle_3rdScreen0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.PLCunitCycle_3rdScreen0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.PLCunitCycle_3rdScreen0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.PLCunitCycle_3rdScreen0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.PLCunitCycle_3rdScreen0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.PLCunitCycle_3rdScreen0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.PLCunitCycle_3rdScreen0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.PLCunitCycle_3rdScreen0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.PLCunitCycle_3rdScreen0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.PLCunitCycle_3rdScreen0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.PLCunitCycle_3rdScreen0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.PLCunitCycle_3rdScreen0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.PLCunitCycle_3rdScreen0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.PLCunitCycle_3rdScreen0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.PLCunitCycle_3rdScreen0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.PLCunitCycle_3rdScreen0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.PLCunitCycle_3rdScreen0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.PLCunitCycle_3rdScreen0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.PLCunitCycle_3rdScreen0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.PLCunitCycle_3rdScreen0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.PLCunitCycle_3rdScreen0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.PLCunitCycle_3rdScreen0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.PLCunitCycle_3rdScreen0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.PLCunitCycle_3rdScreen0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.PLCunitCycle_3rdScreen0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.PLCunitCycle_3rdScreen0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.PLCunitCycle_3rdScreen0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.PLCunitCycle_3rdScreen0049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.PLCunitCycle_3rdScreen0050();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},5).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_phd_one_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLCunitCycle_2screen0000();
	this.instance.parent = this;

	this.instance_1 = new lib.PLCunitCycle_2screen0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.PLCunitCycle_2screen0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.PLCunitCycle_2screen0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.PLCunitCycle_2screen0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.PLCunitCycle_2screen0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.PLCunitCycle_2screen0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.PLCunitCycle_2screen0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.PLCunitCycle_2screen0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.PLCunitCycle_2screen0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.PLCunitCycle_2screen0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.PLCunitCycle_2screen0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.PLCunitCycle_2screen0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.PLCunitCycle_2screen0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.PLCunitCycle_2screen0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.PLCunitCycle_2screen0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.PLCunitCycle_2screen0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PLCunitCycle_2screen0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.PLCunitCycle_2screen0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.PLCunitCycle_2screen0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.PLCunitCycle_2screen0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.PLCunitCycle_2screen0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.PLCunitCycle_2screen0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.PLCunitCycle_2screen0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.PLCunitCycle_2screen0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.PLCunitCycle_2screen0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.PLCunitCycle_2screen0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.PLCunitCycle_2screen0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.PLCunitCycle_2screen0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.PLCunitCycle_2screen0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.PLCunitCycle_2screen0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.PLCunitCycle_2screen0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.PLCunitCycle_2screen0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.PLCunitCycle_2screen0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.PLCunitCycle_2screen0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.PLCunitCycle_2screen0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.PLCunitCycle_2screen0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.PLCunitCycle_2screen0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.PLCunitCycle_2screen0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.PLCunitCycle_2screen0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.PLCunitCycle_2screen0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.PLCunitCycle_2screen0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.PLCunitCycle_2screen0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.PLCunitCycle_2screen0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.PLCunitCycle_2screen0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.PLCunitCycle_2screen0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.PLCunitCycle_2screen0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.PLCunitCycle_2screen0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.PLCunitCycle_2screen0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.PLCunitCycle_2screen0049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.PLCunitCycle_2screen0050();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},5).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.mc_phd_base_PLCiw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLCunitCycle_solid0060();
	this.instance.parent = this;

	this.instance_1 = new lib.PLCunitCycle_solid0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.PLCunitCycle_solid0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.PLCunitCycle_solid0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.PLCunitCycle_solid0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.PLCunitCycle_solid0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.PLCunitCycle_solid0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.PLCunitCycle_solid0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.PLCunitCycle_solid0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.PLCunitCycle_solid0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.PLCunitCycle_solid0011();
	this.instance_10.parent = this;

	this.instance_11 = new lib.PLCunitCycle_solid0012();
	this.instance_11.parent = this;

	this.instance_12 = new lib.PLCunitCycle_solid0013();
	this.instance_12.parent = this;

	this.instance_13 = new lib.PLCunitCycle_solid0014();
	this.instance_13.parent = this;

	this.instance_14 = new lib.PLCunitCycle_solid0015();
	this.instance_14.parent = this;

	this.instance_15 = new lib.PLCunitCycle_solid0016();
	this.instance_15.parent = this;

	this.instance_16 = new lib.PLCunitCycle_solid0017();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PLCunitCycle_solid0018();
	this.instance_17.parent = this;

	this.instance_18 = new lib.PLCunitCycle_solid0019();
	this.instance_18.parent = this;

	this.instance_19 = new lib.PLCunitCycle_solid0020();
	this.instance_19.parent = this;

	this.instance_20 = new lib.PLCunitCycle_solid0021();
	this.instance_20.parent = this;

	this.instance_21 = new lib.PLCunitCycle_solid0022();
	this.instance_21.parent = this;

	this.instance_22 = new lib.PLCunitCycle_solid0023();
	this.instance_22.parent = this;

	this.instance_23 = new lib.PLCunitCycle_solid0024();
	this.instance_23.parent = this;

	this.instance_24 = new lib.PLCunitCycle_solid0025();
	this.instance_24.parent = this;

	this.instance_25 = new lib.PLCunitCycle_solid0026();
	this.instance_25.parent = this;

	this.instance_26 = new lib.PLCunitCycle_solid0027();
	this.instance_26.parent = this;

	this.instance_27 = new lib.PLCunitCycle_solid0028();
	this.instance_27.parent = this;

	this.instance_28 = new lib.PLCunitCycle_solid0029();
	this.instance_28.parent = this;

	this.instance_29 = new lib.PLCunitCycle_solid0030();
	this.instance_29.parent = this;

	this.instance_30 = new lib.PLCunitCycle_solid0031();
	this.instance_30.parent = this;

	this.instance_31 = new lib.PLCunitCycle_solid0032();
	this.instance_31.parent = this;

	this.instance_32 = new lib.PLCunitCycle_solid0033();
	this.instance_32.parent = this;

	this.instance_33 = new lib.PLCunitCycle_solid0034();
	this.instance_33.parent = this;

	this.instance_34 = new lib.PLCunitCycle_solid0035();
	this.instance_34.parent = this;

	this.instance_35 = new lib.PLCunitCycle_solid0036();
	this.instance_35.parent = this;

	this.instance_36 = new lib.PLCunitCycle_solid0037();
	this.instance_36.parent = this;

	this.instance_37 = new lib.PLCunitCycle_solid0038();
	this.instance_37.parent = this;

	this.instance_38 = new lib.PLCunitCycle_solid0039();
	this.instance_38.parent = this;

	this.instance_39 = new lib.PLCunitCycle_solid0040();
	this.instance_39.parent = this;

	this.instance_40 = new lib.PLCunitCycle_solid0041();
	this.instance_40.parent = this;

	this.instance_41 = new lib.PLCunitCycle_solid0042();
	this.instance_41.parent = this;

	this.instance_42 = new lib.PLCunitCycle_solid0043();
	this.instance_42.parent = this;

	this.instance_43 = new lib.PLCunitCycle_solid0044();
	this.instance_43.parent = this;

	this.instance_44 = new lib.PLCunitCycle_solid0045();
	this.instance_44.parent = this;

	this.instance_45 = new lib.PLCunitCycle_solid0046();
	this.instance_45.parent = this;

	this.instance_46 = new lib.PLCunitCycle_solid0047();
	this.instance_46.parent = this;

	this.instance_47 = new lib.PLCunitCycle_solid0048();
	this.instance_47.parent = this;

	this.instance_48 = new lib.PLCunitCycle_solid0049();
	this.instance_48.parent = this;

	this.instance_49 = new lib.PLCunitCycle_solid0050();
	this.instance_49.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},5).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.VIEWback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#182633").s().p("At7DfIAAm9Ib2AAIAAG9g");
	this.shape.setTransform(89.2,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.3,44.7);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.106)").s().p("At7EMQgSAAgNgNQgNgNgBgTIAAm9QABgTANgNQANgNASAAIb2AAQATAAANANQANANAAATIAAG9QAAATgNANQgNANgTAAgAuXj7QgLAMAAARIAAG9QAAARALALQAMAMAQAAIb2AAQARAAAMgMQALgLABgRIAAm9QgBgRgLgMQgMgLgRAAI72AAQgQAAgMALg");
	this.shape.setTransform(93.7,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.216)").s().p("At7EHQgQAAgMgMQgLgLAAgRIAAm9QAAgRALgMQAMgLAQAAIb2AAQARAAAMALQALAMABARIAAG9QgBARgLALQgMAMgRAAgAuTj3QgKAKgBAPIAAG9QABAPAKAKQAKAKAOAAIb2AAQAPAAAKgKQALgKAAgPIAAm9QAAgPgLgKQgKgKgPAAI72AAQgOAAgKAKg");
	this.shape_1.setTransform(93.7,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.329)").s().p("At7ECQgOAAgKgKQgKgKgBgPIAAm9QABgPAKgKQAKgKAOAAIb2AAQAPAAAKAKQALAKAAAPIAAG9QAAAPgLAKQgKAKgPAAgAN7D9QANAAAJgJQAJgIgBgNIAAm9QABgNgJgIQgJgJgNAAI72AAQgMAAgJAJQgJAIABANIAAG9QgBANAJAIQAJAJAMAAg");
	this.shape_2.setTransform(93.7,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.439)").s().p("AN7D9I72AAQgMAAgJgJQgJgIABgNIAAm9QgBgNAJgIQAJgJAMAAIb2AAQANAAAJAJQAJAIgBANIAAG9QABANgJAIQgJAJgMAAIgBAAgAN7D4QALAAAHgHQAIgHAAgLIAAm9QAAgLgIgHQgHgHgLAAI72AAQgKAAgHAHQgIAHAAALIAAG9QAAALAIAHQAHAHAKAAg");
	this.shape_3.setTransform(93.7,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.553)").s().p("AN7D4I71AAQgLAAgHgHQgIgHAAgLIAAm9QAAgLAIgHQAHgHALAAIb1AAQALAAAHAHQAIAHAAALIAAG9QAAALgIAHQgHAHgKAAIgBAAgAN7DzQAJAAAGgGQAGgFgBgJIAAm9QABgJgGgFQgGgGgJAAI71AAQgJAAgGAGQgGAFABAJIAAG9QgBAJAGAFQAGAGAJAAg");
	this.shape_4.setTransform(93.6,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.663)").s().p("AN7DzI71AAQgJAAgGgGQgGgFABgJIAAm9QgBgJAGgFQAGgGAJAAIb1AAQAJAAAGAGQAGAFgBAJIAAG9QABAJgGAFQgGAGgIAAIgBAAgAuFjpQgEAFgBAGIAAG9QABAGAEAFQAEAEAHAAIb1AAQAHAAAEgEQAEgFABgGIAAm9QgBgGgEgFQgEgEgHAAI71AAQgHAAgEAEg");
	this.shape_5.setTransform(93.6,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.776)").s().p("At7DuQgGAAgEgEQgEgFgBgGIAAm9QABgGAEgFQAEgEAGAAIb2AAQAHAAAEAEQAEAFABAGIAAG9QgBAGgEAFQgEAEgHAAgAuCjlQgCADAAAEIAAG9QAAAEACADQADADAEAAIb2AAQAFAAADgDQACgDAAgEIAAm9QAAgEgCgDQgDgDgFAAI72AAQgEAAgDADg");
	this.shape_6.setTransform(93.7,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.886)").s().p("At7DpQgEAAgDgDQgCgDAAgEIAAm9QAAgEACgDQADgDAEAAIb2AAQAFAAADADQACADAAAEIAAG9QAAAEgCADQgDADgFAAgAt+jiQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABIAAG9QABABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAIb2AAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAAm9QgBgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAI72AAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_7.setTransform(93.7,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("At7DkQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAm9QABgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIb2AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABIAAG9QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_8.setTransform(93.7,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.3,53.7);


(lib.cirShad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(33,51,69,0.553)").s().p("AiUCVQg+g+AAhXQAAhWA+g+QA+g+BWAAQBXAAA+A+QA+A+AABWQAABXg+A+Qg+A+hXAAQhWAAg+g+gAiSiSQg9A9AABVQAABWA9A9QA9A9BVAAQBWAAA9g9QA9g9AAhWQAAhVg9g9Qg9g9hWAAQhVAAg9A9g");
	this.shape.setTransform(22.9,22.9,0.882,0.882);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(33,51,69,0.439)").s().p("AiXCYQg+g/AAhZQAAhYA+g/QA/g+BYAAQBZAAA/A+QA+A/AABYQAABZg+A/Qg/A+hZAAQhYAAg/g+gAiUiUQg+A+AABWQAABXA+A+QA+A+BWAAQBXAAA+g+QA+g+AAhXQAAhWg+g+Qg+g+hXAAQhWAAg+A+g");
	this.shape_1.setTransform(22.9,22.9,0.882,0.882);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(33,51,69,0.886)").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7gAiLiLQg6A6AABRQAABSA6A6QA6A6BRAAQBSAAA6g6QA6g6AAhSQAAhRg6g6Qg6g6hSAAQhRAAg6A6g");
	this.shape_2.setTransform(22.9,22.9,0.882,0.882);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(33,51,69,0.329)").s().p("AAADaQhZAAhAhAIAAAAQhAhAAAhaQAAhZBAhAIAAAAQBAhABZAAQBaAABABAIAAAAQBABAAABZQAABahABAIAAAAQhABAhaAAIAAAAgAiXiXQg+A/AABYQAABZA+A/QA/A+BYAAQBZAAA/g+QA+g/AAhZQAAhYg+g/Qg/g+hZAAQhYAAg/A+g");
	this.shape_3.setTransform(22.9,22.9,0.882,0.882);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(33,51,69,0.216)").s().p("AibCdIgBgBQhAhBAAhbQAAhaBAhBIABgBQBBhABaAAQBbAABBBAIABABQBABBAABaQAABbhABBIgBABQhBBAhbAAQhaAAhBhAgAiZiZIAAAAQhABAAABZQAABaBABAIAAAAQBABABZAAQBaAABAhAIAAAAQBAhAAAhaQAAhZhAhAIAAAAQhAhAhaAAIAAAAQhZAAhABAg");
	this.shape_4.setTransform(22.9,22.9,0.882,0.882);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(33,51,69,0.106)").s().p("AidCfIgBAAQhBhCAAhdQAAhcBBhBIABgBQBBhBBcAAQBdAABCBBIAAABQBBBBAABcQAABdhBBCIAAAAQhCBBhdAAQhcAAhBhBgAibicIgBABQhABBAABaQAABbBABBIABABQBBBABaAAQBbAABBhAIABgBQBAhBAAhbQAAhahAhBIgBgBQhBhAhbAAQhaAAhBBAg");
	this.shape_5.setTransform(22.9,22.9,0.882,0.882);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(33,51,69,0.776)").s().p("AAADMQhUABg8g8IAAAAQg8g8ABhVQgBhUA8g8IAAAAQA8g8BUABQBVgBA8A8IAAAAQA8A8gBBUQABBVg8A8IAAAAQg8A7hVAAIAAAAgAiNiNQg7A7AABSQAABTA7A7QA7A7BSAAQBTAAA7g7QA7g7AAhTQAAhSg7g7Qg7g7hTAAQhSAAg7A7g");
	this.shape_6.setTransform(22.9,22.9,0.882,0.882);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(33,51,69,0.663)").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9gAiQiQIAAAAQg8A8ABBUQgBBVA8A8IAAAAQA8A8BUgBQBVABA8g8IAAAAQA8g8gBhVQABhUg8g8IAAAAQg8g8hVABIAAAAQhUgBg8A8g");
	this.shape_7.setTransform(22.9,22.9,0.882,0.882);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#213345").s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhRAAg6g6g");
	this.shape_8.setTransform(22.9,22.9,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3.1,39.5,39.5);


(lib.cir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("AiGCHQg3g4gBhPQABhOA3g4QA4g3BOgBQBPABA4A3QA3A4AABOQAABPg3A4Qg4A3hPAAQhOAAg4g3g");
	this.shape.setTransform(19.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,38.1);


(lib.BACKGROUND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#475569","#7F97B9","#9EBFEC"],[0,0.424,1],0,-195.9,0,196).s().p("EgyTAlqMAAAhLTMBknAAAMAAABLTg");
	this.shape.setTransform(375,153,1.165,0.635);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,306);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CCFF").ss(6,1,1).p("AArAAIhVAA");
	this.shape.setTransform(4.3,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#99CCFF").ss(6,1,1).p("Ag0h+IBqCKIhqBz");
	this.shape_1.setTransform(13.3,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,24.7,31.4);


(lib.ViewCloseup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCFF").s().p("AIrA0QgOgBgFgBIgHgDIgGgEIgEgGIgEgGIgCgQIAAhBIAfAAIAAA6IABAIQABAEACACQACACADABIAIABIAgAAIAIgBIAEgDQACgCACgEIABgIIAAg6IAeAAIAABBQAAALgCAFIgDAGIgFAGIgFAEIgHADQgLACgIAAgAESA0IgSgBQgIgCgEgDQgFgDgCgFQgCgFgBgIIAAgHIAgAAIABAGIACADQADACAHAAIAmAAQAHAAACgBIAEgDIABgEIgBgGIgGgCIgOgBIgXgBIgcgBIgJgCQgEgBgDgCQgCgBgCgDIgDgEQgBgFAAgKIAAgNQACgGAEgEIAEgEIAIgDIAJgCIA5gBQAJAAANACIAHADIAEAEQAEADABAGQABAFABAHIAAADIggAAQAAgGgCgCIgEgBIgJgBIgiAAQgGAAgDACQgDACAAAEIABAFQABACAEABQAFABAaAAIAeABIAKABIAIADIAGAEIADAFIACAHIAAAKQAAAMgCAFIgCAFIgGAEIgGADIgJACIgZABgAB8A0QgMAAgHgCQgLgDgDgCIgGgFIgDgHIgCgIIgBgKIAAgdIABgKIACgIIADgHIAGgFQADgCALgDQAHgCAMAAIAxAAQAMAAAHACIAHACQAEABADACIAFAFIAEAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgCADIgFAFIgHADIgHACQgHACgMAAgAB4gXQgDABgCADQgCACgCAEIgBAJIAAAKIABAJQABAEACACQACADADABIAJABIAoAAIAJgBQADgBACgDQACgCACgEIAAgJIAAgKIAAgJQgCgEgCgCIgFgEQgFgCgGAAIgkAAQgGAAgEACgAiKA0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgdIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAlAAQAKAAAQACIAIADQAEABADADIAEAFQACADABADQABAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQABAEABACQADADADABIAJABIAqgBIAFgBQACgCACgDIABgHIAeAAIAAAJQABAHgCAFQgCAGgEAEQgEAEgHADQgLACgIAAgAKVAzIAAhlIBVAAQAIAAALADIAGADIAEAEQAEAFADAGQABAGAAAIIAAAJQAAAGgBAEQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAK1AAIAwAAQAFAAACgCQADgDAAgFIAAgEQAAgFgDgDQgDgCgHAAIgtAAgAF9AzIAAhlIBwAAIAAAYIhQAAIAAAQIBLAAIAAAUIhLAAIAAAQIBRAAIAAAZgAggAzIAAhlIAfAAIAABLIBFAAIAAAagAlKAzIgXhCIgBAAIgXBCIgkAAIghhlIAfAAIAVBKIAahKIAdAAIAZBKIABAAIAVhKIAfAAIghBlgAo4AzIAAhlIBvAAIAAAYIhQAAIAAAQIBMAAIAAAUIhMAAIAAAQIBRAAIAAAZgApuAzIAAhlIAfAAIAABlgArYAzIg2hlIAiAAIAoBLIAohLIAhAAIg2Blg");
	this.shape.setTransform(93.1,19.7);

	this.instance = new lib.VIEWback("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.9,23.3,1,1,0,0,0,82.4,25.2);

	this.instance_1 = new lib.shadow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.6,21.9,0.98,0.98,0,0,0,93.5,26.9);
	this.instance_1.alpha = 0.512;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AIrA0QgOgBgFgBIgHgDIgGgEIgEgGIgEgGIgCgQIAAhBIAfAAIAAA6IABAIQABAEACACQACACADABIAIABIAgAAIAIgBIAEgDQACgCACgEIABgIIAAg6IAeAAIAABBQAAALgCAFIgDAGIgFAGIgFAEIgHADQgLACgIAAgAESA0IgSgBQgIgCgEgDQgFgDgCgFQgCgFgBgIIAAgHIAgAAIABAGIACADQADACAHAAIAmAAQAHAAACgBIAEgDIABgEIgBgGIgGgCIgOgBIgXgBIgcgBIgJgCQgEgBgDgCQgCgBgCgDIgDgEQgBgFAAgKIAAgNQACgGAEgEIAEgEIAIgDIAJgCIA5gBQAJAAANACIAHADIAEAEQAEADABAGQABAFABAHIAAADIggAAQAAgGgCgCIgEgBIgJgBIgiAAQgGAAgDACQgDACAAAEIABAFQABACAEABQAFABAaAAIAeABIAKABIAIADIAGAEIADAFIACAHIAAAKQAAAMgCAFIgCAFIgGAEIgGADIgJACIgZABgAB8A0QgMAAgHgCQgLgDgDgCIgGgFIgDgHIgCgIIgBgKIAAgdIABgKIACgIIADgHIAGgFQADgCALgDQAHgCAMAAIAxAAQAMAAAHACIAHACQAEABADACIAFAFIAEAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgCADIgFAFIgHADIgHACQgHACgMAAgAB4gXQgDABgCADQgCACgCAEIgBAJIAAAKIABAJQABAEACACQACADADABIAJABIAoAAIAJgBQADgBACgDQACgCACgEIAAgJIAAgKIAAgJQgCgEgCgCIgFgEQgFgCgGAAIgkAAQgGAAgEACgAiKA0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgdIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAlAAQAKAAAQACIAIADQAEABADADIAEAFQACADABADQABAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgIAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQABAEABACQADADADABIAJABIAqgBIAFgBQACgCACgDIABgHIAeAAIAAAJQABAHgCAFQgCAGgEAEQgEAEgHADQgLACgIAAgAKVAzIAAhlIBVAAQAIAAALADIAGADIAEAEQAEAFADAGQABAGAAAIIAAAJQAAAGgBAEQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAK1AAIAwAAQAFAAACgCQADgDAAgFIAAgEQAAgFgDgDQgDgCgHAAIgtAAgAF9AzIAAhlIBwAAIAAAYIhQAAIAAAQIBLAAIAAAUIhLAAIAAAQIBRAAIAAAZgAggAzIAAhlIAfAAIAABLIBFAAIAAAagAlKAzIgXhCIgBAAIgXBCIgkAAIghhlIAfAAIAVBKIAahKIAdAAIAZBKIABAAIAVhKIAfAAIghBlgAo4AzIAAhlIBvAAIAAAYIhQAAIAAAQIBMAAIAAAUIhMAAIAAAQIBRAAIAAAZgApuAzIAAhlIAfAAIAABlgArYAzIg2hlIAiAAIAoBLIAohLIAhAAIg2Blg");
	this.shape_1.setTransform(93.1,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#182633").ss(3,1,1).p("AjcnrQDMAACPCQQCQCQAADLQAADMiQCQQiPCQjMAAQjMAAiQiQQiQiQAAjMQAAjLCQiQQCQiQDMAAgAEjAAQBjAABiAAQA8AAA8AAQA0AAA1AA");
	this.shape_2.setTransform(-74.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-4.4,183.5,52.6);


(lib.ButtonForward_two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,0,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.cir("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,42,42);

	this.instance_2 = new lib.cirShad("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.1,-2.7);
	this.instance_2.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("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");
	this.shape.setTransform(-79.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jlI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFQgGgGgIABg");
	this.shape_1.setTransform(-55,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],-103.9,0,104,0).s().p("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");
	this.shape_2.setTransform(-55,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("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");
	this.shape_3.setTransform(-55,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjgQgGgGgIABI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFg");
	this.shape_4.setTransform(-55,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8799AD").s().p("AP7DnI/1AAQgJAAgGgGQgGgFAAgGIAAmrQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGrQAAAGgHAFQgGAGgHAAIgBAAg");
	this.shape_5.setTransform(-55,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-5.2,210,48.1);


(lib.ButtonForward_one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,0,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.cir("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,42,42);

	this.instance_2 = new lib.cirShad("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.1,-2.7);
	this.instance_2.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("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");
	this.shape.setTransform(-79.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jlI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFQgGgGgIABg");
	this.shape_1.setTransform(-55,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],-103.9,0,104,0).s().p("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");
	this.shape_2.setTransform(-55,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("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");
	this.shape_3.setTransform(-55,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjgQgGgGgIABI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFg");
	this.shape_4.setTransform(-55,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8799AD").s().p("AP7DnI/1AAQgJAAgGgGQgGgFAAgGIAAmrQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGrQAAAGgHAFQgGAGgHAAIgBAAg");
	this.shape_5.setTransform(-55,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-5.2,210,48.1);


(lib.ButtonForward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,0,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.cir("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,42,42);

	this.instance_2 = new lib.cirShad("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.1,-2.7);
	this.instance_2.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("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");
	this.shape.setTransform(-79.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jlI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFQgGgGgIABg");
	this.shape_1.setTransform(-55,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],-103.9,0,104,0).s().p("AP7DnI/1AAQgJAAgGgGQgGgFAAgGIAAmrQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGrQAAAGgHAFQgGAGgHAAIgBAAgAEXAiQgJACgDACIgEAFIgEAFIgCAHIAAAIIAAAbIAAAIIACAHIAEAFIAEAFIAMAEQAHACAJAAIArAAQAHAAAJgCQAGgCAEgDQADgEACgFQABgEAAgGIAAgIIgbAAIAAAGIgDAEIgFACIgkAAIgHgBQgDgBgCgDQgCgCAAgCIgBgIIAAgKIABgIIACgFIAFgEIAJgBIAdAAQAGABADABQADACAAAFIAAACIAbAAQAAgKgBgGIgCgFIgEgFIgFgDIgIgCQgNgCgKAAIgfAAQgJAAgHACgAnoBiQAAAGACAFQACAFAEADQAEACAGABIAQABIAgAAIAWgBIAHgCIAGgCIAEgEQACgBAAgDQACgEAAgLIAAgIIgCgGIgDgFQgCgDgDAAIgGgDIgJgCIgaAAQgWAAgEgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgFQAAgDADgCQADgBAFAAIAkAAIAEACQACABAAAGIAbAAIAAgDIgBgLQgBgEgEgEIgEgCIgGgDQgKgCgIAAIgwABIgJACIgGACIgEADQgDADgBAGIgBALQAAAIABAFQAAABABAAQAAABAAABQAAAAABABQAAAAAAABIAEADIAGACIAIACIAXABIAVABIALABQAEAAABACIABAEIgBAEIgDACIgIABIggAAQgHABgCgCIgCgDIgBgGIgaAAgAGqBaIAAAeIAbAAIAAgeIAwg5IggAAIgdAkIgegkIggAAgACWA5IAyA/IApAAIAAhXIgbAAIAABAIgyhAIgpAAIAABXIAaAAIAAg/gAAKB4IBhAAIAAgVIhGAAIAAgOIBBAAIAAgSIhBAAIAAgNIBEAAIAAgVIhfAAgAgtBiIAFAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIACAEIAAAQIAbAAIAAgPIgBgIQgBgEgCgCIgFgDIgGgCIAIgDIAEgEIADgGIAAgJIAAgFIgBgLQgBgFgDgDQgDgEgFgBQgFgCgIAAIhQAAIAABXIAaAAIAAgWgAihBpIAJAPIAdAAIgwhXIgiAAIgvBXIAdAAIAIgPgAlqB4IAaAAIAAgWIA1AAQAFAAAHgCQAFgDADgEQACgDACgGIABgJIAAgIQAAgHgCgFQgBgFgDgEIgFgEIgFgCQgJgDgHAAIhIAAgApUA5IAyA/IApAAIAAhXIgaAAIAABAIgyhAIgqAAIAABXIAbAAIAAg/gAqeBpIAIAPIAeAAIgwhXIgjAAIgvBXIAeAAIAIgPgAspBiIAFAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAIACAEIABAQIAaAAIAAgPIgBgIQgBgEgCgCIgFgDIgFgCIAHgDIAFgEIACgGIABgJIAAgFIgBgLQgCgFgDgDQgDgEgFgBQgFgCgHAAIhRAAIAABXIAbAAIAAgWgAvfA2IAlAAIAABCIAbAAIAAhCIAlAAIAAgVIhlAAgABdg7QAAALACAEIADAFIADAFIAFADIAHADQAEABALABIAnAAQAGAAAJgCIAHgDIAFgDIADgFIADgFIACgPIAAg4IgaAAIAAAzIgBAHIgDAFIgEACIgHABIgbAAIgHgBQgDgBgBgBIgDgFIgBgHIAAgzIgaAAgAjMgyQAAAHACAFQACAEAEADQAEADAGABIAQABIAgAAIAWgBIAHgCIAGgDIAEgDQACgCAAgDQACgDAAgLIAAgIIgCgHIgDgEQgCgDgDgBIgGgCIgJgCIgaAAQgWAAgEgBQgBgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgEQAAgEADgCQADgBAFAAIAkAAIAEACQACACAAAFIAbAAIAAgCIgBgLQgBgFgEgDIgEgDIgGgDQgKgBgIgBIgwABIgJACIgGADIgEADQgDADgBAGIgBAKQAAAJABAFQABAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAEADIAGADIAIACIAXAAIAVABIALABQAEABABABIABAFIgBADIgDADIgIABIggAAQgHAAgCgBIgCgEIgBgFIgaAAgAqmhyQgIADgEACIgEAEIgDAGIgCAHIgBAIIAAAaIABAIIACAHIADAGIAEAEIAMAFQAHABAKABIArAAQAGAAAKgCQAGgCAEgEQADgEABgFQACgEAAgFIAAgJIgbAAIgBAHIgCADIgFACIgkAAIgIgBQgDgBgBgCQgCgCgBgDIAAgIIAAgKIAAgHIADgGIAFgDIAIgBIAdAAQAHAAADACQADACAAAEIAAADIAbAAQAAgKgCgGIgCgGIgDgEIgGgEIgHgCQgOgBgJgBIgfAAQgKABgHABgAGNhdIAmAAIAABCIAaAAIAAhCIAmAAIAAgWIhmAAgAFmgbIAaAAIAAhYIgaAAgAD3haIAyA/IApAAIAAhYIgaAAIAABAIgyhAIgqAAIAABYIAbAAIAAg/gAhOgbIBfAAIAAgWIhFAAIAAgNIBAAAIAAgSIhAAAIAAgOIBEAAIAAgVIheAAgAj6grIAIAQIAeAAIgwhYIgjAAIgvBYIAeAAIAIgQgAm+gbIBhAAIAAgWIhGAAIAAgNIBBAAIAAgSIhBAAIAAgOIBEAAIAAgVIhfAAgAn2gyIAFAAQABABABAAQAAAAAAAAQABAAAAABQABAAAAABIACADIAAARIAbAAIAAgQIgBgIQgBgEgCgBIgFgEIgGgCIAIgCIAEgFIADgGIAAgIIAAgGIgBgKQgBgFgDgDQgDgEgFgCQgFgCgIAAIhQAAIAABYIAaAAIAAgXgAsnhaIAyA/IApAAIAAhYIgaAAIAABAIgyhAIgqAAIAABYIAbAAIAAg/gAtwgbIAbAAIAAhYIgbAAgAjNBWIARggIARAggArKBWIARggIARAggAlQBMIAAgWIAoAAQAFABADACQACACAAAFIAAADQAAAEgCADQgCACgEAAgAhXBMIAAgWIAqAAQAHAAACACIADADIAAAFIAAACQAAAGgCABQgCADgGAAgAtTBMIAAgWIAqAAQAGAAADACIACADIABAFIAAACQAAAGgCABQgDADgFAAgAkmg+IARggIARAggAoghHIAAgWIAqAAQAHAAACACIADACIAAAGIAAACQAAAFgCACQgCACgGABg");
	this.shape_2.setTransform(-55,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("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");
	this.shape_3.setTransform(-55,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjgQgGgGgIABI/1AAQgJgBgGAGQgGAFAAAHIAAGqQAAAGAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgGIAAmqQAAgHgHgFg");
	this.shape_4.setTransform(-55,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8799AD").s().p("AP7DnI/1AAQgJAAgGgGQgGgFAAgGIAAmrQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGrQAAAGgHAFQgGAGgHAAIgBAAg");
	this.shape_5.setTransform(-55,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-5.2,210,48.1);


(lib.ButtonBack_two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.arrow1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.instance_2 = new lib.cir("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,42,42);

	this.instance_3 = new lib.cirShad("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,-2.7);
	this.instance_3.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.TXT_DECREASEunitTrans_PLCiw("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.3,21.5,1,1,0,0,0,76.9,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjhQgGgFgIAAI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGg");
	this.shape.setTransform(95.3,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],104.2,0,-104.1,0.1).s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_1.setTransform(95.3,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jmI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGQgGgFgIAAg");
	this.shape_2.setTransform(95.3,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_3.setTransform(95.3,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.5,210,48.1);


(lib.ButtonBack_three = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.arrow1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.instance_2 = new lib.cir("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,42,42);

	this.instance_3 = new lib.cirShad("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,-2.7);
	this.instance_3.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.TXT_DECREASEunitTrans_PLCiw("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.3,21.5,1,1,0,0,0,76.9,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjhQgGgFgIAAI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGg");
	this.shape.setTransform(95.3,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],104.2,0,-104.1,0.1).s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_1.setTransform(95.3,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jmI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGQgGgFgIAAg");
	this.shape_2.setTransform(95.3,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_3.setTransform(95.3,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.5,210,48.1);


(lib.ButtonBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.arrow1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.instance_2 = new lib.cir("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,42,42);

	this.instance_3 = new lib.cirShad("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,-2.7);
	this.instance_3.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.TXT_DECREASEunitTrans_PLCiw("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.3,21.5,1,1,0,0,0,76.9,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#213345").ss(0.5,1,1).p("AQJjhQgGgFgIAAI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGg");
	this.shape.setTransform(95.3,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C92B7","#9CCCFF"],[0,1],104.2,0,-104.1,0.1).s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_1.setTransform(95.3,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#213345").ss(0.5,1,1).p("AP7jmI/1AAQgJAAgGAFQgGAGAAAGIAAGqQAAAHAGAGQAGAFAJAAIf1AAQAIAAAGgFQAHgGAAgHIAAmqQAAgGgHgGQgGgFgIAAg");
	this.shape_2.setTransform(95.3,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C92B7").s().p("AP7DmI/1AAQgJABgGgFQgGgGAAgHIAAmqQAAgGAGgFQAGgGAJAAIf1AAQAIAAAGAGQAHAFAAAGIAAGqQAAAHgHAGQgGAEgHAAIgBAAg");
	this.shape_3.setTransform(95.3,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.5,210,48.1);


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.arrow1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,18.7,1,1,180,0,0,9.3,12.7);

	this.instance_2 = new lib.cir("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.9,19.1,1,1,0,0,0,19.1,19.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,42,42);

	this.instance_3 = new lib.cirShad("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,-2.7);
	this.instance_3.alpha = 0.648;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213345").s().p("AiGCHQg4g4ABhPQgBhOA4g4QA4g3BOgBQBPABA4A3QA4A4gBBOQABBPg4A4Qg4A3hPAAQhOAAg4g3g");
	this.shape.setTransform(19.8,19,1.294,1.294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.9);


// stage content:
(lib.PLC_InternalWorkings = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{phd_base:0,phd_one:12,phd_two:22,phd_three:32,phd_top:42});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_ViewClose.addEventListener('click', playvc);
		function playvc(evt) {
			var name = "phd_top";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_IncreaseTransBase.addEventListener('click', playtb);
		function playtb(evt) {
			var name = "phd_one";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* 
		import flash.events.MouseEvent;
		
		btn_IncreaseTransBase.addEventListener(MouseEvent.CLICK, playphd_one);
		
		//
		function playphd_one(event:MouseEvent):void
		{
		   trace("goto playphd_one");
		   stop();
		   gotoAndPlay("phd_one");
		}
		*/
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		var self = this;
		
		this.btn_IncreaseTransOne.addEventListener('click', playtt);
		function playtt(evt) {
			var name = "phd_two";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_DecreaseTransOne.addEventListener('click', playba);
		function playba(evt) {
			var name = "phd_base";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* import flash.events.MouseEvent;
		
		btn_IncreaseTransOne.addEventListener(MouseEvent.CLICK, playphd_two);
		btn_DecreaseTransOne.addEventListener(MouseEvent.CLICK, playbase);
		
		//
		function playphd_two(event:MouseEvent):void
		{
		   trace("goto playphd_two");
		   stop();
		   gotoAndPlay("phd_two");
		}
		
		function playbase(event:MouseEvent):void
		{
		   trace("goto playbase");
		   stop();
		   gotoAndPlay("phd_base");
		}
		*/
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		var self = this;
		
		this.btn_IncreaseTransTwo.addEventListener('click', playtthr);
		function playtthr(evt) {
			var name = "phd_three";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_DecreaseTransTwo.addEventListener('click', playbo);
		function playbo(evt) {
			var name = "phd_one";
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
		
		this.btn_DecreaseTransThree.addEventListener('click', playbtw);
		function playbtw(evt) {
			var name = "phd_two";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		/* import flash.events.MouseEvent;
		
		btn_DecreaseTransThree.addEventListener(MouseEvent.CLICK, playtwo);
		
		//
		function playtwo(event:MouseEvent):void
		{
		   trace("goto playtwo");
		   stop();
		   gotoAndPlay("phd_two");
		}
		*/
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		var self = this;
		
		this.btn_back.addEventListener('click', playbk);
		function playbk(evt) {
			var name = "phd_base";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1).call(this.frame_12).wait(9).call(this.frame_21).wait(1).call(this.frame_22).wait(9).call(this.frame_31).wait(1).call(this.frame_32).wait(9).call(this.frame_41).wait(1).call(this.frame_42).wait(7).call(this.frame_49).wait(1));

	// Titles
	this.instance = new lib.txt_InternalWorkings("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.4,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// buttons
	this.btn_IncreaseTransBase = new lib.ButtonForward();
	this.btn_IncreaseTransBase.parent = this;
	this.btn_IncreaseTransBase.setTransform(241.3,246.9);
	new cjs.ButtonHelper(this.btn_IncreaseTransBase, 0, 1, 2, false, new lib.ButtonForward(), 3);

	this.btn_IncreaseTransOne = new lib.ButtonForward_one();
	this.btn_IncreaseTransOne.parent = this;
	this.btn_IncreaseTransOne.setTransform(241.3,246.9);
	new cjs.ButtonHelper(this.btn_IncreaseTransOne, 0, 1, 2, false, new lib.ButtonForward_one(), 3);

	this.btn_DecreaseTransOne = new lib.ButtonBack();
	this.btn_DecreaseTransOne.parent = this;
	this.btn_DecreaseTransOne.setTransform(467.8,246.9);
	new cjs.ButtonHelper(this.btn_DecreaseTransOne, 0, 1, 2, false, new lib.ButtonBack(), 3);

	this.btn_IncreaseTransTwo = new lib.ButtonForward_two();
	this.btn_IncreaseTransTwo.parent = this;
	this.btn_IncreaseTransTwo.setTransform(241.3,246.9);
	new cjs.ButtonHelper(this.btn_IncreaseTransTwo, 0, 1, 2, false, new lib.ButtonForward_two(), 3);

	this.btn_DecreaseTransTwo = new lib.ButtonBack_two();
	this.btn_DecreaseTransTwo.parent = this;
	this.btn_DecreaseTransTwo.setTransform(467.8,246.9);
	new cjs.ButtonHelper(this.btn_DecreaseTransTwo, 0, 1, 2, false, new lib.ButtonBack_two(), 3);

	this.btn_DecreaseTransThree = new lib.ButtonBack_three();
	this.btn_DecreaseTransThree.parent = this;
	this.btn_DecreaseTransThree.setTransform(467.9,246.9);
	new cjs.ButtonHelper(this.btn_DecreaseTransThree, 0, 1, 2, false, new lib.ButtonBack_three(), 3);

	this.btn_back = new lib.Back();
	this.btn_back.parent = this;
	this.btn_back.setTransform(547.4,225.3);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 2, false, new lib.Back(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_IncreaseTransBase}]}).to({state:[{t:this.btn_DecreaseTransOne},{t:this.btn_IncreaseTransOne}]},12).to({state:[{t:this.btn_DecreaseTransTwo},{t:this.btn_IncreaseTransTwo}]},10).to({state:[{t:this.btn_DecreaseTransThree}]},10).to({state:[{t:this.btn_back}]},10).wait(8));

	// buttonCloseup
	this.btn_ViewClose = new lib.ViewCloseup();
	this.btn_ViewClose.parent = this;
	this.btn_ViewClose.setTransform(467.5,31.1,0.95,0.95);
	new cjs.ButtonHelper(this.btn_ViewClose, 0, 1, 2, false, new lib.ViewCloseup(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewClose).to({_off:true},42).wait(8));

	// base
	this.instance_1 = new lib.mc_phd_base_PLCiw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(370.4,240,1,1,0,0,0,370,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(38));

	// background
	this.instance_2 = new lib.BACKGROUND("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},12).wait(38));

	// two
	this.instance_3 = new lib.mc_phd_one_PLCiw();
	this.instance_3.parent = this;
	this.instance_3.setTransform(370.4,240,1,1,0,0,0,370,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},22).wait(28));

	// background
	this.instance_4 = new lib.BACKGROUND("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},22).wait(28));

	// three
	this.instance_5 = new lib.mc_phd_two_PLCiw();
	this.instance_5.parent = this;
	this.instance_5.setTransform(370.4,240,1,1,0,0,0,370,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},32).wait(18));

	// background
	this.instance_6 = new lib.BACKGROUND("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},32).wait(18));

	// four
	this.instance_7 = new lib.mc_phdthree_PLCiw();
	this.instance_7.parent = this;
	this.instance_7.setTransform(370.4,240,1,1,0,0,0,370,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},42).wait(8));

	// background
	this.instance_8 = new lib.BACKGROUND("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},42).wait(8));

	// Closeup
	this.instance_9 = new lib.mc_PLCtop_PLCiw();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-2.9,-11.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({_off:false},0).wait(8));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#849EC2").s().p("Eg6lAX5MAAAgvyMB1LAAAMAAAAvyg");
	this.shape.setTransform(375,152);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(42).to({_off:false},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.1,124.6,751.3,333.8);
// library properties:
lib.properties = {
	width: 750,
	height: 305,
	fps: 30,
	color: "#40485B",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/PLC_InternalWorkings_atlas_.png", id:"PLC_InternalWorkings_atlas_"},
		{src:"images/PLC_InternalWorkings_atlas_2.png", id:"PLC_InternalWorkings_atlas_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;