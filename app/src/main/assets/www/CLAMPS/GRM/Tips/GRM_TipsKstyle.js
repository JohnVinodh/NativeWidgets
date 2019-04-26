(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GRM_TipsKstyle_atlas_", frames: [[0,3731,350,285],[0,4018,350,285],[2464,5453,350,285],[2464,3731,350,285],[0,3157,350,285],[2464,4018,350,285],[2464,4305,350,285],[2464,4592,350,285],[2464,4879,350,285],[352,1435,350,285],[2464,5166,350,285],[2464,2870,350,285],[2464,3157,350,285],[2464,3444,350,285],[2464,2583,350,285],[2464,1148,350,285],[2464,1435,350,285],[2464,1722,350,285],[2464,2009,350,285],[2464,2296,350,285],[2464,574,350,285],[2464,861,350,285],[2464,287,350,285],[2112,7749,350,285],[2464,0,350,285],[2112,7175,350,285],[2112,7462,350,285],[2112,6888,350,285],[2112,6314,350,285],[2112,6601,350,285],[2112,5740,350,285],[352,1722,350,285],[2112,6027,350,285],[2112,5166,350,285],[2112,5453,350,285],[0,3444,350,285],[2112,3157,350,285],[352,2009,350,285],[2112,3444,350,285],[2112,3731,350,285],[2112,4018,350,285],[2112,4305,350,285],[2112,4592,350,285],[2112,4879,350,285],[2112,2583,350,285],[2112,2870,350,285],[2112,1148,350,285],[352,2296,350,285],[352,2583,350,285],[352,2870,350,285],[352,3157,350,285],[352,3444,350,285],[0,2296,350,285],[0,4305,350,285],[0,4592,350,285],[2112,1435,350,285],[2112,1722,350,285],[2112,2009,350,285],[2112,2296,350,285],[2112,574,350,285],[0,4879,350,285],[2112,861,350,285],[1760,7749,350,285],[2112,0,350,285],[2112,287,350,285],[1760,7462,350,285],[0,2583,350,285],[0,5166,350,285],[1760,7175,350,285],[1760,6888,350,285],[1760,4592,350,285],[1760,4879,350,285],[1760,5166,350,285],[1760,5453,350,285],[1760,5740,350,285],[0,2870,350,285],[1760,6027,350,285],[1760,6314,350,285],[1760,6601,350,285],[1760,4305,350,285],[1760,3731,350,285],[1760,4018,350,285],[1760,3444,350,285],[1760,2583,350,285],[0,2009,350,285],[1760,2870,350,285],[0,5453,350,285],[1760,3157,350,285],[1760,2009,350,285],[352,3731,350,285],[352,4018,350,285],[352,4305,350,285],[0,5740,350,285],[0,6027,350,285],[0,6314,350,285],[0,6601,350,285],[0,6888,350,285],[1760,2296,350,285],[1760,1435,350,285],[1760,1722,350,285],[1760,1148,350,285],[1760,861,350,285],[1408,7175,350,285],[352,4592,350,285],[0,1435,350,285],[1408,7462,350,285],[1408,7749,350,285],[1760,0,350,285],[1760,287,350,285],[352,4879,350,285],[1760,574,350,285],[352,5166,350,285],[352,5453,350,285],[352,5740,350,285],[352,6027,350,285],[1408,6601,350,285],[0,1722,350,285],[0,1148,350,285],[352,6314,350,285],[1408,6888,350,285],[0,287,350,285],[0,574,350,285],[0,861,350,285],[0,7175,350,285],[352,6601,350,285],[352,6888,350,285],[0,0,350,285],[704,3731,350,285],[704,4018,350,285],[1408,5740,350,285],[704,4305,350,285],[704,4592,350,285],[704,4879,350,285],[704,5166,350,285],[1408,6027,350,285],[704,5453,350,285],[704,5740,350,285],[704,6027,350,285],[704,6314,350,285],[704,6601,350,285],[704,6888,350,285],[1408,6314,350,285],[704,7175,350,285],[704,7462,350,285],[704,7749,350,285],[1056,0,350,285],[1056,287,350,285],[1408,5166,350,285],[352,7175,350,285],[1408,5453,350,285],[1408,4879,350,285],[1408,4018,350,285],[1408,4305,350,285],[1408,4592,350,285],[352,7462,350,285],[1056,574,350,285],[1408,3731,350,285],[1408,2870,350,285],[1408,3157,350,285],[1408,3444,350,285],[1408,1722,350,285],[1408,2009,350,285],[1408,2296,350,285],[1408,2583,350,285],[1408,1148,350,285],[1408,1435,350,285],[0,7462,350,285],[1056,861,350,285],[0,7749,350,285],[352,0,350,285],[1408,861,350,285],[352,7749,350,285],[704,0,350,285],[704,287,350,285],[704,574,350,285],[704,861,350,285],[704,1148,350,285],[704,1435,350,285],[704,1722,350,285],[1056,1148,350,285],[1056,1435,350,285],[1056,1722,350,285],[1056,2009,350,285],[1408,287,350,285],[1056,2296,350,285],[1056,2583,350,285],[704,2009,350,285],[1408,574,350,285],[1056,7749,350,285],[1408,0,350,285],[1056,7462,350,285],[1056,6601,350,285],[1056,6888,350,285],[1056,7175,350,285],[704,2296,350,285],[704,2583,350,285],[704,2870,350,285],[704,3157,350,285],[1056,2870,350,285],[1056,3157,350,285],[352,287,350,285],[352,574,350,285],[1056,3444,350,285],[352,861,350,285],[1056,6027,350,285],[1056,6314,350,285],[1056,5740,350,285],[1056,5166,350,285],[1056,5453,350,285],[1056,4592,350,285],[1056,4879,350,285],[1056,4305,350,285],[704,3444,350,285],[1056,3731,350,285],[352,1148,350,285],[1056,4018,350,285],[2601,5740,135,135],[2464,7384,135,135],[2464,7521,135,135],[2464,7658,135,135],[2464,7795,135,135],[2464,6562,135,135],[2464,6699,135,135],[2464,6836,135,135],[2464,6973,135,135],[2464,5740,135,135],[2464,7932,135,135],[2464,7110,135,135],[2464,7247,135,135],[2464,5877,135,135],[2464,6014,135,135],[2464,6151,135,135],[2464,6288,135,135],[2464,6425,135,135]]}
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



(lib.K_jawA_DCB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCG0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCR0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DCS0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.K_JawA_DDG0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDR0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DDS0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_DUB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0002 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0004 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0006 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0008 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCB0010 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0002 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0004 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0006 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0008 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCG0010 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0002 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0006 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0008 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0002 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0004 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0006 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0008 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SCS0010 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDG0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDR0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SDS0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.K_jawA_SUB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0002 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDG0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0010 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDR0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DDS0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_DUB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDG0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDR0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SDS0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0003 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0005 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0007 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0009 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0011 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.K_jawB_SUB0013 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDBDDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDBDDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDGDDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDGDDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDRDDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDRDDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDSDDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDSDDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DUBDUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCBSDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(225);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCGSDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(226);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCRSDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(227);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCSSDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(228);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDBSDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(229);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDGSDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(230);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDRSDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(231);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDSSDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(232);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SUBSUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsKstyle_atlas_"];
	this.gotoAndStop(233);
}).prototype = p = new cjs.Sprite();



