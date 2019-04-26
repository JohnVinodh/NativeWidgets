(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GRM_TipsJstyle_atlas_", frames: [[1056,1435,350,285],[1056,3731,350,285],[0,0,350,285],[0,287,350,285],[0,574,350,285],[1408,0,350,285],[1408,287,350,285],[1408,574,350,285],[704,1722,350,285],[0,861,350,285],[0,1148,350,285],[0,1435,350,285],[0,1722,350,285],[0,2009,350,285],[1408,861,350,285],[704,2009,350,285],[704,2296,350,285],[1056,1722,350,285],[704,2583,350,285],[704,2870,350,285],[0,2296,350,285],[0,2583,350,285],[1408,1148,350,285],[1408,1435,350,285],[1408,1722,350,285],[1408,2009,350,285],[1408,2296,350,285],[0,2870,350,285],[0,3157,350,285],[0,3444,350,285],[1056,2009,350,285],[1408,2583,350,285],[1408,2870,350,285],[1408,3157,350,285],[0,3731,350,285],[352,0,350,285],[704,3157,350,285],[1408,3444,350,285],[1408,3731,350,285],[1056,2296,350,285],[1760,0,350,285],[1760,287,350,285],[1760,574,350,285],[352,287,350,285],[704,3444,350,285],[352,574,350,285],[704,3731,350,285],[1056,0,350,285],[1056,287,350,285],[1760,861,350,285],[352,861,350,285],[352,1148,350,285],[352,1435,350,285],[1056,2583,350,285],[1760,1148,350,285],[352,1722,350,285],[352,2009,350,285],[352,2296,350,285],[352,2583,350,285],[352,2870,350,285],[352,3157,350,285],[352,3444,350,285],[352,3731,350,285],[704,0,350,285],[704,287,350,285],[704,574,350,285],[704,861,350,285],[704,1148,350,285],[1056,2870,350,285],[1760,1435,350,285],[1760,1722,350,285],[1760,2009,350,285],[1056,3157,350,285],[704,1435,350,285],[1056,3444,350,285],[1760,2296,350,285],[1760,2583,350,285],[1760,2870,350,285],[1056,574,350,285],[1056,861,350,285],[1056,1148,350,285],[1760,3157,135,135],[1897,3157,135,135],[2034,3157,135,135],[1760,3294,135,135],[1897,3294,135,135],[2034,3294,135,135],[1760,3431,135,135],[1897,3431,135,135],[2034,3431,135,135]]}
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



(lib.Assemblies_J_JawA_DCB0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCB0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0002 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0004 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0006 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0008 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0010 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0012 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCG0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0002 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0004 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0006 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCR0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DCS0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDB0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDG0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DDS0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawA_DUB0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_J_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0003 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0005 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0007 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0009 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0011 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0013 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.AssembliesJ_JawA_DDR0015 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DCB0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DCG0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DCR0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DCS0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDG0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DUB_SingleJawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsJstyle_atlas_"];
	this.gotoAndStop(89);
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


(lib.BACK_TIPCOMBOS_GRMsi = function(mode,startPosition,loop) {
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


(lib.BACK_TIPCOMBOS_GRMre = function(mode,startPosition,loop) {
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


(lib.BACK_TIPCOMBOS_GRMgo = function(mode,startPosition,loop) {
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


(lib.BACK_TIPCOMBOS_GRM = function(mode,startPosition,loop) {
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


(lib.DUB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape.setTransform(65.2,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAoQgLAAgDgCIgGgCIgFgDIgEgEIgCgFIgBgNIAAgyIAXAAIAAAtIABAGIADAEQABACADABIAHABIAXAAIAGgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgEIABgGIAAgtIAZAAIAAAyQgBAJgBAEIgDAFIgDAEIgFADIgFACQgKACgFAAgABFAnIAAhOIBFAAIAOABQAFABAEACQADADABAEQADAEAAAFIgBAJQgBADgCACIgDADIgGACIAAAAIAHABQADABACADIADAFIAAAIQABAGgCAFQgCAEgEACQgCACgGABIgJABgABcAUIAsAAQAFAAACgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAgBQAAgDgCgCIgHgBIgsAAgABcgIIAsAAQADAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgCgCQgCgBgDAAIgsAAgAiqAnIAAhOIBKAAIAQABIAGACIAEADIAEAEIACAFQABAFAAAHIAAAYQAAAHgBAFIgCAFIgEAEIgEADIgGACIgQABgAiRATIAsAAIAGgBIAFgCQACgCAAgDIABgHIAAgJIgBgHQAAgDgCgCQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(72.1,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DUB_SingleJawA0000();
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


(lib.DDS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABmApIgOgBQgGgBgEgDQgDgCgCgEQgCgEAAgHIAAgFIAZAAIAAAFIACACQACACAGAAIAeAAIAHgBIADgCIAAgEIgBgEIgEgCIgKgBIgTAAIgWgBIgHgCIgFgCIgEgDIgCgDIgBgMIABgKQABgFADgDIAEgEIAFgCIAIgBIAsgBIARACIAGACIADADQADADABAEIABAKIAAACIgYAAQAAgFgCgBIgEgCIghAAQgEAAgDACQgCABAAADIAAAEQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQAEABAVAAIAXABIAIABIAGACIAFADIADAEIABAGIABAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgwAoIAAhPIBJAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAgYATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgrAAgAirAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiSATIArAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgHgBIgrAAg");
	this.shape.setTransform(78.2,-51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDS0001();
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


(lib.DDR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape.setTransform(65.2,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACSAoIgBgPIgBgEIgDgBIgFgBIgmAAIAAAVIgZAAIAAhPIBKAAQAHAAAEACQAFABADAEQADADABAEQABAEAAAGIAAAFIAAAHIgDAFIgEAEIgHACIAAABIAGABIADADIAEAFIABAIIAAAOgABiAAIAoAAQAFAAACgCQACgCAAgEIAAgDIgBgEIgBgDQgDgBgGAAIgmAAgAgwAoIAAhPIBKAAIAPACIAFACIAFADIAEADIABAFQACAFAAAIIAAAXQAAAIgCAFIgBAEIgEAEIgFADIgFACIgPACgAgXATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHgBIgqAAgAiqAoIAAhPIBKAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAiRATIArAAIAGAAIAFgDQACgBABgDIAAgHIAAgKIAAgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgGgBIgrAAg");
	this.shape_1.setTransform(78.2,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDR0001();
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


(lib.DDG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape.setTransform(65.2,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABoApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAFACIAEADQADADACAFIABALIAAACIgYAAIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgHAAIgaAAIgIABQgDABgCACQgBABgBAEIgBAIIAAAJIABAIIACAFQACACADABIAIAAIAaAAIAJgBIADgDIABgEIAAgDIgfAAIAAgPIA3AAIAAAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape_1.setTransform(78.2,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDG0001();
	this.instance.parent = this;
	this.instance.setTransform(0,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#738CB4").s().p("AppLGIAA2LITTAAIAAWLg");
	this.shape_2.setTransform(65.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.5,135,142.1);


(lib.DDB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHAoIAAhPIBGAAIANABQAGABADADQAEACABAEQACAEAAAGIgBAIQAAADgCADIgEACIgFACIAAAAIAHABQADACACACIACAGIABAIQAAAGgCAEQgBAEgEADQgDACgFABIgJABgABfAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABfgHIAsAAQADAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgsAAgAgyAoIAAhPIBJAAIAQACIAFACIAFADIADADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgDAEIgFADIgFACIgQACgAgZATIAqAAIAHAAIAEgDQACgBABgDIABgHIAAgKIgBgHQgBgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgBIgqAAgAisAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiUATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(78.2,-51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DDB0001();
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


(lib.DCS_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkApIgPgBQgGgBgEgDQgDgCgCgEQgBgEAAgHIAAgFIAYAAIAAAFIADACQACACAFAAIAeAAIAIgBIACgCIABgEIgBgEIgFgCIgKgBIgTAAIgVgBIgIgCIgFgCIgDgDIgCgDIgBgMIAAgKQABgFADgDIAEgEIAFgCIAJgBIAsgBIARACIAFACIAEADQACADABAEIABAKIAAACIgYAAQAAgFgCgBIgDgCIgiAAQgEAAgCACQgDABAAADIAAAEQABABAAAAQAAAAABABQABAAAAAAQABAAABAAQADABAVAAIAXABIAIABIAHACIAEADIADAEIACAGIAAAIQgBAJgBAEIgDAEIgDADIgFACIgHACIgUABgAgNApQgJAAgFgCQgJgCgCgCIgFgEIgCgFIgCgGIgBgIIAAgXIABgIIACgGIACgFIAFgEIALgFIAOgBIAcAAIAVACIAHACIAEADIAEAEIACAFQABAFAAAJIgZAAIAAgCQAAgEgCgCQgDgBgGAAIgaAAIgIABQgDABgBACIgDAFIAAAHIAAAHIAAAIIADAFIAEACIAHABIAgAAIAEgCIACgDIABgGIAZAAIAAAIQAAAFgBAEQgBAFgEADQgDADgGACQgIACgGAAgAioAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiPATIArAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgGgBIgrAAg");
	this.shape.setTransform(81,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DCS0000();
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


(lib.DCR_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMApQgJAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIAAgIIAAgXIAAgIIACgGIADgFIAEgEIALgFIAPgBIAcAAIAUACIAHACIAFADIADAEIACAFQACAFAAAJIgZAAIAAgCQAAgEgDgCQgCgBgGAAIgaAAIgIABQgDABgBACIgDAFIAAAHIAAAHIAAAIIACAFIAFACIAHABIAgAAIAEgCIACgDIABgGIAZAAIAAAIQAAAFgCAEQgBAFgDADQgDADgGACQgJACgGAAgACPAoIAAgPIgCgEIgDgBIgFgBIgmAAIAAAVIgYAAIAAhPIBJAAQAHAAAFACQAEABADAEQADADABAEQABAEAAAGIAAAFIAAAHIgDAFIgEAEIgHACIAAABIAGABIAEADIADAFIABAIIAAAOgABfAAIAoAAQAFAAACgCQACgCAAgEIAAgDIAAgEIgCgDQgDgBgGAAIgmAAgAinAoIAAhPIBKAAIAPACIAGACIAEADIAEADIACAFQACAFAAAIIAAAXQAAAIgCAFIgCAEIgEAEIgEADIgGACIgPACgAiPATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(80.9,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DCR0000();
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


(lib.DCG_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAlAAQAHAAAKACIAGACIADADQADADACAFIABALIAAACIgYAAIgBgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgDgCgGAAIgbAAIgHABQgDABgDACQgBABgBAEIgBAIIAAAJIABAIIACAFQADACADABIAHAAIAaAAIAJgBIADgDIABgEIAAgDIgeAAIAAgPIA3AAIgBAdIgCAGIgDAEIgEADIgGACIgHABIgRABgAgPApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQABAFABAJIgZAAIAAgCQAAgEgDgCQgDgBgFAAIgaAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAFACIAHABIAfAAIAFgCIACgDIABgGIAZAAIAAAIQgBAFgBAEQgBAFgDADQgDADgGACQgJACgGAAgAipAoIAAhPIBJAAIAQACIAGACIAEADIADADIADAFQACAFAAAIIAAAXQAAAIgCAFIgDAEIgDAEIgEADIgGACIgQACgAiRATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(81,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DCG0000();
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


(lib.DCB_imaget_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPApQgIAAgGgCQgIgCgDgCIgEgEIgDgFIgCgGIgBgIIAAgXIABgIIACgGIADgFIAEgEIALgFIAOgBIAcAAIAVACIAHACIAFADIADAEIACAFQABAFABAJIgZAAIAAgCQAAgEgDgCQgDgBgFAAIgaAAIgIABQgDABgCACIgCAFIgBAHIAAAHIABAIIACAFIAFACIAHABIAfAAIAFgCIACgDIABgGIAZAAIAAAIQgBAFgBAEQgBAFgDADQgDADgGACQgJACgGAAgABFAoIAAhPIBFAAIAOABQAFABAEADQADACABAEQACAEABAGIgCAIQAAADgCADIgDACIgGACIAAAAIAHABQADACACACIADAGIABAIQAAAGgCAEQgCAEgEADQgCACgGABIgJABgABcAVIAsAAQAFAAACgCQAAAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgCgCIgHgBIgsAAgABcgHIAsAAQAEAAABgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgsAAgAipAoIAAhPIBJAAIAQACIAGACIAEADIADADIADAFQACAFAAAIIAAAXQAAAIgCAFIgDAEIgDAEIgEADIgGACIgQACgAiRATIAsAAIAGAAIAFgDQACgBAAgDIABgHIAAgKIgBgHQAAgDgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGgBIgsAAg");
	this.shape.setTransform(81,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBoIAAhPIBDAAQAFAAAJACIAFACIAEADQADAEABAFIABALIAAAHIgBAJQgBAEgCAEQgDAEgEACQgHACgEAAIgxAAIAAAUgAAyBAIAmAAQAEAAACgCQACgCAAgEIAAgDQAAgEgCgCQgCgDgGAAIgkAAgAgPBoIAAhPIAXAAIAABPgAhWBoIAAg8IgiAAIAAgTIBdAAIAAATIgjAAIAAA8gAAsgWQgJAAgGgBQgIgCgDgDIgEgDIgDgFIgCgHIAAgIIAAgXIAAgIIACgHIADgFIAEgEIALgEIAPgBIAnAAIAPABIAGACIAFACIAEAEIADAFIABAHIABAIIAAAXIgBAIIgBAHIgDAFIgEADIgFADIgGACQgGABgJAAgAAphSQgDABgBACIgDAFIAAAHIAAAJIAAAHIACAFIAFADIAHABIAfAAIAHgBIAEgDIACgFIABgHIAAgJIgBgHIgCgFIgEgDIgIgBIgdAAIgIABgAgrgXIgug6IAAAAIAAA6IgYAAIAAhPIAlAAIAuA5IAAg5IAZAAIAABPg");
	this.shape_1.setTransform(65.2,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Tips_DCB0000();
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


(lib.J_A_DUB_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{assy:0,start:4,dis:39});

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
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DUB0015();
	this.instance.parent = this;
	this.instance.setTransform(-6,-101.2);

	this.instance_1 = new lib.Assemblies_J_JawA_DUB0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-101.2);

	this.instance_2 = new lib.Assemblies_J_JawA_DUB0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-101.2);

	this.instance_3 = new lib.Assemblies_J_JawA_DUB0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-101.2);

	this.instance_4 = new lib.Assemblies_J_JawA_DUB0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-101.2);

	this.instance_5 = new lib.Assemblies_J_JawA_DUB0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-101.2);

	this.instance_6 = new lib.Assemblies_J_JawA_DUB0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-101.2);

	this.instance_7 = new lib.Assemblies_J_JawA_DUB0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-101.2);

	this.instance_8 = new lib.Assemblies_J_JawA_DUB0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-6,-101.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DDS_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DDS0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-127);

	this.instance_1 = new lib.Assemblies_J_JawA_DDS0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-127);

	this.instance_2 = new lib.Assemblies_J_JawA_DDS0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-127);

	this.instance_3 = new lib.Assemblies_J_JawA_DDS0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-127);

	this.instance_4 = new lib.Assemblies_J_JawA_DDS0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-127);

	this.instance_5 = new lib.Assemblies_J_JawA_DDS0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-127);

	this.instance_6 = new lib.Assemblies_J_JawA_DDS0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-127);

	this.instance_7 = new lib.Assemblies_J_JawA_DDS0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-127);

	this.instance_8 = new lib.Assemblies_J_JawA_DDS0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-127);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DDR_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

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
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.AssembliesJ_JawA_DDR0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-126.2);

	this.instance_1 = new lib.AssembliesJ_JawA_DDR0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-126.2);

	this.instance_2 = new lib.AssembliesJ_JawA_DDR0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-126.2);

	this.instance_3 = new lib.AssembliesJ_JawA_DDR0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-126.2);

	this.instance_4 = new lib.AssembliesJ_JawA_DDR0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-126.2);

	this.instance_5 = new lib.AssembliesJ_JawA_DDR0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-126.2);

	this.instance_6 = new lib.AssembliesJ_JawA_DDR0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-126.2);

	this.instance_7 = new lib.AssembliesJ_JawA_DDR0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-126.2);

	this.instance_8 = new lib.AssembliesJ_JawA_DDR0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-126.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DDG_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

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
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DDG0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-125.2);

	this.instance_1 = new lib.Assemblies_J_JawA_DDG0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-125.2);

	this.instance_2 = new lib.Assemblies_J_JawA_DDG0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-125.2);

	this.instance_3 = new lib.Assemblies_J_JawA_DDG0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-125.2);

	this.instance_4 = new lib.Assemblies_J_JawA_DDG0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-125.2);

	this.instance_5 = new lib.Assemblies_J_JawA_DDG0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-125.2);

	this.instance_6 = new lib.Assemblies_J_JawA_DDG0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-125.2);

	this.instance_7 = new lib.Assemblies_J_JawA_DDG0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-125.2);

	this.instance_8 = new lib.Assemblies_J_JawA_DDG0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-125.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DDB_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

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
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DDB0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-125.2);

	this.instance_1 = new lib.Assemblies_J_JawA_DDB0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-125.2);

	this.instance_2 = new lib.Assemblies_J_JawA_DDB0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-125.2);

	this.instance_3 = new lib.Assemblies_J_JawA_DDB0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-125.2);

	this.instance_4 = new lib.Assemblies_J_JawA_DDB0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-125.2);

	this.instance_5 = new lib.Assemblies_J_JawA_DDB0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-125.2);

	this.instance_6 = new lib.Assemblies_J_JawA_DDB0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-125.2);

	this.instance_7 = new lib.Assemblies_J_JawA_DDB0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-125.2);

	this.instance_8 = new lib.Assemblies_J_JawA_DDB0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-125.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DCS_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

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
	this.frame_35 = function() {
		this.stop();
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(40).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DCS0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-126.6);

	this.instance_1 = new lib.Assemblies_J_JawA_DCS0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-126.6);

	this.instance_2 = new lib.Assemblies_J_JawA_DCS0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-126.6);

	this.instance_3 = new lib.Assemblies_J_JawA_DCS0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-126.6);

	this.instance_4 = new lib.Assemblies_J_JawA_DCS0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-126.6);

	this.instance_5 = new lib.Assemblies_J_JawA_DCS0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-126.6);

	this.instance_6 = new lib.Assemblies_J_JawA_DCS0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-126.6);

	this.instance_7 = new lib.Assemblies_J_JawA_DCS0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-126.6);

	this.instance_8 = new lib.Assemblies_J_JawA_DCS0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-126.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DCR_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":41});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(5).call(this.frame_40).wait(39).call(this.frame_79).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},6).wait(39));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DCR0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-126.6);

	this.instance_1 = new lib.Assemblies_J_JawA_DCR0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-126.6);

	this.instance_2 = new lib.Assemblies_J_JawA_DCR0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-126.6);

	this.instance_3 = new lib.Assemblies_J_JawA_DCR0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-126.6);

	this.instance_4 = new lib.Assemblies_J_JawA_DCR0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-126.6);

	this.instance_5 = new lib.Assemblies_J_JawA_DCR0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-126.6);

	this.instance_6 = new lib.Assemblies_J_JawA_DCR0004();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-126.6);

	this.instance_7 = new lib.Assemblies_J_JawA_DCR0002();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-126.6);

	this.instance_8 = new lib.Assemblies_J_JawA_DCR0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-126.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DCG_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":38});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var self = this;
		
		this.btn_assy.addEventListener('click', playassy);
		function playassy(evt) {
			var name = "start";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_32 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(5).call(this.frame_37).wait(35).call(this.frame_72).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},28).to({state:[]},6).wait(35));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DCG0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-126.6);

	this.instance_1 = new lib.Assemblies_J_JawA_DCG0012();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-126.6);

	this.instance_2 = new lib.Assemblies_J_JawA_DCG0010();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-126.6);

	this.instance_3 = new lib.Assemblies_J_JawA_DCG0008();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-126.6);

	this.instance_4 = new lib.Assemblies_J_JawA_DCG0006();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-126.6);

	this.instance_5 = new lib.Assemblies_J_JawA_DCG0004();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-126.6);

	this.instance_6 = new lib.Assemblies_J_JawA_DCG0002();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-126.6);

	this.instance_7 = new lib.Assemblies_J_JawA_DCG0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-126.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_8 = new lib.Assemblies_J_JawB0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.J_A_DCB_B_Jstyle_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"assy":0,"start":4,"dis":39});

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
	this.frame_35 = function() {
		var self = this;
		
		this.btn_dis.addEventListener('click', playdis);
		function playdis(evt) {
			var name = "dis";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.gotoAndPlay("assy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(32).call(this.frame_35).wait(3).call(this.frame_38).wait(37).call(this.frame_75).wait(1));

	// Layer 5
	this.btn_assy = new lib.ASSY_TIPS_GRMtc();
	this.btn_assy.parent = this;
	this.btn_assy.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_assy, 0, 1, 2, false, new lib.ASSY_TIPS_GRMtc(), 3);

	this.btn_dis = new lib.DISASSEMBLE_TIPS_GRMtc();
	this.btn_dis.parent = this;
	this.btn_dis.setTransform(365,-28,1,1,0,0,0,81.5,0);
	new cjs.ButtonHelper(this.btn_dis, 0, 1, 2, false, new lib.DISASSEMBLE_TIPS_GRMtc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},31).to({state:[]},4).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask.setTransform(162,9);

	// a
	this.instance = new lib.Assemblies_J_JawA_DCB0015();
	this.instance.parent = this;
	this.instance.setTransform(-9.4,-125.8);

	this.instance_1 = new lib.Assemblies_J_JawA_DCB0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.4,-125.8);

	this.instance_2 = new lib.Assemblies_J_JawA_DCB0011();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-125.8);

	this.instance_3 = new lib.Assemblies_J_JawA_DCB0009();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.4,-125.8);

	this.instance_4 = new lib.Assemblies_J_JawA_DCB0007();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-125.8);

	this.instance_5 = new lib.Assemblies_J_JawA_DCB0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.4,-125.8);

	this.instance_6 = new lib.Assemblies_J_JawA_DCB0003();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.4,-125.8);

	this.instance_7 = new lib.Assemblies_J_JawA_DCB0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.4,-125.8);

	this.instance_8 = new lib.Assemblies_J_JawA_DCB0000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.4,-125.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(5));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyCRMMAAAgiXMAkFAAAMAAAAiXg");
	mask_1.setTransform(569.5,8);

	// b
	this.instance_9 = new lib.Assemblies_J_JawB0000();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404.7,-123.5);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.But_DUS_singJ_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAp9AtQgJgBgHgBQgHgBgEgEQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAAEgCIACgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgGACIgQABgAI4AsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgBAGgDADQgDAFgFACQgGADgFgBIg1AAIAAAXgAJTAAIApAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgnAAgAIKAsIAAhWIAbAAIAABWgAG8AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgACiAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAjWAsIAAhWIBMAAQAJAAAFABQAGABAEADQAEADACADQABAFABAHIgBAJQgBADgCACIgEAEIgFABIAHACQAEABABACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAi8AWIAwAAIAHgBQADgBgBgDQABgFgDgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchWIAaAAIATA+IAVg+IAaAAIAVA+IATg+IAaAAIgcBWgAnZAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAnsAKIgRggIgRAgIAiAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(-60,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-63.4,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DUR_singJ_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAp9AtQgJgBgHgBQgHgBgEgEQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAAEgCIACgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgGACIgQABgAI4AsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgBAGgDADQgDAFgFACQgGADgFgBIg1AAIAAAXgAJTAAIApAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgnAAgAIKAsIAAhWIAbAAIAABWgAG8AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgACiAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAjWAsIAAhWIBMAAQAJAAAFABQAGABAEADQAEADACADQABAFABAHIgBAJQgBADgCACIgEAEIgFABIAHACQAEABABACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAi8AWIAwAAIAHgBQADgBgBgDQABgFgDgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchWIAaAAIATA+IAVg+IAaAAIAVA+IATg+IAaAAIgcBWgAnZAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAnsAKIgRggIgRAgIAiAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(-60,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-63.4,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DUG_singJ_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAp9AtQgJgBgHgBQgHgBgEgEQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAAEgCIACgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgGACIgQABgAI4AsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgBAGgDADQgDAFgFACQgGADgFgBIg1AAIAAAXgAJTAAIApAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgnAAgAIKAsIAAhWIAbAAIAABWgAG8AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgACiAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAjWAsIAAhWIBMAAQAJAAAFABQAGABAEADQAEADACADQABAFABAHIgBAJQgBADgCACIgEAEIgFABIAHACQAEABABACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAi8AWIAwAAIAHgBQADgBgBgDQABgFgDgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchWIAaAAIATA+IAVg+IAaAAIAVA+IATg+IAaAAIgcBWgAnZAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAnsAKIgRggIgRAgIAiAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(-60,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-63.4,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DUB_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgGACQgHABgKABgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAp9AtQgJgBgHgBQgHgBgEgEQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAAEgCIACgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgGACIgQABgAI4AsIAAhWIBIAAQAHAAAJACIAFADIAFADQADAEABAFQACAFAAAHIAAAIIgBAIQgBAGgDADQgDAFgFACQgGADgFgBIg1AAIAAAXgAJTAAIApAAQAEAAACgBQACgDAAgEIAAgEQAAgEgCgCQgDgDgFAAIgnAAgAIKAsIAAhWIAbAAIAABWgAG8AsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgACiAsIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAjWAsIAAhWIBMAAQAJAAAFABQAGABAEADQAEADACADQABAFABAHIgBAJQgBADgCACIgEAEIgFABIAHACQAEABABACQACADABAEIABAIQAAAIgCAEQgCAEgEADQgDACgFACIgLABgAi8AWIAwAAIAHgBQADgBgBgDQABgFgDgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgCgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchWIAaAAIATA+IAVg+IAaAAIAVA+IATg+IAaAAIgcBWgAnZAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAnsAKIgRggIgRAgIAiAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(-60,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-63.4,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJnrGIAAWNIzNAAIAA2Ng");
	this.shape_2.setTransform(67.3,-0.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DUB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AprLJIAA2RITXAAIAAWRg");
	this.shape_3.setTransform(67.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DDS_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAsQgJAAgIgBIgMgEIgDgFIgEgFIgCgHIAAgJIAAgZIAAgIIACgIIAEgFIADgEQAEgDAIgCQAIgCAJAAIArAAQAJAAAHACIAGACQADABACACIAFAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgFAFIgFACIgGACQgHABgJAAgAD+gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAp9AsQgJAAgHgBQgGgCgEgDQgFgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAFACACQAEACAFAAIALAAQAHAAADgBIADgEIABgEIAAg4IAbAAIgBBCIgCAHIgDAEIgEAEQgEADgIABIgPABgAI4ArIAAhVIBJAAQAGAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgEACQgIACgEABIg1AAIAAAVgAJTAAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgCgCgGAAIgnAAgAIKArIAAhVIAbAAIAABVgAG9ArIAAhAIgmAAIAAgVIBlAAIAAAVIglAAIAABAgACiArIgzg+IAAAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAaAAIAABVgAjWArIAAhVIBMAAQAIAAAGABQAGABAEACQAEAEACAEQACAEAAAGIgBAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAi8AXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgCgCgFAAIgwAAgAi8gIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgCgDABIgwAAgAlXArIgUg4IgUA4IgfAAIgchVIAaAAIASA/IAXg/IAZAAIAVA/IATg/IAaAAIgcBVgAnZArIgJgPIg1AAIgJAPIgdAAIAvhVIAjAAIAvBVgAnrAJIgSgfIgRAfIAjAAgAgaAYIAAgVIAgAAIAAAVg");
	this.shape.setTransform(66.7,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARsAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAHACQADABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgFACIgHACQgHACgJgBgARpgUIgEADIgDAGIgBAIIAAAIIABAIQAAADADACQABACADABIAIABIAiAAIAIgBQACgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgIgBIggAAIgJABgAIoAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQADgDAJgCQAHgCAKAAIAqAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgGACIgGACQgHACgJgBgAIlgUIgFADIgDAGIAAAIIAAAIIAAAIQAAADADACQABACADABIAHABIAiAAIAJgBQACgBACgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgAm9AsQgLAAgFgCIgGgCIgFgEIgDgEIgEgGQgBgEgBgJIAAg4IAbAAIAAAyIABAHIACAEQACACADACIAHAAIAbAAIAGAAIAFgEIACgEIABgHIAAgyIAbAAIAAA4IgCANIgDAGIgEAEIgEAEIgHACQgJACgHAAgApCAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAHACQADABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgFACIgHACQgHACgJgBgApEgUIgGADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAiAAIAHgBQAEgBABgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgIABgA3BAsQgJABgHgCQgHgCgDgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIALAAQAHAAAEgBIACgEIABgEIAAg5IAbAAIgBBDIgCAHIgDAEIgEAEQgFADgGABIgQABgAWkArIAAhAIglAAIAAgWIBlAAIAAAWIgmAAIAABAgAVKArIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA/IAAg/IAaAAIAABWgATPArIAAhWIAaAAIAABWgAPRArIAAhWIBJAAQAGAAAJADIAGACIAEAEQADAEACAFQABAFABAIIAAAHIgBAJQgCAFgDAEQgDAEgEACQgHADgFAAIg1AAIAAAVgAPsAAIAqAAQAEAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgFAAIgoAAgAMSArIAAhWIBQAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgAMsAVIAvAAIAIAAIAEgDQADgCABgDIAAgHIAAgLIAAgIQgBgDgDgCQgCgCgCAAIgIgBIgvAAgALVArIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAHXArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAE8ArIgIgPIg2AAIgIAPIgeAAIAvhWIAjAAIAvBWgAEqAJIgRgfIgRAfIAiAAgACyArIAAhWIAbAAIAABWgAAtArIAAhWIBQAAQAHABAJACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgABHAVIAwAAIAHAAIAEgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgBgCgDAAIgHgBIgwAAgAiAArIAAhWIBgAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjiArIAAhWIAbAAIAABAIA8AAIAAAWgAlhArIAAhWIBNAAQAIAAAFACQAHABADACQAFADABAFQACAEAAAGIgBAJQgBAEgBACIgFADIgEACIAHABQADACABADQACACACAEIABAJQAAAGgDAFQgBAFgEACQgEACgEABIgLABgAlHAXIAxAAIAGgBQADgCAAgEQAAgEgDgCQgCgBgEAAIgxAAgAlHgIIAwAAQADAAACgCQACgBAAgDQAAgEgCgCQgCgCgDABIgwAAgArqArIAAhWIBQAAQAHABAJACIAHACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgHACIgQABgArQAVIAwAAIAHAAIAEgDQACgCABgDIABgHIAAgLIgBgIQgBgDgCgCQgBgCgDAAIgHgBIgwAAgAu/ArIgJgPIg2AAIgIAPIgdAAIAvhWIAjAAIAvBWgAvRAJIgSgfIgRAfIAjAAgAyaArIgVg4IgVA4IgeAAIgchWIAaAAIASBAIAXhAIAZAAIAVBAIAThAIAaAAIgcBWgA0dArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgA0wAJIgRgfIgRAfIAiAAgAtcAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(62.7,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DDR_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgZIABgIIACgHIAEgGIADgEQAEgDAJgCQAGgBAKgBIAqAAQAKABAGABIAHACQADABACACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAD+gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgEgDIgJgBIggAAIgIABgAp9AtQgKgBgGgBQgHgCgEgDQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQAEADAFAAIALAAQAIAAADgCIACgDIABgEIAAg5IAaAAIAABDIgCAGIgCAFIgFAEQgFADgGACIgQABgAI4AsIAAhXIBIAAQAHABAJACIAFADIAFADQADAEABAFQACAGAAAHIAAAHIgBAIQgBAGgDADQgDAFgFACQgGACgFAAIg2AAIAAAXgAJSAAIAqAAQAEAAACgBQACgDABgEIAAgDQgBgFgCgCQgDgDgFAAIgoAAgAIKAsIAAhXIAbAAIAABXgAG8AsIAAhBIglAAIAAgWIBlAAIAAAWIglAAIAABBgACiAsIgzg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAaAAIAABXgAjWAsIAAhXIBMAAQAJABAFABQAGABAEADQAEACACAFQABAEAAAHIAAAJQgBADgCACIgEAEIgFABIAHABQAEACABADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgEADgFABIgLABgAi8AXIAwAAIAHgCQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchXIAaAAIATA/IAVg/IAaAAIAVA/IATg/IAaAAIgcBXgAnZAsIgJgQIg2AAIgIAQIgdAAIAvhXIAiAAIAxBXgAnsAJIgRgfIgRAfIAiAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(64.8,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARtAtQgKAAgHgCIgMgFIgEgEIgDgFIgDgIIAAgIIAAgZIAAgJIADgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAJgBAHACIAHACQADABACACIAFAEIADAGIABAGIACAJIAAAZIgCAIIgBAIIgDAFIgFAEIgFADIgHACQgHACgJAAgARpgUIgEAEIgDAFIgBAHIAAAJIABAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgIgBIggAAIgJABgAIoAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAGACQAEABACACIAEAEIAEAGIACAGIAAAJIAAAZIAAAIIgCAIIgEAFIgEAEIgGADIgGACQgGACgKAAgAIlgUIgGAEIgCAFIAAAHIAAAJIAAAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgJgBIgfAAIgIABgAm9AtQgLgBgFgCIgGgCIgFgDIgDgFIgEgFQgBgFgBgKIAAg2IAbAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgDAFIgEAFIgEADIgHACQgJADgHAAgApCAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAJgBAHACIAHACQADABACACIAFAEIADAGIABAGIABAJIAAAZIgBAIIgBAIIgDAFIgFAEIgFADIgHACQgHACgJAAgApFgUIgEAEIgDAFIgBAHIAAAJIABAIQAAADADACQABACADABIAIABIAiAAIAIgBQACgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgIgBIggAAIgJABgA3BAtQgJAAgHgCQgHgBgEgEQgDgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAAEgCIACgCIABgGIAAg3IAaAAIAABCIgCAGIgDAGIgEADQgFADgGACIgQABgAWkAsIAAhBIglAAIAAgVIBlAAIAAAVIgmAAIAABBgAVKAsIgyg+IAAAAIAAA+IgbAAIAAhWIApAAIAzA+IAAg+IAaAAIAABWgATPAsIAAhWIAaAAIAABWgAPRAsIAAhWIBJAAQAGgBAJADIAGACIAEAEQADAEACAGQABAFABAGIAAAIIgBAIQgCAGgDADQgDAFgEACQgHADgFgBIg1AAIAAAXgAPsAAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgFAAIgoAAgAMRAsIAAhWIBRAAQAHAAAKABIAGACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgGADIgRACgAMsAVIAvAAIAIgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgDgCgCgBIgIgBIgvAAgALVAsIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAHXAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAE8AsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAvBWgAEqAKIgRggIgSAgIAjAAgACzAsIAAhWIAaAAIAABWgAAtAsIAAhWIBQAAQAHAAAJABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgABHAVIAwAAIAHgBIAEgCQACgCACgDIAAgIIAAgKIAAgIQgCgDgCgBQgBgCgDgBIgHgBIgwAAgAiAAsIAAhWIBgAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjhAsIAAhWIAaAAIAAA/IA8AAIAAAXgAlhAsIAAhWIBNAAQAIgBAFACQAGABAFACQADAEACADQACAFAAAGIgBAJQgBAEgCACIgDADIgFACIAHACQADABABACQACADACAEIABAIQAAAHgCAFQgDAEgDADQgEACgEABIgLACgAlHAWIAxAAIAGgBQADgBAAgDQAAgFgDgBQgCgCgEAAIgxAAgAlHgIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgBgDgBIgwAAgArqAsIAAhWIBQAAQAHAAAJABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgArQAVIAwAAIAHgBIAEgCQACgCACgDIAAgIIAAgKIAAgIQgCgDgCgBQgCgCgCgBIgHgBIgwAAgAu/AsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAvSAKIgRggIgRAgIAiAAgAyaAsIgVg5IgVA5IgeAAIgchWIAaAAIATA+IAVg+IAaAAIAVA+IATg+IAaAAIgcBWgA0dAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgA0wAKIgRggIgRAgIAiAAgAtcAYIAAgWIAiAAIAAAWg");
	this.shape_1.setTransform(64.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DDG_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgJgBgHgBIgMgFIgFgEIgDgGIgCgHIAAgIIAAgZIAAgIIACgHIADgGIAFgEQADgDAJgCQAHgBAJgBIArAAQAJABAGABIAHACQAEABACACIAEAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJABgAD+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAp9AtQgJgBgHgBQgGgCgFgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEADACQACADAHAAIAKAAQAIAAACgCIADgDIABgEIAAg5IAaAAIAABDIgCAGIgCAFIgFAEQgEADgIACIgQABgAI4AsIAAhXIBIAAQAHABAJACIAGADIAEADQADAEACAFQABAGAAAHIAAAHIgBAIQgCAGgCADQgDAFgEACQgHACgGAAIg1AAIAAAXgAJSAAIAqAAQAFAAACgBQACgDAAgEIAAgDQAAgFgCgCQgEgDgFAAIgoAAgAIKAsIAAhXIAaAAIAABXgAG9AsIAAhBIgmAAIAAgWIBmAAIAAAWIgmAAIAABBgAChAsIgxg+IgBAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAjXAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQABAEAAAHIAAAJQgBADgCACIgEAEIgFABIAIABQADACABADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgEADgFABIgKABgAi8AXIAwAAIAHgCQADgBAAgDQAAgFgDgCQgDgBgEAAIgwAAgAi8gIIAwAAQADAAACgBQACgCAAgEQAAgEgCgBQgCgBgDAAIgwAAgAlXAsIgUg5IgUA5IgfAAIgchXIAaAAIASA/IAWg/IAZAAIAXA/IASg/IAbAAIgdBXgAnZAsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAnrAJIgRgfIgRAfIAiAAgAgbAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(66.9,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARsAtQgJAAgHgCIgMgFIgEgEIgEgFIgCgIIAAgIIAAgZIAAgJIACgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAJgBAHACIAHACQADABACACIAFAEIADAGIABAGIABAJIAAAZIgBAIIgBAIIgDAFIgFAEIgFADIgHACQgHACgJAAgARqgUIgGAEIgCAFIgBAHIAAAJIABAIQABADABACQACACADABIAIABIAiAAIAHgBQAEgBABgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgIABgAIoAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQADgCAJgDQAHgCAKABIAqAAQAJgBAHACIAGACQAEABACACIAEAEIAEAGIACAGIABAJIAAAZIgBAIIgCAIIgEAFIgEAEIgGADIgGACQgHACgJAAgAIkgUIgEAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAHABIAjAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgJABgAm9AtQgLgBgFgCIgGgCIgFgDIgDgFIgEgFQgBgFgBgKIAAg2IAbAAIAAAxIABAHIACAFQACABADABIAHABIAbAAIAGgBIAFgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgDAFIgEAFIgEADIgHACQgJADgHAAgApCAtQgJAAgHgCIgMgFIgEgEIgEgFIgBgIIgBgIIAAgZIABgJIABgGIAEgGIAEgEQADgCAJgDQAHgCAJABIArAAQAKgBAGACIAGACQAEABACACIAFAEIADAGIABAGIABAJIAAAZIgBAIIgBAIIgDAFIgFAEIgGADIgGACQgGACgKAAgApEgUIgGAEIgCAFIgBAHIAAAJIABAIQABADABACQACACADABIAIABIAhAAIAIgBQAEgBABgCIACgFIABgIIAAgJIgBgHIgCgFIgFgEIgJgBIgfAAIgIABgA3BAtQgJAAgHgCQgGgBgEgEQgFgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQAEADAFAAIALAAQAHAAADgCIADgCIABgGIAAg3IAbAAIgBBCIgCAGIgDAGIgEADQgEADgIACIgPABgAWkAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAVKAsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA+IAAg+IAaAAIAABWgATPAsIAAhWIAaAAIAABWgAPRAsIAAhWIBJAAQAGgBAKADIAFACIAEAEQADAEACAGQACAFAAAGIAAAIIgBAIQgCAGgDADQgDAFgEACQgHADgFgBIg1AAIAAAXgAPsAAIAqAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAMSAsIAAhWIBQAAQAHAAAKABIAGACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgGADIgRACgAMsAVIAwAAIAHgBIAEgCQACgCACgDIAAgIIAAgKIAAgIQgCgDgCgBQgCgCgCgBIgHgBIgwAAgALVAsIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAHXAsIAAg+IgjA+IgUAAIgjg+IAAA+IgaAAIAAhWIApAAIAeA2IAeg2IApAAIAABWgAE8AsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAEqAKIgRggIgRAgIAiAAgACyAsIAAhWIAbAAIAABWgAAsAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgABHAVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAiAAsIAAhWIBgAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjiAsIAAhWIAbAAIAAA/IA8AAIAAAXgAlhAsIAAhWIBNAAQAIgBAFACQAHABADACQAFAEABADQACAFAAAGIgBAJQgBAEgBACIgFADIgEACIAHACQADABABACQACADABAEIACAIQgBAHgCAFQgCAEgDADQgEACgEABIgLACgAlHAWIAwAAIAHgBQADgBAAgDQAAgFgDgBQgCgCgFAAIgwAAgAlHgIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgBgDgBIgwAAgArrAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgHADIgQACgArQAVIAwAAIAGgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgBgCgEgBIgGgBIgwAAgAu/AsIgIgQIg2AAIgJAQIgdAAIAvhWIAjAAIAvBWgAvRAKIgRggIgSAgIAjAAgAybAsIgUg5IgUA5IgfAAIgchWIAaAAIASA+IAXg+IAZAAIAVA+IATg+IAaAAIgcBWgA0dAsIgJgQIg2AAIgIAQIgdAAIAvhWIAjAAIAvBWgA0vAKIgSggIgRAgIAjAAgAtbAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(67.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DDB_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAHABIAGACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgGACQgHABgKAAgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgAp9AsQgJAAgHgBQgHgCgDgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQAEACAFAAIALAAQAHAAAEgBIACgDIABgGIAAg3IAaAAIAABCIgCAHIgDAEIgEAEQgFADgGABIgQABgAI4ArIAAhVIBIAAQAHAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgGACgFABIg1AAIAAAVgAJTAAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgFAAIgnAAgAIKArIAAhVIAbAAIAABVgAG8ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgACiArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgAjWArIAAhVIBMAAQAJAAAFABQAGABAEACQAEADACAEQABAFABAGIgBAJQgBAEgCACIgEADIgFACIAHACQAEABABACQACADABAEIABAJQAAAGgCAFQgCAEgEADQgDADgFAAIgLABgAi8AXIAwAAIAHgBQADgCgBgEQABgEgDgBQgDgCgEAAIgwAAgAi8gIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgBgEgBIgvAAgAlWArIgVg4IgVA4IgeAAIgchVIAaAAIATA/IAVg/IAaAAIAVA/IATg/IAaAAIgcBVgAnZArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgAnsAKIgRggIgRAgIAiAAgAgaAYIAAgVIAgAAIAAAVg");
	this.shape.setTransform(67.8,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ARtAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQADgDAJgCQAHgCAKAAIAqAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgGACIgGACQgHACgJgBgARqgUIgGADIgCAGIAAAIIAAAIIAAAIQAAADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgJgBIgfAAIgIABgAInAsQgJABgHgCIgMgEIgEgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIAEgEQADgDAJgCQAHgCAJAAIArAAQAJAAAHACIAHACQADABACACIAFAEIADAFIABAIIABAIIAAAZIgBAJIgBAGIgDAGIgFAFIgFACIgHACQgHACgJgBgAIkgUIgFADIgCAGIgBAIIAAAIIABAIQABADABACQACACADABIAIABIAiAAIAHgBQAEgBABgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgAm9AsQgMAAgDgCIgHgCIgFgEIgEgEIgCgGQgCgEAAgJIAAg4IAaAAIAAAyIABAHIADAEQABACADACIAHAAIAaAAIAIAAIAEgEIADgEIABgHIAAgyIAaAAIAAA4IgCANIgDAGIgDAEIgGAEIgGACQgKACgFAAgApBAsQgKABgHgCIgMgEIgEgFIgDgGIgCgGIgBgJIAAgZIABgIIACgIIADgFIAEgEQADgDAJgCQAHgCAKAAIAqAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIACAIIABAIIAAAZIgBAJIgCAGIgEAGIgEAFIgGACIgGACQgHACgJgBgApFgUIgEADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAHABIAiAAIAJgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgJABgA3BAsQgKABgGgCQgGgCgFgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEADADQACACAHAAIAKAAQAIAAACgBIADgEIABgEIAAg5IAaAAIAABDIgCAHIgCAEIgFAEQgFADgHABIgQABgAWkArIAAhAIgmAAIAAgWIBmAAIAAAWIgmAAIAABAgAVKArIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAxA/IAAg/IAbAAIAABWgATPArIAAhWIAbAAIAABWgAPSArIAAhWIBIAAQAHAAAIADIAGACIAFAEQACAEACAFQACAFgBAIIAAAHIgBAJQgBAFgCAEQgEAEgEACQgHADgFAAIg1AAIAAAVgAPsAAIApAAQAFAAACgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgnAAgAMRArIAAhWIBRAAQAGABAKACIAHACIAFACIAEAFIACAFQACAGAAAIIAAAaQAAAHgCAGIgCAGIgEADIgFAEIgHACIgQABgAMsAVIAwAAIAGAAIAGgDQABgCABgDIABgHIAAgLIgBgIQgBgDgBgCQgCgCgEAAIgGgBIgwAAgALWArIgzg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA/IAAg/IAaAAIAABWgAHXArIAAg9IgjA9IgUAAIgjg9IAAA9IgaAAIAAhWIApAAIAeA4IAeg4IApAAIAABWgAE8ArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAEpAJIgRgfIgRAfIAiAAgACzArIAAhWIAaAAIAABWgAAsArIAAhWIBRAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgABHAVIAvAAIAHAAIAGgDQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgDgCgDAAIgHgBIgvAAgAh/ArIAAhWIBeAAIAAAVIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBGAAIAAAUgAjhArIAAhWIAaAAIAABAIA8AAIAAAWgAlhArIAAhWIBMAAQAJAAAGACQAGABAEACQADADADAFQABAEAAAGIAAAJQgCAEgCACIgDADIgGACIAIABQADACACADQACACAAAEIABAJQAAAGgBAFQgCAFgEACQgDACgGABIgKABgAlGAXIAvAAIAIgBQACgCAAgEQAAgEgCgCQgDgBgFAAIgvAAgAlGgIIAvAAQADAAADgCQACgBAAgDQAAgEgCgCQgDgCgDABIgvAAgArrArIAAhWIBRAAQAHABAKACIAGACIAFACIADAFIADAFQACAGAAAIIAAAaQAAAHgCAGIgDAGIgDADIgFAEIgGACIgRABgArQAVIAvAAIAIAAIAFgDQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgDgCgCAAIgIgBIgvAAgAu/ArIgJgPIg2AAIgHAPIgeAAIAvhWIAiAAIAxBWgAvSAJIgRgfIgQAfIAhAAgAybArIgUg4IgVA4IgeAAIgchWIAaAAIATBAIAVhAIAZAAIAXBAIAShAIAbAAIgdBWgA0dArIgIgPIg2AAIgIAPIgeAAIAvhWIAiAAIAxBWgA0wAJIgQgfIgRAfIAhAAgAtcAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(68,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.4,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DDB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("ApmLEIAA2HITNAAIAAWHg");
	this.shape_3.setTransform(65.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_DCS_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgIIACgIIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgAD+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgGgDIgIgBIgfAAIgJABgAp9AsQgJAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAFADACQACACAHAAIAKAAQAHAAADgBIADgEIABgEIAAg4IAbAAIgBBCIgCAHIgCAEIgFAEQgEADgIABIgQABgAI4ArIAAhVIBJAAQAGAAAJACIAGACIAEAEQADAEACAGQABAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgEACQgHACgGABIg1AAIAAAVgAJSAAIAqAAQAFAAACgCQABgCABgEIAAgEQgBgEgBgDQgDgCgGAAIgoAAgAIKArIAAhVIAaAAIAABVgAG9ArIAAhAIgmAAIAAgVIBmAAIAAAVIgmAAIAABAgAChArIgxg+IgBAAIAAA+IgaAAIAAhVIApAAIAyA+IAAg+IAbAAIAABVgAjXArIAAhVIBNAAQAJAAAFABQAGABAEACQAEAEACAEQABAEAAAGIAAAJQgBAEgCACIgEADIgFACIAIACQADABABACQACADABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgKABgAi8AXIAwAAIAHgBQACgCABgEQgBgEgCgBQgCgCgFAAIgwAAgAi8gIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgCgDABIgwAAgAlXArIgUg4IgUA4IgfAAIgchVIAaAAIASA/IAXg/IAYAAIAXA/IASg/IAbAAIgdBVgAnZArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAvBVgAnrAJIgRgfIgRAfIAiAAgAgbAYIAAgVIAhAAIAAAVg");
	this.shape.setTransform(197.9,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AsQgKABgGgCIgNgEIgDgFIgEgGIgCgGIgBgJIAAgZIABgIIACgIIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgHACQgGACgKgBgAOzgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgEgDIgJgBIggAAIgIABgAGGAsQgJABgIgCIgMgEIgDgFIgEgGIgCgGIAAgJIAAgZIAAgIIACgIIAEgFIADgEQAEgDAIgCQAIgCAJAAIAqAAQAKAAAHACIAGACQADABACACIAFAEIADAFIACAIIABAIIAAAZIgBAJIgCAGIgDAGIgFAFIgFACIgGACQgHACgKgBgAGDgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgIIAAgIIgCgGIgGgDIgIgBIgfAAIgJABgAEGAsQgJABgHgCIgMgEIgEgFIgEgGIgBgGIgBgJIAAgZIABgIIABgIIAEgFIAEgEQAEgDAIgCQAHgCAJAAIAgAAQAJAAANADIAIACIAGADIADAFIACAFQABAFAAAKIgbAAIAAgCQAAgEgCgDQgDgBgHAAIgdAAIgIABIgGADIgCAGIAAAIIAAAIIAAAIQAAADACACQACACADABIAIABIAkAAIAEgCIADgEIAAgGIAbAAIAAAIQAAAHgBADQgBAGgDADQgFADgFACQgKACgGAAgAkGAsQgMAAgEgCIgHgCIgEgEIgEgEIgDgGQgCgEAAgJIAAg4IAbAAIAAAyIABAHIACAEQABACAEACIAGAAIAbAAIAHAAIAFgEIACgEIABgHIAAgyIAbAAIAAA4IgCANIgEAGIgDAEIgFAEIgGACQgKACgGAAgAmLAsQgJABgIgCIgLgEIgFgFIgDgGIgCgGIAAgJIAAgZIAAgIIACgIIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAIIABAIIAAAZIgBAJIgBAGIgEAGIgEAFIgGACIgHACQgGACgJgBgAmOgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgFgDIgJgBIgfAAIgJABgA0LAsQgJABgGgCQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIAKAAQAIAAADgBIACgEIACgEIAAg5IAaAAIgBBDIgCAHIgCAEIgFAEQgEADgHABIgQABgATtArIAAhAIglAAIAAgWIBlAAIAAAWIglAAIAABAgASTArIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA/IAAg/IAbAAIAABWgAQYArIAAhWIAbAAIAABWgAMbArIAAhWIBIAAQAHAAAJADIAGACIAEAEQADAEACAFQABAFAAAIIAAAHIgBAJQgCAFgCAEQgDAEgFACQgHADgFAAIg1AAIAAAVgAM1AAIAqAAQAEAAADgCQACgCAAgEIAAgDQAAgFgCgDQgDgCgGAAIgoAAgAJvArIAAhWIBfAAIAAAVIhFAAIAAANIBBAAIAAARIhBAAIAAAPIBHAAIAAAUgAI0ArIgyg+IgBAAIAAA+IgaAAIAAhWIAqAAIAxA/IAAg/IAbAAIAABWgAA2ArIAAhWIBfAAIAAAVIhEAAIAAANIBAAAIAAARIhAAAIAAAPIBGAAIAAAUgAgrArIAAhWIAaAAIAABAIA8AAIAAAWgAiqArIAAhWIBMAAQAJAAAFACQAGABAEACQAEADACAFQABAEABAGIgBAJQgBAEgCACIgEADIgFACIAHABQAEACABADQACACABAEIABAJQAAAGgCAFQgCAFgEACQgDACgFABIgLABgAiQAXIAwAAIAHgBQADgCgBgEQABgEgDgCQgDgBgEAAIgwAAgAiQgIIAvAAQAEAAACgCQACgBAAgDQAAgEgCgCQgCgCgEABIgvAAgAo0ArIAAhWIBQAAQAHABAKACIAHACIAEACIAEAFIADAFQABAGAAAIIAAAaQAAAHgBAGIgDAGIgEADIgEAEIgHACIgRABgAoaAVIAwAAIAHAAIAFgDQACgCABgDIAAgHIAAgLIAAgIQgBgDgCgCQgCgCgDAAIgHgBIgwAAgAsIArIgJgPIg2AAIgIAPIgeAAIAwhWIAiAAIAwBWgAsbAJIgRgfIgRAfIAiAAgAvkArIgUg4IgVA4IgfAAIgchWIAaAAIATBAIAWhAIAZAAIAWBAIAThAIAaAAIgcBWgAxmArIgJgPIg2AAIgIAPIgdAAIAvhWIAiAAIAwBWgAx5AJIgRgfIgRAfIAiAAgAqlAYIAAgVIAhAAIAAAVg");
	this.shape_1.setTransform(192.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCS_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_DCR_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgJgBgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgZIAAgIIACgHIADgGIAFgEQADgDAIgCQAIgBAJgBIArAAQAJABAGABIAHACQAEABACACIAEAEIAEAGIABAHIABAIIAAAZIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJABgAD+gUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAp9AtQgJgBgHgBQgGgCgFgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEADACQACADAHAAIAKAAQAIAAACgCIADgDIABgEIAAg5IAaAAIAABDIgCAGIgCAFIgFAEQgEADgIACIgQABgAI4AsIAAhXIBIAAQAHABAJACIAGADIAEADQADAEACAFQABAGAAAHIAAAHIgBAIQgCAGgCADQgDAFgEACQgHACgGAAIg1AAIAAAXgAJSAAIAqAAQAFAAACgBQACgDAAgEIAAgDQAAgFgCgCQgEgDgFAAIgoAAgAIKAsIAAhXIAaAAIAABXgAG9AsIAAhBIgmAAIAAgWIBmAAIAAAWIgmAAIAABBgAChAsIgxg+IgBAAIAAA+IgaAAIAAhXIApAAIAyA/IAAg/IAbAAIAABXgAjXAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQABAEAAAHIAAAJQgBADgCACIgEAEIgFABIAIABQADACABADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgEADgFABIgKABgAi8AXIAwAAIAHgCQADgBAAgDQAAgFgDgCQgDgBgEAAIgwAAgAi8gIIAwAAQADAAACgBQACgCAAgEQAAgEgCgBQgCgBgDAAIgwAAgAlXAsIgUg5IgUA5IgfAAIgchXIAaAAIATA/IAVg/IAZAAIAXA/IASg/IAbAAIgdBXgAnZAsIgIgQIg2AAIgIAQIgeAAIAvhXIAjAAIAwBXgAnrAJIgRgfIgRAfIAiAAgAgbAYIAAgWIAhAAIAAAWg");
	this.shape.setTransform(196.9,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AtQgKAAgGgCIgNgFIgDgEIgEgFIgCgIIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAOzgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgEgEIgJgBIggAAIgIABgAGGAtQgJAAgIgCIgMgFIgDgEIgEgFIgCgIIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAIgDQAIgCAJABIArAAQAJgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgGACQgHACgJAAgAGDgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgJIAAgHIgCgFIgGgEIgIgBIgfAAIgJABgAEGAtQgJAAgHgCIgMgFIgEgEIgEgFIgBgIIgBgIIAAgZIABgJIABgGIAEgGIAEgEQAEgCAIgDQAHgCAJABIAgAAQAJAAANABIAIACIAGAEIADAEIACAGQABAGAAAJIgbAAIAAgCQAAgEgDgDQgCgBgHAAIgdAAIgIABIgGAEIgCAFIAAAHIAAAJIAAAIQAAADACACQACACADABIAIABIAkAAIAEgCIADgDIAAgHIAbAAIAAAJQAAAGgBAEQgBAEgDAEQgFAEgFABQgKADgGAAgAkGAtQgMgBgEgCIgHgCIgEgDIgEgFIgDgFQgCgFAAgKIAAg2IAbAAIAAAxIABAHIACAFQABABAEABIAGABIAbAAIAHgBIAFgCIACgFIABgHIAAgxIAbAAIAAA2IgCAPIgEAFIgDAFIgFADIgGACQgKADgGAAgAmLAtQgJAAgIgCIgLgFIgFgEIgDgFIgCgIIAAgIIAAgZIAAgJIACgGIADgGIAFgEQADgCAIgDQAIgCAJABIArAAQAJgBAGACIAHACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgHACQgGACgJAAgAmOgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgGgEIgIgBIgfAAIgJABgA0LAtQgJAAgGgCQgHgBgEgEQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIAKAAQAIAAADgCIACgCIACgGIAAg3IAaAAIgBBCIgCAGIgCAGIgFADQgEADgHACIgQABgATtAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgASTAsIgxg+IgBAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAbAAIAABWgAQYAsIAAhWIAbAAIAABWgAMbAsIAAhWIBIAAQAHgBAJADIAGACIAEAEQADAEACAGQABAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgFACQgHADgFgBIg1AAIAAAXgAM1AAIAqAAQAEAAADgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgGAAIgoAAgAJvAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBHAAIAAAWgAI0AsIgyg+IgBAAIAAA+IgaAAIAAhWIAqAAIAxA+IAAg+IAbAAIAABWgAA2AsIAAhWIBfAAIAAAUIhEAAIAAAOIBAAAIAAARIhAAAIAAANIBGAAIAAAWgAgrAsIAAhWIAbAAIAAA/IA7AAIAAAXgAiqAsIAAhWIBMAAQAJgBAFACQAGABAEACQAEAEACADQABAFABAGIgBAJQgBAEgCACIgEADIgFACIAHACQAEABABACQACADABAEIABAIQAAAHgCAFQgCAEgEADQgDACgFABIgLACgAiQAWIAwAAIAHgBQADgBgBgDQABgFgDgBQgDgCgEAAIgwAAgAiQgIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgBgEgBIgvAAgAo0AsIAAhWIBQAAQAHAAAKABIAHACIAEAEIAEAEIADAFQABAGAAAIIAAAZQAAAJgBAFIgDAFIgEAFIgEACIgHADIgRACgAoaAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAsIAsIgJgQIg2AAIgIAQIgeAAIAwhWIAiAAIAwBWgAsbAKIgRggIgRAgIAiAAgAvkAsIgUg5IgVA5IgfAAIgchWIAaAAIATA+IAWg+IAZAAIAWA+IATg+IAaAAIgcBWgAxmAsIgJgQIg2AAIgIAQIgdAAIAvhWIAiAAIAwBWgAx5AKIgRggIgRAgIAiAAgAqlAYIAAgWIAhAAIAAAWg");
	this.shape_1.setTransform(197.1,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCR_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.BUT_DCG_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAtQgKgBgGgBIgNgFIgEgEIgDgGIgCgHIgBgIIAAgZIABgIIACgHIADgGIAEgEQAEgDAJgCQAGgBAKgBIAqAAQAKABAGABIAHACQAEABABACIAFAEIADAGIACAHIABAIIAAAZIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKABgAD+gUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAp9AtQgKgBgGgBQgGgCgFgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEADACQACADAHAAIAKAAQAIAAADgCIACgDIABgEIAAg5IAaAAIAABDIgCAGIgCAFIgFAEQgFADgGACIgRABgAI4AsIAAhXIBIAAQAHABAJACIAGADIAEADQADAEACAFQABAGAAAHIAAAHIgBAIQgBAGgDADQgDAFgFACQgHACgFAAIg1AAIAAAXgAJSAAIAqAAQAFAAABgBQADgDAAgEIAAgDQAAgFgDgCQgDgDgFAAIgoAAgAIKAsIAAhXIAaAAIAABXgAG8AsIAAhBIglAAIAAgWIBmAAIAAAWIgmAAIAABBgAChAsIgyg+IAAAAIAAA+IgbAAIAAhXIAqAAIAyA/IAAg/IAbAAIAABXgAjXAsIAAhXIBNAAQAIABAGABQAGABAEADQAEACACAFQACAEgBAHIAAAJQgBADgCACIgEAEIgFABIAIABQACACACADQACACABAEIABAIQAAAIgCAEQgCAEgDADQgEADgFABIgKABgAi8AXIAwAAIAHgCQACgBAAgDQAAgFgCgCQgDgBgEAAIgwAAgAi8gIIAvAAQAEAAACgBQACgCAAgEQAAgEgCgBQgCgBgEAAIgvAAgAlWAsIgVg5IgVA5IgeAAIgchXIAaAAIATA/IAVg/IAZAAIAWA/IATg/IAaAAIgcBXgAnZAsIgJgQIg2AAIgHAQIgeAAIAvhXIAiAAIAxBXgAnsAJIgRgfIgQAfIAhAAgAgaAYIAAgWIAgAAIAAAWg");
	this.shape.setTransform(200.3,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AtQgJAAgIgCIgLgFIgFgEIgDgFIgCgIIAAgIIAAgZIAAgJIACgGIADgGIAFgEQADgCAIgDQAIgCAJABIArAAQAJgBAGACIAHACQAEABACACIAEAEIAEAGIABAGIABAJIAAAZIgBAIIgBAIIgEAFIgEAEIgGADIgHACQgGACgJAAgAOzgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgJIgBgHIgCgFIgGgEIgIgBIgfAAIgJABgAGGAtQgJAAgHgCIgMgFIgFgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAFgEQADgCAJgDQAHgCAJABIAqAAQAKgBAGACIAHACQADABADACIAEAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgEAEIgGADIgHACQgGACgKAAgAGDgUIgFAEIgCAFIgBAHIAAAJIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgJIgBgHIgDgFIgEgEIgJgBIggAAIgIABgAEHAtQgKAAgHgCIgMgFIgEgEIgDgFIgDgIIAAgIIAAgZIAAgJIADgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAfAAQAJAAAOABIAHACIAFAEIAEAEIACAGQABAGABAJIgbAAIAAgCQAAgEgEgDQgDgBgGAAIgdAAIgJABIgEAEIgDAFIgBAHIAAAJIABAIQABADACACQABACADABIAIABIAjAAIAGgCIACgDIABgHIAbAAIAAAJQgBAGgBAEQgCAEgDAEQgDAEgHABQgJADgHAAgAkHAtQgLgBgEgCIgGgCIgGgDIgDgFIgDgFQgBgFgBgKIAAg2IAaAAIAAAxIABAHIADAFQACABACABIAIABIAaAAIAHgBIAEgCIADgFIABgHIAAgxIAaAAIAAA2IgCAPIgCAFIgEAFIgFADIgHACQgJADgGAAgAmLAtQgKAAgGgCIgNgFIgDgEIgEgFIgCgIIgBgIIAAgZIABgJIACgGIAEgGIADgEQAEgCAJgDQAGgCAKABIAqAAQAKgBAHACIAGACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgGACQgHACgKAAgAmOgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgA0KAtQgKAAgHgCQgGgBgEgEQgEgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQABAGACABQADADAGAAIAKAAQAIAAADgCIADgCIAAgGIAAg3IAbAAIAABCIgCAGIgDAGIgEADQgFADgHACIgQABgATuAsIAAhBIgmAAIAAgVIBmAAIAAAVIgmAAIAABBgASUAsIgzg+IAAAAIAAA+IgaAAIAAhWIApAAIAyA+IAAg+IAaAAIAABWgAQZAsIAAhWIAaAAIAABWgAMbAsIAAhWIBJAAQAGgBAJADIAFACIAFAEQADAEABAGQACAFAAAGIAAAIIgBAIQgCAGgCADQgDAFgEACQgIADgEgBIg1AAIAAAXgAM2AAIApAAQAEAAADgCQABgCAAgEIAAgEQAAgEgBgCQgDgDgGAAIgnAAgAJvAsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBFAAIAAAWgAI0AsIgyg+IgBAAIAAA+IgaAAIAAhWIApAAIAzA+IAAg+IAaAAIAABWgAA2AsIAAhWIBfAAIAAAUIhFAAIAAAOIBCAAIAAARIhCAAIAAANIBGAAIAAAWgAgrAsIAAhWIAaAAIAAA/IA7AAIAAAXgAirAsIAAhWIBNAAQAIgBAGACQAGABAEACQAEAEACADQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAIACQADABABACQACADABAEIABAIQAAAHgCAFQgCAEgDADQgEACgFABIgKACgAiQAWIAwAAIAHgBQADgBAAgDQAAgFgDgBQgDgCgEAAIgwAAgAiQgIIAwAAQADAAACgBQACgCAAgEQAAgDgCgCQgCgBgDgBIgwAAgAo0AsIAAhWIBRAAQAGAAAKABIAGACIAGAEIADAEIACAFQACAGABAIIAAAZQgBAJgCAFIgCAFIgDAFIgGACIgGADIgQACgAoZAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAsIAsIgJgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgAsbAKIgRggIgRAgIAiAAgAvkAsIgVg5IgUA5IgeAAIgchWIAZAAIATA+IAWg+IAZAAIAWA+IASg+IAbAAIgcBWgAxnAsIgIgQIg2AAIgIAQIgdAAIAuhWIAjAAIAwBWgAx5AKIgRggIgRAgIAiAAgAqlAYIAAgWIAiAAIAAAWg");
	this.shape_1.setTransform(197.9,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCG_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


(lib.But_DCB_singJ_GRMtc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEBAsQgKAAgGgBIgNgEIgEgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAEgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAGABIAHACQAEABABACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgHACQgGABgKAAgAD+gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgJIgBgHIgDgFIgEgEIgJgBIggAAIgIABgAp9AsQgKAAgGgBQgGgCgFgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFADADQACACAHAAIAKAAQAIAAADgBIACgDIABgGIAAg3IAaAAIAABCIgCAHIgCAEIgFAEQgFADgGABIgRABgAI4ArIAAhVIBIAAQAHAAAJACIAGACIAEAEQADAEACAGQABAEAAAIIAAAHIgBAJQgBAFgDAEQgDAEgFACQgHACgFABIg1AAIAAAVgAJSAAIAqAAQAFAAABgCQADgCAAgEIAAgEQAAgEgDgDQgDgCgFAAIgoAAgAIKArIAAhVIAbAAIAABVgAG8ArIAAhAIglAAIAAgVIBmAAIAAAVIgmAAIAABAgACiArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAbAAIAABVgAjXArIAAhVIBNAAQAIAAAGABQAGABAEACQAEADACAEQACAFgBAGIAAAJQgBAEgCACIgEADIgFACIAIACQACABACACQACADABAEIABAJQAAAGgCAFQgCAEgDADQgEADgFAAIgKABgAi8AXIAwAAIAHgBQACgCAAgEQAAgEgCgBQgDgCgEAAIgwAAgAi8gIIAvAAQAEAAACgCQACgBAAgDQAAgFgCgBQgCgBgEgBIgvAAgAlWArIgVg4IgVA4IgeAAIgchVIAaAAIATA/IAVg/IAZAAIAWA/IATg/IAaAAIgcBVgAnZArIgJgPIg2AAIgHAPIgeAAIAvhVIAiAAIAxBVgAnsAKIgRggIgQAgIAhAAgAgbAYIAAgVIAhAAIAAAVg");
	this.shape.setTransform(199.4,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AO2AsQgJAAgIgBIgLgEIgFgFIgDgFIgCgHIAAgJIAAgZIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAZIgBAJIgBAHIgEAFIgEAFIgGACIgHACQgGABgJAAgAOzgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIABgIIAAgIIgBgIIgCgGIgGgDIgIgBIgfAAIgJABgAGGAsQgJAAgHgBIgMgEIgFgFIgDgFIgCgHIgBgJIAAgZIABgJIACgHIADgFIAFgEQADgDAJgCQAHgCAJAAIAqAAQAKAAAGACIAHACQADABADACIAEAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgEAFIgGACIgHACQgGABgKAAgAGDgUIgFADIgCAGIgBAIIAAAIIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgIIgBgIIgDgGIgEgDIgJgBIggAAIgIABgAEHAsQgKAAgHgBIgMgEIgEgFIgDgFIgDgHIAAgJIAAgZIAAgJIADgHIADgFIAEgEQAEgDAIgCQAHgCAKAAIAeAAQAKABAOACIAHACIAFADIAEAFIACAFQABAFABAKIgbAAIAAgCQAAgFgEgCQgDgBgGAAIgdAAIgJABIgEADIgDAGIgBAIIAAAIIABAIQABADACACQABACADABIAHABIAlAAIAFgCIACgEIABgGIAbAAIAAAIQgBAGgBAFQgCAFgDADQgDADgHACQgJACgHAAgAkHAsQgLAAgEgCIgGgCIgGgEIgDgEIgDgGQgBgDgBgKIAAg3IAaAAIAAAxIABAHIADAEQACADADABIAHAAIAaAAIAHAAIAFgEIACgEIABgHIAAgxIAaAAIAAA3IgCANIgCAGIgEAEIgFAEIgHACQgJACgGAAgAmLAsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAHACIAGACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgGACQgHABgKAAgAmOgUIgFADIgDAGIAAAIIAAAIIAAAIQABADACACQACACADABIAHABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgIIAAgIIgDgGIgFgDIgIgBIggAAIgIABgA0KAsQgKAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAaAAIAAAIQABAFACACQADACAGAAIAKAAQAIAAADgBIADgEIABgEIAAg4IAaAAIAABCIgCAHIgDAEIgEAEQgFADgHABIgQABgATuArIAAhAIgmAAIAAgVIBmAAIAAAVIgmAAIAABAgASUArIgzg+IAAAAIAAA+IgbAAIAAhVIAqAAIAyA+IAAg+IAaAAIAABVgAQZArIAAhVIAaAAIAABVgAMbArIAAhVIBJAAQAGAAAJACIAFACIAFAEQADAEABAGQACAEAAAIIAAAHIgBAJQgCAFgCAEQgDAEgEACQgIACgEABIg1AAIAAAVgAM2AAIApAAQAEAAACgCQACgCAAgEIAAgEQAAgEgCgDQgCgCgGAAIgnAAgAJvArIAAhVIBfAAIAAAUIhEAAIAAANIBBAAIAAARIhBAAIAAAPIBFAAIAAAUgAI0ArIgyg+IgBAAIAAA+IgaAAIAAhVIApAAIAzA+IAAg+IAaAAIAABVgAA2ArIAAhVIBfAAIAAAUIhFAAIAAANIBCAAIAAARIhCAAIAAAPIBGAAIAAAUgAgrArIAAhVIAaAAIAAA/IA7AAIAAAWgAirArIAAhVIBNAAQAIAAAGABQAGABAEACQAEAEACAEQABAEAAAGIAAAJQgBAEgCACIgEADIgFACIAIACQADABABACQACADABAEIABAJQAAAGgCAFQgCAFgDACQgEACgFABIgKABgAiQAXIAwAAIAHgBQADgCAAgEQAAgEgDgBQgDgCgEAAIgwAAgAiQgIIAwAAQADAAACgCQACgBAAgDQAAgFgCgBQgCgCgDABIgwAAgAo0ArIAAhVIBRAAQAGAAAKACIAGABIAGADIADAFIACAFQACAFABAJIAAAaQgBAHgCAGIgCAFIgDAEIgGAEIgGACIgQABgAoZAVIAvAAIAHAAIAFgDQACgBABgEIABgIIAAgKIgBgIQgBgDgCgCQgCgBgDgBIgHgBIgvAAgAsJArIgIgPIg2AAIgIAPIgdAAIAuhVIAjAAIAwBVgAsbAJIgRgfIgRAfIAiAAgAvkArIgVg4IgUA4IgeAAIgchVIAZAAIATA/IAWg/IAZAAIAWA/IASg/IAbAAIgdBVgAxnArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAx5AJIgRgfIgRAfIAiAAgAqlAYIAAgVIAiAAIAAAVg");
	this.shape_1.setTransform(197,-90.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF66").ss(2,1,1).p("AJqrEIAAWJIzTAAIAA2Jg");
	this.shape_2.setTransform(65.2,-0.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance = new lib.DCB_imaget_GRMtc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-10.4,1,1,0,0,0,67.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#738CB4").s().p("ApwLGIAA2LIThAAIAAWLg");
	this.shape_3.setTransform(65,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,135,142.1);


// stage content:
(lib.GRM_TipsJstyle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{J_style:0,Thick1j:10,Thick2j:19,Thick3j:28,Thick4j:37,J_DCB_J:45,J_DDB_J:55,J_DUB_J:64,J_DCS_J:73,J_DDS_J:82,J_DUS_J:91,J_DCG_J:97,J_DDG_J:106,J_DUG_J:115,J_DCR_J:122,J_DDR_J:131,J_DUR_J:140});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_Jmt1.addEventListener('click', playJmt1);
		function playJmt1(evt) {
			var name = "Thick1j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Jmt2.addEventListener('click', playJmt2);
		function playJmt2(evt) {
			var name = "Thick2j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Jmt3.addEventListener('click', playJmt3);
		function playJmt3(evt) {
			var name = "Thick3j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Jmt4.addEventListener('click', playJmt4);
		function playJmt4(evt) {
			var name = "Thick4j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_backJst.addEventListener("click", fl_ClickToGoToWebbksty);
		function fl_ClickToGoToWebbksty() {
			window.open("GRM_TipsMain.html", "_self");
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		var self = this;
		
		this.btn_J_DCB_J.addEventListener('click', playDCB);
		function playDCB(evt) {
			var name = "J_DCB_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DDB_J.addEventListener('click', playDDB);
		function playDDB(evt) {
			var name = "J_DDB_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DUB_J.addEventListener('click', playDUB);
		function playDUB(evt) {
			var name = "J_DUB_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkJmt.addEventListener('click', playbkJmt);
		function playbkJmt(evt) {
			var name = "J_style";
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
		
		this.btn_J_DCS_J.addEventListener('click', playDCS);
		function playDCS(evt) {
			var name = "J_DCS_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DDS_J.addEventListener('click', playDDS);
		function playDDS(evt) {
			var name = "J_DDS_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DUS_J.addEventListener('click', playDUS);
		function playDUS(evt) {
			var name = "J_DUS_J";
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
		
		this.btn_J_DCG_J.addEventListener('click', playDCG);
		function playDCG(evt) {
			var name = "J_DCG_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DDG_J.addEventListener('click', playDDG);
		function playDDG(evt) {
			var name = "J_DDG_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DUG_J.addEventListener('click', playDUG);
		function playDUG(evt) {
			var name = "J_DUG_J";
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
		
		this.btn_J_DCR_J.addEventListener('click', playDCR);
		function playDCR(evt) {
			var name = "J_DCR_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DDR_J.addEventListener('click', playDDR);
		function playDDR(evt) {
			var name = "J_DDR_J";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_J_DUR_J.addEventListener('click', playDUR);
		function playDUR(evt) {
			var name = "J_DUR_J";
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
		
		this.btn_bBACK.addEventListener('click', playbkb);
		function playbkb(evt) {
			var name = "Thick1j";
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
		
		this.btn_bBACK.addEventListener('click', playbkb);
		function playbkb(evt) {
			var name = "Thick1j";
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
		
		this.btn_bBACK.addEventListener('click', playbkb);
		function playbkb(evt) {
			var name = "Thick1j";
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
		
		this.btn_sBACK.addEventListener('click', playbks);
		function playbks(evt) {
			var name = "Thick2j";
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
		
		this.btn_sBACK.addEventListener('click', playbks);
		function playbks(evt) {
			var name = "Thick2j";
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
		
		this.btn_sBACK.addEventListener('click', playbks);
		function playbks(evt) {
			var name = "Thick2j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		var self = this;
		
		this.btn_gBACK.addEventListener('click', playbkg);
		function playbkg(evt) {
			var name = "Thick3j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_106 = function() {
		var self = this;
		
		this.btn_gBACK.addEventListener('click', playbkg);
		function playbkg(evt) {
			var name = "Thick3j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_115 = function() {
		var self = this;
		
		this.btn_gBACK.addEventListener('click', playbkg);
		function playbkg(evt) {
			var name = "Thick3j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_121 = function() {
		this.stop();
	}
	this.frame_122 = function() {
		var self = this;
		
		this.btn_rBACK.addEventListener('click', playbkr);
		function playbkr(evt) {
			var name = "Thick4j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_130 = function() {
		this.stop();
	}
	this.frame_131 = function() {
		var self = this;
		
		this.btn_rBACK.addEventListener('click', playbkr);
		function playbkr(evt) {
			var name = "Thick4j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_139 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		var self = this;
		
		this.btn_rBACK.addEventListener('click', playbkr);
		function playbkr(evt) {
			var name = "Thick4j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_146 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(8).call(this.frame_18).wait(1).call(this.frame_19).wait(8).call(this.frame_27).wait(1).call(this.frame_28).wait(8).call(this.frame_36).wait(1).call(this.frame_37).wait(7).call(this.frame_44).wait(1).call(this.frame_45).wait(9).call(this.frame_54).wait(1).call(this.frame_55).wait(8).call(this.frame_63).wait(1).call(this.frame_64).wait(8).call(this.frame_72).wait(1).call(this.frame_73).wait(8).call(this.frame_81).wait(1).call(this.frame_82).wait(8).call(this.frame_90).wait(1).call(this.frame_91).wait(5).call(this.frame_96).wait(1).call(this.frame_97).wait(8).call(this.frame_105).wait(1).call(this.frame_106).wait(8).call(this.frame_114).wait(1).call(this.frame_115).wait(6).call(this.frame_121).wait(1).call(this.frame_122).wait(8).call(this.frame_130).wait(1).call(this.frame_131).wait(8).call(this.frame_139).wait(1).call(this.frame_140).wait(6).call(this.frame_146).wait(1));

	// Titles
	this.instance = new lib.txt_TipCombos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(313.1,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147));

	// Layer 34
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJxAwQgKAAgHgCQgHgCgEgDQgFgDgCgGQgCgGAAgIIAAgLIAdAAIAAAIQAAAFADACQACACAHABIAMAAQAIAAADgCIADgDIABgFIAAg9IAdAAIAAA/IgBAJIgCAHIgDAFIgFAFQgFACgHACIgSABgAjLAwIgRgBQgHgCgEgCQgFgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAHAAIAjAAQAGAAACgBIADgDIABgEIgBgFIgFgDIgMgBIgWAAIgagBIgJgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGAEgEIAEgDIAHgDIAJgBIA1gBQAIAAALACIAHACIAEADQAEAEABAFIABAMIAAADIgdAAQAAgGgCgCIgEgBIgogBQgFAAgDABQgDADAAADIABAFIAFACQAFACAYAAIAbABIAKABIAHACIAFAEIAEAEIABAIIABAJIgCAPIgDAFIgEAEIgGADIgIABIgYABgArgAwQgKAAgHgCQgHgCgEgDQgFgDgCgGQgCgGAAgIIAAgLIAdAAIAAAIQAAAFADACQACACAHABIAMAAQAIAAADgCIADgDIABgFIAAg9IAdAAIAAA/IgBAJIgCAHIgDAFIgFAFQgFACgHACIgSABgAElAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAATIhHAAIAAAPIBMAAIAAAWgACxAvIAAhdIAcAAIAABFIBBAAIAAAYgABLAvIAAghIg0g8IAiAAIAgAnIAggnIAjAAIg0A8IAAAhgAg7AvIAAhGIgpAAIAAgXIBtAAIAAAXIgnAAIAABGgAmMAvIgWg9IgBAAIgWA9IghAAIgehdIAcAAIAUBEIAAAAIAYhEIAbAAIAYBEIAAAAIAUhEIAcAAIgeBdgAokAvIgJgRIg7AAIgIARIggAAIAzhdIAlAAIA0BdgAo4AKIgTgjIgSAjIAlAAgALyAFIAAgzIAUAAIAAAzgALSAFIAAgzIATAAIAAAzgAIaAFIAAgzIAUAAIAAAzgAH6AFIAAgzIAUAAIAAAzg");
	this.shape.setTransform(372.2,13.8);

	this.instance_1 = new lib.TopBar_GRMtc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(374.5,13.9,1,1,0,0,0,374.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhRCoIAAiBIBxAAQALAAAJACQAIACAHADQAFAFADAGQADAHAAAIQAAAJgBAFQgCAFgCAEQgDADgDABIgIADIAAABIALADQAEACADAEQADAEACAFIABANQAAAJgEAIQgCAGgGAEQgFAEgHABQgHABgJABgAgqCIIBGAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhGAAgAgqBaIBFAAQAFAAADgCQAEgDAAgFQAAgGgEgCQgDgCgFAAIhFAAgAjrglQgOAAgJgCQgKgCgGgFQgGgFgDgIQgCgIAAgLIAAgPIAmAAIAAALQAAAHAEADQAEADAJAAIAQAAQAKAAAFgCQACgBACgDIABgHIAAhUIAnAAIAABXIgBAMQAAAGgCAEQgBAEgEADIgFAFQgHAFgKACQgKABgPAAgADIgmIgfhVIgeBVIgtAAIgqiAIAnAAIAbBeIABAAIAgheIAkAAIAhBeIABAAIAbheIAmAAIgpCAgAAHgmIgLgXIhQAAIgMAXIgsAAIBGiAIAzAAIBGCAgAgThZIgagwIgYAwIAyAAg");
	this.shape_1.setTransform(160.7,193.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAyCnIgMgWIhOAAIgNAWIgrAAIBFiAIAyAAIBICAgAAXB1IgYgxIgZAxIAxAAgAjrgkQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgIAAgLIAAgQIAmAAIAAAMQAAAHAEAEQAEADAJAAIAPAAQALgBAFgCQADgBABgDIABgHIAAhVIAnAAIAABYIgBAMQAAAFgCAEQgCAFgDADIgFAGQgHAEgKACQgKACgPAAgADIgmIgfhVIgdBVIguAAIgqiBIAnAAIAbBfIABAAIAghfIAkAAIAiBfIAAAAIAbhfIAmAAIgpCBgAAHgmIgLgWIhQAAIgMAWIgsAAIBGiBIAzAAIBGCBgAgThYIgagxIgYAxIAyAAg");
	this.shape_2.setTransform(160.6,126.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ae/BIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAYSBIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIBFAAQAPAAALADIALADIAIAEIAHAHIAGAJIADALIABAOIAAApIgBAOIgDALIgGAJIgHAHIgIAFIgLADQgLACgPAAgAYOghQgFACgEAEQgCADgBAGIgBAMIAAAOIABANQABAFACADQADAEAFABQAEACAIAAIA3AAQAIAAAFgCQAEgBADgEQADgDABgFIABgNIAAgOIgBgMQgBgGgDgDQgDgEgFgCQgGgBgIAAIgyAAQgJAAgFABgAOCBIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgDgEgDgFIgDgLIgBgOIAAgpIABgOIADgLQADgFADgEQADgEAEgDQAFgDAOgEQALgDAPAAIBFAAQAPAAALADIALADIAJAEIAGAHIAGAJIADALIABAOIAAApIgBAOIgDALIgGAJIgGAHIgJAFIgLADQgLACgPAAgAN+ghQgGACgDAEQgCADgCAGIAAAMIAAAOIAAANQACAFACADQADAEAFABQAFACAHAAIA3AAQAIAAAEgCQAFgBADgEQADgDABgFIABgNIAAgOIgBgMQgBgGgDgDQgDgEgGgCQgFgBgIAAIgyAAQgJAAgFABgAkPBGQgKgCgHgEQgGgFgEgHQgEgIAAgMIAAgLQAAgIACgGQABgGAEgCQADgEAGgBQAGgCAJAAI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");
	this.shape_3.setTransform(384.4,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhRCoIAAiBIBxAAQAMAAAIACQAIACAHADQAGAFACAGQADAHAAAIQAAAJgBAFQgCAFgDAEQgBADgEABIgIADIAAABIALADQAFACACAEQADAEABAFIABANQAAAJgCAIQgDAGgGAEQgEAEgIABQgGABgKABgAgqCIIBGAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhGAAgAgqBaIBFAAQAFAAADgCQADgDAAgFQAAgGgDgCQgDgCgFAAIhFAAgAjrglQgOAAgKgCQgJgCgGgFQgGgFgDgIQgDgIAAgLIAAgPIAnAAIAAALQAAAHAEADQAEADAJAAIAPAAQAMAAAEgCQADgBABgDIABgHIAAhUIAoAAIAABXIgBAMQgBAGgCAEQgCAEgCADIgHAFQgGAFgLACQgJABgOAAgADHgmIgdhVIgeBVIguAAIgqiAIAnAAIAbBeIAAAAIAhheIAkAAIAiBeIAAAAIAbheIAnAAIgqCAgAAHgmIgLgXIhQAAIgMAXIgsAAIBGiAIAzAAIBGCAgAgThZIgagwIgZAwIAzAAg");
	this.shape_4.setTransform(160.4,193.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAzCnIgNgWIhPAAIgMAWIgsAAIBGiAIAzAAIBHCAgAAYB1IgZgxIgZAxIAyAAgAjrgkQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgIgBgLIAAgQIAnAAIAAAMQAAAHAEAEQAEADAJAAIAPAAQAMgBAEgCQADgBABgDIABgHIAAhVIAoAAIAABYIgBAMQgBAFgCAEQgBAFgDADIgHAGQgGAEgLACQgJACgOAAgADHgmIgdhVIgeBVIguAAIgqiBIAnAAIAbBfIAAAAIAhhfIAlAAIAhBfIAAAAIAbhfIAnAAIgqCBgAAHgmIgMgWIhPAAIgMAWIgsAAIBGiBIAzAAIBGCBgAgThYIgagxIgZAxIAzAAg");
	this.shape_5.setTransform(160.3,126.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AM4BQIAAh5IAgAAIAAAOIABAAQAEgIAGgDIAJgEIANgBIAKAAQALAAAPADIAIAEIAGAEQAFAFACAIQABAFAAAKIAAAPQAAAKgBAGQgCAIgFAEIgGAFIgIADQgPADgLAAIgHAAQgRAAgEgDIgHgGIgGgIIAAAvgANfgOQgDACgBAEIgBAIIAAAIIABAIQABADADACQAEACAMACIASAAIAJgCQADgBACgCQAEgDAAgIIAAgKQAAgJgEgDQgCgCgDgBIgJgBIgSAAQgMABgEACgAGXAyQgIAAgFgCQgIgBgFgEQgFgEgDgHIgDgIIgBgKIAAgUQABgIADgLQADgGAFgEQAFgFAIgBQAFgBAIgBIAzAAQAHABAGABQAHABAFAFQAGAEADAGQADALAAAIIAAAUIgBAKIgCAIQgDAHgGAEQgFAEgHABQgGACgHAAgAGggQQgEAAgDACQgCACgCAEQgCADABAFIAAAIQgBAEACAEQACADACACIAHACIATACIAOgCIAIgCQACgBABgDIABgHIAAgMIgBgHQgBgEgCgBIgIgCIgWgBgAuAAyQgOAAgJgDQgKgBgGgGQgGgFgDgHQgDgIABgLIAAgPIAmAAIAAAKQAAAIAEADQAEADAJAAIAQAAQAKAAAFgCQACgCACgDIABgHIAAhTIAnAAIAABXIgBALQAAAGgCAEQgBAFgEADIgFAFQgHAEgKACQgKACgPAAgAL8AwIAAhZIAjAAIAABZgAKMAwIAAhfIg4AAIAAggICWAAIAAAgIg2AAIAABfgAEeAwIhKhcIgBAAIAABcIgnAAIAAh/IA9AAIBKBcIAAAAIAAhcIAoAAIAAB/gAkPAwIAAh/IBxAAQANAAAIABQAJACAFAFQAHAEACAGQADAHAAAJQAAAHgCAGQgBAFgCADQgCAEgFACIgHACIAAAAIALADQAFADACAEQADADABAFIABAMQAAALgCAGQgDAHgFAEQgGADgHACQgHACgIgBgAjoASIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgBgHAAIhHAAgAjogcIBGAAQAGAAADgDQACgCAAgFQAAgFgCgDQgDgCgGAAIhGAAgAnMAwIgfhTIgeBTIgtAAIgqh/IAnAAIAbBdIABAAIAghdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAqOAwIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBHB/gAqpgBIgZgxIgZAxIAyAAgAAGATIAAgfIAxAAIAAAfgAL8g0IAAgbIAjAAIAAAbg");
	this.shape_6.setTransform(579.2,39.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIaBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIAuAAQAOAAAUADIALADIAIAFIAFAGIADAJQACAIAAAPIgnAAIAAgEQgBgGgFgDQgDgDgKAAIgrAAQgHAAgGACQgEACgDADQgCADgCAFIgBALIAAANIABAMQABAFACADQADADAEABQAFACAHAAIA1gBIAHgCQADgCABgEIABgJIAnAAIAAAMQABAJgCAGQgDAIgFAEQgFAGgIADQgPADgKAAgAsSBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAQAAQALAAAEgDQACgBACgDIABgHIAAhTIAoAAIAABWIgCAMQAAAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgPAAgAKhBAIAAh/IBxAAQANAAAIABQAJACAFAEQAHAEACAHQADAGAAAJQAAAIgCAGQgBAFgCADQgCADgFACIgHADIAAAAQAGAAAFACQAFADACADQADAEABAGIABAMQAAAKgCAHQgDAHgFAEQgFADgIACQgHABgIAAgALIAhIBHAAQAHAAADgCQAEgCAAgFQAAgGgEgDQgDgCgHAAIhHAAgALIgMIBGAAQAGAAADgDQACgCAAgFQAAgGgCgCQgDgCgGAAIhGAAgAEfBAIAAh/IB3AAQALAAAOACIAKADIAHAFQAEADABADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgBADgEADQgDADgEABIgKAEQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgaBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1AOIgZgwIgZAwIAyAAgAleBAIgehUIgeBUIguAAIgph/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIAAAAIAbhdIAnAAIgqB/gAofBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6AOIgZgwIgaAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_7.setTransform(175.1,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AsWBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgDgHAAgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAPAAQALAAAFgCQACgBACgEIABgGIAAhUIAnAAIAABXIgBALQAAAGgCAEQgCAEgDADIgGAGQgGAFgLABQgJACgPAAgAKlA/IAAh/IByAAQAMAAAIABQAJACAGAEQAGAEACAHQADAGAAAKQAAAHgBAGQgCAFgCADQgCAEgEACIgIACIAAAAQAHABAEACQAFACACADQADAFACAFIABANQAAAJgDAIQgDAGgFAEQgFADgIACQgGABgJAAgALMAgIBHAAQAHAAADgBQAEgCAAgGQAAgGgEgDQgDgBgHAAIhHAAgALMgNIBGAAQAGAAADgCQADgDAAgFQAAgFgDgDQgDgCgGAAIhGAAgAHgA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACADQADAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPACgKAAgAIIAfIBGAAIALgBQAEgBADgDQADgDABgFIABgLIAAgQIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAEbA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQAEADACADQACAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgCADQgCADgEADQgDADgEACIgJADQgPACgKAAgAFCAfIBGAAIALgBQAFgBACgDQADgDACgFIABgLIAAgQIgBgLQgCgFgDgDQgCgCgFgBIgLgBIhGAAgAgeA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAg5ANIgagwIgZAwIAzAAgAljA/IgehTIgeBTIgtAAIgqh/IAnAAIAbBeIAAAAIAhheIAkAAIAhBeIABAAIAbheIAmAAIgpB/gAokA/IgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo/ANIgZgwIgZAwIAyAAgAB0AiIAAgfIAxAAIAAAfg");
	this.shape_8.setTransform(175.1,38.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AIZBBQgSgBgGgCIgJgDIgIgGIgFgGIgEgIQgCgHgBgPIAAhRIAnAAIAABJQAAAGABAFQABAEADACQADAEAEABQAEABAGAAIAoAAQAFAAAEgBQAFgBADgEQACgCABgEQABgFAAgGIAAhJIAoAAIAABRQgBAPgDAHIgEAIIgFAGIgHAGIgJADQgPADgJAAgAsSBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgCgHgBgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAQAAQALAAAEgCQACgBACgEIABgGIAAhUIAoAAIAABXIgCALQAAAGgCAEQgBAEgDADIgHAGQgGAFgLABQgJACgPAAgAKhA/IAAh/IBxAAQANAAAIABQAJACAFAEQAHAEACAHQADAGAAAKQAAAHgCAGQgBAFgCADQgCAEgFACIgHACIAAAAQAGABAFACQAFACACADQADAFABAFIABANQAAAJgCAIQgDAGgFAEQgFADgIACQgHABgIAAgALIAgIBHAAQAHAAADgBQAEgCAAgGQAAgGgEgDQgDgBgHAAIhHAAgALIgNIBGAAQAGAAADgCQACgDAAgFQAAgFgCgDQgDgCgGAAIhGAAgAEfA/IAAh/IB3AAQALAAAOACIAKAEIAHAEQAEADABADQADAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgDADQgBADgEADQgDADgEACIgKADQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgDQADgDACgFIABgLIAAgQIgBgLQgCgFgDgDQgDgCgEgBIgLgBIhGAAgAgaA/IgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1ANIgZgwIgZAwIAyAAgAleA/IgehTIgeBTIguAAIgph/IAmAAIAbBeIABAAIAhheIAkAAIAhBeIAAAAIAbheIAnAAIgqB/gAofA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6ANIgZgwIgaAwIAzAAgAB4AiIAAgfIAyAAIAAAfg");
	this.shape_9.setTransform(175.1,38.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ALTBCQgOAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgCAAgEQAAgEgBgCQgCgDgFgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgDgDIgDgGQgCgHAAgNQAAgKACgGQABgIAFgFQACgDAEgCQADgCAGgCIANgCIBHgBQALAAAQADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgnAAQAAgHgDgDIgGgCIg2gBQgIAAgDACQgFADAAAFQABAEABADQACACAEABQAHABAgAAIAnABIAMACIAKAEIAIAFIAEAGIADAKIAAAMQgBAQgBAFIgFAHIgGAGIgHADIgMACQgLACgVAAgAIcBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgCgKIgBgNIAAglIABgNIACgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIAuAAQAOAAAUADIALADIAIAFIAGAGIACAJQACAIAAAPIgnAAIAAgEQAAgGgFgDQgEgDgJAAIgsAAQgHAAgFACQgEACgDADQgDADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAEACAIAAIA1gBIAHgCQACgCACgEIAAgJIAoAAIAAAMQAAAJgCAGQgCAIgFAEQgFAGgJADQgOADgLAAgAsPBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAEhBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFJAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgYBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgzAOIgZgwIgZAwIAyAAgAlcBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAocBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo3AOIgagwIgZAwIAzAAgAB7AjIAAggIAxAAIAAAgg");
	this.shape_10.setTransform(175.1,38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ALYBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQADACAJAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgEgGQgBgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQACAGgBAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsUBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQAMAAAEgDQADgBABgDIABgHIAAhTIAoAAIAABWIgBAMQgBAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgOAAgAHjBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEACAEQACAIAAAMIAAAnQAAAMgCAIQgCAEgCAEQgCADgEADQgCADgFABIgJAEQgPACgKAAgAILAfIBFAAIAMgBQAEgBACgCQAEgDABgFIABgLIAAgQIgBgMQgBgEgEgDQgCgCgEgBIgMgBIhFAAgAEdBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFFAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgcBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAg3AOIgZgwIgZAwIAyAAgAlgBAIgehUIgeBUIgtAAIgqh/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgqB/gAohBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo8AOIgagwIgZAwIAzAAgAB3AjIAAggIAxAAIAAAgg");
	this.shape_11.setTransform(175.1,38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ALXBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIA7AAQALAAAQADIAIAEIAHAEQAFAFACAIQACAHAAAKIAAAFIgnAAIgBgIIgEgEQgEgDgKAAIgrAAIgNABQgEABgDADQgEADgBAGIgBANIAAAPIABANQABAGAEADQADADAEABIANABIApAAQAKAAAEgDQAEgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBYAAIgBAwQAAAGgCAEQgCAEgDACQgDADgEACIgJADIgLACIgcABgAIaBCQgPAAgJgCQgNgEgFgDIgHgHQgCgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFACgDIAHgHQAFgDANgEQAJgCAPAAIAuAAQAOAAAUADIALADIAIAFIAFAGIADAJQACAIAAAPIgnAAIAAgEQgBgGgFgDQgDgDgKAAIgrAAQgHAAgGACQgEACgDADQgCADgCAFIgBALIAAANIABAMQABAFACADQADADAEABQAFACAHAAIA1gBIAHgCQADgCABgEIABgJIAnAAIAAAMQABAJgCAGQgDAIgFAEQgFAGgIADQgPADgKAAgAsSBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgCgHgBgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAQAAQALAAAEgDQACgBACgDIABgHIAAhTIAoAAIAABWIgCAMQAAAGgCAEQgBAEgDADIgHAGQgGAEgLACQgJACgPAAgAEfBAIAAh/IB3AAQALAAAOACIAKADIAHAFQAEADABADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgBADgEADQgDADgEABIgKAEQgOACgLAAgAFHAfIBGAAIALgBQAEgBADgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgaBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBGB/gAg1AOIgZgwIgZAwIAyAAgAleBAIgehUIgeBUIguAAIgph/IAmAAIAbBdIABAAIAhhdIAkAAIAhBdIAAAAIAbhdIAnAAIgqB/gAofBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo6AOIgZgwIgaAwIAzAAgAB4AjIAAggIAyAAIAAAgg");
	this.shape_12.setTransform(175.1,38.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ALbBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgDgKIgBgNIAAglIABgNIADgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIA7AAQALAAAQADIAJAEIAGAEQAFAFACAIQACAHAAAKIAAAFIgnAAIgBgIIgEgEQgEgDgKAAIgrAAIgNABQgEABgDADQgDADgBAGIgBANIAAAPIABANQABAGADADQADADAEABIANABIAqAAQAJAAAFgDQADgBACgDQABgDAAgEIAAgEIgxAAIAAgaIBZAAIgBAwQgBAGgCAEQgCAEgDACQgCADgEACIgJADIgLACIgdABgAsWBCQgOAAgKgDQgJgCgGgFQgGgFgDgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQACgBACgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgCAEgDADIgGAGQgGAEgLACQgJACgPAAgAHgBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIIAfIBGAAIALgBQAEgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgEgBIgLgBIhGAAgAEbBAIAAh/IB3AAQAKAAAPACIAJADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgJAEQgPACgKAAgAFCAfIBGAAIALgBQAFgBACgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgCgCgFgBIgLgBIhGAAgAgeBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAg5AOIgagwIgZAwIAzAAgAljBAIgehUIgeBUIgtAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAokBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo/AOIgZgwIgZAwIAyAAgAB0AjIAAggIAxAAIAAAgg");
	this.shape_13.setTransform(175.1,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AIdBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgCgKIgBgNIAAglIABgNIACgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIAuAAQAOAAAUADIALADIAIAFIAGAGIACAJQACAIAAAPIgnAAIAAgEQAAgGgFgDQgEgDgJAAIgsAAQgHAAgFACQgEACgDADQgDADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAEACAIAAIA1gBIAHgCQACgCACgEIABgJIAnAAIAAAMQAAAJgCAGQgCAIgFAEQgFAGgJADQgOADgLAAgAsOBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAMaBAIAAgPIgBgJIgCgFIgGgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAIACQAHADAFAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgDADQgCAEgEACQgEADgHACIAIACIAHAFQADADABAFQACAGABAHIAAAWgALLAAIBCAAQAIAAADgDQAEgEgBgHIAAgEIgBgHQAAgCgDgCQgEgCgKAAIg+AAgAEiBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFKAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgXBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgyAOIgZgwIgZAwIAyAAgAlbBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAobBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo2AOIgagwIgZAwIAzAAgAB8AjIAAggIAxAAIAAAgg");
	this.shape_14.setTransform(175,38.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AsTBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgCgHgBgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAPAAQAMAAAEgCQADgBABgEIABgGIAAhUIAoAAIAABXIgBALQgBAGgCAEQgBAEgDADIgHAGQgGAFgLABQgJACgOAAgAMeA/IAAgPIgBgIIgCgGIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAFAFQADAFACAIQACAGABAJIAAAIIgCAMQgBAFgCADQgDAEgEACQgEAEgHABIAIACIAIAGQADACABAGQACAFAAAHIAAAWgALQgBIBCAAQAHAAAEgDQADgEAAgGIAAgFIgBgHQgBgCgCgCQgFgCgJAAIg+AAgAHkA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQAEADACADQACAEACAFQACAHAAAMIAAAnQAAAMgCAIQgCAFgCADQgCADgEADQgCADgFACIgJADQgPACgKAAgAIMAfIBFAAIAMgBQAEgBACgDQAEgDABgFIABgLIAAgQIgBgLQgBgFgEgDQgCgCgEgBIgMgBIhFAAgAEeA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQAEADACADQACAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgCADQgCADgEADQgDADgEACIgKADQgPACgKAAgAFGAfIBGAAIALgBQAEgBADgDQADgDACgFIAAgLIAAgQIAAgLQgCgFgDgDQgDgCgEgBIgLgBIhGAAgAgbA/IgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAg2ANIgZgwIgZAwIAyAAgAlfA/IgehTIgeBTIgtAAIgqh/IAmAAIAbBeIABAAIAhheIAkAAIAhBeIABAAIAbheIAmAAIgqB/gAogA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo7ANIgagwIgZAwIAzAAgAB4AiIAAgfIAxAAIAAAfg");
	this.shape_15.setTransform(175,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_7},{t:this.shape_6}]},8).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_8},{t:this.shape_6}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_10},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_12},{t:this.shape_6}]},6).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_14},{t:this.shape_6}]},7).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_15},{t:this.shape_6}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_6}]},9).wait(7));

	// Layer 35
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A7BEFA").s().p("ASVBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgASjg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAQlBSQgIgBgGgEQgFgEgDgHQgDgHAAgLIAAgQIAjAAIAAASQAAAEADACIAGABIAGgBQADgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAHAAIAMAAQAGACAEADQAEADADAGQACAHAAAKIAAAxQAAALgDAIQgEAHgGAEQgGADgJACIgRABQgMAAgIgCgAJNBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgAJbg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgADiBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgABxBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgAlUBUQgLAAgHgDQgHgCgFgFQgEgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAEgFQAFgFAHgCQAHgDALAAIAOAAQAMAAAIACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgCgCQgDgBgEAAQgFAAgDABQgCACAAAEIAABdQAAAEACACQADABAEAAQAFAAADgBQACgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgCAHgFAEQgFAFgIACQgIACgMAAgAYlBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAWKBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAPUBSIAAgjIAhAAIAAAjgAOHBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAgDBSIAAijIBHAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegAhTBSIgch/IAAAAIACB/IgiAAIAAijIA2AAIAcB/IAAgBIgCh+IAiAAIAACjgAjFBSIgchJIAABJIgmAAIAAijIAmAAIAABGIAYhGIAoAAIggBOIAkBVgAm5BSIAAijIAmAAIAACjgAn6BSIAAhHIgVAAIAABHIgmAAIAAijIAmAAIAABAIAVAAIAAhAIAmAAIAACjgAqEBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgAspBSIAAijIAlAAIAACFIAlAAIAAAegAtgBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgAtnAOIgJhIIgBAAIgIBIIASAAgAvgBSIAAijIAmAAIAACjgAwgBSIAAgvQAAgFgDgCQgEgDgJAAIgGAAIAAA5IgmAAIAAijIAuAAQAQAAAKACQAKACAFAEQAGAEADAIQACAHAAAMIAAAUQAAAJgCAGQgBAGgEADQgDADgFACQgEACgHABIAAABQAPADAFAEQADADABAEQACAFAAAHIAAAtgAw2gCIAHAAQAKAAADgDQACgDAAgIIAAgZQAAgGgCgDQgDgDgGAAIgLAAgAy8BSIAAijIBIAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegA0LBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgA1TBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgA1aAOIgJhIIgBAAIgIBIIASAAgA3NBSIABiJIAAAAIgYCJIgrAAIgViKIAAAAIAACKIgiAAIAAijIA7AAIASCAIABAAIASiAIA7AAIAACjgAF1A/IAAgaIByAAIAAAagALcAlIAAgeIA7AAIAAAegAF1AMIAAgYIByAAIAAAYg");
	this.shape_16.setTransform(377.6,282.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A7BEFA").s().p("ATCBSQgJgDgFgEQgEgEgCgGQgBgGAAgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQADgEAAgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQAAgJACgGQADgGAFgDQAGgEAIgCQAJgCAMAAQAOAAAIACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgHABIAAABQAIABAEACQAFACACAFQADAFAAAIIABASQAAANgCAIQgCAJgEAFQgGAGgJACQgJADgPAAQgPAAgIgCgAQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALGBSQgJgBgFgEQgGgEgDgHQgCgHAAgLIAAgQIAjAAIAAASQAAAEACACIAHABIAGgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgFAAQgGAAgCACQgCABAAADIAAAHIgfAAIAAhYIBRAAIAAAcIgvAAIAAAfIAAAAQADgFAHgDQAFgCAIAAIALAAQAGACAEADQAFADACAGQADAHAAAKIAAAxQAAALgEAIQgDAHgHAEQgFADgJACIgSABQgMAAgHgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAIoBSIAAiHIgBAAIgYAlIgUgUIAjgtIAvAAIAACjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_17.setTransform(380.1,282.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A7BEFA").s().p("AQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALEBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgALSg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgAIVBSQgJgDgEgEQgFgEgBgGQgCgGAAgJIAAgXIAjAAIAAATQAAAGABACQADADAGAAQAHAAACgEQACgEAAgPQAAgQgDgEQgCgDgKAAIgQAAIAAgaIAUgBQAEAAACgDQACgEABgTQAAgJgCgDQgCgCgFAAQgGAAgCABQgCACAAAFIAAAPIgjAAIAAgSQAAgJADgGQACgGAGgDQAFgEAJgCQAIgCAMAAQAOAAAJACQAIADAFAEQAFAEACAIQACAGAAALIgBAUQgBAHgCAEQgCAFgFACQgDACgIABIAAABQAIABAFACQAFACACAFQACAFABAIIABASQAAANgCAIQgCAJgFAFQgFAGgJACQgKADgPAAQgOAAgJgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAThBSIAAgiIg4AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigATGAUIAbAAIAAhRIAAAAgANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_18.setTransform(380.1,282.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A7BEFA").s().p("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");
	this.shape_19.setTransform(380.1,282.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AFSAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAFPgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgEIABgJIAAgJIgBgIQAAgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgADIAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAiAAIAYACIAJACIAFAEIAEAEIADAHQABAFAAAMIgdAAIAAgEQAAgEgDgCQgEgCgGAAIggAAQgFAAgEACQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAmAAIAGgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgHIAdAAIAAAIQAAAHgBAFQgCAFgDAEQgEAEgHACQgKACgIAAgAlwAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgHAAgAoAAwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHABIAGADIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGACIgHACQgHACgKAAgAoDgVQgDABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAIABIAlAAIAIgBQAEgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAJPAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAIOAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAgYAvIAAhdIBlAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAiCAvIAAhdIAcAAIAABFIBBAAIAAAYgAkMAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAjwAZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAjwgJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAq2AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAqaAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_20.setTransform(170.3,286.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgA7Ng6QgJACgEADIgEAEIgEAGIgCAIIgBAJIAAAbIABAKIACAHIAEAHIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgHIACgHIABgKIAAgbIgBgJIgCgIIgEgGIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgA9Xg6QgJACgEADIgEAEIgEAGIgCAIIgBAJIAAAbIABAKIACAHIAEAHIAEAEQAEADAJACQAIABAKABIAuAAQAIAAAKgCQAHgDAEgEQADgEACgFQABgEAAgHIAAgHIgdAAIgBAGQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGACIgmAAIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAgAAQAGAAAEABQADACAAAFIAAADIAdAAQAAgLgBgGIgDgGIgEgFIgFgDIgJgDIgYgCIgiAAQgKABgIABgEgmkAABQAAALACAEIADAGIAEAFIAFAEIAHADQAFABAMABIApAAQAHAAALgCIAGgDIAGgEIAEgFIADgGQABgEABgLIAAg8IgdAAIAAA2IgBAHIgCAGIgFACIgIABIgdAAIgHgBIgFgCIgDgGIgBgHIAAg2IgcAAgEgofgA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgA2+AjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgA41ghIA2BEIAtAAIAAheIgdAAIAABEIAAAAIg2hEIgtAAIAABeIAdAAIAAhEgEggmAAjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgEgiQAAjIBdAAIAAgZIhBAAIAAhFIgcAAgEgkaAAjIBbAAIAMgBQAFgBAEgDQAEgDACgFQACgFAAgIIgBgIIgDgHIgFgEIgIgCIAAgBIAFgCIAFgDIADgGIABgKQAAgHgCgEQgCgGgFgCQgEgDgGgCIgPgBIhTAAgEgrEAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAN1CgIAAlJMAkGAAAIAAFJgEgj+AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA62ALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgoJAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgqoAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEgj+gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAg");
	this.shape_21.setTransform(376.5,288);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AIBAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAH+gVQgEABgCACIgCAGIAAAIIAAAJIAAAJQAAAEACABQADADADABIAIABIAlAAIAIgBQADgBACgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAo2AwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAIABIAcAAIAIgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgArGAwQgKAAgHgCQgJgCgEgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQAEgCAJgCQAHgCAKAAIAvAAQALAAAGACIAHABIAHADIAEAFIAEAGIACAHIAAAKIAAAbIAAAKIgCAHIgEAGIgEAFIgHACIgHACQgGACgLAAgArIgVQgEABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgFAAIgiAAQgGAAgDACgAL/AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAMcAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAK9AvIg2hDIAAAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAcAAIAABdgAGqAvIAAhCIgmBCIgVAAIgmhCIAABCIgcAAIAAhdIArAAIAhA8IAhg8IAsAAIAABdgAECAvIgJgRIg7AAIgIARIggAAIAyhdIAmAAIA0BdgADuAKIgTgjIgSAjIAlAAgABtAvIAAhdIAcAAIAABdgAgjAvIAAhdIBWAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgHAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAjeAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAlIAvIAAhdIAdAAIAABFIBAAAIAAAYgAnSAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIAEAHIABAJQAAAHgDAGQgCAFgEADQgDACgGABIgMABgAm2AZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAm2gJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAt8AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAtgAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_22.setTransform(170.3,286.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgA4eg6QgJACgEADIgEAEIgEAGIgCAIIgBAJIAAAbIABAKIACAHIAEAHIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgHIACgHIABgKIAAgbIgBgJIgCgIIgEgGIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgEgpqAABQAAALACAEIADAGIAEAFIAFAEIAHADQAFABAMABIApAAQAHAAALgCIAGgDIAGgEIAEgFIADgGQABgEABgLIAAg8IgdAAIAAA2IgBAHIgCAGIgFACIgIABIgdAAIgHgBIgFgCIgDgGIgBgHIAAg2IgcAAgEgrlgA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgA0OAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgA2GghIA2BEIAtAAIAAheIgdAAIAABEIAAAAIg2hEIgtAAIAABeIAdAAIAAhEgA5jAjIAcAAIAAheIgsAAIghA8Ighg8IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgA7rAjIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgA+gAjIAcAAIAAheIgcAAgEggxAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgjsAAjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgEglWAAjIBdAAIAAgZIhBAAIAAhFIgcAAgEgngAAjIBbAAIAMgBQAFgBAEgDQAEgDACgFQACgFAAgIIgBgIIgDgHIgFgEIgIgCIAAgBIAFgCIAFgDIADgGIABgKQAAgHgCgEQgCgGgFgCQgEgDgGgCIgPgBIhTAAgEguKAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAN1CgIAAlJMAkGAAAIAAFJgEgnEAAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA4HALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgrPAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgAzyAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEggVAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEgtuAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgA9EgBIASgkIATAkgEgnEgAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAg");
	this.shape_23.setTransform(376.5,288);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2AwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgKACgGAAgApuAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAdAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgAr+AwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAIABIAGADIAEAFIADAGIADAHIABAKIAAAbIgBAKIgDAHIgDAGIgEAFIgGACIgIACQgHACgKAAgAsAgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgDgCgHAAIghAAQgFAAgEACgANMAvIAAhdIBnAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAMMAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAKOAvIgJgRIg7AAIgIARIggAAIAzhdIAmAAIAzBdgAJ7AKIgTgjIgSAjIAlAAgAH7AvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAiIA9AAIAAgiIAdAAIAABdgAFPAvIAAhGIgoAAIAAgXIBuAAIAAAXIgoAAIAABGgAC0AvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgACDAvIAAgLIgBgHIgCgDIgEgDIgFAAIguAAIAAAYIgcAAIAAhdIBXAAQAIAAAFACQAGABADAFQAEADABAGIABALIAAAGIAAAJIgDAFIgFAFQgDACgFABIAGACQADABACADQADACABADIABAKIAAAQgABJAAIAxAAQAFAAADgCQACgCAAgFIAAgEIgBgFIgCgDQgDgCgIAAIgtAAgAkWAvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgAmAAvIAAhdIAdAAIAABFIBBAAIAAAYgAoKAvIAAhdIBTAAIAPABQAHACADACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAnuAZIA0AAQAFgBADgBQADgCgBgEQABgEgDgCQgDgBgFgBIg0AAgAnugJIA0AAQAEAAACgBQACgCAAgEQAAgEgCgCQgCgCgEAAIg0AAgAu0AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAuXAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAg");
	this.shape_24.setTransform(170.3,286.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgEghqAABQAAALACAEIADAGIAEAFIAFAEIAHADQAFABAMABIApAAQAHAAALgCIAGgDIAGgEIAEgFIADgGQABgEABgLIAAg8IgdAAIAAA2IgBAHIgCAGIgFACIgIABIgdAAIgHgBIgFgCIgDgGIgBgHIAAg2IgcAAgEgqiAABQAAALACAEIADAGIAEAFIAFAEIAHADQAFABAMABIApAAQAHAAALgCIAGgDIAGgEIAEgFIADgGQABgEABgLIAAg8IgdAAIAAA2IgBAHIgCAGIgFACIgIABIgdAAIgHgBIgFgCIgDgGIgBgHIAAg2IgcAAgEgsdgA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgAzBAjIBpAAIAAgXIhMAAIAAgOIBGAAIAAgUIhGAAIAAgPIBKAAIAAgWIhnAAgA03ghIA2BEIAtAAIAAheIgdAAIAABEIgBAAIg2hEIgsAAIAABeIAcAAIAAhEgA1fAjIg0heIglAAIgzBeIAgAAIAIgRIA7AAIAJARIAgAAgA4SAAIAAAjIAdAAIAAheIgdAAIAAAiIg9AAIAAgiIgdAAIAABeIAdAAIAAgjgA7mgjIAoAAIAABGIAdAAIAAhGIApAAIAAgYIhuAAgA9ZAjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgA+WAKIAFAAIAEADIACAEIABAGIAAAMIAcAAIAAgRIgBgJQgBgEgCgCQgCgCgDgBIgGgBQAFgCADgCIAFgEIACgHIABgJIAAgGIgBgLQgCgGgDgDQgDgEgGgBQgFgDgIAAIhXAAIAABeIAcAAIAAgZgEgkkAAjIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgEgmOAAjIBdAAIAAgZIhBAAIAAhFIgcAAgEgoYAAjIBbAAIAMgBQAFgBAEgDQAEgDACgFQACgFAAgIIgBgIIgDgHIgFgEIgIgCIAAgBIAFgCIAFgDIADgGIABgKQAAgHgCgEQgCgGgFgCQgEgDgGgCIgPgBIhTAAgEgvCAAjIBXAAQAHAAALgCIAHgDIAFgDIAEgFIADgFQACgHAAgJIAAgbQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAN1CgIAAlJMAkGAAAIAAFJgEgn8AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgEgsHAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgumAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgA24gBIASgkIATAkgA/EgNIAAgWIAtAAQAIAAADABIACADIABAFIAAAEQAAAFgDACQgCACgGAAgEgn8gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAg");
	this.shape_25.setTransform(376.5,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},10).to({state:[{t:this.shape_17}]},9).to({state:[{t:this.shape_18}]},9).to({state:[{t:this.shape_19}]},9).to({state:[{t:this.shape_21},{t:this.shape_20}]},8).to({state:[{t:this.shape_23},{t:this.shape_22}]},10).to({state:[{t:this.shape_25},{t:this.shape_24}]},9).to({state:[{t:this.shape_21},{t:this.shape_20}]},9).to({state:[{t:this.shape_23},{t:this.shape_22}]},9).to({state:[{t:this.shape_25},{t:this.shape_24}]},9).to({state:[{t:this.shape_21},{t:this.shape_20}]},6).to({state:[{t:this.shape_23},{t:this.shape_22}]},9).to({state:[{t:this.shape_25},{t:this.shape_24}]},9).to({state:[{t:this.shape_21},{t:this.shape_20}]},7).to({state:[{t:this.shape_23},{t:this.shape_22}]},9).to({state:[{t:this.shape_25},{t:this.shape_24}]},9).wait(7));

	// buttons
	this.btn_Jmt4 = new lib._4015_GRMtc();
	this.btn_Jmt4.parent = this;
	this.btn_Jmt4.setTransform(529.7,147,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Jmt4, 0, 1, 2, false, new lib._4015_GRMtc(), 3);

	this.btn_Jmt3 = new lib._3014_GRMtc();
	this.btn_Jmt3.parent = this;
	this.btn_Jmt3.setTransform(423.5,147,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Jmt3, 0, 1, 2, false, new lib._3014_GRMtc(), 3);

	this.btn_Jmt2 = new lib._1513_GRMtc();
	this.btn_Jmt2.parent = this;
	this.btn_Jmt2.setTransform(309.1,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Jmt2, 0, 1, 2, false, new lib._1513_GRMtc(), 3);

	this.btn_Jmt1 = new lib._0150_GRMtc();
	this.btn_Jmt1.parent = this;
	this.btn_Jmt1.setTransform(198.9,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Jmt1, 0, 1, 2, false, new lib._0150_GRMtc(), 3);

	this.btn_J_DCB_J = new lib.But_DCB_singJ_GRMtc();
	this.btn_J_DCB_J.parent = this;
	this.btn_J_DCB_J.setTransform(270.5,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DCB_J, 0, 1, 2, false, new lib.But_DCB_singJ_GRMtc(), 3);

	this.btn_J_DDB_J = new lib.But_DDB_singJ_GRMtc();
	this.btn_J_DDB_J.parent = this;
	this.btn_J_DDB_J.setTransform(402.6,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DDB_J, 0, 1, 2, false, new lib.But_DDB_singJ_GRMtc(), 3);

	this.btn_J_DUB_J = new lib.But_DUB_singJ_GRMtc();
	this.btn_J_DUB_J.parent = this;
	this.btn_J_DUB_J.setTransform(531,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DUB_J, 0, 1, 2, false, new lib.But_DUB_singJ_GRMtc(), 3);

	this.btn_J_DCS_J = new lib.BUT_DCS_singJ_GRMtc();
	this.btn_J_DCS_J.parent = this;
	this.btn_J_DCS_J.setTransform(270.7,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DCS_J, 0, 1, 2, false, new lib.BUT_DCS_singJ_GRMtc(), 3);

	this.btn_J_DDS_J = new lib.But_DDS_singJ_GRMtc();
	this.btn_J_DDS_J.parent = this;
	this.btn_J_DDS_J.setTransform(402.6,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DDS_J, 0, 1, 2, false, new lib.But_DDS_singJ_GRMtc(), 3);

	this.btn_J_DUS_J = new lib.But_DUS_singJ_GRM();
	this.btn_J_DUS_J.parent = this;
	this.btn_J_DUS_J.setTransform(531.1,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DUS_J, 0, 1, 2, false, new lib.But_DUS_singJ_GRM(), 3);

	this.btn_J_DCG_J = new lib.BUT_DCG_singJ_GRMtc();
	this.btn_J_DCG_J.parent = this;
	this.btn_J_DCG_J.setTransform(270.5,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DCG_J, 0, 1, 2, false, new lib.BUT_DCG_singJ_GRMtc(), 3);

	this.btn_J_DDG_J = new lib.But_DDG_singJ_GRMtc();
	this.btn_J_DDG_J.parent = this;
	this.btn_J_DDG_J.setTransform(402.6,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DDG_J, 0, 1, 2, false, new lib.But_DDG_singJ_GRMtc(), 3);

	this.btn_J_DUG_J = new lib.But_DUG_singJ_GRM();
	this.btn_J_DUG_J.parent = this;
	this.btn_J_DUG_J.setTransform(531,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DUG_J, 0, 1, 2, false, new lib.But_DUG_singJ_GRM(), 3);

	this.btn_J_DCR_J = new lib.BUT_DCR_singJ_GRMtc();
	this.btn_J_DCR_J.parent = this;
	this.btn_J_DCR_J.setTransform(270.4,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DCR_J, 0, 1, 2, false, new lib.BUT_DCR_singJ_GRMtc(), 3);

	this.btn_J_DDR_J = new lib.But_DDR_singJ_GRMtc();
	this.btn_J_DDR_J.parent = this;
	this.btn_J_DDR_J.setTransform(402.7,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DDR_J, 0, 1, 2, false, new lib.But_DDR_singJ_GRMtc(), 3);

	this.btn_J_DUR_J = new lib.But_DUR_singJ_GRM();
	this.btn_J_DUR_J.parent = this;
	this.btn_J_DUR_J.setTransform(531.2,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_J_DUR_J, 0, 1, 2, false, new lib.But_DUR_singJ_GRM(), 3);

	this.btn_bBACK = new lib.BACK_TIPCOMBOS_GRM();
	this.btn_bBACK.parent = this;
	this.btn_bBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_bBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRM(), 3);

	this.btn_sBACK = new lib.BACK_TIPCOMBOS_GRMsi();
	this.btn_sBACK.parent = this;
	this.btn_sBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_sBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMsi(), 3);

	this.btn_gBACK = new lib.BACK_TIPCOMBOS_GRMgo();
	this.btn_gBACK.parent = this;
	this.btn_gBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_gBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMgo(), 3);

	this.btn_rBACK = new lib.BACK_TIPCOMBOS_GRMre();
	this.btn_rBACK.parent = this;
	this.btn_rBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_rBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMre(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Jmt1},{t:this.btn_Jmt2},{t:this.btn_Jmt3},{t:this.btn_Jmt4}]}).to({state:[{t:this.btn_J_DUB_J},{t:this.btn_J_DDB_J},{t:this.btn_J_DCB_J}]},10).to({state:[{t:this.btn_J_DUS_J},{t:this.btn_J_DDS_J},{t:this.btn_J_DCS_J}]},9).to({state:[{t:this.btn_J_DUG_J},{t:this.btn_J_DDG_J},{t:this.btn_J_DCG_J}]},9).to({state:[{t:this.btn_J_DUR_J},{t:this.btn_J_DDR_J},{t:this.btn_J_DCR_J}]},9).to({state:[{t:this.btn_bBACK}]},8).to({state:[{t:this.btn_sBACK}]},28).to({state:[{t:this.btn_gBACK}]},24).to({state:[{t:this.btn_rBACK}]},25).wait(25));

	// GRAPHICS
	this.btn_backJst = new lib.BACK_JawStyles_GRMtc();
	this.btn_backJst.parent = this;
	this.btn_backJst.setTransform(700.4,277.5,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_backJst, 0, 1, 2, false, new lib.BACK_JawStyles_GRMtc(), 3);

	this.btn_bkJmt = new lib.BACK_MATthickness_GRMtc();
	this.btn_bkJmt.parent = this;
	this.btn_bkJmt.setTransform(701.4,276.5,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_bkJmt, 0, 1, 2, false, new lib.BACK_MATthickness_GRMtc(), 3);

	this.instance_2 = new lib.J_A_DCB_B_Jstyle_GRMtc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_3 = new lib.J_A_DDB_B_Jstyle_GRMtc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_4 = new lib.J_A_DUB_B_Jstyle_GRMtc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_5 = new lib.J_A_DCS_B_Jstyle_GRMtc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_6 = new lib.J_A_DDS_B_Jstyle_GRMtc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_7 = new lib.J_A_DCG_B_Jstyle_GRMtc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_8 = new lib.J_A_DDG_B_Jstyle_GRMtc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_9 = new lib.J_A_DCR_B_Jstyle_GRMtc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_10 = new lib.J_A_DDR_B_Jstyle_GRMtc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_backJst}]}).to({state:[{t:this.btn_bkJmt}]},10).to({state:[{t:this.instance_2}]},35).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_4}]},9).wait(7));

	// txt_playapplication:
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AD2BIIAAggIAOAAQAIAAADgDQAEgDAAgIIAAgzQAAgIgEgDQgDgDgIAAIgOAAIAAggIAZAAQAKAAAHADQAIACAFAFQAGAFACAIQADAIAAALIAAA7QAAALgDAJQgCAIgGAFQgFAEgIADQgHACgKAAgAkNBIQgLAAgHgCQgIgDgFgEQgFgFgDgIQgDgJAAgLIAAg7QAAgLADgIQADgIAFgFQAFgFAIgCQAHgDALAAIAYAAIAAAgIgOAAQgIAAgDADQgEADAAAIIAAAzQAAAIAEADQADADAIAAIAOAAIAAAggAC6BGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3gAgvBGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3g");
	this.shape_26.setTransform(367,110.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AdJBIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAaABIQgPAAgKgCQgKgCgHgEQgGgEgEgHQgDgIAAgLIAAgKIAsAAQgBAGACADQABADACACQAEACAKAAIA1AAQAJAAADgBIAFgEQABgCAAgEQAAgFgBgDQgDgCgFgBQgGgCgMAAIghAAQgdgBgKgBIgNgDQgFgBgEgDQgDgCgCgDQgDgCgBgEQgCgIgBgOQABgLABgGQABgJAGgGIAHgFIAKgEIANgDIBOgBQANAAAQADIAKAEIAHAFQAFAFACAIQABAGABALIAAAEIgsAAQAAgIgCgDQgCgCgFAAIgLgBIgwAAQgHAAgFACQgFADABAGQgBAFACACQACACAFACQAHABAkAAIApABIAPACQAGACAFACQAEACADAEQADADACAEIADAKIABAOQgCARgCAGQgBAEgCADIgHAGIgKAEIgLACQgNACgWAAgANeBIQgOAAgMgCQgOgEgFgEQgEgDgDgEQgDgEgCgFIgDgLIgBgOIAAgpIABgOIADgLQACgFADgEQADgEAEgDQAFgDAOgEQAMgDAOAAIA0AAQAPAAAVADIAMAEQAFACADADQAEADADAEQACAEABAFQACAJAAAQIgrAAIAAgEQAAgHgFgDQgFgCgKAAIgvAAQgJAAgEABQgGACgDAEQgCADgCAGIgBAMIAAAOIABANQABAFADADQADAEAEABQAFACAIAAIA5gBIAIgCQADgCACgEIABgLIArAAIAAAOQAAAJgCAHQgDAIgFAGQgGAGgJADQgQADgLAAgA58BIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIAzAAQAPAAAVADIANAEQAFACADADQAEADACAEQADAEABAFQACAJAAAQIgsAAIAAgEQAAgHgFgDQgEgCgKAAIgvAAQgJAAgFABQgGACgDAEQgCADgBAGIgBAMIAAAOIABANQAAAFADADQADAEAFABQAEACAIAAIA6gBIAIgCQADgCABgEIABgLIArAAIAAAOQAAAJgBAHQgDAIgGAGQgFAGgKADQgPADgMAAgAWWBGIAAiLICaAAIAAAhIhuAAIAAAWIBoAAIAAAcIhoAAIAAAXIBwAAIAAAhgAU3BGIhQhlIgBAAIAABlIgrAAIAAiLIBCAAIBRBlIABAAIAAhlIArAAIAACLgARuBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IAUAAIA2g0IA7AAIhMBFIBVBGgALaBGIAAiLIArAAIAACLgAKPBGIAAg1IhaAAIAAA1IgsAAIAAiLIAsAAIAAAyIBaAAIAAgyIArAAIAACLgAGPBGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogABfBGIAAiLIArAAIAABnIBgAAIAAAkgAAgBGIgOgZIhWAAIgNAZIgvAAIBLiLIA3AAIBOCLgAACAPIgbgzIgbAzIA2AAgAi9BGIAAiLIArAAIAACLgAkIBGIgBgaQgBgEgCgCQgCgCgDgBIgJgBIhEAAIAAAkIgrAAIAAiLICDAAQAMAAAIADQAIADAFAFQAEAGACAHQACAIABAKIAAAJIgCAMIgDAJQgDAEgFADQgFADgGACIAJADQAEACADADQADAEACAFQACAGAAAIIAAAYgAleAAIBHAAQAJAAAEgEQADgDABgIIAAgEIgBgIQgCgDgDgBQgDgDgLAAIhEAAgAo+BGIAAiLICZAAIAAAhIhuAAIAAAWIBpAAIAAAcIhpAAIAAAXIBxAAIAAAhgAq5BGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogAsqBGIgNgZIhXAAIgNAZIgwAAIBMiLIA4AAIBNCLgAtHAPIgcgzIgbAzIA3AAgAwEBGIAAhjIAAAAIg4BjIghAAIg4hjIAABjIgqAAIAAiLIBBAAIAxBZIAxhZIBCAAIAACLgA1sBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IATAAIA3g0IA7AAIhNBFIBWBGgA8ABGIAAiLIArAAIAACLgA/DBGIAAiLIB2AAQAKAAAPAEQAFABADADIAIAGQAFAGADAJQABAIAAALIAAAMQAAAIgBAHQgCAIgFAGQgFAHgHAEQgLAEgIAAIhWAAIAAAjgA+YAAIBEAAQAGAAAEgDQADgEAAgHIAAgFQAAgIgDgDQgFgEgKAAIg/AAg");
	this.shape_27.setTransform(369.2,80.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_28.setTransform(368.8,97);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_29.setTransform(368.3,165.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_30.setTransform(477.6,144.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_31.setTransform(367.7,144.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_32.setTransform(254.1,144.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgipAAAMBFTAAA");
	this.shape_33.setTransform(368.3,124.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#555E6E").s().p("EgivAFSIAAqjMBFeAAAIAAKjgADjh+IAYAAQAKAAAIgCQAIgCAFgFQAGgFACgIQADgIAAgMIAAg7QAAgMgDgIQgCgIgGgFQgFgFgIgCQgIgCgKAAIgYAAIAAAfIANAAQAJAAADADQAEAEAAAIIAAAzQAAAJgEADQgDADgJAAIgNAAgAkykLQgIACgFAFQgFAFgDAIQgDAIAAAMIAAA7QAAAMADAIQADAIAFAFQAFAFAIACQAHACAKAAIAZAAIAAgfIgOAAQgIAAgEgDQgDgDAAgJIAAgzQAAgIADgEQAEgDAIAAIAOAAIAAgfIgZAAQgKAAgHACgACbjGQAFABACADQADABACAEIAAAJIAAA1IAlAAIAAg4QABgLgDgIQgCgIgGgGQgFgGgKgDQgIgDgNAAIgLAAQgIAAgGACQgGABgEACQgDADgEAEIgEALIgHgKQgDgEgFgDQgFgDgFgBQgFgCgHAAIgOAAQgHAAgGACQgGABgEADQgEACgCAEQgDAEgBAFIgBAAIAAgTIgiAAIAABjIAkAAIAAg0QAAgGACgEQABgEADgCQADgCAEgBIAKgBIAPABQAEABAEACQACABABADIABAIIAAA4IAmAAIAAg3IABgIQACgDACgCQAEgCAFgBIALgBIANABgAhOjGQAFABACADQADABACAEIAAAJIAAA1IAlAAIAAg4QABgLgDgIQgCgIgGgGQgFgGgKgDQgIgDgNAAIgLAAQgIAAgGACQgGABgEACQgDADgEAEIgEALIgHgKQgDgEgFgDQgFgDgFgBQgFgCgHAAIgOAAQgHAAgGACQgGABgEADQgEACgCAEQgDAEgBAFIgBAAIAAgTIgjAAIAABjIAlAAIAAg0QAAgGACgEQABgEADgCQADgCAEgBIAKgBIAPABQAEABAEACQACABABADIABAIIAAA4IAmAAIAAg3IABgIQACgDADgCQADgCAFgBIALgBIANABg");
	this.shape_34.setTransform(368.9,130.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[]},10).wait(137));

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
		{src:"images/GRM_TipsJstyle_atlas_.png", id:"GRM_TipsJstyle_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;