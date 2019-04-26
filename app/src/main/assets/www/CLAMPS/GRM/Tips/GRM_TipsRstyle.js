(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GRM_TipsRstyle_atlas_", frames: [[3168,574,350,285],[3520,574,350,285],[0,3444,350,285],[352,3444,350,285],[704,3444,350,285],[1056,3444,350,285],[1408,3444,350,285],[1760,3444,350,285],[2112,3444,350,285],[2464,3444,350,285],[2816,3444,350,285],[3168,1435,350,285],[3520,1435,350,285],[0,1722,350,285],[352,1722,350,285],[704,1722,350,285],[1056,1722,350,285],[0,0,350,285],[1408,1722,350,285],[1760,1722,350,285],[2112,1722,350,285],[2464,1722,350,285],[2816,1722,350,285],[352,0,350,285],[704,0,350,285],[3168,1722,350,285],[1056,0,350,285],[1408,0,350,285],[1760,0,350,285],[3520,1722,350,285],[0,2009,350,285],[2112,0,350,285],[352,2009,350,285],[704,2009,350,285],[1056,2009,350,285],[3168,3444,350,285],[3520,3444,350,285],[0,3731,350,285],[352,3731,350,285],[1408,2009,350,285],[1760,2009,350,285],[2112,2009,350,285],[2464,2009,350,285],[2816,2009,350,285],[704,3731,350,285],[3168,2009,350,285],[0,861,350,285],[3520,2009,350,285],[1056,3731,350,285],[0,2296,350,285],[352,2296,350,285],[704,2296,350,285],[1056,2296,350,285],[1408,2296,350,285],[352,861,350,285],[1408,3731,350,285],[1760,2296,350,285],[704,861,350,285],[1056,861,350,285],[2112,2296,350,285],[2464,2296,350,285],[2816,2296,350,285],[2464,0,350,285],[1408,861,350,285],[3168,2296,350,285],[3520,2296,350,285],[0,2583,350,285],[352,2583,350,285],[704,2583,350,285],[2816,0,350,285],[1760,3731,350,285],[3168,0,350,285],[2112,3731,350,285],[2464,3731,350,285],[2816,3731,350,285],[3168,3731,350,285],[3520,3731,350,285],[0,4018,350,285],[352,4018,350,285],[1760,861,350,285],[1056,2583,350,285],[1408,2583,350,285],[1760,2583,350,285],[2112,861,350,285],[2464,861,350,285],[2816,861,350,285],[704,4018,350,285],[2112,2583,350,285],[2464,2583,350,285],[3168,861,350,285],[3520,861,350,285],[0,1148,350,285],[352,1148,350,285],[704,1148,350,285],[2816,2583,350,285],[3168,2583,350,285],[1056,4018,350,285],[3520,2583,350,285],[0,2870,350,285],[1056,1148,350,285],[1408,1148,350,285],[1408,4018,350,285],[1760,1148,350,285],[2112,1148,350,285],[2464,1148,350,285],[3520,0,350,285],[0,287,350,285],[352,287,350,285],[704,287,350,285],[1056,287,350,285],[1408,287,350,285],[2816,1148,350,285],[3168,1148,350,285],[3520,1148,350,285],[0,1435,350,285],[352,1435,350,285],[704,1435,350,285],[1760,287,350,285],[1760,4018,350,285],[2112,4018,350,285],[2112,287,350,285],[1056,1435,350,285],[2464,4018,350,285],[1408,1435,350,285],[1760,1435,350,285],[2464,287,350,285],[352,2870,350,285],[704,2870,350,285],[1056,2870,350,285],[2816,4018,350,285],[2816,287,350,285],[3168,287,350,285],[3520,287,350,285],[0,574,350,285],[3168,4018,350,285],[352,574,350,285],[704,574,350,285],[2112,1435,350,285],[1056,574,350,285],[2464,1435,350,285],[1408,2870,350,285],[1408,574,350,285],[1760,2870,350,285],[2112,2870,350,285],[2816,1435,350,285],[2464,2870,350,285],[1760,574,350,285],[2816,2870,350,285],[3168,2870,350,285],[3520,2870,350,285],[0,3157,350,285],[352,3157,350,285],[2112,574,350,285],[2464,574,350,285],[3520,4018,350,285],[2816,574,350,285],[0,4305,350,285],[704,3157,350,285],[1056,3157,350,285],[1408,3157,350,285],[1760,3157,350,285],[2112,3157,350,285],[2464,3157,350,285],[352,4305,350,285],[2816,3157,350,285],[704,4305,350,285],[1056,4305,350,285],[3168,3157,350,285],[3520,3157,350,285],[1408,4305,350,285],[3872,1096,135,135],[3872,1233,135,135],[3872,1370,135,135],[3872,411,135,135],[3872,1507,135,135],[3872,548,135,135],[3872,685,135,135],[3872,0,135,135],[3872,1644,135,135],[3872,137,135,135],[3872,822,135,135],[3872,274,135,135],[3872,1781,135,135],[3872,959,135,135]]}
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



(lib.Assemblies_DCB_R_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCB_R_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DCR_R_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDB_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_DDR_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DCS_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDB_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDR_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DDS_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_DUB_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0002 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0004 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0006 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0008 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCB_JawA0010 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0002 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0004 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0006 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0008 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCR_JawA0010 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0002 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0004 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0006 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0008 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SCS_JawA0010 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_Jaw0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDB_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDR_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SDS_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_R_SUB_JawB0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0003 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0005 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0007 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0009 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0011 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.Assemblies_SDS_R_JawA0013 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDBDDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDBDDB0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDRDDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDRDDR0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDSDDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DDSDDS0001 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.Tips_DUBDUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCBSDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCRSDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SCSSDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDBSDB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDRSDR0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SDSSDS0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.Tips_SUBSUB0000 = function() {
	this.spriteSheet = ss["GRM_TipsRstyle_atlas_"];
	this.gotoAndStop(183);
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
	this.shape_2.graphics.f("#00FF66").s().p("AEcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAhcB4IgLAAIgHgDQgDgCgCgDIgBgIIAAgEIATAAIAAADIACADQABABAFAAIAXAAIAGgBIACgCIAAgDIAAgDIgEgBIgIgBIgOAAIgRgBIgGgBIgEgCIgCgCIgCgDIgBgKIABgIQAAgDADgDIADgCIAEgCIAGgBIAiAAIANABIAEABIADADQADACAAADIABAIIAAACIgTAAQAAgEgBgBIgDgBIgFgBIgVAAIgFABQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABADIADACQADABAPgBIASABIAHABIAFACIADACIACADIABAFIABAGIgCAKIgBAEIgDACIgEACIgGABIgPAAgAC6B4IAAg+IBDAAIAAAOIgwAAIAAAKIAuAAIAAANIguAAIAAAKIAyAAIAAAPgAB5B4IAAg+IATAAIAAAuIAqAAIAAAQgABCB4IAAgWIgfglIAAANIgbAAIAAAuIgSAAIAAguIgaAAIAAgQIBbAAIAVAZIAVgZIAWAAIgiAoIAAAWgAjpB4IAAg+IAzAAIALACIAEACIADACQACADABAEIABAIIAAAGIgBAHQAAADgCADQgCADgEABQgFACgDAAIgmAAIAAAQgAjXBZIAeAAQADAAACgCIABgFIAAgCQAAgDgCgCQgCgBgEAAIgcAAgAkIB4IAAg+IATAAIAAA+gAk6B4IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACSAfIgXAAIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAdAAIANABIAEACIADACQACACABAEIABAIIAAACIgSAAIgBgDIgCgDIgHgBIgUAAIgGABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgCAEIAAAGIAAAHIAAAGIACAEQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAGABIAUAAIAHgBIACgDIABgDIAAgCIgYAAIAAgMIAqAAIAAAXIgBAEIgDAEIgDACIgEABIgFABIgOAAgAjgAfIgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgRIABgGIABgFIACgEIADgDIAJgEIALAAIAXAAIAQABIAFABIAEADIACADIACAEIABALIgTAAIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQgCgCgFAAIgVAAIgGABIgDADIgCAEIAAAFIAAAFIAAAGIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFABIAVAAIAFgBIADgBIACgCIABgFIASAAIAAAGIAAAHQgBAEgDACQgCADgFABIgLABgAC3AfIAAg9IBDAAIAAAOIgxAAIAAAKIAuAAIAAAMIguAAIAAAKIAyAAIAAAPgAA9AfIgjgsIgBAAIAAAsIgSAAIAAg9IAdAAIAjAsIAAgsIATAAIAAA9gAgPAfIgGgLIgmAAIgFALIgVAAIAhg9IAYAAIAhA9gAgcAHIgMgXIgMAXIAYAAgAhqAfIAAgYIgoAAIAAAYIgSAAIAAg9IASAAIAAAWIAoAAIAAgWIATAAIAAA9gAE9g5IgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAeAAIAMAAIAEACIAEACIADADIACAEIACAFIAAAGIAAASIAAAGIgCAFIgCAEIgDADIgEACIgEACIgMAAgAE7hnIgEADIgBAEIgBAFIAAAGIABAGIABAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAFABIAYAAIAGgBIADgCIABgEIABgGIAAgGIgBgFIgBgEIgEgDIgGgBIgWAAIgGABgAAmg5IgLAAIgJgEIgDgDIgCgEIgBgFIgBgGIAAgSIABgGIABgFIACgEIADgDIAJgEIALAAIAXAAIAQABIAFABIAEADIACADIACAEIABALIgTAAIAAgCQAAgBAAAAQgBgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgFAAIgVAAIgGABIgDADIgCAEIAAAFIAAAGIAAAGIACAEQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFABIAVAAIAFgBIADgBIACgCIABgFIASAAIAAAGIAAAHQgBAEgDACQgCADgFABIgLABgAkFg5IgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAeAAIAMAAIAEACIAEACIADADIACAEIACAFIAAAGIAAASIAAAGIgCAFIgCAEIgDADIgEACIgEACIgMAAgAkHhnIgEADIgBAEIgBAFIAAAGIABAGIABAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAFABIAYAAIAGgBIADgCIABgEIABgGIAAgGIgBgFIgBgEIgEgDIgGgBIgWAAIgGABgAlDg5IgXAAIgMAAIgIgEIgDgDIgCgEIgCgFIAAgGIAAgSIAAgGIACgFIACgEIADgDIAIgEIAMAAIAcAAIANABIAEACIAEACQACACABAEIABAIIAAACIgTAAIgBgDIgBgDIgHgBIgVAAIgGABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCAEIgBAGIAAAIIABAGIACAEQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIAGABIAUAAIAHgBIACgDIABgDIAAgCIgXAAIAAgNIAqAAIAAAYIgCAEIgCAEIgDACIgEABIgGABIgNAAgADyg5IAAguIgaAAIAAgQIBIAAIAAAQIgbAAIAAAugACYg5IgbgYIgJAAIAAAYIgSAAIAAg+IASAAIAAAXIAJAAIAYgXIAaAAIgiAeIAmAggAgJg5IgGgLIgmAAIgFALIgVAAIAhg+IAYAAIAhA+gAgWhRIgMgYIgMAYIAYAAgAieg5IAAg+IA2AAIAKABQAEABADACQADACABADQABADAAAEIAAAHIgCAEIgDACIgEABIAAABIAFABIAEADIACAEIAAAGIgBAJIgEAFIgGACIgHABgAiMhIIAiAAIAFgBQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgBIgiAAgAiMheIAiAAIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgEgBIgiAAg");
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


(lib.R_A_SUB_B_SUB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_SUB_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-14,-101.2);

	this.instance_1 = new lib.Assemblies_R_SUB_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-101.2);

	this.instance_2 = new lib.Assemblies_R_SUB_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14,-101.2);

	this.instance_3 = new lib.Assemblies_R_SUB_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14,-101.2);

	this.instance_4 = new lib.Assemblies_R_SUB_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14,-101.2);

	this.instance_5 = new lib.Assemblies_R_SUB_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-14,-101.2);

	this.instance_6 = new lib.Assemblies_R_SUB_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-14,-101.2);

	this.instance_7 = new lib.Assemblies_R_SUB_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-14,-101.2);

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
	this.instance_8 = new lib.Assemblies_R_SUB_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(406,-164.5);

	this.instance_9 = new lib.Assemblies_R_SUB_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(406,-164.5);

	this.instance_10 = new lib.Assemblies_R_SUB_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(406,-164.5);

	this.instance_11 = new lib.Assemblies_R_SUB_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(406,-164.5);

	this.instance_12 = new lib.Assemblies_R_SUB_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(406,-164.5);

	this.instance_13 = new lib.Assemblies_R_SUB_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(406,-164.5);

	this.instance_14 = new lib.Assemblies_R_SUB_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(406,-164.5);

	this.instance_15 = new lib.Assemblies_R_SUB_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(406,-164.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SDS_B_SDS_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_SDS_R_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-137.2);

	this.instance_1 = new lib.Assemblies_SDS_R_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-137.2);

	this.instance_2 = new lib.Assemblies_SDS_R_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-137.2);

	this.instance_3 = new lib.Assemblies_SDS_R_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-137.2);

	this.instance_4 = new lib.Assemblies_SDS_R_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-137.2);

	this.instance_5 = new lib.Assemblies_SDS_R_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-137.2);

	this.instance_6 = new lib.Assemblies_SDS_R_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-137.2);

	this.instance_7 = new lib.Assemblies_SDS_R_JawA0000();
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
	this.instance_8 = new lib.Assemblies_R_SDS_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDS_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDS_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDS_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDS_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDS_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_SDS_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_SDS_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SDR_B_SDR_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_SDR_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-137.2);

	this.instance_1 = new lib.Assemblies_R_SDR_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-137.2);

	this.instance_2 = new lib.Assemblies_R_SDR_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-137.2);

	this.instance_3 = new lib.Assemblies_R_SDR_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-137.2);

	this.instance_4 = new lib.Assemblies_R_SDR_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-137.2);

	this.instance_5 = new lib.Assemblies_R_SDR_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-137.2);

	this.instance_6 = new lib.Assemblies_R_SDR_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-137.2);

	this.instance_7 = new lib.Assemblies_R_SDR_JawA0000();
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
	this.instance_8 = new lib.Assemblies_R_SDR_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDR_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDR_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDR_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDR_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDR_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_SDR_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_SDR_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SDB_B_SDB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_SDB_Jaw0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-137.2);

	this.instance_1 = new lib.Assemblies_R_SDB_Jaw0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-137.2);

	this.instance_2 = new lib.Assemblies_R_SDB_Jaw0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-137.2);

	this.instance_3 = new lib.Assemblies_R_SDB_Jaw0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-137.2);

	this.instance_4 = new lib.Assemblies_R_SDB_Jaw0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-137.2);

	this.instance_5 = new lib.Assemblies_R_SDB_Jaw0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-137.2);

	this.instance_6 = new lib.Assemblies_R_SDB_Jaw0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-137.2);

	this.instance_7 = new lib.Assemblies_R_SDB_Jaw0000();
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
	this.instance_8 = new lib.Assemblies_R_SDB_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDB_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDB_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDB_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDB_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDB_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_SDB_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_SDB_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SCS_B_SDS_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_SCS_JawA0010();
	this.instance.parent = this;
	this.instance.setTransform(-6,-126.5);

	this.instance_1 = new lib.Assemblies_R_SCS_JawA0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-126.5);

	this.instance_2 = new lib.Assemblies_R_SCS_JawA0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-126.5);

	this.instance_3 = new lib.Assemblies_R_SCS_JawA0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-126.5);

	this.instance_4 = new lib.Assemblies_R_SCS_JawA0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-126.5);

	this.instance_5 = new lib.Assemblies_R_SCS_JawA0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-126.5);

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
	this.instance_6 = new lib.Assemblies_R_SDS_JawB0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(404,-116.5);

	this.instance_7 = new lib.Assemblies_R_SDS_JawB0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(404,-116.5);

	this.instance_8 = new lib.Assemblies_R_SDS_JawB0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDS_JawB0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDS_JawB0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDS_JawB0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDS_JawB0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDS_JawB0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SCR_B_SDR_GRMtc = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_assy}]}).to({state:[]},4).to({state:[{t:this.btn_dis}]},27).to({state:[]},4).to({state:[{t:this.btn_assy}]},32).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZRMMAAAgiXMAkEAAAMAAAAiXg");
	mask.setTransform(138.8,9);

	// a
	this.instance = new lib.Assemblies_R_SCR_JawA0010();
	this.instance.parent = this;
	this.instance.setTransform(-6,-126.5);

	this.instance_1 = new lib.Assemblies_R_SCR_JawA0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-126.5);

	this.instance_2 = new lib.Assemblies_R_SCR_JawA0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-126.5);

	this.instance_3 = new lib.Assemblies_R_SCR_JawA0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-126.5);

	this.instance_4 = new lib.Assemblies_R_SCR_JawA0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-126.5);

	this.instance_5 = new lib.Assemblies_R_SCR_JawA0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-126.5);

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
	this.instance_6 = new lib.Assemblies_R_SDR_JawB0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(404,-116.5);

	this.instance_7 = new lib.Assemblies_R_SDR_JawB0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(404,-116.5);

	this.instance_8 = new lib.Assemblies_R_SDR_JawB0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDR_JawB0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDR_JawB0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDR_JawB0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDR_JawB0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDR_JawB0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_SCB_B_SDB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_SCB_JawA0010();
	this.instance.parent = this;
	this.instance.setTransform(-6,-126.5);

	this.instance_1 = new lib.Assemblies_R_SCB_JawA0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-126.5);

	this.instance_2 = new lib.Assemblies_R_SCB_JawA0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-126.5);

	this.instance_3 = new lib.Assemblies_R_SCB_JawA0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-126.5);

	this.instance_4 = new lib.Assemblies_R_SCB_JawA0002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-126.5);

	this.instance_5 = new lib.Assemblies_R_SCB_JawA0000();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-126.5);

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
	this.instance_6 = new lib.Assemblies_R_SDB_JawB0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(404,-116.5);

	this.instance_7 = new lib.Assemblies_R_SDB_JawB0011();
	this.instance_7.parent = this;
	this.instance_7.setTransform(404,-116.5);

	this.instance_8 = new lib.Assemblies_R_SDB_JawB0009();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_SDB_JawB0007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_SDB_JawB0005();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_SDB_JawB0003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_SDB_JawB0001();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_SDB_JawB0000();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DUB_B_DUB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_DUB_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-114.2);

	this.instance_1 = new lib.Assemblies_R_DUB_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-114.2);

	this.instance_2 = new lib.Assemblies_R_DUB_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-114.2);

	this.instance_3 = new lib.Assemblies_R_DUB_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-114.2);

	this.instance_4 = new lib.Assemblies_R_DUB_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-114.2);

	this.instance_5 = new lib.Assemblies_R_DUB_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-114.2);

	this.instance_6 = new lib.Assemblies_R_DUB_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-114.2);

	this.instance_7 = new lib.Assemblies_R_DUB_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-114.2);

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
	this.instance_8 = new lib.Assemblies_R_DUB_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(405,-166.5);

	this.instance_9 = new lib.Assemblies_R_DUB_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(405,-166.5);

	this.instance_10 = new lib.Assemblies_R_DUB_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(405,-166.5);

	this.instance_11 = new lib.Assemblies_R_DUB_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(405,-166.5);

	this.instance_12 = new lib.Assemblies_R_DUB_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(405,-166.5);

	this.instance_13 = new lib.Assemblies_R_DUB_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(405,-166.5);

	this.instance_14 = new lib.Assemblies_R_DUB_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(405,-166.5);

	this.instance_15 = new lib.Assemblies_R_DUB_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(405,-166.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DDS_B_DDS_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_DDS_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-147.2);

	this.instance_1 = new lib.Assemblies_R_DDS_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-147.2);

	this.instance_2 = new lib.Assemblies_R_DDS_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-147.2);

	this.instance_3 = new lib.Assemblies_R_DDS_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-147.2);

	this.instance_4 = new lib.Assemblies_R_DDS_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-147.2);

	this.instance_5 = new lib.Assemblies_R_DDS_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-147.2);

	this.instance_6 = new lib.Assemblies_R_DDS_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-147.2);

	this.instance_7 = new lib.Assemblies_R_DDS_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-147.2);

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
	this.instance_8 = new lib.Assemblies_R_DDS_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDS_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDS_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDS_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDS_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDS_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDS_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDS_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DDR_B_DDR_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_DDR_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-147.2);

	this.instance_1 = new lib.Assemblies_DDR_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-147.2);

	this.instance_2 = new lib.Assemblies_DDR_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-147.2);

	this.instance_3 = new lib.Assemblies_DDR_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-147.2);

	this.instance_4 = new lib.Assemblies_DDR_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-147.2);

	this.instance_5 = new lib.Assemblies_DDR_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-147.2);

	this.instance_6 = new lib.Assemblies_DDR_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-147.2);

	this.instance_7 = new lib.Assemblies_DDR_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-147.2);

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
	this.instance_8 = new lib.Assemblies_R_DDR_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDR_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDR_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDR_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDR_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDR_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDR_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDR_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DDB_B_DDB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_DDB_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-147.2);

	this.instance_1 = new lib.Assemblies_DDB_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-147.2);

	this.instance_2 = new lib.Assemblies_DDB_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-147.2);

	this.instance_3 = new lib.Assemblies_DDB_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-147.2);

	this.instance_4 = new lib.Assemblies_DDB_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-147.2);

	this.instance_5 = new lib.Assemblies_DDB_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-147.2);

	this.instance_6 = new lib.Assemblies_DDB_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-147.2);

	this.instance_7 = new lib.Assemblies_DDB_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-147.2);

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
	this.instance_8 = new lib.Assemblies_R_DDB_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDB_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDB_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDB_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDB_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDB_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDB_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDB_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DCS_B_DDS_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_R_DCS_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-144.2);

	this.instance_1 = new lib.Assemblies_R_DCS_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-144.2);

	this.instance_2 = new lib.Assemblies_R_DCS_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-144.2);

	this.instance_3 = new lib.Assemblies_R_DCS_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-144.2);

	this.instance_4 = new lib.Assemblies_R_DCS_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-144.2);

	this.instance_5 = new lib.Assemblies_R_DCS_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-144.2);

	this.instance_6 = new lib.Assemblies_R_DCS_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-144.2);

	this.instance_7 = new lib.Assemblies_R_DCS_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-144.2);

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
	this.instance_8 = new lib.Assemblies_R_DDS_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDS_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDS_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDS_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDS_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDS_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDS_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDS_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DCR_B_DDR_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_DCR_R_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-144.2);

	this.instance_1 = new lib.Assemblies_DCR_R_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-144.2);

	this.instance_2 = new lib.Assemblies_DCR_R_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-144.2);

	this.instance_3 = new lib.Assemblies_DCR_R_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-144.2);

	this.instance_4 = new lib.Assemblies_DCR_R_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-144.2);

	this.instance_5 = new lib.Assemblies_DCR_R_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-144.2);

	this.instance_6 = new lib.Assemblies_DCR_R_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-144.2);

	this.instance_7 = new lib.Assemblies_DCR_R_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-144.2);

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
	this.instance_8 = new lib.Assemblies_R_DDR_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDR_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDR_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDR_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDR_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDR_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDR_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDR_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.R_A_DCB_B_DDB_GRMtc = function(mode,startPosition,loop) {
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
	this.instance = new lib.Assemblies_DCB_R_JawA0013();
	this.instance.parent = this;
	this.instance.setTransform(-6,-144.2);

	this.instance_1 = new lib.Assemblies_DCB_R_JawA0011();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-144.2);

	this.instance_2 = new lib.Assemblies_DCB_R_JawA0009();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-144.2);

	this.instance_3 = new lib.Assemblies_DCB_R_JawA0007();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,-144.2);

	this.instance_4 = new lib.Assemblies_DCB_R_JawA0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-144.2);

	this.instance_5 = new lib.Assemblies_DCB_R_JawA0003();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,-144.2);

	this.instance_6 = new lib.Assemblies_DCB_R_JawA0001();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,-144.2);

	this.instance_7 = new lib.Assemblies_DCB_R_JawA0000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6,-144.2);

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
	this.instance_8 = new lib.Assemblies_R_DDB_JawB0013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404,-116.5);

	this.instance_9 = new lib.Assemblies_R_DDB_JawB0011();
	this.instance_9.parent = this;
	this.instance_9.setTransform(404,-116.5);

	this.instance_10 = new lib.Assemblies_R_DDB_JawB0009();
	this.instance_10.parent = this;
	this.instance_10.setTransform(404,-116.5);

	this.instance_11 = new lib.Assemblies_R_DDB_JawB0007();
	this.instance_11.parent = this;
	this.instance_11.setTransform(404,-116.5);

	this.instance_12 = new lib.Assemblies_R_DDB_JawB0005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(404,-116.5);

	this.instance_13 = new lib.Assemblies_R_DDB_JawB0003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(404,-116.5);

	this.instance_14 = new lib.Assemblies_R_DDB_JawB0001();
	this.instance_14.parent = this;
	this.instance_14.setTransform(404,-116.5);

	this.instance_15 = new lib.Assemblies_R_DDB_JawB0000();
	this.instance_15.parent = this;
	this.instance_15.setTransform(404,-116.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_8}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.5,-102,638.5,221);