(lib.TopBar_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D1341").s().p("Eg6hACDIAAkFMB1DAAAIAAEFg");
	this.shape.setTransform(374.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.1,749.2,26.3);


(lib.txt_TipCombos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8898A6").s().p("AOaA0IgSgBQgHgCgFgDQgFgDgCgFQgCgFAAgIIAAgHIAfAAIAAAGIADADQADACAHAAIAnAAQAFAAAEgBIACgDIABgEIgBgGIgFgCIgOgBIgXgBIgcgBIgJgCQgEgBgCgCQgEgBgBgDIgCgEQgCgFAAgKIABgNQABgGADgEIAGgEIAHgDIAKgCIA4gBQAJAAAMACIAHADIAFAEQAEADABAGQABAFAAAHIAAADIgfAAQAAgGgCgCIgFgBIgIgBIgjAAQgFAAgDACQgDACAAAEIABAFQACACADABQAFABAaAAIAeABIAKABIAIADIAFAEIAEAFIACAHIABAKQgBAMgBAFIgEAFIgEAEIgHADIgJACIgZABgAJlA0QgMAAgHgCQgLgDgEgCIgFgFIgDgHIgCgIIgBgKIAAgdIABgKIACgIIADgHIAFgFQAEgCALgDQAHgCAMAAIAxAAQAMAAAHACIAHACQAEABADACIAFAFIAEAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgCADIgFAFIgHADIgHACQgHACgMAAgAJhgXQgDABgCADQgCACgCAEIgBAJIAAAKIABAJQABAEACACQACADADABIAJABIAoAAIAJgBQADgBACgDQACgCACgEIAAgJIAAgKIAAgJQgCgEgCgCIgFgEQgFgCgGAAIgkAAQgGAAgEACgAmoA0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIgBgKIAAgdIABgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAyAAQALAAAHACIAIACQAEABADACIAEAFIAFAHIACAIIABAKIAAAdIgBAKIgCAIQgCAEgDADIgEAFIgHADIgIACQgHACgLAAgAmsgXQgDABgCADQgCACgBAEIgBAJIAAAKIABAJQABAEABACQACADAEABIAJABIAnAAIAJgBQAEgBACgDQACgCABgEIAAgJIAAgKIAAgJQgBgEgCgCIgGgEQgEgCgGAAIglAAQgFAAgFACgAo8A0QgMAAgHgCQgKgDgFgCIgEgFIgEgHIgDgIIAAgKIAAgdIAAgKIADgIIAEgHIAEgFQAFgCAKgDQAHgCAMAAIAkAAQALAAAQACIAIADQAEABADADIADAFQADADAAADQABAHAAALIgfAAIAAgCQAAgGgDgCQgEgCgHAAIgiAAQgGAAgEACQgDABgCADQgCACgBAEIgCAJIAAAKIACAJQAAAEACACQACADADABIAJABIAqgBIAGgBQACgCABgDIABgHIAfAAIAAAJQAAAHgCAFQgBAGgEAEQgFAEgGADQgLACgJAAgAMvAzIg6hJIAAAAIAABJIggAAIAAhlIAxAAIA6BJIAAAAIAAhJIAgAAIAABlgAIEAzIAAhlIAfAAIAABlgAGqAzIAAhLIgsAAIAAgaIB3AAIAAAaIgsAAIAABLgAFZAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAFEALIgVglIgUAlIApAAgACoAzIg5hJIgBAAIAABJIgfAAIAAhlIAwAAIA6BJIABAAIAAhJIAfAAIAABlgAAZAzIAAhlIAgAAIAABlgAh8AzIAAhlIBaAAQAJAAAGACQAIABAEADQAFADACAFQABAGABAHQgBAGgBAFQAAAEgCACIgEAEIgHACIAAAAQAFAAAEACQAEACABADQACADABAEIABAKQAAAIgCAFQgCAGgEADQgEACgGACIgMABgAhdAaIA4AAQAGAAACgBQADgCAAgEQAAgFgDgCQgCgBgGAAIg4AAgAhdgJIA3AAQAEAAADgCQACgCAAgEQAAgFgCgBQgDgCgEAAIg3AAgAiwAzIAAhIIAAAAIgpBIIgWAAIgqhIIAAAAIAABIIgeAAIAAhlIAvAAIAkBBIAjhBIAvAAIAABlgAs2AzIAAhlIBVAAQAHAAALADIAGADIAFAEQAEAFACAGQACAGAAAIIAAAJQAAAGgCAEQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAsXAAIAwAAQAFAAADgCQADgDgBgFIAAgEQAAgFgCgDQgDgCgHAAIguAAgAtsAzIAAhlIAgAAIAABlgAvGAzIAAhLIgsAAIAAgaIB3AAIAAAaIgrAAIAABLg");
	this.shape.setTransform(24.4,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-7.9,202.1,10.4);


(lib.DISASSEMBLE_TIPS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALWApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAj8ApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAluApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgApXApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAJMAoIAAhPIBCAAQAGAAAIACIAFADIAEADQADADACAGIABAKIAAAHIgBAIQgBAFgDADQgDAEgEACQgGADgFAAIgwAAIAAAUgAJkAAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgDgCgFAAIgkAAgAIhAoIAAhPIAZAAIAABPgAHaAoIAAg7IgiAAIAAgUIBdAAIAAAUIgiAAIAAA7gAEgAoIAAhPIBXAAIAAATIg/AAIAAAMIA8AAIAAAQIg8AAIAAANIBBAAIAAATgADHAoIAAhPIAYAAIAAA6IA3AAIAAAVgABSAoIAAhPIBGAAIANABQAFABAEADQADACACAEQACAEAAAGIgBAIQgBADgCADIgDACIgFACIAAAAIAHABQADACABACIADAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgKABgABqAVIAsAAQAEAAACgCQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgEgCgCIgGgBIgsAAgABqgHIArAAQAEAAABgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgrAAgAApAoIAAg4IggA4IgRAAIggg4IAAA4IgYAAIAAhPIAmAAIAaAyIAcgyIAlAAIAABPgAinAoIAAhPIBXAAIAAATIg/AAIAAAMIA7AAIAAAQIg7AAIAAANIBAAAIAAATgAmvAoIgIgOIgxAAIgIAOIgbAAIArhPIAgAAIAsBPgAnAAIIgQgcIgPAcIAfAAgAqfAoIAAhPIAYAAIAABPgAsaAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAsCATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(82.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("ALWApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAj8ApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAluApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgApXApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAJMAoIAAhPIBCAAQAGAAAIACIAFADIAEADQADADACAGIABAKIAAAHIgBAIQgBAFgDADQgDAEgEACQgGADgFAAIgwAAIAAAUgAJkAAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgDgCgFAAIgkAAgAIhAoIAAhPIAZAAIAABPgAHaAoIAAg7IgiAAIAAgUIBdAAIAAAUIgiAAIAAA7gAEgAoIAAhPIBXAAIAAATIg/AAIAAAMIA8AAIAAAQIg8AAIAAANIBBAAIAAATgADHAoIAAhPIAYAAIAAA6IA3AAIAAAVgABSAoIAAhPIBGAAIANABQAFABAEADQADACACAEQACAEAAAGIgBAIQgBADgCADIgDACIgFACIAAAAIAHABQADACABACIADAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgKABgABqAVIAsAAQAEAAACgCQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgEgCgCIgGgBIgsAAgABqgHIArAAQAEAAABgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgrAAgAApAoIAAg4IggA4IgRAAIggg4IAAA4IgYAAIAAhPIAmAAIAaAyIAcgyIAlAAIAABPgAinAoIAAhPIBXAAIAAATIg/AAIAAAMIA7AAIAAAQIg7AAIAAANIBAAAIAAATgAmvAoIgIgOIgxAAIgIAOIgbAAIArhPIAgAAIAsBPgAnAAIIgQgcIgPAcIAfAAgAqfAoIAAhPIAYAAIAABPgAsaAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAsCATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(82.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#738CB4").ss(1,1,1).p("AtWiaIatAAIAAE1I6tAAg");
	this.shape_2.setTransform(82.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("AtWCbIAAk1IatAAIAAE1g");
	this.shape_3.setTransform(82.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#738CB4").ss(1,1,1).p("ANXCbI6tAAIAAk1IatAAg");
	this.shape_4.setTransform(82.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-16.5,173,33);


(lib.BACK_TIPCOMBOS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape.setTransform(43.4,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA7IkBgPIAAAlg");
	this.shape_1.setTransform(43.1,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape_2.setTransform(43.4,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("Am4DvIAAndINxAAIAAHdg");
	this.shape_3.setTransform(44.1,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.6,88.2,47.8);


(lib.BACK_TIPCOMBOS_GRMsil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSAAIgBgDIgCgDIgHgBIgUAAIgGABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgCAEIAAAGIAAAHIAAAGIACAEQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAGABIAUAAIAHgBIACgDIABgDIAAgCIgYAAIAAgMIAqAAIAAAXIgBAEIgDAEIgDACIgEABIgFABIgOAAgAjgAfIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAXAAIAQABIAFABIAEADIACADIACAEIABALIgTAAIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQgCgCgFAAIgVAAIgGABIgDADIgCAEIAAAFIAAAFIAAAGIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFABIAVAAIAFgBIADgBIACgCIABgFIASAAIAAAGIAAAHQgBAEgDACQgCADgFABIgLABgAC3AfIAAg9IBDAAIAAAOIgxAAIAAAKIAuAAIAAAMIguAAIAAAKIAyAAIAAAPgAA9AfIgjgsIgBAAIAAAsIgSAAIAAg9IAdAAIAjAsIAAgsIATAAIAAA9gAgPAfIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgcAHIgMgXIgMAXIAYAAgAhqAfIAAgYIgoAAIAAAYIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAE9g5IgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAeAAIAMAAIAEACIAEACIADADIACAEIACAFIAAAGIAAASIAAAGIgCAFIgCAEIgDADIgEACIgEACIgMAAgAE7hnIgEADIgBAEIgBAFIAAAGIABAGIABAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAFABIAYAAIAGgBIADgCIABgEIABgGIAAgGIgBgFIgBgEIgEgDIgGgBIgWAAIgGABgAAmg5IgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgSIABgGIABgFIACgEIADgDIAJgEIALAAIAXAAIAQABIAFABIAEADIACADIACAEIABALIgTAAIAAgCQAAgBAAAAQgBgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgFAAIgVAAIgGABIgDADIgCAEIAAAFIAAAGIAAAGIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFABIAVAAIAFgBIADgBIACgCIABgFIASAAIAAAGIAAAHQgBAEgDACQgCADgFABIgLABgAkFg5IgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAeAAIAMAAIAEACIAEACIADADIACAEIACAFIAAAGIAAASIAAAGIgCAFIgCAEIgDADIgEACIgEACIgMAAgAkHhnIgEADIgBAEIgBAFIAAAGIABAGIABAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAFABIAYAAIAGgBIADgCIABgEIABgGIAAgGIgBgFIgBgEIgEgDIgGgBIgWAAIgGABgAlDg5IgXAAIgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAcAAIANABIAEACIAEACQACACABAEIABAIIAAACIgTAAIgBgDIgBgDIgHgBIgVAAIgGABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCAEIgBAGIAAAIIABAGIACAEQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAGABIAUAAIAHgBIACgDIABgDIAAgCIgXAAIAAgNIAqAAIAAAYIgCAEIgCAEIgDACIgEABIgGABIgNAAgADyg5IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACYg5IgbgYIgJAAIAAAYIgSAAIAAg+IASAAIAAAXIAJAAIAYgXIAaAAIgiAeIAmAggAgJg5IgGgLIgmAAIgFALIgVAAIAhg+IAYAAIAhA+gAgWhRIgMgYIgMAYIAYAAgAieg5IAAg+IA2AAIAKABQAEABADACQADACABADQABADAAAEIAAAHIgCAEIgDACIgEABIAAABIAFABIAEADIACAEIAAAGIgBAJIgEAFIgGACIgHABgAiMhIIAiAAIAFgBQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBIgiAAgAiMheIAiAAIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgEgBIgiAAg");
	this.shape.setTransform(43.4,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA7IkBgPIAAAlg");
	this.shape_1.setTransform(43.1,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape_2.setTransform(43.4,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("Am4DvIAAndINxAAIAAHdg");
	this.shape_3.setTransform(44.1,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.6,88.2,47.8);


(lib.BACK_TIPCOMBOS_GRMred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape.setTransform(43.4,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA7IkBgPIAAAlg");
	this.shape_1.setTransform(43.1,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape_2.setTransform(43.4,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("Am4DvIAAndINxAAIAAHdg");
	this.shape_3.setTransform(44.1,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.6,88.2,47.8);


(lib.BACK_TIPCOMBOS_GRMgol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape.setTransform(43.4,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA7IkBgPIAAAlg");
	this.shape_1.setTransform(43.1,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSA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");
	this.shape_2.setTransform(43.4,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("Am4DvIAAndINxAAIAAHdg");
	this.shape_3.setTransform(44.1,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.6,88.2,47.8);


(lib.BACK_MATthickness_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEfCWIgLgBIgHgCQgDgCgCgDIgBgJIAAgEIATAAIAAAEIACACQABABAFAAIAXAAIAGgBIACgBIAAgDIAAgDIgEgCIgIgBIgOAAIgRAAIgGgCIgEgBIgCgDIgCgDIgBgJIABgIQAAgEADgCIADgDIAEgBIAGgCIAiAAIANABIAEACIADACQADACAAAEIABAHIAAACIgTAAQAAgEgBgBIgDgBIgFAAIgVAAIgFABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIADABQADABAPAAIASABIAHAAIAFACIADADIACADIABAFIABAGIgCAKIgBADIgDADIgEABIgGABIgPABgADMCWIgLgBIgHgCQgDgCgCgDIgBgJIAAgEIATAAIAAAEIACACQABABAFAAIAXAAIAGgBIACgBIAAgDIAAgDIgEgCIgIgBIgOAAIgRAAIgGgCIgEgBIgCgDIgCgDIgBgJIABgIQAAgEADgCIADgDIAEgBIAGgCIAiAAIANABIAEACIADACQADACAAAEIABAHIAAACIgTAAQAAgEgBgBIgDgBIgFAAIgVAAIgFABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIADABQADABAPAAIASABIAHAAIAFACIADADIACADIABAFIABAGIgCAKIgBADIgDADIgEABIgGABIgPABgAh+CWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAWAAIAQABIAFACIAEACIADADIABAEIABALIgTAAIAAgBQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgBgEAAIgVAAIgGABIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAFABIAUAAIAFAAIAEgBIACgDIAAgEIATAAIAAAFIgBAIQgBADgCADQgDACgEACIgMABgABqCVIAAg9IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAJIAyAAIAAAPgABGCVIgkgsIAAAAIAAAsIgTAAIAAg9IAdAAIAkAsIAAgsIATAAIAAA9gAgMCVIgcgXIgIAAIAAAXIgTAAIAAg9IATAAIAAAWIAJAAIAYgWIAYAAIggAeIAkAfgAi2CVIAAg9IATAAIAAA9gAjSCVIAAgXIgoAAIAAAXIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAk9CVIAAguIgbAAIAAgPIBIAAIAAAPIgaAAIAAAugADyBGIAAg9IASAAIAAAtIArAAIAAAQgADbBGIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAiA9gADOAuIgMgXIgMAXIAYAAgAB8BGIAAg9IATAAIAAA9gABgBGIAAgLIgBgDIgDgBIgDgBIgeAAIAAAQIgTAAIAAg9IA5AAQAFAAAEABQAEABACADIADAFIABAIIAAAEIgBAFIgBAFIgEADIgFACIAEABIADADIACAEIABAGIAAAKgAA7AnIAfAAQAEAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgDIgCgCIgHgBIgdAAgAgiBGIAAg9IBCAAIAAAOIgvAAIAAAKIAtAAIAAANIgtAAIAAAJIAxAAIAAAPgAhTBGIAAguIgaAAIAAgPIBIAAIAAAPIgbAAIAAAugAh/BGIgGgLIgmAAIgGALIgVAAIAhg9IAZAAIAiA9gAiMAuIgMgXIgMAXIAYAAgAjYBGIAAgsIgZAsIgOAAIgZgsIAAAAIAAAsIgSAAIAAg9IAdAAIAVAnIAVgnIAdAAIAAA9gACSgHIgXAAIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAdAAIANABIAEACIADACQACADABAEIABAIIAAACIgSAAIgBgEIgCgCIgHgBIgUAAIgGAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAIgCAEIAAAHIAAAHIAAAHIACAEQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAGAAIAUAAIAHgBIACgCIABgEIAAgBIgYAAIAAgNIAqAAIAAAXIgBAFIgDADIgDACIgEACIgFABIgOAAgAjggHIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAXAAIAQABIAFACIAEACIACADIACAEIABALIgTAAIAAgBQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgFAAIgVAAIgGABIgDACIgCAEIAAAFIAAAHIAAAGIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAFABIAVAAIAFAAIADgBIACgDIABgEIASAAIAAAFIAAAIQgBADgDADQgCACgFACIgLABgAC3gIIAAg9IBDAAIAAAOIgxAAIAAAKIAuAAIAAANIguAAIAAAJIAyAAIAAAPgAA9gIIgjgsIgBAAIAAAsIgSAAIAAg9IAdAAIAjAsIAAgsIATAAIAAA9gAgPgIIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgcggIgMgXIgMAXIAYAAgAhqgIIAAgXIgoAAIAAAXIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAE9hWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAeAAIAMABIAEABIAEACIADADIACAEIACAFIAAAGIAAATIAAAGIgCAFIgCAEIgDADIgEACIgEABIgMABgAE7iEIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAFABIAYAAIAGgBIADgCIABgDIABgGIAAgHIgBgFIgBgEIgEgCIgGgBIgWAAIgGABgAAmhWIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAXAAIAQABIAFACIAEACIACADIACAEIABALIgTAAIAAgBQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgFAAIgVAAIgGABIgDACIgCAEIAAAFIAAAHIAAAGIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAFABIAVAAIAFAAIADgBIACgDIABgEIASAAIAAAFIAAAIQgBADgDADQgCACgFACIgLABgAkFhWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAeAAIAMABIAEABIAEACIADADIACAEIACAFIAAAGIAAATIAAAGIgCAFIgCAEIgDADIgEACIgEABIgMABgAkHiEIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAFABIAYAAIAGgBIADgCIABgDIABgGIAAgHIgBgFIgBgEIgEgCIgGgBIgWAAIgGABgAlDhWIgXAAIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAcAAIANABIAEACIAEACQACADABAEIABAIIAAACIgTAAIgBgEIgBgCIgHgBIgVAAIgGAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAIgCAEIgBAHIAAAHIABAHIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAGAAIAUAAIAHgBIACgCIABgEIAAgBIgXAAIAAgNIAqAAIAAAXIgCAFIgCADIgDACIgEACIgGABIgNAAgADyhXIAAguIgaAAIAAgPIBIAAIAAAPIgbAAIAAAugACYhXIgbgXIgJAAIAAAXIgSAAIAAg9IASAAIAAAWIAJAAIAYgWIAaAAIgiAeIAmAfgAgJhXIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgWhvIgMgXIgMAXIAYAAgAiehXIAAg9IA2AAIAKABQAEAAADACQADACABADQABADAAAFIAAAGIgCAEIgDADIgEABIAAAAIAFACIAEACIACAFIAAAGIgBAIIgEAFIgGADIgHAAgAiMhmIAiAAIAFAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFgBIgiAAgAiMh8IAiAAIAEgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgBIgiAAg");
	this.shape.setTransform(47.5,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA6IkBgOIAAAlg");
	this.shape_1.setTransform(47.2,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D1341").s().p("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");
	this.shape_2.setTransform(46.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AEfCWIgLgBIgHgCQgDgCgCgDIgBgJIAAgEIATAAIAAAEIACACQABABAFAAIAXAAIAGgBIACgBIAAgDIAAgDIgEgCIgIgBIgOAAIgRAAIgGgCIgEgBIgCgDIgCgDIgBgJIABgIQAAgEADgCIADgDIAEgBIAGgCIAiAAIANABIAEACIADACQADACAAAEIABAHIAAACIgTAAQAAgEgBgBIgDgBIgFAAIgVAAIgFABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIADABQADABAPAAIASABIAHAAIAFACIADADIACADIABAFIABAGIgCAKIgBADIgDADIgEABIgGABIgPABgADMCWIgLgBIgHgCQgDgCgCgDIgBgJIAAgEIATAAIAAAEIACACQABABAFAAIAXAAIAGgBIACgBIAAgDIAAgDIgEgCIgIgBIgOAAIgRAAIgGgCIgEgBIgCgDIgCgDIgBgJIABgIQAAgEADgCIADgDIAEgBIAGgCIAiAAIANABIAEACIADACQADACAAAEIABAHIAAACIgTAAQAAgEgBgBIgDgBIgFAAIgVAAIgFABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIADABQADABAPAAIASABIAHAAIAFACIADADIACADIABAFIABAGIgCAKIgBADIgDADIgEABIgGABIgPABgAh+CWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAWAAIAQABIAFACIAEACIADADIABAEIABALIgTAAIAAgBQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgBgEAAIgVAAIgGABIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAFABIAUAAIAFAAIAEgBIACgDIAAgEIATAAIAAAFIgBAIQgBADgCADQgDACgEACIgMABgABqCVIAAg9IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAJIAyAAIAAAPgABGCVIgkgsIAAAAIAAAsIgTAAIAAg9IAdAAIAkAsIAAgsIATAAIAAA9gAgMCVIgcgXIgIAAIAAAXIgTAAIAAg9IATAAIAAAWIAJAAIAYgWIAYAAIggAeIAkAfgAi2CVIAAg9IATAAIAAA9gAjSCVIAAgXIgoAAIAAAXIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAk9CVIAAguIgbAAIAAgPIBIAAIAAAPIgaAAIAAAugADyBGIAAg9IASAAIAAAtIArAAIAAAQgADbBGIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAiA9gADOAuIgMgXIgMAXIAYAAgAB8BGIAAg9IATAAIAAA9gABgBGIAAgLIgBgDIgDgBIgDgBIgeAAIAAAQIgTAAIAAg9IA5AAQAFAAAEABQAEABACADIADAFIABAIIAAAEIgBAFIgBAFIgEADIgFACIAEABIADADIACAEIABAGIAAAKgAA7AnIAfAAQAEAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgDIgCgCIgHgBIgdAAgAgiBGIAAg9IBCAAIAAAOIgvAAIAAAKIAtAAIAAANIgtAAIAAAJIAxAAIAAAPgAhTBGIAAguIgaAAIAAgPIBIAAIAAAPIgbAAIAAAugAh/BGIgGgLIgmAAIgGALIgVAAIAhg9IAZAAIAiA9gAiMAuIgMgXIgMAXIAYAAgAjYBGIAAgsIgZAsIgOAAIgZgsIAAAAIAAAsIgSAAIAAg9IAdAAIAVAnIAVgnIAdAAIAAA9gACSgHIgXAAIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAdAAIANABIAEACIADACQACADABAEIABAIIAAACIgSAAIgBgEIgCgCIgHgBIgUAAIgGAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAIgCAEIAAAHIAAAHIAAAHIACAEQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAGAAIAUAAIAHgBIACgCIABgEIAAgBIgYAAIAAgNIAqAAIAAAXIgBAFIgDADIgDACIgEACIgFABIgOAAgAjggHIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAXAAIAQABIAFACIAEACIACADIACAEIABALIgTAAIAAgBQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgFAAIgVAAIgGABIgDACIgCAEIAAAFIAAAHIAAAGIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAFABIAVAAIAFAAIADgBIACgDIABgEIASAAIAAAFIAAAIQgBADgDADQgCACgFACIgLABgAC3gIIAAg9IBDAAIAAAOIgxAAIAAAKIAuAAIAAANIguAAIAAAJIAyAAIAAAPgAA9gIIgjgsIgBAAIAAAsIgSAAIAAg9IAdAAIAjAsIAAgsIATAAIAAA9gAgPgIIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgcggIgMgXIgMAXIAYAAgAhqgIIAAgXIgoAAIAAAXIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAE9hWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAeAAIAMABIAEABIAEACIADADIACAEIACAFIAAAGIAAATIAAAGIgCAFIgCAEIgDADIgEACIgEABIgMABgAE7iEIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAFABIAYAAIAGgBIADgCIABgDIABgGIAAgHIgBgFIgBgEIgEgCIgGgBIgWAAIgGABgAAmhWIgLgBIgJgDIgDgDIgCgEIgBgFIgBgGIAAgTIABgGIABgFIACgEIADgDIAJgDIALgBIAXAAIAQABIAFACIAEACIACADIACAEIABALIgTAAIAAgBQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgFAAIgVAAIgGABIgDACIgCAEIAAAFIAAAHIAAAGIACADQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAFABIAVAAIAFAAIADgBIACgDIABgEIASAAIAAAFIAAAIQgBADgDADQgCACgFACIgLABgAkFhWIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAeAAIAMABIAEABIAEACIADADIACAEIACAFIAAAGIAAATIAAAGIgCAFIgCAEIgDADIgEACIgEABIgMABgAkHiEIgEACIgBAEIgBAFIAAAHIABAGIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAFABIAYAAIAGgBIADgCIABgDIABgGIAAgHIgBgFIgBgEIgEgCIgGgBIgWAAIgGABgAlDhWIgXAAIgMgBIgIgDIgDgDIgCgEIgCgFIAAgGIAAgTIAAgGIACgFIACgEIADgDIAIgDIAMgBIAcAAIANABIAEACIAEACQACADABAEIABAIIAAACIgTAAIgBgEIgBgCIgHgBIgVAAIgGAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAIgCAEIgBAHIAAAHIABAHIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAGAAIAUAAIAHgBIACgCIABgEIAAgBIgXAAIAAgNIAqAAIAAAXIgCAFIgCADIgDACIgEACIgGABIgNAAgADyhXIAAguIgaAAIAAgPIBIAAIAAAPIgbAAIAAAugACYhXIgbgXIgJAAIAAAXIgSAAIAAg9IASAAIAAAWIAJAAIAYgWIAaAAIgiAeIAmAfgAgJhXIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgWhvIgMgXIgMAXIAYAAgAiehXIAAg9IA2AAIAKABQAEAAADACQADACABADQABADAAAFIAAAGIgCAEIgDADIgEABIAAAAIAFACIAEACIACAFIAAAGIgBAIIgEAFIgGADIgHAAgAiMhmIAiAAIAFAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFgBIgiAAgAiMh8IAiAAIAEgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgBIgiAAg");
	this.shape_3.setTransform(47.5,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D1341").s().p("AnUDwIAAnfIOpAAIAAHfg");
	this.shape_4.setTransform(46.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24,93.8,48.1);


(lib.BACK_JawStyles_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(47.5,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5AAIBvg1IADAjIEBgJIAAA6IkBgOIAAAlg");
	this.shape_1.setTransform(47.2,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D1341").s().p("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");
	this.shape_2.setTransform(46.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("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");
	this.shape_3.setTransform(47.5,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D1341").s().p("AnUDwIAAnfIOpAAIAAHfg");
	this.shape_4.setTransform(46.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24,93.8,48.1);


(lib.ASSY_TIPS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJOApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgAmEApIgOgBQgGgBgDgDQgEgCgCgEQgCgEABgHIAAgFIAYAAIABAFIACACQABACAHAAIAdAAIAIgBIACgCIAAgEIgBgEIgDgCIgLgBIgTAAIgVgBIgIgCIgFgCIgEgDIgBgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIACAKIAAACIgZAAQAAgFgBgBIgFgCIghAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAFABAUAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAn1ApIgPgBQgGgBgDgDQgEgCgCgEQgBgEgBgHIAAgFIAZAAIABAFIABACQADACAGAAIAdAAIAHgBIADgCIAAgEIgBgEIgDgCIgLgBIgSAAIgXgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAGgCIAIgBIArgBIARACIAGACIADADQAEADABAEIABAKIAAACIgZAAQAAgFgCgBIgDgCIgiAAQgEAAgDACQgCABAAADIABAEQAAABAAAAQABAAAAABQAAAAABAAQABAAAAAAQAFABAUAAIAYABIAIABIAFACIAFADIADAEIABAGIABAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAHEAoIAAhPIBCAAQAGAAAJACIAEADIAFADQACADACAGIABAKIAAAHIgBAIQgBAFgCADQgEAEgDACQgHADgEAAIgxAAIAAAUgAHcAAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgDgCgFAAIgkAAgAGaAoIAAhPIAYAAIAABPgAFTAoIAAg7IgjAAIAAgUIBeAAIAAAUIgjAAIAAA7gACYAoIAAhPIBYAAIAAATIhAAAIAAAMIA8AAIAAAQIg8AAIAAANIBBAAIAAATgAA/AoIAAhPIAYAAIAAA6IA3AAIAAAVgAg1AoIAAhPIBFAAIANABQAGABADADQADACACAEQACAEAAAGIgBAIQAAADgDADIgDACIgFACIAAAAIAHABQADACABACIADAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgAgdAVIArAAQAFAAACgCQAAAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQAAgEgCgCIgHgBIgrAAgAgdgHIArAAQADAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgEgDgBQgBgCgDAAIgrAAgAhdAoIAAg4IghA4IgSAAIggg4IAAA4IgYAAIAAhPIAmAAIAbAyIAcgyIAmAAIAABPgAkvAoIAAhPIBXAAIAAATIg/AAIAAAMIA8AAIAAAQIg8AAIAAANIBAAAIAAATgAo3AoIgIgOIgxAAIgIAOIgbAAIAshPIAfAAIAsBPgApIAIIgPgcIgQAcIAfAAg");
	this.shape.setTransform(81.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AJOApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgAmEApIgOgBQgGgBgDgDQgEgCgCgEQgCgEABgHIAAgFIAYAAIABAFIACACQABACAHAAIAdAAIAIgBIACgCIAAgEIgBgEIgDgCIgLgBIgTAAIgVgBIgIgCIgFgCIgEgDIgBgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIACAKIAAACIgZAAQAAgFgBgBIgFgCIghAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAFABAUAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAn1ApIgPgBQgGgBgDgDQgEgCgCgEQgBgEgBgHIAAgFIAZAAIABAFIABACQADACAGAAIAdAAIAHgBIADgCIAAgEIgBgEIgDgCIgLgBIgSAAIgXgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAGgCIAIgBIArgBIARACIAGACIADADQAEADABAEIABAKIAAACIgZAAQAAgFgCgBIgDgCIgiAAQgEAAgDACQgCABAAADIABAEQAAABAAAAQABAAAAABQAAAAABAAQABAAAAAAQAFABAUAAIAYABIAIABIAFACIAFADIADAEIABAGIABAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgAHEAoIAAhPIBCAAQAGAAAJACIAEADIAFADQACADACAGIABAKIAAAHIgBAIQgBAFgCADQgEAEgDACQgHADgEAAIgxAAIAAAUgAHcAAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgDgCgFAAIgkAAgAGaAoIAAhPIAYAAIAABPgAFTAoIAAg7IgjAAIAAgUIBeAAIAAAUIgjAAIAAA7gACYAoIAAhPIBYAAIAAATIhAAAIAAAMIA8AAIAAAQIg8AAIAAANIBBAAIAAATgAA/AoIAAhPIAYAAIAAA6IA3AAIAAAVgAg1AoIAAhPIBFAAIANABQAGABADADQADACACAEQACAEAAAGIgBAIQAAADgDADIgDACIgFACIAAAAIAHABQADACABACIADAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgAgdAVIArAAQAFAAACgCQAAAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQAAgEgCgCIgHgBIgrAAgAgdgHIArAAQADAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgEgDgBQgBgCgDAAIgrAAgAhdAoIAAg4IghA4IgSAAIggg4IAAA4IgYAAIAAhPIAmAAIAbAyIAcgyIAmAAIAABPgAkvAoIAAhPIBXAAIAAATIg/AAIAAAMIA8AAIAAAQIg8AAIAAANIBAAAIAAATgAo3AoIgIgOIgxAAIgIAOIgbAAIAshPIAfAAIAsBPgApIAIIgPgcIgQAcIAfAAg");
	this.shape_1.setTransform(81.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#738CB4").ss(1,1,1).p("AMviaIAAE1I5dAAIAAk1g");
	this.shape_2.setTransform(81.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D1341").s().p("AsuCbIAAk1IZdAAIAAE1g");
	this.shape_3.setTransform(81.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-16.5,165,33);


(lib._4015_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7BEFA").s().p("AETBSQgIgBgGgEQgFgEgDgHQgDgHAAgLIAAgQIAjAAIAAASQAAAEADACIAGABIAGgBQADgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAHAAIAMAAQAGACAEADQAEADADAGQACAHAAAKIAAAxQAAALgDAIQgEAHgGAEQgGADgJACIgRABQgMAAgIgCgAiLBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAh9g2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAgNBSIAAiHIgBAAIgYAlIgUgUIAjgtIAuAAIAACjgAjbBSIAAgjIAhAAIAAAjgAkbBSIAAgiIg4AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigAk2AUIAbAAIAAhRIAAAAgABzAlIAAgeIA7AAIAAAeg");
	this.shape.setTransform(37.7,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AETBSQgIgBgGgEQgFgEgDgHQgDgHAAgLIAAgQIAjAAIAAASQAAAEADACIAGABIAGgBQADgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAHAAIAMAAQAGACAEADQAEADADAGQACAHAAAKIAAAxQAAALgDAIQgEAHgGAEQgGADgJACIgRABQgMAAgIgCgAiLBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAh9g2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAgNBSIAAiHIgBAAIgYAlIgUgUIAjgtIAuAAIAACjgAjbBSIAAgjIAhAAIAAAjgAkbBSIAAgiIg4AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigAk2AUIAbAAIAAhRIAAAAgABzAlIAAgeIA7AAIAAAeg");
	this.shape_1.setTransform(37.7,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AozDDIAAmFIRnAAIAAGFg");
	this.shape_2.setTransform(43,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,-11.4,68.1,16.8);


(lib._3014_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7BEFA").s().p("AiPBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAiBg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAk+BSQgJgDgFgEQgEgEgCgGQgBgGAAgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQADgEAAgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQAAgJACgGQADgGAFgDQAGgEAIgCQAJgCAMAAQAOAAAIACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgHABIAAABQAIABAEACQAFACACAFQADAFAAAIIABASQAAANgCAIQgCAJgEAFQgGAGgJACQgJADgPAAQgPAAgIgCgAEoBSIAAgiIg5AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigAEMAUIAcAAIAAhRIgBAAgAgRBSIAAiHIgBAAIgYAlIgUgUIAjgtIAuAAIAACjgAjfBSIAAgjIAhAAIAAAjgABvAlIAAgeIA7AAIAAAeg");
	this.shape.setTransform(38.1,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AiPBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAiBg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAk+BSQgJgDgFgEQgEgEgCgGQgBgGAAgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQADgEAAgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQAAgJACgGQADgGAFgDQAGgEAIgCQAJgCAMAAQAOAAAIACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgHABIAAABQAIABAEACQAFACACAFQADAFAAAIIABASQAAANgCAIQgCAJgEAFQgGAGgJACQgJADgPAAQgPAAgIgCgAEoBSIAAgiIg5AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigAEMAUIAcAAIAAhRIgBAAgAgRBSIAAiHIgBAAIgYAlIgUgUIAjgtIAuAAIAACjgAjfBSIAAgjIAhAAIAAAjgABvAlIAAgeIA7AAIAAAeg");
	this.shape_1.setTransform(38.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AoeDFIAAmJIQ9AAIAAGJg");
	this.shape_2.setTransform(37.1,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,-11.4,68.1,16.8);


(lib._1513_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7BEFA").s().p("AENBSQgIgDgFgEQgEgEgCgGQgCgGABgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQACgEABgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQgBgJADgGQACgGAGgDQAFgEAJgCQAJgCAMAAQANAAAJACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgIABIAAABQAJABAEACQAFACACAFQACAFABAIIABASQAAANgCAIQgCAJgFAFQgFAGgJACQgKADgOAAQgPAAgJgCgAiIBSQgJgBgGgEQgFgEgDgHQgCgHgBgLIAAgQIAjAAIAAASQABAEACACIAGABIAHgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAIAAIALAAQAGACAEADQAEADADAGQADAHgBAKIAAAxQABALgEAIQgDAHgHAEQgFADgKACIgRABQgMAAgHgCgAgMBSIAAiHIAAAAIgZAlIgTgUIAigtIAuAAIAACjgAjaBSIAAgjIAiAAIAAAjgAknBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAB0AlIAAgeIA8AAIAAAeg");
	this.shape.setTransform(37.6,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AENBSQgIgDgFgEQgEgEgCgGQgCgGABgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQACgEABgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQgBgJADgGQACgGAGgDQAFgEAJgCQAJgCAMAAQANAAAJACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgIABIAAABQAJABAEACQAFACACAFQACAFABAIIABASQAAANgCAIQgCAJgFAFQgFAGgJACQgKADgOAAQgPAAgJgCgAiIBSQgJgBgGgEQgFgEgDgHQgCgHgBgLIAAgQIAjAAIAAASQABAEACACIAGABIAHgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAIAAIALAAQAGACAEADQAEADADAGQADAHgBAKIAAAxQABALgEAIQgDAHgHAEQgFADgKACIgRABQgMAAgHgCgAgMBSIAAiHIAAAAIgZAlIgTgUIAigtIAuAAIAACjgAjaBSIAAgjIAiAAIAAAjgAknBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAB0AlIAAgeIA8AAIAAAeg");
	this.shape_1.setTransform(37.6,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AoqDEIAAmHIRVAAIAAGHg");
	this.shape_2.setTransform(39.8,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,-11.4,68,16.8);


(lib.SUBSUB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApQgLgBgEgBIgGgCIgEgEIgEgEIgCgFIgCgNIAAgyIAYAAIAAAtIABAHIACAEQACACADAAIAGABIAXAAIAHgBQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIACgEIABgHIAAgtIAYAAIAAAyQAAAKgCADIgCAFIgEAEIgEAEIgGACQgJACgFAAgAiHApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgABBAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABZAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABZgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgEgCgBQgCgCgDAAIgsAAg");
	this.shape.setTransform(32.2,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSApQgLgBgEgBIgGgCIgEgEIgEgEIgCgFIgCgNIAAgyIAYAAIAAAtIABAHIACAEQACACADAAIAGABIAXAAIAHgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgHIAAgtIAYAAIAAAyQAAAKgCADIgCAFIgEAEIgEAEIgGACQgJACgFAAgAiHApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgABBAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABZAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABZgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgsAAg");
	this.shape_1.setTransform(47,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SUBSUB0000();
	this.instance.parent = this;
	this.instance.setTransform(-20,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-60.5,135,142.1);


(lib.SDSSDS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABjApIgOgBQgHgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgKgBIgTAAIgWgBIgIgCIgEgCIgEgDIgCgDIgBgMIABgKQAAgFADgDIAFgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIAAAIQAAAJgBAEIgDAEIgEADIgEACIgHACIgUABgAiJApIgOgBQgGgBgEgDQgDgCgCgEQgBgEAAgHIAAgFIAYAAIAAAFIADACQABACAHAAIAdAAIAIgBIACgCIAAgEIAAgEIgFgCIgKgBIgTAAIgVgBIgIgCIgFgCIgEgDIgBgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAIgBIAtgBIARACIAFACIAEADQACADABAEIABAKIAAACIgYAAQAAgFgBgBIgFgCIghAAQgEAAgCACQgDABAAADIAAAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgzAoIAAhPIBJAAIAPACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgPACgAgbATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgqAAg");
	this.shape.setTransform(34.1,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjApIgOgBQgHgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgKgBIgTAAIgWgBIgIgCIgEgCIgEgDIgCgDIgBgMIAAgKQABgFADgDIAFgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIAAAIQAAAJgBAEIgDAEIgEADIgEACIgHACIgUABgAiJApIgOgBQgGgBgEgDQgDgCgCgEQgBgEAAgHIAAgFIAYAAIAAAFIADACQABACAHAAIAdAAIAIgBIACgCIAAgEIAAgEIgFgCIgKgBIgTAAIgVgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIASACIAFACIAEADQACADABAEIABAKIAAACIgYAAQAAgFgBgBIgFgCIghAAQgEAAgCACQgDABAAADIAAAEQABABAAAAQABAAAAAAQABABAAAAQABAAABAAQAEABAUAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgzAoIAAhPIBJAAIAPACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgPACgAgbATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgHgBIgqAAg");
	this.shape_1.setTransform(59.8,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SDSSDS0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,142.1);


(lib.SDRSDR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgACPAoIgBgPIgBgEIgDgBIgFgBIgnAAIAAAVIgYAAIAAhPIBKAAQAHAAAEACQAFABADAEQACADABAEQACAEAAAGIAAAFIgBAHIgCAFIgEAEIgHACIAAABIAFABIAEADIADAFIABAIIAAAOgABeAAIApAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgCgDQgCgBgGAAIgnAAgAgzAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgaATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgqAAg");
	this.shape.setTransform(34,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiIApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgACPAoIgBgPIgBgEIgDgBIgFgBIgnAAIAAAVIgYAAIAAhPIBKAAQAHAAAEACQAFABADAEQACADABAEQACAEAAAGIAAAFIgBAHIgCAFIgEAEIgHACIAAABIAFABIAEADIADAFIABAIIAAAOgABeAAIApAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgCgDQgCgBgGAAIgnAAgAgzAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgaATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHgBIgqAAg");
	this.shape_1.setTransform(59.7,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SDRSDR0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,142.1);


(lib.SDGSDG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlApQgJAAgGgCQgIgCgCgCIgFgEIgCgFIgCgGIgBgIIAAgXIABgIIACgGIACgFIAFgEIAKgFIAPgBIAlAAQAHAAAKACIAFACIAEADQADADABAFIABALIAAACIgXAAIgCgEQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgDgCgGAAIgbAAIgHABQgDABgCACQgCABAAAEIgBAIIAAAJIABAIIACAFQACACADABIAHAAIAaAAIAJgBIADgDIACgEIAAgDIgfAAIAAgPIA3AAIgBAdIgCAGIgCAEIgFADIgFACIgHABIgRABgAiKApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgAg1AoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgdATIArAAIAHAAIAEgDQACgBAAgDIACgHIAAgKIgCgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(34.1,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABlApQgJAAgFgCQgJgCgCgCIgFgEIgDgFIgBgGIgBgIIAAgXIABgIIABgGIADgFIAFgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADABAFIABALIAAACIgXAAIgCgEQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgDgCgGAAIgbAAIgHABQgDABgCACQgCABAAAEIgBAIIAAAJIABAIIACAFQACACADABIAHAAIAaAAIAJgBIADgDIACgEIAAgDIgfAAIAAgPIA3AAIgBAdIgBAGIgDAEIgFADIgFACIgHABIgRABgAiKApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFADgDIADgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgAg1AoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgdATIArAAIAHAAIAEgDQACgBAAgDIACgHIAAgKIgCgHQAAgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape_1.setTransform(59.8,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SDGSDG0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,142.1);


(lib.SDBSDB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgABEAoIAAhPIBGAAIANABQAFABAEADQADACACAEQACAEAAAGIgBAIQgBADgBADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgJABgABcAVIAsAAQAEAAACgCQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgEgCgCIgGgBIgsAAgABcgHIArAAQAEAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgrAAgAg1AoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgdATIArAAIAHAAIAEgDQACgBAAgDIACgHIAAgKIgCgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(34.1,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKApIgPgBQgFgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFADgDIADgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgCABgBADIABAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIABAIQgBAJgCAEIgCAEIgDADIgGACIgHACIgUABgABEAoIAAhPIBGAAIANABQAFABAEADQADACACAEQACAEAAAGIgBAIQgBADgBADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgJABgABcAVIAsAAQAEAAACgCQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgEgCgCIgGgBIgsAAgABcgHIArAAQAEAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgEgCgBQgBgCgEAAIgrAAgAg1AoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgdATIArAAIAHAAIAEgDQACgBAAgDIACgHIAAgKIgCgHQAAgDgCgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape_1.setTransform(59.8,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SDBSDB0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,142.1);


(lib.SCSSDS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABjApIgOgBQgGgBgEgDQgEgCgCgEQgBgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgKgBIgTAAIgWgBIgIgCIgEgCIgEgDIgCgDIgBgMIAAgKQABgFAEgDIADgEIAGgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgZAAQABgFgCgBIgEgCIghAAQgEAAgDACQgDABABADIAAAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAEABAUAAIAYABIAIABIAGACIAFADIACAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgEACIgIACIgTABgAiJApIgOgBQgGgBgDgDQgEgCgCgEQgCgEABgHIAAgFIAYAAIABAFIACACQABACAHAAIAdAAIAIgBIACgCIAAgEIgBgEIgDgCIgLgBIgTAAIgVgBIgIgCIgFgCIgEgDIgCgDIAAgMIAAgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADACAEIABAKIAAACIgZAAQAAgFgBgBIgFgCIghAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgCAEIgEADIgFACIgHACIgUABgAgzAoIAAhPIBJAAIAPACIAFACIAFADIADADIACAFQADAFAAAIIAAAXQAAAIgDAFIgCAEIgDAEIgFADIgFACIgPACgAgbATIAqAAIAHAAIAFgDQABgBABgDIABgHIAAgKIgBgHQgBgDgBgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgqAAg");
	this.shape.setTransform(34.3,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABgApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgQApQgJAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIAAgIIAAgXIAAgIIACgGIADgFIAEgEIALgFIAPgBIAcAAIAUACIAHACIAFADIADAEIACAFQACAFAAAJIgZAAIAAgCQAAgEgDgCQgCgBgGAAIgaAAIgIABQgDABgBACIgDAFIAAAHIAAAHIAAAIIACAFIAFACIAHABIAgAAIAEgCIACgDIABgGIAZAAIAAAIQAAAFgCAEQgBAFgDADQgDADgGACQgJACgGAAgAiGApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABg");
	this.shape_1.setTransform(47.3,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SCSSDS0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,144.2);


(lib.SCRSDR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgACPAoIgBgPIgBgEIgDgBIgFgBIgnAAIAAAVIgYAAIAAhPIBKAAQAHAAAEACQAFABADAEQACADABAEQACAEAAAGIAAAFIgBAHIgCAFIgEAEIgHACIAAABIAFABIAEADIADAFIABAIIAAAOgABeAAIApAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgCgDQgCgBgGAAIgnAAgAgzAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgaATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAg");
	this.shape.setTransform(34.2,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQACAFAAAJIgZAAIAAgCQAAgEgDgCQgDgBgFAAIgaAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAFACIAHABIAfAAIAFgCIACgDIABgGIAZAAIAAAIQgBAFgBAEQgBAFgDADQgEADgFACQgJACgGAAgAiFApIgPgBQgGgBgDgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgHgCIgGgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAFgEIAFgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAEADIAEAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgGACIgGACIgVABgACMAoIgBgPIgBgEIgDgBIgFgBIgnAAIAAAVIgYAAIAAhPIBKAAQAHAAAFACQAEABADAEQACADABAEQACAEAAAGIAAAFIgBAHIgCAFIgEAEIgHACIAAABIAFABIAFADIACAFIABAIIAAAOgABbAAIApAAQAFAAACgCQACgCAAgEIAAgDIAAgEIgDgDQgCgBgGAAIgnAAg");
	this.shape_1.setTransform(47.2,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SCRSDR0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,144.2);


(lib.SCGSDG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlApQgIAAgHgCQgHgCgEgCIgDgEIgEgFIgBgGIgBgIIAAgXIABgIIABgGIAEgFIADgEIALgFIAPgBIAlAAQAHAAAKACIAFACIAEADQADADABAFIABALIAAACIgXAAIgBgEQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQgDgCgGAAIgbAAIgHABQgDABgCACQgCABAAAEIgBAIIAAAJIABAIIACAFQACACADABIAHAAIAaAAIAJgBIAEgDIABgEIAAgDIgfAAIAAgPIA3AAIgBAdIgCAGIgCAEIgFADIgFACIgHABIgSABgAiKApIgOgBQgHgBgDgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAFgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQgBgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAEADIAEAEIABAGIABAIQgBAJgBAEIgDAEIgEADIgFACIgGACIgVABgAg1AoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgdATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(34.3,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABiApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADACAFIABALIAAACIgYAAIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgHAAIgaAAIgIABQgDABgCACQgBABgBAEIgBAIIAAAJIABAIIACAFQACACADABIAIAAIAaAAIAJgBIADgDIABgEIAAgDIgfAAIAAgPIA3AAIAAAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgSApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQABAFAAAJIgYAAIAAgCQAAgEgDgCQgDgBgGAAIgZAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAEACIAHABIAgAAIAFgCIACgDIABgGIAYAAIAAAIQAAAFgBAEQgBAFgDADQgEADgFACQgJACgGAAgAiHApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABg");
	this.shape_1.setTransform(47.3,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SCGSDG0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,144.2);


(lib.SCBSDB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKApIgOgBQgHgBgDgDQgDgCgCgEQgCgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIABgKQABgFACgDIAFgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQgBgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAEADIAEAEIABAGIABAIQgBAJgBAEIgDAEIgEADIgFACIgGACIgVABgABEAoIAAhPIBGAAIANABQAFABAEADQADACACAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACABACIADAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgJABgABcAVIAsAAQAFAAABgCQABAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQAAgEgDgCIgGgBIgsAAgABcgHIAsAAQADAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgDAAIgsAAgAg1AoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgdATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(34.3,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQABAFAAAJIgYAAIAAgCQAAgEgDgCQgDgBgGAAIgZAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAEACIAHABIAgAAIAFgCIACgDIABgGIAYAAIAAAIQAAAFgBAEQgBAFgDADQgEADgFACQgJACgGAAgAiHApIgPgBQgGgBgDgDQgEgCgCgEQgBgEAAgHIAAgFIAYAAIABAFIACACQACACAGAAIAdAAIAIgBIACgCIABgEIgBgEIgEgCIgLgBIgSAAIgWgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAGgCIAIgBIAsgBIARACIAFACIAEADQADADABAEIABAKIAAACIgZAAQAAgFgBgBIgEgCIgiAAQgEAAgCACQgDABAAADIABAEQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAUAAIAYABIAIABIAGACIAEADIADAEIACAGIAAAIQAAAJgCAEIgCAEIgEADIgFACIgHACIgUABgABBAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABZAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABZgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgsAAg");
	this.shape_1.setTransform(47.3,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_SCBSDB0000();
	this.instance.parent = this;
	this.instance.setTransform(-19,-51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("Am1LGIAA2LINrAAIAAWLg");
	this.shape_2.setTransform(47.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-60.5,135,144.2);


(lib.DUBDUB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAoQgLAAgEgCIgGgCIgEgDIgDgEIgDgFIgCgNIAAgyIAZAAIAAAtIABAGIABAEQACACADABIAGABIAYAAIAGgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgEIABgGIAAgtIAYAAIAAAyQAAAJgCAEIgCAFIgEAEIgEADIgGACQgIACgGAAgABEAnIAAhOIBHAAIAMABQAGABADACQAEADACAEQABAEAAAFIAAAJQgBADgCACIgEADIgEACIAAAAIAHABQACABACADIACAFIABAIQAAAGgCAFQgBAEgDACQgEACgEABIgKABgABdAUIAsAAQAEAAACgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgDgCgCIgGgBIgsAAgABdgIIArAAQADAAACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgCgBgDAAIgrAAgAipAnIAAhOIBKAAIAPABIAFACIAFADIADAEIACAFQACAFAAAHIAAAYQAAAHgCAFIgCAFIgDAEIgFADIgFACIgPABgAiRATIArAAIAHgBIAEgCQACgCABgDIABgHIAAgJIgBgHQgBgDgCgCQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAIgHgBIgrAAg");
	this.shape.setTransform(44.1,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAoQgLAAgDgCIgGgCIgFgDIgEgEIgCgFIgBgNIAAgyIAXAAIAAAtIABAGIADAEQABACADABIAHABIAXAAIAGgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgEIABgGIAAgtIAZAAIAAAyQgBAJgBAEIgDAFIgDAEIgFADIgFACQgKACgFAAgABFAnIAAhOIBFAAIAOABQAFABAEACQADADABAEQADAEAAAFIgBAJQgBADgCACIgDADIgGACIAAAAIAHABQADABACADIADAFIAAAIQABAGgCAFQgCAEgEACQgCACgGABIgJABgABcAUIAsAAQAFAAACgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAgBQAAgDgCgCIgHgBIgsAAgABcgIIAsAAQADAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgCgCQgCgBgDAAIgsAAgAiqAnIAAhOIBKAAIAQABIAGACIAEADIAEAEIACAFQABAFAAAHIAAAYQAAAHgBAFIgCAFIgEAEIgEADIgGACIgQABgAiRATIAsAAIAGgBIAFgCQACgCAAgDIABgHIAAgJIgBgHQAAgDgCgCQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(72.1,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DUBDUB0000();
	this.instance.parent = this;
	this.instance.setTransform(-2,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-60.5,135,142.1);


(lib.DDSDDS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABmApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgwAoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgYATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgrAAgAirAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiSATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgrAAg");
	this.shape.setTransform(47.8,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABmApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgwAoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgYATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgrAAgAirAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiSATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape_1.setTransform(78.2,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDSDDS0001();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DDRDDR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACSAoIAAgPIgCgEIgDgBIgFgBIgnAAIAAAVIgXAAIAAhPIBJAAQAHAAAEACQAFABADAEQADADAAAEQACAEAAAGIAAAFIgBAHIgCAFIgEAEIgHACIAAABIAGABIADADIADAFIABAIIAAAOgABhAAIApAAQAFAAACgCQACgCAAgEIAAgDIAAgEIgCgDQgDgBgGAAIgnAAgAgwAoIAAhPIBJAAIAQACIAGACIAEADIAEADIACAFQABAFAAAIIAAAXQAAAIgBAFIgCAEIgEAEIgEADIgGACIgQACgAgXATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGgBIgrAAgAiqAoIAAhPIBKAAIAPACIAGACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgGACIgPACgAiSATIAsAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgsAAg");
	this.shape.setTransform(47.7,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACSAoIgBgPIgBgEIgDgBIgFgBIgmAAIAAAVIgZAAIAAhPIBKAAQAHAAAEACQAFABADAEQADADABAEQABAEAAAGIAAAFIAAAHIgDAFIgEAEIgHACIAAABIAGABIADADIAEAFIABAIIAAAOgABiAAIAoAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgBgDQgDgBgGAAIgmAAgAgwAoIAAhPIBKAAIAPACIAFACIAFADIAEADIABAFQACAFAAAIIAAAXQAAAIgCAFIgBAEIgEAEIgFADIgFACIgPACgAgXATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgqAAgAiqAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiRATIArAAIAGAAIAFgDQACgBABgDIAAgHIAAgKIAAgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgGgBIgrAAg");
	this.shape_1.setTransform(78.2,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDRDDR0001();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DDGDDG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADACAFIABALIAAACIgYAAIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgHAAIgaAAIgIABQgDABgCACQgBABgBAEIgBAIIAAAJIABAIIACAFQACACADABIAIAAIAaAAIAJgBIADgDIABgEIAAgDIgfAAIAAgPIA3AAIAAAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(78.2,-51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABoApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADACAFIABALIAAACIgYAAIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgHAAIgaAAIgIABQgDABgCACQgBABgBAEIgBAIIAAAJIABAIIACAFQACACADABIAIAAIAaAAIAJgBIADgDIABgEIAAgDIgfAAIAAgPIA3AAIAAAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(47.8,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDGDDG0001();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DDBDDB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABfAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABfgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgsAAgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(47.8,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABfAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABfgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgsAAgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(78.2,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDBDDB0001();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DCSDDS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABmApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgwAoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgYATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgrAAgAirAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiSATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(49.5,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABkApIgPgBQgGgBgEgDQgDgCgCgEQgBgEAAgHIAAgFIAYAAIAAAFIADACQACACAFAAIAeAAIAIgBIACgCIABgEIgBgEIgFgCIgKgBIgTAAIgVgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAJgBIAsgBIARACIAFACIAEADQACADABAEIABAKIAAACIgYAAQAAgFgCgBIgDgCIgiAAQgEAAgCACQgDABAAADIAAAEQABABAAAAQAAAAABABQABAAAAAAQABAAABAAQADABAVAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgNApQgJAAgFgCQgJgCgCgCIgFgEIgCgFIgCgGIgBgIIAAgXIABgIIACgGIACgFIAFgEIALgFIAOgBIAcAAIAVACIAHACIAEADIAEAEIACAFQABAFAAAJIgZAAIAAgCQAAgEgCgCQgDgBgGAAIgaAAIgIABQgDABgBACIgDAFIAAAHIAAAHIAAAIIADAFIAEACIAHABIAgAAIAEgCIACgDIABgGIAZAAIAAAIQAAAFgBAEQgBAFgEADQgDADgGACQgIACgGAAgAioAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiPATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgGgBIgrAAg");
	this.shape_1.setTransform(81,-51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDSDDS0000();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DCRDDR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACSAoIgBgPIgBgEIgDgBIgFgBIgmAAIAAAVIgZAAIAAhPIBKAAQAHAAAFACQAEABADAEQADADABAEQABAEAAAGIAAAFIAAAHIgDAFIgEAEIgHACIAAABIAFABIAEADIAEAFIABAIIAAAOgABiAAIAoAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgBgDQgDgBgGAAIgmAAgAgvAoIAAhPIBJAAIAPACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgPACgAgXATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgqAAgAiqAoIAAhPIBKAAIAQACIAFACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgFACIgQACgAiRATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgGgBIgrAAg");
	this.shape.setTransform(49.5,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApQgJAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIAAgIIAAgXIAAgIIACgGIADgFIAEgEIALgFIAPgBIAcAAIAUACIAHACIAFADIADAEIACAFQACAFAAAJIgZAAIAAgCQAAgEgDgCQgCgBgGAAIgaAAIgIABQgDABgBACIgDAFIAAAHIAAAHIAAAIIACAFIAFACIAHABIAgAAIAEgCIACgDIABgGIAZAAIAAAIQAAAFgCAEQgBAFgDADQgDADgGACQgJACgGAAgACPAoIAAgPIgCgEIgDgBIgFgBIgmAAIAAAVIgYAAIAAhPIBJAAQAHAAAFACQAEABADAEQADADABAEQABAEAAAGIAAAFIAAAHIgDAFIgEAEIgHACIAAABIAGABIAEADIADAFIABAIIAAAOgABfAAIAoAAQAFAAACgCQACgCAAgEIAAgDIAAgEIgCgDQgDgBgGAAIgmAAgAinAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiPATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(80.9,-51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDRDDR0000();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DCGDDG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADACAFIABALIAAACIgYAAIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgHAAIgaAAIgIABQgDABgCACQgBABgBAEIgBAIIAAAJIABAIIACAFQACACADABIAIAAIAaAAIAJgBIADgDIABgEIAAgDIgfAAIAAgPIA3AAIAAAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(49.5,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABlApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAGACIADADQADADACAFIABALIAAACIgYAAIgBgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgDgCgGAAIgbAAIgHABQgDABgDACQgBABgBAEIgBAIIAAAJIABAIIACAFQADACADABIAHAAIAaAAIAJgBIADgDIABgEIAAgDIgeAAIAAgPIA3AAIgBAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgPApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQABAFABAJIgZAAIAAgCQAAgEgDgCQgDgBgFAAIgaAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAFACIAHABIAfAAIAFgCIACgDIABgGIAZAAIAAAIQgBAFgBAEQgBAFgDADQgDADgGACQgJACgGAAgAipAoIAAhPIBJAAIAQACIAGACIAEADIADADIADAFQACAFAAAIIAAAXQAAAIgCAFIgDAEIgDAEIgEADIgGACIgQACgAiRATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(81,-51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDGDDG0000();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DCBDDB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUJ/IAAhQIBGAAIAOABQAEABAEADQADACABAEQACAEAAAGIgBAIQAAADgCADIgDACIgGACIAAABIAIABQADACABACIADAGIABAIQAAAGgCAEQgCAEgDADQgEACgFABIgIABgAg8JsIAtAAQAEAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgGgBIgtAAgAg8JPIAsAAQAEAAABgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgsAAgAjNJ/IAAhQIBJAAIAQACIAFACIAFADIADADIADAFQACAFAAAIIAAAYQAAAIgCAFIgDAEIgDAEIgFADIgFACIgQACgAi1JqIArAAIAHAAIAFgDQABgBABgDIABgHIAAgLIgBgHQgBgDgBgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgrAAgAlIJ/IAAhQIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAYQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAkwJqIAsAAIAHAAIAEgDQACgBAAgDIABgHIAAgLIgBgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgsAAgACPosQgIAAgHgCQgHgCgDgCIgFgEIgDgFIgBgGIgBgIIAAgYIABgIIABgGIADgFIAFgEIAKgFIAPgBIAdAAIAUACIAHACIAGADIADAEIABAFQACAFAAAJIgYAAIAAgCQgBgEgDgCQgCgBgGAAIgbAAIgIABQgCABgCACIgCAFIgBAHIAAAIIABAIIACAFIAEACIAHABIAhAAIAEgCIADgDIABgGIAYAAIAAAIQAAAFgCAEQgBAFgCADQgEADgFACQgJACgHAAgADjotIAAhQIBGAAIANABQAGABADADQADACACAEQACAEAAAGIgBAIQgBADgBADIgEACIgFACIAAABIAHABQADACACACIACAGIABAIQAAAGgCAEQgCAEgDADQgDACgFABIgJABgAD7pAIAsAAQAEAAACgCQABAAAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQgBgEgCgCIgGgBIgsAAgAD7pdIAsAAQADAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgDAAIgsAAgAgLotIAAhQIBJAAIAPACIAGACIAFADIADADIACAFQACAFAAAIIAAAYQAAAIgCAFIgCAEIgDAEIgFADIgGACIgPACgAAMpCIAsAAIAHAAIAEgDQACgBABgDIABgHIAAgLIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgsAAg");
	this.shape.setTransform(65.1,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDBDDB0000();
	this.instance.parent = this;
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_1.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib._0150_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7BEFA").s().p("AEOBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgAEcg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgACfBSQgJgBgFgEQgGgEgDgHQgCgHAAgLIAAgQIAjAAIAAASQAAAEACACIAHABIAGgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgFAAQgGAAgCACQgCABAAADIAAAHIgfAAIAAhYIBRAAIAAAcIgvAAIAAAfIAAAAQADgFAHgDQAFgCAIAAIALAAQAGACAEADQAFADACAGQADAHAAAKIAAAxQAAALgEAIQgDAHgHAEQgFADgJACIgSABQgMAAgHgCgAk4BSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAkqg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgABNBSIAAgjIAiAAIAAAjgAABBSIAAiHIgBAAIgXAlIgUgUIAjgtIAuAAIAACjgAiqAlIAAgeIA7AAIAAAeg");
	this.shape.setTransform(38.1,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AEOBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgAEcg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgACfBSQgJgBgFgEQgGgEgDgHQgCgHAAgLIAAgQIAjAAIAAASQAAAEACACIAHABIAGgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgFAAQgGAAgCACQgCABAAADIAAAHIgfAAIAAhYIBRAAIAAAcIgvAAIAAAfIAAAAQADgFAHgDQAFgCAIAAIALAAQAGACAEADQAFADACAGQADAHAAAKIAAAxQAAALgEAIQgDAHgHAEQgFADgJACIgSABQgMAAgHgCgAk4BSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgAkqg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgABNBSIAAgjIAiAAIAAAjgAABBSIAAiHIgBAAIgXAlIgUgUIAjgtIAuAAIAACjgAiqAlIAAgeIA7AAIAAAeg");
	this.shape_1.setTransform(38.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AoUDPIAAmdIQpAAIAAGdg");
	this.shape_2.setTransform(39.5,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,-11.4,67.8,16.8);


(lib.K_A_SUB_B_SUB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{assy:0,start:4,dis:35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SUB0013();
	this.instance.parent = this;
	this.instance.setTransform(-28,-140.2);

	this.instance_1 = new lib.K_jawA_SUB0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28,-140.2);

	this.instance_2 = new lib.K_jawA_SUB0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-28,-140.2);

	this.instance_3 = new lib.K_jawA_SUB0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28,-140.2);

	this.instance_4 = new lib.K_jawA_SUB0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-28,-140.2);

	this.instance_5 = new lib.K_jawA_SUB0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-28,-140.2);

	this.instance_6 = new lib.K_jawA_SUB0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,-140.2);

	this.instance_7 = new lib.K_jawA_SUB0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-28,-140.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_SUB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(403,-132.5);

	this.instance_9 = new lib.K_jawB_SUB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(403,-132.5);

	this.instance_10 = new lib.K_jawB_SUB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(403,-132.5);

	this.instance_11 = new lib.K_jawB_SUB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(403,-132.5);

	this.instance_12 = new lib.K_jawB_SUB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(403,-132.5);

	this.instance_13 = new lib.K_jawB_SUB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(403,-132.5);

	this.instance_14 = new lib.K_jawB_SUB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(403,-132.5);

	this.instance_15 = new lib.K_jawB_SUB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(403,-132.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SDS_B_SDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SDS0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-137.2);

	this.instance_1 = new lib.K_jawA_SDS0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-137.2);

	this.instance_2 = new lib.K_jawA_SDS0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-137.2);

	this.instance_3 = new lib.K_jawA_SDS0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-137.2);

	this.instance_4 = new lib.K_jawA_SDS0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-137.2);

	this.instance_5 = new lib.K_jawA_SDS0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-137.2);

	this.instance_6 = new lib.K_jawA_SDS0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-137.2);

	this.instance_7 = new lib.K_jawA_SDS0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-137.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_SDS0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(377,-133.5);

	this.instance_9 = new lib.K_jawB_SDS0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(377,-133.5);

	this.instance_10 = new lib.K_jawB_SDS0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(377,-133.5);

	this.instance_11 = new lib.K_jawB_SDS0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(377,-133.5);

	this.instance_12 = new lib.K_jawB_SDS0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377,-133.5);

	this.instance_13 = new lib.K_jawB_SDS0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(377,-133.5);

	this.instance_14 = new lib.K_jawB_SDS0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(377,-133.5);

	this.instance_15 = new lib.K_jawB_SDS0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(377,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SDR_B_SDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SDR0013();
	this.instance.parent = this;
	this.instance.setTransform(-11,-138.2);

	this.instance_1 = new lib.K_jawA_SDR0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-138.2);

	this.instance_2 = new lib.K_jawA_SDR0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-138.2);

	this.instance_3 = new lib.K_jawA_SDR0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11,-138.2);

	this.instance_4 = new lib.K_jawA_SDR0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11,-138.2);

	this.instance_5 = new lib.K_jawA_SDR0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11,-138.2);

	this.instance_6 = new lib.K_jawA_SDR0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11,-138.2);

	this.instance_7 = new lib.K_jawA_SDR0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_SDR0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375,-133.5);

	this.instance_9 = new lib.K_jawB_SDR0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,-133.5);

	this.instance_10 = new lib.K_jawB_SDR0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,-133.5);

	this.instance_11 = new lib.K_jawB_SDR0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,-133.5);

	this.instance_12 = new lib.K_jawB_SDR0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(375,-133.5);

	this.instance_13 = new lib.K_jawB_SDR0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,-133.5);

	this.instance_14 = new lib.K_jawB_SDR0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(375,-133.5);

	this.instance_15 = new lib.K_jawB_SDR0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(375,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SDG_B_SDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SDG0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-138.2);

	this.instance_1 = new lib.K_jawA_SDG0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-138.2);

	this.instance_2 = new lib.K_jawA_SDG0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-138.2);

	this.instance_3 = new lib.K_jawA_SDG0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-138.2);

	this.instance_4 = new lib.K_jawA_SDG0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-138.2);

	this.instance_5 = new lib.K_jawA_SDG0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-138.2);

	this.instance_6 = new lib.K_jawA_SDG0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-138.2);

	this.instance_7 = new lib.K_jawA_SDG0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_SDG0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(377,-132.5);

	this.instance_9 = new lib.K_jawB_SDG0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(377,-132.5);

	this.instance_10 = new lib.K_jawB_SDG0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(377,-132.5);

	this.instance_11 = new lib.K_jawB_SDG0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(377,-132.5);

	this.instance_12 = new lib.K_jawB_SDG0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377,-132.5);

	this.instance_13 = new lib.K_jawB_SDG0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(377,-132.5);

	this.instance_14 = new lib.K_jawB_SDG0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(377,-132.5);

	this.instance_15 = new lib.K_jawB_SDG0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(377,-132.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SDB_B_SDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SDB0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-139.2);

	this.instance_1 = new lib.K_jawA_SDB0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-139.2);

	this.instance_2 = new lib.K_jawA_SDB0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-139.2);

	this.instance_3 = new lib.K_jawA_SDB0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-139.2);

	this.instance_4 = new lib.K_jawA_SDB0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-139.2);

	this.instance_5 = new lib.K_jawA_SDB0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-139.2);

	this.instance_6 = new lib.K_jawA_SDB0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-139.2);

	this.instance_7 = new lib.K_jawA_SDB0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-139.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_SDB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(380,-131.5);

	this.instance_9 = new lib.K_jawB_SDB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(380,-131.5);

	this.instance_10 = new lib.K_jawB_SDB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(380,-131.5);

	this.instance_11 = new lib.K_jawB_SDB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(380,-131.5);

	this.instance_12 = new lib.K_jawB_SDB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(380,-131.5);

	this.instance_13 = new lib.K_jawB_SDB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(380,-131.5);

	this.instance_14 = new lib.K_jawB_SDB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(380,-131.5);

	this.instance_15 = new lib.K_jawB_SDB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(380,-131.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SCS_B_SDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SCS0010();
	this.instance.parent = this;
	this.instance.setTransform(-6,-135.5);

	this.instance_1 = new lib.K_jawA_SCS0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-135.5);

	this.instance_2 = new lib.K_jawA_SCS0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-135.5);

	this.instance_3 = new lib.K_jawA_SCS0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-135.5);

	this.instance_4 = new lib.K_jawA_SCS0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-135.5);

	this.instance_5 = new lib.K_jawA_SCS0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-135.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_6 = new lib.K_jawB_SDS0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(377,-133.5);

	this.instance_7 = new lib.K_jawB_SDS0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(377,-133.5);

	this.instance_8 = new lib.K_jawB_SDS0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(377,-133.5);

	this.instance_9 = new lib.K_jawB_SDS0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(377,-133.5);

	this.instance_10 = new lib.K_jawB_SDS0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(377,-133.5);

	this.instance_11 = new lib.K_jawB_SDS0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(377,-133.5);

	this.instance_12 = new lib.K_jawB_SDS0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377,-133.5);

	this.instance_13 = new lib.K_jawB_SDS0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(377,-133.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SCR_B_SDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SCR0009();
	this.instance.parent = this;
	this.instance.setTransform(-6,-136.5);

	this.instance_1 = new lib.K_jawA_SCR0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-136.5);

	this.instance_2 = new lib.K_jawA_SCR0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-136.5);

	this.instance_3 = new lib.K_jawA_SCR0005();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-136.5);

	this.instance_4 = new lib.K_jawA_SCR0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-136.5);

	this.instance_5 = new lib.K_jawA_SCR0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-136.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_6 = new lib.K_jawB_SDR0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375,-133.5);

	this.instance_7 = new lib.K_jawB_SDR0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,-133.5);

	this.instance_8 = new lib.K_jawB_SDR0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375,-133.5);

	this.instance_9 = new lib.K_jawB_SDR0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,-133.5);

	this.instance_10 = new lib.K_jawB_SDR0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,-133.5);

	this.instance_11 = new lib.K_jawB_SDR0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,-133.5);

	this.instance_12 = new lib.K_jawB_SDR0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(375,-133.5);

	this.instance_13 = new lib.K_jawB_SDR0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,-133.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SCG_B_SDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SCG0010();
	this.instance.parent = this;
	this.instance.setTransform(-11,-135.5);

	this.instance_1 = new lib.K_jawA_SCG0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-135.5);

	this.instance_2 = new lib.K_jawA_SCG0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-135.5);

	this.instance_3 = new lib.K_jawA_SCG0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11,-135.5);

	this.instance_4 = new lib.K_jawA_SCG0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11,-135.5);

	this.instance_5 = new lib.K_jawA_SCG0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11,-135.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_6 = new lib.K_jawB_SDG0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(377,-132.5);

	this.instance_7 = new lib.K_jawB_SDG0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(377,-132.5);

	this.instance_8 = new lib.K_jawB_SDG0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(377,-132.5);

	this.instance_9 = new lib.K_jawB_SDG0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(377,-132.5);

	this.instance_10 = new lib.K_jawB_SDG0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(377,-132.5);

	this.instance_11 = new lib.K_jawB_SDG0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(377,-132.5);

	this.instance_12 = new lib.K_jawB_SDG0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377,-132.5);

	this.instance_13 = new lib.K_jawB_SDG0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(377,-132.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_SCB_B_SDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_SCB0010();
	this.instance.parent = this;
	this.instance.setTransform(-6,-134.5);

	this.instance_1 = new lib.K_jawA_SCB0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-134.5);

	this.instance_2 = new lib.K_jawA_SCB0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-134.5);

	this.instance_3 = new lib.K_jawA_SCB0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-134.5);

	this.instance_4 = new lib.K_jawA_SCB0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-134.5);

	this.instance_5 = new lib.K_jawA_SCB0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-134.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_6 = new lib.K_jawB_SDB0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(380,-131.5);

	this.instance_7 = new lib.K_jawB_SDB0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(380,-131.5);

	this.instance_8 = new lib.K_jawB_SDB0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(380,-131.5);

	this.instance_9 = new lib.K_jawB_SDB0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(380,-131.5);

	this.instance_10 = new lib.K_jawB_SDB0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(380,-131.5);

	this.instance_11 = new lib.K_jawB_SDB0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(380,-131.5);

	this.instance_12 = new lib.K_jawB_SDB0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(380,-131.5);

	this.instance_13 = new lib.K_jawB_SDB0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(380,-131.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DUB_B_DUB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DUB0013();
	this.instance.parent = this;
	this.instance.setTransform(-28,-140.2);

	this.instance_1 = new lib.K_jawA_DUB0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28,-140.2);

	this.instance_2 = new lib.K_jawA_DUB0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-28,-140.2);

	this.instance_3 = new lib.K_jawA_DUB0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28,-140.2);

	this.instance_4 = new lib.K_jawA_DUB0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-28,-140.2);

	this.instance_5 = new lib.K_jawA_DUB0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-28,-140.2);

	this.instance_6 = new lib.K_jawA_DUB0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,-140.2);

	this.instance_7 = new lib.K_jawA_DUB0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-28,-140.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DUB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(403,-132.5);

	this.instance_9 = new lib.K_jawB_DUB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(403,-132.5);

	this.instance_10 = new lib.K_jawB_DUB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(403,-132.5);

	this.instance_11 = new lib.K_jawB_DUB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(403,-132.5);

	this.instance_12 = new lib.K_jawB_DUB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(403,-132.5);

	this.instance_13 = new lib.K_jawB_DUB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(403,-132.5);

	this.instance_14 = new lib.K_jawB_DUB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(403,-132.5);

	this.instance_15 = new lib.K_jawB_DUB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(403,-132.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DDS_B_DDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DDS0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-138.2);

	this.instance_1 = new lib.K_jawA_DDS0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-138.2);

	this.instance_2 = new lib.K_jawA_DDS0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-138.2);

	this.instance_3 = new lib.K_jawA_DDS0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-138.2);

	this.instance_4 = new lib.K_jawA_DDS0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-138.2);

	this.instance_5 = new lib.K_jawA_DDS0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-138.2);

	this.instance_6 = new lib.K_jawA_DDS0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-138.2);

	this.instance_7 = new lib.K_jawA_DDS0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDS0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-134.5);

	this.instance_9 = new lib.K_jawB_DDS0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-134.5);

	this.instance_10 = new lib.K_jawB_DDS0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-134.5);

	this.instance_11 = new lib.K_jawB_DDS0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-134.5);

	this.instance_12 = new lib.K_jawB_DDS0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-134.5);

	this.instance_13 = new lib.K_jawB_DDS0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-134.5);

	this.instance_14 = new lib.K_jawB_DDS0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-134.5);

	this.instance_15 = new lib.K_jawB_DDS0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-134.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DDR_B_DDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DDR0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-138.2);

	this.instance_1 = new lib.K_jawA_DDR0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-138.2);

	this.instance_2 = new lib.K_jawA_DDR0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-138.2);

	this.instance_3 = new lib.K_jawA_DDR0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-138.2);

	this.instance_4 = new lib.K_jawA_DDR0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-138.2);

	this.instance_5 = new lib.K_jawA_DDR0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-138.2);

	this.instance_6 = new lib.K_jawA_DDR0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-138.2);

	this.instance_7 = new lib.K_jawA_DDR0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDR0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(378,-133.5);

	this.instance_9 = new lib.K_jawB_DDR0010();
	this.instance_9.parent = this;
	this.instance_9.setTransform(378,-133.5);

	this.instance_10 = new lib.K_jawB_DDR0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(378,-133.5);

	this.instance_11 = new lib.K_jawB_DDR0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(378,-133.5);

	this.instance_12 = new lib.K_jawB_DDR0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(378,-133.5);

	this.instance_13 = new lib.K_jawB_DDR0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(378,-133.5);

	this.instance_14 = new lib.K_jawB_DDR0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(378,-133.5);

	this.instance_15 = new lib.K_jawB_DDR0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(378,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DDG_B_DDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_JawA_DDG0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-137.2);

	this.instance_1 = new lib.K_JawA_DDG0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-137.2);

	this.instance_2 = new lib.K_JawA_DDG0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-137.2);

	this.instance_3 = new lib.K_JawA_DDG0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-137.2);

	this.instance_4 = new lib.K_JawA_DDG0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-137.2);

	this.instance_5 = new lib.K_JawA_DDG0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-137.2);

	this.instance_6 = new lib.K_JawA_DDG0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-137.2);

	this.instance_7 = new lib.K_JawA_DDG0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-137.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDG0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-134.5);

	this.instance_9 = new lib.K_jawB_DDG0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-134.5);

	this.instance_10 = new lib.K_jawB_DDG0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-134.5);

	this.instance_11 = new lib.K_jawB_DDG0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-134.5);

	this.instance_12 = new lib.K_jawB_DDG0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-134.5);

	this.instance_13 = new lib.K_jawB_DDG0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-134.5);

	this.instance_14 = new lib.K_jawB_DDG0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-134.5);

	this.instance_15 = new lib.K_jawB_DDG0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-134.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DDB_B_DDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DDB0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-139.2);

	this.instance_1 = new lib.K_jawA_DDB0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-139.2);

	this.instance_2 = new lib.K_jawA_DDB0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-139.2);

	this.instance_3 = new lib.K_jawA_DDB0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-139.2);

	this.instance_4 = new lib.K_jawA_DDB0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-139.2);

	this.instance_5 = new lib.K_jawA_DDB0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-139.2);

	this.instance_6 = new lib.K_jawA_DDB0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-139.2);

	this.instance_7 = new lib.K_jawA_DDB0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-139.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-133.5);

	this.instance_9 = new lib.K_jawB_DDB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-133.5);

	this.instance_10 = new lib.K_jawB_DDB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-133.5);

	this.instance_11 = new lib.K_jawB_DDB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-133.5);

	this.instance_12 = new lib.K_jawB_DDB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-133.5);

	this.instance_13 = new lib.K_jawB_DDB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-133.5);

	this.instance_14 = new lib.K_jawB_DDB0002();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-133.5);

	this.instance_15 = new lib.K_jawB_DDB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DCS_B_DDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DCS0013();
	this.instance.parent = this;
	this.instance.setTransform(-8,-139.2);

	this.instance_1 = new lib.K_jawA_DCS0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-139.2);

	this.instance_2 = new lib.K_jawA_DCS0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,-139.2);

	this.instance_3 = new lib.K_jawA_DCS0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8,-139.2);

	this.instance_4 = new lib.K_jawA_DCS0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8,-139.2);

	this.instance_5 = new lib.K_jawA_DCS0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-8,-139.2);

	this.instance_6 = new lib.K_jawA_DCS0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8,-139.2);

	this.instance_7 = new lib.K_jawA_DCS0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-8,-139.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDS0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-134.5);

	this.instance_9 = new lib.K_jawB_DDS0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-134.5);

	this.instance_10 = new lib.K_jawB_DDS0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-134.5);

	this.instance_11 = new lib.K_jawB_DDS0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-134.5);

	this.instance_12 = new lib.K_jawB_DDS0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-134.5);

	this.instance_13 = new lib.K_jawB_DDS0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-134.5);

	this.instance_14 = new lib.K_jawB_DDS0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-134.5);

	this.instance_15 = new lib.K_jawB_DDS0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-134.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DCR_B_DDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DCR0013();
	this.instance.parent = this;
	this.instance.setTransform(-16,-138.2);

	this.instance_1 = new lib.K_jawA_DCR0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-138.2);

	this.instance_2 = new lib.K_jawA_DCR0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,-138.2);

	this.instance_3 = new lib.K_jawA_DCR0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-16,-138.2);

	this.instance_4 = new lib.K_jawA_DCR0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-16,-138.2);

	this.instance_5 = new lib.K_jawA_DCR0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16,-138.2);

	this.instance_6 = new lib.K_jawA_DCR0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16,-138.2);

	this.instance_7 = new lib.K_jawA_DCR0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-16,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDR0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(378,-133.5);

	this.instance_9 = new lib.K_jawB_DDR0010();
	this.instance_9.parent = this;
	this.instance_9.setTransform(378,-133.5);

	this.instance_10 = new lib.K_jawB_DDR0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(378,-133.5);

	this.instance_11 = new lib.K_jawB_DDR0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(378,-133.5);

	this.instance_12 = new lib.K_jawB_DDR0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(378,-133.5);

	this.instance_13 = new lib.K_jawB_DDR0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(378,-133.5);

	this.instance_14 = new lib.K_jawB_DDR0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(378,-133.5);

	this.instance_15 = new lib.K_jawB_DDR0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(378,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DCG_B_DDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DCG0013();
	this.instance.parent = this;
	this.instance.setTransform(-9,-137.2);

	this.instance_1 = new lib.K_jawA_DCG0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,-137.2);

	this.instance_2 = new lib.K_jawA_DCG0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9,-137.2);

	this.instance_3 = new lib.K_jawA_DCG0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9,-137.2);

	this.instance_4 = new lib.K_jawA_DCG0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9,-137.2);

	this.instance_5 = new lib.K_jawA_DCG0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9,-137.2);

	this.instance_6 = new lib.K_jawA_DCG0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9,-137.2);

	this.instance_7 = new lib.K_jawA_DCG0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9,-137.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDG0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-131.5);

	this.instance_9 = new lib.K_jawB_DDG0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-131.5);

	this.instance_10 = new lib.K_jawB_DDG0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-131.5);

	this.instance_11 = new lib.K_jawB_DDG0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-131.5);

	this.instance_12 = new lib.K_jawB_DDG0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-131.5);

	this.instance_13 = new lib.K_jawB_DDG0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-131.5);

	this.instance_14 = new lib.K_jawB_DDG0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-131.5);

	this.instance_15 = new lib.K_jawB_DDG0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-131.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.K_A_DCB_B_DDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":35});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(28).call(this.frame_31).wait(3).call(this.frame_34).wait(33).call(this.frame_67).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).wait(33));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.K_jawA_DCB0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-138.2);

	this.instance_1 = new lib.K_jawA_DCB0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-138.2);

	this.instance_2 = new lib.K_jawA_DCB0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-138.2);

	this.instance_3 = new lib.K_jawA_DCB0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-138.2);

	this.instance_4 = new lib.K_jawA_DCB0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-138.2);

	this.instance_5 = new lib.K_jawA_DCB0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-138.2);

	this.instance_6 = new lib.K_jawA_DCB0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-138.2);

	this.instance_7 = new lib.K_jawA_DCB0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-138.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.K_jawB_DDB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376,-133.5);

	this.instance_9 = new lib.K_jawB_DDB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(376,-133.5);

	this.instance_10 = new lib.K_jawB_DDB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(376,-133.5);

	this.instance_11 = new lib.K_jawB_DDB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376,-133.5);

	this.instance_12 = new lib.K_jawB_DDB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,-133.5);

	this.instance_13 = new lib.K_jawB_DDB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(376,-133.5);

	this.instance_14 = new lib.K_jawB_DDB0002();
	this.instance_14.parent = this;
	this.instance_14.setTransform(376,-133.5);

	this.instance_15 = new lib.K_jawB_DDB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(376,-133.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.But_S_SUSSUS_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABAAtQgLgBgEgBIgGgDIgGgDIgDgFIgDgFQgBgFgBgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAbAAIAAA2IgDAPIgDAFIgDAFIgFADIgHADQgJACgGAAgAlLAtQgJgBgIgBIgMgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIAoAAQAHAAALABIAGADIAFADQADADABAGIACALIAAADIgbAAIAAgFIgEgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIAAAhIgDAGIgDAFQgBABgEABIgFADIgIABIgTABgAqDAtIgPgBQgHgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIABADQACACAHAAIAhAAIAIgBIACgDIABgDIgBgFQgBgBgEgBIgLgBIgUAAIgYgBIgIgCIgFgDIgFgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgBgBgBQgBgEAAgJIABgKQABgGADgDIAFgEIAGgCIAIgCIAxAAQAHAAALABIAGADIADADQAEADABAFIABALIAAACIgaAAQAAgFgDgCIgEgCIgkAAQgFAAgDABQgCACAAAEIABAEQAAABAAAAQABAAAAABQABAAABAAQAAAAABABQAFABAVAAIAaAAIAJACIAHACQACABACADIAEADIABAHIAAAIQAAALgBADQgBADgCACIgEADIgGADIgHACIgWABgA12AtQgJgBgHgBQgHgBgDgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAUkAsIAAhWIBRAAQAGgBAKACIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgAU/AVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAT8AsIgIgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgATqAKIgRggIgRAgIAiAAgAQrAsIAAhWIBIAAQAHAAAIACIAGADIAFADQACAEACAFQACAFgBAHIAAAIIgBAIQgBAGgCADQgEAFgEACQgHADgFgBIg1AAIAAAXgARFAAIApAAQAFAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAN/AsIAAhWIBeAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANDAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAbAAIAABWgALPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAK9AKIgRggIgRAgIAiAAgAJHAsIAAgiIg4AAIAAAiIgaAAIAAhWIAaAAIAAAeIA4AAIAAgeIAbAAIAABWgAGoAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAEZAsIAAhWIBfAAIAAAUIhFAAIAAAOIBCAAIAAARIhCAAIAAANIBGAAIAAAWgADsAsIgBgQIgCgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgqAAIAAAXIgaAAIAAhWIBQAAQAIgBAFACQAFACADAEQADADABAFIABALIAAAFIgBAIIgCAFIgEAFIgIADIAFABIAGADQABADABADIABAIIAAAQgAC3AAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAiOAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjwAsIAAhWIAaAAIAAA/IA8AAIAAAXgAmqAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAomAsIAAhWIAbAAIAABWgAvPAsIAAhWIBMAAQAIAAAGABQAGABAEADQAEADACADQACAFAAAHIgBAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAu1AWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgCgBgFAAIgwAAgAu1gIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgwAAgAxQAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAZAAIAVA+IATg+IAaAAIgcBWgAzSAsIgJgQIg2AAIgIAQIgdAAIAvhWIAjAAIAvBWgAzkAKIgSggIgRAgIAjAAgAsTAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(-239.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCAsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEAAgJIAAg4IAaAAIAAAyIABAHIACAEQACACADACIAHAAIAaAAIAHAAIAFgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgAlJAsQgKABgHgCIgMgEIgEgFIgDgGIgDgGIAAgJIAAgZIAAgIIADgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAnAAQAIAAAKADIAHACIAEADQADADACAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgIAAIgdAAIgIABQgDAAgCACQgCACgBAEIgBAJIAAAKIABAJQABADACACQACACADABIAIABIAdAAQAGgBADgBIAEgDIABgFIAAgCIgiAAIAAgRIA9AAIgBAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqBAsIgQgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgHgBIgGgCIgEgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQgBgFgBgJIABgLQABgFAEgEIAEgCIAGgDIAJgCIAwgBQAHAAALADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIglgBQgEAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAQAEABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQAAAKgCAFQAAACgCACIgFAEIgFACIgHABIgXABgA13AsQgKABgGgCQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg5IAaAAIAABDIgDAHIgCAEIgEAEQgFADgHABIgQABgAUmArIAAhWIBRAAQAGABAKACIAGACIAGACIADAFIACAFQADAGAAAIIAAAaQAAAHgDAGIgCAGIgDADIgGAEIgGACIgQABgAVBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAT+ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAxBWgATrAJIgRgfIgRAfIAiAAgAQsArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGADgFAAIg1AAIAAAVgARHAAIApAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgnAAgAOAArIAAhWIBfAAIAAAVIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgANFArIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgALRArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgAK+AJIgRgfIgQAfIAhAAgAJJArIAAghIg5AAIAAAhIgaAAIAAhWIAaAAIAAAgIA5AAIAAggIAaAAIAABWgAGqArIAAhAIgmAAIAAgWIBmAAIAAAWIglAAIAABAgAEbArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgADuArIgBgQIgCgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgFgBIgpAAIAAAWIgbAAIAAhWIBRAAQAHABAFACQAFABADADQADAEACAFIABAKIAAAGIgBAIIgDAFIgEAEIgIADIAGACIAFAEQACACABADIABAIIAAAPgAC5AAIAsAAQAFAAADgCQACgCAAgFIAAgCIgBgGIgDgCQgCgCgHAAIgpAAgAiMArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjuArIAAhWIAaAAIAABAIA8AAIAAAWgAmpArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgAokArIAAhWIAaAAIAABWgAt1ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAuIAJIgRgfIgRAfIAiAAgAxRArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgcBWgAzTArIgJgPIg2AAIgIAPIgdAAIAuhWIAjAAIAwBWgAzmAJIgRgfIgRAfIAiAAgAsSAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(-240.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG0rEIAAWJItnAAIAA2Jg");
	this.shape_2.setTransform(67.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SUBSUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmzLHIAA2NINnAAIAAWNg");
	this.shape_3.setTransform(67.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SURSUR_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABAAtQgLgBgEgBIgGgDIgGgDIgDgFIgDgFQgBgFgBgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAbAAIAAA2IgDAPIgDAFIgDAFIgFADIgHADQgJACgGAAgAlLAtQgJgBgIgBIgMgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIAoAAQAHAAALABIAGADIAFADQADADABAGIACALIAAADIgbAAIAAgFIgEgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIAAAhIgDAGIgDAFQgBABgEABIgFADIgIABIgTABgAqDAtIgPgBQgHgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIABADQACACAHAAIAhAAIAIgBIACgDIABgDIgBgFQgBgBgEgBIgLgBIgUAAIgYgBIgIgCIgFgDIgFgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgBgBgBQgBgEAAgJIABgKQABgGADgDIAFgEIAGgCIAIgCIAxAAQAHAAALABIAGADIADADQAEADABAFIABALIAAACIgaAAQAAgFgDgCIgEgCIgkAAQgFAAgDABQgCACAAAEIABAEQAAABAAAAQABAAAAABQABAAABAAQAAAAABABQAFABAVAAIAaAAIAJACIAHACQACABACADIAEADIABAHIAAAIQAAALgBADQgBADgCACIgEADIgGADIgHACIgWABgA12AtQgJgBgHgBQgHgBgDgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAUkAsIAAhWIBRAAQAGgBAKACIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgAU/AVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAT8AsIgIgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgATqAKIgRggIgRAgIAiAAgAQrAsIAAhWIBIAAQAHAAAIACIAGADIAFADQACAEACAFQACAFgBAHIAAAIIgBAIQgBAGgCADQgEAFgEACQgHADgFgBIg1AAIAAAXgARFAAIApAAQAFAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAN/AsIAAhWIBeAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANDAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAbAAIAABWgALPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAK9AKIgRggIgRAgIAiAAgAJHAsIAAgiIg4AAIAAAiIgaAAIAAhWIAaAAIAAAeIA4AAIAAgeIAbAAIAABWgAGoAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAEZAsIAAhWIBfAAIAAAUIhFAAIAAAOIBCAAIAAARIhCAAIAAANIBGAAIAAAWgADsAsIgBgQIgCgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgqAAIAAAXIgaAAIAAhWIBQAAQAIgBAFACQAFACADAEQADADABAFIABALIAAAFIgBAIIgCAFIgEAFIgIADIAFABIAGADQABADABADIABAIIAAAQgAC3AAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAiOAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjwAsIAAhWIAaAAIAAA/IA8AAIAAAXgAmqAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAomAsIAAhWIAbAAIAABWgAvPAsIAAhWIBMAAQAIAAAGABQAGABAEADQAEADACADQACAFAAAHIgBAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAu1AWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgCgBgFAAIgwAAgAu1gIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgwAAgAxQAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAZAAIAVA+IATg+IAaAAIgcBWgAzSAsIgJgQIg2AAIgIAQIgdAAIAvhWIAjAAIAvBWgAzkAKIgSggIgRAgIAjAAgAsTAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(-239.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCAsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEAAgJIAAg4IAaAAIAAAyIABAHIACAEQACACADACIAHAAIAaAAIAHAAIAFgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgAlJAsQgKABgHgCIgMgEIgEgFIgDgGIgDgGIAAgJIAAgZIAAgIIADgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAnAAQAIAAAKADIAHACIAEADQADADACAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgIAAIgdAAIgIABQgDAAgCACQgCACgBAEIgBAJIAAAKIABAJQABADACACQACACADABIAIABIAdAAQAGgBADgBIAEgDIABgFIAAgCIgiAAIAAgRIA9AAIgBAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqBAsIgQgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgHgBIgGgCIgEgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQgBgFgBgJIABgLQABgFAEgEIAEgCIAGgDIAJgCIAwgBQAHAAALADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIglgBQgEAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAQAEABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQAAAKgCAFQAAACgCACIgFAEIgFACIgHABIgXABgA13AsQgKABgGgCQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg5IAaAAIAABDIgDAHIgCAEIgEAEQgFADgHABIgQABgAUmArIAAhWIBRAAQAGABAKACIAGACIAGACIADAFIACAFQADAGAAAIIAAAaQAAAHgDAGIgCAGIgDADIgGAEIgGACIgQABgAVBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAT+ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAxBWgATrAJIgRgfIgRAfIAiAAgAQsArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGADgFAAIg1AAIAAAVgARHAAIApAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgnAAgAOAArIAAhWIBfAAIAAAVIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgANFArIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgALRArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgAK+AJIgRgfIgQAfIAhAAgAJJArIAAghIg5AAIAAAhIgaAAIAAhWIAaAAIAAAgIA5AAIAAggIAaAAIAABWgAGqArIAAhAIgmAAIAAgWIBmAAIAAAWIglAAIAABAgAEbArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgADuArIgBgQIgCgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgFgBIgpAAIAAAWIgbAAIAAhWIBRAAQAHABAFACQAFABADADQADAEACAFIABAKIAAAGIgBAIIgDAFIgEAEIgIADIAGACIAFAEQACACABADIABAIIAAAPgAC5AAIAsAAQAFAAADgCQACgCAAgFIAAgCIgBgGIgDgCQgCgCgHAAIgpAAgAiMArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjuArIAAhWIAaAAIAABAIA8AAIAAAWgAmpArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgAokArIAAhWIAaAAIAABWgAt1ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAuIAJIgRgfIgRAfIAiAAgAxRArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgcBWgAzTArIgJgPIg2AAIgIAPIgdAAIAuhWIAjAAIAwBWgAzmAJIgRgfIgRAfIAiAAgAsSAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(-240.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG0rEIAAWJItnAAIAA2Jg");
	this.shape_2.setTransform(67.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SUBSUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmzLHIAA2NINnAAIAAWNg");
	this.shape_3.setTransform(67.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SUGSUG_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABAAtQgLgBgEgBIgGgDIgGgDIgDgFIgDgFQgBgFgBgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAbAAIAAA2IgDAPIgDAFIgDAFIgFADIgHADQgJACgGAAgAlLAtQgJgBgIgBIgMgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIAoAAQAHAAALABIAGADIAFADQADADABAGIACALIAAADIgbAAIAAgFIgEgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIAAAhIgDAGIgDAFQgBABgEABIgFADIgIABIgTABgAqDAtIgPgBQgHgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIABADQACACAHAAIAhAAIAIgBIACgDIABgDIgBgFQgBgBgEgBIgLgBIgUAAIgYgBIgIgCIgFgDIgFgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgBgBgBQgBgEAAgJIABgKQABgGADgDIAFgEIAGgCIAIgCIAxAAQAHAAALABIAGADIADADQAEADABAFIABALIAAACIgaAAQAAgFgDgCIgEgCIgkAAQgFAAgDABQgCACAAAEIABAEQAAABAAAAQABAAAAABQABAAABAAQAAAAABABQAFABAVAAIAaAAIAJACIAHACQACABACADIAEADIABAHIAAAIQAAALgBADQgBADgCACIgEADIgGADIgHACIgWABgA12AtQgJgBgHgBQgHgBgDgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAUkAsIAAhWIBRAAQAGgBAKACIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgAU/AVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAT8AsIgIgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgATqAKIgRggIgRAgIAiAAgAQrAsIAAhWIBIAAQAHAAAIACIAGADIAFADQACAEACAFQACAFgBAHIAAAIIgBAIQgBAGgCADQgEAFgEACQgHADgFgBIg1AAIAAAXgARFAAIApAAQAFAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAN/AsIAAhWIBeAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANDAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAbAAIAABWgALPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAK9AKIgRggIgRAgIAiAAgAJHAsIAAgiIg4AAIAAAiIgaAAIAAhWIAaAAIAAAeIA4AAIAAgeIAbAAIAABWgAGoAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAEZAsIAAhWIBfAAIAAAUIhFAAIAAAOIBCAAIAAARIhCAAIAAANIBGAAIAAAWgADsAsIgBgQIgCgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgqAAIAAAXIgaAAIAAhWIBQAAQAIgBAFACQAFACADAEQADADABAFIABALIAAAFIgBAIIgCAFIgEAFIgIADIAFABIAGADQABADABADIABAIIAAAQgAC3AAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAiOAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjwAsIAAhWIAaAAIAAA/IA8AAIAAAXgAmqAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAomAsIAAhWIAbAAIAABWgAvPAsIAAhWIBMAAQAIAAAGABQAGABAEADQAEADACADQACAFAAAHIgBAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAu1AWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgCgBgFAAIgwAAgAu1gIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgwAAgAxQAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAZAAIAVA+IATg+IAaAAIgcBWgAzSAsIgJgQIg2AAIgIAQIgdAAIAvhWIAjAAIAvBWgAzkAKIgSggIgRAgIAjAAgAsTAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(-239.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCAsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEAAgJIAAg4IAaAAIAAAyIABAHIACAEQACACADACIAHAAIAaAAIAHAAIAFgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgAlJAsQgKABgHgCIgMgEIgEgFIgDgGIgDgGIAAgJIAAgZIAAgIIADgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAnAAQAIAAAKADIAHACIAEADQADADACAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgIAAIgdAAIgIABQgDAAgCACQgCACgBAEIgBAJIAAAKIABAJQABADACACQACACADABIAIABIAdAAQAGgBADgBIAEgDIABgFIAAgCIgiAAIAAgRIA9AAIgBAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqBAsIgQgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgHgBIgGgCIgEgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQgBgFgBgJIABgLQABgFAEgEIAEgCIAGgDIAJgCIAwgBQAHAAALADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIglgBQgEAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAQAEABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQAAAKgCAFQAAACgCACIgFAEIgFACIgHABIgXABgA13AsQgKABgGgCQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg5IAaAAIAABDIgDAHIgCAEIgEAEQgFADgHABIgQABgAUmArIAAhWIBRAAQAGABAKACIAGACIAGACIADAFIACAFQADAGAAAIIAAAaQAAAHgDAGIgCAGIgDADIgGAEIgGACIgQABgAVBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAT+ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAxBWgATrAJIgRgfIgRAfIAiAAgAQsArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGADgFAAIg1AAIAAAVgARHAAIApAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgnAAgAOAArIAAhWIBfAAIAAAVIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgANFArIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgALRArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgAK+AJIgRgfIgQAfIAhAAgAJJArIAAghIg5AAIAAAhIgaAAIAAhWIAaAAIAAAgIA5AAIAAggIAaAAIAABWgAGqArIAAhAIgmAAIAAgWIBmAAIAAAWIglAAIAABAgAEbArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgADuArIgBgQIgCgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgFgBIgpAAIAAAWIgbAAIAAhWIBRAAQAHABAFACQAFABADADQADAEACAFIABAKIAAAGIgBAIIgDAFIgEAEIgIADIAGACIAFAEQACACABADIABAIIAAAPgAC5AAIAsAAQAFAAADgCQACgCAAgFIAAgCIgBgGIgDgCQgCgCgHAAIgpAAgAiMArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjuArIAAhWIAaAAIAABAIA8AAIAAAWgAmpArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgAokArIAAhWIAaAAIAABWgAt1ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAuIAJIgRgfIgRAfIAiAAgAxRArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgcBWgAzTArIgJgPIg2AAIgIAPIgdAAIAuhWIAjAAIAwBWgAzmAJIgRgfIgRAfIAiAAgAsSAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(-240.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG0rEIAAWJItnAAIAA2Jg");
	this.shape_2.setTransform(67.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SUBSUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmzLHIAA2NINnAAIAAWNg");
	this.shape_3.setTransform(67.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SUBSUB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABAAtQgLgBgEgBIgGgDIgGgDIgDgFIgDgFQgBgFgBgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAbAAIAAA2IgDAPIgDAFIgDAFIgFADIgHADQgJACgGAAgAlLAtQgJgBgIgBIgMgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIAoAAQAHAAALABIAGADIAFADQADADABAGIACALIAAADIgbAAIAAgFIgEgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIAAAhIgDAGIgDAFQgBABgEABIgFADIgIABIgTABgAqDAtIgPgBQgHgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIABADQACACAHAAIAhAAIAIgBIACgDIABgDIgBgFQgBgBgEgBIgLgBIgUAAIgYgBIgIgCIgFgDIgFgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgBgBgBQgBgEAAgJIABgKQABgGADgDIAFgEIAGgCIAIgCIAxAAQAHAAALABIAGADIADADQAEADABAFIABALIAAACIgaAAQAAgFgDgCIgEgCIgkAAQgFAAgDABQgCACAAAEIABAEQAAABAAAAQABAAAAABQABAAABAAQAAAAABABQAFABAVAAIAaAAIAJACIAHACQACABACADIAEADIABAHIAAAIQAAALgBADQgBADgCACIgEADIgGADIgHACIgWABgA12AtQgJgBgHgBQgHgBgDgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAUkAsIAAhWIBRAAQAGgBAKACIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgAU/AVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAT8AsIgIgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgATqAKIgRggIgRAgIAiAAgAQrAsIAAhWIBIAAQAHAAAIACIAGADIAFADQACAEACAFQACAFgBAHIAAAIIgBAIQgBAGgCADQgEAFgEACQgHADgFgBIg1AAIAAAXgARFAAIApAAQAFAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAN/AsIAAhWIBeAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANDAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAbAAIAABWgALPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAK9AKIgRggIgRAgIAiAAgAJHAsIAAgiIg4AAIAAAiIgaAAIAAhWIAaAAIAAAeIA4AAIAAgeIAbAAIAABWgAGoAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAEZAsIAAhWIBfAAIAAAUIhFAAIAAAOIBCAAIAAARIhCAAIAAANIBGAAIAAAWgADsAsIgBgQIgCgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgqAAIAAAXIgaAAIAAhWIBQAAQAIgBAFACQAFACADAEQADADABAFIABALIAAAFIgBAIIgCAFIgEAFIgIADIAFABIAGADQABADABADIABAIIAAAQgAC3AAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAiOAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjwAsIAAhWIAaAAIAAA/IA8AAIAAAXgAmqAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAomAsIAAhWIAbAAIAABWgAvPAsIAAhWIBMAAQAIAAAGABQAGABAEADQAEADACADQACAFAAAHIgBAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAu1AWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgCgBgFAAIgwAAgAu1gIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgwAAgAxQAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAZAAIAVA+IATg+IAaAAIgcBWgAzSAsIgJgQIg2AAIgIAQIgdAAIAvhWIAjAAIAvBWgAzkAKIgSggIgRAgIAjAAgAsTAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(-239.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCAsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEAAgJIAAg4IAaAAIAAAyIABAHIACAEQACACADACIAHAAIAaAAIAHAAIAFgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgAlJAsQgKABgHgCIgMgEIgEgFIgDgGIgDgGIAAgJIAAgZIAAgIIADgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAnAAQAIAAAKADIAHACIAEADQADADACAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgIAAIgdAAIgIABQgDAAgCACQgCACgBAEIgBAJIAAAKIABAJQABADACACQACACADABIAIABIAdAAQAGgBADgBIAEgDIABgFIAAgCIgiAAIAAgRIA9AAIgBAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqBAsIgQgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgHgBIgGgCIgEgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQgBgFgBgJIABgLQABgFAEgEIAEgCIAGgDIAJgCIAwgBQAHAAALADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIglgBQgEAAgDACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAQAEABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQAAAKgCAFQAAACgCACIgFAEIgFACIgHABIgXABgA13AsQgKABgGgCQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg5IAaAAIAABDIgDAHIgCAEIgEAEQgFADgHABIgQABgAUmArIAAhWIBRAAQAGABAKACIAGACIAGACIADAFIACAFQADAGAAAIIAAAaQAAAHgDAGIgCAGIgDADIgGAEIgGACIgQABgAVBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAT+ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAxBWgATrAJIgRgfIgRAfIAiAAgAQsArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGADgFAAIg1AAIAAAVgARHAAIApAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgnAAgAOAArIAAhWIBfAAIAAAVIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgANFArIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgALRArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgAK+AJIgRgfIgQAfIAhAAgAJJArIAAghIg5AAIAAAhIgaAAIAAhWIAaAAIAAAgIA5AAIAAggIAaAAIAABWgAGqArIAAhAIgmAAIAAgWIBmAAIAAAWIglAAIAABAgAEbArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgADuArIgBgQIgCgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgFgBIgpAAIAAAWIgbAAIAAhWIBRAAQAHABAFACQAFABADADQADAEACAFIABAKIAAAGIgBAIIgDAFIgEAEIgIADIAGACIAFAEQACACABADIABAIIAAAPgAC5AAIAsAAQAFAAADgCQACgCAAgFIAAgCIgBgGIgDgCQgCgCgHAAIgpAAgAiMArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjuArIAAhWIAaAAIAABAIA8AAIAAAWgAmpArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgAokArIAAhWIAaAAIAABWgAt1ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAuIAJIgRgfIgRAfIAiAAgAxRArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgcBWgAzTArIgJgPIg2AAIgIAPIgdAAIAuhWIAjAAIAwBWgAzmAJIgRgfIgRAfIAiAAgAsSAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(-240.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG0rEIAAWJItnAAIAA2Jg");
	this.shape_2.setTransform(67.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SUBSUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmzLHIAA2NINnAAIAAWNg");
	this.shape_3.setTransform(67.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SDSSDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAQ9gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAH7AtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAH4gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAlpAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAoAAQAHAAALABIAGADIAEADQAEADABAGIABALIAAADIgaAAIgBgFIgDgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAhIgCAGIgDAFQgCABgDABIgGADIgHABIgTABgAqhAtIgQgBQgGgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAFIACADQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgBgEgBIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgJIABgKQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKABIAGADIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDACAAAEIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJACIAGACQADABACADIADADIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHACIgWABgA2UAtQgKgBgGgBQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgAV3AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAUdAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgASiAsIAAhWIAbAAIAABWgAOlAsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgAO/AAIAqAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgALlAsIAAhWIBQAAQAHgBAKACIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAL/AVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAKpAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAGqAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAEPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAD9AKIgRggIgRAgIAiAAgACGAsIAAhWIAaAAIAABWgAAAAsIAAhWIBQAAQAHgBAKACIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAAaAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAisAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAkOAsIAAhWIAaAAIAAA/IA8AAIAAAXgAnJAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgApEAsIAAhWIAbAAIAABWgAvuAsIAAhWIBNAAQAIAAAGABQAGABAEADQAEADACADQABAFAAAHIAAAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAvTAWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAvTgIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAxuAsIgUg5IgVA5IgeAAIgchWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAzwAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgA0DAKIgRggIgRAgIAiAAgAsyAYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(244.4,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARBAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgGACQgHACgJAAgAQ+gUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgJABgAH8AtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgGACQgHACgJAAgAH5gUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgJABgAloAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIAoAAQAIAAAKABIAGADIAFADQADADACAGIABAMIAAACIgbAAIAAgFIgDgDQgDgBgHgBIgdAAIgIABQgEABgBACQgCACgBADIgBAJIAAAKIABAJQABAEACACQABACAEABIAIAAIAdAAQAGAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIAAAhIgCAGIgEAFQgBABgDABIgGACIgIACIgTABgAqgAtIgPgBQgHgCgEgCQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAFIACADQACACAGAAIAhAAIAIgBIACgDIABgDIgBgFQgBgCgDAAIgMgBIgUAAIgYgBIgIgCIgFgDIgEgDQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAgBQgCgEAAgIIABgLQABgGADgDIAFgEIAGgCIAIgCIAxAAQAHAAALABIAGADIAEADQADADABAFIABALIAAACIgaAAQAAgFgCgCIgEgCIglAAQgFAAgCABQgDACAAAEIABAEQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAFACAWAAIAZAAIAJACIAHACQADABACACIADAEIABAHIABAIQgBALgBADQgBADgCACIgEADIgFADIgIACIgWABgA2WAtQgJAAgHgCQgGgBgEgEQgEgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGADABQADADAGAAIAKAAQAIAAADgCIACgCIABgGIAAg3IAbAAIgBBCIgCAGIgCAGIgFADQgEADgHACIgQABgAV5AsIAAhBIgmAAIAAgVIBmAAIAAAVIgmAAIAABBgAUfAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgASkAsIAAhWIAaAAIAABWgAOmAsIAAhWIBJAAQAGgBAJADIAGACIAEAEQADAEACAGQABAFAAAGIAAAIIgBAIQgBAGgDADQgDAFgEACQgHADgFgBIg1AAIAAAXgAPBAAIApAAQAFAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgALmAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgAMBAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAKqAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAGsAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAERAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAD+AKIgRggIgRAgIAiAAgACHAsIAAhWIAbAAIAABWgAABAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgAAcAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAirAsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAkNAsIAAhWIAbAAIAAA/IA8AAIAAAXgAnHAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgApCAsIAAhWIAaAAIAABWgAuUAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAumAKIgRggIgRAgIAiAAgAxvAsIgVg5IgUA5IgfAAIgchWIAaAAIATA+IAWg+IAZAAIAWA+IASg+IAbAAIgdBWgAzyAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgA0EAKIgRggIgRAgIAiAAgAswAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(243.6,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG1rEIAAWJItoAAIAA2Jg");
	this.shape_2.setTransform(66.6,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SDSSDS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("Am2LEIAA2HINtAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SDRSDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAqAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAIIgCAIIgDAFIgFAFIgFACIgHACQgGACgKAAgAQ9gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAH7AtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAqAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAIIgCAIIgDAFIgFAFIgFACIgHACQgGACgKAAgAH4gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAlpAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgIIgBgIIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAoAAQAHAAALACIAGACIAEADQAEAEABAFIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAKIAAAJIAAAJQABAEACACQACACADABIAJAAIAcAAQAHABADgCIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAgIgCAGIgDAFQgCABgDABIgGACIgHACIgTABgAqhAtIgQgCQgGgBgEgCQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAGIACACQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDABQgDADAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAEIACAHIAAAIQAAALgCADQAAADgCACIgEAEIgGACIgHABIgWACgA2UAtQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHABIgQACgAV3ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAUdArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgASiArIAAhVIAbAAIAABVgAOlArIAAhVIBIAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgFACQgHACgFAAIg1AAIAAAWgAO/AAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgoAAgALlArIAAhVIBQAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFADIgGACIgRABgAL/AVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgBQgCgDgDAAIgHgBIgwAAgAKpArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgAGqArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIApAAIAeA2IAeg2IApAAIAABVgAEPArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAD9AKIgRggIgRAgIAiAAgACGArIAAhVIAaAAIAABVgAAAArIAAhVIBQAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFADIgGACIgRABgAAaAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgBQgCgDgDAAIgHgBIgwAAgAisArIAAhVIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAVgAkOArIAAhVIAaAAIAAA/IA8AAIAAAWgAnJArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgApEArIAAhVIAbAAIAABVgAvuArIAAhVIBNAAQAIgBAGACQAGABAEACQAEAEACADQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAEgEADQgDADgFAAIgLABgAvTAWIAwAAIAHgBQACgBAAgEQAAgEgCgBQgDgCgEAAIgwAAgAvTgIIAvAAQAEAAACgCQACgBAAgDQAAgEgCgCQgCgBgEgBIgvAAgAxuArIgUg4IgVA4IgeAAIgchVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBVgAzwArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgA0DAKIgRggIgRAgIAiAAgAsyAYIAAgVIAiAAIAAAVg");
	this.shape.setTransform(234.9,89.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARBAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAQ+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAH8AsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAH5gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAloAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAoAAQAIAAAKADIAGACIAFADQADADACAGIABALIAAAEIgbAAIAAgGIgDgDQgDgBgHAAIgdAAIgIABQgEAAgBACQgCACgBAEIgBAJIAAAKIABAJQABADACACQABACAEABIAIABIAdAAQAGgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIAAAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqgAsIgPgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgIgBIgFgCIgEgEQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAgBAAAAQgCgFAAgJIABgLQABgFADgEIAFgCIAGgDIAIgCIAxgBQAHAAALADIAGACIAEADQADADABAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIglgBQgFAAgCACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQgBAKgBAFQgBACgCACIgEAEIgFACIgIABIgWABgA2WAsQgJABgHgCQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEADADQADACAGAAIAKAAQAIAAADgBIACgEIABgEIAAg5IAbAAIgBBDIgCAHIgCAEIgFAEQgEADgHABIgQABgAV5ArIAAhAIgmAAIAAgWIBmAAIAAAWIgmAAIAABAgAUfArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgASkArIAAhWIAaAAIAABWgAOmArIAAhWIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgEACQgHADgFAAIg1AAIAAAVgAPBAAIApAAQAFAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgnAAgALmArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAMBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAKqArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAGsArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAERArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAD+AJIgRgfIgRAfIAiAAgACHArIAAhWIAbAAIAABWgAABArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAAcAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAirArIAAhWIBfAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAkNArIAAhWIAbAAIAABAIA8AAIAAAWgAnHArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgApCArIAAhWIAaAAIAABWgAuUArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgAumAJIgRgfIgRAfIAiAAgAxvArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgdBWgAzyArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgA0EAJIgRgfIgRAfIAiAAgAswAYIAAgVIAhAAIAAAVg");
	this.shape_1.setTransform(234.1,-90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG1rEIAAWJItoAAIAA2Jg");
	this.shape_2.setTransform(66.6,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SDRSDR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("Am2LEIAA2HINtAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SDGSDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAqAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGACgKAAgAQ9gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAH7AtQgKAAgHgCIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAqAAQAKAAAGABIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGACgKAAgAH4gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAlpAtQgKAAgHgCIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgCAIgDQAHgBAKAAIAoAAQAHAAALACIAGACIAEADQAEAEABAFIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHAAIgdAAIgJAAQgDABgCACQgCACgBAEIAAAIIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHABADgCIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAgIgCAGIgDAFQgCABgDABIgGACIgHACIgTABgAqhAtIgQgCQgGgBgEgCQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAGIACACQACACAHAAIAgAAIAIgBIADgCIABgEIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAEIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHABIgWACgA2UAtQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgBIADgDIABgGIAAg3IAaAAIAABCIgCAHIgDAFIgEADQgFADgHABIgQACgAV3ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAUdArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgASiArIAAhVIAbAAIAABVgAOlArIAAhVIBIAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgFACQgHACgFABIg1AAIAAAVgAO/AAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgoAAgALlArIAAhVIBQAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRABgAL/AVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgBQgCgDgDAAIgHgBIgwAAgAKpArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgAGqArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIApAAIAeA2IAeg2IApAAIAABVgAEPArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAD9AKIgRggIgRAgIAiAAgACGArIAAhVIAaAAIAABVgAAAArIAAhVIBQAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRABgAAaAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgBQgCgDgDAAIgHgBIgwAAgAisArIAAhVIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAVgAkOArIAAhVIAaAAIAAA/IA8AAIAAAWgAnJArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgApEArIAAhVIAbAAIAABVgAvuArIAAhVIBNAAQAIgBAGACQAGABAEACQAEAEACADQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAEgEADQgDADgFAAIgLABgAvTAWIAwAAIAHAAQACgCAAgEQAAgEgCgBQgDgCgEAAIgwAAgAvTgIIAvAAQAEAAACgCQACgBAAgDQAAgEgCgCQgCgBgEgBIgvAAgAxuArIgUg4IgVA4IgeAAIgchVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBVgAzwArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgA0DAKIgRggIgRAgIAiAAgAsyAYIAAgVIAiAAIAAAVg");
	this.shape.setTransform(241,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARBAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAQ+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAH8AsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAH5gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAloAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAoAAQAIAAAKADIAGACIAFADQADADACAGIABALIAAAEIgbAAIAAgGIgDgDQgDgBgHAAIgdAAIgIABQgEAAgBACQgCACgBAEIgBAJIAAAKIABAJQABADACACQABACAEABIAIABIAdAAQAGgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIAAAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqgAsIgPgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgIgBIgFgCIgEgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAAAQgCgFAAgJIABgLQABgFADgEIAFgCIAGgDIAIgCIAxgBQAHAAALADIAGACIAEADQADADABAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIglgBQgFAAgCACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQgBAKgBAFQgBACgCACIgEAEIgFACIgIABIgWABgA2WAsQgJABgHgCQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEADADQADACAGAAIAKAAQAIAAADgBIACgEIABgEIAAg5IAbAAIgBBDIgCAHIgCAEIgFAEQgEADgHABIgQABgAV5ArIAAhAIgmAAIAAgWIBmAAIAAAWIgmAAIAABAgAUfArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgASkArIAAhWIAaAAIAABWgAOmArIAAhWIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgEACQgHADgFAAIg1AAIAAAVgAPBAAIApAAQAFAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgnAAgALmArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAMBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAKqArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAGsArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAERArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAD+AJIgRgfIgRAfIAiAAgACHArIAAhWIAbAAIAABWgAABArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAAcAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAirArIAAhWIBfAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAkNArIAAhWIAbAAIAABAIA8AAIAAAWgAnHArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgApCArIAAhWIAaAAIAABWgAuUArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgAumAJIgRgfIgRAfIAiAAgAxvArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgdBWgAzyArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgA0EAJIgRgfIgRAfIAiAAgAswAYIAAgVIAhAAIAAAVg");
	this.shape_1.setTransform(240.2,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG1rEIAAWJItoAAIAA2Jg");
	this.shape_2.setTransform(66.6,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SDGSDG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("Am2LEIAA2HINtAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SDBSDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAQ9gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAH7AtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAH4gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAlpAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAoAAQAHAAALABIAGADIAEADQAEADABAGIABALIAAADIgaAAIgBgFIgDgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAhIgCAGIgDAFQgCABgDABIgGADIgHABIgTABgAqhAtIgQgBQgGgBgEgDQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAFIACADQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgBgEgBIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgJIABgKQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKABIAGADIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDACAAAEIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJACIAGACQADABACADIADADIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHACIgWABgA2UAtQgKgBgGgBQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgAV3AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAUdAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgASiAsIAAhWIAbAAIAABWgAOlAsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgAO/AAIAqAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgALlAsIAAhWIBQAAQAHgBAKACIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAL/AVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAKpAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAGqAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAEPAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAD9AKIgRggIgRAgIAiAAgACGAsIAAhWIAaAAIAABWgAAAAsIAAhWIBQAAQAHgBAKACIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAAaAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAisAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAkOAsIAAhWIAaAAIAAA/IA8AAIAAAXgAnJAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgApEAsIAAhWIAbAAIAABWgAvuAsIAAhWIBNAAQAIAAAGABQAGABAEADQAEADACADQABAFAAAHIAAAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAvTAWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAvTgIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAxuAsIgUg5IgVA5IgeAAIgchWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAzwAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgA0DAKIgRggIgRAgIAiAAgAsyAYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(237.5,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARBAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAQ+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAH8AsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAH5gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAloAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAoAAQAIAAAKADIAGACIAFADQADADACAGIABALIAAAEIgbAAIAAgGIgDgDQgDgBgHAAIgdAAIgIABQgEAAgBACQgCACgBAEIgBAJIAAAKIABAJQABADACACQABACAEABIAIABIAdAAQAGgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIAAAfIgCAHIgEAEQgBADgDABIgGABIgIACIgTAAgAqgAsIgPgBQgHgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAbAAIABAGIACADQACABAGAAIAhAAIAIgBIACgCIABgFIgBgDQgBgCgDgBIgMgBIgUgBIgYgBIgIgBIgFgCIgEgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAAAQgCgFAAgJIABgLQABgFADgEIAFgCIAGgDIAIgCIAxgBQAHAAALADIAGACIAEADQADADABAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIglgBQgFAAgCACQgDACAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFABAWAAIAZABIAJABIAHADQADABACACIADAEIABAHIABAIQgBAKgBAFQgBACgCACIgEAEIgFACIgIABIgWABgA2WAsQgJABgHgCQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEADADQADACAGAAIAKAAQAIAAADgBIACgEIABgEIAAg5IAbAAIgBBDIgCAHIgCAEIgFAEQgEADgHABIgQABgAV5ArIAAhAIgmAAIAAgWIBmAAIAAAWIgmAAIAABAgAUfArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgASkArIAAhWIAaAAIAABWgAOmArIAAhWIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAIIAAAHIgBAJQgBAFgDAEQgDAEgEACQgHADgFAAIg1AAIAAAVgAPBAAIApAAQAFAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgnAAgALmArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAMBAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAKqArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAGsArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAERArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAD+AJIgRgfIgRAfIAiAAgACHArIAAhWIAbAAIAABWgAABArIAAhWIBRAAQAGABAKACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgAAcAVIAvAAIAHAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAirArIAAhWIBfAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAkNArIAAhWIAbAAIAABAIA8AAIAAAWgAnHArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgApCArIAAhWIAaAAIAABWgAuUArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgAumAJIgRgfIgRAfIAiAAgAxvArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAShAIAbAAIgdBWgAzyArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgA0EAJIgRgfIgRAfIAiAAgAswAYIAAgVIAhAAIAAAVg");
	this.shape_1.setTransform(236.7,-90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG1rEIAAWJItoAAIAA2Jg");
	this.shape_2.setTransform(66.6,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SDBSDB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("Am2LEIAA2HINtAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_SCSSDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAQ9gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAH7AsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAH4gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAlpAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAoAAQAHABALACIAGACIAEADQAEADABAGIABAMIAAADIgaAAIgBgGIgDgDQgCgCgHABIgdAAIgJABQgDAAgCACQgCACgBAEIAAAJIAAAJIAAAKQABADACACQACACADABIAJABIAcAAQAHgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAfIgCAHIgDAFQgCACgDABIgGABIgHACIgTAAgAqhAsIgQgBQgGAAgEgDQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgVgBIgXgBIgIgBIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgMQABgFADgEIAEgDIAGgCIAJgCIAwgBQAIABAKACIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAEIACAHIAAAIQAAALgCAEQAAACgCACIgEAEIgGACIgHABIgWABgA2UAsQgKAAgGgBQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAFACACQADACAGAAIALAAQAHAAADgBIADgEIABgEIAAg4IAaAAIAABCIgCAHIgDAEIgEAEQgFADgHABIgQABgAV3ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAUdArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgASiArIAAhVIAbAAIAABVgAOlArIAAhVIBIAAQAHAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHACgFABIg1AAIAAAVgAO/AAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgoAAgALlArIAAhVIBQAAQAHAAAKACIAGABIAFADIAEAFIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAFIgEAEIgFAEIgGACIgRABgAL/AVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAKpArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgAGqArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIApAAIAeA3IAeg3IApAAIAABVgAEPArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAD9AJIgRgfIgRAfIAiAAgACGArIAAhVIAaAAIAABVgAAAArIAAhVIBQAAQAHAAAKACIAGABIAFADIAEAFIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAFIgEAEIgFAEIgGACIgRABgAAaAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAisArIAAhVIBfAAIAAAUIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAkOArIAAhVIAaAAIAAA/IA8AAIAAAWgAnJArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgApEArIAAhVIAbAAIAABVgAvuArIAAhVIBNAAQAIAAAGABQAGABAEACQAEAEACAEQABAEAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAvTAXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgDgCgEAAIgwAAgAvTgIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgCgEABIgvAAgAxuArIgUg4IgVA4IgeAAIgchVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBVgAzwArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgA0DAJIgRgfIgRAfIAiAAgAsyAYIAAgVIAiAAIAAAVg");
	this.shape.setTransform(338.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOLAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAOIgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAFbAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAFYgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgADbAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAfAAQAKAAANADIAIACIAFADIAEAFIACAFQABAFAAAKIgbAAIAAgCQAAgEgDgDQgDgBgGAAIgdAAIgJABIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAkAAIAFgCIADgEIAAgGIAbAAIAAAIQAAAHgBADQgCAGgDADQgEADgGACQgJACgHAAgAixAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAoAAQAHAAALADIAGACIAEADQAEADABAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgHAAIgdAAIgJABQgDAAgCACQgCACgBAEIAAAJIAAAKIAAAJQABADACACQACACADABIAJABIAcAAQAHgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAfIgCAHIgDAEQgCADgDABIgGABIgHACIgTAAgAnpAsIgQgBQgGgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgVgBIgXgBIgIgBIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgEIAEgCIAGgDIAJgCIAwgBQAIAAAKADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEAEIgGACIgHABIgWABgAzfAsQgKABgGgCQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIALAAQAHAAADgBIADgEIABgEIAAg5IAaAAIAABDIgCAHIgDAEIgEAEQgFADgHABIgQABgATCArIAAhAIglAAIAAgWIBlAAIAAAWIglAAIAABAgARoArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAPtArIAAhWIAbAAIAABWgALwArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHADgFAAIg1AAIAAAVgAMKAAIAqAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgoAAgAJEArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAIJArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAALArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAhWArIAAhWIAaAAIAABAIA8AAIAAAWgAkRArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAmMArIAAhWIAbAAIAABWgArdArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgArwAJIgRgfIgRAfIAiAAgAu5ArIgUg4IgVA4IgeAAIgchWIAaAAIASBAIAWhAIAZAAIAWBAIAThAIAaAAIgcBWgAw7ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAxOAJIgRgfIgRAfIAiAAgAp6AYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(337.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG3rEIAAWJIttAAIAA2Jg");
	this.shape_2.setTransform(66.3,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SCSSDS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmxLEIAA2HINjAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,144.2);


(lib.But_S_SCRSDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAQ9gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAH7AtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAH4gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAlpAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAoAAQAHAAALACIAGADIAEADQAEAEABAFIABALIAAAEIgaAAIgBgGIgDgDQgCgCgHAAIgdAAIgJACQgDAAgCACQgCACgBADIAAAJIAAALIAAAJQABADACACQACACADABIAJABIAcAAQAHAAADgCIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAgIgCAHIgDAEQgCACgDACIgGACIgHABIgTABgAqhAtIgQgBQgGgCgEgCQgEgDgCgEQgCgFAAgHIAAgGIAaAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXAAIgIgCIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIAEgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADADIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgA2UAtQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg5IAaAAIAABDIgCAGIgDAFIgEAEQgFADgHACIgQABgAV3AsIAAhBIglAAIAAgWIBlAAIAAAWIglAAIAABBgAUdAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAaAAIAABXgASiAsIAAhXIAbAAIAABXgAOlAsIAAhXIBIAAQAHABAJACIAFADIAFADQADAEABAFQACAGAAAHIAAAHIgBAIQgCAGgCADQgDAFgFACQgHACgFAAIg1AAIAAAXgAO/AAIAqAAQAEAAACgBQACgDAAgEIAAgDQAAgFgCgCQgDgDgFAAIgoAAgALlAsIAAhXIBQAAQAHAAAKACIAGADIAFADIAEAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgEADIgFADIgGADIgRACgAL/AVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAKpAsIgyg+IgBAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAGqAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhXIApAAIAeA3IAeg3IApAAIAABXgAEPAsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAD9AJIgRgfIgRAfIAiAAgACGAsIAAhXIAaAAIAABXgAAAAsIAAhXIBQAAQAHAAAKACIAGADIAFADIAEAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgEADIgFADIgGADIgRACgAAaAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAisAsIAAhXIBfAAIAAAVIhFAAIAAANIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAkOAsIAAhXIAaAAIAABAIA8AAIAAAXgAnJAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAaAAIAABXgApEAsIAAhXIAbAAIAABXgAvuAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQABAEAAAHIAAAJQgBADgCACIgEAEIgFABIAHABQADACACADQACACABAEIABAIQAAAIgCAEQgCAEgEADQgDADgFABIgLABgAvTAXIAwAAIAHgCQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAvTgIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgAxuAsIgUg5IgVA5IgeAAIgchXIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBXgAzwAsIgJgQIg2AAIgIAQIgdAAIAvhXIAiAAIAwBXgA0DAJIgRgfIgRAfIAiAAgAsyAYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(340,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOLAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAOIgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAFbAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAFYgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgADbAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIAfAAQAKAAANABIAIACIAFAEIAEAEIACAGQABAGAAAJIgbAAIAAgCQAAgEgDgDQgDgBgGAAIgdAAIgJABIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQACACADABIAHABIAkAAIAFgCIADgDIAAgHIAbAAIAAAJQAAAGgBAEQgCAEgDAEQgEAEgGABQgJADgHAAgAixAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAoAAQAHAAALABIAGADIAEADQAEADABAGIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAhIgCAGIgDAFQgCABgDABIgGACIgHACIgTABgAnpAtIgQgBQgGgCgEgCQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAFIACADQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKABIAGADIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDACAAAEIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEACAWAAIAaAAIAJACIAGACQADABACACIADAEIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHACIgWABgAzfAtQgKAAgGgCQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgATCAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgARoAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAPtAsIAAhWIAbAAIAABWgALwAsIAAhWIBIAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgAMKAAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgAJEAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAIJAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAALAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAhWAsIAAhWIAaAAIAAA/IA8AAIAAAXgAkRAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAmMAsIAAhWIAbAAIAABWgArdAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgArwAKIgRggIgRAgIAiAAgAu5AsIgUg5IgVA5IgeAAIgchWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAw7AsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAxOAKIgRggIgRAgIAiAAgAp6AYIAAgWIAiAAIAAAWg");
	this.shape_1.setTransform(339.2,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG3rEIAAWJIttAAIAA2Jg");
	this.shape_2.setTransform(66.3,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SCRSDR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmxLEIAA2HINjAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,144.2);


(lib.But_S_SCGSDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAQ9gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAH7AtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAH4gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAlpAtQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAoAAQAHAAALACIAGADIAEADQAEAEABAFIABALIAAAEIgaAAIgBgGIgDgDQgCgCgHAAIgdAAIgJACQgDAAgCACQgCACgBADIAAAJIAAALIAAAJQABADACACQACACADABIAJABIAcAAQAHAAADgCIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAgIgCAHIgDAEQgCACgDACIgGACIgHABIgTABgAqhAtIgQgBQgGgCgEgCQgEgDgCgEQgCgFAAgHIAAgGIAaAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXAAIgIgCIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIAEgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADADIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgA2UAtQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg5IAaAAIAABDIgCAGIgDAFIgEAEQgFADgHACIgQABgAV3AsIAAhBIglAAIAAgWIBlAAIAAAWIglAAIAABBgAUdAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAaAAIAABXgASiAsIAAhXIAbAAIAABXgAOlAsIAAhXIBIAAQAHABAJACIAFADIAFADQADAEABAFQACAGAAAHIAAAHIgBAIQgCAGgCADQgDAFgFACQgHACgFAAIg1AAIAAAXgAO/AAIAqAAQAEAAACgBQACgDAAgEIAAgDQAAgFgCgCQgDgDgFAAIgoAAgALlAsIAAhXIBQAAQAHAAAKACIAGADIAFADIAEAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgEADIgFADIgGADIgRACgAL/AVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAKpAsIgyg+IgBAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAGqAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhXIApAAIAeA3IAeg3IApAAIAABXgAEPAsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAD9AJIgRgfIgRAfIAiAAgACGAsIAAhXIAaAAIAABXgAAAAsIAAhXIBQAAQAHAAAKACIAGADIAFADIAEAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgEADIgFADIgGADIgRACgAAaAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAisAsIAAhXIBfAAIAAAVIhFAAIAAANIBBAAIAAASIhBAAIAAAOIBGAAIAAAVgAkOAsIAAhXIAaAAIAABAIA8AAIAAAXgAnJAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAaAAIAABXgApEAsIAAhXIAbAAIAABXgAvuAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQABAEAAAHIAAAJQgBADgCACIgEAEIgFABIAHABQADACACADQACACABAEIABAIQAAAIgCAEQgCAEgEADQgDADgFABIgLABgAvTAXIAwAAIAHgCQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAvTgIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgAxuAsIgUg5IgVA5IgeAAIgchXIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBXgAzwAsIgJgQIg2AAIgIAQIgdAAIAvhXIAiAAIAwBXgA0DAJIgRgfIgRAfIAiAAgAsyAYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(330.6,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOLAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAOIgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAFbAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAFYgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgADbAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIAfAAQAKAAANABIAIACIAFAEIAEAEIACAGQABAGAAAJIgbAAIAAgCQAAgEgDgDQgDgBgGAAIgdAAIgJABIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQACACADABIAHABIAkAAIAFgCIADgDIAAgHIAbAAIAAAJQAAAGgBAEQgCAEgDAEQgEAEgGABQgJADgHAAgAixAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAoAAQAHAAALABIAGADIAEADQAEADABAGIABAMIAAACIgaAAIgBgFIgDgDQgCgBgHgBIgdAAIgJABQgDABgCACQgCACgBADIAAAJIAAAKIAAAJQABAEACACQACACADABIAJAAIAcAAQAHAAADgBIADgDIABgFIAAgDIghAAIAAgRIA8AAIgBAhIgCAGIgDAFQgCABgDABIgGACIgHACIgTABgAnpAtIgQgBQgGgCgEgCQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAFIACADQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgGgDIgEgDQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIAEgEIAGgCIAJgCIAwAAQAIAAAKABIAGADIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDACAAAEIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEACAWAAIAaAAIAJACIAGACQADABACACIADAEIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHACIgWABgAzfAtQgKAAgGgCQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgATCAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgARoAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAPtAsIAAhWIAbAAIAABWgALwAsIAAhWIBIAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgAMKAAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgAJEAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAIJAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAALAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAhWAsIAAhWIAaAAIAAA/IA8AAIAAAXgAkRAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAmMAsIAAhWIAbAAIAABWgArdAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgArwAKIgRggIgRAgIAiAAgAu5AsIgUg5IgVA5IgeAAIgchWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAw7AsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAxOAKIgRggIgRAgIAiAAgAp6AYIAAgWIAiAAIAAAWg");
	this.shape_1.setTransform(329.8,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG3rEIAAWJIttAAIAA2Jg");
	this.shape_2.setTransform(66.3,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SCGSDG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmxLEIAA2HINjAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,144.2);


(lib.But_S_SCBSDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARAAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAQ9gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAH7AsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAH4gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAlpAsQgKAAgHgBIgMgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAoAAQAHABALACIAGACIAEADQAEADABAGIABAMIAAADIgaAAIgBgGIgDgDQgCgCgHABIgdAAIgJABQgDAAgCACQgCACgBAEIAAAJIAAAJIAAAKQABADACACQACACADABIAJABIAcAAQAHgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAfIgCAHIgDAFQgCACgDABIgGABIgHACIgTAAgAqhAsIgQgBQgGAAgEgDQgEgDgCgFQgCgEAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgVgBIgXgBIgIgBIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgMQABgFADgEIAEgDIAGgCIAJgCIAwgBQAIABAKACIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAEIACAHIAAAIQAAALgCAEQAAACgCACIgEAEIgGACIgHABIgWABgA2UAsQgKAAgGgBQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAFACACQADACAGAAIALAAQAHAAADgBIADgEIABgEIAAg4IAaAAIAABCIgCAHIgDAEIgEAEQgFADgHABIgQABgAV3ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAUdArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgASiArIAAhVIAbAAIAABVgAOlArIAAhVIBIAAQAHAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHACgFABIg1AAIAAAVgAO/AAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgoAAgALlArIAAhVIBQAAQAHAAAKACIAGABIAFADIAEAFIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAFIgEAEIgFAEIgGACIgRABgAL/AVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAKpArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgAGqArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIApAAIAeA3IAeg3IApAAIAABVgAEPArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAD9AJIgRgfIgRAfIAiAAgACGArIAAhVIAaAAIAABVgAAAArIAAhVIBQAAQAHAAAKACIAGABIAFADIAEAFIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAFIgEAEIgFAEIgGACIgRABgAAaAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAisArIAAhVIBfAAIAAAUIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAkOArIAAhVIAaAAIAAA/IA8AAIAAAWgAnJArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgApEArIAAhVIAbAAIAABVgAvuArIAAhVIBNAAQAIAAAGABQAGABAEACQAEAEACAEQABAEAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAvTAXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgDgCgEAAIgwAAgAvTgIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgCgEABIgvAAgAxuArIgUg4IgVA4IgeAAIgchVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBVgAzwArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgA0DAJIgRgfIgRAfIAiAAgAsyAYIAAgVIAiAAIAAAVg");
	this.shape.setTransform(335.4,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOLAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAOIgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAFbAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAFYgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgADbAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAfAAQAKAAANADIAIACIAFADIAEAFIACAFQABAFAAAKIgbAAIAAgCQAAgEgDgDQgDgBgGAAIgdAAIgJABIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACADABIAHABIAkAAIAFgCIADgEIAAgGIAbAAIAAAIQAAAHgBADQgCAGgDADQgEADgGACQgJACgHAAgAixAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAoAAQAHAAALADIAGACIAEADQAEADABAGIABALIAAAEIgaAAIgBgGIgDgDQgCgBgHAAIgdAAIgJABQgDAAgCACQgCACgBAEIAAAJIAAAKIAAAJQABADACACQACACADABIAJABIAcAAQAHgBADgBIADgDIABgFIAAgCIghAAIAAgRIA8AAIgBAfIgCAHIgDAEQgCADgDABIgGABIgHACIgTAAgAnpAsIgQgBQgGgBgEgCQgEgDgCgEQgCgFAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgVgBIgXgBIgIgBIgGgCIgEgEQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgEIAEgCIAGgDIAJgCIAwgBQAIAAAKADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJABIAGADQADABACACIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEAEIgGACIgHABIgWABgAzfAsQgKABgGgCQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIALAAQAHAAADgBIADgEIABgEIAAg5IAaAAIAABDIgCAHIgDAEIgEAEQgFADgHABIgQABgATCArIAAhAIglAAIAAgWIBlAAIAAAWIglAAIAABAgARoArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAPtArIAAhWIAbAAIAABWgALwArIAAhWIBIAAQAHAAAJADIAFACIAFAEQADAEABAFQACAFAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHADgFAAIg1AAIAAAVgAMKAAIAqAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgoAAgAJEArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAIJArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAALArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAhWArIAAhWIAaAAIAABAIA8AAIAAAWgAkRArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAmMArIAAhWIAbAAIAABWgArdArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgArwAJIgRgfIgRAfIAiAAgAu5ArIgUg4IgVA4IgeAAIgchWIAaAAIASBAIAWhAIAZAAIAWBAIAThAIAaAAIgcBWgAw7ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAxOAJIgRgfIgRAfIAiAAgAp6AYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(334.6,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AG3rEIAAWJIttAAIAA2Jg");
	this.shape_2.setTransform(66.3,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.SCBSDB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AmxLEIAA2HINjAAIAAWHg");
	this.shape_3.setTransform(66.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,144.2);


(lib.But_S_DUSDUS_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-132.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-133.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUBDUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DURDUR_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsAtQgMgBgEgBIgGgDIgFgDIgEgFIgDgFQgBgFgBgKIAAg2IAbAAIAAAxIABAHIACAFQACABADABIAHABIAaAAIAHgBIAFgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgDAFIgEAFIgFADIgGADQgKACgGAAgAmgAtQgMgBgEgBIgGgDIgFgDIgEgFIgDgFQgBgFgBgKIAAg2IAbAAIAAAxIABAHIACAFQACABADABIAHABIAaAAIAHgBIAFgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgDAFIgEAFIgFADIgGADQgKACgGAAgAolAtQgJgBgHgBIgMgFIgEgEIgEgGIgCgHIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgGACQgHABgJABgAoogUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgJABgA2hAtQgKgBgGgBQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgAVQAsIAAhWIBQAAQAHgBAKACIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAVqAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAUoAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAUVAKIgRggIgRAgIAiAAgARWAsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgARwAAIAqAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgAOqAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANvAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAL7AsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgALoAKIgRggIgRAgIAiAAgAJzAsIAAgiIg5AAIAAAiIgaAAIAAhWIAaAAIAAAeIA5AAIAAgeIAaAAIAABWgAHUAsIAAhBIgmAAIAAgVIBmAAIAAAVIgmAAIAABBgAFEAsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAEXAsIAAgQIgCgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIgFAAIgqAAIAAAXIgaAAIAAhWIBQAAQAIgBAFACQAFACADAEQADADABAFIABALIAAAFIAAAIIgDAFIgEAFIgIADIAGABIAFADQACADABADIABAIIAAAQgADiAAIAsAAQAGAAACgCQACgCAAgFIAAgDIAAgEIgDgDQgCgCgHAAIgqAAgAhjAsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjFAsIAAhWIAbAAIAAA/IA8AAIAAAXgAlEAsIAAhWIBMAAQAJAAAFABQAGABAEADQAEADACADQACAFAAAHIgBAJQgBADgCACIgEAEIgFABIAIACQADABABACQACADABAEIABAIQAAAIgCAEQgCAEgDADQgEACgFACIgKABgAkqAWIAwAAIAHgBQADgBAAgDQAAgFgDgCQgCgBgFAAIgwAAgAkqgIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgCgDAAIgwAAgArOAsIAAhWIBRAAQAGgBAKACIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgAqzAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAv7AsIAAhWIBNAAQAIAAAGABQAGABAEADQAEADACADQABAFAAAHIAAAJQgBADgCACIgEAEIgFABIAHACQADABACACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAvgAWIAwAAIAHgBQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAvggIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAx7AsIgUg5IgVA5IgeAAIgchWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAz9AsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgA0QAKIgRggIgRAgIAiAAgAs/AYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(-132.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-133.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUBDUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DUGDUG_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-132.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-133.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUBDUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DUBDUB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-132.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-133.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUBDUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DDSDDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgIIACgIIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHABgJAAgARogUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgGgDIgIgBIgfAAIgJABgAImAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgIIACgIIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAIjgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgEgDIgJgBIggAAIgIABgAm+AsQgMAAgEgCIgHgCIgEgEIgEgEIgDgGQgCgDAAgKIAAg3IAbAAIAAAxIABAHIACAEQABADAEABIAGAAIAbAAIAHAAIAFgEIACgEIABgHIAAgxIAbAAIAAA3IgCANIgEAGIgDAEIgFAEIgGACQgKACgGAAgApDAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgIIACgIIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgApGgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgGgDIgIgBIgfAAIgJABgA2/AsQgKAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAbAAIAAAIQgBAFADACQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg4IAaAAIAABCIgCAHIgDAEIgEAEQgFADgHABIgQABgAWjArIAAhAIgmAAIAAgVIBmAAIAAAVIgmAAIAABAgAVJArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgATOArIAAhVIAaAAIAABVgAPQArIAAhVIBJAAQAGAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgHACgEABIg1AAIAAAVgAPrAAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgnAAgAMQArIAAhVIBQAAQAHAAAKACIAGABIAGADIADAFIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAFIgDAEIgGAEIgGACIgRABgAMqAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgALUArIgyg+IgBAAIAAA+IgaAAIAAhVIAqAAIAxA+IAAg+IAbAAIAABVgAHWArIAAg9IgjA9IgVAAIgig9IAAA9IgaAAIAAhVIAoAAIAfA3IAeg3IAoAAIAABVgAE6ArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAEoAJIgRgfIgRAfIAiAAgACxArIAAhVIAaAAIAABVgAArArIAAhVIBQAAQAHAAAKACIAHABIAEADIAEAFIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAFIgEAEIgEAEIgHACIgRABgABFAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAiBArIAAhVIBfAAIAAAUIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgAjjArIAAhVIAaAAIAAA/IA9AAIAAAWgAliArIAAhVIBMAAQAJAAAFABQAGABAEACQAEAEACAEQABAEABAGIgBAJQgBAEgCACIgEADIgFACIAHACQAEABABACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAlIAXIAwAAIAHgBQADgCgBgEQABgEgDgBQgDgCgEAAIgwAAgAlIgIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgCgEABIgvAAgArsArIAAhVIBQAAQAHAAAKACIAHABIAEADIAEAFIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAFIgEAEIgEAEIgHACIgRABgArSAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAwZArIAAhVIBMAAQAJAAAGABQAGABAEACQADAEADAEQABAEAAAGIAAAJQgCAEgCACIgDADIgGACIAIACQADABACACQACADAAAEIABAJQAAAGgBAFQgCAFgEACQgDACgGABIgKABgAv+AXIAvAAIAIgBQACgCAAgEQAAgEgCgBQgDgCgFAAIgvAAgAv+gIIAvAAQADAAADgCQACgBAAgDQAAgFgCgBQgDgCgDABIgvAAgAyZArIgVg4IgUA4IgeAAIgdhVIAaAAIATA/IAWg/IAZAAIAWA/IASg/IAbAAIgcBVgA0cArIgIgPIg2AAIgIAPIgdAAIAuhVIAjAAIAwBVgA0uAJIgRgfIgRAfIAiAAgAtdAYIAAgVIAhAAIAAAVg");
	this.shape.setTransform(-3.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARsAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAHACQADABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgFACIgHACQgHACgJgBgARpgUIgFADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAiAAIAHgBQAEgBABgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAIoAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQADgDAJgCQAHgCAKAAIAqAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAIkgUIgEADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAHABIAjAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgJABgAm9AsQgLAAgFgCIgGgCIgFgEIgDgEIgEgGQgBgEgBgJIAAg4IAbAAIAAAyIABAHIACAEQACACADACIAHAAIAbAAIAGAAIAFgEIACgEIABgHIAAgyIAbAAIAAA4IgCANIgDAGIgEAEIgEAEIgHACQgJACgHAAgApCAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAKAAAGACIAGACQAEABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgGACIgGACQgGACgKgBgApEgUIgGADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAhAAIAIgBQAEgBABgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgIABgA3BAsQgJABgHgCQgGgCgEgDQgFgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQAEACAFAAIALAAQAHAAADgBIADgEIABgEIAAg5IAbAAIgBBDIgCAHIgDAEIgEAEQgEADgIABIgPABgAWkArIAAhAIglAAIAAgWIBlAAIAAAWIglAAIAABAgAVKArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgATPArIAAhWIAaAAIAABWgAPRArIAAhWIBJAAQAGAAAKADIAFACIAEAEQADAEACAFQACAFAAAIIAAAHIgBAJQgCAFgDAEQgDAEgEACQgHADgFAAIg1AAIAAAVgAPsAAIAqAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgnAAgAMSArIAAhWIBQAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgAMsAVIAvAAIAIAAIAEgDQACgCACgDIAAgHIAAgLIAAgIQgCgDgCgCQgCgCgCAAIgIgBIgvAAgALVArIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAHXArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAE8ArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAwBWgAEqAJIgRgfIgRAfIAiAAgACyArIAAhWIAbAAIAABWgAAsArIAAhWIBRAAQAGABAKACIAHACIAFACIAEAFIACAFQACAGAAAIIAAAaQAAAHgCAGIgCAGIgEADIgFAEIgHACIgQABgABHAVIAwAAIAGAAIAGgDQABgCABgDIABgHIAAgLIgBgIQgBgDgBgCQgCgCgEAAIgGgBIgwAAgAiAArIAAhWIBgAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjiArIAAhWIAbAAIAABAIA8AAIAAAWgAlhArIAAhWIBNAAQAIAAAFACQAHABADACQAFADABAFQACAEAAAGIgBAJQgBAEgBACIgFADIgEACIAHABQADACABADQACACABAEIACAJQgBAGgCAFQgCAFgDACQgEACgEABIgLABgAlHAXIAwAAIAHgBQADgCAAgEQAAgEgDgCQgCgBgFAAIgwAAgAlHgIIAwAAQADAAACgCQACgBAAgDQAAgEgCgCQgCgCgDABIgwAAgArrArIAAhWIBRAAQAGABAKACIAHACIAFACIAEAFIACAFQACAGAAAIIAAAaQAAAHgCAGIgCAGIgEADIgFAEIgHACIgQABgArQAVIAwAAIAGAAIAFgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgBgCgEAAIgGgBIgwAAgAu/ArIgIgPIg2AAIgJAPIgdAAIAvhWIAjAAIAvBWgAvRAJIgRgfIgSAfIAjAAgAybArIgUg4IgUA4IgfAAIgchWIAaAAIASBAIAXhAIAZAAIAVBAIAThAIAaAAIgcBWgA0dArIgJgPIg2AAIgIAPIgdAAIAvhWIAjAAIAvBWgA0vAJIgSgfIgRAfIAjAAgAtbAYIAAgVIAhAAIAAAVg");
	this.shape_1.setTransform(-4.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDSDDS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DDRDDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARwOuQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgaIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAaIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgARtNsIgFADIgDAGIAAAIIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAIrOuQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgaIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAaIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAIoNsIgFADIgDAGIAAAIIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAm6OuQgLgBgEgBIgHgDIgFgEIgDgEIgDgGQgCgDAAgLIAAg4IAaAAIAAAzIABAHIADAEQABACADABIAHABIAbAAIAHgBIAEgDIADgEIABgHIAAgzIAaAAIAAA4IgCAOIgDAGIgDAEIgFAEIgHADQgJABgGABgAo+OuQgKgBgHgBIgMgFIgEgEIgDgGIgCgHIgBgIIAAgaIABgIIACgHIADgGIAEgEQAEgDAIgCQAHgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAaIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgApBNsIgFADIgDAGIAAAIIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgIIgDgGIgFgDIgIgBIggAAIgIABgA27OuQgJgBgHgBQgGgCgEgDQgEgDgCgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEADACQADADAGAAIAKAAQAIAAADgCIACgDIABgEIAAg6IAbAAIgBBEIgCAGIgCAFIgFAEQgEADgHACIgQABgAWnOtIAAhCIglAAIAAgWI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");
	this.shape.setTransform(-2.7,0.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_1.setTransform(65.4,-0.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDRDDR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_2.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DDGDDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAtQgJgBgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgZIAAgIIACgHIADgGIAFgEQADgDAIgCQAIgBAJgBIArAAQAJABAGABIAHACQAEABACACIAEAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJABgARogUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgGgDIgIgBIgfAAIgJABgAImAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgIIACgHIAEgGIADgEQAEgDAJgCQAGgBAKgBIAqAAQAKABAHABIAGACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgAIjgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAm+AtQgMgBgEgBIgHgDIgEgEIgEgEIgDgGQgCgDAAgLIAAg3IAbAAIAAAyIABAHIACAEQACACACABIAHABIAbAAIAHgBIAEgDIADgEIABgHIAAgyIAbAAIAAA3IgCAOIgEAGIgDAEIgFAEIgGADQgKABgGABgApDAtQgJgBgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgZIAAgIIACgHIADgGIAFgEQADgDAIgCQAIgBAJgBIArAAQAJABAGABIAHACQAEABACACIAEAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJABgApGgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgA2/AtQgKgBgGgBQgHgCgEgDQgEgDgCgGQgBgFAAgHIAAgLIAaAAIAAAIQgBAEADACQADADAGAAIAKAAQAIAAADgCIADgDIABgEIAAg5IAaAAIAABDIgDAGIgCAFIgEAEQgFADgHACIgQABgAWjAsIAAhBIgmAAIAAgWIBmAAIAAAWIgmAAIAABBgAVJAsIgzg+IAAAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAaAAIAABXgATOAsIAAhXIAaAAIAABXgAPQAsIAAhXIBJAAQAGABAJACIAFADIAFADQADAEABAFQACAGAAAHIAAAHIgBAIQgBAGgDADQgDAFgEACQgIACgEAAIg1AAIAAAXgAPrAAIApAAQAEAAADgBQABgDAAgEIAAgDQAAgFgBgCQgDgDgGAAIgnAAgAMQAsIAAhXIBQAAQAHAAAKACIAHADIAEADIAEAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgEADIgEADIgHADIgRACgAMqAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgALUAsIgyg+IgBAAIAAA+IgaAAIAAhXIAqAAIAxA/IAAg/IAbAAIAABXgAHVAsIAAg+IgiA+IgVAAIgjg+IAAA+IgZAAIAAhXIAoAAIAeA3IAfg3IAoAAIAABXgAE6AsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAEoAJIgRgfIgRAfIAiAAgACxAsIAAhXIAbAAIAABXgAArAsIAAhXIBRAAQAGAAAKACIAHADIAEADIAEAEIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAGIgEADIgEADIgHADIgQACgABGAVIAvAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAiBAsIAAhXIBfAAIAAAVIhEAAIAAANIBAAAIAAASIhAAAIAAAOIBGAAIAAAVgAjjAsIAAhXIAbAAIAABAIA8AAIAAAXgAliAsIAAhXIBMAAQAIABAGABQAGABAEADQAEACACAFQABAEABAHIgBAJQgBADgCACIgEAEIgFABIAHABQADACACADQACACABAEIABAIQAAAIgCAEQgCAEgEADQgDADgFABIgLABgAlIAXIAwAAIAHgCQADgBgBgDQABgFgDgCQgDgBgEAAIgwAAgAlIgIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgArsAsIAAhXIBQAAQAHAAAKACIAHADIAEADIAEAEIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAGIgEADIgEADIgHADIgRACgArSAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAwZAsIAAhXIBMAAQAJABAGABQAFABAFADQADACACAFQACAEAAAHIAAAJQgCADgCACIgDAEIgGABIAIABQADACACADQACACABAEIAAAIQAAAIgBAEQgCAEgEADQgEADgFABIgKABgAv+AXIAwAAIAHgCQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAv+gIIAvAAQAEAAABgBQADgCAAgEQAAgEgDgBQgBgBgEAAIgvAAgAyZAsIgVg5IgUA5IgfAAIgchXIAaAAIATA/IAWg/IAZAAIAWA/IASg/IAbAAIgcBXgA0bAsIgJgQIg2AAIgIAQIgdAAIAuhXIAjAAIAwBXgA0uAJIgRgfIgRAfIAiAAgAtdAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(0.7,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARsAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAKgBAGACIAGACQAEABACACIAFAEIADAGIABAGIABAJIAAAZIgBAIIgBAIIgDAFIgFAEIgGADIgGACQgGACgKAAgARqgUIgGAEIgCAFIgBAHIAAAJIABAIQABADABACQACACADABIAIABIAhAAIAIgBQAEgBABgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgIABgAIoAtQgKAAgHgCIgMgFIgEgEIgDgFIgDgIIAAgIIAAgZIAAgJIADgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAEAEIAEAGIACAGIABAJIAAAZIgBAIIgCAIIgEAFIgEAEIgFADIgHACQgGACgKAAgAIkgUIgEAEIgDAFIgBAHIAAAJIABAIQABADACACQABACADABIAHABIAjAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgJABgAm9AtQgMgBgEgCIgGgCIgFgDIgEgFIgDgFQgBgFAAgKIAAg2IAaAAIAAAxIABAHIACAFQACABADABIAHABIAaAAIAHgBIAFgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgDAFIgEAFIgEADIgHACQgJADgHAAgApCAtQgJAAgHgCIgMgFIgEgEIgEgFIgBgIIgBgIIAAgZIABgJIABgGIAEgGIAEgEQAEgCAIgDQAHgCAJABIArAAQAKgBAGACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgGACQgGACgKAAgApEgUIgGAEIgCAFIAAAHIAAAJIAAAIQAAADACACQACACADABIAIABIAhAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgIABgA3BAtQgKAAgGgCQgGgBgEgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAWkAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAVKAsIgyg+IgBAAIAAA+IgaAAIAAhWIAqAAIAxA+IAAg+IAbAAIAABWgATPAsIAAhWIAaAAIAABWgAPSAsIAAhWIBIAAQAGgBAKADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgCAIQgBAGgDADQgCAFgFACQgHADgFgBIg1AAIAAAXgAPsAAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAMSAsIAAhWIBQAAQAHAAAJABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgAMsAVIAwAAIAHgBIAEgCQACgCACgDIAAgIIAAgKIAAgIQgCgDgCgBQgCgCgCgBIgHgBIgwAAgALVAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAbAAIAABWgAHXAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAE8AsIgIgQIg2AAIgIAQIgeAAIAvhWIAiAAIAxBWgAEpAKIgQggIgRAgIAhAAgACyAsIAAhWIAbAAIAABWgAAsAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgABHAVIAwAAIAGgBIAGgCQABgCABgDIABgIIAAgKIgBgIQgBgDgBgBQgCgCgEgBIgGgBIgwAAgAiAAsIAAhWIBgAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjiAsIAAhWIAbAAIAAA/IA8AAIAAAXgAlhAsIAAhWIBNAAQAIgBAFACQAHABADACQAFAEACADQABAFAAAGIgBAJQAAAEgCACIgFADIgEACIAHACQADABABACQACADABAEIABAIQAAAHgCAFQgCAEgDADQgDACgFABIgLACgAlHAWIAwAAIAHgBQADgBAAgDQAAgFgDgBQgCgCgFAAIgwAAgAlHgIIAwAAQAEAAACgBQABgCAAgEQAAgDgBgCQgCgBgEgBIgwAAgArrAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgArQAVIAwAAIAGgBIAGgCQABgCABgDIABgIIAAgKIgBgIQgBgDgBgBQgCgCgEgBIgGgBIgwAAgAu/AsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAvBWgAvRAKIgRggIgRAgIAiAAgAybAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAYAAIAXA+IASg+IAbAAIgdBWgA0dAsIgIgQIg2AAIgJAQIgdAAIAvhWIAjAAIAvBWgA0vAKIgRggIgSAgIAjAAgAtbAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(-0.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDGDDG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_S_DDBDDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAHABIAGACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgGACQgHABgKAAgARogUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgEgEIgJgBIggAAIgIABgAImAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgBAJAAIArAAQAJAAAGABIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgAIjgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgGgEIgIgBIgfAAIgJABgAm/AsQgLAAgEgCIgGgCIgGgDIgDgFIgDgGQgBgDgBgKIAAg3IAaAAIAAAxIABAHIADAFQACACACABIAIAAIAaAAIAHAAIAEgDIADgFIABgHIAAgxIAaAAIAAA3IgCANIgCAGIgEAFIgFADIgHACQgJACgGAAgApDAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAHABIAGACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgGACQgHABgKAAgApGgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgA3AAsQgJAAgHgBQgGgCgEgDQgEgDgBgFQgCgGgBgIIAAgKIAaAAIAAAHQAAAFADADQADACAGAAIALAAQAHAAADgBIACgDIABgGIAAg3IAbAAIgBBCIgCAHIgCAEIgFAEQgEADgHABIgQABgAWiArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAVIArIgxg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgATNArIAAhVIAbAAIAABVgAPQArIAAhVIBIAAQAHAAAJACIAGACIAEAEQADAEACAGQABAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHACgFABIg1AAIAAAVgAPqAAIAqAAQAEAAADgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgGAAIgoAAgAMQArIAAhVIBRAAQAGAAAKACIAGABIAFADIAEAFIADAFQACAFAAAJIAAAZQAAAJgCAFIgDAFIgEAFIgFADIgGACIgQABgAMrAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgALUArIgyg+IAAAAIAAA+IgbAAIAAhVIApAAIAzA+IAAg+IAaAAIAABVgAHWArIAAg9IgkA9IgTAAIgjg9IAAA9IgbAAIAAhVIAqAAIAeA3IAdg3IAqAAIAABVgAE7ArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgAEoAKIgRggIgRAgIAiAAgACxArIAAhVIAaAAIAABVgAArArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIACAFQACAFABAJIAAAZQgBAJgCAFIgCAFIgDAFIgGADIgGACIgQABgABGAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAiBArIAAhVIBfAAIAAAUIhFAAIAAANIBCAAIAAARIhCAAIAAAPIBGAAIAAAUgAjjArIAAhVIAaAAIAAA/IA8AAIAAAWgAljArIAAhVIBNAAQAIAAAGABQAGABAEACQAEADACAEQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAIACQADABABACQACADABAEIABAJQAAAGgCAFQgCAEgDADQgEADgFAAIgKABgAlIAXIAwAAIAHgBQADgCAAgEQAAgEgDgBQgDgCgEAAIgwAAgAlIgIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgBgDgBIgwAAgArsArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIACAFQACAFABAJIAAAZQgBAJgCAFIgCAFIgDAFIgGADIgGACIgQABgArRAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAwZArIAAhVIBNAAQAIAAAFABQAHABADACQAFADABAEQACAFAAAGIgBAJQgBAEgBACIgFADIgEACIAHACQADABABACQACADABAEIACAJQgBAGgCAFQgCAEgDADQgEADgEAAIgLABgAv/AXIAwAAIAHgBQADgCAAgEQAAgEgDgBQgCgCgFAAIgwAAgAv/gIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgBgDgBIgwAAgAyZArIgUg4IgVA4IgfAAIgbhVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgdBVgA0cArIgIgPIg2AAIgIAPIgeAAIAwhVIAiAAIAwBVgA0uAKIgRggIgRAgIAiAAgAtdAYIAAgVIAiAAIAAAVg");
	this.shape.setTransform(9.3,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARtAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQADgDAJgCQAHgCAKAAIAqAAQAJAAAHACIAHACQADABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgFACIgHACQgHACgJgBgARpgUIgEADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAHABIAjAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgJABgAInAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAKAAAGACIAGACQAEABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgGACIgGACQgGACgKgBgAIlgUIgGADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAhAAIAIgBQAEgBABgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgIABgAm9AsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEgBgJIAAg4IAbAAIAAAyIABAHIADAEQABACADACIAHAAIAaAAIAIAAIAEgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgApBAsQgKABgHgCIgMgEIgEgFIgDgGIgDgGIAAgJIAAgZIAAgIIADgIIADgFIAEgEQAEgDAIgCQAHgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgFACIgHACQgGACgKgBgApFgUIgEADIgDAGIgBAIIAAAIIABAIQABADACACQABACADABIAHABIAjAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgJABgA3BAsQgKABgGgCQgGgCgFgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEADADQACACAHAAIAKAAQAIAAADgBIACgEIABgEIAAg5IAaAAIAABDIgCAHIgCAEIgFAEQgFADgGABIgRABgAWkArIAAhAIgmAAIAAgWIBmAAIAAAWIgmAAIAABAgAVKArIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgATPArIAAhWIAbAAIAABWgAPSArIAAhWIBIAAQAHAAAIADIAGACIAEAEQAEAEABAFQACAFgBAIIAAAHIgBAJQgBAFgCAEQgDAEgFACQgHADgFAAIg1AAIAAAVgAPsAAIApAAQAFAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgoAAgAMRArIAAhWIBRAAQAGABALACIAGACIAFACIAEAFIACAFQACAGAAAIIAAAaQAAAHgCAGIgCAGIgEADIgFAEIgGACIgRABgAMsAVIAvAAIAHAAIAGgDQACgCAAgDIABgHIAAgLIgBgIQAAgDgCgCQgDgCgDAAIgHgBIgvAAgALWArIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAHXArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAE8ArIgJgPIg2AAIgIAPIgdAAIAvhWIAjAAIAvBWgAEqAJIgSgfIgRAfIAjAAgACzArIAAhWIAaAAIAABWgAAtArIAAhWIBQAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgABHAVIAvAAIAIAAIAEgDQADgCABgDIAAgHIAAgLIAAgIQgBgDgDgCQgCgCgCAAIgIgBIgvAAgAh/ArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjhArIAAhWIAaAAIAABAIA8AAIAAAWgAlhArIAAhWIBMAAQAJAAAGACQAFABAFACQADADACAFQACAEAAAGIAAAJQgCAEgCACIgDADIgGACIAIABQADACACADQACACABAEIAAAJQAAAGgBAFQgCAFgEACQgEACgFABIgKABgAlGAXIAwAAIAHgBQACgCAAgEQAAgEgCgCQgDgBgEAAIgwAAgAlGgIIAvAAQAEAAABgCQADgBAAgDQAAgEgDgCQgBgCgEABIgvAAgArqArIAAhWIBQAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgArQAVIAvAAIAIAAIAEgDQADgCABgDIAAgHIAAgLIAAgIQgBgDgDgCQgCgCgCAAIgIgBIgvAAgAu/ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAxBWgAvSAJIgRgfIgRAfIAiAAgAyaArIgVg4IgVA4IgeAAIgchWIAaAAIATBAIAVhAIAZAAIAWBAIAThAIAaAAIgcBWgA0dArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgA0wAJIgRgfIgQAfIAhAAgAtcAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(8.5,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDBDDB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_S_DCSDDS_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgIIACgIIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgARogUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAImAsQgJAAgIgBIgMgEIgDgFIgEgFIgCgHIAAgJIAAgZIAAgIIACgIIAEgFIADgEQAEgDAIgCQAIgCAJAAIAqAAQAKAAAHACIAGACQADABACACIAFAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgFAFIgFACIgGACQgHABgKAAgAIjgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAm/AsQgLAAgEgCIgHgCIgFgEIgDgEIgDgGQgCgDAAgKIAAg3IAaAAIAAAxIACAHIACAEQABADADABIAHAAIAbAAIAHAAIAEgEIADgEIABgHIAAgxIAbAAIAAA3IgDANIgDAGIgDAEIgFAEIgHACQgJACgGAAgApDAsQgJAAgHgBIgMgEIgFgFIgDgFIgCgHIgBgJIAAgZIABgIIACgIIADgFIAFgEQADgDAJgCQAHgCAJAAIAqAAQAKAAAGACIAHACQADABADACIAEAEIADAFIACAIIABAIIAAAZIgBAJIgCAHIgDAFIgEAFIgGACIgHACQgGABgKAAgApGgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgA2/AsQgKAAgGgBQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQAAAFACACQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg4IAaAAIAABCIgDAHIgCAEIgEAEQgFADgHABIgQABgAWiArIAAhAIglAAIAAgVIBmAAIAAAVIgmAAIAABAgAVIArIgxg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgATOArIAAhVIAaAAIAABVgAPQArIAAhVIBJAAQAGAAAJACIAFACIAFAEQADAEACAGQABAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgEACQgHACgGABIg0AAIAAAVgAPrAAIApAAQAFAAACgCQABgCAAgEIAAgEQAAgEgBgDQgDgCgGAAIgnAAgAMQArIAAhVIBQAAQAHAAAKACIAHABIAEADIAEAFIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAFIgEAEIgEAEIgHACIgRABgAMqAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgALUArIgyg+IAAAAIAAA+IgbAAIAAhVIAqAAIAxA+IAAg+IAbAAIAABVgAHVArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIApAAIAeA3IAfg3IAoAAIAABVgAE6ArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAEoAJIgRgfIgRAfIAiAAgACxArIAAhVIAbAAIAABVgAArArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIADAFQACAFAAAJIAAAaQAAAHgCAGIgDAFIgDAEIgGAEIgGACIgQABgABGAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAiBArIAAhVIBfAAIAAAUIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBFAAIAAAUgAjjArIAAhVIAbAAIAAA/IA7AAIAAAWgAliArIAAhVIBMAAQAIAAAGABQAGABAEACQAEAEACAEQACAEAAAGIgBAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAlIAXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgCgCgFAAIgwAAgAlIgIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgCgDABIgwAAgArsArIAAhVIBRAAQAGAAAKACIAGABIAFADIAEAFIADAFQACAFAAAJIAAAaQAAAHgCAGIgDAFIgEAEIgFAEIgGACIgQABgArRAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAwZArIAAhVIBMAAQAJAAAGABQAFABAFACQADAEACAEQACAEAAAGIgBAJQgBAEgCACIgDADIgGACIAIACQADABABACQADADABAEIABAJQAAAGgCAFQgCAFgEACQgEACgFABIgKABgAv/AXIAxAAIAHgBQACgCAAgEQAAgEgCgBQgDgCgEAAIgxAAgAv/gIIAwAAQADAAACgCQACgBABgDQgBgFgCgBQgCgCgDABIgwAAgAyZArIgUg4IgVA4IgfAAIgchVIAaAAIATA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBVgA0bArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgA0uAJIgRgfIgRAfIAiAAgAtdAYIAAgVIAhAAIAAAVg");
	this.shape.setTransform(135.2,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AsQgJABgHgCIgMgEIgFgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAFgEQADgDAJgCQAHgCAJAAIAqAAQAKAAAGACIAHACQADABADACIAEAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgEAFIgGACIgHACQgGACgKgBgAOzgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAGGAsQgKABgGgCIgNgEIgDgFIgEgGIgCgGIgBgJIAAgZIABgIIACgIIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAGDgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgEgDIgJgBIggAAIgIABgAEGAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIAgAAQAJAAANADIAIACIAGADIADAFIACAFQACAFAAAKIgbAAIAAgCQgBgEgDgDQgDgBgGAAIgdAAIgJABIgFADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAkAAIAEgCIADgEIABgGIAbAAIAAAIQAAAHgCADQgCAGgCADQgFADgFACQgKACgHAAgAkGAsQgMAAgEgCIgHgCIgEgEIgEgEIgDgGQgCgEAAgJIAAg4IAbAAIAAAyIAAAHIADAEQACACADACIAHAAIAaAAIAHAAIAFgEIACgEIABgHIAAgyIAaAAIAAA4IgBANIgDAGIgEAEIgFAEIgGACQgKACgGAAgAmLAsQgJABgIgCIgMgEIgDgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIADgEQAEgDAIgCQAIgCAJAAIArAAQAJAAAHACIAGACQADABACACIAFAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgFAFIgFACIgGACQgHACgJgBgAmOgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgA0KAsQgKABgGgCQgHgCgEgDQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg5IAaAAIAABDIgDAHIgCAEIgEAEQgFADgHABIgQABgATtArIAAhAIglAAIAAgWIBlAAIAAAWIglAAIAABAgASTArIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAQZArIAAhWIAaAAIAABWgAMbArIAAhWIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFAAAIIAAAHIgBAJQgCAFgCAEQgDAEgEACQgHADgGAAIg1AAIAAAVgAM1AAIAqAAQAFAAACgCQABgCABgEIAAgDQgBgFgBgDQgDgCgGAAIgoAAgAJvArIAAhWIBfAAIAAAVIhFAAIAAANIBCAAIAAARIhCAAIAAAPIBGAAIAAAUgAI0ArIgyg+IgBAAIAAA+IgaAAIAAhWIAqAAIAxA/IAAg/IAbAAIAABWgAA2ArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBHAAIAAAUgAgrArIAAhWIAaAAIAABAIA8AAIAAAWgAirArIAAhWIBNAAQAIAAAGACQAGABAEACQAEADACAFQACAEgBAGIAAAJQgBAEgCACIgEADIgFACIAIABQACACACADQACACABAEIABAJQAAAGgCAFQgCAFgDACQgEACgFABIgKABgAiQAXIAwAAIAHgBQACgCAAgEQAAgEgCgCQgDgBgEAAIgwAAgAiQgIIAvAAQAEAAACgCQACgBAAgDQAAgEgCgCQgCgCgEABIgvAAgAo0ArIAAhWIBQAAQAHABAKACIAHACIAEACIAEAFIACAFQACAGAAAIIAAAaQAAAHgCAGIgCAGIgEADIgEAEIgHACIgRABgAoaAVIAwAAIAHAAIAFgDQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAsIArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAsbAJIgRgfIgRAfIAiAAgAvkArIgVg4IgUA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAThAIAaAAIgcBWgAxmArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAx5AJIgRgfIgRAfIAiAAgAqlAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(135.2,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCSDDS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_S_DCRDDR_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgIIACgHIAEgGIADgEQAEgDAJgCQAGgBAKgBIAqAAQAKABAHABIAGACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgARogUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAImAtQgJgBgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgZIAAgIIACgHIADgGIAFgEQADgDAIgCQAIgBAJgBIArAAQAJABAGABIAHACQAEABACACIAEAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJABgAIjgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAm/AtQgLgBgEgBIgGgDIgFgEIgEgEIgDgGQgBgDgBgLIAAg3IAaAAIAAAyIABAHIADAEQACACADABIAHABIAaAAIAHgBIAFgDIACgEIABgHIAAgyIAaAAIAAA3IgCAOIgCAGIgEAEIgFAEIgGADQgKABgGABgApDAtQgJgBgIgBIgMgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgIIACgHIAEgGIADgEQAEgDAIgCQAIgBAJgBIAqAAQAKABAHABIAGACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgApGgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgA3AAtQgJgBgHgBQgGgCgEgDQgEgDgBgGQgDgFAAgHIAAgLIAaAAIAAAIQABAEACACQADADAGAAIALAAQAHAAADgCIACgDIABgEIAAg5IAbAAIgBBDIgBAGIgDAFIgFAEQgEADgHACIgQABgAWjAsIAAhBIgmAAIAAgWIBlAAIAAAWIglAAIAABBgAVJAsIgzg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAbAAIAABXgATNAsIAAhXIAbAAIAABXgAPQAsIAAhXIBIAAQAHABAJACIAGADIAEADQADAEACAFQABAGAAAHIAAAHIgBAIQgBAGgDADQgDAFgFACQgHACgFAAIg1AAIAAAXgAPqAAIAqAAQAFAAABgBQADgDAAgEIAAgDQAAgFgDgCQgDgDgFAAIgoAAgAMQAsIAAhXIBRAAQAGAAAKACIAGADIAGADIADAEIADAFQACAFAAAJIAAAaQAAAHgCAGIgDAGIgDADIgGADIgGADIgQACgAMrAVIAvAAIAHgBIAFgCQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgALUAsIgyg+IAAAAIAAA+IgbAAIAAhXIApAAIAzA/IAAg/IAaAAIAABXgAHWAsIAAg+IgjA+IgUAAIgjg+IAAA+IgbAAIAAhXIAqAAIAeA3IAdg3IAqAAIAABXgAE7AsIgJgQIg2AAIgIAQIgdAAIAvhXIAiAAIAwBXgAEoAJIgRgfIgRAfIAiAAgACxAsIAAhXIAaAAIAABXgAArAsIAAhXIBQAAQAHAAAKACIAHADIAFADIADAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgDADIgFADIgHADIgRACgABFAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAiBAsIAAhXIBfAAIAAAVIhFAAIAAANIBBAAIAAASIhBAAIAAAOIBHAAIAAAVgAjjAsIAAhXIAaAAIAABAIA8AAIAAAXgAljAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQACAEgBAHIAAAJQgBADgCACIgEAEIgFABIAIABQADACABADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgEADgFABIgKABgAlIAXIAwAAIAHgCQADgBAAgDQAAgFgDgCQgDgBgEAAIgwAAgAlIgIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgArsAsIAAhXIBQAAQAHAAAKACIAGADIAGADIADAEIACAFQACAFAAAJIAAAaQAAAHgCAGIgCAGIgDADIgGADIgGADIgRACgArSAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAwZAsIAAhXIBNAAQAIABAFABQAHABADADQAFACACAFQABAEAAAHIgBAJQAAADgCACIgFAEIgEABIAHABQADACABADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgDADgFABIgLABgAv/AXIAwAAIAHgCQADgBAAgDQAAgFgDgCQgCgBgFAAIgwAAgAv/gIIAwAAQAEAAACgBQABgCAAgEQAAgEgBgBQgCgBgEAAIgwAAgAyZAsIgUg5IgVA5IgeAAIgchXIAaAAIASA/IAWg/IAZAAIAWA/IASg/IAbAAIgdBXgA0cAsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgA0uAJIgRgfIgRAfIAiAAgAtdAYIAAgWIAiAAIAAAWg");
	this.shape.setTransform(131.6,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AtQgJAAgIgCIgMgFIgDgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgGACQgHACgKAAgAOzgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgJIAAgHIgCgFIgGgEIgIgBIgfAAIgJABgAGGAtQgJAAgIgCIgLgFIgFgEIgDgFIgCgIIAAgIIAAgZIAAgJIACgGIADgGIAFgEQADgCAIgDQAIgCAJABIArAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgGACQgHACgJAAgAGDgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgJIAAgHIgCgFIgGgEIgIgBIgfAAIgJABgAEHAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQADgCAJgDQAHgCAKABIAeAAQAKAAAOABIAHACIAFAEIAEAEIACAGQACAGgBAJIgbAAIAAgCQAAgEgCgDQgDgBgHAAIgdAAIgIABIgFAEIgDAFIAAAHIAAAJIAAAIQAAADADACQABACADABIAHABIAkAAIAGgCIACgDIAAgHIAbAAIAAAJQABAGgCAEQgCAEgCAEQgFAEgGABQgJADgGAAgAkHAtQgLgBgEgCIgHgCIgFgDIgDgFIgDgFQgCgFAAgKIAAg2IAaAAIAAAxIACAHIACAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAbAAIAAA2IgDAPIgDAFIgDAFIgFADIgHACQgJADgGAAgAmLAtQgJAAgHgCIgMgFIgFgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAFgEQADgCAJgDQAHgCAJABIAqAAQAKgBAGACIAHACQADABADACIAEAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgEAEIgGADIgHACQgGACgKAAgAmOgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgJIgBgHIgDgFIgEgEIgJgBIggAAIgIABgA0LAtQgJAAgHgCQgGgBgEgEQgEgDgBgGQgCgFgBgHIAAgLIAaAAIAAAHQAAAGADABQADADAGAAIALAAQAHAAADgCIACgCIABgGIAAg3IAbAAIgBBCIgBAGIgDAGIgFADQgEADgHACIgQABgATuAsIAAhBIgmAAIAAgVIBlAAIAAAVIglAAIAABBgASUAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAQYAsIAAhWIAbAAIAABWgAMbAsIAAhWIBIAAQAHgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgBAGgDADQgDAFgFACQgGADgFgBIg1AAIAAAXgAM2AAIApAAQAEAAACgCQACgCABgEIAAgEQgBgEgCgCQgDgDgFAAIgnAAgAJvAsIAAhWIBfAAIAAAUIhEAAIAAAOIBAAAIAAARIhAAAIAAANIBGAAIAAAWgAI0AsIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAA2AsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBFAAIAAAWgAgrAsIAAhWIAbAAIAAA/IA6AAIAAAXgAiqAsIAAhWIBMAAQAIgBAGACQAGABAEACQAEAEACADQACAFAAAGIgBAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAIQAAAHgCAFQgCAEgEADQgDACgFABIgLACgAiQAWIAwAAIAHgBQACgBAAgDQAAgFgCgBQgCgCgFAAIgwAAgAiQgIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgBgDgBIgwAAgAo0AsIAAhWIBRAAQAGAAAKABIAGACIAFAEIAEAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgEAFIgFACIgGADIgQACgAoZAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAsJAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAsbAKIgRggIgRAgIAiAAgAvkAsIgUg5IgVA5IgfAAIgbhWIAaAAIASA+IAWg+IAZAAIAWA+IATg+IAaAAIgdBWgAxnAsIgIgQIg2AAIgIAQIgeAAIAwhWIAiAAIAwBWgAx5AKIgRggIgRAgIAiAAgAqlAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(131.6,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCRDDR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_S_DCGDDG_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAtQgJgBgHgBIgMgFIgFgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAFgEQADgDAJgCQAHgBAJgBIAqAAQAKABAGABIAHACQADABADACIAEAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgEAEIgGADIgHACQgGABgKABgARogUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAImAtQgJgBgIgBIgLgFIgEgEIgEgGIgCgHIAAgIIAAgZIAAgIIACgHIAEgGIAEgEQADgDAIgCQAIgBAJgBIArAAQAJABAHABIAGACQADABACACIAFAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgFAEIgFADIgGACQgHABgJABgAIjgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAm/AtQgLgBgEgBIgGgDIgGgEIgDgEIgDgGQgBgDgBgLIAAg3IAaAAIAAAyIABAHIADAEQABACADABIAHABIAbAAIAHgBIAEgDIADgEIABgHIAAgyIAbAAIAAA3IgDAOIgDAGIgDAEIgFAEIgHADQgJABgGABgApDAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgIIACgHIAEgGIADgEQAEgDAJgCQAGgBAKgBIAqAAQAKABAGABIAHACQAEABABACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgApGgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgA3AAtQgJgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIAKAAQAIAAADgCIACgDIACgEIAAg5IAaAAIgBBDIgCAGIgCAFIgFAEQgEADgHACIgQABgAWiAsIAAhBIglAAIAAgWIBlAAIAAAWIglAAIAABBgAVIAsIgxg+IgBAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgATOAsIAAhXIAaAAIAABXgAPQAsIAAhXIBJAAQAGABAJACIAGADIAEADQADAEACAFQABAGAAAHIAAAHIgBAIQgCAGgCADQgDAFgEACQgHACgGAAIg1AAIAAAXgAPqAAIAqAAQAFAAACgBQACgDgBgEIAAgDQABgFgCgCQgDgDgGAAIgoAAgAMQAsIAAhXIBQAAQAHAAAKACIAHADIAEADIAEAEIADAFQABAFAAAJIAAAaQAAAHgBAGIgDAGIgEADIgEADIgHADIgRACgAMqAVIAwAAIAHgBIAFgCQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgALUAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAxA/IAAg/IAbAAIAABXgAHVAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhXIAqAAIAdA3IAfg3IAoAAIAABXgAE6AsIgIgQIg2AAIgIAQIgdAAIAuhXIAjAAIAwBXgAEoAJIgRgfIgRAfIAiAAgACxAsIAAhXIAbAAIAABXgAArAsIAAhXIBRAAQAGAAAKACIAGADIAGADIADAEIADAFQACAFAAAJIAAAaQAAAHgCAGIgDAGIgDADIgGADIgGADIgQACgABGAVIAvAAIAHgBIAFgCQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAiBAsIAAhXIBfAAIAAAVIhEAAIAAANIBBAAIAAASIhBAAIAAAOIBFAAIAAAVgAjjAsIAAhXIAbAAIAABAIA7AAIAAAXgAliAsIAAhXIBMAAQAIABAGABQAGABAEADQAEACACAFQACAEAAAHIgBAJQgBADgCACIgEAEIgFABIAIABQACACACADQACACABAEIABAIQAAAIgCAEQgCAEgEADQgDADgFABIgLABgAlIAXIAwAAIAHgCQACgBABgDQgBgFgCgCQgCgBgFAAIgwAAgAlIgIIAwAAQADAAACgBQACgCAAgEQAAgEgCgBQgCgBgDAAIgwAAgArsAsIAAhXIBRAAQAGAAAKACIAGADIAGADIADAEIADAFQACAFAAAJIAAAaQAAAHgCAGIgDAGIgDADIgGADIgGADIgQACgArRAVIAvAAIAHgBIAFgCQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgCgCgDAAIgHgBIgvAAgAwZAsIAAhXIBNAAQAIABAFABQAGABAFADQAEACABAFQACAEAAAHIgBAJQgBADgCACIgDAEIgFABIAHABQADACABADQACACACAEIABAIQAAAIgCAEQgDAEgDADQgEADgEABIgLABgAv/AXIAxAAIAGgCQADgBAAgDQAAgFgDgCQgCgBgEAAIgxAAgAv/gIIAwAAQADAAACgBQACgCAAgEQAAgEgCgBQgCgBgDAAIgwAAgAyZAsIgUg5IgVA5IgfAAIgchXIAaAAIATA/IAWg/IAZAAIAWA/IATg/IAaAAIgcBXgA0bAsIgJgQIg2AAIgIAQIgdAAIAvhXIAiAAIAwBXgA0uAJIgRgfIgRAfIAiAAgAtdAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(134.2,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AtQgKAAgGgCIgNgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAGACIAHACQAEABABACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAOzgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgJIgBgHIgDgFIgEgEIgJgBIggAAIgIABgAGGAtQgKAAgGgCIgNgFIgDgEIgEgFIgCgIIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgGACQgHACgKAAgAGDgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAEGAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIAgAAQAJAAANABIAIACIAGAEIADAEIACAGQABAGAAAJIgbAAIAAgCQAAgEgDgDQgDgBgGAAIgdAAIgIABIgGAEIgCAFIAAAHIAAAJIAAAIQABADABACQACACADABIAIABIAkAAIAEgCIADgDIABgHIAbAAIAAAJQAAAGgCAEQgBAEgDAEQgEAEgGABQgKADgHAAgAkGAtQgMgBgEgCIgHgCIgEgDIgEgFIgDgFQgCgFAAgKIAAg2IAbAAIAAAxIABAHIACAFQABABAEABIAGABIAbAAIAHgBIAFgCIACgFIABgHIAAgxIAaAAIAAA2IgBAPIgEAFIgDAFIgFADIgGACQgKADgGAAgAmLAtQgJAAgIgCIgLgFIgFgEIgDgFIgCgIIAAgIIAAgZIAAgJIACgGIADgGIAFgEQADgCAIgDQAIgCAJABIArAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgGACQgHACgJAAgAmOgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgGgEIgIgBIgfAAIgJABgA0KAtQgKAAgGgCQgHgBgEgEQgEgDgCgGQgBgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIAKAAQAIAAADgCIADgCIABgGIAAg3IAaAAIAABCIgDAGIgCAGIgEADQgFADgHACIgQABgATtAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgASTAsIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAQZAsIAAhWIAaAAIAABWgAMbAsIAAhWIBIAAQAHgBAJADIAGACIAEAEQADAEACAGQABAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgEACQgHADgGgBIg1AAIAAAXgAM1AAIAqAAQAFAAACgCQACgCAAgEIAAgEQAAgEgCgCQgEgDgFAAIgoAAgAJvAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAI0AsIgyg+IgBAAIAAA+IgaAAIAAhWIAqAAIAxA+IAAg+IAbAAIAABWgAA2AsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBHAAIAAAWgAgrAsIAAhWIAaAAIAAA/IA8AAIAAAXgAirAsIAAhWIBNAAQAJgBAFACQAGABAEACQAEAEACADQABAFABAGIgBAJQgBAEgCACIgEADIgFACIAHACQAEABABACQACADABAEIABAIQAAAHgCAFQgCAEgDADQgEACgFABIgLACgAiQAWIAwAAIAHgBQACgBAAgDQAAgFgCgBQgDgCgEAAIgwAAgAiQgIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgBgEgBIgvAAgAo0AsIAAhWIBQAAQAHAAAKABIAHACIAEAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgEACIgHADIgRACgAoaAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAsIAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAsbAKIgRggIgRAgIAiAAgAvkAsIgVg5IgUA5IgfAAIgchWIAaAAIATA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAxmAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAx5AKIgRggIgRAgIAiAAgAqlAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(134.2,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCGDDG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_S_DCBDDB_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrAsQgJAAgIgBIgMgEIgDgFIgEgFIgCgHIAAgJIAAgZIAAgJIACgHIAEgFIADgEQAEgDAIgCQAIgBAJAAIArAAQAJAAAHABIAGACQADABADACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHABgJAAgARogUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgJIAAgHIgCgFIgGgEIgIgBIgfAAIgJABgAImAsQgKAAgGgBIgNgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAGABIAHACQAEABABACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAIjgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgJIgBgHIgDgFIgEgEIgJgBIggAAIgIABgAm+AsQgMAAgEgCIgHgCIgEgDIgEgFIgDgGQgCgDAAgKIAAg3IAbAAIAAAxIABAHIACAFQABACAEABIAGAAIAbAAIAHAAIAFgDIACgFIABgHIAAgxIAbAAIAAA3IgCANIgEAGIgDAFIgFADIgGACQgKACgGAAgApDAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgBAJAAIArAAQAJAAAHABIAGACQAEABACACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHABgJAAgApGgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgJIAAgHIgCgFIgGgEIgIgBIgfAAIgJABgA2/AsQgKAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAHQABAFACADQADACAGAAIAKAAQAIAAADgBIADgDIAAgGIAAg3IAbAAIAABCIgCAHIgDAEIgEAEQgFADgHABIgQABgAWjArIAAhAIgmAAIAAgVIBmAAIAAAVIgmAAIAABAgAVJArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgATNArIAAhVIAbAAIAABVgAPQArIAAhVIBIAAQAHAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGACgFABIg1AAIAAAVgAPrAAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgnAAgAMQArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIACAFQACAFABAJIAAAZQgBAJgCAFIgCAFIgDAFIgGADIgGACIgQABgAMrAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgALUArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAzA+IAAg+IAaAAIAABVgAHWArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhVIAoAAIAfA3IAeg3IApAAIAABVgAE6ArIgIgPIg2AAIgIAPIgeAAIAwhVIAiAAIAwBVgAEoAKIgRggIgRAgIAiAAgACxArIAAhVIAaAAIAABVgAArArIAAhVIBQAAQAHAAAKACIAHABIAEADIAEAFIACAFQACAFAAAJIAAAZQAAAJgCAFIgCAFIgEAFIgEADIgHACIgRABgABFAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAiBArIAAhVIBfAAIAAAUIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgAjjArIAAhVIAaAAIAAA/IA9AAIAAAWgAljArIAAhVIBNAAQAJAAAFABQAGABAEACQAEADACAEQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQAEABABACQACADABAEIABAJQAAAGgCAFQgCAEgDADQgEADgFAAIgLABgAlIAXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgDgCgEAAIgwAAgAlIgIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgBgEgBIgvAAgArsArIAAhVIBQAAQAHAAAKACIAHABIAEADIAEAFIADAFQABAFAAAJIAAAZQAAAJgBAFIgDAFIgEAFIgEADIgHACIgRABgArSAVIAwAAIAHAAIAFgDQACgBABgEIAAgIIAAgKIAAgIQgBgDgCgCQgCgBgDgBIgHgBIgwAAgAwZArIAAhVIBMAAQAJAAAGABQAFABAEACQAFADACAEQABAFAAAGIAAAJQgBAEgDACIgEADIgFACIAIACQADABACACQABADABAEIABAJQAAAGgCAFQgCAEgDADQgDADgGAAIgKABgAv+AXIAvAAIAIgBQACgCAAgEQAAgEgCgBQgDgCgFAAIgvAAgAv+gIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgBgEgBIgvAAgAyZArIgVg4IgUA4IgeAAIgchVIAZAAIATA/IAWg/IAZAAIAWA/IASg/IAbAAIgcBVgA0cArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgA0uAKIgRggIgRAgIAiAAgAtdAYIAAgVIAhAAIAAAVg");
	this.shape.setTransform(134.1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgGACQgHABgJAAgAOzgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAGGAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgAGDgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAEHAsQgKAAgHgBIgMgEIgEgFIgDgFIgDgHIAAgJIAAgZIAAgJIADgHIADgFIAEgEQAEgDAIgCQAHgCAKAAIAeAAQAKABAOACIAHACIAFADIAEAFIACAFQABAFABAKIgbAAIAAgCQAAgFgDgCQgEgBgGAAIgdAAIgJABIgEADIgDAGIgBAIIAAAIIABAIQABADACACQABACADABIAHABIAkAAIAGgCIACgEIAAgGIAbAAIAAAIQAAAGgBAFQgBAFgEADQgDADgHACQgJACgHAAgAkHAsQgLAAgEgCIgGgCIgGgEIgDgEIgDgGQgBgDgBgKIAAg3IAaAAIAAAxIABAHIADAEQABADADABIAIAAIAaAAIAHAAIAEgEIADgEIABgHIAAgxIAaAAIAAA3IgCANIgCAGIgEAEIgFAEIgHACQgJACgGAAgAmLAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAmOgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgEgDIgJgBIggAAIgIABgA0LAsQgJAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQABAFACACQADACAGAAIALAAQAHAAADgBIADgEIAAgEIAAg4IAbAAIgBBCIgBAHIgDAEIgFAEQgEADgHABIgQABgATuArIAAhAIgmAAIAAgVIBmAAIAAAVIgmAAIAABAgASUArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgAQYArIAAhVIAbAAIAABVgAMbArIAAhVIBJAAQAGAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgBAFgDAEQgDAEgEACQgIACgEABIg1AAIAAAVgAM2AAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgnAAgAJvArIAAhVIBfAAIAAAUIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBFAAIAAAUgAI0ArIgyg+IAAAAIAAA+IgbAAIAAhVIApAAIAzA+IAAg+IAaAAIAABVgAA2ArIAAhVIBfAAIAAAUIhFAAIAAANIBCAAIAAARIhCAAIAAAPIBGAAIAAAUgAgrArIAAhVIAbAAIAAA/IA6AAIAAAWgAirArIAAhVIBNAAQAJAAAFABQAGABAEACQAEAEACAEQABAEAAAGIAAAJQgBAEgCACIgEADIgFACIAIACQADABABACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgKABgAiQAXIAwAAIAHgBQACgCABgEQgBgEgCgBQgCgCgFAAIgwAAgAiQgIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgCgDABIgwAAgAo0ArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIACAFQADAFAAAJIAAAaQAAAHgDAGIgCAFIgDAEIgGAEIgGACIgQABgAoZAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAsJArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAsbAJIgRgfIgRAfIAiAAgAvkArIgVg4IgUA4IgeAAIgchVIAaAAIASA/IAWg/IAZAAIAWA/IASg/IAbAAIgdBVgAxnArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAx5AJIgRgfIgRAfIAiAAgAqlAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(134.1,-90.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCBDDB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


// stage content:
(lib.GRM_TipsKstyle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{K_style:0,Thick1k:10,Thick2k:19,Thick3k:28,Thick4k:37,K_SCB_SDB:45,K_SDB_SDB:55,K_DCB_DDB:64,K_DDB_DDB:73,K_DUB_DUB:82,K_SUB_SUB:91,K_SCS_SDS:100,K_SDS_SDS:109,K_DCS_DDS:118,K_DDS_DDS:127,K_DUS_DUS:136,K_SUS_SUS:142,K_SCG_SDG:148,K_SDG_SDG:157,K_DCG_DDG:166,K_DDG_DDG:175,K_DUG_DUG:184,K_SUG_SUG:191,K_SCR_SDR:198,K_SDR_SDR:207,K_DCR_DDR:216,K_DDR_DDR:225,K_DUR_DUR:234,K_SUR_SUR:241});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_Kmt1.addEventListener('click', playKmt1);
		function playKmt1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Kmt2.addEventListener('click', playKmt2);
		function playKmt2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Kmt3.addEventListener('click', playKmt3);
		function playKmt3(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Kmt4.addEventListener('click', playKmt4);
		function playKmt4(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_backJstK.addEventListener("click", fl_ClickToGoToWebbksty);
		function fl_ClickToGoToWebbksty() {
			window.open("GRM_TipsMain.html", "_self");
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		var self = this;
		
		this.btn_K_SCB_SDB.addEventListener('click', playSCBSDB);
		function playSCBSDB(evt) {
			var name = "K_SCB_SDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SDB_SDB.addEventListener('click', playSDBSDB);
		function playSDBSDB(evt) {
			var name = "K_SDB_SDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DCB_DDB.addEventListener('click', playDCBDDB);
		function playDCBDDB(evt) {
			var name = "K_DCB_DDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DDB_DDB.addEventListener('click', playDDBDDB);
		function playDDBDDB(evt) {
			var name = "K_DDB_DDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DUB_DUB.addEventListener('click', playDUBDUB);
		function playDUBDUB(evt) {
			var name = "K_DUB_DUB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SUB_SUB.addEventListener('click', playSUBSUB);
		function playSUBSUB(evt) {
			var name = "K_SUB_SUB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkKst.addEventListener('click', playbkKst);
		function playbkKst(evt) {
			var name = "K_style";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		var self = this;
		
		this.btn_K_SCS_SDS.addEventListener('click', playSCSSDS);
		function playSCSSDS(evt) {
			var name = "K_SCS_SDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SDS_SDS.addEventListener('click', playSDSSDS);
		function playSDSSDS(evt) {
			var name = "K_SDS_SDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DCS_DDS.addEventListener('click', playDCSDDS);
		function playDCSDDS(evt) {
			var name = "K_DCS_DDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DDS_DDS.addEventListener('click', playDDSDDS);
		function playDDSDDS(evt) {
			var name = "K_DDS_DDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DUS_DUS.addEventListener('click', playDUSDUS);
		function playDUSDUS(evt) {
			var name = "K_DUS_DUS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SUS_SUS.addEventListener('click', playSUSSUS);
		function playSUSSUS(evt) {
			var name = "K_SUS_SUS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkKst.addEventListener('click', playbkKst);
		function playbkKst(evt) {
			var name = "K_style";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		var self = this;
		
		this.btn_K_SCG_SDG.addEventListener('click', playSCGSDG);
		function playSCGSDG(evt) {
			var name = "K_SCG_SDG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SDG_SDG.addEventListener('click', playSDGSDG);
		function playSDGSDG(evt) {
			var name = "K_SDG_SDG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DCG_DDG.addEventListener('click', playDCGDDG);
		function playDCGDDG(evt) {
			var name = "K_DCG_DDG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DDG_DDG.addEventListener('click', playDDGDDG);
		function playDDGDDG(evt) {
			var name = "K_DDG_DDG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DUG_DUG.addEventListener('click', playDUGDUG);
		function playDUGDUG(evt) {
			var name = "K_DUG_DUG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SUG_SUG.addEventListener('click', playSUGSUG);
		function playSUGSUG(evt) {
			var name = "K_SUG_SUG";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkKst.addEventListener('click', playbkKst);
		function playbkKst(evt) {
			var name = "K_style";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		var self = this;
		
		this.btn_K_SCR_SDR.addEventListener('click', playSCRSDR);
		function playSCRSDR(evt) {
			var name = "K_SCR_SDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SDR_SDR.addEventListener('click', playSDRSDR);
		function playSDRSDR(evt) {
			var name = "K_SDR_SDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DCR_DDR.addEventListener('click', playDCRDDR);
		function playDCRDDR(evt) {
			var name = "K_DCR_DDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DDR_DDR.addEventListener('click', playDDRDDR);
		function playDDRDDR(evt) {
			var name = "K_DDR_DDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_DUR_DUR.addEventListener('click', playDURDUR);
		function playDURDUR(evt) {
			var name = "K_DUR_DUR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_K_SUR_SUR.addEventListener('click', playSURSUR);
		function playSURSUR(evt) {
			var name = "K_SUR_SUR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkKst.addEventListener('click', playbkKst);
		function playbkKst(evt) {
			var name = "K_style";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_45 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_63 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_73 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_81 = function() {
		this.stop();
	}
	this.frame_82 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_90 = function() {
		this.stop();
	}
	this.frame_91 = function() {
		var self = this;
		
		this.btn_1kBACK.addEventListener('click', playbkK1);
		function playbkK1(evt) {
			var name = "Thick1k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_108 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_117 = function() {
		this.stop();
	}
	this.frame_118 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_126 = function() {
		this.stop();
	}
	this.frame_127 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_135 = function() {
		this.stop();
	}
	this.frame_136 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_141 = function() {
		this.stop();
	}
	this.frame_142 = function() {
		var self = this;
		
		this.btn_2kBACK.addEventListener('click', playbkK2);
		function playbkK2(evt) {
			var name = "Thick2k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_147 = function() {
		this.stop();
	}
	this.frame_148 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_156 = function() {
		this.stop();
	}
	this.frame_157 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_165 = function() {
		this.stop();
	}
	this.frame_166 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_174 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_183 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_191 = function() {
		var self = this;
		
		this.btn_3kBACK.addEventListener('click', play_bk3k);
		function play_bk3k(evt) {
			var name = "Thick3k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_197 = function() {
		this.stop();
	}
	this.frame_198 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_206 = function() {
		this.stop();
	}
	this.frame_207 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_215 = function() {
		this.stop();
	}
	this.frame_216 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_224 = function() {
		this.stop();
	}
	this.frame_225 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_233 = function() {
		this.stop();
	}
	this.frame_234 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_240 = function() {
		this.stop();
	}
	this.frame_241 = function() {
		var self = this;
		
		this.btn_4kBACK.addEventListener('click', play_bk4k);
		function play_bk4k(evt) {
			var name = "Thick4k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_247 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(8).call(this.frame_18).wait(1).call(this.frame_19).wait(8).call(this.frame_27).wait(1).call(this.frame_28).wait(8).call(this.frame_36).wait(1).call(this.frame_37).wait(7).call(this.frame_44).wait(1).call(this.frame_45).wait(9).call(this.frame_54).wait(1).call(this.frame_55).wait(8).call(this.frame_63).wait(1).call(this.frame_64).wait(8).call(this.frame_72).wait(1).call(this.frame_73).wait(8).call(this.frame_81).wait(1).call(this.frame_82).wait(8).call(this.frame_90).wait(1).call(this.frame_91).wait(8).call(this.frame_99).wait(1).call(this.frame_100).wait(8).call(this.frame_108).wait(1).call(this.frame_109).wait(8).call(this.frame_117).wait(1).call(this.frame_118).wait(8).call(this.frame_126).wait(1).call(this.frame_127).wait(8).call(this.frame_135).wait(1).call(this.frame_136).wait(5).call(this.frame_141).wait(1).call(this.frame_142).wait(5).call(this.frame_147).wait(1).call(this.frame_148).wait(8).call(this.frame_156).wait(1).call(this.frame_157).wait(8).call(this.frame_165).wait(1).call(this.frame_166).wait(8).call(this.frame_174).wait(1).call(this.frame_175).wait(8).call(this.frame_183).wait(1).call(this.frame_184).wait(6).call(this.frame_190).wait(1).call(this.frame_191).wait(6).call(this.frame_197).wait(1).call(this.frame_198).wait(8).call(this.frame_206).wait(1).call(this.frame_207).wait(8).call(this.frame_215).wait(1).call(this.frame_216).wait(8).call(this.frame_224).wait(1).call(this.frame_225).wait(8).call(this.frame_233).wait(1).call(this.frame_234).wait(6).call(this.frame_240).wait(1).call(this.frame_241).wait(6).call(this.frame_247).wait(1));

	// Titles
	this.instance = new lib.txt_TipCombos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(313.1,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(248));

	// Layer 34
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYAwIgRgBQgHgCgEgCQgFgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAHAAIAjAAQAGAAACgBIADgDIABgEIgBgFIgFgDIgMgBIgWAAIgagBIgJgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGAEgEIAEgDIAHgDIAJgBIA1gBQAIAAALACIAHACIAEADQAEAEABAFIABAMIAAADIgdAAQAAgGgCgCIgEgBIgogBQgFAAgDABQgDADAAADIABAFIAFACQAFACAYAAIAbABIAKABIAHACIAFAEIAEAEIABAIIABAJIgCAPIgDAFIgEAEIgGADIgIABIgYABgArtAwQgKAAgHgCQgHgCgEgDQgFgDgCgGQgCgGAAgIIAAgLIAdAAIAAAIQAAAFADACQACACAHABIAMAAQAIAAADgCIADgDIABgFIAAg9IAdAAIAAA/IgBAJIgCAHIgDAFIgFAFQgFACgHACIgSABgAKZAvIgpgkIgNAAIAAAkIgdAAIAAhdIAdAAIAAAiIANAAIAlgiIAnAAIgzAuIA5AvgAEYAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAATIhHAAIAAAPIBMAAIAAAWgACkAvIAAhdIAcAAIAABFIBBAAIAAAYgAA+AvIAAghIg0g8IAiAAIAgAnIAggnIAjAAIg0A8IAAAhgAhIAvIAAhGIgpAAIAAgXIBuAAIAAAXIgoAAIAABGgAmZAvIgWg9IgBAAIgWA9IghAAIgehdIAcAAIAUBEIAAAAIAYhEIAbAAIAYBEIAAAAIAUhEIAcAAIgeBdgAoxAvIgJgRIg7AAIgIARIggAAIAzhdIAlAAIA0BdgApFAKIgTgjIgSAjIAlAAgAL/AFIAAgzIAUAAIAAAzgALfAFIAAgzIATAAIAAAzgAINAFIAAgzIAUAAIAAAzgAHtAFIAAgzIAUAAIAAAzg");
	this.shape.setTransform(372.2,13.8);

	this.instance_1 = new lib.TopBar_GRMtc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(374.5,13.9,1,1,0,0,0,374.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhRCoIAAiBIBwAAQAMAAAJACQAJACAFADQAGAFADAGQADAHAAAIQAAAJgCAFQgBAFgCAEQgCADgFABIgHADIAAABIALADQAEACADAEQADAEACAFIAAANQAAAJgCAIQgDAGgFAEQgGAEgHABQgHABgIABgAgqCIIBGAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhGAAgAgqBaIBFAAQAGAAADgCQACgDAAgFQAAgGgCgCQgDgCgGAAIhFAAgAjrglQgOAAgKgCQgJgCgGgFQgGgFgDgIQgCgIgBgLIAAgPIAnAAIAAALQAAAHAEADQAEADAJAAIAQAAQALAAAEgCQACgBACgDIABgHIAAhUIAoAAIAABXIgCAMQAAAGgCAEQgBAEgDADIgHAFQgGAFgLACQgJABgPAAgADHgmIgdhVIgfBVIgtAAIgqiAIAnAAIAbBeIABAAIAgheIAlAAIAgBeIABAAIAbheIAnAAIgqCAgAAHgmIgMgXIhPAAIgMAXIgsAAIBGiAIAzAAIBGCAgAgThZIgZgwIgZAwIAyAAg");
	this.shape_1.setTransform(37.7,193.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAyCnIgMgWIhPAAIgLAWIgsAAIBGiAIAxAAIBHCAgAAXB1IgYgxIgZAxIAxAAgAjrgkQgOAAgJgDQgKgCgGgFQgGgFgDgIQgDgIABgLIAAgQIAmAAIAAAMQAAAHAEAEQAEADAJAAIAQAAQALgBAEgCQACgBACgDIABgHIAAhVIAnAAIAABYIgBAMQAAAFgCAEQgCAFgCADIgGAGQgHAEgLACQgJACgPAAgADIgmIgehVIgfBVIgtAAIgqiBIAnAAIAbBfIABAAIAghfIAlAAIAgBfIABAAIAbhfIAnAAIgqCBgAAHgmIgMgWIhPAAIgMAWIgsAAIBGiBIAzAAIBGCBgAgThYIgZgxIgZAxIAyAAg");
	this.shape_2.setTransform(37.6,126.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ae/BIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAYSBIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIBFAAQAPAAALADIALADIAIAEIAHAHIAGAJIADALIABAOIAAApIgBAOIgDALIgGAJIgHAHIgIAFIgLADQgLACgPAAgAYOghQgFACgEAEQgCADgBAGIgBAMIAAAOIABANQABAFACADQADAEAFABQAEACAIAAIA3AAQAIAAAFgCQAEgBADgEQADgDABgFIABgNIAAgOIgBgMQgBgGgDgDQgDgEgFgCQgGgBgIAAIgyAAQgJAAgFABgAOCBIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgDgEgDgFIgDgLIgBgOIAAgpIABgOIADgLQADgFADgEQADgEAEgDQAFgDAOgEQALgDAPAAIBFAAQAPAAALADIALADIAJAEIAGAHIAGAJIADALIABAOIAAApIgBAOIgDALIgGAJIgGAHIgJAFIgLADQgLACgPAAgAN+ghQgGACgDAEQgCADgCAGIAAAMIAAAOIAAANQACAFACADQADAEAFABQAFACAHAAIA3AAQAIAAAEgCQAFgBADgEQADgDABgFIABgNIAAgOIgBgMQgBgGgDgDQgDgEgGgCQgFgBgIAAIgyAAQgJAAgFABgAkPBGQgKgCgHgEQgGgFgEgHQgEgIAAgMIAAgLQAAgIACgGQABgGAEgCQADgEAGgBQAGgCAJAAI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");
	this.shape_3.setTransform(384.4,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFPBCQgPAAgIgCQgKgBgGgEQgGgEgCgHQgDgGAAgLIAAgJIAnAAIABAIQABADACACQAEACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgEQAAgEgBgCQgCgDgGgBIgQgCIgeAAIgkgBIgLgDIgIgDQgEgCgCgDIgDgGQgCgHAAgNQAAgKABgGQACgIAEgFQADgDADgCQAEgCAFgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgVAAgAsNBCQgOAAgKgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAEADAKAAIAPAAQALAAAFgDQACgBABgDIACgHIAAhTIAnAAIAABWIgBAMQgBAGgBAEQgCAEgDADIgGAGQgHAEgKACQgKACgOAAgAKcBAIAAh/IByAAQAMAAAIABQAJACAGAEQAGAEADAHQADAGAAAJQgBAIgBAGQgCAFgCADQgCADgEACIgHADIAAAAIAKACQAFADADADQACAEACAGIABAMQAAAKgDAHQgDAHgFAEQgFADgHACQgHABgJAAgALEAhIBGAAQAHAAAEgCQADgCAAgFQAAgGgDgDQgEgCgHAAIhGAAgALEgMIBFAAQAGAAADgDQADgCAAgFQAAgGgDgCQgDgCgGAAIhFAAgAHYBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEABAEQADAIABAMIAAAnQgBAMgDAIQgBAEgCAEQgCADgEADQgCADgFABIgJAEQgPACgKAAgAIAAfIBGAAIALgBQAEgBADgCQACgDACgFIABgLIAAgQIgBgMQgCgEgCgDQgDgCgEgBIgLgBIhGAAgAicBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAGAEACAHQADAGAAAJQAAAIgCAGQgBAFgBADQgCADgFACIgHADIAAAAIALACQAEADACADQADAEACAGIABAMQAAAKgEAHQgCAHgEAEQgGADgHACQgHABgJAAgAh1AhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAh1gMIBGAAQAGAAADgDQADgCAAgFQAAgGgDgCQgDgCgGAAIhGAAgAlaBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAobBAIgMgWIhPAAIgNAWIgrAAIBFh/IA0AAIBHB/gAo1AOIgagwIgZAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_4.setTransform(579.1,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AISBCQgOAAgJgCQgNgEgFgDIgHgHQgDgDgBgFIgDgKIgBgNIAAglIABgNIADgKQABgFADgDIAHgHQAFgDANgEQAJgCAOAAIAvAAQAOAAATADIAMADIAHAFIAGAGIADAJQACAIAAAPIgoAAIAAgEQAAgGgEgDQgFgDgJAAIgrAAQgIAAgFACQgEACgDADQgDADAAAFIgBALIAAANIABAMQABAFABADQADADAFABQAEACAHAAIA1gBIAIgCQACgCABgEIABgJIAoAAIAAAMQgBAJgBAGQgDAIgEAEQgGAGgJADQgOADgKAAgAFVBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQACAGgBAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsLBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQAMAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgOAAgAKaBAIAAh/IBxAAQAMAAAJABQAJACAFAEQAGAEADAHQADAGAAAJQAAAIgCAGQgBAFgCADQgCADgFACIgHADIAAAAQAHAAAEACQAEADADADQADAEACAGIABAMQAAAKgEAHQgCAHgFAEQgGADgHACQgHABgJAAgALBAhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgALBgMIBGAAQAGAAADgDQADgCAAgFQAAgGgDgCQgDgCgGAAIhGAAgAgTBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAguAOIgZgwIgZAwIAyAAgAlXBAIgehUIgeBUIgtAAIgqh/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgqB/gAoYBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAozAOIgagwIgZAwIAzAAgAB/AjIAAggIAxAAIAAAgg");
	this.shape_5.setTransform(175.1,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AFQBCQgOAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgCAAgEQAAgEgBgCQgCgDgFgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgDgDIgDgGQgCgHAAgNQAAgKABgGQACgIAFgFQACgDAEgCQADgCAGgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgnAAQAAgHgDgDIgGgCIg2gBQgIAAgDACQgFADAAAFQABAEABADQACACAEABQAHABAgAAIAnABIAMACIAKAEIAHAFIAFAGIADAKIAAAMQgBAQgBAFIgFAHIgGAGIgHADIgMACQgLACgVAAgAsPBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAKfBAIAAh/IBxAAQAMAAAIABQAJACAGAEQAGAEADAHQACAGAAAJQAAAIgBAGQgCAFgCADQgCADgEACIgIADIAAAAQAHAAAEACQAFADACADQADAEACAGIABAMQAAAKgDAHQgCAHgGAEQgFADgIACQgGABgJAAgALGAhIBHAAQAGAAAEgCQADgCAAgFQAAgGgDgDQgEgCgGAAIhHAAgALGgMIBGAAQAFAAADgDQADgCAAgFQAAgGgDgCQgDgCgFAAIhGAAgAHaBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgJAEQgPACgKAAgAIBAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAgYBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgzAOIgZgwIgZAwIAyAAgAlcBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAocBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo3AOIgagwIgZAwIAzAAgAB7AjIAAggIAxAAIAAAgg");
	this.shape_6.setTransform(175.1,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AsUBBQgPAAgJgDQgJgBgHgGQgFgFgEgHQgCgIAAgLIAAgQIAmAAIAAALQABAIAEADQAEADAIAAIAQAAQALAAAFgCQACgCABgDIABgHIAAhTIAoAAIAABXIgBALQgBAGgCAEQgBAFgDADIgGAFQgGAEgLACQgKACgOAAgAKkA/IAAh/IBxAAQAMAAAIABQAJACAGAFQAGAEACAGQADAHAAAJQAAAHgBAGQgCAFgCADQgCAEgEACIgIACIAAAAIALACQAFADACAEQADADACAGIABAMQAAALgDAGQgCAHgGAEQgFADgIACQgGACgJgBgALLAhIBHAAQAGAAAEgCQADgDAAgFQAAgGgDgCQgEgCgGAAIhHAAgALLgNIBGAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIhGAAgAHfA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgJADQgPADgKgBgAIGAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAEZA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQACADACAFQADAHAAANIAAAmQAAAMgDAIQgCAFgCADQgCADgDADQgEADgDACIgKADQgPADgKgBgAFAAfIBHAAIAKgCQAFgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgFgBIgKgBIhHAAgAijA/IAAh/IByAAQAMAAAIABQAIACAHAFQAFAEADAGQADAHAAAJQAAAHgBAGQgCAFgDADQgCAEgDACIgIACIAAAAIALACQAEADADAEQADADABAGIABAMQgBALgCAGQgCAHgGAEQgEADgIACQgGACgKgBgAh8AhIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgCgHAAIhHAAgAh8gNIBGAAQAFAAADgDQAEgCAAgFQAAgFgEgDQgDgCgFAAIhGAAgAlhA/IgdhTIgeBTIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAnAAIgqB/gAohA/IgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo8ANIgagwIgZAwIAzAAgABxAiIAAggIAyAAIAAAgg");
	this.shape_7.setTransform(579.2,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AIaBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIAuAAQAOAAAUADIALADIAIAFIAFAGIADAJQACAIAAAPIgnAAIAAgEQgBgGgFgDQgDgDgKAAIgrAAQgHAAgGACQgEACgDADQgCADgCAFIgBALIAAANIABAMQABAFACADQADADAEABQAFACAHAAIA1gBIAHgCQADgCABgEIABgJIAnAAIAAAMQABAJgCAGQgDAIgFAEQgFAGgIADQgPADgKAAgAsSBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAQAAQALAAAEgDQACgBACgDIABgHIAAhTIAoAAIAABWIgCAMQAAAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgPAAgAKhBAIAAh/IBxAAQANAAAIABQAJACAFAEQAHAEACAHQADAGAAAJQAAAIgCAGQgBAFgCADQgCADgFACIgHADIAAAAQAGAAAFACQAFADACADQADAEABAGIABAMQAAAKgCAHQgDAHgFAEQgFADgIACQgHABgIAAgALIAhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgALIgMIBGAAQAGAAADgDQACgCAAgFQAAgGgCgCQgDgCgGAAIhGAAgAEfBAIAAh/IB3AAQALAAAOACIAKADIAHAFQAEADABADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgBADgEADQgDADgEABIgKAEQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgaBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1AOIgZgwIgZAwIAyAAgAleBAIgehUIgeBUIguAAIgph/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIAAAAIAbhdIAnAAIgqB/gAofBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6AOIgZgwIgaAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_8.setTransform(175.1,38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AsWBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgDgHAAgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAPAAQALAAAFgCQACgBACgEIABgGIAAhUIAnAAIAABXIgBALQAAAGgCAEQgCAEgDADIgGAGQgGAFgLABQgJACgPAAgAKlA/IAAh/IByAAQAMAAAIABQAJACAGAEQAGAEACAHQADAGAAAKQAAAHgBAGQgCAFgCADQgCAEgEACIgIACIAAAAQAHABAEACQAFACACADQADAFACAFIABANQAAAJgDAIQgDAGgFAEQgFADgIACQgGABgJAAgALMAgIBHAAQAHAAADgBQAEgCAAgGQAAgGgEgDQgDgBgHAAIhHAAgALMgNIBGAAQAGAAADgCQADgDAAgFQAAgFgDgDQgDgCgGAAIhGAAgAHgA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACADQADAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPACgKAAgAIIAfIBGAAIALgBQAEgBADgDQADgDABgFIABgLIAAgQIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAEbA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQAEADACADQACAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgCADQgCADgEADQgDADgEACIgJADQgPACgKAAgAFCAfIBGAAIALgBQAFgBACgDQADgDACgFIABgLIAAgQIgBgLQgCgFgDgDQgCgCgFgBIgLgBIhGAAgAgeA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAg5ANIgagwIgZAwIAzAAgAljA/IgehTIgeBTIgtAAIgqh/IAnAAIAbBeIAAAAIAhheIAkAAIAhBeIABAAIAbheIAmAAIgpB/gAokA/IgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo/ANIgZgwIgZAwIAyAAgAB0AiIAAgfIAxAAIAAAfg");
	this.shape_9.setTransform(175.1,38.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AIWBBQgRgBgGgCIgJgDIgIgGIgFgHIgEgIQgCgGgBgPIAAhRIAnAAIAABJQAAAGABAEQABAFADACQADADAEACQAEABAGAAIAnAAQAGAAAEgBQAFgCACgDQADgCABgFQABgEAAgGIAAhJIAnAAIAABRQgBAPgCAGIgEAIIgFAHIgIAGIgJADQgOADgJAAgAsQBBQgOAAgJgDQgKgBgGgGQgGgFgDgHQgCgIAAgLIAAgQIAmAAIAAALQAAAIAEADQAEADAJAAIAQAAQALAAAEgCQADgCABgDIABgHIAAhTIAoAAIAABXIgBALQgBAGgCAEQgBAFgDADIgGAFQgHAEgKACQgKACgOAAgAKfA/IAAh/IBxAAQAMAAAJABQAIACAGAFQAGAEADAGQADAHAAAJQAAAHgCAGQgBAFgDADQgCAEgEACIgHACIAAAAIALACQAEADADAEQADADABAGIABAMQAAALgDAGQgCAHgGAEQgFADgHACQgHACgJgBgALGAhIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgCgHAAIhHAAgALGgNIBGAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIhGAAgAEdA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPADgKgBgAFFAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAifA/IAAh/IByAAQAMAAAIABQAJACAGAFQAGAEACAGQACAHAAAJQAAAHAAAGQgCAFgCADQgCAEgEACIgIACIAAAAIALACQAFADACAEQACADACAGIABAMQAAALgDAGQgCAHgFAEQgFADgIACQgGACgJgBgAh4AhIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgCgHAAIhHAAgAh4gNIBGAAQAGAAADgDQADgCAAgFQAAgFgDgDQgDgCgGAAIhGAAgAlcA/IgehTIgeBTIguAAIgqh/IAnAAIAbBdIABAAIAghdIAlAAIAhBdIAAAAIAbhdIAnAAIgqB/gAodA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo4ANIgagwIgZAwIAzAAgAB2AiIAAggIAyAAIAAAgg");
	this.shape_10.setTransform(579.1,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AIZBBQgSgBgGgCIgJgDIgIgGIgFgGIgEgIQgCgHgBgPIAAhRIAnAAIAABJQAAAGABAFQABAEADACQADAEAEABQAEABAGAAIAoAAQAFAAAEgBQAFgBADgEQACgCABgEQABgFAAgGIAAhJIAoAAIAABRQgBAPgDAHIgEAIIgFAGIgHAGIgJADQgPADgJAAgAsSBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgCgHgBgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAQAAQALAAAEgCQACgBACgEIABgGIAAhUIAoAAIAABXIgCALQAAAGgCAEQgBAEgDADIgHAGQgGAFgLABQgJACgPAAgAKhA/IAAh/IBxAAQANAAAIABQAJACAFAEQAHAEACAHQADAGAAAKQAAAHgCAGQgBAFgCADQgCAEgFACIgHACIAAAAQAGABAFACQAFACACADQADAFABAFIABANQAAAJgCAIQgDAGgFAEQgFADgIACQgHABgIAAgALIAgIBHAAQAHAAADgBQAEgCAAgGQAAgGgEgDQgDgBgHAAIhHAAgALIgNIBGAAQAGAAADgCQACgDAAgFQAAgFgCgDQgDgCgGAAIhGAAgAEfA/IAAh/IB3AAQALAAAOACIAKAEIAHAEQAEADABADQADAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgDADQgBADgEADQgDADgEACIgKADQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgDQADgDACgFIABgLIAAgQIgBgLQgCgFgDgDQgDgCgEgBIgLgBIhGAAgAgaA/IgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1ANIgZgwIgZAwIAyAAgAleA/IgehTIgeBTIguAAIgph/IAmAAIAbBeIABAAIAhheIAkAAIAhBeIAAAAIAbheIAnAAIgqB/gAofA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6ANIgZgwIgaAwIAzAAgAB4AiIAAgfIAyAAIAAAfg");
	this.shape_11.setTransform(175.1,38.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AIPBCQgRgBgGgCIgJgEIgHgFIgGgHIgEgIQgCgGgBgPIAAhRIAnAAIAABJQAAAGACAEQAAAFADACQADADAEABQAEACAGAAIAnAAQAGAAAFgCQAEgBACgDQADgCABgFQABgEABgGIAAhJIAmAAIAABRQgBAPgBAGIgFAIIgFAHIgIAFIgJAEQgOADgJAAgAFTBCQgPAAgIgCQgKgBgGgEQgGgEgCgHQgDgGAAgLIAAgJIAnAAIABAIQABADACACQAEACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgEQAAgEgBgCQgCgDgGgBIgQgCIgeAAIgkgBIgLgDIgIgDQgEgCgCgDIgDgGQgCgHAAgNQAAgKABgGQACgIAEgFQADgDADgCQAEgCAFgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGABAJIAAAEIgoAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgLACQgMACgVAAgAsJBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQADgBABgDIABgHIAAhTIAnAAIAABWIAAAMQgBAGgCAEQgCAEgDADIgGAGQgGAEgKACQgKACgOAAgAKYBAIAAh/IByAAQAMAAAIABQAIACAHAEQAFAEADAHQADAGAAAJQAAAIgBAGQgCAFgDADQgCADgDACIgIADIAAAAIALACQAEADADADQADAEABAGIACAMQgBAKgDAHQgCAHgGAEQgEADgIACQgGABgKAAgAK/AhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAK/gMIBGAAQAFAAADgDQAEgCAAgFQAAgGgEgCQgDgCgFAAIhGAAgAiYBAIAAh/IBxAAQAMAAAJABQAIACAHAEQAEAEADAHQADAGAAAJQAAAIgCAGQgBAFgCADQgCADgDACIgIADIAAAAIALACQADADADADQADAEACAGIABAMQAAAKgEAHQgCAHgFAEQgFADgHACQgHABgJAAgAhxAhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAhxgMIBGAAQAFAAAEgDQADgCAAgFQAAgGgDgCQgEgCgFAAIhGAAgAlWBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAoWBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAoxAOIgagwIgZAwIAzAAgAB9AjIAAggIAyAAIAAAgg");
	this.shape_12.setTransform(579.2,37.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AIRBCQgQgBgHgCIgJgEIgHgFIgGgHIgEgIQgCgGgBgPIAAhRIAnAAIAABJQAAAGACAEQABAFACACQADADAEABQAEACAGAAIAoAAQAFAAAFgCQAEgBADgDQACgCABgFQACgEgBgGIAAhJIAnAAIAABRQgBAPgCAGIgDAIIgGAHIgIAFIgJAEQgOADgJAAgAFVBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQACAGgBAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsLBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQAMAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgOAAgAKaBAIAAh/IBxAAQAMAAAJABQAJACAFAEQAGAEADAHQADAGAAAJQAAAIgCAGQgBAFgCADQgCADgFACIgHADIAAAAQAHAAAEACQAEADADADQADAEACAGIABAMQAAAKgEAHQgCAHgFAEQgGADgHACQgHABgJAAgALBAhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgALBgMIBGAAQAGAAADgDQADgCAAgFQAAgGgDgCQgDgCgGAAIhGAAgAgTBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAguAOIgZgwIgZAwIAyAAgAlXBAIgehUIgeBUIgtAAIgqh/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgqB/gAoYBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAozAOIgagwIgZAwIAzAAgAB/AjIAAggIAxAAIAAAgg");
	this.shape_13.setTransform(175.1,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ALPBCQgPAAgJgCQgJgBgGgEQgGgEgCgHQgEgGAAgLIAAgJIAoAAIABAIQABADACACQADACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgEQAAgEgBgCQgCgDgFgBIgRgCIgeAAIgjgBIgMgDIgJgDQgDgCgCgDIgEgGQgCgHAAgNQAAgKACgGQABgIAFgFQACgDAFgCQADgCAGgCIAMgCIBHgBQAMAAAPADIAJADIAHAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgDgDIgGgCIg2gBQgHAAgEACQgEADAAAFQAAAEACADQABACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAFAGIACAKIAAAMQAAAQgCAFIgEAHIgGAGIgIADIgLACQgLACgWAAgAFRBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsLBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAQAAQAKAAAFgDQACgBACgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgBAEgEADIgFAGQgHAEgKACQgKACgPAAgAHaBAIAAh/IB3AAQAKAAAPACIAKADIAGAFQAEADACADQACAEABAEQAEAIAAAMIAAAnQAAAMgEAIQgBAEgCAEQgCADgEADQgDADgDABIgKAEQgPACgKAAgAICAfIBGAAIAKgBQAFgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgFgBIgKgBIhGAAgAiZBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAFAEACAHQADAGABAJQAAAIgCAGQgBAFgDADQgBADgEACIgIADIAAAAIAMACQADADACADQAEAEABAGIABAMQAAAKgDAHQgCAHgFAEQgFADgIACQgGABgJAAgAhzAhIBHAAQAHAAADgCQAEgCABgFQgBgGgEgDQgCgCgIAAIhHAAgAhzgMIBHAAQAFAAADgDQADgCAAgFQAAgGgDgCQgDgCgFAAIhHAAgAlXBAIgehUIgeBUIguAAIgqh/IAoAAIAbBdIAAAAIAghdIAlAAIAhBdIAAAAIAbhdIAnAAIgpB/gAoYBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAozAOIgagwIgYAwIAyAAgAB7AjIAAggIAxAAIAAAgg");
	this.shape_14.setTransform(579.1,37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ALMBCQgOAAgJgCQgKgBgFgEQgGgEgDgHQgDgGAAgLIAAgJIAoAAIAAAIQACADACACQADACAKAAIAvAAQAJAAADgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgCABgEQgBgEgBgCQgCgDgFgBIgRgCIgdAAIgkgBIgLgDIgJgDQgEgCgCgDIgDgGQgCgHAAgNQAAgKACgGQABgIAEgFQADgDAEgCQADgCAGgCIAMgCIBIgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGAAAJIAAAEIgnAAQgBgHgDgDIgFgCIg2gBQgHAAgFACQgDADAAAFQgBAEACADQABACAGABQAGABAgAAIAmABIAOACIAKAEIAHAFIAEAGIACAKIABAMQgBAQgCAFIgDAHIgHAGIgIADIgLACQgLACgVAAgAIVBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgBgFIgDgKIgCgNIAAglIACgNIADgKQABgFADgDIAGgHQAFgDANgEQAKgCAOAAIAvAAQAOAAATADIALADIAIAFIAFAGIAEAJQACAIAAAPIgoAAIAAgEQAAgGgFgDQgEgDgKAAIgqAAQgIAAgFACQgFACgDADQgCADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAFACAGAAIA1gBIAIgCQACgCACgEIABgJIAnAAIAAAMQAAAJgBAGQgDAIgFAEQgFAGgJADQgOADgKAAgAFYBCQgPAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIACAIQABADACACQADACAJAAIAxAAQAHAAAEgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgCgDIgEgGQgCgHAAgNQAAgKABgGQACgIAFgFQACgDAEgCQAEgCAFgCIAMgCIBIgBQALAAAQADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgCgDIgGgCIg3gBQgGAAgEACQgEADgBAFQAAAEACADQABACAFABQAHABAhAAIAmABIAMACIAKAEIAHAFIAFAGIACAKIABAMQAAAQgCAFIgFAHIgFAGIgIADIgMACQgLACgVAAgAsJBCQgNAAgKgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAJAAIAPAAQALAAAEgDQADgBACgDIABgHIAAhTIAnAAIAABWIgBAMQgBAGgBAEQgCAEgDADIgGAGQgGAEgLACQgJACgPAAgAgQBAIgNgWIhQAAIgMAWIgsAAIBHh/IAzAAIBFB/gAgrAOIgagwIgZAwIAzAAgAlVBAIgehUIgeBUIgtAAIgrh/IAnAAIAbBdIABAAIAghdIAlAAIAhBdIABAAIAbhdIAmAAIgpB/gAoWBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBHB/gAoxAOIgZgwIgZAwIAyAAgACCAjIAAggIAxAAIAAAgg");
	this.shape_15.setTransform(175.1,38.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ALRBCQgPAAgIgCQgKgBgGgEQgGgEgCgHQgDgGAAgLIAAgJIAnAAIABAIQABADACACQAEACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgEQAAgEgBgCQgCgDgGgBIgQgCIgeAAIgkgBIgLgDIgIgDQgEgCgCgDIgDgGQgCgHAAgNQAAgKABgGQACgIAEgFQADgDADgCQAEgCAFgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGABAJIAAAEIgoAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgVAAgAFTBCQgOAAgKgCQgJgBgGgEQgGgEgDgHQgDgGAAgLIAAgJIAoAAIABAIQABADACACQADACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgFgBIgRgCIgeAAIgjgBIgMgDIgJgDQgDgCgCgDIgEgGQgCgHAAgNQABgKABgGQACgIAEgFQADgDAEgCQADgCAGgCIAMgCIBHgBQAMAAAPADIAJADIAHAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgDgDIgGgCIg2gBQgHAAgEACQgEADAAAFQAAAEACADQABACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAFAGIACAKIAAAMQAAAQgCAFIgEAHIgGAGIgIADIgLACQgLACgWAAgAsNBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQADgBABgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgCAEgDADIgFAGQgHAEgKACQgKACgPAAgAHcBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQACAIAAAMIAAAnQAAAMgCAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIDAfIBGAAIALgBQAFgBACgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgCgCgFgBIgLgBIhGAAgAgVBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAgwAOIgZgwIgaAwIAzAAgAlZBAIgfhUIgdBUIguAAIgqh/IAnAAIAbBdIABAAIAghdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAoaBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo1AOIgagwIgYAwIAyAAgAB9AjIAAggIAxAAIAAAgg");
	this.shape_16.setTransform(175.1,38.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ALWBCQgPAAgJgCQgJgBgGgEQgGgEgDgHQgDgGAAgLIAAgJIAoAAIABAIQABADACACQADACAKAAIAwAAQAIAAAEgCQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgEgGQgCgHAAgNQAAgKACgGQABgIAFgFQACgDAEgCQAEgCAFgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgGgCIg2gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIAAAMQAAAQgCAFIgEAHIgGAGIgIADIgMACQgLACgVAAgAsSBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAQAAQALAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAHhBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIJAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAEbBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAFDAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAigBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAGAEADAHQADAGAAAJQAAAIgCAGQgBAFgDADQgCADgEACIgHADIAAAAIALACQAEADADADQACAEABAGIABAMQAAAKgDAHQgBAHgGAEQgFADgHACQgHABgJAAgAh5AhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAh5gMIBGAAQAFAAADgDQADgCAAgFQAAgGgDgCQgDgCgFAAIhGAAgAleBAIgehUIgeBUIgtAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAofBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6AOIgZgwIgZAwIAyAAgAB0AjIAAggIAyAAIAAAgg");
	this.shape_17.setTransform(579.1,37.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ALTBCQgOAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgCAAgEQAAgEgBgCQgCgDgFgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgDgDIgDgGQgCgHAAgNQAAgKACgGQABgIAFgFQACgDAEgCQADgCAGgCIANgCIBHgBQALAAAQADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgnAAQAAgHgDgDIgGgCIg2gBQgIAAgDACQgFADAAAFQABAEABADQACACAEABQAHABAgAAIAnABIAMACIAKAEIAIAFIAEAGIADAKIAAAMQgBAQgBAFIgFAHIgGAGIgHADIgMACQgLACgVAAgAIcBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgCgKIgBgNIAAglIABgNIACgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIAuAAQAOAAAUADIALADIAIAFIAGAGIACAJQACAIAAAPIgnAAIAAgEQAAgGgFgDQgEgDgJAAIgsAAQgHAAgFACQgEACgDADQgDADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAEACAIAAIA1gBIAHgCQACgCACgEIAAgJIAoAAIAAAMQAAAJgCAGQgCAIgFAEQgFAGgJADQgOADgLAAgAsPBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAEhBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFJAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgYBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgzAOIgZgwIgZAwIAyAAgAlcBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAocBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo3AOIgagwIgZAwIAzAAgAB7AjIAAggIAxAAIAAAgg");
	this.shape_18.setTransform(175.1,38.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ALYBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgEgGQgBgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQACAGgBAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsUBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQAMAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgOAAgAHjBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEACAEQACAIAAAMIAAAnQAAAMgCAIQgCAEgCAEQgCADgEADQgCADgFABIgJAEQgPACgKAAgAILAfIBFAAIAMgBQAEgBACgCQAEgDABgFIABgLIAAgQIgBgMQgBgEgEgDQgCgCgEgBIgMgBIhFAAgAEdBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFFAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgcBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAg3AOIgZgwIgZAwIAyAAgAlgBAIgehUIgeBUIgtAAIgqh/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgqB/gAohBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo8AOIgagwIgZAwIAzAAgAB3AjIAAggIAxAAIAAAgg");
	this.shape_19.setTransform(175.1,38.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ALSBCQgOAAgJgCQgNgEgFgDIgHgHQgDgDgCgFIgDgKIAAgNIAAglIAAgNIADgKQACgFADgDIAHgHQAFgDANgEQAJgCAOAAIA8AAQALAAAQADIAIAEIAGAEQAGAFABAIQACAHAAAKIAAAFIgnAAIgBgIIgDgEQgFgDgKAAIgrAAIgMABQgFABgDADQgDADgBAGIgBANIAAAPIABANQABAGADADQADADAFABIAMABIAqAAQAKAAAEgDQADgBACgDQACgDgBgEIAAgEIgwAAIAAgaIBYAAIgBAwQgBAGgCAEQgBAEgDACQgDADgEACIgJADIgLACIgdABgAFPBCQgPAAgIgCQgKgBgGgEQgGgEgCgHQgDgGAAgLIAAgJIAnAAIABAIQABADACACQAEACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgCAAgEQAAgEgBgCQgCgDgGgBIgQgCIgeAAIgkgBIgLgDIgIgDQgEgCgCgDIgDgGQgCgHAAgNQAAgKABgGQACgIAEgFQADgDADgCQAEgCAFgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgVAAgAsNBCQgOAAgKgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAEADAKAAIAPAAQALAAAFgDQACgBABgDIACgHIAAhTIAnAAIAABWIgBAMQgBAGgBAEQgCAEgDADIgGAGQgHAEgKACQgKACgOAAgAHYBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEABAEQADAIABAMIAAAnQgBAMgDAIQgBAEgCAEQgCADgEADQgCADgFABIgJAEQgPACgKAAgAIAAfIBGAAIALgBQAEgBADgCQACgDACgFIABgLIAAgQIgBgMQgCgEgCgDQgDgCgEgBIgLgBIhGAAgAicBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAGAEACAHQADAGAAAJQAAAIgCAGQgBAFgBADQgCADgFACIgHADIAAAAIALACQAEADACADQADAEACAGIABAMQAAAKgEAHQgCAHgEAEQgGADgHACQgHABgJAAgAh1AhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAh1gMIBGAAQAGAAADgDQADgCAAgFQAAgGgDgCQgDgCgGAAIhGAAgAlaBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAobBAIgMgWIhPAAIgNAWIgrAAIBFh/IA0AAIBHB/gAo1AOIgagwIgZAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_20.setTransform(579.1,37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ALPBCQgOAAgJgCQgNgEgFgDIgHgHQgDgDgBgFIgDgKIgBgNIAAglIABgNIADgKQABgFADgDIAHgHQAFgDANgEQAJgCAOAAIA8AAQALAAAQADIAIAEIAHAEQAFAFACAIQACAHAAAKIAAAFIgnAAIgBgIIgEgEQgEgDgLAAIgrAAIgMABQgFABgDADQgCADgBAGIgBANIAAAPIABANQABAGACADQADADAFABIAMABIAqAAQAKAAAFgDQADgBABgDQACgDAAgEIAAgEIgxAAIAAgaIBZAAIgBAwQgBAGgCAEQgCAEgDACQgDADgEACIgJADIgKACIgdABgAISBCQgOAAgJgCQgNgEgFgDIgHgHQgDgDgBgFIgDgKIgBgNIAAglIABgNIADgKQABgFADgDIAHgHQAFgDANgEQAJgCAOAAIAvAAQAOAAATADIAMADIAHAFIAGAGIADAJQACAIAAAPIgoAAIAAgEQAAgGgEgDQgFgDgJAAIgrAAQgIAAgFACQgEACgDADQgDADAAAFIgBALIAAANIABAMQABAFABADQADADAFABQAEACAHAAIA1gBIAIgCQACgCABgEIABgJIAoAAIAAAMQgBAJgBAGQgDAIgEAEQgGAGgJADQgOADgKAAgAFVBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQACAGgBAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsLBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQAMAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgOAAgAgTBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAguAOIgZgwIgZAwIAyAAgAlXBAIgehUIgeBUIgtAAIgqh/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgqB/gAoYBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAozAOIgagwIgZAwIAzAAgAB/AjIAAggIAxAAIAAAgg");
	this.shape_21.setTransform(175.1,38.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ALUBCQgOAAgJgCQgOgEgEgDIgHgHQgDgDgBgFIgEgKIgBgNIAAglIABgNIAEgKQABgFADgDIAHgHQAEgDAOgEQAJgCAOAAIA7AAQAMAAAPADIAJAEIAHAEQAEAFADAIQACAHAAAKIAAAFIgoAAIgBgIIgDgEQgEgDgLAAIgrAAIgNABQgEABgDADQgDADgBAGIgBANIAAAPIABANQABAGADADQADADAEABIANABIAqAAQAJAAAFgDQADgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBZAAIgBAwQAAAGgDAEQgCAEgCACQgDADgEACIgJADIgLACIgcABgAFQBCQgOAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgCAAgEQAAgEgBgCQgCgDgFgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgDgDIgDgGQgCgHAAgNQAAgKABgGQACgIAFgFQACgDAEgCQADgCAGgCIANgCIBHgBQAMAAAPADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgnAAQAAgHgDgDIgGgCIg2gBQgIAAgDACQgFADAAAFQABAEABADQACACAEABQAHABAgAAIAnABIAMACIAKAEIAHAFIAFAGIADAKIAAAMQgBAQgBAFIgFAHIgGAGIgHADIgMACQgLACgVAAgAsPBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAHaBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgJAEQgPACgKAAgAIBAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAgYBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgzAOIgZgwIgZAwIAyAAgAlcBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAocBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo3AOIgagwIgZAwIAzAAgAB7AjIAAggIAxAAIAAAgg");
	this.shape_22.setTransform(175.1,38.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ALZBCQgOAAgJgCQgOgEgEgDIgHgHQgDgDgBgFIgEgKIgBgNIAAglIABgNIAEgKQABgFADgDIAHgHQAEgDAOgEQAJgCAOAAIA7AAQAMAAAPADIAJAEIAHAEQAEAFADAIQACAHAAAKIAAAFIgoAAIgBgIIgDgEQgEgDgLAAIgrAAIgNABQgEABgDADQgDADgBAGIgBANIAAAPIABANQABAGADADQADADAEABIANABIAqAAQAJAAAFgDQADgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBZAAIgBAwQAAAGgDAEQgCAEgCACQgDADgEACIgJADIgLACIgcABgAsUBCQgPAAgJgDQgJgCgHgFQgFgFgEgIQgCgHAAgMIAAgPIAmAAIAAALQABAHAEAEQAEADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgGAGQgGAEgLACQgKACgOAAgAHfBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgJAEQgPACgKAAgAIGAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAEZBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQACAEACAEQADAIAAAMIAAAnQAAAMgDAIQgCAEgCAEQgCADgDADQgEADgDABIgKAEQgPACgKAAgAFAAfIBHAAIAKgBQAFgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgFgBIgKgBIhHAAgAijBAIAAh/IByAAQAMAAAIABQAIACAHAEQAFAEADAHQADAGAAAJQAAAIgBAGQgCAFgDADQgCADgDACIgIADIAAAAIALACQAEADADADQADAEABAGIABAMQgBAKgCAHQgCAHgGAEQgEADgIACQgGABgKAAgAh8AhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgAh8gMIBGAAQAFAAADgDQAEgCAAgFQAAgGgEgCQgDgCgFAAIhGAAgAlhBAIgdhUIgeBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAnAAIgqB/gAohBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo8AOIgagwIgZAwIAzAAgABxAjIAAggIAyAAIAAAgg");
	this.shape_23.setTransform(579.2,37.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ALXBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIA7AAQALAAAQADIAIAEIAHAEQAFAFACAIQACAHAAAKIAAAFIgnAAIgBgIIgEgEQgEgDgKAAIgrAAIgNABQgEABgDADQgEADgBAGIgBANIAAAPIABANQABAGAEADQADADAEABIANABIApAAQAKAAAEgDQAEgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBYAAIgBAwQAAAGgCAEQgCAEgDACQgDADgEACIgJADIgLACIgcABgAIaBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIAuAAQAOAAAUADIALADIAIAFIAFAGIADAJQACAIAAAPIgnAAIAAgEQgBgGgFgDQgDgDgKAAIgrAAQgHAAgGACQgEACgDADQgCADgCAFIgBALIAAANIABAMQABAFACADQADADAEABQAFACAHAAIA1gBIAHgCQADgCABgEIABgJIAnAAIAAAMQABAJgCAGQgDAIgFAEQgFAGgIADQgPADgKAAgAsSBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAQAAQALAAAEgDQACgBACgDIABgHIAAhTIAoAAIAABWIgCAMQAAAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgPAAgAEfBAIAAh/IB3AAQALAAAOACIAKADIAHAFQAEADABADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgBADgEADQgDADgEABIgKAEQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgaBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1AOIgZgwIgZAwIAyAAgAleBAIgehUIgeBUIguAAIgph/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIAAAAIAbhdIAnAAIgqB/gAofBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6AOIgZgwIgaAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_24.setTransform(175.1,38.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ALbBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIA7AAQALAAAQADIAJAEIAGAEQAFAFACAIQACAHAAAKIAAAFIgnAAIgBgIIgEgEQgEgDgKAAIgrAAIgNABQgEABgDADQgDADgBAGIgBANIAAAPIABANQABAGADADQADADAEABIANABIAqAAQAJAAAFgDQADgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBZAAIgBAwQgBAGgCAEQgCAEgDACQgCADgEACIgJADIgLACIgdABgAsWBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQACgBACgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgCAEgDADIgGAGQgGAEgLACQgJACgPAAgAHgBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIIAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAEbBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgJAEQgPACgKAAgAFCAfIBGAAIALgBQAFgBACgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgCgCgFgBIgLgBIhGAAgAgeBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAg5AOIgagwIgZAwIAzAAgAljBAIgehUIgeBUIgtAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAokBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo/AOIgZgwIgZAwIAyAAgAB0AjIAAggIAxAAIAAAgg");
	this.shape_25.setTransform(175.1,38.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AFSBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsKBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAQAAQAKAAAFgDQACgBACgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgBAEgEADIgFAGQgHAEgKACQgKACgPAAgAMWBAIAAgPIgCgJIgCgFIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAIACQAHADAEAFQAEAFADAHQABAHABAJIAAAIIgBAMQgCAFgCADQgCAEgEACQgFADgGACIAHACIAHAFQADADACAFQACAGAAAHIAAAWgALHAAIBBAAQAIAAADgDQAEgEAAgHIAAgEIgBgHQgBgCgDgCQgDgCgKAAIg+AAgAHbBAIAAh/IB3AAQAKAAAPACIAKADIAGAFQAEADACADQACAEABAEQAEAIAAAMIAAAnQAAAMgEAIQgBAEgCAEQgCADgEADQgDADgDABIgKAEQgPACgKAAgAIDAfIBGAAIAKgBQAFgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgFgBIgKgBIhGAAgAiYBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAFAEACAHQADAGABAJQAAAIgCAGQgBAFgDADQgBADgEACIgIADIAAAAIAMACQADADACADQAEAEABAGIABAMQAAAKgDAHQgCAHgGAEQgEADgIACQgGABgJAAgAhyAhIBHAAQAHAAADgCQAEgCABgFQgBgGgEgDQgCgCgIAAIhHAAgAhygMIBHAAQAFAAADgDQADgCAAgFQAAgGgDgCQgDgCgFAAIhHAAgAlWBAIgehUIgeBUIguAAIgqh/IAoAAIAbBdIAAAAIAghdIAlAAIAhBdIAAAAIAbhdIAnAAIgpB/gAoXBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAoyAOIgagwIgYAwIAyAAgAB8AjIAAggIAxAAIAAAgg");
	this.shape_26.setTransform(579,37.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AIWBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgBgFIgDgKIgCgNIAAglIACgNIADgKQABgFADgDIAGgHQAFgDANgEQAKgCAOAAIAvAAQAOAAATADIALADIAIAFIAFAGIAEAJQACAIAAAPIgoAAIAAgEQAAgGgFgDQgEgDgKAAIgqAAQgIAAgFACQgFACgDADQgCADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAFACAGAAIA1gBIAIgCQACgCACgEIABgJIAnAAIAAAMQAAAJgBAGQgDAIgFAEQgFAGgJADQgOADgKAAgAFZBCQgPAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIACAIQABADACACQADACAJAAIAxAAQAHAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgCgDIgEgGQgCgHAAgNQAAgKABgGQACgIAFgFQACgDAEgCQAEgCAFgCIAMgCIBIgBQALAAAQADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgCgDIgGgCIg3gBQgGAAgEACQgEADgBAFQAAAEACADQABACAFABQAHABAhAAIAmABIAMACIAKAEIAHAFIAFAGIADAKIAAAMQAAAQgCAFIgFAHIgFAGIgIADIgMACQgLACgVAAgAsIBCQgNAAgKgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAJAAIAPAAQALAAAEgDQADgBACgDIABgHIAAhTIAnAAIAABWIgBAMQgBAGgBAEQgCAEgDADIgGAGQgGAEgLACQgJACgPAAgAMTBAIAAgPIgBgJIgDgFIgEgDIgIgBIg/AAIAAAhIgmAAIAAh/IB3AAQALAAAHACQAIADAEAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgCADQgDAEgEACQgFADgGACIAIACIAHAFQADADABAFQACAGAAAHIAAAWgALEAAIBCAAQAHAAAEgDQADgEABgHIAAgEIgBgHQgCgCgCgCQgEgCgJAAIg/AAgAgPBAIgNgWIhQAAIgMAWIgsAAIBHh/IAzAAIBFB/gAgqAOIgagwIgZAwIAzAAgAlUBAIgehUIgeBUIgtAAIgrh/IAnAAIAbBdIABAAIAghdIAlAAIAhBdIABAAIAbhdIAmAAIgpB/gAoVBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBIB/gAowAOIgZgwIgZAwIAyAAgACDAjIAAggIAxAAIAAAgg");
	this.shape_27.setTransform(175,38.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AFUBCQgOAAgKgCQgJgBgGgEQgGgEgDgHQgDgGAAgLIAAgJIAoAAIABAIQABADACACQADACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgFgBIgRgCIgeAAIgjgBIgMgDIgJgDQgDgCgCgDIgEgGQgCgHAAgNQABgKABgGQACgIAEgFQADgDAEgCQADgCAGgCIAMgCIBHgBQAMAAAPADIAKADIAGAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgDgDIgGgCIg2gBQgHAAgEACQgEADAAAFQAAAEACADQABACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAFAGIACAKIAAAMQAAAQgCAFIgEAHIgGAGIgIADIgLACQgLACgVAAgAsMBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQADgBABgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgCAEgDADIgFAGQgHAEgKACQgKACgPAAgAMYBAIAAgPIgBgJIgDgFIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAEAFQAFAFABAHQACAHAAAJIAAAIIgBAMQAAAFgDADQgDAEgEACQgEADgGACIAIACIAHAFQACADACAFQACAGAAAHIAAAWgALJAAIBBAAQAIAAAEgDQADgEAAgHIAAgEIgBgHQgBgCgCgCQgFgCgJAAIg+AAgAHdBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQACAIAAAMIAAAnQAAAMgCAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIEAfIBGAAIALgBQAFgBACgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgCgCgFgBIgLgBIhGAAgAgUBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAgvAOIgZgwIgaAwIAzAAgAlYBAIgfhUIgdBUIguAAIgqh/IAnAAIAbBdIABAAIAghdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAoZBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo0AOIgagwIgYAwIAyAAgAB+AjIAAggIAxAAIAAAgg");
	this.shape_28.setTransform(175,38.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AsRBBQgOAAgJgDQgKgBgGgGQgGgFgDgHQgCgIAAgLIAAgQIAmAAIAAALQAAAIAEADQAEADAJAAIAQAAQALAAAEgCQADgCABgDIABgHIAAhTIAoAAIAABXIgBALQgBAGgCAEQgBAFgDADIgGAFQgHAEgKACQgKACgOAAgAMcA/IAAgPIgBgIIgCgGIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAEAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgCADQgDAEgEACQgEADgHACIAIADIAHAEQADAEACAEQACAGAAAIIAAAVgALOgBIBBAAQAIAAADgDQAEgDAAgIIAAgEIgBgHQgBgCgDgBQgEgDgJAAIg+AAgAHiA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPADgKgBgAIKAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAEcA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPADgKgBgAFEAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAifA/IAAh/IBxAAQAMAAAJABQAIACAGAFQAGAEADAGQACAHAAAJQAAAHgBAGQgBAFgDADQgCAEgEACIgHACIAAAAIALACQAEADADAEQACADABAGIABAMQAAALgDAGQgBAHgGAEQgFADgHACQgHACgJgBgAh4AhIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgCgHAAIhHAAgAh4gNIBGAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIhGAAgAldA/IgehTIgeBTIgtAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAoeA/IgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo5ANIgZgwIgZAwIAyAAgAB1AiIAAggIAyAAIAAAgg");
	this.shape_29.setTransform(579,38);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AIdBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgCgKIgBgNIAAglIABgNIACgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIAuAAQAOAAAUADIALADIAIAFIAGAGIACAJQACAIAAAPIgnAAIAAgEQAAgGgFgDQgEgDgJAAIgsAAQgHAAgFACQgEACgDADQgDADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAEACAIAAIA1gBIAHgCQACgCACgEIABgJIAnAAIAAAMQAAAJgCAGQgCAIgFAEQgFAGgJADQgOADgLAAgAsOBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAMaBAIAAgPIgBgJIgCgFIgGgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAIACQAHADAFAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgDADQgCAEgEACQgEADgHACIAIACIAHAFQADADABAFQACAGABAHIAAAWgALLAAIBCAAQAIAAADgDQAEgEgBgHIAAgEIgBgHQAAgCgDgCQgEgCgKAAIg+AAgAEiBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFKAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgXBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgyAOIgZgwIgZAwIAyAAgAlbBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAobBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo2AOIgagwIgZAwIAzAAgAB8AjIAAggIAxAAIAAAgg");
	this.shape_30.setTransform(175,38.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AsTBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgCgHgBgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAPAAQAMAAAEgCQADgBABgEIABgGIAAhUIAoAAIAABXIgBALQgBAGgCAEQgBAEgDADIgHAGQgGAFgLABQgJACgOAAgAMeA/IAAgPIgBgIIgCgGIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAFAFQADAFACAIQACAGABAJIAAAIIgCAMQgBAFgCADQgDAEgEACQgEAEgHABIAIACIAIAGQADACABAGQACAFAAAHIAAAWgALQgBIBCAAQAHAAAEgDQADgEAAgGIAAgFIgBgHQgBgCgCgCQgFgCgJAAIg+AAgAHkA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQAEADACADQACAEACAFQACAHAAAMIAAAnQAAAMgCAIQgCAFgCADQgCADgEADQgCADgFACIgJADQgPACgKAAgAIMAfIBFAAIAMgBQAEgBACgDQAEgDABgFIABgLIAAgQIgBgLQgBgFgEgDQgCgCgEgBIgMgBIhFAAgAEeA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQAEADACADQACAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgCADQgCADgEADQgDADgEACIgKADQgPACgKAAgAFGAfIBGAAIALgBQAEgBADgDQADgDACgFIAAgLIAAgQIAAgLQgCgFgDgDQgDgCgEgBIgLgBIhGAAgAgbA/IgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAg2ANIgZgwIgZAwIAyAAgAlfA/IgehTIgeBTIgtAAIgqh/IAmAAIAbBeIABAAIAhheIAkAAIAhBeIABAAIAbheIAmAAIgqB/gAogA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo7ANIgagwIgZAwIAzAAgAB4AiIAAgfIAxAAIAAAfg");
	this.shape_31.setTransform(175,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_5},{t:this.shape_4}]},8).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_6},{t:this.shape_4}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_8},{t:this.shape_7}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_7}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_15},{t:this.shape_14}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_16},{t:this.shape_14}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_18},{t:this.shape_17}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_19},{t:this.shape_17}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},6).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_21},{t:this.shape_20}]},6).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_22},{t:this.shape_20}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_24},{t:this.shape_23}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_25},{t:this.shape_23}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},7).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_27},{t:this.shape_26}]},7).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_28},{t:this.shape_26}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_30},{t:this.shape_29}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_31},{t:this.shape_29}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape_12},{t:this.shape_13},{t:this.shape}]},7).wait(7));

	// Layer 35
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A7BEFA").s().p("ASVBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgASjg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAQlBSQgIgBgGgEQgFgEgDgHQgDgHAAgLIAAgQIAjAAIAAASQAAAEADACIAGABIAGgBQADgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAHAAIAMAAQAGACAEADQAEADADAGQACAHAAAKIAAAxQAAALgDAIQgEAHgGAEQgGADgJACIgRABQgMAAgIgCgAJNBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgAJbg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgADiBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgABxBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgAlUBUQgLAAgHgDQgHgCgFgFQgEgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAEgFQAFgFAHgCQAHgDALAAIAOAAQAMAAAIACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgCgCQgDgBgEAAQgFAAgDABQgCACAAAEIAABdQAAAEACACQADABAEAAQAFAAADgBQACgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgCAHgFAEQgFAFgIACQgIACgMAAgAYlBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAWKBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAPUBSIAAgjIAhAAIAAAjgAOHBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAgDBSIAAijIBHAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegAhTBSIgch/IAAAAIACB/IgiAAIAAijIA2AAIAcB/IAAgBIgCh+IAiAAIAACjgAjFBSIgchJIAABJIgmAAIAAijIAmAAIAABGIAYhGIAoAAIggBOIAkBVgAm5BSIAAijIAmAAIAACjgAn6BSIAAhHIgVAAIAABHIgmAAIAAijIAmAAIAABAIAVAAIAAhAIAmAAIAACjgAqEBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgAspBSIAAijIAlAAIAACFIAlAAIAAAegAtgBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgAtnAOIgJhIIgBAAIgIBIIASAAgAvgBSIAAijIAmAAIAACjgAwgBSIAAgvQAAgFgDgCQgEgDgJAAIgGAAIAAA5IgmAAIAAijIAuAAQAQAAAKACQAKACAFAEQAGAEADAIQACAHAAAMIAAAUQAAAJgCAGQgBAGgEADQgDADgFACQgEACgHABIAAABQAPADAFAEQADADABAEQACAFAAAHIAAAtgAw2gCIAHAAQAKAAADgDQACgDAAgIIAAgZQAAgGgCgDQgDgDgGAAIgLAAgAy8BSIAAijIBIAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegA0LBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgA1TBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgA1aAOIgJhIIgBAAIgIBIIASAAgA3NBSIABiJIAAAAIgYCJIgrAAIgViKIAAAAIAACKIgiAAIAAijIA7AAIASCAIABAAIASiAIA7AAIAACjgAF1A/IAAgaIByAAIAAAagALcAlIAAgeIA7AAIAAAegAF1AMIAAgYIByAAIAAAYg");
	this.shape_32.setTransform(377.6,282.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A7BEFA").s().p("ATCBSQgJgDgFgEQgEgEgCgGQgBgGAAgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQADgEAAgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQAAgJACgGQADgGAFgDQAGgEAIgCQAJgCAMAAQAOAAAIACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgHABIAAABQAIABAEACQAFACACAFQADAFAAAIIABASQAAANgCAIQgCAJgEAFQgGAGgJACQgJADgPAAQgPAAgIgCgAQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALGBSQgJgBgFgEQgGgEgDgHQgCgHAAgLIAAgQIAjAAIAAASQAAAEACACIAHABIAGgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgFAAQgGAAgCACQgCABAAADIAAAHIgfAAIAAhYIBRAAIAAAcIgvAAIAAAfIAAAAQADgFAHgDQAFgCAIAAIALAAQAGACAEADQAFADACAGQADAHAAAKIAAAxQAAALgEAIQgDAHgHAEQgFADgJACIgSABQgMAAgHgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAIoBSIAAiHIgBAAIgYAlIgUgUIAjgtIAvAAIAACjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_33.setTransform(380.1,282.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A7BEFA").s().p("AQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALEBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgALSg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgAIVBSQgJgDgEgEQgFgEgBgGQgCgGAAgJIAAgXIAjAAIAAATQAAAGABACQADADAGAAQAHAAACgEQACgEAAgPQAAgQgDgEQgCgDgKAAIgQAAIAAgaIAUgBQAEAAACgDQACgEABgTQAAgJgCgDQgCgCgFAAQgGAAgCABQgCACAAAFIAAAPIgjAAIAAgSQAAgJADgGQACgGAGgDQAFgEAJgCQAIgCAMAAQAOAAAJACQAIADAFAEQAFAEACAIQACAGAAALIgBAUQgBAHgCAEQgCAFgFACQgDACgIABIAAABQAIABAFACQAFACACAFQACAFABAIIABASQAAANgCAIQgCAJgFAFQgFAGgJACQgKADgPAAQgOAAgJgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAThBSIAAgiIg4AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigATGAUIAbAAIAAhRIAAAAgANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_34.setTransform(380.1,282.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A7BEFA").s().p("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");
	this.shape_35.setTransform(380.1,282.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AHUAwQgKAAgHgCQgKgCgEgCIgEgFIgDgGIgDgHIgBgKIAAgbIABgKIADgHIADgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgHABQgHACgKAAgAHRgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQABADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgFIABgIIAAgJIgBgIQAAgDgCgDQgCgCgEgCQgDgBgGAAIghAAQgGAAgEABgAnYAwQgKAAgIgCQgJgCgDgCIgFgFIgEgGIgBgHIgBgKIAAgbIABgKIABgHIAEgGIAFgFQADgCAJgCQAIgCAKAAIArAAQAJAAALACIAHACIAFAEQADADABAHQACAFAAAHIAAADIgdAAIgBgFIgCgEQgEgBgHgBIggAAIgIABQgEABgCADQgCABgBAEIgBAKIAAALIABAKQABADACACQACADAEABIAIABIAfAAQAIAAADgCIADgEQACgCgBgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgCAIQgBACgCACIgFAEIgGACIgIABIgVABgAsqAwIgRgBQgHgCgEgCQgFgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAGAAIAjAAQAGAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgbgBIgIgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAGACIAFADQADAEACAFIABAMIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAYAAIAbABIAKABIAHACIAFAEIAEAEIABAHIABAJIgCAQIgDAFIgEAEIgHADIgIABIgXABgALSAvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgALuAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAgAKRAvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgAF9AvIAAhCIgmBCIgVAAIgnhCIAABCIgcAAIAAhdIAsAAIAhA7IAhg7IAsAAIAABdgADUAvIgJgRIg6AAIgIARIghAAIAzhdIAmAAIA0BdgADBAKIgTgjIgSAjIAlAAgABAAvIAAhdIAcAAIAABdgAhQAvIAAhdIBWAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAg0AXIA0AAIAHgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgHgBIg0AAgAkLAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgAl1AvIAAhdIAcAAIAABFIBCAAIAAAYgAo/AvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgArFAvIAAhdIAdAAIAABdg");
	this.shape_36.setTransform(583.1,285.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AElAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAEigVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgEIABgJIAAgJIgBgIQAAgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgACbAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAiAAIAYACIAJACIAFAEIAEAEIADAHQABAFAAAMIgdAAIAAgEQAAgEgDgCQgEgCgGAAIggAAQgFAAgEACQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAmAAIAGgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgHIAdAAIAAAIQAAAHgBAFQgCAFgDAEQgEAEgHACQgKACgIAAgAkSAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIArAAQAIAAAMACIAHACIAEAEQAEADABAHQACAEAAAIIAAADIgdAAIgBgFIgDgEQgDgBgHgBIggAAIgJABQgDABgCADQgCACgBADIgBAKIAAALIABAKQABADACACQACADADABIAJABIAfAAQAHAAAEgCIADgEQABgCAAgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgCAIQgBACgCADIgFADIgGACIgIABIgVABgApkAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQACABAHAAIAjAAQAGAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgWAAIgagBIgIgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAGACIAFAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAFABAYAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgGACIgIACIgXABgAIiAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAHhAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAhFAvIAAhdIBlAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAivAvIAAhdIAcAAIAABFIBBAAIAAAYgAl6AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAn/AvIAAhdIAdAAIAABdg");
	this.shape_37.setTransform(170.1,286.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0D1341").s().p("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");
	this.shape_38.setTransform(376.5,288);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AHUAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgCgHIAAgKIAAgbIAAgKIACgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHABIAGADIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGACIgHACQgHACgKAAgAHRgVQgEABgBACIgDAGIgBAIIAAAJIABAJQAAAEADABQACADACABIAJABIAkAAIAJgBQAEgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgAnYAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgDgHIgBgKIAAgbIABgKIADgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAsAAQAIAAALACIAHACIAEAEQAEADACAHQABAEAAAIIAAADIgcAAIgBgFIgEgEQgDgBgHgBIgfAAIgJABQgEABgCADQgCACgBADIAAAKIAAALIAAAKQABADACACQACADAEABIAJABIAeAAQAIAAADgCIADgEQABgCABgDIAAgDIgkAAIAAgSIBAAAIAAAZIAAAJIgCAIQgBACgDADIgEADIgHACIgIABIgVABgAsqAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQADABAHAAIAjAAQAFAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgagBIgJgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGAEgDIAEgEIAHgDIAJgBIA1gBQAIAAALACIAHACIAEAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAXAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgFACIgIACIgYABgALSAvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgALvAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAKQAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAF9AvIAAhCIgmBCIgWAAIgmhCIAABCIgbAAIAAhdIAsAAIAgA8IAhg8IAsAAIAABdgADUAvIgJgRIg6AAIgIARIghAAIA0hdIAlAAIA0BdgADBAKIgTgjIgSAjIAlAAgABAAvIAAhdIAdAAIAABdgAhQAvIAAhdIBWAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgzAXIAzAAIAHgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgHgBIgzAAgAkLAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAl1AvIAAhdIAcAAIAABFIBBAAIAAAYgApAAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgArEAvIAAhdIAcAAIAABdg");
	this.shape_39.setTransform(170.1,286.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgA5Mg6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgEgn5gA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAjAAIAVgBIAIgBIAHgDIAEgDQADgCABgDIACgHIABgJIAAgZIhBAAIAAASIAkAAIAAACQAAAEgCACIgDADQgDACgHAAIgfAAIgJgBQgEAAgCgDQgCgCgBgEIAAgJIAAgLIAAgKQABgEACgCQACgDAEAAIAJgBIAfAAQAIAAADACIADADIABAGIAcAAIAAgDQAAgIgBgFQgCgGgDgEIgFgDIgHgDQgLgCgIAAIgsAAQgKABgHABgEgtfAAKQAAAIACAFQACAEAFADQAEADAHACIARABIAjAAIAYgBIAIgCIAGgDIAEgDIADgGIACgPIgBgIIgBgHIgEgGIgFgDIgHgDIgKgBIgbgBQgYAAgFgBIgFgCIgBgGQAAgDADgCQADgBAFAAIAoAAIAEACQACACAAAFIAdAAIAAgDIgBgLQgBgGgEgDIgEgDIgHgDQgLgCgIAAIg1ABIgJABIgHAEIgEADQgEAEgBAFIgBANQAAAJACAEIACAGIAEADIAGADIAJACIAaABIAWAAIAMABIAFABIABAGIgBAEIgDACQgCACgGAAIgjAAQgHAAgDgCIgCgEIgBgGIgdAAgA09AjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgA20ghIA2BEIAtAAIAAheIgdAAIAABEIgBAAIg2hEIgsAAIAABeIAcAAIAAhEgA6SAjIAcAAIAAheIgsAAIghA8Iggg8IgsAAIAABeIAcAAIAAhDIAmBDIAVAAIAmhDgA8aAjIg0heIglAAIgzBeIAgAAIAIgRIA7AAIAJARIAgAAgA/PAjIAdAAIAAheIgdAAgEghgAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgkbAAjIBpAAIAAgXIhMAAIAAgOIBGAAIAAgUIhGAAIAAgPIBKAAIAAgWIhnAAgEgmFAAjIBeAAIAAgZIhBAAIAAhFIgdAAgEgqFgAhIA2BEIAtAAIAAheIgdAAIAABEIgBAAIg2hEIgsAAIAABeIAcAAIAAhEgEgrUAAjIAcAAIAAheIgcAAgAN1CgIAAlJMAkGAAAIAAFJgEAnUgBEQgJACgEADIgEAEIgEAHIgCAHIgBAKIAAAcIABAIIACAIIAEAGIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgGIACgIIABgIIAAgcIgBgKIgCgHIgEgHIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgAYnhEQgJACgEADIgEAEIgEAHIgCAHIgBAKIAAAcIABAIIACAIIAEAGIAEAEQAEADAJACQAIABAKABIAjAAIAVgBIAIgBIAGgDIAFgDQACgCABgDIACgHIABgIIAAgaIhBAAIAAATIAkAAIAAACQAAAEgBACIgDACQgEACgHAAIgfAAIgJgBQgDAAgCgCQgCgCgBgEIgBgKIAAgLIABgKQABgEACgCQACgDADAAIAJgBIAgAAQAHAAADACIADADIABAGIAdAAIAAgEQAAgHgCgFQgBgGgEgEIgEgDIgHgDQgMgCgIAAIgrAAQgKABgIABgATCAAQAAAIACAFQACAEAEADQAFADAHACIARABIAjAAIAXgBIAIgCIAGgDIAFgDIADgGIACgOIgBgJIgCgHIgDgGIgFgDIgIgDIgJgBIgcgBQgYAAgFgBIgEgCIgBgGQAAgDADgCQADgCAFAAIAnABIAFACQACACAAAFIAdAAIAAgDIgBgLQgCgFgDgEIgFgDIgGgDQgLgCgJAAIg0ABIgJABIgHAEIgFADQgDAEgBAFIgBAMQAAAKABAEIADAGIAEADIAGADIAIABIAaACIAWAAIANABIAFADIABAFIgBADIgDACQgDABgGAAIgjAAQgHAAgCgBIgCgDIgBgGIgdAAgEArkAAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEApsgArIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgEAmPAAZIAcAAIAAheIgsAAIghA9Ighg9IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgEAkHAAZIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgEAhSAAZIAcAAIAAheIgcAAgAfBAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAcGAZIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgAacAZIBdAAIAAgYIhBAAIAAhGIgcAAgAWbgrIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgAVMAZIAdAAIAAheIgdAAgA42ALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgA0gAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEghDAAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEAnrAABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsAAABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgAfdABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA9zgBIASgkIATAkgEAiugALIASgkIATAkg");
	this.shape_40.setTransform(376.5,288);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AIBAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgBgHIgBgKIAAgbIABgKIABgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgHABQgHACgKAAgAH+gWQgEACgBACIgDAGIgBAIIAAAJIABAIQAAAFADABQACADACABIAJABIAkAAIAJgBQAEgBABgDQACgBABgFIAAgIIAAgJIAAgIQgBgDgCgDQgCgCgDgCQgEgBgGAAIgiAAQgFAAgEABgAo1AwQgNAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IACAIIACAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA7QgBAMgBADIgDAHIgEAEIgFAFIgHACQgKACgIAAgArFAwQgKAAgIgCQgKgCgDgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQADgCAKgCQAIgCAKAAIAuAAQAKAAAIACIAGACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgGABQgIACgKAAgArJgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQACADADABIAIABIAlAAIAIgBQAEgBACgDQABgBABgFIABgIIAAgJIgBgIQgBgDgBgDQgDgCgDgCQgEgBgGAAIghAAQgFAAgFABgAL/AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAMcAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAK9AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAGqAvIAAhCIgmBCIgWAAIgmhCIAABCIgbAAIAAhdIAsAAIAgA7IAhg7IAsAAIAABdgAEBAvIgJgRIg6AAIgIARIghAAIA0hdIAlAAIA0BdgADuAKIgTgjIgSAjIAlAAgABtAvIAAhdIAdAAIAABdgAgjAvIAAhdIBWAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgGAXIAyAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgyAAgAjeAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAlIAvIAAhdIAcAAIAABFIBBAAIAAAYgAnSAvIAAhdIBTAAIAPABQAGABAFADQAEADACAFQACAFAAAGIgBALIgDAFIgEAEIgGACIAAAAIAIABIAGAFIADAHIAAAJQAAAHgCAGQgCAEgEAEQgEACgFABIgLABgAm1AZIA0AAQAFAAACgCQADgCAAgDQAAgFgDgCQgCgBgFgBIg0AAgAm1gJIAyAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgBgFgBIgyAAgAt8AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAtgAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_41.setTransform(583.2,285.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AFSAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAFPgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgEIABgJIAAgJIgBgIQAAgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgADIAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAiAAIAYACIAJACIAFAEIAEAEIADAHQABAFAAAMIgdAAIAAgEQAAgEgDgCQgEgCgGAAIggAAQgFAAgEACQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAmAAIAGgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgHIAdAAIAAAIQAAAHgBAFQgCAFgDAEQgEAEgHACQgKACgIAAgAlwAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgHAAgAoAAwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHABIAGADIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGACIgHACQgHACgKAAgAoDgVQgDABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAIABIAlAAIAIgBQAEgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAJPAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAIOAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAgYAvIAAhdIBlAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAiCAvIAAhdIAcAAIAABFIBBAAIAAAYgAkMAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAjwAZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAjwgJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAq2AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAqaAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_42.setTransform(170.3,286.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0D1341").s().p("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AGgCIAEgDIADgGIABgKQAAgHgCgEQgCgFgEgDQgEgDgHgCIgPgBIhTAAgASWAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgj+AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA62ALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgoJAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgqoAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAZdACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgEAoZAABIgIAAQgDgBgCgCQgCgCgBgEIAAgJIAAgJIAAgJIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAJIAAAJIgBAJQgBAEgCACQgBACgEABIgIAAgAVSABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsvAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAgMAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgASzABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAjcgALIASgkIATAkgEgj+gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgAZdggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_43.setTransform(376.5,288);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AIBAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAH+gVQgEABgCACIgCAGIAAAIIAAAJIAAAJQAAAEACABQADADADABIAIABIAlAAIAIgBQADgBACgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAo2AwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAIABIAcAAIAIgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgArGAwQgKAAgHgCQgJgCgEgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQAEgCAJgCQAHgCAKAAIAvAAQALAAAGACIAHABIAHADIAEAFIAEAGIACAHIAAAKIAAAbIAAAKIgCAHIgEAGIgEAFIgHACIgHACQgGACgLAAgArIgVQgEABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgFAAIgiAAQgGAAgDACgAL/AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAMcAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAK9AvIg2hDIAAAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAcAAIAABdgAGqAvIAAhCIgmBCIgVAAIgmhCIAABCIgcAAIAAhdIArAAIAhA8IAhg8IAsAAIAABdgAECAvIgJgRIg7AAIgIARIggAAIAyhdIAmAAIA0BdgADuAKIgTgjIgSAjIAlAAgABtAvIAAhdIAcAAIAABdgAgjAvIAAhdIBWAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgHAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAjeAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAlIAvIAAhdIAdAAIAABFIBAAAIAAAYgAnSAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIAEAHIABAJQAAAHgDAGQgCAFgEADQgDACgGABIgMABgAm2AZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAm2gJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAt8AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAtgAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_44.setTransform(170.3,286.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgA4eg6QgJACgEADIgEAEIgEAGIgCAIIgBAJIAAAbIABAKIACAHIAEAHIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgHIACgHIABgKIAAgbIgBgJIgCgIIgEgGIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgEgpqAABQAAALACAEIADAGIAEAFIAFAEIAHADQAFABAMABIApAAQAHAAALgCIAGgDIAGgEIAEgFIADgGQABgEABgLIAAg8IgdAAIAAA2IgBAHIgCAGIgFACIgIABIgdAAIgHgBIgFgCIgDgGIgBgHIAAg2IgcAAgEgrlgA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgA0OAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgA2GghIA2BEIAtAAIAAheIgdAAIAABEIAAAAIg2hEIgtAAIAABeIAdAAIAAhEgA5jAjIAcAAIAAheIgsAAIghA8Ighg8IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgA7rAjIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgA+gAjIAcAAIAAheIgcAAgEggxAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgjsAAjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgEglWAAjIBdAAIAAgZIhBAAIAAhFIgcAAgEgngAAjIBbAAIAMgBQAFgBAEgDQAEgDACgFQACgFAAgIIgBgIIgDgHIgFgEIgIgCIAAgBIAFgCIAFgDIADgGIABgKQAAgHgCgEQgCgGgFgCQgEgDgGgCIgPgBIhTAAgEguKAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAN1CgIAAlJMAkGAAAIAAFJgEAoDgBEQgKACgDADIgFAEIgDAHIgCAHIgBAKIAAAcIABAIIACAIIADAGIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgGIACgIIABgIIAAgcIgBgKIgCgHIgDgHIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgAW2gIQABAKABAEIADAGIAEAFIAGAEIAGADQAFABANABIApAAQAHAAAKgCIAHgDIAFgEIAEgFIADgGQACgEABgKIAAg9IgdAAIAAA2IgBAIIgDAGIgFACIgHAAIgdAAIgIAAIgFgCIgCgGIgBgIIAAg2IgdAAgAU7hEQgJACgEADIgEAEIgEAHIgCAHIgBAKIAAAcIABAIIACAIIAEAGIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgGIACgIIABgIIAAgcIgBgKIgCgHIgEgHIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgEAsSAAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEAqbgArIA2BEIAtAAIAAheIgdAAIAABFIgBAAIg2hFIgsAAIAABeIAcAAIAAhEgEAm9AAZIAcAAIAAheIgsAAIghA9Iggg9IgsAAIAABeIAcAAIAAhDIAmBDIAVAAIAmhDgEAk1AAZIg0heIglAAIgzBeIAgAAIAIgRIA7AAIAJARIAgAAgEAiAAAZIAdAAIAAheIgdAAgAfvAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAc0AZIBpAAIAAgXIhMAAIAAgOIBGAAIAAgUIhGAAIAAgPIBKAAIAAgWIhnAAgAbKAZIBeAAIAAgYIhBAAIAAhGIgdAAgAZAAZIBcAAIALgBQAGgCADgCQAEgDACgFQADgFAAgHIgBgIIgDgIIgGgEIgIgCIAAgBIAGgCIAEgDIADgGIABgKQAAgHgCgEQgCgFgEgDQgEgDgHgCIgPgBIhTAAgASWAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgnEAAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA4HALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgrPAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgAzyAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEggVAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEgtuAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAZdACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgEAoZAABIgIAAQgDgBgCgCQgCgCgBgEIAAgJIAAgJIAAgJIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAJIAAAJIgBAJQgBAEgCACQgBACgEABIgIAAgAVSABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsvAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAgMAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgASzABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA9EgBIASgkIATAkgEAjcgALIASgkIATAkgEgnEgAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgAZdggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_45.setTransform(376.5,288);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag2AwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAcAAIAAA7QAAAMgCADIgDAHIgEAEIgFAFIgHACQgKACgHAAgApuAwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIADgFIAAgIIAAg1IAdAAIAAA7QAAAMgCADIgDAHIgEAEIgFAFIgHACQgKACgHAAgAr+AwQgJAAgIgCQgJgCgEgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQAEgCAJgCQAIgCAJAAIAvAAQALAAAGACIAHACIAHACIAEAFIAEAGIABAHIABAKIAAAbIgBAKIgBAHIgEAGIgEAFIgHADIgHABQgGACgLAAgAsBgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQACADADABIAJABIAkAAIAJgBQADgBABgDQADgBAAgFIABgIIAAgJIgBgIQAAgDgDgDQgBgCgEgCQgEgBgFAAIgiAAQgGAAgEABgANMAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBMAAIAAAWgAMMAvIg2hDIgBAAIAABDIgcAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAKOAvIgJgRIg6AAIgIARIghAAIAzhdIAlAAIA1BdgAJ6AKIgSgjIgSAjIAkAAgAH7AvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAhIA9AAIAAghIAdAAIAABdgAFQAvIAAhGIgpAAIAAgXIBuAAIAAAXIgpAAIAABGgAC0AvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgACDAvIAAgLIgBgHIgCgDIgEgDIgFgBIgtAAIAAAZIgdAAIAAhdIBXAAQAIAAAGACQAFACAEAEQADADABAGIABALIAAAGIgBAIIgCAGIgFAFQgDACgFABIAGACQADABACADQACACABADIABAKIAAAQgABKAAIAvAAQAGAAADgCQACgDAAgEIAAgEIgBgFIgCgDQgDgCgHAAIgtAAgAkWAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmAAvIAAhdIAdAAIAABFIBAAAIAAAYgAoKAvIAAhdIBTAAIAPABQAGABAEADQAFADACAFQACAFAAAGIgBALIgDAFIgFAEIgFACIAAAAIAIABIAFAFIAEAHIABAJQgBAHgCAGQgCAEgEAEQgDACgGABIgLABgAntAZIAzAAQAFAAADgCQACgCAAgDQAAgFgCgCQgDgBgFgBIgzAAgAntgJIAyAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgBgFgBIgyAAgAu0AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAuYAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_46.setTransform(583.2,285.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag2AwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgKACgGAAgApuAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAdAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgAr+AwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAIABIAGADIAEAFIADAGIADAHIABAKIAAAbIgBAKIgDAHIgDAGIgEAFIgGACIgIACQgHACgKAAgAsAgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgDgCgHAAIghAAQgFAAgEACgANMAvIAAhdIBnAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAMMAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAKOAvIgJgRIg7AAIgIARIggAAIAzhdIAmAAIAzBdgAJ7AKIgTgjIgSAjIAlAAgAH7AvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAiIA9AAIAAgiIAdAAIAABdgAFPAvIAAhGIgoAAIAAgXIBuAAIAAAXIgoAAIAABGgAC0AvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgACDAvIAAgLIgBgHIgCgDIgEgDIgFAAIguAAIAAAYIgcAAIAAhdIBXAAQAIAAAFACQAGABADAFQAEADABAGIABALIAAAGIAAAJIgDAFIgFAFQgDACgFABIAGACQADABACADQADACABADIABAKIAAAQgABJAAIAxAAQAFAAADgCQACgCAAgFIAAgEIgBgFIgCgDQgDgCgIAAIgtAAgAkWAvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgAmAAvIAAhdIAdAAIAABFIBBAAIAAAYgAoKAvIAAhdIBTAAIAPABQAHACADACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAnuAZIA0AAQAFgBADgBQADgCgBgEQABgEgDgCQgDgBgFgBIg0AAgAnugJIA0AAQAEAAACgBQACgCAAgEQAAgEgCgCQgCgCgEAAIg0AAgAu0AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAuXAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAg");
	this.shape_47.setTransform(170.3,286.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D1341").s().p("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AAIAAgYIhBAAIAAhGIgdAAgAYIAZIBcAAIALgBQAGgCADgCQAEgDACgFQADgFAAgHIgBgIIgDgIIgGgEIgIgCIAAgBIAGgCIAEgDIADgGIABgKQAAgHgCgEQgCgFgEgDQgEgDgHgCIgPgBIhTAAgAReAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgn8AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgEgsHAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgumAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAYlACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgAUaABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgAR7ABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA24gBIASgkIATAkgEAppgALIASgkIATAkgA/EgNIAAgWIAtAAQAIAAADABIACADIABAFIAAAEQAAAFgDACQgCACgGAAgEgn8gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgEAhdgAXIAAgWIAtAAQAHAAADACIACACIABAGIAAADQAAAFgCACQgDACgFAAgAYlggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_48.setTransform(376.5,288);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhiAwQgNAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgDAAgMIAAg7IAdAAIAAA1IABAIIACAFIAFADIAHABIAeAAIAHgBIAFgDIACgFIABgIIAAg1IAeAAIAAA7QgBAMgCADIgDAHIgEAEIgGAFIgGACQgKACgIAAgAoQAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgCgHIgCgKIAAgbIACgKIACgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAsAAQAHAAAMACIAHACIAEAEQAEADACAHQABAFAAAHIAAADIgcAAIgBgFIgEgEQgDgBgHgBIgfAAIgJABQgEABgCADQgCABgBAEIAAAKIAAALIAAAKQABADACACQACADAEABIAJABIAeAAQAIAAADgCIADgEQABgCABgDIAAgDIgkAAIAAgSIBAAAIAAAZIAAAJIgCAIQgBACgDACIgEAEIgHACIgIABIgVABgAtiAwIgRgBQgHgCgFgCQgEgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAGAAIAkAAQAFAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgagBIgJgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAHACIAEADQADAEACAFIABAMIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAXAAIAcABIAKABIAHACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgEAEIgGADIgIABIgYABgAMgAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgALfAvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgAJhAvIgJgRIg6AAIgJARIggAAIAzhdIAlAAIA0BdgAJNAKIgTgjIgSAjIAlAAgAHOAvIAAgkIg9AAIAAAkIgdAAIAAhdIAdAAIAAAhIA9AAIAAghIAdAAIAABdgAEiAvIAAhGIgoAAIAAgXIBuAAIAAAXIgpAAIAABGgACHAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgABWAvIAAgLIgBgHIgCgDIgDgDIgGgBIguAAIAAAZIgcAAIAAhdIBXAAQAIAAAFACQAGACAEAEQACADACAGIABALIAAAGIAAAIIgDAGIgFAFQgDACgFABIAGACQADABACADQACACABADIACAKIAAAQgAAcAAIAwAAQAGAAACgCQADgDAAgEIAAgEIgBgFIgCgDQgDgCgIAAIgtAAgAlDAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmtAvIAAhdIAcAAIAABFIBBAAIAAAYgAp3AvIg2hDIgBAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAeAAIAABdgAr8AvIAAhdIAcAAIAABdg");
	this.shape_49.setTransform(583.1,285.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhjAwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgEgBgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA8QAAAKgCAEIgDAHIgEAEIgFAFIgHACQgKACgHAAgAoQAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAsAAQAHAAAMACIAHACIAFAEQADADACAHQABAEAAAIIAAADIgcAAIgCgFIgDgEQgCgBgIgBIggAAIgJABQgDABgCADQgCACgBADIgBAKIAAALIABAKQABADACACQACADADABIAJABIAgAAQAGAAAEgCIADgEQACgCAAgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgDAIQgBACgCADIgEADIgHACIgIABIgVABgAtiAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQACABAIAAIAjAAQAGAAACgBIADgCIABgFIgBgFIgFgDIgMgBIgXAAIgZgBIgJgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGAEgDIAEgEIAHgDIAJgBIA1gBQAIAAALACIAHACIAEAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgEgCIgoAAQgFAAgDABQgDACAAAEIABAFIAFADQAEABAYAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgFACIgIACIgYABgAMfAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBMAAIAAAWgALfAvIg2hDIgBAAIAABDIgcAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAJhAvIgJgRIg6AAIgIARIghAAIAzhdIAmAAIA0BdgAJOAKIgTgjIgSAjIAlAAgAHOAvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAiIA9AAIAAgiIAdAAIAABdgAEjAvIAAhGIgpAAIAAgXIBuAAIAAAXIgoAAIAABGgACHAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgABWAvIAAgLIgBgHIgCgDIgEgDIgFAAIgtAAIAAAYIgdAAIAAhdIBXAAQAIAAAGACQAFABAEAFQADADABAGIABALIAAAGIgBAJIgCAFIgFAFQgDACgFABIAGACQADABACADQACACABADIABAKIAAAQgAAdAAIAwAAQAFAAADgCQACgCAAgFIAAgEIgBgFIgCgDQgDgCgHAAIgtAAgAlDAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmtAvIAAhdIAdAAIAABFIBAAAIAAAYgAp4AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAr9AvIAAhdIAdAAIAABdg");
	this.shape_50.setTransform(170.1,286.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0D1341").s().p("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");
	this.shape_51.setTransform(376.5,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},10).to({state:[{t:this.shape_33}]},9).to({state:[{t:this.shape_34}]},9).to({state:[{t:this.shape_35}]},9).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},8).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_36}]},10).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},9).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_41}]},9).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},9).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},9).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},9).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_36}]},9).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},9).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_41}]},9).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},9).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},6).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},6).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_36}]},9).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},9).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_41}]},9).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},9).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},7).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},7).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_36}]},9).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},9).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_41}]},9).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},9).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},7).wait(7));

	// buttons
	this.btn_Kmt4 = new lib._4015_GRMtc();
	this.btn_Kmt4.parent = this;
	this.btn_Kmt4.setTransform(529.7,147,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Kmt4, 0, 1, 2, false, new lib._4015_GRMtc(), 3);

	this.btn_Kmt3 = new lib._3014_GRMtc();
	this.btn_Kmt3.parent = this;
	this.btn_Kmt3.setTransform(423.5,147,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Kmt3, 0, 1, 2, false, new lib._3014_GRMtc(), 3);

	this.btn_Kmt2 = new lib._1513_GRMtc();
	this.btn_Kmt2.parent = this;
	this.btn_Kmt2.setTransform(309.1,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Kmt2, 0, 1, 2, false, new lib._1513_GRMtc(), 3);

	this.btn_Kmt1 = new lib._0150_GRMtc();
	this.btn_Kmt1.parent = this;
	this.btn_Kmt1.setTransform(198.9,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Kmt1, 0, 1, 2, false, new lib._0150_GRMtc(), 3);

	this.btn_K_SCB_SDB = new lib.But_S_SCBSDB_GRMtc();
	this.btn_K_SCB_SDB.parent = this;
	this.btn_K_SCB_SDB.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SCB_SDB, 0, 1, 2, false, new lib.But_S_SCBSDB_GRMtc(), 3);

	this.btn_K_SDB_SDB = new lib.But_S_SDBSDB_GRMtc();
	this.btn_K_SDB_SDB.parent = this;
	this.btn_K_SDB_SDB.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SDB_SDB, 0, 1, 2, false, new lib.But_S_SDBSDB_GRMtc(), 3);

	this.btn_K_SUB_SUB = new lib.But_S_SUBSUB_GRMtc();
	this.btn_K_SUB_SUB.parent = this;
	this.btn_K_SUB_SUB.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SUB_SUB, 0, 1, 2, false, new lib.But_S_SUBSUB_GRMtc(), 3);

	this.btn_K_DUB_DUB = new lib.But_S_DUBDUB_GRMtc();
	this.btn_K_DUB_DUB.parent = this;
	this.btn_K_DUB_DUB.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DUB_DUB, 0, 1, 2, false, new lib.But_S_DUBDUB_GRMtc(), 3);

	this.btn_K_DDB_DDB = new lib.But_S_DDBDDB_GRMtc();
	this.btn_K_DDB_DDB.parent = this;
	this.btn_K_DDB_DDB.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DDB_DDB, 0, 1, 2, false, new lib.But_S_DDBDDB_GRMtc(), 3);

	this.btn_K_DCB_DDB = new lib.BUT_S_DCBDDB_GRMtc();
	this.btn_K_DCB_DDB.parent = this;
	this.btn_K_DCB_DDB.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DCB_DDB, 0, 1, 2, false, new lib.BUT_S_DCBDDB_GRMtc(), 3);

	this.btn_K_SCS_SDS = new lib.But_S_SCSSDS_GRMtc();
	this.btn_K_SCS_SDS.parent = this;
	this.btn_K_SCS_SDS.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SCS_SDS, 0, 1, 2, false, new lib.But_S_SCSSDS_GRMtc(), 3);

	this.btn_K_SDS_SDS = new lib.But_S_SDSSDS_GRMtc();
	this.btn_K_SDS_SDS.parent = this;
	this.btn_K_SDS_SDS.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SDS_SDS, 0, 1, 2, false, new lib.But_S_SDSSDS_GRMtc(), 3);

	this.btn_K_SUS_SUS = new lib.But_S_SUSSUS_GRM();
	this.btn_K_SUS_SUS.parent = this;
	this.btn_K_SUS_SUS.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SUS_SUS, 0, 1, 2, false, new lib.But_S_SUSSUS_GRM(), 3);

	this.btn_K_DUS_DUS = new lib.But_S_DUSDUS_GRM();
	this.btn_K_DUS_DUS.parent = this;
	this.btn_K_DUS_DUS.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DUS_DUS, 0, 1, 2, false, new lib.But_S_DUSDUS_GRM(), 3);

	this.btn_K_DDS_DDS = new lib.But_S_DDSDDS_GRMtc();
	this.btn_K_DDS_DDS.parent = this;
	this.btn_K_DDS_DDS.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DDS_DDS, 0, 1, 2, false, new lib.But_S_DDSDDS_GRMtc(), 3);

	this.btn_K_DCS_DDS = new lib.BUT_S_DCSDDS_GRMtc();
	this.btn_K_DCS_DDS.parent = this;
	this.btn_K_DCS_DDS.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DCS_DDS, 0, 1, 2, false, new lib.BUT_S_DCSDDS_GRMtc(), 3);

	this.btn_K_SCG_SDG = new lib.But_S_SCGSDG_GRMtc();
	this.btn_K_SCG_SDG.parent = this;
	this.btn_K_SCG_SDG.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SCG_SDG, 0, 1, 2, false, new lib.But_S_SCGSDG_GRMtc(), 3);

	this.btn_K_SDG_SDG = new lib.But_S_SDGSDG_GRMtc();
	this.btn_K_SDG_SDG.parent = this;
	this.btn_K_SDG_SDG.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SDG_SDG, 0, 1, 2, false, new lib.But_S_SDGSDG_GRMtc(), 3);

	this.btn_K_SUG_SUG = new lib.But_S_SUGSUG_GRM();
	this.btn_K_SUG_SUG.parent = this;
	this.btn_K_SUG_SUG.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SUG_SUG, 0, 1, 2, false, new lib.But_S_SUGSUG_GRM(), 3);

	this.btn_K_DUG_DUG = new lib.But_S_DUGDUG_GRM();
	this.btn_K_DUG_DUG.parent = this;
	this.btn_K_DUG_DUG.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DUG_DUG, 0, 1, 2, false, new lib.But_S_DUGDUG_GRM(), 3);

	this.btn_K_DDG_DDG = new lib.But_S_DDGDDG_GRMtc();
	this.btn_K_DDG_DDG.parent = this;
	this.btn_K_DDG_DDG.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DDG_DDG, 0, 1, 2, false, new lib.But_S_DDGDDG_GRMtc(), 3);

	this.btn_K_DCG_DDG = new lib.BUT_S_DCGDDG_GRMtc();
	this.btn_K_DCG_DDG.parent = this;
	this.btn_K_DCG_DDG.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DCG_DDG, 0, 1, 2, false, new lib.BUT_S_DCGDDG_GRMtc(), 3);

	this.btn_K_SCR_SDR = new lib.But_S_SCRSDR_GRMtc();
	this.btn_K_SCR_SDR.parent = this;
	this.btn_K_SCR_SDR.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SCR_SDR, 0, 1, 2, false, new lib.But_S_SCRSDR_GRMtc(), 3);

	this.btn_K_SDR_SDR = new lib.But_S_SDRSDR_GRMtc();
	this.btn_K_SDR_SDR.parent = this;
	this.btn_K_SDR_SDR.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SDR_SDR, 0, 1, 2, false, new lib.But_S_SDRSDR_GRMtc(), 3);

	this.btn_K_SUR_SUR = new lib.But_S_SURSUR_GRM();
	this.btn_K_SUR_SUR.parent = this;
	this.btn_K_SUR_SUR.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_SUR_SUR, 0, 1, 2, false, new lib.But_S_SURSUR_GRM(), 3);

	this.btn_K_DUR_DUR = new lib.But_S_DURDUR_GRM();
	this.btn_K_DUR_DUR.parent = this;
	this.btn_K_DUR_DUR.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DUR_DUR, 0, 1, 2, false, new lib.But_S_DURDUR_GRM(), 3);

	this.btn_K_DDR_DDR = new lib.But_S_DDRDDR_GRMtc();
	this.btn_K_DDR_DDR.parent = this;
	this.btn_K_DDR_DDR.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DDR_DDR, 0, 1, 2, false, new lib.But_S_DDRDDR_GRMtc(), 3);

	this.btn_K_DCR_DDR = new lib.BUT_S_DCRDDR_GRMtc();
	this.btn_K_DCR_DDR.parent = this;
	this.btn_K_DCR_DDR.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_K_DCR_DDR, 0, 1, 2, false, new lib.BUT_S_DCRDDR_GRMtc(), 3);

	this.btn_1kBACK = new lib.BACK_TIPCOMBOS_GRMtc();
	this.btn_1kBACK.parent = this;
	this.btn_1kBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_1kBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMtc(), 3);

	this.btn_2kBACK = new lib.BACK_TIPCOMBOS_GRMsil();
	this.btn_2kBACK.parent = this;
	this.btn_2kBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_2kBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMsil(), 3);

	this.btn_3kBACK = new lib.BACK_TIPCOMBOS_GRMgol();
	this.btn_3kBACK.parent = this;
	this.btn_3kBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_3kBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMgol(), 3);

	this.btn_4kBACK = new lib.BACK_TIPCOMBOS_GRMred();
	this.btn_4kBACK.parent = this;
	this.btn_4kBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_4kBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMred(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Kmt1},{t:this.btn_Kmt2},{t:this.btn_Kmt3},{t:this.btn_Kmt4}]}).to({state:[{t:this.btn_K_DCB_DDB},{t:this.btn_K_DDB_DDB},{t:this.btn_K_DUB_DUB},{t:this.btn_K_SUB_SUB},{t:this.btn_K_SDB_SDB},{t:this.btn_K_SCB_SDB}]},10).to({state:[{t:this.btn_K_DCS_DDS},{t:this.btn_K_DDS_DDS},{t:this.btn_K_DUS_DUS},{t:this.btn_K_SUS_SUS},{t:this.btn_K_SDS_SDS},{t:this.btn_K_SCS_SDS}]},9).to({state:[{t:this.btn_K_DCG_DDG},{t:this.btn_K_DDG_DDG},{t:this.btn_K_DUG_DUG},{t:this.btn_K_SUG_SUG},{t:this.btn_K_SDG_SDG},{t:this.btn_K_SCG_SDG}]},9).to({state:[{t:this.btn_K_DCR_DDR},{t:this.btn_K_DDR_DDR},{t:this.btn_K_DUR_DUR},{t:this.btn_K_SUR_SUR},{t:this.btn_K_SDR_SDR},{t:this.btn_K_SCR_SDR}]},9).to({state:[{t:this.btn_1kBACK}]},8).to({state:[{t:this.btn_2kBACK}]},55).to({state:[{t:this.btn_3kBACK}]},48).to({state:[{t:this.btn_4kBACK}]},50).wait(50));

	// GRAPHICS
	this.btn_backJstK = new lib.BACK_JawStyles_GRMtc();
	this.btn_backJstK.parent = this;
	this.btn_backJstK.setTransform(701.4,277.5,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_backJstK, 0, 1, 2, false, new lib.BACK_JawStyles_GRMtc(), 3);

	this.btn_bkKst = new lib.BACK_MATthickness_GRMtc();
	this.btn_bkKst.parent = this;
	this.btn_bkKst.setTransform(701.4,276.5,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_bkKst, 0, 1, 2, false, new lib.BACK_MATthickness_GRMtc(), 3);

	this.instance_2 = new lib.K_A_SCB_B_SDB_GRMtc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_3 = new lib.K_A_SDB_B_SDB_GRMtc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_4 = new lib.K_A_DCB_B_DDB_GRMtc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_5 = new lib.K_A_DDB_B_DDB_GRMtc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_6 = new lib.K_A_DUB_B_DUB_GRMtc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_7 = new lib.K_A_SUB_B_SUB_GRMtc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_8 = new lib.K_A_SCS_B_SDS_GRMtc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_9 = new lib.K_A_SDS_B_SDS_GRMtc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_10 = new lib.K_A_DCS_B_DDS_GRMtc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_11 = new lib.K_A_DDS_B_DDS_GRMtc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_12 = new lib.K_A_SCG_B_SDG_GRMtc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_13 = new lib.K_A_SDG_B_SDG_GRMtc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_14 = new lib.K_A_DCG_B_DDG_GRMtc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_15 = new lib.K_A_DDG_B_DDG_GRMtc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_16 = new lib.K_A_SCR_B_SDR_GRMtc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_17 = new lib.K_A_SDR_B_SDR_GRMtc();
	this.instance_17.parent = this;
	this.instance_17.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_18 = new lib.K_A_DCR_B_DDR_GRMtc();
	this.instance_18.parent = this;
	this.instance_18.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_19 = new lib.K_A_DDR_B_DDR_GRMtc();
	this.instance_19.parent = this;
	this.instance_19.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_backJstK}]}).to({state:[{t:this.btn_bkKst}]},10).to({state:[{t:this.instance_2}]},35).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_16}]},7).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_18}]},9).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},7).wait(7));

	// txt_playapplication:
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AD2BIIAAggIAOAAQAIAAADgDQAEgDAAgIIAAgzQAAgIgEgDQgDgDgIAAIgOAAIAAggIAZAAQAKAAAHADQAIACAFAFQAGAFACAIQADAIAAALIAAA7QAAALgDAJQgCAIgGAFQgFAEgIADQgHACgKAAgAkNBIQgLAAgHgCQgIgDgFgEQgFgFgDgIQgDgJAAgLIAAg7QAAgLADgIQADgIAFgFQAFgFAIgCQAHgDALAAIAYAAIAAAgIgOAAQgIAAgDADQgEADAAAIIAAAzQAAAIAEADQADADAIAAIAOAAIAAAggAC6BGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3gAgvBGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3g");
	this.shape_52.setTransform(367,110.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("AdJBIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAaABIQgPAAgKgCQgKgCgHgEQgGgEgEgHQgDgIAAgLIAAgKIAsAAQgBAGACADQABADACACQAEACAKAAIA1AAQAJAAADgBIAFgEQABgCAAgEQAAgFgBgDQgDgCgFgBQgGgCgMAAIghAAQgdgBgKgBIgNgDQgFgBgEgDQgDgCgCgDQgDgCgBgEQgCgIgBgOQABgLABgGQABgJAGgGIAHgFIAKgEIANgDIBOgBQANAAAQADIAKAEIAHAFQAFAFACAIQABAGABALIAAAEIgsAAQAAgIgCgDQgCgCgFAAIgLgBIgwAAQgHAAgFACQgFADABAGQgBAFACACQACACAFACQAHABAkAAIApABIAPACQAGACAFACQAEACADAEQADADACAEIADAKIABAOQgCARgCAGQgBAEgCADIgHAGIgKAEIgLACQgNACgWAAgANeBIQgOAAgMgCQgOgEgFgEQgEgDgDgEQgDgEgCgFIgDgLIgBgOIAAgpIABgOIADgLQACgFADgEQADgEAEgDQAFgDAOgEQAMgDAOAAIA0AAQAPAAAVADIAMAEQAFACADADQAEADADAEQACAEABAFQACAJAAAQIgrAAIAAgEQAAgHgFgDQgFgCgKAAIgvAAQgJAAgEABQgGACgDAEQgCADgCAGIgBAMIAAAOIABANQABAFADADQADAEAEABQAFACAIAAIA5gBIAIgCQADgCACgEIABgLIArAAIAAAOQAAAJgCAHQgDAIgFAGQgGAGgJADQgQADgLAAgA58BIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIAzAAQAPAAAVADIANAEQAFACADADQAEADACAEQADAEABAFQACAJAAAQIgsAAIAAgEQAAgHgFgDQgEgCgKAAIgvAAQgJAAgFABQgGACgDAEQgCADgBAGIgBAMIAAAOIABANQAAAFADADQADAEAFABQAEACAIAAIA6gBIAIgCQADgCABgEIABgLIArAAIAAAOQAAAJgBAHQgDAIgGAGQgFAGgKADQgPADgMAAgAWWBGIAAiLICaAAIAAAhIhuAAIAAAWIBoAAIAAAcIhoAAIAAAXIBwAAIAAAhgAU3BGIhQhlIgBAAIAABlIgrAAIAAiLIBCAAIBRBlIABAAIAAhlIArAAIAACLgARuBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IAUAAIA2g0IA7AAIhMBFIBVBGgALaBGIAAiLIArAAIAACLgAKPBGIAAg1IhaAAIAAA1IgsAAIAAiLIAsAAIAAAyIBaAAIAAgyIArAAIAACLgAGPBGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogABfBGIAAiLIArAAIAABnIBgAAIAAAkgAAgBGIgOgZIhWAAIgNAZIgvAAIBLiLIA3AAIBOCLgAACAPIgbgzIgbAzIA2AAgAi9BGIAAiLIArAAIAACLgAkIBGIgBgaQgBgEgCgCQgCgCgDgBIgJgBIhEAAIAAAkIgrAAIAAiLICDAAQAMAAAIADQAIADAFAFQAEAGACAHQACAIABAKIAAAJIgCAMIgDAJQgDAEgFADQgFADgGACIAJADQAEACADADQADAEACAFQACAGAAAIIAAAYgAleAAIBHAAQAJAAAEgEQADgDABgIIAAgEIgBgIQgCgDgDgBQgDgDgLAAIhEAAgAo+BGIAAiLICZAAIAAAhIhuAAIAAAWIBpAAIAAAcIhpAAIAAAXIBxAAIAAAhgAq5BGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogAsqBGIgNgZIhXAAIgNAZIgwAAIBMiLIA4AAIBNCLgAtHAPIgcgzIgbAzIA3AAgAwEBGIAAhjIAAAAIg4BjIghAAIg4hjIAABjIgqAAIAAiLIBBAAIAxBZIAxhZIBCAAIAACLgA1sBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IATAAIA3g0IA7AAIhNBFIBWBGgA8ABGIAAiLIArAAIAACLgA/DBGIAAiLIB2AAQAKAAAPAEQAFABADADIAIAGQAFAGADAJQABAIAAALIAAAMQAAAIgBAHQgCAIgFAGQgFAHgHAEQgLAEgIAAIhWAAIAAAjgA+YAAIBEAAQAGAAAEgDQADgEAAgHIAAgFQAAgIgDgDQgFgEgKAAIg/AAg");
	this.shape_53.setTransform(369.2,80.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_54.setTransform(368.8,97);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_55.setTransform(368.3,165.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_56.setTransform(477.6,144.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_57.setTransform(367.7,144.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_58.setTransform(254.1,144.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_59.setTransform(368.3,124.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#555E6E").s().p("EgivAFSIAAqjMBFeAAAIAAKjgADjh+IAYAAQAKAAAIgCQAIgCAFgFQAGgFACgIQADgIAAgMIAAg7QAAgMgDgIQgCgIgGgFQgFgFgIgCQgIgCgKAAIgYAAIAAAfIANAAQAJAAADADQAEAEAAAIIAAAzQAAAJgEADQgDADgJAAIgNAAgAkykLQgIACgFAFQgFAFgDAIQgDAIAAAMIAAA7QAAAMADAIQADAIAFAFQAFAFAIACQAHACAKAAIAZAAIAAgfIgOAAQgIAAgEgDQgDgDAAgJIAAgzQAAgIADgEQAEgDAIAAIAOAAIAAgfIgZAAQgKAAgHACgACbjGQAFABACADQADABACAEIAAAJIAAA1IAlAAIAAg4QABgLgDgIQgCgIgGgGQgFgGgKgDQgIgDgNAAIgLAAQgIAAgGACQgGABgEACQgDADgEAEIgEALIgHgKQgDgEgFgDQgFgDgFgBQgFgCgHAAIgOAAQgHAAgGACQgGABgEADQgEACgCAEQgDAEgBAFIgBAAIAAgTIgiAAIAABjIAkAAIAAg0QAAgGACgEQABgEADgCQADgCAEgBIAKgBIAPABQAEABAEACQACABABADIABAIIAAA4IAmAAIAAg3IABgIQACgDACgCQAEgCAFgBIALgBIANABgAhOjGQAFABACADQADABACAEIAAAJIAAA1IAlAAIAAg4QABgLgDgIQgCgIgGgGQgFgGgKgDQgIgDgNAAIgLAAQgIAAgGACQgGABgEACQgDADgEAEIgEALIgHgKQgDgEgFgDQgFgDgFgBQgFgCgHAAIgOAAQgHAAgGACQgGABgEADQgEACgCAEQgDAEgBAFIgBAAIAAgTIgjAAIAABjIAlAAIAAg0QAAgGACgEQABgEADgCQADgCAEgBIAKgBIAPABQAEABAEACQACABABADIABAIIAAA4IAmAAIAAg3IABgIQACgDADgCQADgCAFgBIALgBIANABg");
	this.shape_60.setTransform(368.9,130.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[]},10).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.9,116.1,749.2,334.3);
// library properties:
lib.properties = {
	width: 750,
	height: 305,
	fps: 30,
	color: "#3E495B",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GRM_TipsKstyle_atlas_.png", id:"GRM_TipsKstyle_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;