(lib.But_S_SUS_SUS_GRM = function(mode,startPosition,loop) {
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


(lib.But_S_SUR_SUR_GRM = function(mode,startPosition,loop) {
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


(lib.But_S_DUS_DUS_GRM = function(mode,startPosition,loop) {
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


(lib.But_S_DUR_DUR_GRM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-132.3,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABtAtQgLgBgEgCIgHgCIgFgDIgDgFIgDgFQgCgFAAgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAaAAIAAA2IgCAPIgDAFIgDAFIgFADIgHACQgJADgGAAgAmfAtQgLgBgEgCIgHgCIgFgDIgDgFIgDgFQgCgFAAgKIAAg2IAaAAIAAAxIABAHIADAFQABABADABIAHABIAbAAIAHgBIAEgCIADgFIABgHIAAgxIAaAAIAAA2IgCAPIgDAFIgDAFIgFADIgHACQgJADgGAAgAojAtQgKAAgHgCIgMgFIgEgEIgDgFIgCgIIgBgIIAAgZIABgJIACgGIADgGIAEgEQAEgCAIgDQAHgCAKABIAqAAQAKgBAGACIAHACQADABACACIAFAEIADAGIACAGIABAJIAAAZIgBAIIgCAIIgDAFIgFAEIgFADIgHACQgGACgKAAgAomgUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgFgEIgIgBIggAAIgIABgA2jAtQgJAAgHgCQgGgBgEgEQgEgDgCgGQgCgFAAgHIAAgLIAaAAIAAAHQAAAGADABQADADAGAAIAKAAQAIAAADgCIACgCIABgGIAAg3IAbAAIgBBCIgCAGIgCAGIgFADQgEADgHACIgQABgAVRAsIAAhWIBRAAQAGAAAKABIAHACIAFAEIADAEIADAFQACAGAAAIIAAAZQAAAJgCAFIgDAFIgDAFIgFACIgHADIgQACgAVsAVIAvAAIAHgBIAFgCQACgCABgDIABgIIAAgKIgBgIQgBgDgCgBQgCgCgDgBIgHgBIgvAAgAUpAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAUXAKIgRggIgRAgIAiAAgARXAsIAAhWIBJAAQAGgBAJADIAGACIAEAEQADAEACAGQABAFAAAGIAAAIIgBAIQgBAGgDADQgDAFgEACQgHADgFgBIg1AAIAAAXgARyAAIApAAQAFAAACgCQACgCAAgEIAAgEQAAgEgCgCQgDgDgGAAIgnAAgAOrAsIAAhWIBfAAIAAAUIhEAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgANwAsIgyg+IAAAAIAAA+IgbAAIAAhWIAqAAIAyA+IAAg+IAaAAIAABWgAL8AsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgALqAKIgRggIgRAgIAiAAgAJ0AsIAAghIg4AAIAAAhIgbAAIAAhWIAbAAIAAAeIA4AAIAAgeIAbAAIAABWgAHVAsIAAhBIglAAIAAgVIBlAAIAAAVIglAAIAABBgAFGAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAEZAsIgBgQIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBIgFAAIgqAAIAAAXIgbAAIAAhWIBRAAQAHAAAFABQAFACADAEQADADACAFIABALIAAAFIgBAIIgCAFIgFAEIgHAEIAFABIAFADQACACABAEIABAJIAAAPgADkAAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAhhAsIAAhWIBfAAIAAAUIhFAAIAAAOIBBAAIAAARIhBAAIAAANIBGAAIAAAWgAjDAsIAAhWIAaAAIAAA/IA8AAIAAAXgAlDAsIAAhWIBNAAQAIgBAGACQAGABAEACQAEAEACADQABAFAAAGIAAAJQgBAEgCACIgEADIgFACIAHACQADABACACQACADABAEIABAIQAAAHgCAFQgCAEgEADQgDACgFABIgLACgAkoAWIAwAAIAHgBQACgBAAgDQAAgFgCgBQgDgCgEAAIgwAAgAkogIIAvAAQAEAAACgBQACgCAAgEQAAgDgCgCQgCgBgEgBIgvAAgArMAsIAAhWIBQAAQAHAAAKABIAGACIAFAEIAEAEIACAFQACAGAAAIIAAAZQAAAJgCAFIgCAFIgEAFIgFACIgGADIgRACgAqyAVIAwAAIAHgBIAFgCQACgCABgDIAAgIIAAgKIAAgIQgBgDgCgBQgCgCgDgBIgHgBIgwAAgAuhAsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgAuzAKIgRggIgRAgIAiAAgAx8AsIgVg5IgUA5IgfAAIgchWIAaAAIATA+IAWg+IAZAAIAWA+IASg+IAbAAIgdBWgAz/AsIgIgQIg2AAIgIAQIgeAAIAvhWIAjAAIAwBWgA0RAKIgRggIgRAgIAiAAgAs9AYIAAgWIAhAAIAAAWg");
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
(lib.GRM_TipsRstyle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{R_style:0,Thick1r:10,Thick2r:19,Thick3r:28,R_SCB_SDB:36,R_SDB_SDB:46,R_DCB_DDB:55,R_DDB_DDB:64,R_DUB_DUB:73,R_SUB_SUB:82,R_SCS_SDS:91,R_SDS_SDS:101,R_DCS_DDS:110,R_DDS_DDS:119,R_DUS_DUS:128,R_SUS_SUS:135,R_SCR_SDR:142,R_SDR_SDR:152,R_DCR_DDR:161,R_DDR_DDR:170,R_DUR_DUR:179,R_SUR_SUR:186});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.btn_Rmt1.addEventListener('click', playRmt1);
		function playRmt1(evt) {
			var name = "Thick1r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Rmt2.addEventListener('click', playRmt2);
		function playRmt2(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_Rmt3.addEventListener('click', playRmt3);
		function playRmt3(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_backJstR.addEventListener("click", fl_ClickToGoToWebbksty);
		function fl_ClickToGoToWebbksty() {
			window.open("GRM_TipsMain.html", "_self");
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		var self = this;
		
		this.btn_R_SCB_SDB.addEventListener('click', playSCBSDB);
		function playSCBSDB(evt) {
			var name = "R_SCB_SDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SDB_SDB.addEventListener('click', playSDBSDB);
		function playSDBSDB(evt) {
			var name = "R_SDB_SDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DCB_DDB.addEventListener('click', playDCBDDB);
		function playDCBDDB(evt) {
			var name = "R_DCB_DDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DDB_DDB.addEventListener('click', playDDBDDB);
		function playDDBDDB(evt) {
			var name = "R_DDB_DDB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DUB_DUB.addEventListener('click', playDUBDUB);
		function playDUBDUB(evt) {
			var name = "R_DUB_DUB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SUB_SUB.addEventListener('click', playSUBSUB);
		function playSUBSUB(evt) {
			var name = "R_SUB_SUB";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkRmt.addEventListener('click', playRst);
		function playRst(evt) {
			var name = "R_style";
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
		
		this.btn_R_SCS_SDS.addEventListener('click', playSCSSDS);
		function playSCSSDS(evt) {
			var name = "R_SCS_SDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SDS_SDS.addEventListener('click', playSDSSDS);
		function playSDSSDS(evt) {
			var name = "R_SDS_SDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DCS_DDS.addEventListener('click', playDCSDDS);
		function playDCSDDS(evt) {
			var name = "R_DCS_DDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DDS_DDS.addEventListener('click', playDDSDDS);
		function playDDSDDS(evt) {
			var name = "R_DDS_DDS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DUS_DUS.addEventListener('click', playDUSDUS);
		function playDUSDUS(evt) {
			var name = "R_DUS_DUS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SUS_SUS.addEventListener('click', playSUSSUS);
		function playSUSSUS(evt) {
			var name = "R_SUS_SUS";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkRmt.addEventListener('click', playRst);
		function playRst(evt) {
			var name = "R_style";
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
		
		this.btn_R_SCR_SDR.addEventListener('click', playSCRSDR);
		function playSCRSDR(evt) {
			var name = "R_SCR_SDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SDR_SDR.addEventListener('click', playSDRSDR);
		function playSDRSDR(evt) {
			var name = "R_SDR_SDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DCR_DDR.addEventListener('click', playDCRDDR);
		function playDCRDDR(evt) {
			var name = "R_DCR_DDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DDR_DDR.addEventListener('click', playDDRDDR);
		function playDDRDDR(evt) {
			var name = "R_DDR_DDR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_DUR_DUR.addEventListener('click', playDURDUR);
		function playDURDUR(evt) {
			var name = "R_DUR_DUR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.btn_R_SUR_SUR.addEventListener('click', playSURSUR);
		function playSURSUR(evt) {
			var name = "R_SUR_SUR";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		var self = this;
		
		this.btn_bkRmt.addEventListener('click', playRst);
		function playRst(evt) {
			var name = "R_style";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		var self = this;
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_45 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		var self = this;
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
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
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
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
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
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
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
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
		
		this.btn_1bBACK.addEventListener('click', playbkB);
		function playbkB(evt) {
			var name = "Thick1r";
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
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_100 = function() {
		this.stop();
	}
	this.frame_101 = function() {
		var self = this;
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_109 = function() {
		this.stop();
	}
	this.frame_110 = function() {
		var self = this;
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_118 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		var self = this;
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_127 = function() {
		this.stop();
	}
	this.frame_128 = function() {
		var self = this;
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_135 = function() {
		var self = this;
		
		this.btn_2sBACK.addEventListener('click', playbkS);
		function playbkS(evt) {
			var name = "Thick2r";
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
		
		this.btn_2sBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_151 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		var self = this;
		
		this.btn_3rBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_160 = function() {
		this.stop();
	}
	this.frame_161 = function() {
		var self = this;
		
		this.btn_3rBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_169 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		var self = this;
		
		this.btn_3rBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_178 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		var self = this;
		
		this.btn_3rBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_185 = function() {
		this.stop();
	}
	this.frame_186 = function() {
		var self = this;
		
		this.btn_3rBACK.addEventListener('click', playbkR);
		function playbkR(evt) {
			var name = "Thick3r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
	}
	this.frame_192 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(8).call(this.frame_18).wait(1).call(this.frame_19).wait(8).call(this.frame_27).wait(1).call(this.frame_28).wait(7).call(this.frame_35).wait(1).call(this.frame_36).wait(9).call(this.frame_45).wait(1).call(this.frame_46).wait(8).call(this.frame_54).wait(1).call(this.frame_55).wait(8).call(this.frame_63).wait(1).call(this.frame_64).wait(8).call(this.frame_72).wait(1).call(this.frame_73).wait(8).call(this.frame_81).wait(1).call(this.frame_82).wait(8).call(this.frame_90).wait(1).call(this.frame_91).wait(9).call(this.frame_100).wait(1).call(this.frame_101).wait(8).call(this.frame_109).wait(1).call(this.frame_110).wait(8).call(this.frame_118).wait(1).call(this.frame_119).wait(8).call(this.frame_127).wait(1).call(this.frame_128).wait(6).call(this.frame_134).wait(1).call(this.frame_135).wait(6).call(this.frame_141).wait(1).call(this.frame_142).wait(9).call(this.frame_151).wait(1).call(this.frame_152).wait(8).call(this.frame_160).wait(1).call(this.frame_161).wait(8).call(this.frame_169).wait(1).call(this.frame_170).wait(8).call(this.frame_178).wait(1).call(this.frame_179).wait(6).call(this.frame_185).wait(1).call(this.frame_186).wait(6).call(this.frame_192).wait(1));

	// Titles
	this.instance = new lib.txt_TipCombos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(313.1,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193));

	// Layer 34
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYAwIgRgBQgHgCgEgCQgFgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAHAAIAjAAQAGAAACgBIADgDIABgEIgBgFIgFgDIgMgBIgWAAIgagBIgJgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGAEgEIAEgDIAHgDIAJgBIA1gBQAIAAALACIAHACIAEADQAEAEABAFIABAMIAAADIgdAAQAAgGgCgCIgEgBIgogBQgFAAgDABQgDADAAADIABAFIAFACQAFACAYAAIAbABIAKABIAHACIAFAEIAEAEIABAIIABAJIgCAPIgDAFIgEAEIgGADIgIABIgYABgArtAwQgKAAgHgCQgHgCgEgDQgFgDgCgGQgCgGAAgIIAAgLIAdAAIAAAIQAAAFADACQACACAHABIAMAAQAIAAADgCIADgDIABgFIAAg9IAdAAIAAA/IgBAJIgCAHIgDAFIgFAFQgFACgHACIgSABgAKcAvIAAgLIgBgHIgCgDIgDgDIgGgBIgtAAIAAAZIgdAAIAAhdIBXAAQAIAAAGACQAFABAEAEQADAEABAFIABAMIAAAGIAAAIIgDAGIgFAFQgDACgFABIAGACQADABACADQADACABADIABAKIAAAQgAJjAAIAwAAQAFAAADgDQACgCAAgEIAAgEIgBgFIgCgDQgDgBgHgBIgtAAgAEYAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAATIhHAAIAAAPIBMAAIAAAWgACkAvIAAhdIAcAAIAABFIBBAAIAAAYgAA+AvIAAghIg0g8IAiAAIAgAnIAggnIAjAAIg0A8IAAAhgAhIAvIAAhGIgpAAIAAgXIBuAAIAAAXIgoAAIAABGgAmZAvIgWg9IgBAAIgWA9IghAAIgehdIAcAAIAUBEIAAAAIAYhEIAbAAIAYBEIAAAAIAUhEIAcAAIgeBdgAoxAvIgJgRIg7AAIgIARIggAAIAzhdIAlAAIA0BdgApFAKIgTgjIgSAjIAlAAgAL/AFIAAgzIAUAAIAAAzgALfAFIAAgzIATAAIAAAzgAINAFIAAgzIAUAAIAAAzgAHtAFIAAgzIAUAAIAAAzg");
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
	this.shape_20.graphics.f("#FFFFFF").s().p("AFSBCQgPAAgIgCQgKgBgGgEQgGgEgDgHQgCgGAAgLIAAgJIAnAAIABAIQABADADACQACACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgeAAIgkgBIgLgDIgJgDQgDgCgCgDIgDgGQgCgHAAgNQgBgKACgGQACgIAEgFQACgDAEgCQAEgCAFgCIANgCIBIgBQALAAAQADIAJADIAFAFQAFAEACAIQABAGAAAJIAAAEIgnAAQAAgHgDgDIgFgCIg3gBQgHAAgEACQgEADAAAFQAAAEABADQACACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAEAGIADAKIABAMQgBAQgCAFIgEAHIgGAGIgIADIgMACQgLACgUAAgAsKBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAQAAQAKAAAFgDQACgBACgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgBAEgEADIgFAGQgHAEgKACQgKACgPAAgAMWBAIAAgPIgCgJIgCgFIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAIACQAHADAEAFQAEAFADAHQABAHABAJIAAAIIgBAMQgCAFgCADQgCAEgEACQgFADgGACIAHACIAHAFQADADACAFQACAGAAAHIAAAWgALHAAIBBAAQAIAAADgDQAEgEAAgHIAAgEIgBgHQgBgCgDgCQgDgCgKAAIg+AAgAHbBAIAAh/IB3AAQAKAAAPACIAKADIAGAFQAEADACADQACAEABAEQAEAIAAAMIAAAnQAAAMgEAIQgBAEgCAEQgCADgEADQgDADgDABIgKAEQgPACgKAAgAIDAfIBGAAIAKgBQAFgBADgCQADgDABgFIABgLIAAgQIgBgMQgBgEgDgDQgDgCgFgBIgKgBIhGAAgAiYBAIAAh/IBxAAQAMAAAJABQAIACAGAEQAFAEACAHQADAGABAJQAAAIgCAGQgBAFgDADQgBADgEACIgIADIAAAAIAMACQADADACADQAEAEABAGIABAMQAAAKgDAHQgCAHgGAEQgEADgIACQgGABgJAAgAhyAhIBHAAQAHAAADgCQAEgCABgFQgBgGgEgDQgCgCgIAAIhHAAgAhygMIBHAAQAFAAADgDQADgCAAgFQAAgGgDgCQgDgCgFAAIhHAAgAlWBAIgehUIgeBUIguAAIgqh/IAoAAIAbBdIAAAAIAghdIAlAAIAhBdIAAAAIAbhdIAnAAIgpB/gAoXBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAoyAOIgagwIgYAwIAyAAgAB8AjIAAggIAxAAIAAAgg");
	this.shape_20.setTransform(579,37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AIWBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgBgFIgDgKIgCgNIAAglIACgNIADgKQABgFADgDIAGgHQAFgDANgEQAKgCAOAAIAvAAQAOAAATADIALADIAIAFIAFAGIAEAJQACAIAAAPIgoAAIAAgEQAAgGgFgDQgEgDgKAAIgqAAQgIAAgFACQgFACgDADQgCADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAFACAGAAIA1gBIAIgCQACgCACgEIABgJIAnAAIAAAMQAAAJgBAGQgDAIgFAEQgFAGgJADQgOADgKAAgAFZBCQgPAAgJgCQgJgBgHgEQgFgEgDgHQgDgGAAgLIAAgJIAnAAIACAIQABADACACQADACAJAAIAxAAQAHAAAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAAgEQAAgEgCgCQgBgDgGgBIgQgCIgfAAIgjgBIgMgDIgIgDQgDgCgCgDIgEgGQgCgHAAgNQAAgKABgGQACgIAFgFQACgDAEgCQAEgCAFgCIAMgCIBIgBQALAAAQADIAJADIAGAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgCgDIgGgCIg3gBQgGAAgEACQgEADgBAFQAAAEACADQABACAFABQAHABAhAAIAmABIAMACIAKAEIAHAFIAFAGIADAKIAAAMQAAAQgCAFIgFAHIgFAGIgIADIgMACQgLACgVAAgAsIBCQgNAAgKgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAJAAIAPAAQALAAAEgDQADgBACgDIABgHIAAhTIAnAAIAABWIgBAMQgBAGgBAEQgCAEgDADIgGAGQgGAEgLACQgJACgPAAgAMTBAIAAgPIgBgJIgDgFIgEgDIgIgBIg/AAIAAAhIgmAAIAAh/IB3AAQALAAAHACQAIADAEAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgCADQgDAEgEACQgFADgGACIAIACIAHAFQADADABAFQACAGAAAHIAAAWgALEAAIBCAAQAHAAAEgDQADgEABgHIAAgEIgBgHQgCgCgCgCQgEgCgJAAIg/AAgAgPBAIgNgWIhQAAIgMAWIgsAAIBHh/IAzAAIBFB/gAgqAOIgagwIgZAwIAzAAgAlUBAIgehUIgeBUIgtAAIgrh/IAnAAIAbBdIABAAIAghdIAlAAIAhBdIABAAIAbhdIAmAAIgpB/gAoVBAIgMgWIhPAAIgMAWIgsAAIBFh/IAzAAIBIB/gAowAOIgZgwIgZAwIAyAAgACDAjIAAggIAxAAIAAAgg");
	this.shape_21.setTransform(175,38.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFUBCQgOAAgKgCQgJgBgGgEQgGgEgDgHQgDgGAAgLIAAgJIAoAAIABAIQABADACACQADACAKAAIAwAAQAIAAAEgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCAAgEQAAgEgCgCQgBgDgFgBIgRgCIgeAAIgjgBIgMgDIgJgDQgDgCgCgDIgEgGQgCgHAAgNQABgKABgGQACgIAEgFQADgDAEgCQADgCAGgCIAMgCIBHgBQAMAAAPADIAKADIAGAFQAEAEACAIQACAGAAAJIAAAEIgoAAQAAgHgDgDIgGgCIg2gBQgHAAgEACQgEADAAAFQAAAEACADQABACAFABQAGABAhAAIAmABIANACIAKAEIAHAFIAFAGIACAKIAAAMQAAAQgCAFIgEAHIgGAGIgIADIgLACQgLACgVAAgAsMBCQgOAAgJgDQgKgCgGgFQgGgFgDgIQgCgHAAgMIAAgPIAmAAIAAALQAAAHAEAEQAEADAJAAIAPAAQALAAAFgDQADgBABgDIABgHIAAhTIAnAAIAABWIgBAMQAAAGgCAEQgCAEgDADIgFAGQgHAEgKACQgKACgPAAgAMYBAIAAgPIgBgJIgDgFIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAEAFQAFAFABAHQACAHAAAJIAAAIIgBAMQAAAFgDADQgDAEgEACQgEADgGACIAIACIAHAFQACADACAFQACAGAAAHIAAAWgALJAAIBBAAQAIAAAEgDQADgEAAgHIAAgEIgBgHQgBgCgCgCQgFgCgJAAIg+AAgAHdBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQADADACADQADAEABAEQACAIAAAMIAAAnQAAAMgCAIQgBAEgDAEQgCADgDADQgDADgEABIgKAEQgPACgKAAgAIEAfIBGAAIALgBQAFgBACgCQADgDACgFIABgLIAAgQIgBgMQgCgEgDgDQgCgCgFgBIgLgBIhGAAgAgUBAIgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBGB/gAgvAOIgZgwIgaAwIAzAAgAlYBAIgfhUIgdBUIguAAIgqh/IAnAAIAbBdIABAAIAghdIAkAAIAiBdIAAAAIAbhdIAmAAIgpB/gAoZBAIgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo0AOIgagwIgYAwIAyAAgAB+AjIAAggIAxAAIAAAgg");
	this.shape_22.setTransform(175,38.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AsRBBQgOAAgJgDQgKgBgGgGQgGgFgDgHQgCgIAAgLIAAgQIAmAAIAAALQAAAIAEADQAEADAJAAIAQAAQALAAAEgCQADgCABgDIABgHIAAhTIAoAAIAABXIgBALQgBAGgCAEQgBAFgDADIgGAFQgHAEgKACQgKACgOAAgAMcA/IAAgPIgBgIIgCgGIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAEAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgCADQgDAEgEACQgEADgHACIAIADIAHAEQADAEACAEQACAGAAAIIAAAVgALOgBIBBAAQAIAAADgDQAEgDAAgIIAAgEIgBgHQgBgCgDgBQgEgDgJAAIg+AAgAHiA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPADgKgBgAIKAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAEcA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQADADACAEQADADABAFQADAHAAANIAAAmQAAAMgDAIQgBAFgDADQgCADgDADQgDADgEACIgKADQgPADgKgBgAFEAfIBGAAIALgCQAEgBADgCQADgDABgFIABgKIAAgRIgBgLQgBgFgDgDQgDgCgEgBIgLgBIhGAAgAifA/IAAh/IBxAAQAMAAAJABQAIACAGAFQAGAEADAGQACAHAAAJQAAAHgBAGQgBAFgDADQgCAEgEACIgHACIAAAAIALACQAEADADAEQACADABAGIABAMQAAALgDAGQgBAHgGAEQgFADgHACQgHACgJgBgAh4AhIBHAAQAHAAADgCQAEgDAAgFQAAgGgEgCQgDgCgHAAIhHAAgAh4gNIBGAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFAAIhGAAgAldA/IgehTIgeBTIgtAAIgqh/IAnAAIAbBdIAAAAIAhhdIAkAAIAhBdIABAAIAbhdIAmAAIgpB/gAoeA/IgMgWIhQAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo5ANIgZgwIgZAwIAyAAgAB1AiIAAggIAyAAIAAAgg");
	this.shape_23.setTransform(579,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AIdBCQgOAAgKgCQgNgEgFgDIgGgHQgDgDgCgFIgCgKIgBgNIAAglIABgNIACgKQACgFADgDIAGgHQAFgDANgEQAKgCAOAAIAuAAQAOAAAUADIALADIAIAFIAGAGIACAJQACAIAAAPIgnAAIAAgEQAAgGgFgDQgEgDgJAAIgsAAQgHAAgFACQgEACgDADQgDADgBAFIgBALIAAANIABAMQABAFACADQACADAFABQAEACAIAAIA1gBIAHgCQACgCACgEIABgJIAnAAIAAAMQAAAJgCAGQgCAIgFAEQgFAGgJADQgOADgLAAgAsOBCQgPAAgJgDQgKgCgFgFQgHgFgCgIQgDgHAAgMIAAgPIAnAAIAAALQAAAHADAEQAFADAIAAIAQAAQALAAAFgDQACgBABgDIABgHIAAhTIAoAAIAABWIgBAMQAAAGgDAEQgBAEgDADIgGAGQgHAEgKACQgKACgOAAgAMaBAIAAgPIgBgJIgCgFIgGgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAIACQAHADAFAFQAEAFACAHQACAHAAAJIAAAIIgBAMQgBAFgDADQgCAEgEACQgEADgHACIAIACIAHAFQADADABAFQACAGABAHIAAAWgALLAAIBCAAQAIAAADgDQAEgEgBgHIAAgEIgBgHQAAgCgDgCQgEgCgKAAIg+AAgAEiBAIAAh/IB3AAQAKAAAPACIAKADIAHAFQAEADACADQACAEABAEQADAIAAAMIAAAnQAAAMgDAIQgBAEgCAEQgCADgEADQgDADgEABIgKAEQgPACgKAAgAFKAfIBGAAIALgBQAEgBADgCQADgDACgFIAAgLIAAgQIAAgMQgCgEgDgDQgDgCgEgBIgLgBIhGAAgAgXBAIgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAgyAOIgZgwIgZAwIAyAAgAlbBAIgehUIgdBUIguAAIgqh/IAnAAIAbBdIAAAAIAhhdIAlAAIAhBdIAAAAIAbhdIAmAAIgpB/gAobBAIgNgWIhPAAIgNAWIgsAAIBGh/IA0AAIBHB/gAo2AOIgagwIgZAwIAzAAgAB8AjIAAggIAxAAIAAAgg");
	this.shape_24.setTransform(175,38.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AsTBBQgOAAgKgDQgJgCgGgEQgGgGgDgIQgCgHgBgLIAAgQIAnAAIAAAMQAAAGAEAEQAEADAJAAIAPAAQAMAAAEgCQADgBABgEIABgGIAAhUIAoAAIAABXIgBALQgBAGgCAEQgBAEgDADIgHAGQgGAFgLABQgJACgOAAgAMeA/IAAgPIgBgIIgCgGIgFgDIgIgBIg+AAIAAAhIgnAAIAAh/IB3AAQALAAAHACQAIADAFAFQADAFACAIQACAGABAJIAAAIIgCAMQgBAFgCADQgDAEgEACQgEAEgHABIAIACIAIAGQADACABAGQACAFAAAHIAAAWgALQgBIBCAAQAHAAAEgDQADgEAAgGIAAgFIgBgHQgBgCgCgCQgFgCgJAAIg+AAgAHkA/IAAh/IB3AAQAKAAAPACIAJAEIAHAEQAEADACADQACAEACAFQACAHAAAMIAAAnQAAAMgCAIQgCAFgCADQgCADgEADQgCADgFACIgJADQgPACgKAAgAIMAfIBFAAIAMgBQAEgBACgDQAEgDABgFIABgLIAAgQIgBgLQgBgFgEgDQgCgCgEgBIgMgBIhFAAgAEeA/IAAh/IB3AAQAKAAAPACIAKAEIAHAEQAEADACADQACAEABAFQADAHAAAMIAAAnQAAAMgDAIQgBAFgCADQgCADgEADQgDADgEACIgKADQgPACgKAAgAFGAfIBGAAIALgBQAEgBADgDQADgDACgFIAAgLIAAgQIAAgLQgCgFgDgDQgDgCgEgBIgLgBIhGAAgAgbA/IgMgWIhQAAIgLAWIgsAAIBGh/IAyAAIBGB/gAg2ANIgZgwIgZAwIAyAAgAlfA/IgehTIgeBTIgtAAIgqh/IAmAAIAbBeIABAAIAhheIAkAAIAhBeIABAAIAbheIAmAAIgqB/gAogA/IgNgWIhPAAIgMAWIgsAAIBGh/IAzAAIBHB/gAo7ANIgagwIgZAwIAzAAgAB4AiIAAgfIAxAAIAAAfg");
	this.shape_25.setTransform(175,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).to({state:[{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_3},{t:this.shape_1},{t:this.shape_2}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_5},{t:this.shape_4}]},8).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_6},{t:this.shape_4}]},10).to({state:[{t:this.instance_1},{t:this.shape_8},{t:this.shape},{t:this.shape_7}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_9},{t:this.shape_7}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_15},{t:this.shape_14}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_16},{t:this.shape_14}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_18},{t:this.shape_17}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_19},{t:this.shape_17}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},7).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_21},{t:this.shape_20}]},7).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_22},{t:this.shape_20}]},10).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_24},{t:this.shape_23}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_25},{t:this.shape_23}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_11},{t:this.shape_10}]},9).to({state:[{t:this.instance_1},{t:this.shape},{t:this.shape_13},{t:this.shape_12}]},7).wait(7));

	// Layer 35
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A7BEFA").s().p("ASVBSQgJgCgGgEQgGgEgCgHQgDgIAAgLIAAhWQAAgNADgIQADgJAFgEQAGgFAJgCQAJgCAMAAQAOAAAIACQAJACAFAEQAGAFADAIQACAIAAAOIAABWQAAALgCAIQgDAHgGAEQgFAEgJACQgJACgNAAQgNAAgIgCgASjg2QgCABAAAEIAABiQAAAFACABQACACAFAAQAFAAADgCQACgBAAgFIAAhjQAAgDgCgCIgIgBQgFAAgCACgAQlBSQgIgBgGgEQgFgEgDgHQgDgHAAgLIAAgQIAjAAIAAASQAAAEADACIAGABIAGgBQADgCAAgEIAAgyQAAgDgCgBQgCgCgGAAQgFAAgCACQgCABAAADIAAAHIgfAAIAAhYIBQAAIAAAcIgvAAIAAAfIABAAQADgFAGgDQAGgCAHAAIAMAAQAGACAEADQAEADADAGQACAHAAAKIAAAxQAAALgDAIQgEAHgGAEQgGADgJACIgRABQgMAAgIgCgAJNBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgAJbg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgADiBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgABxBSQgKgCgFgFQgFgFgCgIQgCgIAAgNIAAgNIAjAAIAAAMQAAAJABADQACADAIAAQAGAAADgCQACgCAAgFIAAgSQAAgIgEgDQgDgCgPgEQgMgCgGgDQgHgDgDgEQgEgEgCgIIgBgSIAAgKQAAgOACgIQADgJAFgEQAGgEAJgBQAIgCAOAAQANAAAIACQAIACAFAEQAFADADAHQACAFAAAJIAAAUIgiAAIAAgIQAAgLgBgCQgCgDgHAAQgHAAgCADQgCADAAAGIAAALQAAAHADADQACADAJACIAYAHQAJAEAEAFQAFAEABAJIABAZQAAAPgCAJQgDAJgGAFQgFAFgJACQgIACgNAAQgPAAgJgCgAlUBUQgLAAgHgDQgHgCgFgFQgEgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAEgFQAFgFAHgCQAHgDALAAIAOAAQAMAAAIACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgCgCQgDgBgEAAQgFAAgDABQgCACAAAEIAABdQAAAEACACQADABAEAAQAFAAADgBQACgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgCAHgFAEQgFAFgIACQgIACgMAAgAYlBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAWKBSIAAhSQAAgEgCgCQgCgCgEAAQgFAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhyIAhAAIAAAMIABAAQADgHAGgEQAGgDAKAAQAIgBAGADQAHAEAEAIQADgHAHgEQAFgDAKAAIAJABQAFABADADQAEAEACAFQACAFAAAHIAABagAPUBSIAAgjIAhAAIAAAjgAOHBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAgDBSIAAijIBHAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegAhTBSIgch/IAAAAIACB/IgiAAIAAijIA2AAIAcB/IAAgBIgCh+IAiAAIAACjgAjFBSIgchJIAABJIgmAAIAAijIAmAAIAABGIAYhGIAoAAIggBOIAkBVgAm5BSIAAijIAmAAIAACjgAn6BSIAAhHIgVAAIAABHIgmAAIAAijIAmAAIAABAIAVAAIAAhAIAmAAIAACjgAqEBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgAspBSIAAijIAlAAIAACFIAlAAIAAAegAtgBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgAtnAOIgJhIIgBAAIgIBIIASAAgAvgBSIAAijIAmAAIAACjgAwgBSIAAgvQAAgFgDgCQgEgDgJAAIgGAAIAAA5IgmAAIAAijIAuAAQAQAAAKACQAKACAFAEQAGAEADAIQACAHAAAMIAAAUQAAAJgCAGQgBAGgEADQgDADgFACQgEACgHABIAAABQAPADAFAEQADADABAEQACAFAAAHIAAAtgAw2gCIAHAAQAKAAADgDQACgDAAgIIAAgZQAAgGgCgDQgDgDgGAAIgLAAgAy8BSIAAijIBIAAIAAAeIgiAAIAAAjIAgAAIAAAbIggAAIAAApIAlAAIAAAegA0LBSIAAiFIgaAAIAAgeIBaAAIAAAeIgaAAIAACFgA1TBSIgEgoIgZAAIgEAoIgnAAIAZijIA9AAIAZCjgA1aAOIgJhIIgBAAIgIBIIASAAgA3NBSIABiJIAAAAIgYCJIgrAAIgViKIAAAAIAACKIgiAAIAAijIA7AAIASCAIABAAIASiAIA7AAIAACjgAF1A/IAAgaIByAAIAAAagALcAlIAAgeIA7AAIAAAegAF1AMIAAgYIByAAIAAAYg");
	this.shape_26.setTransform(377.6,282.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A7BEFA").s().p("ATCBSQgJgDgFgEQgEgEgCgGQgBgGAAgJIAAgXIAiAAIAAATQAAAGACACQACADAGAAQAHAAACgEQACgEAAgPQAAgQgCgEQgCgDgLAAIgQAAIAAgaIAVgBQADAAACgDQADgEAAgTQAAgJgCgDQgBgCgGAAQgGAAgBABQgDACAAAFIAAAPIgiAAIAAgSQAAgJACgGQADgGAFgDQAGgEAIgCQAJgCAMAAQAOAAAIACQAJADAFAEQAFAEACAIQABAGAAALIAAAUQgBAHgDAEQgCAFgEACQgEACgHABIAAABQAIABAEACQAFACACAFQADAFAAAIIABASQAAANgCAIQgCAJgEAFQgGAGgJACQgJADgPAAQgPAAgIgCgAQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALGBSQgJgBgFgEQgGgEgDgHQgCgHAAgLIAAgQIAjAAIAAASQAAAEACACIAHABIAGgBQACgCAAgEIAAgyQAAgDgCgBQgCgCgFAAQgGAAgCACQgCABAAADIAAAHIgfAAIAAhYIBRAAIAAAcIgvAAIAAAfIAAAAQADgFAHgDQAFgCAIAAIALAAQAGACAEADQAFADACAGQADAHAAAKIAAAxQAAALgEAIQgDAHgHAEQgFADgJACIgSABQgMAAgHgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAIoBSIAAiHIgBAAIgYAlIgUgUIAjgtIAvAAIAACjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_27.setTransform(380.1,282.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A7BEFA").s().p("AQkBSQgIgBgGgEQgFgEgDgHQgDgIAAgLIAAguQAAgKADgHQADgIAFgEQAGgDAIgCQAIgBALAAQAMAAAHABQAJACAFADQAGAEACAIQADAHAAAKIAAAuQAAALgDAIQgCAHgGAEQgFAEgJABQgHACgMAAQgLAAgIgCgAQwgHQgCABAAAFIAAAzQAAAFACACQACABAFAAQAFAAACgBQACgCAAgFIAAgzQAAgFgCgBQgCgCgFAAQgFAAgCACgAPbBSQgGgBgEgDQgDgEgCgEQgCgFAAgHIAAhBIgJAAIAAgZIAJAAIAAgfIAiAAIAAAfIATAAIAAAZIgTAAIAAA4QAAAFACACQABACAFAAIAJAAIAAAZIgVABQgIAAgFgCgALEBSQgJgCgFgEQgGgEgDgHQgCgIAAgLIAAhWQAAgNACgIQADgJAGgEQAGgFAJgCQAIgCANAAQANAAAIACQAJACAGAEQAGAFACAIQADAIAAAOIAABWQAAALgDAIQgCAHgGAEQgGAEgJACQgIACgNAAQgNAAgJgCgALSg2QgCABAAAEIAABiQAAAFACABQADACAFAAQAFAAACgCQACgBAAgFIAAhjQAAgDgCgCIgHgBQgFAAgDACgAIVBSQgJgDgEgEQgFgEgBgGQgCgGAAgJIAAgXIAjAAIAAATQAAAGABACQADADAGAAQAHAAACgEQACgEAAgPQAAgQgDgEQgCgDgKAAIgQAAIAAgaIAUgBQAEAAACgDQACgEABgTQAAgJgCgDQgCgCgFAAQgGAAgCABQgCACAAAFIAAAPIgjAAIAAgSQAAgJADgGQACgGAGgDQAFgEAJgCQAIgCAMAAQAOAAAJACQAIADAFAEQAFAEACAIQACAGAAALIgBAUQgBAHgCAEQgCAFgFACQgDACgIABIAAABQAIABAFACQAFACACAFQACAFABAIIABASQAAANgCAIQgCAJgFAFQgFAGgJACQgKADgPAAQgOAAgJgCgACvBSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAA+BSQgKgCgFgFQgFgFgCgIQgBgIAAgNIAAgNIAiAAIAAAMQAAAJACADQACADAHAAQAHAAACgCQACgCAAgFIAAgSQAAgIgDgDQgDgCgQgEQgLgCgGgDQgHgDgEgEQgEgEgBgIIgBgSIAAgKQAAgOACgIQACgJAGgEQAFgEAJgBQAIgCAPAAQAMAAAIACQAJACAFAEQAFADACAHQACAFAAAJIAAAUIghAAIAAgIQAAgLgCgCQgCgDgHAAQgHAAgCADQgBADAAAGIAAALQAAAHACADQADADAJACIAXAHQAJAEAFAFQAEAEACAJIABAZQAAAPgDAJQgDAJgFAFQgGAFgJACQgIACgMAAQgQAAgJgCgAmHBUQgKAAgIgDQgHgCgEgFQgFgEgCgHQgCgGAAgIIAAhcQAAgKACgHQACgIAFgFQAEgFAHgCQAIgDAKAAIAOAAQAMAAAJACQAIACAFADQAFAEACAFQACAFAAAHIAAAeIgkAAIAAgVQAAgEgDgCQgCgBgFAAQgFAAgCABQgDACAAAEIAABdQAAAEADACQACABAFAAQAFAAACgBQADgCAAgEIAAgaIAkAAIAAAZQAAALgCAHQgDAHgFAEQgFAFgIACQgIACgMAAgAZYBSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAW9BSIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIghAAIAAhSQAAgEgCgCQgCgCgFAAQgEAAgCACQgCACAAAEIAABSIgiAAIAAhyIAiAAIAAAMIAAAAQAEgHAGgEQAGgDAJAAQAIgBAGADQAIAEADAIQAEgHAGgEQAGgDAJAAIAKABQAEABAEADQADAEACAFQACAFAAAHIAABagAThBSIAAgiIg4AAIAAgnIAjhaIA4AAIAABlIAKAAIAAAcIgKAAIAAAigATGAUIAbAAIAAhRIAAAAgANCBSIAAiHIAAAAIgYAlIgUgUIAigtIAwAAIAACjgAJ0BSIAAgjIAiAAIAAAjgAg1BSIAAijIBHAAIAAAeIgiAAIAAAjIAfAAIAAAbIgfAAIAAApIAlAAIAAAegAiGBSIgbh/IgBAAIADB/IgjAAIAAijIA3AAIAbB/IABgBIgDh+IAjAAIAACjgAj4BSIgchJIAABJIglAAIAAijIAlAAIAABGIAYhGIApAAIggBOIAkBVgAnrBSIAAijIAlAAIAACjgAosBSIAAhHIgWAAIAABHIglAAIAAijIAlAAIAABAIAWAAIAAhAIAlAAIAACjgAq2BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgAtcBSIAAijIAmAAIAACFIAkAAIAAAegAuSBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgAuaAOIgJhIIAAAAIgJBIIASAAgAwSBSIAAijIAlAAIAACjgAxSBSIAAgvQAAgFgDgCQgEgDgJAAIgHAAIAAA5IglAAIAAijIAuAAQAQAAAJACQAKACAGAEQAGAEACAIQACAHAAAMIAAAUQAAAJgBAGQgCAGgDADQgDADgFACQgEACgHABIAAABQAOADAFAEQADADACAEQABAFAAAHIAAAtgAxpgCIAHAAQAKAAADgDQADgDAAgIIAAgZQAAgGgDgDQgCgDgHAAIgLAAgAzuBSIAAijIBIAAIAAAeIgjAAIAAAjIAgAAIAAAbIggAAIAAApIAmAAIAAAegA09BSIAAiFIgbAAIAAgeIBaAAIAAAeIgaAAIAACFgA2FBSIgFgoIgYAAIgFAoIgmAAIAYijIA+AAIAYCjgA2NAOIgJhIIAAAAIgJBIIASAAgA3/BSIABiJIgBAAIgYCJIgrAAIgUiKIgBAAIAACKIghAAIAAijIA7AAIASCAIAAAAIATiAIA7AAIAACjgAFCA/IAAgaIBzAAIAAAagAFCAMIAAgYIBzAAIAAAYg");
	this.shape_28.setTransform(380.1,282.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AHUAwQgKAAgHgCQgKgCgEgCIgEgFIgDgGIgDgHIgBgKIAAgbIABgKIADgHIADgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgHABQgHACgKAAgAHRgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQABADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgFIABgIIAAgJIgBgIQAAgDgCgDQgCgCgEgCQgDgBgGAAIghAAQgGAAgEABgAnYAwQgKAAgIgCQgJgCgDgCIgFgFIgEgGIgBgHIgBgKIAAgbIABgKIABgHIAEgGIAFgFQADgCAJgCQAIgCAKAAIArAAQAJAAALACIAHACIAFAEQADADABAHQACAFAAAHIAAADIgdAAIgBgFIgCgEQgEgBgHgBIggAAIgIABQgEABgCADQgCABgBAEIgBAKIAAALIABAKQABADACACQACADAEABIAIABIAfAAQAIAAADgCIADgEQACgCgBgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgCAIQgBACgCACIgFAEIgGACIgIABIgVABgAsqAwIgRgBQgHgCgEgCQgFgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAGAAIAjAAQAGAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgbgBIgIgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAGACIAFADQADAEACAFIABAMIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAYAAIAbABIAKABIAHACIAFAEIAEAEIABAHIABAJIgCAQIgDAFIgEAEIgHADIgIABIgXABgALSAvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgALuAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAgAKRAvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgAF9AvIAAhCIgmBCIgVAAIgnhCIAABCIgcAAIAAhdIAsAAIAhA7IAhg7IAsAAIAABdgADUAvIgJgRIg6AAIgIARIghAAIAzhdIAmAAIA0BdgADBAKIgTgjIgSAjIAlAAgABAAvIAAhdIAcAAIAABdgAhQAvIAAhdIBWAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAg0AXIA0AAIAHgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgHgBIg0AAgAkLAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgAl1AvIAAhdIAcAAIAABFIBCAAIAAAYgAo/AvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgArFAvIAAhdIAdAAIAABdg");
	this.shape_29.setTransform(583.1,285.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AElAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAEigVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgEIABgJIAAgJIgBgIQAAgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgACbAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAiAAIAYACIAJACIAFAEIAEAEIADAHQABAFAAAMIgdAAIAAgEQAAgEgDgCQgEgCgGAAIggAAQgFAAgEACQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAmAAIAGgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgHIAdAAIAAAIQAAAHgBAFQgCAFgDAEQgEAEgHACQgKACgIAAgAkSAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIArAAQAIAAAMACIAHACIAEAEQAEADABAHQACAEAAAIIAAADIgdAAIgBgFIgDgEQgDgBgHgBIggAAIgJABQgDABgCADQgCACgBADIgBAKIAAALIABAKQABADACACQACADADABIAJABIAfAAQAHAAAEgCIADgEQABgCAAgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgCAIQgBACgCADIgFADIgGACIgIABIgVABgApkAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQACABAHAAIAjAAQAGAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgWAAIgagBIgIgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAGACIAFAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAFABAYAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgGACIgIACIgXABgAIiAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAHhAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAhFAvIAAhdIBlAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAivAvIAAhdIAcAAIAABFIBBAAIAAAYgAl6AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAn/AvIAAhdIAdAAIAABdg");
	this.shape_30.setTransform(170.1,286.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0D1341").s().p("Egx6ACqIAAlJMAkGAAAIAAFJgA77g6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAKgBAHgBIAHgCIAGgDIAFgEIADgHIACgHIABgKIAAgbIgBgJIgCgIIgDgGIgFgEIgGgDIgHgCQgHgBgKgBIgvAAQgKABgHABgA+Fg6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAvAAQAHAAALgCQAGgDAEgEQAEgEABgFQACgEAAgHIAAgHIgdAAIgBAGQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgFACIgnAAIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAfAAQAHAAADABQAEACAAAFIAAADIAcAAQABgLgCgGIgCgGIgEgFIgGgDIgIgDIgZgCIgiAAQgKABgHABgEgkzgA6QgKACgDADIgFAEIgDAGIgCAIIgBAJIAAAbIABAKIACAHIADAHIAFAEQADADAKACQAHABAKABIAjAAIAVgBIAIgBIAHgDIAEgDQADgCABgDIACgHIABgJIAAgZIhBAAIAAASIAkAAIAAACQAAAEgCACIgDADQgDACgHAAIgfAAIgJgBQgEAAgCgDQgCgCgBgEIAAgJIAAgLIAAgKQABgEACgCQACgDAEAAIAJgBIAfAAQAIAAADACIADADIABAGIAcAAIAAgDQAAgIgBgFQgCgGgDgEIgFgDIgHgDQgLgCgIAAIgsAAQgKABgHABgEgqZAAKQAAAIACAFQACAEAFADQAEADAHACIARABIAjAAIAYgBIAIgCIAGgDIAEgDIADgGIACgPIgBgIIgBgHIgEgGIgFgDIgHgDIgKgBIgbgBQgYAAgFgBIgFgCIgBgGQAAgDADgCQADgBAFAAIAoAAIAEACQACACAAAFIAdAAIAAgDIgBgLQgBgGgEgDIgEgDIgHgDQgLgCgIAAIg1ABIgJABIgHAEIgEADQgEAEgBAFIgBANQAAAJACAEIACAGIAEADIAGADIAJACIAaABIAWAAIAMABIAFABIABAGIgBAEIgDACQgCACgGAAIgjAAQgHAAgDgCIgCgEIgBgGIgdAAgA3tAjIBpAAIAAgXIhMAAIAAgOIBGAAIAAgUIhGAAIAAgPIBKAAIAAgWIhnAAgA5jghIA2BEIAtAAIAAheIgdAAIAABEIgBAAIg2hEIgsAAIAABeIAcAAIAAhEgEghVAAjIBpAAIAAgXIhMAAIAAgOIBGAAIAAgUIhGAAIAAgPIBKAAIAAgWIhnAAgEgi/AAjIBeAAIAAgZIhBAAIAAhFIgdAAgEgm/gAhIA2BEIAtAAIAAheIgdAAIAABEIgBAAIg2hEIgsAAIAABeIAcAAIAAhEgEgoOAAjIAcAAIAAheIgcAAgAN1CgIAAlJMAkGAAAIAAFJgEAnUgBEQgJACgEADIgEAEIgEAHIgCAHIgBAKIAAAcIABAIIACAIIAEAGIAEAEQAEADAJACQAIABAKABIAuAAQALgBAHgBIAHgCIAGgDIAEgEIAEgGIACgIIABgIIAAgcIgBgKIgCgHIgEgHIgEgEIgGgDIgHgCQgHgBgLgBIguAAQgKABgIABgAYnhEQgJACgEADIgEAEIgEAHIgCAHIgBAKIAAAcIABAIIACAIIAEAGIAEAEQAEADAJACQAIABAKABIAjAAIAVgBIAIgBIAGgDIAFgDQACgCABgDIACgHIABgIIAAgaIhBAAIAAATIAkAAIAAACQAAAEgBACIgDACQgEACgHAAIgfAAIgJgBQgDAAgCgCQgCgCgBgEIgBgKIAAgLIABgKQABgEACgCQACgDADAAIAJgBIAgAAQAHAAADACIADADIABAGIAdAAIAAgEQAAgHgCgFQgBgGgEgEIgEgDIgHgDQgMgCgIAAIgrAAQgKABgIABgATCAAQAAAIACAFQACAEAEADQAFADAHACIARABIAjAAIAXgBIAIgCIAGgDIAFgDIADgGIACgOIgBgJIgCgHIgDgGIgFgDIgIgDIgJgBIgcgBQgYAAgFgBIgEgCIgBgGQAAgDADgCQADgCAFAAIAnABIAFACQACACAAAFIAdAAIAAgDIgBgLQgCgFgDgEIgFgDIgGgDQgLgCgJAAIg0ABIgJABIgHAEIgFADQgDAEgBAFIgBAMQAAAKABAEIADAGIAEADIAGADIAIABIAaACIAWAAIANABIAFADIABAFIgBADIgDACQgDABgGAAIgjAAQgHAAgCgBIgCgDIgBgGIgdAAgEArkAAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEApsgArIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgEAmPAAZIAcAAIAAheIgsAAIghA9Ighg9IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgEAkHAAZIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgEAhSAAZIAcAAIAAheIgcAAgAfBAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAcGAZIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgAacAZIBdAAIAAgYIhBAAIAAhGIgcAAgAWbgrIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgAVMAZIAdAAIAAheIgdAAgA7lALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEAnrAABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsAAABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgAfdABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAiugALIASgkIATAkg");
	this.shape_31.setTransform(376.5,288);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AHUAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgCgHIAAgKIAAgbIAAgKIACgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHABIAGADIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGACIgHACQgHACgKAAgAHRgVQgEABgBACIgDAGIgBAIIAAAJIABAJQAAAEADABQACADACABIAJABIAkAAIAJgBQAEgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgAnYAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgDgHIgBgKIAAgbIABgKIADgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAsAAQAIAAALACIAHACIAEAEQAEADACAHQABAEAAAIIAAADIgcAAIgBgFIgEgEQgDgBgHgBIgfAAIgJABQgEABgCADQgCACgBADIAAAKIAAALIAAAKQABADACACQACADAEABIAJABIAeAAQAIAAADgCIADgEQABgCABgDIAAgDIgkAAIAAgSIBAAAIAAAZIAAAJIgCAIQgBACgDADIgEADIgHACIgIABIgVABgAsqAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQADABAHAAIAjAAQAFAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgagBIgJgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGAEgDIAEgEIAHgDIAJgBIA1gBQAIAAALACIAHACIAEAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAXAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgFACIgIACIgYABgALSAvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgALvAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAKQAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAF9AvIAAhCIgmBCIgWAAIgmhCIAABCIgbAAIAAhdIAsAAIAgA8IAhg8IAsAAIAABdgADUAvIgJgRIg6AAIgIARIghAAIA0hdIAlAAIA0BdgADBAKIgTgjIgSAjIAlAAgABAAvIAAhdIAdAAIAABdgAhQAvIAAhdIBWAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgzAXIAzAAIAHgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgHgBIgzAAgAkLAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAl1AvIAAhdIAcAAIAABFIBBAAIAAAYgApAAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgArEAvIAAhdIAcAAIAABdg");
	this.shape_32.setTransform(170.1,286.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0D1341").s().p("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gArIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgEAmPAAZIAcAAIAAheIgsAAIghA9Ighg9IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgEAkHAAZIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgEAhSAAZIAcAAIAAheIgcAAgAfBAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAcGAZIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgAacAZIBdAAIAAgYIhBAAIAAhGIgcAAgAWbgrIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgAVMAZIAdAAIAAheIgdAAgA42ALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgA0gAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEghDAAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEAnrAABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsAAABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgAfdABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA9zgBIASgkIATAkgEAiugALIASgkIATAkg");
	this.shape_33.setTransform(376.5,288);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AFSAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAFPgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBACgDQACgBAAgEIABgJIAAgJIgBgIQAAgDgCgDQgCgCgEgBQgDgCgGAAIgiAAQgFAAgEACgADIAwQgKAAgIgCQgJgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAJgCQAIgCAKAAIAiAAIAYACIAJACIAFAEIAEAEIADAHQABAFAAAMIgdAAIAAgEQAAgEgDgCQgEgCgGAAIggAAQgFAAgEACQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAmAAIAGgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgHIAdAAIAAAIQAAAHgBAFQgCAFgDAEQgEAEgHACQgKACgIAAgAlwAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgHAAgAoAAwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHABIAGADIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGACIgHACQgHACgKAAgAoDgVQgDABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAIABIAlAAIAIgBQAEgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAJPAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAIOAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAgYAvIAAhdIBlAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAiCAvIAAhdIAcAAIAABFIBBAAIAAAYgAkMAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAjwAZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAjwgJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAq2AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAqaAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_34.setTransform(170.3,286.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AIBAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgBgHIgBgKIAAgbIABgKIABgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAHACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgHABQgHACgKAAgAH+gWQgEACgBACIgDAGIgBAIIAAAJIABAIQAAAFADABQACADACABIAJABIAkAAIAJgBQAEgBABgDQACgBABgFIAAgIIAAgJIAAgIQgBgDgCgDQgCgCgDgCQgEgBgGAAIgiAAQgFAAgEABgAo1AwQgNAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IACAIIACAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA7QgBAMgBADIgDAHIgEAEIgFAFIgHACQgKACgIAAgArFAwQgKAAgIgCQgKgCgDgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQADgCAKgCQAIgCAKAAIAuAAQAKAAAIACIAGACIAGACIAFAFIADAGIACAHIABAKIAAAbIgBAKIgCAHIgDAGIgFAFIgGADIgGABQgIACgKAAgArJgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQACADADABIAIABIAlAAIAIgBQAEgBACgDQABgBABgFIABgIIAAgJIgBgIQgBgDgBgDQgDgCgDgCQgEgBgGAAIghAAQgFAAgFABgAL/AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAMcAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAK9AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAGqAvIAAhCIgmBCIgWAAIgmhCIAABCIgbAAIAAhdIAsAAIAgA7IAhg7IAsAAIAABdgAEBAvIgJgRIg6AAIgIARIghAAIA0hdIAlAAIA0BdgADuAKIgTgjIgSAjIAlAAgABtAvIAAhdIAdAAIAABdgAgjAvIAAhdIBWAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgGAXIAyAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgyAAgAjeAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAlIAvIAAhdIAcAAIAABFIBBAAIAAAYgAnSAvIAAhdIBTAAIAPABQAGABAFADQAEADACAFQACAFAAAGIgBALIgDAFIgEAEIgGACIAAAAIAIABIAGAFIADAHIAAAJQAAAHgCAGQgCAEgEAEQgEACgFABIgLABgAm1AZIA0AAQAFAAACgCQADgCAAgDQAAgFgDgCQgCgBgFgBIg0AAgAm1gJIAyAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgBgFgBIgyAAgAt8AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAtgAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_35.setTransform(583.2,285.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0D1341").s().p("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AGgCIAEgDIADgGIABgKQAAgHgCgEQgCgFgEgDQgEgDgHgCIgPgBIhTAAgASWAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgj+AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA62ALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgoJAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgqoAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAZdACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgEAoZAABIgIAAQgDgBgCgCQgCgCgBgEIAAgJIAAgJIAAgJIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAJIAAAJIgBAJQgBAEgCACQgBACgEABIgIAAgAVSABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsvAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAgMAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgASzABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAjcgALIASgkIATAkgEgj+gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgAZdggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_36.setTransform(376.5,288);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AIBAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAuAAQALAAAHACIAHABIAGADIAEAFIAEAGIACAHIABAKIAAAbIgBAKIgCAHIgEAGIgEAFIgGACIgHACQgHACgLAAgAH+gVQgEABgCACIgCAGIAAAIIAAAJIAAAJQAAAEACABQADADADABIAIABIAlAAIAIgBQADgBACgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgGAAIghAAQgGAAgEACgAo2AwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgCgEAAgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAIABIAcAAIAIgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgBAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgArGAwQgKAAgHgCQgJgCgEgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQAEgCAJgCQAHgCAKAAIAvAAQALAAAGACIAHABIAHADIAEAFIAEAGIACAHIAAAKIAAAbIAAAKIgCAHIgEAGIgEAFIgHACIgHACQgGACgLAAgArIgVQgEABgCACIgDAGIAAAIIAAAJIAAAJQABAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgEgCgFAAIgiAAQgGAAgDACgAL/AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAMcAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAK9AvIg2hDIAAAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAcAAIAABdgAGqAvIAAhCIgmBCIgVAAIgmhCIAABCIgcAAIAAhdIArAAIAhA8IAhg8IAsAAIAABdgAECAvIgJgRIg7AAIgIARIggAAIAyhdIAmAAIA0BdgADuAKIgTgjIgSAjIAlAAgABtAvIAAhdIAcAAIAABdgAgjAvIAAhdIBWAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAgHAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAgAjeAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAlIAvIAAhdIAdAAIAABFIBAAAIAAAYgAnSAvIAAhdIBTAAIAPABQAGACAEACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIAEAHIABAJQAAAHgDAGQgCAFgEADQgDACgGABIgMABgAm2AZIA0AAQAFgBADgBQACgCAAgEQAAgEgCgCQgDgBgFgBIg0AAgAm2gJIAzAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgCgFAAIgzAAgAt8AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAtgAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_37.setTransform(170.3,286.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0D1341").s().p("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IBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgnEAAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgA4HALIgJgBQgDgBgCgCQgCgCAAgEIgBgIIAAgKIABgIIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAIIAAAKIgBAIQAAAEgCACQgCACgDABIgJABgEgrPAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgAzyAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEggVAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEgtuAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAZdACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgEAoZAABIgIAAQgDgBgCgCQgCgCgBgEIAAgJIAAgJIAAgJIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAJIAAAJIgBAJQgBAEgCACQgBACgEABIgIAAgAVSABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsvAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgEAgMAABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgASzABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA9EgBIASgkIATAkgEAjcgALIASgkIATAkgEgnEgAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgAZdggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_38.setTransform(376.5,288);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag2AwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAcAAIAAA7QAAAMgCADIgDAHIgEAEIgFAFIgHACQgKACgHAAgApuAwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgDgBgMIAAg7IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIADgFIAAgIIAAg1IAdAAIAAA7QAAAMgCADIgDAHIgEAEIgFAFIgHACQgKACgHAAgAr+AwQgJAAgIgCQgJgCgEgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQAEgCAJgCQAIgCAJAAIAvAAQALAAAGACIAHACIAHACIAEAFIAEAGIABAHIABAKIAAAbIgBAKIgBAHIgEAGIgEAFIgHADIgHABQgGACgLAAgAsBgWQgDACgCACIgDAGIAAAIIAAAJIAAAIQABAFACABQACADADABIAJABIAkAAIAJgBQADgBABgDQADgBAAgFIABgIIAAgJIgBgIQAAgDgDgDQgBgCgEgCQgEgBgFAAIgiAAQgGAAgEABgANMAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBMAAIAAAWgAMMAvIg2hDIgBAAIAABDIgcAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAKOAvIgJgRIg6AAIgIARIghAAIAzhdIAlAAIA1BdgAJ6AKIgSgjIgSAjIAkAAgAH7AvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAhIA9AAIAAghIAdAAIAABdgAFQAvIAAhGIgpAAIAAgXIBuAAIAAAXIgpAAIAABGgAC0AvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgACDAvIAAgLIgBgHIgCgDIgEgDIgFgBIgtAAIAAAZIgdAAIAAhdIBXAAQAIAAAGACQAFACAEAEQADADABAGIABALIAAAGIgBAIIgCAGIgFAFQgDACgFABIAGACQADABACADQACACABADIABAKIAAAQgABKAAIAvAAQAGAAADgCQACgDAAgEIAAgEIgBgFIgCgDQgDgCgHAAIgtAAgAkWAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmAAvIAAhdIAdAAIAABFIBAAAIAAAYgAoKAvIAAhdIBTAAIAPABQAGABAEADQAFADACAFQACAFAAAGIgBALIgDAFIgFAEIgFACIAAAAIAIABIAFAFIAEAHIABAJQgBAHgCAGQgCAEgEAEQgDACgGABIgLABgAntAZIAzAAQAFAAADgCQACgCAAgDQAAgFgCgCQgDgBgFgBIgzAAgAntgJIAyAAQAFAAACgBQACgCAAgEQAAgEgCgCQgCgBgFgBIgyAAgAu0AvIAAhdIBXAAIASACIAHACIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAuYAXIA0AAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIg0AAg");
	this.shape_39.setTransform(583.2,285.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag2AwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAcAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgKACgGAAgApuAwQgMAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgEAAgKIAAg8IAdAAIAAA1IAAAIIADAFIAFADIAIABIAdAAIAHgBIAFgDIADgFIABgIIAAg1IAdAAIAAA8QgCAKgBAEIgDAHIgEAEIgGAFIgGACQgLACgGAAgAr+AwQgKAAgHgCQgKgCgDgCIgFgFIgDgGIgCgHIgBgKIAAgbIABgKIACgHIADgGIAFgFQADgCAKgCQAHgCAKAAIAvAAQAKAAAHACIAIABIAGADIAEAFIADAGIADAHIABAKIAAAbIgBAKIgDAHIgDAGIgEAFIgGACIgIACQgHACgKAAgAsAgVQgEABgCACIgCAGIgBAIIAAAJIABAJQAAAEACABQACADADABIAJABIAkAAIAJgBQADgBABgDQACgBABgEIABgJIAAgJIgBgIQgBgDgCgDQgCgCgDgBQgDgCgHAAIghAAQgFAAgEACgANMAvIAAhdIBnAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgAMMAvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAKOAvIgJgRIg7AAIgIARIggAAIAzhdIAmAAIAzBdgAJ7AKIgTgjIgSAjIAlAAgAH7AvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAiIA9AAIAAgiIAdAAIAABdgAFPAvIAAhGIgoAAIAAgXIBuAAIAAAXIgoAAIAABGgAC0AvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgACDAvIAAgLIgBgHIgCgDIgEgDIgFAAIguAAIAAAYIgcAAIAAhdIBXAAQAIAAAFACQAGABADAFQAEADABAGIABALIAAAGIAAAJIgDAFIgFAFQgDACgFABIAGACQADABACADQADACABADIABAKIAAAQgABJAAIAxAAQAFAAADgCQACgCAAgFIAAgEIgBgFIgCgDQgDgCgIAAIgtAAgAkWAvIAAhdIBnAAIAAAVIhLAAIAAAQIBHAAIAAASIhHAAIAAAQIBNAAIAAAWgAmAAvIAAhdIAdAAIAABFIBBAAIAAAYgAoKAvIAAhdIBTAAIAPABQAHACADACQAFADACAFQACAEAAAIIgBAKIgDAFIgFAEIgFACIAAAAIAIABIAFAFIADAHIABAJQAAAHgCAGQgCAFgEADQgEACgFABIgMABgAnuAZIA0AAQAFgBADgBQADgCgBgEQABgEgDgCQgDgBgFgBIg0AAgAnugJIA0AAQAEAAACgBQACgCAAgEQAAgEgCgCQgCgCgEAAIg0AAgAu0AvIAAhdIBXAAIASABIAHADIAFAEIAEAEIADAGQACAGAAAIIAAAcQAAAJgCAGIgDAGIgEAEIgFAEIgHACQgLACgHAAgAuXAXIAzAAIAIgBIAFgDQACgCABgDIABgIIAAgMIgBgIQgBgDgCgCIgFgDIgIgBIgzAAg");
	this.shape_40.setTransform(170.3,286.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0D1341").s().p("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AAIAAgYIhBAAIAAhGIgdAAgAYIAZIBcAAIALgBQAGgCADgCQAEgDACgFQADgFAAgHIgBgIIgDgIIgGgEIgIgCIAAgBIAGgCIAEgDIADgGIABgKQAAgHgCgEQgCgFgEgDQgEgDgHgCIgPgBIhTAAgAReAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgEgn8AAMIAAgOIA0AAQAFAAADACQACABAAAEQAAAEgCABQgDACgFAAgEgsHAALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgEgumAAKIAAgtIA0AAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgAYlACIAAgOIA0AAQAFAAACACQADACAAAEQAAAEgDABQgCABgFAAgAUaABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgAR7ABIAAguIAzAAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA24gBIASgkIATAkgEAppgALIASgkIATAkgA/EgNIAAgWIAtAAQAIAAADABIACADIABAFIAAAEQAAAFgDACQgCACgGAAgEgn8gAWIAAgOIAzAAQAFAAACABQACACAAAFQAAAEgCABQgCABgFAAgEAhdgAXIAAgWIAtAAQAHAAADACIACACIABAGIAAADQAAAFgCACQgDACgFAAgAYlggIAAgOIAzAAQAEAAACACQACABAAAFQAAAEgCABQgCABgEAAg");
	this.shape_41.setTransform(376.5,288);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhiAwQgNAAgFgCIgHgCIgFgFIgEgEIgDgHQgCgDAAgMIAAg7IAdAAIAAA1IABAIIACAFIAFADIAHABIAeAAIAHgBIAFgDIACgFIABgIIAAg1IAeAAIAAA7QgBAMgCADIgDAHIgEAEIgGAFIgGACQgKACgIAAgAoQAwQgKAAgIgCQgJgCgDgCIgFgFIgDgGIgCgHIgCgKIAAgbIACgKIACgHIADgGIAFgFQADgCAJgCQAIgCAKAAIAsAAQAHAAAMACIAHACIAEAEQAEADACAHQABAFAAAHIAAADIgcAAIgBgFIgEgEQgDgBgHgBIgfAAIgJABQgEABgCADQgCABgBAEIAAAKIAAALIAAAKQABADACACQACADAEABIAJABIAeAAQAIAAADgCIADgEQABgCABgDIAAgDIgkAAIAAgSIBAAAIAAAZIAAAJIgCAIQgBACgDACIgEAEIgHACIgIABIgVABgAtiAwIgRgBQgHgCgFgCQgEgDgCgEQgCgGAAgIIAAgGIAdAAIABAGIACAEQADABAGAAIAkAAQAFAAADgBIADgCIABgFIgBgFIgFgDIgNgBIgVAAIgagBIgJgBIgGgDIgEgEIgCgEQgCgEAAgKIABgMQABgGADgDIAFgEIAHgDIAJgBIA0gBQAJAAALACIAHACIAEADQADAEACAFIABAMIAAACIgdAAQAAgFgCgCIgFgCIgnAAQgFAAgDABQgDACAAAEIABAFIAEADQAGABAXAAIAcABIAKABIAHACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgEAEIgGADIgIABIgYABgAMgAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgALfAvIg2hDIgBAAIAABDIgcAAIAAhdIAsAAIA2BDIABAAIAAhDIAdAAIAABdgAJhAvIgJgRIg6AAIgJARIggAAIAzhdIAlAAIA0BdgAJNAKIgTgjIgSAjIAlAAgAHOAvIAAgkIg9AAIAAAkIgdAAIAAhdIAdAAIAAAhIA9AAIAAghIAdAAIAABdgAEiAvIAAhGIgoAAIAAgXIBuAAIAAAXIgpAAIAABGgACHAvIAAhdIBmAAIAAAVIhKAAIAAAQIBHAAIAAASIhHAAIAAAQIBMAAIAAAWgABWAvIAAgLIgBgHIgCgDIgDgDIgGgBIguAAIAAAZIgcAAIAAhdIBXAAQAIAAAFACQAGACAEAEQACADACAGIABALIAAAGIAAAIIgDAGIgFAFQgDACgFABIAGACQADABACADQACACABADIACAKIAAAQgAAcAAIAwAAQAGAAACgCQADgDAAgEIAAgEIgBgFIgCgDQgDgCgIAAIgtAAgAlDAvIAAhdIBmAAIAAAVIhJAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmtAvIAAhdIAcAAIAABFIBBAAIAAAYgAp3AvIg2hDIgBAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAeAAIAABdgAr8AvIAAhdIAcAAIAABdg");
	this.shape_42.setTransform(583.1,285.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhjAwQgMAAgFgCIgGgCIgGgFIgEgEIgDgHQgBgEgBgKIAAg8IAcAAIAAA1IABAIIADAFIAFADIAHABIAdAAIAIgBIAFgDIACgFIABgIIAAg1IAdAAIAAA8QAAAKgCAEIgDAHIgEAEIgFAFIgHACQgKACgHAAgAoQAwQgKAAgHgCQgKgCgEgCIgEgFIgEgGIgCgHIgBgKIAAgbIABgKIACgHIAEgGIAEgFQAEgCAKgCQAHgCAKAAIAsAAQAHAAAMACIAHACIAFAEQADADACAHQABAEAAAIIAAADIgcAAIgCgFIgDgEQgCgBgIgBIggAAIgJABQgDABgCADQgCACgBADIgBAKIAAALIABAKQABADACACQACADADABIAJABIAgAAQAGAAAEgCIADgEQACgCAAgDIAAgDIgkAAIAAgSIBBAAIAAAZIgBAJIgDAIQgBACgCADIgEADIgHACIgIABIgVABgAtiAwIgRgBQgHgCgFgCQgEgDgCgEQgCgFAAgIIAAgHIAdAAIABAGIACAEQACABAIAAIAjAAQAGAAACgBIADgCIABgFIgBgFIgFgDIgMgBIgXAAIgZgBIgJgBIgGgDIgEgEIgDgEQgBgFAAgJIABgMQABgGAEgDIAEgEIAHgDIAJgBIA1gBQAIAAALACIAHACIAEAEQADADACAGIABALIAAACIgdAAQAAgFgCgCIgEgCIgoAAQgFAAgDABQgDACAAAEIABAFIAFADQAEABAYAAIAcABIAJABIAIACIAFAEIADAEIACAHIABAJIgCAQIgDAFIgFAEIgFACIgIACIgYABgAMfAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBMAAIAAAWgALfAvIg2hDIgBAAIAABDIgcAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAJhAvIgJgRIg6AAIgIARIghAAIAzhdIAmAAIA0BdgAJOAKIgTgjIgSAjIAlAAgAHOAvIAAgkIg9AAIAAAkIgcAAIAAhdIAcAAIAAAiIA9AAIAAgiIAdAAIAABdgAEjAvIAAhGIgpAAIAAgXIBuAAIAAAXIgoAAIAABGgACHAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgABWAvIAAgLIgBgHIgCgDIgEgDIgFAAIgtAAIAAAYIgdAAIAAhdIBXAAQAIAAAGACQAFABAEAFQADADABAGIABALIAAAGIgBAJIgCAFIgFAFQgDACgFABIAGACQADABACADQACACABADIABAKIAAAQgAAdAAIAwAAQAFAAADgCQACgCAAgFIAAgEIgBgFIgCgDQgDgCgHAAIgtAAgAlDAvIAAhdIBnAAIAAAVIhKAAIAAAQIBGAAIAAASIhGAAIAAAQIBLAAIAAAWgAmtAvIAAhdIAdAAIAABFIBAAAIAAAYgAp4AvIg2hDIAAAAIAABDIgdAAIAAhdIAtAAIA2BDIAAAAIAAhDIAdAAIAABdgAr9AvIAAhdIAdAAIAABdg");
	this.shape_43.setTransform(170.1,286.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0D1341").s().p("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");
	this.shape_44.setTransform(376.5,288);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0D1341").s().p("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gEApsgArIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgEAmPAAZIAcAAIAAheIgsAAIghA9Ighg9IgsAAIAABeIAcAAIAAhDIAmBDIAWAAIAmhDgEAkHAAZIg0heIgmAAIgzBeIAhAAIAIgRIA6AAIAJARIAhAAgEAhSAAZIAcAAIAAheIgcAAgAfBAZIBXAAQAHAAALgDIAHgCIAFgDIAEgFIADgFQACgHAAgHIAAgdQAAgJgCgGIgDgFIgEgFIgFgDIgHgDIgSgCIhXAAgAcGAZIBoAAIAAgXIhMAAIAAgOIBHAAIAAgUIhHAAIAAgPIBKAAIAAgWIhmAAgAacAZIBdAAIAAgYIhBAAIAAhGIgcAAgAWbgrIA2BEIAtAAIAAheIgdAAIAABFIAAAAIg2hFIgtAAIAABeIAdAAIAAhEgAVMAZIAdAAIAAheIgdAAgA42ALIgIgBQgDgBgCgCQgCgCgBgEIAAgIIAAgKIAAgIIADgGQACgCADgBQAEgCAGABIAhAAQAGgBAEACQADABACACQACADABADIABAIIAAAKIgBAIQgBAEgCACQgBACgEABIgIABgA0gAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEghDAAKIAAgtIAzAAIAIAAIAFADQACACABAEIABAIIAAAMIgBAHQgBAEgCACIgFACIgIABgEAnrAABIgJAAQgDgBgCgCQgCgCAAgEIgBgJIAAgJIABgJIACgGQACgCAEgBQAEgCAFABIAiAAQAGgBADACQAEABACACQACADAAADIABAJIAAAJIgBAJQAAAEgCACQgCACgDABIgJAAgEAsAAABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgAfdABIAAguIA0AAIAIABIAFACQACACABAEIABAIIAAAMIgBAJQgBADgCACIgFACIgIABgA9zgBIASgkIATAkgEAiugALIASgkIATAkg");
	this.shape_45.setTransform(376.5,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},10).to({state:[{t:this.shape_27}]},9).to({state:[{t:this.shape_28}]},9).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},8).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_32}]},10).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},9).to({state:[{t:this.shape_38},{t:this.shape_35},{t:this.shape_37}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},9).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},9).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},9).to({state:[{t:this.shape_45},{t:this.shape_32},{t:this.shape_29}]},10).to({state:[{t:this.shape_36},{t:this.shape_34},{t:this.shape_35}]},9).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_35}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},9).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},7).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},7).to({state:[{t:this.shape_45},{t:this.shape_32},{t:this.shape_29}]},10).to({state:[{t:this.shape_36},{t:this.shape_34},{t:this.shape_35}]},9).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_35}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},9).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},7).wait(7));

	// buttons
	this.btn_backJstR = new lib.BACK_JawStyles_GRMtc();
	this.btn_backJstR.parent = this;
	this.btn_backJstR.setTransform(700.4,273.9,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_backJstR, 0, 1, 2, false, new lib.BACK_JawStyles_GRMtc(), 3);

	this.btn_Rmt3 = new lib._3014_GRMtc();
	this.btn_Rmt3.parent = this;
	this.btn_Rmt3.setTransform(476.5,147,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Rmt3, 0, 1, 2, false, new lib._3014_GRMtc(), 3);

	this.btn_Rmt2 = new lib._1513_GRMtc();
	this.btn_Rmt2.parent = this;
	this.btn_Rmt2.setTransform(362.1,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Rmt2, 0, 1, 2, false, new lib._1513_GRMtc(), 3);

	this.btn_Rmt1 = new lib._0150_GRMtc();
	this.btn_Rmt1.parent = this;
	this.btn_Rmt1.setTransform(251.9,147.8,1,1,0,0,0,38.2,0);
	new cjs.ButtonHelper(this.btn_Rmt1, 0, 1, 2, false, new lib._0150_GRMtc(), 3);

	this.btn_R_SCB_SDB = new lib.But_S_SCBSDB_GRMtc();
	this.btn_R_SCB_SDB.parent = this;
	this.btn_R_SCB_SDB.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SCB_SDB, 0, 1, 2, false, new lib.But_S_SCBSDB_GRMtc(), 3);

	this.btn_R_SDB_SDB = new lib.But_S_SDBSDB_GRMtc();
	this.btn_R_SDB_SDB.parent = this;
	this.btn_R_SDB_SDB.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SDB_SDB, 0, 1, 2, false, new lib.But_S_SDBSDB_GRMtc(), 3);

	this.btn_R_SUB_SUB = new lib.But_S_SUBSUB_GRMtc();
	this.btn_R_SUB_SUB.parent = this;
	this.btn_R_SUB_SUB.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SUB_SUB, 0, 1, 2, false, new lib.But_S_SUBSUB_GRMtc(), 3);

	this.btn_R_DUB_DUB = new lib.But_S_DUBDUB_GRMtc();
	this.btn_R_DUB_DUB.parent = this;
	this.btn_R_DUB_DUB.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DUB_DUB, 0, 1, 2, false, new lib.But_S_DUBDUB_GRMtc(), 3);

	this.btn_R_DDB_DDB = new lib.But_S_DDBDDB_GRMtc();
	this.btn_R_DDB_DDB.parent = this;
	this.btn_R_DDB_DDB.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DDB_DDB, 0, 1, 2, false, new lib.But_S_DDBDDB_GRMtc(), 3);

	this.btn_R_DCB_DDB = new lib.BUT_S_DCBDDB_GRMtc();
	this.btn_R_DCB_DDB.parent = this;
	this.btn_R_DCB_DDB.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DCB_DDB, 0, 1, 2, false, new lib.BUT_S_DCBDDB_GRMtc(), 3);

	this.btn_R_SCS_SDS = new lib.But_S_SCSSDS_GRMtc();
	this.btn_R_SCS_SDS.parent = this;
	this.btn_R_SCS_SDS.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SCS_SDS, 0, 1, 2, false, new lib.But_S_SCSSDS_GRMtc(), 3);

	this.btn_R_SDS_SDS = new lib.But_S_SDSSDS_GRMtc();
	this.btn_R_SDS_SDS.parent = this;
	this.btn_R_SDS_SDS.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SDS_SDS, 0, 1, 2, false, new lib.But_S_SDSSDS_GRMtc(), 3);

	this.btn_R_SUS_SUS = new lib.But_S_SUS_SUS_GRM();
	this.btn_R_SUS_SUS.parent = this;
	this.btn_R_SUS_SUS.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SUS_SUS, 0, 1, 2, false, new lib.But_S_SUS_SUS_GRM(), 3);

	this.btn_R_DUS_DUS = new lib.But_S_DUS_DUS_GRM();
	this.btn_R_DUS_DUS.parent = this;
	this.btn_R_DUS_DUS.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DUS_DUS, 0, 1, 2, false, new lib.But_S_DUS_DUS_GRM(), 3);

	this.btn_R_DDS_DDS = new lib.But_S_DDSDDS_GRMtc();
	this.btn_R_DDS_DDS.parent = this;
	this.btn_R_DDS_DDS.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DDS_DDS, 0, 1, 2, false, new lib.But_S_DDSDDS_GRMtc(), 3);

	this.btn_R_DCS_DDS = new lib.BUT_S_DCSDDS_GRMtc();
	this.btn_R_DCS_DDS.parent = this;
	this.btn_R_DCS_DDS.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DCS_DDS, 0, 1, 2, false, new lib.BUT_S_DCSDDS_GRMtc(), 3);

	this.btn_R_SCR_SDR = new lib.But_S_SCRSDR_GRMtc();
	this.btn_R_SCR_SDR.parent = this;
	this.btn_R_SCR_SDR.setTransform(119,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SCR_SDR, 0, 1, 2, false, new lib.But_S_SCRSDR_GRMtc(), 3);

	this.btn_R_SDR_SDR = new lib.But_S_SDRSDR_GRMtc();
	this.btn_R_SDR_SDR.parent = this;
	this.btn_R_SDR_SDR.setTransform(213.1,162.4,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SDR_SDR, 0, 1, 2, false, new lib.But_S_SDRSDR_GRMtc(), 3);

	this.btn_R_SUR_SUR = new lib.But_S_SUR_SUR_GRM();
	this.btn_R_SUR_SUR.parent = this;
	this.btn_R_SUR_SUR.setTransform(699.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_SUR_SUR, 0, 1, 2, false, new lib.But_S_SUR_SUR_GRM(), 3);

	this.btn_R_DUR_DUR = new lib.But_S_DUR_DUR_GRM();
	this.btn_R_DUR_DUR.parent = this;
	this.btn_R_DUR_DUR.setTransform(586.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DUR_DUR, 0, 1, 2, false, new lib.But_S_DUR_DUR_GRM(), 3);

	this.btn_R_DDR_DDR = new lib.But_S_DDRDDR_GRMtc();
	this.btn_R_DDR_DDR.parent = this;
	this.btn_R_DDR_DDR.setTransform(457.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DDR_DDR, 0, 1, 2, false, new lib.But_S_DDRDDR_GRMtc(), 3);

	this.btn_R_DCR_DDR = new lib.BUT_S_DCRDDR_GRMtc();
	this.btn_R_DCR_DDR.parent = this;
	this.btn_R_DCR_DDR.setTransform(326.7,162.5,1,1,0,0,0,67.5,0);
	new cjs.ButtonHelper(this.btn_R_DCR_DDR, 0, 1, 2, false, new lib.BUT_S_DCRDDR_GRMtc(), 3);

	this.btn_1bBACK = new lib.BACK_TIPCOMBOS_GRMtc();
	this.btn_1bBACK.parent = this;
	this.btn_1bBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_1bBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMtc(), 3);

	this.btn_2sBACK = new lib.BACK_TIPCOMBOS_GRMsil();
	this.btn_2sBACK.parent = this;
	this.btn_2sBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_2sBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMsil(), 3);

	this.btn_3rBACK = new lib.BACK_TIPCOMBOS_GRMred();
	this.btn_3rBACK.parent = this;
	this.btn_3rBACK.setTransform(378.7,275.5,1,1,0,0,0,47.5,0);
	new cjs.ButtonHelper(this.btn_3rBACK, 0, 1, 2, false, new lib.BACK_TIPCOMBOS_GRMred(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Rmt1},{t:this.btn_Rmt2},{t:this.btn_Rmt3},{t:this.btn_backJstR}]}).to({state:[{t:this.btn_R_DCB_DDB},{t:this.btn_R_DDB_DDB},{t:this.btn_R_DUB_DUB},{t:this.btn_R_SUB_SUB},{t:this.btn_R_SDB_SDB},{t:this.btn_R_SCB_SDB}]},10).to({state:[{t:this.btn_R_DCS_DDS},{t:this.btn_R_DDS_DDS},{t:this.btn_R_DUS_DUS},{t:this.btn_R_SUS_SUS},{t:this.btn_R_SDS_SDS},{t:this.btn_R_SCS_SDS}]},9).to({state:[{t:this.btn_R_DCR_DDR},{t:this.btn_R_DDR_DDR},{t:this.btn_R_DUR_DUR},{t:this.btn_R_SUR_SUR},{t:this.btn_R_SDR_SDR},{t:this.btn_R_SCR_SDR}]},9).to({state:[{t:this.btn_1bBACK}]},8).to({state:[{t:this.btn_2sBACK}]},55).to({state:[{t:this.btn_3rBACK}]},51).wait(51));

	// GRAPHICS
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AD2BIIAAggIAOAAQAIAAADgDQAEgDAAgIIAAgzQAAgIgEgDQgDgDgIAAIgOAAIAAggIAZAAQAKAAAHADQAIACAFAFQAGAFACAIQADAIAAALIAAA7QAAALgDAJQgCAIgGAFQgFAEgIADQgHACgKAAgAkNBIQgLAAgHgCQgIgDgFgEQgFgFgDgIQgDgJAAgLIAAg7QAAgLADgIQADgIAFgFQAFgFAIgCQAHgDALAAIAYAAIAAAgIgOAAQgIAAgDADQgEADAAAIIAAAzQAAAIAEADQADADAIAAIAOAAIAAAggAC6BGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3gAgvBGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3g");
	this.shape_46.setTransform(361,110.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("AdJBIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAaABIQgPAAgKgCQgKgCgHgEQgGgEgEgHQgDgIAAgLIAAgKIAsAAQgBAGACADQABADACACQAEACAKAAIA1AAQAJAAADgBIAFgEQABgCAAgEQAAgFgBgDQgDgCgFgBQgGgCgMAAIghAAQgdgBgKgBIgNgDQgFgBgEgDQgDgCgCgDQgDgCgBgEQgCgIgBgOQABgLABgGQABgJAGgGIAHgFIAKgEIANgDIBOgBQANAAAQADIAKAEIAHAFQAFAFACAIQABAGABALIAAAEIgsAAQAAgIgCgDQgCgCgFAAIgLgBIgwAAQgHAAgFACQgFADABAGQgBAFACACQACACAFACQAHABAkAAIApABIAPACQAGACAFACQAEACADAEQADADACAEIADAKIABAOQgCARgCAGQgBAEgCADIgHAGIgKAEIgLACQgNACgWAAgANeBIQgOAAgMgCQgOgEgFgEQgEgDgDgEQgDgEgCgFIgDgLIgBgOIAAgpIABgOIADgLQACgFADgEQADgEAEgDQAFgDAOgEQAMgDAOAAIA0AAQAPAAAVADIAMAEQAFACADADQAEADADAEQACAEABAFQACAJAAAQIgrAAIAAgEQAAgHgFgDQgFgCgKAAIgvAAQgJAAgEABQgGACgDAEQgCADgCAGIgBAMIAAAOIABANQABAFADADQADAEAEABQAFACAIAAIA5gBIAIgCQADgCACgEIABgLIArAAIAAAOQAAAJgCAHQgDAIgFAGQgGAGgJADQgQADgLAAgA58BIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIAzAAQAPAAAVADIANAEQAFACADADQAEADACAEQADAEABAFQACAJAAAQIgsAAIAAgEQAAgHgFgDQgEgCgKAAIgvAAQgJAAgFABQgGACgDAEQgCADgBAGIgBAMIAAAOIABANQAAAFADADQADAEAFABQAEACAIAAIA6gBIAIgCQADgCABgEIABgLIArAAIAAAOQAAAJgBAHQgDAIgGAGQgFAGgKADQgPADgMAAgAWWBGIAAiLICaAAIAAAhIhuAAIAAAWIBoAAIAAAcIhoAAIAAAXIBwAAIAAAhgAU3BGIhQhlIgBAAIAABlIgrAAIAAiLIBCAAIBRBlIABAAIAAhlIArAAIAACLgARuBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IAUAAIA2g0IA7AAIhMBFIBVBGgALaBGIAAiLIArAAIAACLgAKPBGIAAg1IhaAAIAAA1IgsAAIAAiLIAsAAIAAAyIBaAAIAAgyIArAAIAACLgAGPBGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogABfBGIAAiLIArAAIAABnIBgAAIAAAkgAAgBGIgOgZIhWAAIgNAZIgvAAIBLiLIA3AAIBOCLgAACAPIgbgzIgbAzIA2AAgAi9BGIAAiLIArAAIAACLgAkIBGIgBgaQgBgEgCgCQgCgCgDgBIgJgBIhEAAIAAAkIgrAAIAAiLICDAAQAMAAAIADQAIADAFAFQAEAGACAHQACAIABAKIAAAJIgCAMIgDAJQgDAEgFADQgFADgGACIAJADQAEACADADQADAEACAFQACAGAAAIIAAAYgAleAAIBHAAQAJAAAEgEQADgDABgIIAAgEIgBgIQgCgDgDgBQgDgDgLAAIhEAAgAo+BGIAAiLICZAAIAAAhIhuAAIAAAWIBpAAIAAAcIhpAAIAAAXIBxAAIAAAhgAq5BGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogAsqBGIgNgZIhXAAIgNAZIgwAAIBMiLIA4AAIBNCLgAtHAPIgcgzIgbAzIA3AAgAwEBGIAAhjIAAAAIg4BjIghAAIg4hjIAABjIgqAAIAAiLIBBAAIAxBZIAxhZIBCAAIAACLgA1sBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IATAAIA3g0IA7AAIhNBFIBWBGgA8ABGIAAiLIArAAIAACLgA/DBGIAAiLIB2AAQAKAAAPAEQAFABADADIAIAGQAFAGADAJQABAIAAALIAAAMQAAAIgBAHQgCAIgFAGQgFAHgHAEQgLAEgIAAIhWAAIAAAjgA+YAAIBEAAQAGAAAEgDQADgEAAgHIAAgFQAAgIgDgDQgFgEgKAAIg/AAg");
	this.shape_47.setTransform(369.2,80.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_48.setTransform(364.8,96.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_49.setTransform(364.8,124.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_50.setTransform(365.2,165.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_51.setTransform(420.7,144.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_52.setTransform(307.1,144.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#555E6E").s().p("A51FSIAAqjMAzmAAAIAAABIAAACQAAAKAFAMIAAKKgADPh+IAZAAQAJAAAIgCQAIgCAFgFQAFgFADgIQADgIAAgMIAAg7QAAgMgDgIQgDgIgFgFQgFgFgIgCQgIgCgJAAIgZAAIAAAfIANAAQAJAAADADQAEAEAAAIIAAAzQAAAJgEADQgDADgJAAIgNAAgAlGkLQgIACgFAFQgGAFgDAIQgCAIAAAMIAAA7QAAAMACAIQADAIAGAFQAFAFAIACQAHACALAAIAYAAIAAgfIgOAAQgIAAgEgDQgDgDAAgJIAAgzQAAgIADgEQAEgDAIAAIAOAAIAAgfIgYAAQgLAAgHACgACHjGQAFABADADQACABABAEIABAJIAAA1IAlAAIAAg4QAAgLgCgIQgDgIgFgGQgGgGgIgDQgJgDgNAAIgLAAQgJAAgEACQgGABgFACQgEADgCAEIgGALIgGgKQgDgEgFgDQgFgDgFgBQgGgCgGAAIgOAAQgHAAgGACQgFABgFADQgEACgDAEQgDAEAAAFIAAAAIAAgTIgjAAIAABjIAkAAIAAg0QAAgGABgEQACgEADgCQACgCAFgBIALgBIANABQAFABAEACQACABABADIACAIIAAA4IAlAAIAAg3IABgIQABgDADgCQAEgCAEgBIAMgBIANABgAhijGQAFABADADQACABABAEIABAJIAAA1IAlAAIAAg4QAAgLgCgIQgDgIgFgGQgGgGgIgDQgJgDgNAAIgLAAQgJAAgEACQgGABgFACQgEADgCAEIgGALIgGgKQgDgEgFgDQgEgDgGgBQgGgCgGAAIgOAAQgHAAgGACQgFABgFADQgEACgDAEQgDAEAAAFIAAAAIAAgTIgkAAIAABjIAlAAIAAg0QAAgGABgEQACgEADgCQACgCAFgBIALgBIANABQAFABADACQADABABADIACAIIAAA4IAlAAIAAg3IABgIQABgDADgCQAEgCAEgBIAMgBIANABg");
	this.shape_53.setTransform(364.9,130.6);

	this.btn_bkRmt = new lib.BACK_MATthickness_GRMtc();
	this.btn_bkRmt.parent = this;
	this.btn_bkRmt.setTransform(701.4,276.5,0.85,0.85,0,0,0,46.9,0);
	new cjs.ButtonHelper(this.btn_bkRmt, 0, 1, 2, false, new lib.BACK_MATthickness_GRMtc(), 3);

	this.instance_2 = new lib.R_A_SCB_B_SDB_GRMtc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_3 = new lib.R_A_SDB_B_SDB_GRMtc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_4 = new lib.R_A_DCB_B_DDB_GRMtc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_5 = new lib.R_A_DDB_B_DDB_GRMtc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_6 = new lib.R_A_DUB_B_DUB_GRMtc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_7 = new lib.R_A_SUB_B_SUB_GRMtc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_8 = new lib.R_A_SCS_B_SDS_GRMtc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_9 = new lib.R_A_SDS_B_SDS_GRMtc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_10 = new lib.R_A_DCS_B_DDS_GRMtc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_11 = new lib.R_A_DDS_B_DDS_GRMtc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_12 = new lib.R_A_SCR_B_SDR_GRMtc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_13 = new lib.R_A_SDR_B_SDR_GRMtc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_14 = new lib.R_A_DCR_B_DDR_GRMtc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.instance_15 = new lib.R_A_DDR_B_DDR_GRMtc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(375.5,151,1,1,0,0,0,364.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.btn_bkRmt}]},10).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},7).wait(7));

	// txt_playapplication:
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCCCCC").s().p("AD2BIIAAggIAOAAQAIAAADgDQAEgDAAgIIAAgzQAAgIgEgDQgDgDgIAAIgOAAIAAggIAZAAQAKAAAHADQAIACAFAFQAGAFACAIQADAIAAALIAAA7QAAALgDAJQgCAIgGAFQgFAEgIADQgHACgKAAgAkNBIQgLAAgHgCQgIgDgFgEQgFgFgDgIQgDgJAAgLIAAg7QAAgLADgIQADgIAFgFQAFgFAIgCQAHgDALAAIAYAAIAAAgIgOAAQgIAAgDADQgEADAAAIIAAAzQAAAIAEADQADADAIAAIAOAAIAAAggAC6BGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3gAgvBGIAAg1IAAgIQgCgEgCgCQgDgCgFgBIgNAAIgLAAQgFABgDACQgDABgCAEIgBAIIAAA2IglAAIAAg4IgBgHQgBgDgDgCQgDgCgFAAIgOAAIgKAAQgFABgDACQgDACgBAEQgCADAAAGIAAA0IglAAIAAhhIAkAAIAAATIAAAAQABgFADgEQACgEAEgDQAFgDAFgBQAGgBAHAAIAOAAQAHAAAFABQAGACAEADQAFADAEAEIAGAKIAFgLQADgFAEgCQAEgDAGgBQAFgBAIAAIALAAQANAAAJADQAJADAFAGQAGAFACAJQADAHAAALIAAA3g");
	this.shape_54.setTransform(361,110.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCCCCC").s().p("AdJBIQgPAAgKgCQgLgCgFgEQgIgEgCgHQgEgIAAgLIAAgKIArAAQABAGABADQABADADACQACACALAAIA1AAQAIAAAEgBIAFgEQABgCAAgEQAAgFgBgDQgCgCgGgBQgGgCgMAAIghAAQgdgBgKgBIgMgDQgGgBgDgDQgEgCgDgDQgCgCgBgEQgDgIAAgOQAAgLACgGQACgJAEgGIAIgFIAJgEIAPgDIBNgBQAMAAASADIAKAEIAGAFQAFAFACAIQABAGAAALIAAAEIgqAAQgBgIgDgDQgCgCgEAAIgMgBIgvAAQgIAAgEACQgEADgBAGQABAFABACQACACAFACQAHABAkAAIApABIAPACQAGACAEACQAFACADAEQADADACAEIADAKIAAAOQAAARgCAGQgCAEgDADIgGAGIgKAEIgMACQgMACgXAAgAaABIQgPAAgKgCQgKgCgHgEQgGgEgEgHQgDgIAAgLIAAgKIAsAAQgBAGACADQABADACACQAEACAKAAIA1AAQAJAAADgBIAFgEQABgCAAgEQAAgFgBgDQgDgCgFgBQgGgCgMAAIghAAQgdgBgKgBIgNgDQgFgBgEgDQgDgCgCgDQgDgCgBgEQgCgIgBgOQABgLABgGQABgJAGgGIAHgFIAKgEIANgDIBOgBQANAAAQADIAKAEIAHAFQAFAFACAIQABAGABALIAAAEIgsAAQAAgIgCgDQgCgCgFAAIgLgBIgwAAQgHAAgFACQgFADABAGQgBAFACACQACACAFACQAHABAkAAIApABIAPACQAGACAFACQAEACADAEQADADACAEIADAKIABAOQgCARgCAGQgBAEgCADIgHAGIgKAEIgLACQgNACgWAAgANeBIQgOAAgMgCQgOgEgFgEQgEgDgDgEQgDgEgCgFIgDgLIgBgOIAAgpIABgOIADgLQACgFADgEQADgEAEgDQAFgDAOgEQAMgDAOAAIA0AAQAPAAAVADIAMAEQAFACADADQAEADADAEQACAEABAFQACAJAAAQIgrAAIAAgEQAAgHgFgDQgFgCgKAAIgvAAQgJAAgEABQgGACgDAEQgCADgCAGIgBAMIAAAOIABANQABAFADADQADAEAEABQAFACAIAAIA5gBIAIgCQADgCACgEIABgLIArAAIAAAOQAAAJgCAHQgDAIgFAGQgGAGgJADQgQADgLAAgA58BIQgPAAgLgCQgOgEgFgEQgEgDgDgEQgEgEgCgFIgCgLIgBgOIAAgpIABgOIACgLQACgFAEgEQADgEAEgDQAFgDAOgEQALgDAPAAIAzAAQAPAAAVADIANAEQAFACADADQAEADACAEQADAEABAFQACAJAAAQIgsAAIAAgEQAAgHgFgDQgEgCgKAAIgvAAQgJAAgFABQgGACgDAEQgCADgBAGIgBAMIAAAOIABANQAAAFADADQADAEAFABQAEACAIAAIA6gBIAIgCQADgCABgEIABgLIArAAIAAAOQAAAJgBAHQgDAIgGAGQgFAGgKADQgPADgMAAgAWWBGIAAiLICaAAIAAAhIhuAAIAAAWIBoAAIAAAcIhoAAIAAAXIBwAAIAAAhgAU3BGIhQhlIgBAAIAABlIgrAAIAAiLIBCAAIBRBlIABAAIAAhlIArAAIAACLgARuBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IAUAAIA2g0IA7AAIhMBFIBVBGgALaBGIAAiLIArAAIAACLgAKPBGIAAg1IhaAAIAAA1IgsAAIAAiLIAsAAIAAAyIBaAAIAAgyIArAAIAACLgAGPBGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogABfBGIAAiLIArAAIAABnIBgAAIAAAkgAAgBGIgOgZIhWAAIgNAZIgvAAIBLiLIA3AAIBOCLgAACAPIgbgzIgbAzIA2AAgAi9BGIAAiLIArAAIAACLgAkIBGIgBgaQgBgEgCgCQgCgCgDgBIgJgBIhEAAIAAAkIgrAAIAAiLICDAAQAMAAAIADQAIADAFAFQAEAGACAHQACAIABAKIAAAJIgCAMIgDAJQgDAEgFADQgFADgGACIAJADQAEACADADQADAEACAFQACAGAAAIIAAAYgAleAAIBHAAQAJAAAEgEQADgDABgIIAAgEIgBgIQgCgDgDgBQgDgDgLAAIhEAAgAo+BGIAAiLICZAAIAAAhIhuAAIAAAWIBpAAIAAAcIhpAAIAAAXIBxAAIAAAhgAq5BGIAAhoIg8AAIAAgjICjAAIAAAjIg8AAIAABogAsqBGIgNgZIhXAAIgNAZIgwAAIBMiLIA4AAIBNCLgAtHAPIgcgzIgbAzIA3AAgAwEBGIAAhjIAAAAIg4BjIghAAIg4hjIAABjIgqAAIAAiLIBBAAIAxBZIAxhZIBCAAIAACLgA1sBGIg+g2IgTAAIAAA2IgrAAIAAiLIArAAIAAA0IATAAIA3g0IA7AAIhNBFIBWBGgA8ABGIAAiLIArAAIAACLgA/DBGIAAiLIB2AAQAKAAAPAEQAFABADADIAIAGQAFAGADAJQABAIAAALIAAAMQAAAIgBAHQgCAIgFAGQgFAHgHAEQgLAEgIAAIhWAAIAAAjgA+YAAIBEAAQAGAAAEgDQADgEAAgHIAAgFQAAgIgDgDQgFgEgKAAIg/AAg");
	this.shape_55.setTransform(369.2,80.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_56.setTransform(364.8,96.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_57.setTransform(364.8,124.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("A54AAMAzxAAA");
	this.shape_58.setTransform(365.2,165.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_59.setTransform(420.7,144.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAjNIAAGb");
	this.shape_60.setTransform(307.1,144.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#555E6E").s().p("A51FSIAAqjMAzmAAAIAAABIAAACQAAAKAFAMIAAKKgADPh+IAZAAQAJAAAIgCQAIgCAFgFQAFgFADgIQADgIAAgMIAAg7QAAgMgDgIQgDgIgFgFQgFgFgIgCQgIgCgJAAIgZAAIAAAfIANAAQAJAAADADQAEAEAAAIIAAAzQAAAJgEADQgDADgJAAIgNAAgAlGkLQgIACgFAFQgGAFgDAIQgCAIAAAMIAAA7QAAAMACAIQADAIAGAFQAFAFAIACQAHACALAAIAYAAIAAgfIgOAAQgIAAgEgDQgDgDAAgJIAAgzQAAgIADgEQAEgDAIAAIAOAAIAAgfIgYAAQgLAAgHACgACHjGQAFABADADQACABABAEIABAJIAAA1IAlAAIAAg4QAAgLgCgIQgDgIgFgGQgGgGgIgDQgJgDgNAAIgLAAQgJAAgEACQgGABgFACQgEADgCAEIgGALIgGgKQgDgEgFgDQgFgDgFgBQgGgCgGAAIgOAAQgHAAgGACQgFABgFADQgEACgDAEQgDAEAAAFIAAAAIAAgTIgjAAIAABjIAkAAIAAg0QAAgGABgEQACgEADgCQACgCAFgBIALgBIANABQAFABAEACQACABABADIACAIIAAA4IAlAAIAAg3IABgIQABgDADgCQAEgCAEgBIAMgBIANABgAhijGQAFABADADQACABABAEIABAJIAAA1IAlAAIAAg4QAAgLgCgIQgDgIgFgGQgGgGgIgDQgJgDgNAAIgLAAQgJAAgEACQgGABgFACQgEADgCAEIgGALIgGgKQgDgEgFgDQgEgDgGgBQgGgCgGAAIgOAAQgHAAgGACQgFABgFADQgEACgDAEQgDAEAAAFIAAAAIAAgTIgkAAIAABjIAlAAIAAg0QAAgGABgEQACgEADgCQACgCAFgBIALgBIANABQAFABADACQADABABADIACAIIAAA4IAlAAIAAg3IABgIQABgDADgCQAEgCAEgBIAMgBIANABg");
	this.shape_61.setTransform(364.9,130.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[]},10).wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.9,116.1,749.2,330.7);
// library properties:
lib.properties = {
	width: 750,
	height: 305,
	fps: 30,
	color: "#3E495B",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GRM_TipsRstyle_atlas_.png", id:"GRM_TipsRstyle_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;