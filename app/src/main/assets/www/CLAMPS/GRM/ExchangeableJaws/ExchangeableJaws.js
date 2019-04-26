(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"ExchangeableJaws_atlas_", frames: [[752,3377,750,305],[1504,3377,750,305],[2256,3377,750,305],[3008,3377,750,305],[3760,3377,750,305],[4512,3377,750,305],[5264,3377,750,305],[6016,3377,750,305],[6768,3377,750,305],[0,3684,750,305],[752,3684,750,305],[1504,3684,750,305],[2256,3684,750,305],[3008,3684,750,305],[3760,3684,750,305],[4512,3684,750,305],[5264,3684,750,305],[6016,3684,750,305],[6768,3684,750,305],[0,3991,750,305],[752,3991,750,305],[1504,3991,750,305],[2256,3991,750,305],[5264,3070,750,305],[6016,3070,750,305],[6768,3070,750,305],[0,3377,750,305],[6016,3991,750,305],[752,0,750,305],[4512,4298,750,305],[3760,3991,750,305],[5264,1842,750,305],[0,0,750,305],[4512,3991,750,305],[0,2763,750,305],[6768,2456,750,305],[5264,3991,750,305],[1504,0,750,305],[3008,3991,750,305],[0,4298,750,305],[752,4298,750,305],[1504,4298,750,305],[2256,4298,750,305],[3008,4298,750,305],[3760,4298,750,305],[6768,3991,750,305],[2256,4912,750,305],[3008,4912,750,305],[3760,4912,750,305],[4512,4912,750,305],[5264,4912,750,305],[6016,4912,750,305],[6768,4912,750,305],[0,5219,750,305],[752,5219,750,305],[1504,5219,750,305],[2256,5219,750,305],[3008,5219,750,305],[3760,5219,750,305],[4512,5219,750,305],[5264,5219,750,305],[6016,5219,750,305],[6768,5219,750,305],[0,5526,750,305],[752,5526,750,305],[1504,5526,750,305],[2256,5526,750,305],[3008,5526,750,305],[3760,5526,750,305],[4512,5526,750,305],[5264,5526,750,305],[6016,1228,750,305],[6016,5526,750,305],[6768,5526,750,305],[0,5833,750,305],[752,5833,750,305],[1504,5833,750,305],[2256,5833,750,305],[5264,2456,750,305],[3760,921,750,305],[4512,921,750,305],[3760,0,750,305],[4512,0,750,305],[5264,0,750,305],[6016,0,750,305],[6768,0,750,305],[0,307,750,305],[752,307,750,305],[1504,307,750,305],[2256,307,750,305],[3008,307,750,305],[3760,307,750,305],[4512,307,750,305],[5264,307,750,305],[6016,307,750,305],[6768,307,750,305],[0,614,750,305],[752,614,750,305],[1504,614,750,305],[2256,614,750,305],[3008,614,750,305],[3760,614,750,305],[4512,614,750,305],[5264,614,750,305],[6016,614,750,305],[6768,614,750,305],[0,921,750,305],[752,921,750,305],[1504,921,750,305],[2256,921,750,305],[3008,921,750,305],[6016,1842,750,305],[6768,1842,750,305],[0,2149,750,305],[752,2149,750,305],[1504,2149,750,305],[2256,2149,750,305],[3008,2149,750,305],[3760,2149,750,305],[6016,1535,750,305],[6768,1535,750,305],[0,1842,750,305],[752,1842,750,305],[1504,1842,750,305],[2256,1842,750,305],[3008,1842,750,305],[3760,1842,750,305],[4512,1842,750,305],[6768,1228,750,305],[0,1535,750,305],[752,1535,750,305],[1504,1535,750,305],[2256,1535,750,305],[3008,1535,750,305],[3760,1535,750,305],[4512,1535,750,305],[5264,1535,750,305],[4512,2149,750,305],[5264,2149,750,305],[6016,2149,750,305],[6768,2149,750,305],[0,2456,750,305],[752,2456,750,305],[1504,2456,750,305],[5264,4298,750,305],[6016,4298,750,305],[6768,4298,750,305],[0,4605,750,305],[752,4605,750,305],[1504,4605,750,305],[2256,4605,750,305],[3008,4605,750,305],[3760,4605,750,305],[4512,4605,750,305],[5264,4605,750,305],[6016,4605,750,305],[6768,4605,750,305],[0,4912,750,305],[752,4912,750,305],[1504,4912,750,305],[3760,2456,750,305],[4512,2456,750,305],[752,1228,750,305],[1504,1228,750,305],[2256,1228,750,305],[3008,1228,750,305],[3760,1228,750,305],[4512,1228,750,305],[5264,1228,750,305],[2256,0,750,305],[3008,0,750,305],[2256,2456,750,305],[3008,2456,750,305],[752,2763,750,305],[1504,2763,750,305],[2256,2763,750,305],[3008,2763,750,305],[3760,2763,750,305],[4512,2763,750,305],[5264,2763,750,305],[6016,2763,750,305],[6768,2763,750,305],[0,3070,750,305],[752,3070,750,305],[1504,3070,750,305],[2256,3070,750,305],[3008,3070,750,305],[3760,3070,750,305],[4512,3070,750,305],[6016,2456,750,305],[5264,921,750,305],[6016,921,750,305],[6768,921,750,305],[0,1228,750,305]]}
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



(lib.Assembly_Base_0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0001 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0003 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0005 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0007 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0009 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0011 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0013 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0015 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0017 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0019 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0021 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0023 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0025 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0027 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0029 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0031 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0033 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0035 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0037 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_Base_0040 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw2_0040 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw3_0040 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jaw4_0040 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0015 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawF_alpha0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0015 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawJ0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawK_alpha0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawM_alpha0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0000 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0002 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0004 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0006 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0008 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0010 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0012 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0014 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0015 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0016 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0018 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0020 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0022 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0024 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0026 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0028 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0030 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0032 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0034 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0036 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0038 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.Assembly_jawR0039 = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.spriteSheet = ss["ExchangeableJaws_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.txt_jawSyleS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYB9IgTgBQgJgCgFgDQgFgEgCgFQgCgGAAgIIAAgIIAhAAIABAHIADAEQACABAIAAIAoAAQAHABADgCIADgCIABgGQAAgDgBgDQgCgCgEgBIgOAAIgYgBIgegBIgKgCIgHgDIgFgEIgDgGQgBgGAAgLIABgNQABgHAEgEIAFgFIAIgCIALgCIA7gCQAKAAANADIAHADIAFADQAEAFACAGIABANIAAADIghAAQAAgGgDgDIgFgCIgsAAQgGAAgEACQgDACAAAEIABAGQACACADABQAGABAbAAIAgABIALABIAIAEQAEABACACIAEAHIACAIIABAKQgBAOgCAEIgDAHIgFADIgHADIgKADIgbABgACIBLIAAg8IAXAAIAAA8gABjBLIAAg8IAXAAIAAA8gAh3BLIAAg8IAXAAIAAA8gAicBLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFACIgGACIgIABgAFggiIgMgBQgGgCgEgCIgEgEIgDgFIgCgHIgBgIIAAgHQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIAEgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgFABIgMABgAF5hKIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACADACIAGABQAGAAACgCQACgBAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEAEgEABQgGABgGABgAAZgiIgQgBQgGgCgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIADgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgWAAQAAgFABgEQACgEADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgDABgJABgAkQg8QgCABAAAFQAAADACABIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJgBIgLAAQgHABgCABgAlsgiQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg6IAaAAIAABEIgCAGIgDAFIgEAEQgFADgHACIgQABgAEbgjIAAhYIAXAAIAABYgAiCgjIgMgiIAAAAIgMAiIgeAAIgYg+IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA+g");
	this.shape.setTransform(45.3,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.9);


(lib.txt_jawStyleR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiB8IgBgUIgCgFIgEgDIgHAAIgzAAIAAAcIghAAIAAhtIBjAAQAJAAAHACQAGADAEAEQADAFACAFQACAGAAAIIAAAGIgBALIgDAHQgCADgEACQgDADgGABIAAAAIAHADIAGADIAEAIQABAEAAAGIAAATgAgfBFIA2AAQAGAAADgDQADgDAAgFIAAgEIgBgGIgDgEQgDgCgIAAIgzAAgACIBMIAAg9IAXAAIAAA9gABjBMIAAg9IAXAAIAAA9gAh3BMIAAg9IAXAAIAAA9gAicBMIAAg9IAXAAIAAA9gADPgOIAAgPIACAAQAIAAADgBIADgDIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBJIgDAEIgFADIgGACIgIABgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAALIg4AAIAAAEIABADIADADQADABAHABIAIAAIAHgBIAEgBQACgCAAgEIAVAAIAAADQAAAGgCADQgCAEgFACQgEACgFABIgMABgAF5hKIgBgEIgCgDIgGgCIgIAAQgMABgCABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgDQgEgCgCgFQgCgFAAgGIAAgHIAZAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEAAIgLgBIgVgBIgXgBIgIgCIgFgCIgEgDQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgCIAJgCIAwgBQAIAAAKACIAGACIAEADQAEAEABAEIABALIAAADIgbAAQAAgGgCgCIgEgBIgkAAQgFgBgDACQgDACAAAEIABAEQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAFIACAHIAAAHQAAALgCAEQAAACgCADIgEADIgGACIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgEQgCgEAAgFIAAgFQAAgGACgEQADgEAEgCQAGgCATAAIAPAAQAGACADADIAAgFQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgWAAQAAgGABgEQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFABADADQADADACAFQABADAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg7QgCABAAAEQAAADACACIAKABIAGAAQAIgBAHgBQADgCAAgDQAAgEgDAAQgCgCgJAAIgLAAQgHAAgCACgAlsgiQgKAAgGgCQgHgBgEgDQgEgDgBgGQgCgGAAgHIAAgLIAaAAIAAAIQAAAFACACQADADAGgBIALAAQAHABADgCIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAFIgEAEQgFADgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA9g");
	this.shape.setTransform(45.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.8);


(lib.txt_jawStylenp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB9IgQgBQgIgCgFgEQgFgDgDgGQgDgGAAgJIAAgJIABgLQABgEADgDQACgDAFgBQAFgBAGAAIAAAAIgFgFQgDgCgBgCQgBgEgBgLQABgHABgFQACgFAEgDQADgCAIgBIAUgCIAZAAQAPAAAJACQAIABAEADQAFAEACAFQACAGgBAKIAAAGIgcAAIAAgFQAAgFgDgCQgEgCgIAAIgWAAQgHAAgCABQgDACAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQABACAEADIA1AcIAAgPIAbAAIAAAQIgBAMIATAKIgJAVIgTgKQgCADgEACIgJAEIgKACgAgYBLQgCAEAAAIIABAHQABADACACQACABALABIAuAAIAAgBIgxgaIgGgBQgEAAgCACgACyB8IAAhtIBaAAQAIAAAMADIAHADIAEAFQAFAFABAGQACAHAAAIIAAAKQABAGgCAFQgCAHgDAFQgEAFgGADQgIADgGAAIhDAAIAAAcgADSBFIA0AAQAGAAACgDQADgDAAgGIAAgDQAAgGgDgDQgEgDgGAAIgyAAgAjLB8Ig+hPIgBAAIAABPIggAAIAAhtIAzAAIA+BPIAAhPIAiAAIAABtgAFzBLIAAg8IAXAAIAAA8gAFOBLIAAg8IAXAAIAAA8gAlhBLIAAg8IAXAAIAAA8gAmGBLIAAg8IAXAAIAAA8gACggPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIARArIASgrIAZAAIgjBJIgDAFIgFACIgFACIgIABgAGIgiIgOgBQgGgCgDgCQgDgCgCgEQgCgEAAgFIAZAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQADACAKAAIAIAAIALgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQgBgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgIgBIgWAAIgNgBQgGAAgDgDQgDgDgBgEQgCgDAAgHQAAgGADgDQACgEADgCQAEgBAFgBIALgBIAQAAIASABQAHABAFACQADADABADQACADAAAGIgXAAQgBgDgDAAQgDgBgKAAQgLAAgCABQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQADABAJAAIAPAAQAKAAAHACQAFABAEADQACADACAEIABAHQAAAHgCADQgCAEgDADQgEACgGABIgRABgAExgiIgMgBQgGgCgEgCIgEgEIgDgFIgDgHIAAgIIAAgHQAAgFACgIQACgGAEgDQADgDAGgCIAMgBIAPAAIAQABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQAEACAHAAIAHAAIAHgBIAFgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgGABIgLABgAFKhKIgBgFIgDgCIgFgCIgIAAQgMAAgCACQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIgBAFIAiAAIAAAAgABkgiIgKgBQgEgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACACACIAHABQAGAAACgCQACgBAAgFIAAgDIATAAIAAAHQABAFgCADQgBAEgEACQgDAEgEABQgGABgHABgAgVgiIgQgBQgGgCgEgCQgFgDgCgEQgBgFAAgHIAAgGIAaAAIABAFIACAEQACABAGAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgMgBIgTgBIgYgBIgIgBIgFgCIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgCgFABgJIABgLQAAgFADgDIAFgDIAGgDIAIgCIAwgBQAIAAAKACIAGADIAEADQAEADAAAFIACAKIAAADIgbAAQAAgFgCgCIgEgCIgjAAQgFAAgDABQgDADAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAAAABQAFABAVAAIAZAAIAJABIAHADQADABACADIADAEIACAHIAAAIQgBAKgBAFQAAACgDACIgDADIgGADIgHACIgXABgAlBgiIgKgBQgEgBgDgCIgEgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgWAAQABgFABgEQACgEADgCQADgCAGgBIAMgBIAaAAIALABQAEACAEADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgEABgIABgAlAg8QgCABAAAFQABADACABIAKABIAGAAQAIAAAHgCQACgBAAgDQABgEgDgBQgDgBgIgBIgLAAQgHABgDABgAmcgiQgJgBgHgBQgGgCgEgDQgEgDgBgGQgCgFgBgHIAAgLIAaAAIAAAIQAAAEADACQADADAGAAIALAAQAHAAADgCIACgDIABgEIAAg6IAbAAIgBBEIgCAGIgCAFIgFAEQgEADgHACIgQABgADsgjIAAhYIAXAAIAABYgAiygjIgLgiIAAAAIgMAiIgfAAIgXg+IAZAAIAOAtIAQgtIAVAAIARAtIANgtIAZAAIgXA+g");
	this.shape.setTransform(50,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,89.3,24.9);


(lib.txt_jawStyleM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCB9IgQgBQgIgCgFgEQgGgDgCgGQgDgGAAgJIAAgJIABgLQABgEADgDQACgDAFgBQAEgBAHAAIAAAAIgGgFIgDgEQgCgEAAgLQAAgHACgFQABgFAEgDQAEgCAIgBIAUgCIAaAAQAPAAAIACQAIABAEADQAFAEACAFQABAGAAAKIAAAGIgbAAIAAgFQAAgFgEgCQgDgCgIAAIgXAAQgHAAgDABQgCACAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABACAFADIA2AcIAAgPIAaAAIAAAQIgBAMIATAKIgJAVIgTgKQgCADgEACIgIAEIgKACgAhKBLQgCAEAAAIIABAHQAAADADACQACABAKABIAwAAIAAgBIgzgaIgFgBQgEAAgCACgAEQB8IAAhPIAAAAIgsBPIgZAAIgrhPIgBAAIAABPIggAAIAAhtIAzAAIAmBGIAlhGIA0AAIAABtgAktB8IAAhtIAhAAIAABRIBLAAIAAAcgAF1BLIAAg8IAXAAIAAA8gAFQBLIAAg8IAXAAIAAA8gAljBLIAAg8IAXAAIAAA8gAmIBLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFACIgGACIgIABgAFggiIgMgBQgGgCgEgCIgEgEIgDgFIgCgHIgBgIIAAgHQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIAEgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgFABIgMABgAF5hKIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACADACIAGABQAGAAACgCQACgBAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEAEgEABQgGABgGABgAAZgiIgQgBQgGgCgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIADgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgWAAQAAgFABgEQACgEADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgDABgJABgAkQg8QgCABAAAFQAAADACABIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJgBIgLAAQgHABgCABgAlsgiQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg6IAaAAIAABEIgCAGIgDAFIgEAEQgFADgHACIgQABgAEbgjIAAhYIAXAAIAABYgAiCgjIgMgiIAAAAIgMAiIgeAAIgYg+IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA+g");
	this.shape.setTransform(45.3,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.9);


(lib.txt_jawStyleK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeB8IgugpIgPAAIAAApIghAAIAAhtIAhAAIAAApIAPAAIApgpIAuAAIg7A1IBCA4gACIBMIAAg9IAXAAIAAA9gABjBMIAAg9IAXAAIAAA9gAh3BMIAAg9IAXAAIAAA9gAicBMIAAg9IAXAAIAAA9gADPgOIAAgPIACAAQAIAAADgBIADgDIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBJIgDAEIgFADIgGACIgIABgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAALIg4AAIAAAEIABADIADADQADABAHABIAIAAIAHgBIAEgBQACgCAAgEIAVAAIAAADQAAAGgCADQgCAEgFACQgEACgFABIgMABgAF5hKIgBgEIgCgDIgGgCIgIAAQgMABgCABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgDQgEgCgCgFQgCgFAAgGIAAgHIAZAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEAAIgLgBIgVgBIgXgBIgIgCIgFgCIgEgDQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgCIAJgCIAwgBQAIAAAKACIAGACIAEADQAEAEABAEIABALIAAADIgbAAQAAgGgCgCIgEgBIgkAAQgFgBgDACQgDACAAAEIABAEQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAFIACAHIAAAHQAAALgCAEQAAACgCADIgEADIgGACIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgEQgCgEAAgFIAAgFQAAgGACgEQADgEAEgCQAGgCATAAIAPAAQAGACADADIAAgFQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgWAAQAAgGABgEQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFABADADQADADACAFQABADAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg7QgCABAAAEQAAADACACIAKABIAGAAQAIgBAHgBQADgCAAgDQAAgEgDAAQgCgCgJAAIgLAAQgHAAgCACgAlsgiQgKAAgGgCQgHgBgEgDQgEgDgBgGQgCgGAAgHIAAgLIAaAAIAAAIQAAAFACACQADADAGgBIALAAQAHABADgCIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAFIgEAEQgFADgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA9g");
	this.shape.setTransform(45.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.8);


(lib.txt_jawStylej = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADaB9QgMgBgIgBQgIgCgFgEQgFgEgDgHQgCgGAAgKIAAgOIAgAAIAAALQAAAGAEACQADACAIABIANAAQAJAAAEgCQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAgBQACgCAAgDIAAhIIAhAAIgBBUIgCAIIgEAHIgFAEQgGAEgJACIgUABgAgKB9IgRgBQgIgCgFgEQgFgDgDgGQgDgGAAgJIAAgJIABgLQACgEACgDQADgDAEgBQAFgBAHAAIAAAAIgGgFIgEgEQgBgEAAgLQAAgHABgFQACgFAEgDQAEgCAHgBIAUgCIAaAAQAPAAAIACQAIABAFADQAEAEACAFQACAGAAAKIAAAGIgdAAIAAgFQAAgFgDgCQgEgCgIAAIgXAAQgGAAgCABQgDACAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABAAQABACAFADIA1AcIAAgPIAbAAIAAAQIgBAMIATAKIgJAVIgTgKQgDADgEACIgJAEIgKACgAgSBLQgDAEAAAIIABAHQABADACACQADABAKABIAuAAIABgBIgygaIgFgBQgEAAgCACgAizB8IAAgqIhHAAIAAAqIghAAIAAhtIAhAAIAAAnIBHAAIAAgnIAhAAIAABtgAFiBLIAAg8IAXAAIAAA8gAE9BLIAAg8IAXAAIAAA8gAlRBLIAAg8IAXAAIAAA8gAl2BLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFACIgGACIgIABgAFggiIgMgBQgGgCgEgCIgEgEIgDgFIgCgHIgBgIIAAgHQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIAEgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgFABIgMABgAF5hKIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACADACIAGABQAGAAACgCQACgBAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEAEgEABQgGABgGABgAAZgiIgQgBQgGgCgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIADgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgWAAQAAgFABgEQACgEADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgDABgJABgAkQg8QgCABAAAFQAAADACABIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJgBIgLAAQgHABgCABgAlsgiQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg6IAaAAIAABEIgCAGIgDAFIgEAEQgFADgHACIgQABgAEbgjIAAhYIAXAAIAABYgAiCgjIgMgiIAAAAIgMAiIgeAAIgYg+IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA+g");
	this.shape.setTransform(45.3,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.9);


(lib.txt_jawStyleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVB9QgMgBgIgBQgLgDgEgDIgGgFIgEgHIgCgIIgBgMIAAggIABgLIACgIIAEgHIAGgGQAEgCALgDQAIgCAMgBIAxAAQAJAAAOADIAHADIAGAEQAEAEACAHQABAGAAAIIAAAEIghAAIgBgHQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgJAAIgkAAIgKAAQgEACgCACQgDADgBAEIgBAMIAAANIABAMQABAEADACQACADAEABIAKABIAjAAQAIAAAEgCQADgBABgDQABgCAAgEIAAgEIgoAAIAAgWIBKAAIAAAfIgBAKIgCAIIgEAGIgGAEIgIADIgJABIgYABgACKBLIAAg8IAXAAIAAA8gABlBLIAAg8IAXAAIAAA8gAh5BLIAAg8IAXAAIAAA8gAieBLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFACIgGACIgIABgAFggiIgMgBQgGgCgEgCIgEgEIgDgFIgCgHIgBgIIAAgHQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIAEgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgFABIgMABgAF5hKIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACADACIAGABQAGAAACgCQACgBAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEAEgEABQgGABgGABgAAZgiIgQgBQgGgCgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgDIADgDIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgWAAQAAgFABgEQACgEADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgDABgJABgAkQg8QgCABAAAFQAAADACABIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJgBIgLAAQgHABgCABgAlsgiQgKgBgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg6IAaAAIAABEIgCAGIgDAFIgEAEQgFADgHACIgQABgAEbgjIAAhYIAXAAIAABYgAiCgjIgMgiIAAAAIgMAiIgeAAIgYg+IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA+g");
	this.shape.setTransform(45.3,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.9);


(lib.txt_jawStyleF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1B8IAAhtIBwAAIAAAaIhPAAIAAAUIBLAAIAAAaIhLAAIAAAlgAB9BMIAAg9IAXAAIAAA9gABYBMIAAg9IAXAAIAAA9gAhsBMIAAg9IAXAAIAAA9gAiRBMIAAg9IAXAAIAAA9gADPgOIAAgPIACAAQAIAAADgBIADgDIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBJIgDAEIgFADIgGACIgIABgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAALIg4AAIAAAEIABADIADADQADABAHABIAIAAIAHgBIAEgBQACgCAAgEIAVAAIAAADQAAAGgCADQgCAEgFACQgEACgFABIgMABgAF5hKIgBgEIgCgDIgGgCIgIAAQgMABgCABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgDQgEgCgCgFQgCgFAAgGIAAgHIAZAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEAAIgLgBIgVgBIgXgBIgIgCIgFgCIgEgDQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgCIAJgCIAwgBQAIAAAKACIAGACIAEADQAEAEABAEIABALIAAADIgbAAQAAgGgCgCIgEgBIgkAAQgFgBgDACQgDACAAAEIABAEQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAFIACAHIAAAHQAAALgCAEQAAACgCADIgEADIgGACIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgEQgCgEAAgFIAAgFQAAgGACgEQADgEAEgCQAGgCATAAIAPAAQAGACADADIAAgFQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgWAAQAAgGABgEQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFABADADQADADACAFQABADAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg7QgCABAAAEQAAADACACIAKABIAGAAQAIgBAHgBQADgCAAgDQAAgEgDAAQgCgCgJAAIgLAAQgHAAgCACgAlsgiQgKAAgGgCQgHgBgEgDQgEgDgBgGQgCgGAAgHIAAgLIAaAAIAAAIQAAAFACACQADADAGgBIALAAQAHABADgCIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAFIgEAEQgFADgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA9g");
	this.shape.setTransform(45.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,79.9,24.8);


(lib.txt_JawStylecd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeB9IgRgBQgIgCgFgEQgGgDgCgGQgDgGAAgJIAAgJIABgLQACgEACgDQADgDAEgBQAEgBAIAAIAAAAIgHgFIgDgEQgCgEAAgLQAAgHACgFQABgFAEgDQAFgCAHgBIAVgCIAZAAQAPAAAHACQAJABAFADQAEAEACAFQACAGAAAKIAAAGIgdAAIAAgFQAAgFgDgCQgEgCgIAAIgWAAQgHAAgDABQgCACAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAAAAAQABACAGADIA1AcIAAgPIAbAAIAAAQIgBAMIATAKIgJAVIgTgKQgDADgEACIgJAEIgKACgAgmBLQgDAEAAAIIABAHQAAADADACQADABAJABIAvAAIABgBIgygaIgGgBQgDAAgCACgAkCB9QgMgBgIgBQgLgDgEgDIgFgFIgFgHIgCgIIAAgMIAAggIAAgLIACgIIAFgHIAFgGQAEgCALgDQAIgCAMgBIAoAAQALAAARADIAJACIAHAEIAEAGIADAIQACAGAAAMIghAAIAAgCQgBgGgEgCQgDgCgJAAIgkAAQgGAAgEABQgEABgDADQgBADgBAEIgBAJIAAAMIABAKQAAAEACADQADACADACQAEABAGAAIAtAAQADgBADgCQACgBABgDIAAgIIAiAAIAAAKQAAAHgBAGQgDAGgDAEQgFAFgIACQgMACgIABgACjB8IAAhtIBlAAQAJAAAMACIAIADIAGAEIAFAFIACAHQADAGAAALIAAAgQAAALgDAHIgCAGIgFAGIgGADIgIADQgMADgJAAgADFBgIA7AAIAJgCQAEAAACgDQACgBACgFIABgJIAAgOIgBgKQgCgEgCgCQgCgDgEAAIgJgBIg7AAgAF3BLIAAg8IAXAAIAAA8gAFSBLIAAg8IAXAAIAAA8gAlmBLIAAg8IAYAAIAAA8gAmLBLIAAg8IAYAAIAAA8gACggPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIARArIASgrIAZAAIgjBJIgDAFIgFACIgFACIgIABgAGIgiIgOgBQgGgCgDgCQgDgCgCgEQgCgEAAgFIAZAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQADACAKAAIAIAAIALgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQgBgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgIgBIgWAAIgNgBQgGAAgDgDQgDgDgBgEQgCgDAAgHQAAgGADgDQACgEADgCQAEgBAFgBIALgBIAQAAIASABQAHABAFACQADADABADQACADAAAGIgXAAQgBgDgDAAQgDgBgKAAQgLAAgCABQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQADABAJAAIAPAAQAKAAAHACQAFABAEADQACADACAEIABAHQAAAHgCADQgCAEgDADQgEACgGABIgRABgAExgiIgMgBQgGgCgEgCIgEgEIgDgFIgDgHIAAgIIAAgHQAAgFACgIQACgGAEgDQADgDAGgCIAMgBIAPAAIAQABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQAEACAHAAIAHAAIAHgBIAFgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgGABIgLABgAFKhKIgBgFIgDgCIgFgCIgIAAQgMAAgCACQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIgBAFIAiAAIAAAAgABkgiIgKgBQgEgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACACACIAHABQAGAAACgCQACgBAAgFIAAgDIATAAIAAAHQABAFgCADQgBAEgEACQgDAEgEABQgGABgHABgAgVgiIgQgBQgGgCgEgCQgFgDgCgEQgBgFAAgHIAAgGIAaAAIABAFIACAEQACABAGAAIAgAAIAIgBIADgDIABgEIgBgDQgBgDgEAAIgMgBIgTgBIgYgBIgIgBIgFgCIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgCgFABgJIABgLQAAgFADgDIAFgDIAGgDIAIgCIAwgBQAIAAAKACIAGADIAEADQAEADAAAFIACAKIAAADIgbAAQAAgFgCgCIgEgCIgjAAQgFAAgDABQgDADAAADIABAFQAAAAABAAQAAABABAAQAAAAABAAQABAAAAABQAFABAVAAIAZAAIAJABIAHADQADABACADIADAEIACAHIAAAIQgBAKgBAFQAAACgDACIgDADIgGADIgHACIgXABgAlBgiIgKgBQgEgBgDgCIgEgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgWAAQABgFABgEQACgEADgCQADgCAGgBIAMgBIAaAAIALABQAEACAEADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgEABgIABgAlAg8QgCABAAAFQABADACABIAKABIAGAAQAIAAAHgCQACgBAAgDQABgEgDgBQgDgBgIgBIgLAAQgHABgDABgAmcgiQgJgBgHgBQgGgCgEgDQgEgDgBgGQgCgFgBgHIAAgLIAaAAIAAAIQAAAEADACQADADAGAAIALAAQAHAAADgCIACgDIABgEIAAg6IAbAAIgBBEIgCAGIgCAFIgFAEQgEADgHACIgQABgADsgjIAAhYIAXAAIAABYgAiygjIgLgiIAAAAIgMAiIgfAAIgXg+IAZAAIAOAtIAQgtIAVAAIARAtIANgtIAZAAIgXA+g");
	this.shape.setTransform(50,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,1.9,89.3,24.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQALAKAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAAKALg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUg");

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAUAAAdQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAeAAAUAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAeAAATAUQAVAUAAAdQAAAdgVAUQgUAVgdAAQgcAAgVgVg");

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAPgKAKQgLAKgOAAQgOAAgKgKQgKgKAAgPQAAgNAKgLQAKgKAOAAQAOAAALAKg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAUAAAdQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAeAAAUAUg");

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABAgcQAMAbgLAaQgKAbgbAMQgaAMgagLQgbgKgMgaQgMgbAKgaQALgbAagMQAbgMAaALQAbAKAMAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYBBQgbgKgMgaQgMgbAKgaQALgbAagMQAbgMAaALQAbAKAMAaQAMAbgLAaQgKAbgbAMQgOAGgOAAQgMAAgMgFg");

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAggNQAGANgFANQgFANgOAGQgNAGgNgFQgOgGgGgNQgFgNAFgNQAFgNANgGQAOgGAMAFQAOAFAGAOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABAgcQAMAbgLAaQgKAbgbAMQgaAMgagLQgbgKgMgaQgMgbAKgaQALgbAagMQAbgMAaALQAbAKAMAag");

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16.1,16.1);


(lib.jawbase_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_Base_0040();
	this.instance.parent = this;
	this.instance.setTransform(-375,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-152.5,750,305);


(lib.jaw9_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAngbQgbAAgVAPQgVAPgIAa");
	this.shape.setTransform(50.7,-64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIgPIARAf");
	this.shape_1.setTransform(40,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJgPIgRAf");
	this.shape_2.setTransform(40,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AATAAIglAA");
	this.shape_3.setTransform(37.3,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgSAAIAlAA");
	this.shape_4.setTransform(37.3,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIAQIARgf");
	this.shape_5.setTransform(34.5,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJAQIgRgf");
	this.shape_6.setTransform(34.5,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA7AbQgMAYgZAJQgYAJgYgLQgYgLgKgZQgJgYALgYQAMgYAZgJQAYgJAYALQAYALAJAZQAKAYgLAYg");
	this.shape_7.setTransform(37.3,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIgPIARAf");
	this.shape_8.setTransform(17.2,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJgPIgRAf");
	this.shape_9.setTransform(17.2,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AASAAIgjAA");
	this.shape_10.setTransform(14.4,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgRAAIAjAA");
	this.shape_11.setTransform(14.4,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIAQIARgf");
	this.shape_12.setTransform(11.6,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJAQIgRgf");
	this.shape_13.setTransform(11.6,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AANg+QAbAGAOAWQAPAWgGAZQgGAagWAOQgWAPgZgGQgbgFgOgWQgPgXAGgZQAFgaAXgOQAWgOAZAFg");
	this.shape_14.setTransform(14.4,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJgPIgRAf");
	this.shape_15.setTransform(40,-23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIgPIARAf");
	this.shape_16.setTransform(40,-26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AATAAIglAA");
	this.shape_17.setTransform(37.3,-21.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgSAAIAlAA");
	this.shape_18.setTransform(37.3,-28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgIAQIARgf");
	this.shape_19.setTransform(34.5,-26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAJAQIgRgf");
	this.shape_20.setTransform(34.5,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAbg5QAYALAJAZQAKAYgLAYQgMAYgZAJQgYAJgYgLQgYgLgKgZQgJgYALgYQAMgYAZgJQAYgJAYALg");
	this.shape_21.setTransform(37.3,-25.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhCAAICFAA");
	this.shape_22.setTransform(25.8,3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("Ag+AAIB9AA");
	this.shape_23.setTransform(3.4,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA/AAIh9AA");
	this.shape_24.setTransform(3.4,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABDAAIiFAA");
	this.shape_25.setTransform(25.8,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AkkAAIJJAA");
	this.shape_26.setTransform(25.4,21);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgigTQAXAnAuAA");
	this.shape_27.setTransform(-7.5,18.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgmhDIBNCH");
	this.shape_28.setTransform(-14.9,10.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAkAVQgYgpgvAA");
	this.shape_29.setTransform(-22.4,1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgPAAIAfAA");
	this.shape_30.setTransform(-27.6,-0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAQAAIgfAA");
	this.shape_31.setTransform(-27.6,-17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgjAUQAvAAAYgn");
	this.shape_32.setTransform(-22.4,-19);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAnhDIhNCH");
	this.shape_33.setTransform(-14.9,-27.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAjgTQguAAgXAn");
	this.shape_34.setTransform(-7.5,-36.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ACrAAIlVAA");
	this.shape_35.setTransform(13.1,-38.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhRBRQBEAAAvgvQAvgvAAhD");
	this.shape_36.setTransform(38.4,-46.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgUIAAAp");
	this.shape_37.setTransform(46.5,-57.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABSApQAAgugpgXQgpgYgoAYQgpAXAAAu");
	this.shape_38.setTransform(54.7,-63.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgoApQAhAAAYgYQAYgXAAgh");
	this.shape_39.setTransform(58.8,16.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ACyAAIljAA");
	this.shape_40.setTransform(14.8,-29.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAWgqQgYAAgNAVQgNAVANAWQANAWAYAA");
	this.shape_41.setTransform(-5.2,-25.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AixAAIFjAA");
	this.shape_42.setTransform(14.8,-20.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAWgrQgYAAgNAWQgNAVANAWQANAWAYAA");
	this.shape_43.setTransform(-5.2,7.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAphQQguAAgXApQgYAnAYApQAXAoAuAA");
	this.shape_44.setTransform(-33.4,-8.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAFpIAArR");
	this.shape_45.setTransform(62.9,-23.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgvgiQgLAgAYAWQAZAXAegOQAfgNAAgg");
	this.shape_46.setTransform(22.5,-26);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AACAJQAAgJgCgI");
	this.shape_47.setTransform(27.6,-28.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgWgDQAWAQAXgQ");
	this.shape_48.setTransform(52.6,21.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgmAAIBNAA");
	this.shape_49.setTransform(47.4,26.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAADIAAgF");
	this.shape_50.setTransform(51.2,26.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCgCIAFAF");
	this.shape_51.setTransform(43.8,27.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgCIAAAF");
	this.shape_52.setTransform(43.5,26.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgfAAIA/AA");
	this.shape_53.setTransform(47.4,27.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCADIAFgF");
	this.shape_54.setTransform(50.9,27.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhNIAACb");
	this.shape_55.setTransform(63.4,18.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgQIAAAh");
	this.shape_56.setTransform(127,24.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("Ag8g8IB5B5");
	this.shape_57.setTransform(120.9,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AADAAIgFAA");
	this.shape_58.setTransform(63.1,10.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgFIAAAK");
	this.shape_59.setTransform(-13,25.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgEAAIAJAA");
	this.shape_60.setTransform(62.8,26.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("Al4AAILxAA");
	this.shape_61.setTransform(24.7,26.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AE+AAIp7AA");
	this.shape_62.setTransform(95.2,26.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AkAAAIIBAA");
	this.shape_63.setTransform(89.1,10.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAg+IAAB8");
	this.shape_64.setTransform(95.2,-13.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAg+IAAB8");
	this.shape_65.setTransform(105.5,-13.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAUAAIgnAA");
	this.shape_66.setTransform(114.6,-1.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAQAAIgfAA");
	this.shape_67.setTransform(86.4,-1.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAA5IAAhx");
	this.shape_68.setTransform(84.8,-7.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABTAjQhEhDhhgD");
	this.shape_69.setTransform(89.6,-38.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAJIAAgR");
	this.shape_70.setTransform(14.4,-40.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAtATQglglg0AA");
	this.shape_71.setTransform(76.8,-23.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhRAAICjAA");
	this.shape_72.setTransform(6.3,-41.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgvgiQgMAgAZAWQAYAXAfgNQAfgOAAgg");
	this.shape_73.setTransform(22.5,-26);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AACAJQAAgIgDgJ");
	this.shape_74.setTransform(27.6,-28.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AADAAIgFAA");
	this.shape_75.setTransform(81,-41.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAjgIQgjAAgiAR");
	this.shape_76.setTransform(-5.3,-40.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhjIAADH");
	this.shape_77.setTransform(81.3,-31.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AARArQAAgxghgk");
	this.shape_78.setTransform(83,-17.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAg+IAAB8");
	this.shape_79.setTransform(96.1,-13.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhdIAAC7");
	this.shape_80.setTransform(93.2,-28.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhGAAICOAA");
	this.shape_81.setTransform(100.4,-19.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAA+IAAh8");
	this.shape_82.setTransform(104.6,-13.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAcIAAg3");
	this.shape_83.setTransform(107.5,-22.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAwAAIheAA");
	this.shape_84.setTransform(67.6,-25.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AB+AAIj7AA");
	this.shape_85.setTransform(27,-41.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABZAAIixAA");
	this.shape_86.setTransform(71.8,-41.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhHIAACP");
	this.shape_87.setTransform(116.6,-8.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAaIAAgz");
	this.shape_88.setTransform(112.7,-4.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AB7AAIj1AA");
	this.shape_89.setTransform(100.3,-6.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgZIAAAz");
	this.shape_90.setTransform(88,-4.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhchcIC5C4");
	this.shape_91.setTransform(107.3,-25.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BCBFC6").s().p("AgBBDIAAgBIAAgBIABAAQAJgBAKgDIABABIAAABIAAAAIgBABQgKADgJAAIAAAAIgBAAgAgTBAQgLgDgIgGIAAAAIAAgBIABgBIABAAQAHAGAKACIABABIAAABIgBABIAAAAIAAAAgAAnA2IAAgBIgBgBIABgBQAHgFAFgHIABAAIABAAIAAABIAAAAQgFAIgHAFIgBABIgBAAgAgzArIAAgBIgEgFQgFgHgDgHIAAgBIABgBIABAAIABABQACAHAFAHIAEAFIAAABIgBABIAAAAIgBAAgAA+AXIgBgBIAAgBIACgIIACgLIAAgBIABAAIABAAIABABIgCALIgDAJIAAABIgBAAIAAAAgAhBAEIgBgBIAAgBIABgPIABgDIABgBIAAAAIABAAIAAABIgBAEIgBAOIAAABIgBABIAAAAgAA/gQIgBAAQgCgKgGgIIABAAIABAAIAAgBIAAgBQAGAJADAKIAAABIgBABIAAAAIgBgBgAg3ghIgBgBIAAgBQAFgIAHgGIABAAIABAAIAAABIAAABQgHAGgFAIIAAAAIgBAAIAAAAgAAwgqIAAgBIAAgBIABAAIABABIAGAHIgBgBIgBABIAAABIAAABIgGgIgAA4gkIAAAAIAAAAgAAig2QgJgFgKgCIgBgBIAAgBIABgBIABAAQAKADAJAFIABAAIAAABIgBABIAAAAIgBAAgAgYg6IgBgBIAAgBIABgBQAKgEALgBIABAAIAAABIAAABIgBAAQgKACgKAEIAAAAIgBAAg");
	this.shape_92.setTransform(-93.3,-0.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABrAAIjVAA");
	this.shape_93.setTransform(-71.6,-16.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAlEIAAKJ");
	this.shape_94.setTransform(-83.3,-7.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhqAAIDVAA");
	this.shape_95.setTransform(-71.6,21.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AgOgHQAAAIAHAFQAHAEAIgEQAHgFAAgI");
	this.shape_96.setTransform(-93.3,-13.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AAAAIIAAgP");
	this.shape_97.setTransform(-94.8,-14.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AAWALQAAgLgLgHQgLgGgKAGQgLAGAAAM");
	this.shape_98.setTransform(-93.3,-16.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AAAgHIAAAP");
	this.shape_99.setTransform(-95.5,-14.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AgVgKQAAALALAHQAKAGALgGQALgHAAgL");
	this.shape_100.setTransform(-93.3,-12.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AADAAIgGAA");
	this.shape_101.setTransform(-91.4,-13.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AAPAIQAAgJgHgDQgIgFgHAFQgHAEAAAI");
	this.shape_102.setTransform(-93.3,-16.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.3,1,1).p("AgDAAIAGAA");
	this.shape_103.setTransform(-91.4,-15.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgXgDQAXARAYgR");
	this.shape_104.setTransform(52.6,21.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA6gOQg9AAg2Ad");
	this.shape_105.setTransform(-42.6,23.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AjmAAIHNAA");
	this.shape_106.setTransform(-13.7,22.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCAPIABgLIACgOIACgE");
	this.shape_107.setTransform(-83.1,0.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhxIAADj");
	this.shape_108.setTransform(-59.8,13.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAEARIgCgCIgBgBIgCgNIgCgR");
	this.shape_109.setTransform(-82.9,-18.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhjIAADH");
	this.shape_110.setTransform(-59.8,-29.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AABAAIgBAA");
	this.shape_111.setTransform(-83.2,-39.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgEgQIADACIABAEIABAFIADAW");
	this.shape_112.setTransform(-60.3,0.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhqAAIDVAA");
	this.shape_113.setTransform(-71.6,-1.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AACgMIgBANIgBAEIAAADIgBADIAAAC");
	this.shape_114.setTransform(-60,-18.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAAIABAA");
	this.shape_115.setTransform(-60,-39.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgKgFIAVAL");
	this.shape_116.setTransform(10.5,-39.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA5AAIhxAA");
	this.shape_117.setTransform(-54.1,25.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AlZAAIKzAA");
	this.shape_118.setTransform(-25.2,-39.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AALgFIgVAL");
	this.shape_119.setTransform(10.5,21.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAmIAAhL");
	this.shape_120.setTransform(61.4,21.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AokAAIRJAA");
	this.shape_121.setTransform(6.5,25.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ACGAAIkLAA");
	this.shape_122.setTransform(22.8,-39.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgwgiQgLAgAZAWQAYAXAfgNQAfgOAAgg");
	this.shape_123.setTransform(22.5,-26);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AABAJQAAgJgCgI");
	this.shape_124.setTransform(27.6,-28.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAFFIAAqJ");
	this.shape_125.setTransform(-103.6,-7.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABlAAIjJAA");
	this.shape_126.setTransform(-93.5,-39.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABlAAIjJAA");
	this.shape_127.setTransform(-93.5,25.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ABrAAIjVAA");
	this.shape_128.setTransform(-71.6,-39.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA2gMQAFAVgLATQgMAUgXAFQgVAGgTgMQgUgMgGgWQgFgVAMgTQAMgUAWgFQAVgGAUAMQATAMAGAWg");
	this.shape_129.setTransform(-93.3,-0.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3C456A").s().p("AFFHaIgFgMIo1AAIgCgLInSgDIgBgcIjtgCIgBAgIjJAAIAAqJIO5ACIAWgMIAmgGIGigBIASgNIAegnIAKgRIAJgfIAEg6IgBgXIACgSIAKgTIAdgcIASgIIAUgDIAPAAIAQAEIATAJIAUAXIAJARIAEAWIAAC0IDbADIAWADIAsARIARAKIAtAkIDAC+IAACNIgoACIAAgzIj0AAIAAAzIghgBIAAhnIgDggIgHgaIgXgkIhAgnIh5gBIAAFoIIDAAIB9B8IAAAfIr0ABIgHAMg");
	this.shape_130.setTransform(11.6,-20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-68.4,232.6,96.9);


(lib.jaw9_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jawM_alpha0039();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.jaw8_drawingcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAFIAAgIIihAAIAAAI");
	this.shape.setTransform(87.5,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhshfIAEgCQAFgDgDgGQgBgCgBgBIgegQIAAgJIAegRIADgFIDsAAIAAE5IjwAAIgdgQIAAgIIAegRQAGgEgEgFQgBgCgBAAIgEgC");
	this.shape_1.setTransform(86.4,64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJBQIAEgCQAGgEgEgFQgBgBgBgBIgdgRIAAgJIAdgRQAFgEgDgEQgBgCgBgBIgEgCIgZgOIAAgJIAZgOIAEgCQAFgEgDgFQgBgCgBAAIgdgSIAAgIIAZgO");
	this.shape_2.setTransform(74.5,63.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgNIgZAOIAAAN");
	this.shape_3.setTransform(74.3,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgNIAAANIAZAO");
	this.shape_4.setTransform(74.3,69.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANATIgZgPIAAgHIAZgP");
	this.shape_5.setTransform(74.2,73.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZgCIAAAFIAzAA");
	this.shape_6.setTransform(89.8,80.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAhgDQgDAHgIAAIg3AA");
	this.shape_7.setTransform(92.3,80.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglBAIASAAIA5g5IAAgMIg5g6IgSAA");
	this.shape_8.setTransform(103.7,65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAq");
	this.shape_9.setTransform(73,65.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg/IAAB/");
	this.shape_10.setTransform(101.7,65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_11.setTransform(75.5,78.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_12.setTransform(75.5,73.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_13.setTransform(75.5,67.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_14.setTransform(75.5,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_15.setTransform(75.5,57);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_16.setTransform(75.5,51.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_17.setTransform(92.4,80.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDgEIAHAJ");
	this.shape_18.setTransform(75.7,75.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEgDIgHAH");
	this.shape_19.setTransform(75.7,54.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_20.setTransform(75.3,59.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_21.setTransform(75.3,71.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C456A").s().p("AgcClIgBgHIhyABIgbgRIgCgHIAhgVIAAgGIgfgTIAAgJIAYgOIgYgQIAAhZIAZgQIgbgPIAAgJIAYgQIAJgJIgfgUIAAgIIAkgWIAcAAIACgKICfABIAAAJIAsAAIgCBfIAUACIA4A2IAAAQIg6A4IgSABIgBBYIgpABIgGAGg");
	this.shape_22.setTransform(90.1,64.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgNIAAANIgZAP");
	this.shape_23.setTransform(71.7,69.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABuheIgEgDQgCgCgBgBQgDgFAGgDIAdgSIAAgIIgdgRIgDgFIjtAAIABE5IDxAAIAbgQIAAgIIgdgRQgCgBgBgCQgDgFAGgEIAEgC");
	this.shape_24.setTransform(59.7,64.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLATIAXgPIAAgHIgXgP");
	this.shape_25.setTransform(71.9,73);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHA+IgFgDQgCgBAAgBQgEgFAGgEIAcgRIAAgIIgcgRIgCgCQgEgFAGgDIAcgRIAAgJIgcgRQgCgBAAgBQgDgGAFgDIAFgD");
	this.shape_26.setTransform(71.5,65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgNIAZAOIAAAN");
	this.shape_27.setTransform(71.7,60.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLASIAXgOIAAgIIgXgN");
	this.shape_28.setTransform(71.9,57);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmg/IgSAAIg5A6IAAAMIA5A5IASAA");
	this.shape_29.setTransform(42.4,65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZgCIAAAFIAzAAIAAgF");
	this.shape_30.setTransform(56.3,80.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AghgDQAFAHAHAAIA3AA");
	this.shape_31.setTransform(53.7,80.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAFIAAgJIihAAIAAAJ");
	this.shape_32.setTransform(58.6,48.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgVIAAAr");
	this.shape_33.setTransform(73.1,65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg/IAAB/");
	this.shape_34.setTransform(44.5,65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAk");
	this.shape_35.setTransform(70.7,78.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_36.setTransform(70.7,73);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_37.setTransform(70.7,67.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_38.setTransform(70.7,62.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAj");
	this.shape_39.setTransform(70.7,57);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_40.setTransform(70.7,51.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAEIgIgI");
	this.shape_41.setTransform(70.4,54.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAEIAIgI");
	this.shape_42.setTransform(70.4,75.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_43.setTransform(70.9,71);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_44.setTransform(70.9,59);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C456A").s().p("AgzCeIgqAAIgBhbIgVgBIg5g4IAAgKIA6g8IASgBIAChfIAoAAIADgJICgAAIABAJIAcAAIAjAVIAAAMIgeAQIAAAIIAeASIAAAKIgYAQIAYANIAABbIgYAPIAYAQIAAAIIgbASIgDAKIAeARIAAAKIgcAPIhygBIgBAIIhIABQgHAAgCgIg");
	this.shape_45.setTransform(55.8,64.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgTIgXAn");
	this.shape_46.setTransform(96.7,13.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYAAIguAA");
	this.shape_47.setTransform(93.2,15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjg7QAYAOAIAcQAIAagPAZQgNAZgdAIQgaAHgZgOQgYgOgIgcQgIgaAOgZQAPgZAbgHQAbgIAZAOg");
	this.shape_48.setTransform(93.2,11.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAdhLQAgAMANAgQAOAegMAfQgNAfgeAOQgfANgfgMQgfgMgOgfQgNgfAMgeQAMggAfgNQAfgOAeAMg");
	this.shape_49.setTransform(93.2,11.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAUIgWgn");
	this.shape_50.setTransform(89.7,13.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgUIAXAp");
	this.shape_51.setTransform(96.7,9.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWAAIAuAA");
	this.shape_52.setTransform(93.2,7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKAVIAWgp");
	this.shape_53.setTransform(89.7,9.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTgLIAnAX");
	this.shape_54.setTransform(19.5,-14);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTAMIAogX");
	this.shape_55.setTransform(15.5,-14);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_56.setTransform(21.6,-10.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_57.setTransform(13.4,-10.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAMIgogX");
	this.shape_58.setTransform(15.5,-7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXhNQAgAJARAeQAQAegKAfQgJAggeARQgeAQgfgKQghgJgQgeQgPgeAJgfQAKghAdgPQAegRAfAKg");
	this.shape_59.setTransform(17.5,-10.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUgLIgnAX");
	this.shape_60.setTransform(19.5,-7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTgLIAnAX");
	this.shape_61.setTransform(19.5,-55.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTAMIAogX");
	this.shape_62.setTransform(15.5,-55.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgXIAAAv");
	this.shape_63.setTransform(21.6,-51.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAYIAAgv");
	this.shape_64.setTransform(13.4,-51.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAMIgogX");
	this.shape_65.setTransform(15.5,-48.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUgLIgnAX");
	this.shape_66.setTransform(19.5,-48.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABIgmQAQAegKAgQgJAggeAQQgeAQgfgKQghgJgQgeQgPgdAJggQAKggAdgQQAegQAfAJQAgAKARAdg");
	this.shape_67.setTransform(17.5,-51.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABnBnIgGgyIgUgzIgigsIgsgiIgzgUIgygG");
	this.shape_68.setTransform(68.2,-58.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhmBnIAygGIAzgUIAsgiIAigsIAUgzIAGgy");
	this.shape_69.setTransform(68.2,-3.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhWhWICtCt");
	this.shape_70.setTransform(-15.5,-7.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhIgdQA8A7BVAA");
	this.shape_71.setTransform(0.5,3.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAfiSQg9A/AABTQAABVA9A+");
	this.shape_72.setTransform(-27.3,-31.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABXhWIitCt");
	this.shape_73.setTransform(-15.5,-54.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABJgdQhVAAg8A7");
	this.shape_74.setTransform(0.5,-66.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABqAAIjTAA");
	this.shape_75.setTransform(18.3,-69.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhpAAIDTAA");
	this.shape_76.setTransform(18.3,6.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAF9IAAr5");
	this.shape_77.setTransform(31.8,-31.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcAAIA5AA");
	this.shape_78.setTransform(34.7,-69.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACuIAAlb");
	this.shape_79.setTransform(78.5,-31.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcAAIA5AA");
	this.shape_80.setTransform(34.7,6.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhkAAIDJAA");
	this.shape_81.setTransform(47.7,-69.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhkAAIDJAA");
	this.shape_82.setTransform(47.7,6.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAAIAbAA");
	this.shape_83.setTransform(30.3,-69.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOAAIgbAA");
	this.shape_84.setTransform(30.3,6.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABuAAIjbAA");
	this.shape_85.setTransform(46.5,39.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAHIAAgN");
	this.shape_86.setTransform(57.5,39.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHg1QgNA1AAA2");
	this.shape_87.setTransform(58.2,12.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhpIAADT");
	this.shape_88.setTransform(57.5,28.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_89.setTransform(59,7.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAwAiIhfhD");
	this.shape_90.setTransform(17.5,10.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AikBNIFJiZ");
	this.shape_91.setTransform(42.5,-76.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASgDQgSAAgRAH");
	this.shape_92.setTransform(60.8,-85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABCB8QgBhKgjhBQgihCg9gq");
	this.shape_93.setTransform(28.9,26.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAUIAAgn");
	this.shape_94.setTransform(57.5,81.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhOAAICdAA");
	this.shape_95.setTransform(49.6,83.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAoIAAhP");
	this.shape_96.setTransform(57.5,44.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_97.setTransform(35.6,40.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_98.setTransform(35.6,39.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgegeQAAAYASATQASASAZAA");
	this.shape_99.setTransform(38.7,80.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAC5IAAlx");
	this.shape_100.setTransform(35.6,59);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgjIhHBH");
	this.shape_101.setTransform(106.9,-18.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACXBtQh0ibi5g+");
	this.shape_102.setTransform(83.7,-61.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgdIAAA7");
	this.shape_103.setTransform(80,13.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMA0QgIg4gPgv");
	this.shape_104.setTransform(109.1,-27.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAp");
	this.shape_105.setTransform(76.7,-3.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAmQgHgogWgj");
	this.shape_106.setTransform(78.2,2.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABABIgCgB");
	this.shape_107.setTransform(80.2,21.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAMIAAgX");
	this.shape_108.setTransform(88.4,33.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAVIAAgp");
	this.shape_109.setTransform(80,18.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAYIAAgw");
	this.shape_110.setTransform(88.5,37.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgHIgLAP");
	this.shape_111.setTransform(79.1,-29);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAHIAAgM");
	this.shape_112.setTransform(88.5,40.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgFIAAAM");
	this.shape_113.setTransform(111.1,40.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_114.setTransform(79.7,6.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_115.setTransform(111.1,6.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAJIgLgR");
	this.shape_116.setTransform(76,-2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAEIgBgH");
	this.shape_117.setTransform(110.4,-22.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAEIgBgG");
	this.shape_118.setTransform(107.8,-33.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAGIgHgK");
	this.shape_119.setTransform(99.1,-50.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABjhiIjFDF");
	this.shape_120.setTransform(89.6,-39.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAkIAAhH");
	this.shape_121.setTransform(88.5,44.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAi0IAAFp");
	this.shape_122.setTransform(111.1,59.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABSAAIijAA");
	this.shape_123.setTransform(96.7,83.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAUIAAgn");
	this.shape_124.setTransform(88.5,81.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgeAfQAbAAAQgSQASgRAAga");
	this.shape_125.setTransform(108,80.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACKgbQiPAAiEA3");
	this.shape_126.setTransform(25.9,-72.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAqQAAgqgFgp");
	this.shape_127.setTransform(110.8,-17.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhwAAIDhAA");
	this.shape_128.setTransform(99.8,41.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAwAA");
	this.shape_129.setTransform(108.6,6.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_130.setTransform(80,6.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApBPQgchTg1hK");
	this.shape_131.setTransform(103.6,-41.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhjIAADH");
	this.shape_132.setTransform(111.1,-3.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAPIgBgd");
	this.shape_133.setTransform(79.9,8.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgCAA");
	this.shape_134.setTransform(80.2,16.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZAAIgwAA");
	this.shape_135.setTransform(108.6,16.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhzIAADm");
	this.shape_136.setTransform(111.1,28.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAtIAAhZ");
	this.shape_137.setTransform(111.1,11.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_138.setTransform(80,16.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_139.setTransform(111.1,16.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AheBfIC9i9");
	this.shape_140.setTransform(98.2,-24.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgSQgGASAGAT");
	this.shape_141.setTransform(80.1,-3.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAoASQgBgPgMgKQgMgKgPAAQgPAAgLAKQgMAKgBAP");
	this.shape_142.setTransform(95.6,-16.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhQAAIChAA");
	this.shape_143.setTransform(119.2,10.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhsAAIDZAA");
	this.shape_144.setTransform(69.1,10.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AimAAIFNAA");
	this.shape_145.setTransform(0,10.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgNQgpAAgeAb");
	this.shape_146.setTransform(-20.2,-72.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADDAAImFAA");
	this.shape_147.setTransform(2.9,-73.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgegJQAcATAhAA");
	this.shape_148.setTransform(-19.7,9.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAiAPQgbgagogD");
	this.shape_149.setTransform(72,-72);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAIIgPgP");
	this.shape_150.setTransform(76.1,-69.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB+B8Ij7j3");
	this.shape_151.setTransform(116.6,-29.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAlQAAgqgdgf");
	this.shape_152.setTransform(130.7,-13.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABOIAAib");
	this.shape_153.setTransform(132.3,-2.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgYAZQAVAAAOgOQAOgPAAgU");
	this.shape_154.setTransform(129.8,7.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_155.setTransform(103.5,-1.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAKIATgT");
	this.shape_156.setTransform(102.3,-0.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgJIATAT");
	this.shape_157.setTransform(99.6,-0.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFgFIALAL");
	this.shape_158.setTransform(104.4,-0.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_159.setTransform(98.4,-1.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAKIATgT");
	this.shape_160.setTransform(97.2,-0.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgJIASAT");
	this.shape_161.setTransform(94.4,-0.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_162.setTransform(93.2,-1.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAKIATgT");
	this.shape_163.setTransform(92,-0.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgJIATAT");
	this.shape_164.setTransform(89.3,-0.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_165.setTransform(88,-1.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIAKIARgT");
	this.shape_166.setTransform(86.8,-0.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIgJIARAT");
	this.shape_167.setTransform(84.1,-0.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_168.setTransform(82.9,-1.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAGIALgL");
	this.shape_169.setTransform(82,-0.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAMIAJgX");
	this.shape_170.setTransform(98.8,27.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgEIAXAJ");
	this.shape_171.setTransform(96.5,28.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgEIAXAJ");
	this.shape_172.setTransform(101.3,26.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAOIALgb");
	this.shape_173.setTransform(103.7,25.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAMIAJgX");
	this.shape_174.setTransform(94,29.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAMIAJgX");
	this.shape_175.setTransform(89.2,31.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_176.setTransform(80.6,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABGIAAiL");
	this.shape_177.setTransform(80.3,-6.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah4AAIDxAA");
	this.shape_178.setTransform(93.2,-14.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_179.setTransform(88,-1.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_180.setTransform(93.2,-1.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_181.setTransform(98.4,-1.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAipIAAFT");
	this.shape_182.setTransform(80.3,17);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_183.setTransform(82.9,-1.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_184.setTransform(98,28.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAB0IAAjn");
	this.shape_185.setTransform(106.2,11.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_186.setTransform(88.4,32.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_187.setTransform(102.8,26.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_188.setTransform(93.2,30.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAKIAHgT");
	this.shape_189.setTransform(84.6,33);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGAAIANAA");
	this.shape_190.setTransform(105.5,23.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAAIAlAA");
	this.shape_191.setTransform(82.2,34);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAAIgHAA");
	this.shape_192.setTransform(105.8,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgEIAXAJ");
	this.shape_193.setTransform(87,32.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhFIAACL");
	this.shape_194.setTransform(106.2,-6.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_195.setTransform(103.5,-1.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAGIgLgL");
	this.shape_196.setTransform(104.3,-0.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgEIAXAJ");
	this.shape_197.setTransform(91.7,30.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_198.setTransform(80.6,0.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgFIgLAL");
	this.shape_199.setTransform(82,-0.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJAJIgRgR");
	this.shape_200.setTransform(84.1,-0.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAAIgHAA");
	this.shape_201.setTransform(105.8,0.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgIIgSAR");
	this.shape_202.setTransform(86.9,-0.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAKIgTgT");
	this.shape_203.setTransform(89.2,-0.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgJIgTAT");
	this.shape_204.setTransform(92,-0.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJAKIgSgT");
	this.shape_205.setTransform(94.4,-0.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgJIgTAT");
	this.shape_206.setTransform(97.2,-0.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAKIgTgT");
	this.shape_207.setTransform(99.6,-0.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgJIgTAT");
	this.shape_208.setTransform(102.3,-0.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKAAIAVAA");
	this.shape_209.setTransform(-25.4,-66.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAcQAQAAAHgOQAIgOgIgNQgHgOgQAA");
	this.shape_210.setTransform(-22.9,-64.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AALAAIgVAA");
	this.shape_211.setTransform(-25.4,-67.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOgbQgOAAgJAOQgIANAIAOQAJAOAOAA");
	this.shape_212.setTransform(-27.9,-64.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_213.setTransform(-26.5,-61.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJATQAKAAAGgJQAGgKgGgJQgGgKgKAA");
	this.shape_214.setTransform(-23.3,-64.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_215.setTransform(-24.3,-61.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgTQgKAAgGAKQgFAJAFAKQAGAJAKAA");
	this.shape_216.setTransform(-27.5,-64.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiGAAIEOAA");
	this.shape_217.setTransform(-71.9,7.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNgGIAbAN");
	this.shape_218.setTransform(12.6,-70);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOgGIgbAN");
	this.shape_219.setTransform(12.6,7.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFVAAIqpAA");
	this.shape_220.setTransform(-22.9,8.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABgAAIi/AA");
	this.shape_221.setTransform(-96.5,8.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AlUAAIKpAA");
	this.shape_222.setTransform(-22.9,-70.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACIAAIkOAA");
	this.shape_223.setTransform(-71.9,-12.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABaIAAiz");
	this.shape_224.setTransform(-57,-0.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhZIAACz");
	this.shape_225.setTransform(-86.8,-61.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhZIAACz");
	this.shape_226.setTransform(-86.8,-0.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_227.setTransform(-57.2,8.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgBAA");
	this.shape_228.setTransform(-57.2,-70.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_229.setTransform(-86.7,-70.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIACAA");
	this.shape_230.setTransform(-86.6,8.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgMIgDABIgDAEIAAABIgBACIgBAEIgCADIAAADIAAADIgBAE");
	this.shape_231.setTransform(-86.3,-10.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiGAAIEOAA");
	this.shape_232.setTransform(-71.9,-50.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEANIACgBIABgBIABgBIAAAAIABgDIABgCIABgCIACgLIAAgE");
	this.shape_233.setTransform(-57.6,-51.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABaIAAiz");
	this.shape_234.setTransform(-57,-61.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgYIAAAx");
	this.shape_235.setTransform(-67.7,-28.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAAIAPAA");
	this.shape_236.setTransform(-66.9,-26.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgQIAAAg");
	this.shape_237.setTransform(-72.7,-29.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAAIAPAA");
	this.shape_238.setTransform(-71.9,-27.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAQIAAgg");
	this.shape_239.setTransform(-71.1,-29.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgQAAIAhAA");
	this.shape_240.setTransform(-69.4,-31.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgIIAAAQ");
	this.shape_241.setTransform(-77.7,-32);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgYAAIAxAA");
	this.shape_242.setTransform(-75.2,-31.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAhIAAhC");
	this.shape_243.setTransform(-66.1,-29.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA6AAIhzAA");
	this.shape_244.setTransform(-71.9,-32.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABFAAQAAgcgUgUQgVgUgcAAQgcAAgUAUQgUAUAAAcQAAAcATAUQAUAVAeAAQAcAAAUgVQAUgUAAgcg");
	this.shape_245.setTransform(-41,-58.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACIAAIkOAA");
	this.shape_246.setTransform(-71.9,-70.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAGLIAAsV");
	this.shape_247.setTransform(-106.1,-31.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhfAAIC/AA");
	this.shape_248.setTransform(-96.5,-70.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Agdg9QAZgNAaAKQAbAJANAZQANAagKAaQgJAbgaANQgaAMgagJQgbgJgMgZQgNgaAJgaQAKgcAagMg");
	this.shape_249.setTransform(-41,-4.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgdhfIA7AAIAAC/");
	this.shape_250.setTransform(65.6,-75.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AghCcIA1AAIANgNIAAkeIgNgMIg1AA");
	this.shape_251.setTransform(91.8,64.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAiibIg0AAIgNAMIgCEhIAPAKIA0AA");
	this.shape_252.setTransform(54,64.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3C456A").s().p("ALzMnIBBAAIAAk5Ig9AAIAAiiIgdgHIgOASIgqAAIAAjpIjdAAQgEATgDAcQgDAhADAiIAAEKIhCAFIAAE2IBAgHIAFAxIiTAAQgdgCgWgUQgVgUgEgeIAAmZQgJg0gJgYQgOgkgbgeQg8hDhPgxIk/ACIhHgTIs+AAIADsVIM8AAQANgNAOgHQAVgLAZAAIF7AEQAzgQA0gGQAqgEAhABIDOhgIBPAAIAAB1QAXAAAWALQAWAMAOATQBJAhA9A1QA2AuAtBEQAZAkASAlID5D1QAOALAHAOQAMAVgBAXIAACXQAEATgJAQQgMAVgWAGIirAAIAAKdQgDAUgOAQQgPASgVAHIiqAEg");
	this.shape_253.setTransform(12.9,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.1,-86.4,240.4,171.1);


(lib.jaw8_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jawK_alpha0039();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.jaw7_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAEIAAgHIihAAIAAAH");
	this.shape.setTransform(107.8,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhshfIAEgCQAFgEgDgFIgCgDIgegQIAAgJIAegRIACgGIDtAAIAAE7IjyAAIgbgRIAAgIIAegRQAFgDgDgGIgCgCIgEgC");
	this.shape_1.setTransform(106.7,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJBQIAEgCQAFgEgDgFIgCgCIgdgRIAAgJIAZgOIAEgDQAFgDgDgFIgCgCIgdgRIAAgIIAdgRQAGgEgEgFIgCgCIgdgRIAAgJIAZgP");
	this.shape_2.setTransform(94.9,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgNIgZAOIAAAN");
	this.shape_3.setTransform(94.7,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgNIAAANIAZAO");
	this.shape_4.setTransform(94.7,56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANATIgZgPIAAgHIAZgP");
	this.shape_5.setTransform(94.5,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZgCIAAAFIAzAA");
	this.shape_6.setTransform(110.1,67.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAhgCQgEAGgIAAIg2AA");
	this.shape_7.setTransform(112.7,67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglBAIASAAIA5g5IAAgNIg5g5IgSAA");
	this.shape_8.setTransform(124,51.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgVIAAAr");
	this.shape_9.setTransform(93.4,51.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg/IAAB/");
	this.shape_10.setTransform(122,51.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_11.setTransform(95.8,65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_12.setTransform(95.8,59.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_13.setTransform(95.8,54.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_14.setTransform(95.8,48.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_15.setTransform(95.8,43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_16.setTransform(95.8,38.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_17.setTransform(112.7,67.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEgDIAJAH");
	this.shape_18.setTransform(96,62);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFgDIgJAH");
	this.shape_19.setTransform(96,41.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_20.setTransform(95.6,45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_21.setTransform(95.6,57.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C456A").s().p("AgdClIAAgIIhzABIgbgQIAAgHIAfgWIABgFIgggTIAAgIIAZgQIgZgRIAAhYIAagPIgagPIAAgJIAXgRIAIgJIgegUIgBgHIAkgWIAdAAIABgKICgABIAAAJIArgBIAABgIASABIA4A3IABAPIg6A4IgRACIgCBYIgpAAIgGAHg");
	this.shape_22.setTransform(110.5,51.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgNIAAANIgZAO");
	this.shape_23.setTransform(92.1,56.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABuhfIgFgDQgBgBgBgBQgDgFAFgEIAegRIAAgIIgegRIgCgGIjtAAIAAE7IDxAAIAcgRIAAgIIgegRIgCgDQgDgFAFgEIAFgC");
	this.shape_24.setTransform(80,51.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMATIAZgPIAAgHIgZgO");
	this.shape_25.setTransform(92.3,59.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIA+IgEgDIgCgCQgDgGAFgDIAcgRIAAgIIgcgSQgCgBAAgBQgDgFAFgDIAEgDIAYgNIAAgJIgYgOIgEgDQgCgBAAgCQgDgFAFgDIAEgD");
	this.shape_26.setTransform(91.9,51.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgNIAZAOIAAAN");
	this.shape_27.setTransform(92.1,46.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMATIAZgPIAAgHIgZgP");
	this.shape_28.setTransform(92.3,43.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmg/IgSAAIg5A5IAAAMIA5A6IASAA");
	this.shape_29.setTransform(62.7,51.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZgCIAAAFIAzAAIAAgF");
	this.shape_30.setTransform(76.6,67.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AghgDQADAGAJAAIA3AB");
	this.shape_31.setTransform(74.1,67.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAEIAAgHIihAAIAAAH");
	this.shape_32.setTransform(78.9,35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAp");
	this.shape_33.setTransform(93.4,51.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg/IAAB/");
	this.shape_34.setTransform(64.7,51.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAk");
	this.shape_35.setTransform(91,64.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAk");
	this.shape_36.setTransform(91,59.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAk");
	this.shape_37.setTransform(91,54.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAj");
	this.shape_38.setTransform(91,48.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_39.setTransform(91,43.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSIAAAl");
	this.shape_40.setTransform(91,38.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAEIgHgH");
	this.shape_41.setTransform(90.7,41.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAEIAHgI");
	this.shape_42.setTransform(90.7,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_43.setTransform(91.1,57.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_44.setTransform(91.1,45.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C456A").s().p("AgrClQgHAAgBgHIgrAAIAAhaIgVgCIg5g4IAAgLIA6g7IASgBIABheIAqAAIACgKICfABIABAIIAdAAIAjAVIgBAMIgeAQIACAJIAdARIgBAKIgXAQIAXANIABBbIgZAPIAYARIABAHIgbASIgCAKIAdARIgBAKIgcAPQg5gBg5AAIAAAIg");
	this.shape_45.setTransform(76.2,51.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgYIAAAx");
	this.shape_46.setTransform(-86.3,7.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAAIAPAA");
	this.shape_47.setTransform(-85.5,10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgPIAAAg");
	this.shape_48.setTransform(-91.3,6.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAAIAPAA");
	this.shape_49.setTransform(-90.5,8.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAARIAAgg");
	this.shape_50.setTransform(-89.7,6.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgQAAIAhAA");
	this.shape_51.setTransform(-88,5.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_52.setTransform(-96.3,4.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgYAAIAxAA");
	this.shape_53.setTransform(-93.8,5.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAhIAAhB");
	this.shape_54.setTransform(-84.7,6.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA6AAIhzAA");
	this.shape_55.setTransform(-90.5,3.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACugkQjPAQiMA5");
	this.shape_56.setTransform(17,-40.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAlxIAALj");
	this.shape_57.setTransform(9.4,6.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgvIAqAWIACAvIgpAaIgqgXIgCgvg");
	this.shape_58.setTransform(-4.1,27.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQAAQAAAhgXAYQgXAXgiAAQggAAgYgXQgXgYAAghQAAghAXgXQAYgXAgAAQAiAAAXAXQAXAXAAAhg");
	this.shape_59.setTransform(-4.2,27);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIMi3IAAC4QghC5icAAInyAAQhUgGgxgyIjGjMQgdg3AAg4");
	this.shape_60.setTransform(2.1,25.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIMC3IAAi3Qghi5icAAInyAAQhUAGgxAyIjGDMQgdA3AAA4");
	this.shape_61.setTransform(2.1,-11.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgbgkIAsgGIAdAlIgSAqIgtAGIgcglg");
	this.shape_62.setTransform(97.8,-17.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AheBPIC9id");
	this.shape_63.setTransform(90,-27.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXjjIjCCdID2ErIC9ikg");
	this.shape_64.setTransform(93.3,-22.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA3g3QAXAXAAAgQAAAggXAXQgWAYghAAQggAAgXgYQgXgXAAggQAAggAXgXQAXgXAgAAQAhAAAWAXg");
	this.shape_65.setTransform(97.9,-17.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxC/IBjl9");
	this.shape_66.setTransform(68.6,-23.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhXIAACu");
	this.shape_67.setTransform(45.2,-35.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKAKAAAOQAAAOgKAKQgKAMgPAAQgOAAgKgMQgKgKAAgOQAAgOAKgKQAKgLAOAAQAPAAAKALg");
	this.shape_68.setTransform(65.2,-31.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AibABIE3gB");
	this.shape_69.setTransform(47.9,-44.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqCkIBVlH");
	this.shape_70.setTransform(59.2,-27.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhbBQIC3ig");
	this.shape_71.setTransform(107.3,-7.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgyApIBlhR");
	this.shape_72.setTransform(80.2,-8.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMAMIAZgX");
	this.shape_73.setTransform(90,-4.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAjSIAAGl");
	this.shape_74.setTransform(57.2,47.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB4jdQA8A6B7ANIA5AAIAAAkIgvAAQgVgFgEAVIAAERQgCAQAVgCQAVgBAdABIAAAhIkwAAImcjx");
	this.shape_75.setTransform(42.8,46.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiAgRQB0gPCMA1");
	this.shape_76.setTransform(71,-42.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACAnlQBLA6BRCTQBOB9AMCZIADGzIg+A1IigAAIAAgdIAvAAQAVgDgEgPQABkBgBgQQgBgQgMADIgzAAQAJg/gFgtQgGgsgKhAIg1hkQgzg7hOgWQgQgHh1ADQh9ADgKgCQgfgEgmAk");
	this.shape_77.setTransform(92.4,20.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhpBpQARgygEg5QgCgpAdgeQAbgcAmgDQAmgDAfAcQAgAdAEAuIABBs");
	this.shape_78.setTransform(44.9,-55.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjVCKQA+jMAzhKQAjgTAYABQAZACATAZIDTEi");
	this.shape_79.setTransform(-17.2,-46.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgwIAqAXIACAwIgpAaIgqgXIgCgwg");
	this.shape_80.setTransform(-4.1,-13.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQAAQAAAhgXAYQgXAYgiAAQggAAgYgYQgXgYAAghQAAghAXgXQAYgXAgAAQAiAAAXAXQAXAXAAAhg");
	this.shape_81.setTransform(-4.2,-13.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiVBpIAAi5QAAgYAjAAIDsAAQAZACACAZQACAbgCCZ");
	this.shape_82.setTransform(-90.5,35.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAUAUAAAcQAAAdgUAUQgUAUgdAAQgbAAgVgUQgUgUAAgdQAAgcAUgUQAVgUAbAAQAdAAAUAUg");
	this.shape_83.setTransform(-61.3,32.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgVgUQgUgVAAgcQAAgcAUgUQAVgUAbAAQAdAAAUAUg");
	this.shape_84.setTransform(-61.3,-20);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiVhnIAAC3QAAAYAjAAIDsAAQAZgBACgaQACgbgCiZ");
	this.shape_85.setTransform(-90.5,-22.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AJIlyIgegVIxxAAIAAMPIRxAAIAZgN");
	this.shape_86.setTransform(-66,6.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3C456A").s().p("AHDKjImnj+IiGACIgiAWIxsgBIAAsQINagDQAxisBBhsQAwgfAnAaQAZASApBBIByCcQC9hGCbgBQAfhogOgYIAOgoIAoghIA1gNQBKAOANBRQADACgBA5QAAA5ACADQABACAbgBIBBACQBqAJBPAeQAHACATgSQAggcAQgKQAJAFAhAqIBJBeQARAVASAPQB3BfBQDMQAjBcAHB1QAFBDgCBvIgDDhQgeAbgdAdIieAAIgDgbQAHgCAsgBQANAAABgOQgCgrAFjkQABgdgLAMIg8gBIAIhQIgSiKIg2hnQhDhEhKgOIj7ACQg3ABgVAgIABECIA9AjQAZARA5AKQArAIApgBQAiACgSAAIgCAkIgxgCIgUAIIgBEeQAEAOALgCIA4AAIgCAjg");
	this.shape_87.setTransform(2.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-66.7,256.5,136.6);


(lib.jaw7_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jawF_alpha0039();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.jaw6b_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCBEIAFAAIAAiHIgFAA");
	this.shape.setTransform(199.9,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQhaIACADQADAFAEgDQACgBAAgBIAOgZIAHAAIAOAZQACADADAAIAADFIkFAAIAAjJIANgYIAHAAIAOAZQADAFAFgDQABgBABgBIABgD");
	this.shape_1.setTransform(186.4,74.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhCAIIACADQADAEAEgCQABgBABgBIACgDIAMgVIAIAAIALAVIACADQADAEAFgCQABgBAAgBIAOgYIAHAAIAOAYQADAFAFgDQABgBAAgBIAPgYIAGAAIANAV");
	this.shape_2.setTransform(187.8,64.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgMgVIgLAA");
	this.shape_3.setTransform(190,64.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgLAAIgMAV");
	this.shape_4.setTransform(182.3,64.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPALIANgVIAGAAIAMAV");
	this.shape_5.setTransform(179.5,64.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgUIgFAAIAAAp");
	this.shape_6.setTransform(173.1,77.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAcQgFgDAAgHIAAgt");
	this.shape_7.setTransform(173,79.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag0gfIAAAPIAvAvIAKAAIAwgvIAAgP");
	this.shape_8.setTransform(186.2,88.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_9.setTransform(186.2,63.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1AAIhpAA");
	this.shape_10.setTransform(186.2,87.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_11.setTransform(175,65.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_12.setTransform(179.5,65.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_13.setTransform(183.9,65.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_14.setTransform(188.4,65.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_15.setTransform(192.9,65.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_16.setTransform(197.3,65.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_17.setTransform(173.1,79.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgCIgFAG");
	this.shape_18.setTransform(177.5,65.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAEIgHgG");
	this.shape_19.setTransform(194.8,65.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_20.setTransform(191.2,65.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_21.setTransform(181.2,65.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C456A").s().p("AgJCQIgvgwIgBgPIhJgBIgBgjIgGgEIAAhAIAHgBIgBhfIAOgXIAFgBIASAbIAFAAIAQgaIAHAAIANAVIANgVIBKAAIANAVIAMgWIAIAAIAOAVIAHAGIARgaIAGAAIASAeIAAAYIAJABIgBCFIgHAAIAAAkIhQgBIgBAQIguAvg");
	this.shape_22.setTransform(186.5,77.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgLAAIgMgV");
	this.shape_23.setTransform(182.4,62.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQBcIACgEQABgCABAAQAEgDADAFIAOAYIAHAAIAOgYIAFgDIAAjEIkFAAIAADIIANAXIAHAAIAOgYIACgCQAFgDADAFIACAE");
	this.shape_24.setTransform(186.5,52.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPgJIANATIAFAAIANgT");
	this.shape_25.setTransform(179.5,62.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgygGIACgEIABgCQAGgCACAEIAOAYIAHAAIAPgYQABgBAAgBQAEgCADAEIAOAYIAHAAIAOgYQABgBABgBQAFgCACAEIADAE");
	this.shape_26.setTransform(186.2,62.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgMAVIgLAA");
	this.shape_27.setTransform(190,62.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgJIAMATIAGAAIAMgT");
	this.shape_28.setTransform(192.9,62.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AgIAAgPIgwgwIgKAAIgwAwIAAAP");
	this.shape_29.setTransform(186.2,37.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgUIgFAAIAAApIAFAA");
	this.shape_30.setTransform(173.1,49.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgbQgFADAAAHIAAAt");
	this.shape_31.setTransform(173.1,47.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCBDIAGAAIAAiFIgGAA");
	this.shape_32.setTransform(200,51.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_33.setTransform(186.2,63.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AAIhqAA");
	this.shape_34.setTransform(186.2,39.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_35.setTransform(175.1,61.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_36.setTransform(179.5,61.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_37.setTransform(184,61.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_38.setTransform(188.5,61.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_39.setTransform(192.9,61.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_40.setTransform(197.4,61.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAEIAFgH");
	this.shape_41.setTransform(194.9,61.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDgDIAGAH");
	this.shape_42.setTransform(177.6,61.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_43.setTransform(181.2,61.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_44.setTransform(191.2,61.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C456A").s().p("ABnCQIgMgZIgIABIgOAYIgJAAIgNgTIgLATIhMAAIgMgUIgOAUIgGAAIgPgXIgJgBIgOAYIgIAAIgNgXIABhfIgHgBIAAg8QAAgGAGgCIAAgiIBLgBIACgSIAvgvIAJABIAwAvIABAPIBPABIAAAjIAIABIAACGIgIAAIABAYIgSAdg");
	this.shape_45.setTransform(186.5,49);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah+hXIAACZQAAAWALAAIDnAAQAKAAABgWIAAiZ");
	this.shape_46.setTransform(29.3,38.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB/BYIAAiZQABgWgMAAIjnAAQgMAAABAWIAACZ");
	this.shape_47.setTransform(29.3,88.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABcgvIiIAAQgUAAgNAOQgOAOAAATQAAAUAOAOQANAOAUAAICIAA");
	this.shape_48.setTransform(91.4,46);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADYAwIl/AAQgUAAgOgOQgOgOAAgUQAAgSAOgOQAOgPAUAAIF/AA");
	this.shape_49.setTransform(103.8,81.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aj8hzQC1ClDtBCIBXAA");
	this.shape_50.setTransform(115.5,109.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFqpPIAARHQAAAlgaAaQgaAaglAAQgkAAgagaQgagaAAglIAAguQAAhJg0g0Qg0g0hJAAIlxAA");
	this.shape_51.setTransform(122,68.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjiDbIAmAAIAdgKQBMgaBBgxICLhpQA/guAlhFQAGgLAAgOIAAhqIgiAAIAAAtQAAALgKAAIj1AAQgLAAAAgLIAAgtIgQAAQgGAZgTATQgTASgaAF");
	this.shape_52.setTransform(180.6,98.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADig0IAABpIgiAAIAAguQAAgJgKAAIj1AAQgLAAAAAJIAAAuIgQAAQgIgjgfgTQgfgTgkAIQgPAEgNAI");
	this.shape_53.setTransform(180.7,45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgiA8IBFh3");
	this.shape_54.setTransform(182.3,26.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAoAAIgUgiIgnAAIgUAiIAUAjIAnAAg");
	this.shape_55.setTransform(170.4,21.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgoQgRASABAXQAAAYARARQARARAYAAIABAAQAYAAASgSQARgRgBgYQAAgYgSgRQgRgRgYAAQgYABgSARg");
	this.shape_56.setTransform(55.8,40.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIBFFIgXANIpKAAQgDgEgFAAIjoAAQgFAAgDAEIioAAIAAqjICoAAQADAEAFAAIDoAAQAFAAADgEIJKAAIAXAN");
	this.shape_57.setTransform(51.4,63.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAhAAQAAgJgHgHQgHgHgKAAIgSAAQgJAAgHAHQgHAHAAAJQAAAKAHAHQAHAHAJAAIAAgHQgGAAgFgFQgFgFAAgHQAAgGAFgEQAFgFAGAAIASAAQAHAAAFAFQAFAEAAAGQAAAHgFAFQgFAFgHAAIAAAHQAKAAAHgHQAHgHAAgKg");
	this.shape_58.setTransform(69.1,35.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AliC5IBWiUQAagsAzAAIFxAAQBIAAA1gzQA0g0AAhK");
	this.shape_59.setTransform(105.1,32);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIgjgUIgiAUIAAAnIAiAUIAjgUg");
	this.shape_60.setTransform(105.7,46);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgnIgiAUIAAAnIAiAUIAjgUIAAgng");
	this.shape_61.setTransform(130.4,46);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjAUIAAgnIgjgUIgiAUIAAAnIAiAUg");
	this.shape_62.setTransform(130.4,81.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQARASAAAZQAAAZgRASQgSASgaAAQgYAAgSgSQgSgSAAgZQAAgZASgSQASgRAYAAQAaAAASARg");
	this.shape_63.setTransform(130.4,81.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUg");
	this.shape_64.setTransform(130.5,81.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhGIAACN");
	this.shape_65.setTransform(180,37.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARAAIghAA");
	this.shape_66.setTransform(133.8,6.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAbAAIg1AA");
	this.shape_67.setTransform(138.1,6.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AATAAIglAA");
	this.shape_68.setTransform(159.8,6.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgKIhFAV");
	this.shape_69.setTransform(128.6,7.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1AXQgDgVgSgNQgRgNgWACQgQACgMAMQgMAKgFAQ");
	this.shape_70.setTransform(106.9,28.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMAAQAMADANgD");
	this.shape_71.setTransform(160.1,32.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcAVIg3gp");
	this.shape_72.setTransform(183,18.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAGIgPgL");
	this.shape_73.setTransform(179.5,15.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAagcQgMgHgOADQgNADgHANQgHAMADAMQAEAOAMAIQAKAGANgC");
	this.shape_74.setTransform(137.9,16.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZAZIgxgx");
	this.shape_75.setTransform(138,9.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABCBCIiDiD");
	this.shape_76.setTransform(131.7,15.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJgCIgRAF");
	this.shape_77.setTransform(124.2,9.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgrgVQAAASANAMQANANARAAQASAAANgNQANgMAAgS");
	this.shape_78.setTransform(170.4,36.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_79.setTransform(174.9,33.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXALQgXgMgWgI");
	this.shape_80.setTransform(168.4,9.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgIIAAAR");
	this.shape_81.setTransform(166,33.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgJIAAAU");
	this.shape_82.setTransform(166,9.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAWAHIgrgN");
	this.shape_83.setTransform(163.9,7.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag7hSIB3Cl");
	this.shape_84.setTransform(129.3,17.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEADIgHgF");
	this.shape_85.setTransform(178.3,14.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFgBIgJAD");
	this.shape_86.setTransform(122.8,9.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACghjQixBFiOCC");
	this.shape_87.setTransform(106.2,19.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAiAaIhDgz");
	this.shape_88.setTransform(189.2,23);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAyA6QglhEg+gv");
	this.shape_89.setTransform(197.7,31.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADANQAAgOgFgL");
	this.shape_90.setTransform(203,38.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQARATAAAYQAAAZgRASQgSASgaAAQgYAAgSgSQgSgSAAgZQAAgYASgTQASgRAYAAQAaAAASARg");
	this.shape_91.setTransform(105.7,46);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_92.setTransform(105.7,46);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApgpQASARAAAYQAAAYgSARQgQASgZAAQgYAAgQgSQgSgRAAgYQAAgYASgRQAQgRAYAAQAZAAAQARg");
	this.shape_93.setTransform(55.8,86.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgdgdQgMANAAAQQAAASAMAMQANAMAQAAQASAAAMgMQAMgNAAgRQAAgQgMgNQgMgMgSAAQgQAAgNAMg");
	this.shape_94.setTransform(170.4,106.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag0gRQAGAVATALQATAMAUgFQAQgEALgMQAMgMACgQ");
	this.shape_95.setTransform(106.9,98.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAHQAAgHgCgG");
	this.shape_96.setTransform(158.3,110.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAHQACgGAAgH");
	this.shape_97.setTransform(158.3,111.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPghQgOgCgKAHQgMAIgDAOQgDANAIAMQAIAMANACQANADALgH");
	this.shape_98.setTransform(137.9,111.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYgXQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKg");
	this.shape_99.setTransform(170.4,106.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgVgBQAVAGAWgE");
	this.shape_100.setTransform(162.4,83.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAi6IAAF1");
	this.shape_101.setTransform(160.2,102);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgEIATAJ");
	this.shape_102.setTransform(159.2,82.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhIAAICRAA");
	this.shape_103.setTransform(118.1,50.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABJAAIiRAA");
	this.shape_104.setTransform(118.1,41.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABYAsQAAglgagYQgZgaglAAQgkAAgZAaQgaAZAAAk");
	this.shape_105.setTransform(149.3,4.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_106.setTransform(140.5,11.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglAWQAXAAAUgMQAVgLALgU");
	this.shape_107.setTransform(65.8,52.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgRAAIAjAA");
	this.shape_108.setTransform(60.2,54.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAshXQgkAAgZAaQgaAZAAAkQAAAlAaAZQAZAaAkAA");
	this.shape_109.setTransform(54,63.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_110.setTransform(60.2,72.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmAWQgZgrgyAA");
	this.shape_111.setTransform(65.8,74.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArBKIhViT");
	this.shape_112.setTransform(73.9,84.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglgVQAZArAyAA");
	this.shape_113.setTransform(82,94);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASg");
	this.shape_114.setTransform(170.4,21.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_115.setTransform(170.4,21.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABuIAAjb");
	this.shape_116.setTransform(177.9,21.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABXAAIisAA");
	this.shape_117.setTransform(169.2,10.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAAIgXAA");
	this.shape_118.setTransform(159.3,32.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_119.setTransform(160.5,32);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_120.setTransform(160.5,10.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAAIAXAA");
	this.shape_121.setTransform(159.3,10.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAABQABgBAAgB");
	this.shape_122.setTransform(160.4,11.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAFIAJgJ");
	this.shape_123.setTransform(159.9,11.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_124.setTransform(159.4,12.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAIIgPgP");
	this.shape_125.setTransform(160.2,13.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADQADgDgDgC");
	this.shape_126.setTransform(161.1,14.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAIIAPgP");
	this.shape_127.setTransform(160.2,15.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_128.setTransform(159.4,16.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAIIgPgP");
	this.shape_129.setTransform(160.2,17.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEQADgEgDgC");
	this.shape_130.setTransform(161.1,19.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAIIAPgP");
	this.shape_131.setTransform(160.2,20.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_132.setTransform(159.4,21.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAIIgPgP");
	this.shape_133.setTransform(160.2,22.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADQADgDgDgD");
	this.shape_134.setTransform(161.1,23.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAIIAPgP");
	this.shape_135.setTransform(160.2,24.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_136.setTransform(159.4,25.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAIIgPgP");
	this.shape_137.setTransform(160.2,26.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADQADgDgDgD");
	this.shape_138.setTransform(161,27.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAIIAPgP");
	this.shape_139.setTransform(160.2,29);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_140.setTransform(159.4,30.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAFIgJgJ");
	this.shape_141.setTransform(159.9,30.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFgEIgJAJ");
	this.shape_142.setTransform(159.9,11.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACQABgCAAgB");
	this.shape_143.setTransform(160.5,11);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_144.setTransform(160.6,10.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_145.setTransform(160.6,32);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACQAAgCgBgB");
	this.shape_146.setTransform(160.5,31.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEgEIAJAJ");
	this.shape_147.setTransform(159.9,30.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIgHIgPAP");
	this.shape_148.setTransform(160.2,29);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEQADgEgDgD");
	this.shape_149.setTransform(161.1,27.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgHIAPAP");
	this.shape_150.setTransform(160.2,26.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIgHIgPAP");
	this.shape_151.setTransform(160.2,24.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEQADgEgDgD");
	this.shape_152.setTransform(161.1,23.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgHIAPAP");
	this.shape_153.setTransform(160.2,22.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIgHIgPAP");
	this.shape_154.setTransform(160.2,20.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEQADgEgDgD");
	this.shape_155.setTransform(161.1,19);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgHIAPAP");
	this.shape_156.setTransform(160.2,17.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgHIAPAP");
	this.shape_157.setTransform(160.2,13.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIgHIgPAP");
	this.shape_158.setTransform(160.2,15.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEQADgEgDgD");
	this.shape_159.setTransform(161.1,14.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_160.setTransform(159.4,30.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_161.setTransform(159.4,25.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_162.setTransform(159.4,21.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_163.setTransform(159.4,16.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_164.setTransform(159.4,12.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhVAAICsAA");
	this.shape_165.setTransform(169.2,32.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQARATAAAYQAAAZgRASQgSASgaAAQgYAAgSgSQgSgSAAgZQAAgYASgTQASgRAYAAQAaAAASARg");
	this.shape_166.setTransform(130.4,46);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgUgUAAgdQAAgcAUgUQAUgVAcAAQAdAAAUAVg");
	this.shape_167.setTransform(130.5,46);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3C456A").s().p("AG1JyQglgRgOgnIhTAAQhNgUhKghQhUgmhOg3Qg1gkg1gxInigBIgHgEIjvAAIgGAEIilAAIgBqiICmAAIAJAEIDsAAIAHgEIHlAAQBNhHBWg1QBXg0BYggQAngPAngKIBXABQAGgbAVgTQAYgVAhAAQAoAAAZAcQAQARAFAXIAkgCQAZAFAaAKQAYAKAVALIBGgBIABAtIClB8QAdAXAWAgQASAYAEAJQAJAQAHAXIgBBrIghAAIAAgvIgGgJIj5gCIgNAIIAAAwIgQAAQgEgWgQgRQgbgdgnAAQgbACgUAOIgEFzQATANAUACQApAGAegbQATgRAGgaIAQgEIAAAuIAJAPID0gEIANgIIAAgtIAjAAIAABtIgGAVQgIAXgRAUIgiAkQgcAfgkAaIiCBdQgfAVghARQgtAVgxAPIglACQgIAfgaARQgWAQgZAAQgUAAgWgKg");
	this.shape_168.setTransform(101.7,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,205.2,129.4);


(lib.jaw6_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCBEIAFAAIAAiHIgFAA");
	this.shape.setTransform(200.2,76.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQhaIACADQADAFAEgDQACgBAAgBIAOgZIAHAAIAOAZQACADADAAIAADFIkFAAIAAjJIANgYIAHAAIAOAZQADAFAFgDQABgBABgBIABgD");
	this.shape_1.setTransform(186.7,75.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhCAIIACADQADAEAEgCQABgBABgBIACgDIAMgVIAIAAIALAVIACADQADAEAFgCQABgBAAgBIAOgYIAHAAIAOAYQADAFAFgDQABgBAAgBIAPgYIAGAAIANAV");
	this.shape_2.setTransform(188,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgMgVIgLAA");
	this.shape_3.setTransform(190.2,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgLAAIgMAV");
	this.shape_4.setTransform(182.6,65.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPALIANgVIAGAAIAMAV");
	this.shape_5.setTransform(179.7,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgUIgFAAIAAAp");
	this.shape_6.setTransform(173.3,78.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAcQgFgDAAgHIAAgt");
	this.shape_7.setTransform(173.3,80.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag0gfIAAAPIAvAvIAKAAIAwgvIAAgP");
	this.shape_8.setTransform(186.4,89.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_9.setTransform(186.4,64.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1AAIhpAA");
	this.shape_10.setTransform(186.4,88);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_11.setTransform(175.3,66.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_12.setTransform(179.7,66.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_13.setTransform(184.2,66.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_14.setTransform(188.7,66.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_15.setTransform(193.1,66.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_16.setTransform(197.6,66.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_17.setTransform(173.3,80.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgCIgFAG");
	this.shape_18.setTransform(177.8,66.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAEIgHgG");
	this.shape_19.setTransform(195.1,66.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_20.setTransform(191.4,66);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_21.setTransform(181.4,66);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C456A").s().p("AgJCQIgvgwIgBgPIhJgBIgBgjIgGgEIAAhAIAHgBIgBhfIAOgXIAFgBIATAbIAEAAIAQgaIAHAAIANAVIANgVIBKAAIANAVIAMgWIAIAAIANAVIAIAGIARgaIAGAAIATAeIAAAYIAIABIgBCFIgHAAIAAAkIhQgBIgBAQIgtAvg");
	this.shape_22.setTransform(186.8,78.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgLAAIgMgV");
	this.shape_23.setTransform(182.6,63.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQBcIACgEQABgCABAAQAEgDADAFIAOAYIAHAAIAOgYIAFgDIAAjEIkFAAIAADIIANAXIAHAAIAOgYIACgCQAFgDADAFIACAE");
	this.shape_24.setTransform(186.7,53);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPgJIANATIAFAAIANgT");
	this.shape_25.setTransform(179.8,63.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgygGIACgEIABgCQAGgCACAEIAOAYIAHAAIAPgYQABgBAAgBQAEgCADAEIAOAYIAHAAIAOgYQABgBABgBQAFgCACAEIADAE");
	this.shape_26.setTransform(186.5,62.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgMAVIgLAA");
	this.shape_27.setTransform(190.3,63.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgJIAMATIAGAAIAMgT");
	this.shape_28.setTransform(193.2,63.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AgIAAgPIgwgwIgKAAIgwAwIAAAP");
	this.shape_29.setTransform(186.5,38.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgUIgFAAIAAApIAFAA");
	this.shape_30.setTransform(173.3,50.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgbQgFADAAAHIAAAt");
	this.shape_31.setTransform(173.3,48.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCBDIAGAAIAAiFIgGAA");
	this.shape_32.setTransform(200.2,52.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_33.setTransform(186.5,64.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AAIhqAA");
	this.shape_34.setTransform(186.5,40.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_35.setTransform(175.3,62.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_36.setTransform(179.8,62.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_37.setTransform(184.2,62.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_38.setTransform(188.7,62.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_39.setTransform(193.2,62.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_40.setTransform(197.6,62.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAEIAFgH");
	this.shape_41.setTransform(195.1,61.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDgDIAGAH");
	this.shape_42.setTransform(177.8,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_43.setTransform(181.5,62.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_44.setTransform(191.5,62.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C456A").s().p("ABnCQIgMgZIgIABIgOAYIgJAAIgNgTIgMATIhLAAIgMgUIgOAUIgHAAIgOgXIgIgBIgPAYIgIAAIgNgXIABhfIgHgBIAAg8QAAgGAHgCIAAgiIBKgBIABgSIAwgvIAJABIAwAvIABAPIBPABIAAAjIAIABIAACGIgHAAIAAAYIgSAdg");
	this.shape_45.setTransform(186.8,49.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAFQAJAAAAgJ");
	this.shape_46.setTransform(199.5,82);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB7AAIj1AA");
	this.shape_47.setTransform(186.7,82.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEgEQAAAJAJAA");
	this.shape_48.setTransform(173.8,82);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACGIAAkL");
	this.shape_49.setTransform(163.4,88.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah+hXIAACZQAAAWALAAIDnAAQANAAgCgWIAAiZ");
	this.shape_50.setTransform(29.2,38.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB/BYIAAiYQAAgWgLgBIjnAAQgLAEAAATIAACY");
	this.shape_51.setTransform(29.2,88.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB8ACQgEgDgEAAIjnAAQgFAAgDAD");
	this.shape_52.setTransform(29.2,97.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah7gBQADADAFAAIDnAAQAEAAAEgD");
	this.shape_53.setTransform(29.2,30.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYA8IguhuQgDgGAHgD");
	this.shape_54.setTransform(132.2,20.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkugFIJGAAIAXAL");
	this.shape_55.setTransform(72.3,30.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjAUIAAgnIgjgUIgiAUIAAAnIAiAUg");
	this.shape_56.setTransform(130.4,81.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgigTIAAAnIAiAUIAjgUIAAgnIgjgUg");
	this.shape_57.setTransform(130.4,46.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgnIgiAUIAAAnIAiAUIAjgUIAAgng");
	this.shape_58.setTransform(105.6,46.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABVFSIipAAIAAqjIClAA");
	this.shape_59.setTransform(8.5,63.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABMAzIAAguIgWAAQgQAAgRgDQgWgDgVgLQgegOgXgY");
	this.shape_60.setTransform(165.8,76.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ao1BQQA6AtBNAAIOvAAQAWAAAQgQQAPgPAAgWIAAjEIgiAAIAAAu");
	this.shape_61.setTransform(146.9,89.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEygFIgXALIpMAA");
	this.shape_62.setTransform(72,96.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AHGngQgkAAgaAaQgaAaAAAkIAAAvQAABJg0A0Qg0A0hJAAIlxAAQg0AAgZAsIhVCTQgZAsgzAAIgkAAQgkAAgaAaQgbAaAAAlQAAAkAbAaQAaAaAkAAIAkAAQAyAAAaAsIBVCVQAMAUAVAMQAVAMAXAAIJ7gBQAlAAAagaQAagaAAglIAAsSIgBADQAAgkgagaQgagaglAAg");
	this.shape_63.setTransform(103.9,48.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgQAUIAAAuIAhAAIAAhqQAAgNgGgM");
	this.shape_64.setTransform(201.5,43.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLgKIAAAsIgQAAQgIgigfgUQgfgTgjAJQgOACgOAK");
	this.shape_65.setTransform(165.6,47);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApgoQASAQAAAYQAAAZgSAQQgQASgZAAQgXAAgRgSQgSgQAAgZQAAgYASgQQARgSAXAAQAZAAAQASg");
	this.shape_66.setTransform(55.7,40.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aj8B2QA6g2CNhRIBbgzQAYgMAQgJIBYgcIBXAA");
	this.shape_67.setTransform(115.4,18.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgriYIAAEEQAAASANANQAMAOASAAQASAAANgOQANgNAAgSIAAjY");
	this.shape_68.setTransform(170.5,23.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOAAIgaAA");
	this.shape_69.setTransform(160.5,6.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgIIAFAR");
	this.shape_70.setTransform(163.9,25.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1AXQgDgWgSgMQgSgOgVADQgkAFgJAj");
	this.shape_71.setTransform(106.8,28.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfAaQARAIAQgGQARgGAJgQQAIgRgIgT");
	this.shape_72.setTransform(161.4,29.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAVIgpgo");
	this.shape_73.setTransform(137.5,8.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcAcIg3g3");
	this.shape_74.setTransform(127.9,11.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsAWQgrgagsgR");
	this.shape_75.setTransform(170.5,10.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAWAHIgqgN");
	this.shape_76.setTransform(164,7.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgwhCIBhCF");
	this.shape_77.setTransform(128.1,15.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AATANIglgZ");
	this.shape_78.setTransform(176.9,13.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOAaQAdgSAAgi");
	this.shape_79.setTransform(159.7,18.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAaQAAgigdgS");
	this.shape_80.setTransform(159.7,13.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AATAfQAAgqglgT");
	this.shape_81.setTransform(160.1,12.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAfQAlgTAAgq");
	this.shape_82.setTransform(160.1,19.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAUIAFgn");
	this.shape_83.setTransform(158.6,16.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADACIgFgD");
	this.shape_84.setTransform(158.5,14.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArBmIhVjL");
	this.shape_85.setTransform(161.9,13.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFgBIgKAD");
	this.shape_86.setTransform(157.1,3.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgyAWIBlgr");
	this.shape_87.setTransform(135.4,12.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgnARIBPgh");
	this.shape_88.setTransform(162.2,25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASg");
	this.shape_89.setTransform(130.4,81.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_90.setTransform(130.4,81.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAdgyIg5Bl");
	this.shape_91.setTransform(182.8,25.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhGIAACM");
	this.shape_92.setTransform(179.9,37.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAKIAKgT");
	this.shape_93.setTransform(179.3,31.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcAVIg3gp");
	this.shape_94.setTransform(182.9,18.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgKAA");
	this.shape_95.setTransform(179.3,44.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAGIgPgL");
	this.shape_96.setTransform(179.4,15.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWAAIAtAA");
	this.shape_97.setTransform(176.5,44.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEADIgHgF");
	this.shape_98.setTransform(178.2,14.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AheAAIC8AA");
	this.shape_99.setTransform(189.3,44.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFgEQgJAAAAAK");
	this.shape_100.setTransform(173.7,45.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAGQAAgKgJAA");
	this.shape_101.setTransform(199.3,45.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjAaIhEgz");
	this.shape_102.setTransform(189.2,23.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAyA6QglhEg+gv");
	this.shape_103.setTransform(197.6,31.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASg");
	this.shape_104.setTransform(105.6,46.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_105.setTransform(105.6,46.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApgoQASARAAAXQAAAZgSARQgQARgZAAQgXAAgRgRQgSgRAAgZQAAgXASgRQARgSAXAAQAZAAAQASg");
	this.shape_106.setTransform(55.7,86.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgCAA");
	this.shape_107.setTransform(41.8,30);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIACAA");
	this.shape_108.setTransform(16.7,30);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYguQgUAAgNANQgOAOAAATQAAAUAOANQANAOAUAA");
	this.shape_109.setTransform(84.4,46.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhIAAICRAA");
	this.shape_110.setTransform(118,50.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhEAAICIAA");
	this.shape_111.setTransform(93.7,50.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABEAAIiIAA");
	this.shape_112.setTransform(93.7,41.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABJAAIiRAA");
	this.shape_113.setTransform(118,41.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADAAAIl/AA");
	this.shape_114.setTransform(106,86.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ai/AAIF/AA");
	this.shape_115.setTransform(106,76.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYguQgUAAgNAOQgOANAAATQAAAUAOANQANAOAUAA");
	this.shape_116.setTransform(84.4,81.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASg");
	this.shape_117.setTransform(130.4,46.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_118.setTransform(130.4,46.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcgdQgNANAAAQQAAARANANQALAMARAAQASAAALgMQANgNAAgRQAAgQgNgNQgLgMgSAAQgRAAgLAMg");
	this.shape_119.setTransform(170.5,21);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYgXQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKg");
	this.shape_120.setTransform(170.5,21);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3C456A").s().p("Ag7HvQghgNgPgNIgKgDInhAAIgHgEIjvAAIgHAEIikAAIgCqgICigCIALADIDtABIAKgEIHiABQAmglApgbICahfQAcgQA8gdQAogUA4gOIBWAAQAEgQAHgJQAFgGAQgMQAagUAdAAQAlgBAgAkQAJgDAGgDIAPAjIAdAAQA3AQAfASIBQAwIgGAEICiB5QAcAYAXAdQAaAjAMAaIAAB3IgiABIAAguIgGgKIj8AAIgJAGIACAwIgRACQgFgVgQgSQgcgfgkABQgaAAgVAPIgEEDQAQASAeASQAQALAJACIAbAGIA3ADIABAwIAGAHID0ADQALAAADgEIACgHIAAgtIAigBIABC8QABAZgRATQgKAMgZADIu4ABIgCAAQghAAgmgOg");
	this.shape_121.setTransform(101.8,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,205.5,103.8);


(lib.jaw6_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jawR0039();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.jaw5_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACEgxIABCbIgNANIgIAAIgPgPIgIAAIgOAQIgIAAIgPgPIgHAAIgPAPIgIAAIgPgPIgHAAIgOAPIgIAAIgPgOIgHAAIgPAPIgIAAIgPgPIgHAAIgPAPIgIAAIgTgSIgBiWIAQAAQABAAABAAIAAgCIgBhI");
	this.shape.setTransform(210.4,77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEBAIAGAAIgBg2IgPAAQgBAAAAgBIgBgBIgBhH");
	this.shape_1.setTransform(223.2,71.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIhHIABCPIARAA");
	this.shape_2.setTransform(197.9,62.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIhHIABCPIgRAA");
	this.shape_3.setTransform(223.2,62.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiGAlQAHAAAFgGQAFgFAAgHIAAg1IDqgCIAAA1QABAIAEAEQAFAFAIAA");
	this.shape_4.setTransform(210.5,52);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACEAAIkHAB");
	this.shape_5.setTransform(210.4,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB1AAIjpAB");
	this.shape_6.setTransform(210.5,64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACHAAIkNAB");
	this.shape_7.setTransform(210.5,57.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C456A").s().p("AiEC7IgCiYIATAAIAAgXIgSAAIAAiOQAPgCABgNIAAg6IDpgDIAAA2QAAAUATgCIAACQIgRAAIAAAZIASAAIAAA0IgFAAIACBnIgQANIgGAAIgQgPIgHAAIgOAOIgKAAIgOgOIgGAAIgQAQIgIAAIgPgPIgGAAIgPAOIgIAAIgNgNIgMAAIgNAOIgGAAIgRgNIgGAAIgOAKIgGAGg");
	this.shape_8.setTransform(210.5,68.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABcguIiHAAQgbAAgOAXQgOAXAOAYQAOAXAbAAICHAA");
	this.shape_9.setTransform(91.4,55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADYAvIl/AAQgbAAgOgYQgOgXAOgXQAOgXAbAAIF/AA");
	this.shape_10.setTransform(103.7,90.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkojjQgMAUgUAMQgVAMgYAAIgjAAQgzAAgZAsQgaAsAaAsQALAUAVAMQAVAMAXAAIAjAAQA0AAAZArIBVCUQAZAsAzAAIJ5AA");
	this.shape_11.setTransform(99.4,82.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIAFFIgYAMIpFAAIAAieIgBgIIgDgEIgDgEIgEgBIjpAAIgEACIgBADIgEAIIgBAJIAACZIikAAIAAqhICkAAIAACaIACAMIAEAHIACACIABABIADAAIDnAAIAFgCIAEgFIACgHIAAiiIJFAAIAYAN");
	this.shape_12.setTransform(51.5,73.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgXQANAAAHAMQAHALgHAMQgHAMgNAAIAAgHQAKAAAEgJQAFgIgFgHQgFgIgJAAIgSAAQgJAAgFAIQgFAHAFAIQAEAJAKAAIAAAHQgOAAgGgMQgIgMAIgLQAGgMAOAAg");
	this.shape_13.setTransform(69.1,44.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFhi4QAABKgzAzQg0A0hJAAIlwAAQgzAAgZArIhWCU");
	this.shape_14.setTransform(105.1,41.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiXgHIBahZQAJgKAOAFICxBKQAKAEADAMQABALgHAHIhhBh");
	this.shape_15.setTransform(163.2,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AguBfIAsAAIASgCIASgHIAJgEIAEgIIAAio");
	this.shape_16.setTransform(203.2,39.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABZiDIAACDIADAGIAIAEIATAIIAUACIBJAAQAIAAAHAHQAGAHAAAIIAABaIgnAAIAAguIgLgLIj0AAIgLALIAAAuIgoAAIAAgoQAAgzgjgmQgiglgzgF");
	this.shape_17.setTransform(204.7,46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2BMQgJAAgGgGQgGgGAAgJIAAg7IgCgCIhUhF");
	this.shape_18.setTransform(218.9,41.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAiTIAAEo");
	this.shape_19.setTransform(198.5,39.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhIAYIBgBhQAOAOARgIQASgHAAgTIAAjm");
	this.shape_20.setTransform(165.4,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzAAIhlAA");
	this.shape_21.setTransform(175.8,42.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aj8hiQA1A/BSAAICjAAQAwAAAqgYIEYAAICZB/QAKAHgFANQgEALgMAAIxtAA");
	this.shape_22.setTransform(183.4,95.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA7gkQgnAAgfAWQgfASgQAh");
	this.shape_23.setTransform(164,46.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AD7h1IgnAGQkGA0jICx");
	this.shape_24.setTransform(115.7,27.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg6QgYAAgQARQgSARAAAYQAAAYARARQAQARAZABIABAAQAYgBARgRQARgRAAgYQAAgYgSgRQgRgRgYAAg");
	this.shape_25.setTransform(55.9,50.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAigTIAAAnIgiAUIgigUIAAgnIAigUg");
	this.shape_26.setTransform(130.4,90.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgigTIAigUIAiAUIAAAnIgiAUIgigUg");
	this.shape_27.setTransform(130.4,55.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgigTIAigUIAjAUIAAAnIgjAUIgigUg");
	this.shape_28.setTransform(105.7,55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAqgeQgdAAgWARQgXAQgJAc");
	this.shape_29.setTransform(145,12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_30.setTransform(140.4,20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABYAsQAAgxgsgaQgsgZgrAZQgsAaAAAx");
	this.shape_31.setTransform(149.2,14);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgrAsQAkAAAZgaQAagYAAgl");
	this.shape_32.setTransform(153.7,101.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABJAAIiRAA");
	this.shape_33.setTransform(118.1,50.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhIAAICRAA");
	this.shape_34.setTransform(118.1,60.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAGIIAAsP");
	this.shape_35.setTransform(158.1,57.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAB");
	this.shape_36.setTransform(157.7,15.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgDIgTAH");
	this.shape_37.setTransform(161,17.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAMIAAgX");
	this.shape_38.setTransform(135.7,29.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABABIgCgB");
	this.shape_39.setTransform(135.8,31.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAAIgXAA");
	this.shape_40.setTransform(137.1,31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAHIAAgN");
	this.shape_41.setTransform(132.6,27.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAAIgXAA");
	this.shape_42.setTransform(134,28.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACABIgCgC");
	this.shape_43.setTransform(132.7,28.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgBIADAD");
	this.shape_44.setTransform(132.2,26);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADADIgFgF");
	this.shape_45.setTransform(167.8,20.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgBIADAC");
	this.shape_46.setTransform(135.9,31.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxAyIBjhj");
	this.shape_47.setTransform(163,25.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADABIgFgB");
	this.shape_48.setTransform(158.2,15.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACABIgDgB");
	this.shape_49.setTransform(162.3,16.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqIhVBV");
	this.shape_50.setTransform(136.2,21.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIgCIgPAF");
	this.shape_51.setTransform(164.9,18.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAMIgXgX");
	this.shape_52.setTransform(166.9,19.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAKIgHgT");
	this.shape_53.setTransform(162.9,17.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIABAB");
	this.shape_54.setTransform(132.7,28.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgGIAAAN");
	this.shape_55.setTransform(132.6,27.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAKIgHgT");
	this.shape_56.setTransform(158.9,16.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgBIAFAD");
	this.shape_57.setTransform(132.2,25.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAAIAXAA");
	this.shape_58.setTransform(137.2,31.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAAIAXAA");
	this.shape_59.setTransform(134,28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAW");
	this.shape_60.setTransform(135.7,29.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_61.setTransform(157.7,15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDgJIAHAT");
	this.shape_62.setTransform(163,17.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAB");
	this.shape_63.setTransform(162.3,16.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAEIATgH");
	this.shape_64.setTransform(161,17);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDgJIAHAT");
	this.shape_65.setTransform(158.9,16.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAB");
	this.shape_66.setTransform(158.2,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAEIAPgG");
	this.shape_67.setTransform(164.9,18.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIgIIARAR");
	this.shape_68.setTransform(166.6,19.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAegdQAMAMAAARQAAARgMAMQgNANgRAAQgQAAgMgNQgNgMAAgRQAAgQANgNQAMgMAQAAQASAAAMAMg");
	this.shape_69.setTransform(177,30.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJAAIgSAA");
	this.shape_70.setTransform(169.8,42.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAnAJQgmgJgngH");
	this.shape_71.setTransform(177,17.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFADIgJgF");
	this.shape_72.setTransform(198,24.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AAIhrAA");
	this.shape_73.setTransform(163.5,42.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAVIAAgq");
	this.shape_74.setTransform(136.9,18.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAh6IAAD1");
	this.shape_75.setTransform(181.5,30.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXAOIgtgb");
	this.shape_76.setTransform(205.6,28.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcATIg3gl");
	this.shape_77.setTransform(210.7,31.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQAdQhLgihUgX");
	this.shape_78.setTransform(189.5,21);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_79.setTransform(181.2,42.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADABIgFgB");
	this.shape_80.setTransform(181.2,18);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOAIIgcgP");
	this.shape_81.setTransform(201.9,26.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAFIgSgJ");
	this.shape_82.setTransform(199.5,24.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKAKAAAOQAAAOgKALQgKAKgPAAQgNAAgLgKQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKg");
	this.shape_83.setTransform(177,30.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgRAZQAQgFAJgOQAKgNAAgR");
	this.shape_84.setTransform(117.8,38.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1ABQAAgTgNgPQgOgQgUgCQgTgCgRAMQgRAMgEAUQgEATAKASQAKARATAH");
	this.shape_85.setTransform(114.3,35.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHAAIAPAB");
	this.shape_86.setTransform(125,105.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABQIAAif");
	this.shape_87.setTransform(198.5,97.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah+AAID9AA");
	this.shape_88.setTransform(29.5,106.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB/AAIj9AA");
	this.shape_89.setTransform(29.5,39.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgfQAOAUgFAXQgFAYgUANQgUAOgXgFQgZgFgNgUQgOgVAFgXQAFgYAUgNQAVgOAWAFQAYAFAOAVg");
	this.shape_90.setTransform(55.9,96);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgRQgHARADAT");
	this.shape_91.setTransform(140.1,25.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIhEQAdADARAXQATAXgEAbQgEAdgWASQgXARgbgDQgdgEgSgWQgSgXAEgcQADgcAXgSQAXgSAbAEg");
	this.shape_92.setTransform(130.4,90.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxAxQgUAUgdAAQgcAAgUgUQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUg");
	this.shape_93.setTransform(105.7,55.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAeg9QAaAMAJAbQAKAbgMAZQgNAagbAKQgbAJgagNQgZgMgKgbQgJgbAMgaQANgZAbgKQAagJAaANg");
	this.shape_94.setTransform(130.4,55.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACBHIgsguIAAgKIBVhV");
	this.shape_95.setTransform(127.6,32.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3C456A").s().p("AyxiJIOJgCQAugrAkgaQAlgbA2geQBKgpBsgjQBAgVBMgPQAIgbAZgRQAUgOAZAAIBkhiIC/BMQANAEAAANQACAMgKAHIgtAvQBJAPBIAbQBAAXAoATQAtAVA1AhQBMAwBBA8IAAA7QAAADACAFQAGAKAKgBIASADIAYANIAABkIgogCIgCgrIgLgMIj0AAIgLAMIAAAoIgpAAIAAgvQgCgfgQgaQgQgbgdgRQgagQgegDIh9gCQgfADgbARQggAUgSAiIAAFqQAcAdAjAQQAsATAwgEICbADQAWgCAWgHQASgHAQgLIEWAAICdCAQAJAIgFAMQgDAJgLACI1VAAIgSALIvwACg");
	this.shape_96.setTransform(120.4,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.9,242.7,108.7);


(lib.jaw5_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jawJ0039();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,305);


(lib.jaw4_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jaw4_0040();
	this.instance.parent = this;
	this.instance.setTransform(-375,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-152.5,750,305);


(lib.jaw3_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiBhZIAACfIADAKIABADIACADIADADIABABIDvAAIABgBIAEgEIABgDIABgCIACgGIAAgEIABgDIAAic");
	this.shape.setTransform(-85.5,-25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACCBaIAAidIgBgDIAAgDIgCgHIgBgCIgCgDIgBgCIgDgCIjvAAIgDACIgBACIgCADIgBACIgDAKIAACg");
	this.shape_1.setTransform(-85.5,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AHzleIAAAOIpUAAIgDACIgCABIgEABIjsAAIgDgBIgDgBIgCgCIisAAIAAKvICsAAIACgCIADgBIADgBIDsAAIAEABIAFADIJUAAIAYgN");
	this.shape_2.setTransform(-63,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgiCXIAFgEIAFgDIAMgEIAHAAIDxAAIB7AzIABAAIAGgIIACgBIABABIACABIAIAOIAHAAIAIgOIACgBIACgBIACABIAJAPIAHAAIAIgOIACgBIACgBIACABIAJAPIAHAAIAIgOIACgBIACgBIABABIACABIAIAOIAHAAIAIgOIACgBIACgBIABABIACABIAIAOIAHAAIAKgPIACgBIABABIACABIAIAOIAHAAIAKgPIACgBIABABIACABIAIAOIAHAAIAIgOIACgBIACgBIACABIAJAPIAHAAIAIgOIACgBIACgBIACABIAJAPIAHAAIAIgOIACgBIACgBIABABIACABIAIAOIAHAAIAEgGIAAguIgFgEIgEgCIqUkRIiNgtIiGgTIh+ABIh7ATIh+An");
	this.shape_3.setTransform(49.3,-20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AqTCKIBbAeIB8AZIB+AGIB/gNIB6gfILQkmIAEgDIAFgDIAAgvIgEgGIgHAAIgIAPIgCABIgBAAIgCAAIgBgBIgJgPIgHAAIgIAPIgBABIgCAAIgCAAIgCgBIgIgPIgHAAIgIAPIgBABIgCAAIgCAAIgCgBIgIgPIgHAAIgIAPIgCABIgBAAIgCAAIgBgBIgJgPIgHAAIgIAPIgCABIgBAAIgCAAIgBgBIgJgPIgHAAIgIAPIgCABIgBAAIgCAAIgBgBIgJgPIgHAAIgIAPIgCABIgBAAIgCAAIgBgBIgJgPIgHAAIgIAPIgBABIgCAAIgCAAIgCgBIgIgPIgHAAIgIAPIgBABIgCAAIgCAAIgCgBIgIgPIgHAAIAAABIgGALIgCADIgCABIgBAAIgCAAIgBgBIgFgIIgBABIhzAwIgIACIjxABIgHgBIgMgDIgFgDIgFgE");
	this.shape_4.setTransform(49.3,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AinBAIAEAKIFMiJIgFgK");
	this.shape_5.setTransform(78.9,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACMAAIkXAA");
	this.shape_6.setTransform(101.2,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACMAAIkXAA");
	this.shape_7.setTransform(101.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABWIAAir");
	this.shape_8.setTransform(87.2,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAEIABACIABABIAAABIABgCIACgN");
	this.shape_9.setTransform(86.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aing/IAEgKIFMCJIgFAK");
	this.shape_10.setTransform(78.9,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIpjwIAAHhQAAAbgPAXQgMATgUAKQgWAMgVgBIqGAAQg2AAgYgtIhXiXQgdgwgxADIgkAAQg0AAgZgrQgNgXAAgYQAAg0AwgaQAWgMAUABIAkAAQA1AAAZgtIBXiYQAdgvAxADIKGAAQAsgCAaAkQAUAVAAAjg");
	this.shape_11.setTransform(-9.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_12.setTransform(-93.1,26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfgUQAEADAIAAIApAAQAKAIAAAMQAAANgKAFIgqAAQgJAAgCgO");
	this.shape_13.setTransform(-95.3,-26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_14.setTransform(-93.1,-26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfAVQAEgDAIAAIApAAQAKgIAAgMQAAgNgKgFIgqAAQgJAAgCAO");
	this.shape_15.setTransform(-95.3,26.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCBFC6").s().p("AAABMQgRgBgOgGIgBgCIAAgBIABgCIACAAQANAHAQgBQAZAAATgPIACgBIACABIAAACIgBACQgUARgbAAIAAAAgAg8AqIgCgBQgMgSAAgXQAAgUAJgQIACgCIACABIABABIAAACQgJAQAAASQAAAWALARIABACIgBABIgCABIAAgBgABEAbIgCgCIAAgBQAEgLAAgNQAAgcgVgVIAAgBIAAgCIACgBIACABQAWAVAAAfQAAANgEAMIgBACIgBAAIgBAAgAAng5QgRgNgWABQgSAAgPAIIgCABIgBgCIgBgCIACgBQAQgKATAAQAYABASANIABABIAAACIgCABIAAAAIgCAAg");
	this.shape_16.setTransform(-58.5,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_17.setTransform(-58.5,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BCBFC6").s().p("AgdBFIgCgBIAAgCIACgBIACAAQAMAGAPgBQAbABATgSIABgBIACABIABACIgBACQgUASgdABQgQgBgNgGgAg7AsIgBgBQgOgSAAgZQAAgTAJgRIACgBIACAAIABACIAAACQgJAPAAASQAAAXANASIAAABIgBACIgBABIgBgBgABEAaIgBgBIAAgCQADgLAAgMQAAgcgVgVIAAgBIAAgCIACgBIACABQAWAWAAAeQAAANgDALIgBACIgCAAIgBAAgAAng5QgRgNgWABQgSAAgPAIIgCABIgBgCIgBgCIACgBQAQgKATAAQAYABASANIABABIAAACIgCABIAAAAIgCAAg");
	this.shape_18.setTransform(-58.5,-23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgTAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_19.setTransform(-58.5,-23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKALgPAAQgNAAgLgLQgKgLAAgOQAAgNAKgLQALgLANAAQAPAAAKALg");
	this.shape_20.setTransform(17.5,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVg");
	this.shape_21.setTransform(17.6,18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSASQgRARgaAAQgZAAgSgRQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAARASg");
	this.shape_22.setTransform(17.6,18);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAUIAAAoIAjAVIAkgVg");
	this.shape_23.setTransform(17.6,18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKALgPAAQgNAAgLgLQgKgLAAgOQAAgNAKgLQALgLANAAQAPAAAKALg");
	this.shape_24.setTransform(-7.7,-18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_25.setTransform(-7.7,-18);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQASASAAAZQAAAagSASQgSASgaAAQgYAAgTgSQgSgSAAgaQAAgZASgSQATgRAYAAQAaAAASARg");
	this.shape_26.setTransform(-7.6,-18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAUIAAAoIAjAVIAkgVg");
	this.shape_27.setTransform(-7.6,-18);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKALgPAAQgNAAgLgLQgKgLAAgOQAAgNAKgLQALgLANAAQAPAAAKALg");
	this.shape_28.setTransform(17.5,-18);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVg");
	this.shape_29.setTransform(17.6,-18);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSASQgRASgaAAQgZAAgSgSQgSgSAAgaQAAgZASgSQASgRAZAAQAaAAARARg");
	this.shape_30.setTransform(17.6,-18);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAUIAAAoIAjAVIAkgVg");
	this.shape_31.setTransform(17.6,-18);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADdgvImIAAQgtgBgDAwQgBAtAxADIGIAA");
	this.shape_32.setTransform(-9.7,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgvIiNAAQgtgBgDAwQAAAtAxADICMAA");
	this.shape_33.setTransform(-22.2,-18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIARIgFAAQgNgEAAgNQAAgLANgEIAFgBIARAAIAFABQANADAAAMQAAANgNAEIgEAAIAAAHIAFAAQATgFAAgTQAAgLgJgHQgHgFgIAAIgSAAQgXgBgBAYQgBAWAXACIACAAg");
	this.shape_34.setTransform(-45,-28.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABMAAIiWAA");
	this.shape_35.setTransform(4.9,-22.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_36.setTransform(4.9,-13.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAABIAAgB");
	this.shape_37.setTransform(87.2,-2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAiGIAAEN");
	this.shape_38.setTransform(49.4,-20);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJAAIgQAA");
	this.shape_39.setTransform(83.1,-2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAB4IAAjw");
	this.shape_40.setTransform(56.3,-18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABOIAAib");
	this.shape_41.setTransform(87.2,-10);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAHIAAgN");
	this.shape_42.setTransform(87.2,-1.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_43.setTransform(85.6,-2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgcIAAA5");
	this.shape_44.setTransform(31.3,-36);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAGIgXgL");
	this.shape_45.setTransform(-11.9,-33.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3C456A").s().p("AikFZIoyAAIgHgFIjxAAIgIAFIiqAAIAAqtIADgDICmAAIAKAEIDuAAIAIgEIIxAAIAkgNIBwgfIA7gJIBggIIBaAEIBWALQBgARBOAjICFA4IAFgKIFLCKIgEAKIDJBTIAAAwIgFAGIgGAAIgKgQIgEAAIgKARIgGAAIgJgRIgEAAIgJAQIgIAAIgIgRIgGAAIgIARIgJAAIgJgQIgDAAIgLAPIgGAAIgJgPIgEAAIgLAPIgHAAIgHgPIgGAAIgJARIgJgCIgIgNIgCgCIgLAQIgHAAIgJgNIgEgDIgLARIgHgCIgKgQIgNASIgIgDIgKgPIgIAKIh7g0IjtAAQgaAAgJAMIAABsQAMALANAAID3AAIB6gzIAIAJIAEgDIAJgNIAGAAIAJAQIAFAAIAKgQIAGAAIAJAPIAGAAIAJgOIAIAAIAHAQIAFAAIAKgSIAGAAIAKARIAGAAIAIgQIAGAAIAKAQIAFAAIAKgQIAFAAIAKAPIAFAAIAIgPIAIAAIAJAQIAEAAIAKgQIAIAAIAIAQIAEAAIAKgQIAIAAIAJAPIADAAIAIgQIAIAAIADAFIAAAwIjHBVIAGALIlQCJIgDgLIjeBZQhRAiivAAQitAAiEg8g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-41.3,232.5,82.8);


(lib.jaw3_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jaw3_0040();
	this.instance.parent = this;
	this.instance.setTransform(-375,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-152.5,750,305);


(lib.jaw2_drawing_0degree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiEhwIABDKIANAXIAHAAIANgUIACgEIABgCIACgBIADAAIACABIAPAaIAIAAIAOgYIABgCIACgBIADAAIACABIABACIAOAYIAIAAIAOgYIABgCIACgBIACAAIACABIABACIAOAYIAIAAIAOgYIABgCIACgBIADAAIADADIAOAYIAHAAIANgUIACgEIABgCIACgBIADAAIACABIAPAaIAIAAIAOgYIACgCIADgBIAAjGg");
	this.shape.setTransform(100.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLALIALAAIAMgV");
	this.shape_1.setTransform(103.8,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgKIAMAVIALAA");
	this.shape_2.setTransform(96.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDhDIAHAAIAACHIgHAA");
	this.shape_3.setTransform(113.8,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AgIAAgPIgxgwIgKAAIgwAwIAAAP");
	this.shape_4.setTransform(99.9,-14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgVIgFAAIAAAqIAFAA");
	this.shape_5.setTransform(86.7,-2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_6.setTransform(111.2,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_7.setTransform(88.7,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_8.setTransform(99.9,-12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_9.setTransform(97.7,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgdAA");
	this.shape_10.setTransform(106.7,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgeAA");
	this.shape_11.setTransform(93.2,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgRAAIAjAA");
	this.shape_12.setTransform(99.9,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_13.setTransform(102.2,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C456A").s().p("ABpCRIgRgaIgEAAIgQAaIgIAAIgMgUIgPAUIhJAAIgNgVIgNAVIgHAAIgRgZIgGAAIgQAZIgIAAIgOgWIAAhhIgEAAIAAgpIAGgEIAAg9IBKAAIABgRIAxgvIAKAAIAwAwIAAAQIBSAAIAAAkIAIAAIAACJIgJAAIAAAbIgHADIgLAWg");
	this.shape_14.setTransform(100.3,-3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhsgxIDABRIAZAR");
	this.shape_15.setTransform(48.8,-48.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADWiFIAACFIAjASQAaACAzgBQAfAAAEAOIgBBlIgkAAIAAguQACgMgOACIj3AAQgUAAACAJIAAAtIgoAAIgGhKQgHgZgTgYQgQgRgLgHQgkgYgiACQgXgCgyABQgzABgMgBQg3gGgvBG");
	this.shape_16.setTransform(82.1,-14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxBhIA+AAIAlgVIAAis");
	this.shape_17.setTransform(92.8,-21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag5g1IBzBr");
	this.shape_18.setTransform(52,-24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzgzQAWAWAAAdQAAAegWAVQgVAWgeAAQgdAAgVgWQgWgVAAgeQAAgdAWgWQAVgVAdAAQAeAAAVAVg");
	this.shape_19.setTransform(-59.3,35.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA0gyQAVAVAAAdQAAAegVAVQgWAWgeAAQgdAAgVgWQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAWAWg");
	this.shape_20.setTransform(-59.4,-11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AlMh0QAGALAVAEIDpAAIAUgFQCehFgTANIEcgBQAiAigsAaQgtAbjfBTQluCbggADIhQAA");
	this.shape_21.setTransform(79.4,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACXIAAkt");
	this.shape_22.setTransform(87.9,-21.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACAIAAj/");
	this.shape_23.setTransform(70.7,-30.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhMCEIByAAQAgAAAHgiIAAjm");
	this.shape_24.setTransform(53.9,-31.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAfAhIg9hB");
	this.shape_25.setTransform(21.5,-31.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAWIAAgr");
	this.shape_26.setTransform(24.3,-42.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAWgVQAJAJAAAMQAAAMgJAKQgJAJgNAAQgMAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJg");
	this.shape_27.setTransform(65.8,-31.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhSIAACl");
	this.shape_28.setTransform(87.9,22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkDilQEjA1DVDDIAABGQAIALAHAC");
	this.shape_29.setTransform(88,-28.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqByIgsgwIABgKICsip");
	this.shape_30.setTransform(18.9,-32.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aiag6IBMhLQARgjArAXQAqAXB5AwQARAOgLATIjNDE");
	this.shape_31.setTransform(51.6,-46.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aj9B1QDNjHEugi");
	this.shape_32.setTransform(2.5,-33.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgVgkIAqAAIAWAkIgWAlIgqAAIgVglg");
	this.shape_33.setTransform(17.3,30.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAVQgVAVgdAAQgcAAgVgVQgUgVAAgdQAAgdAUgUQAVgVAcAAQAdAAAVAVg");
	this.shape_34.setTransform(17,30.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADagwImGAAQgtARAAAiQAAAjAwALIGCAA");
	this.shape_35.setTransform(-9.9,30.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_36.setTransform(3.7,-0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_37.setTransform(3.7,-10);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgwIiPAAQguARAAAiQAAAjAxALICGAA");
	this.shape_38.setTransform(-22.7,-5.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUgkIApAAIAVAkIgVAlIgpAAIgVglg");
	this.shape_39.setTransform(16.9,-4.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUQgVgVAAgdQAAgcAVgVQAVgUAcAAQAdAAAVAUg");
	this.shape_40.setTransform(16.6,-5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgVgkIAqAAIAWAkIgWAlIgqAAIgVglg");
	this.shape_41.setTransform(-8.4,-4.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUg");
	this.shape_42.setTransform(-8.7,-5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADsiwQgbALAAABImWAAQg6ACgNAhIhTCLQgaAwgoAEIg5AAQhSADAABZQgJBRBZALIA8AAQAoAFAdA0IBdCYQAVAjAugBIKrAAQA+gWAAg2IAAsuQgJhYhPAAQhPAAgQBYIAAA4QAABYhSA1QgYAPghANg");
	this.shape_43.setTransform(-9.6,-3.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiCBcIAAiiQAAgVAfAAIDOAAQAWABABAXQACAXgCCG");
	this.shape_44.setTransform(-86.4,37.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgRAYAAQAZAAASARg");
	this.shape_45.setTransform(-59.4,35.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASg");
	this.shape_46.setTransform(-59.4,-10.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiChaIAACfQAAAWAfAAIDOAAQAWgBABgXQACgXgCiG");
	this.shape_47.setTransform(-86.4,-12.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIMlEIgagSIv9AAIAAKtIQAAAIAVgM");
	this.shape_48.setTransform(-63.6,12.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3C456A").s().p("AyTIdIAAqsIOkAAQDgjbEegTQAchCAuABIBYhUIASgMIAeAGQB3A1AyAUQAFAFADAJQADALgGAKIgwAuQgDACAcAHQAtAMATAGQAmAHCJA9QA4AaAQAJQBCAnBoBSQAEADgDBFIAPANIAlAHIAGAHIAABmIgogBIABgwQAAgFgFgDQgNgGhwAGQhhgDgZACQgZACABAIIgBAsIgnAAIgHhNQglhchRAAQhtgCgwACQgtACgmA+IgBEoIAUAMQAyACAsgBIBVAAQAdAAA0gFICHg4IEhgBIALATQAJAKgbAgIlvCWIkmB0IhbgBIhFgFInWAAIgWAOg");
	this.shape_49.setTransform(1.1,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-63,236.2,110.7);


(lib.jaw2_apart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Assembly_jaw2_0040();
	this.instance.parent = this;
	this.instance.setTransform(-375,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-152.5,750,305);


(lib.jaw1_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADdgvImIAAQgugBgCAwQgBAuAxACIGIAA");
	this.shape.setTransform(-10.5,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgvIiMAAQgugBgCAwQgBAuAxACICMAA");
	this.shape_1.setTransform(-23.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJgQIgSAAIgEABQgNAEAAALQAAANANAEIAFAAIAAAHQgZgCAAgWQACgYAXABIASAAQAHAAAHAFQAKAHAAALQAAATgTAFIgGAAIAAgHIAFAAQANgEAAgNQAAgLgNgEg");
	this.shape_2.setTransform(-45.9,-8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLiDIAADrQAAAUgTAGQgUAHgLgNIhjhk");
	this.shape_3.setTransform(52.3,-24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aj/idIAoAIICBAmIB5A2IBxBEIBrBZIAAA6");
	this.shape_4.setTransform(85.9,-22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkDB8IBqhUICUhTIB9gwICMgf");
	this.shape_5.setTransform(1.5,-26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgggcIAGAHIABACIAAAOIACADIAXAAIADABIACABIAAADIAAAXIADADIAZAA");
	this.shape_6.setTransform(21.5,-25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAhAdIgYAAIgDgDIAAgYIgBgCIgCgBIgDgBIgWAAIgDgDIAAgOQAAgBgBgBIgBgCIgFgF");
	this.shape_7.setTransform(21.5,-25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABZhzIivCuQgEAFAEAFIAvAv");
	this.shape_8.setTransform(18,-25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AJQgpQAHgDgBgHIAAguIAqAAIAACUQAAATgWADIAAAAIhgAAQgKAAgLABIgmAEIg8gFIh2AAIhoAZIs0AA");
	this.shape_9.setTransform(52.3,43.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgwgBIAEADIBYAAIAFgD");
	this.shape_10.setTransform(98.6,53.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ai6gCIAAAGIF1AAIAAgH");
	this.shape_11.setTransform(50.5,53.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADGAcIgiAAIAAAGQgCAWgUgBIitAAQhvAIg3h1");
	this.shape_12.setTransform(64.6,30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEhDIgHAAIAACHIAHAA");
	this.shape_13.setTransform(84.7,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1geIAAAPIAxAvIAJAAIAxgvIAAgQ");
	this.shape_14.setTransform(98.6,46.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABKhxIAOAZIABACIACABIACAAIADgBIABgCIAOgZIAHAAIAOAYIAADLIkHAAIAAjHIACgBIACgCIAOgZIAIAAIAOAZIABACIACABIACAAIADgBIABgCIAOgZIAHAAIAPAZIABACIACABIADAAIACgBIABgCIAOgZIAHAAIAPAZIABACIABABIADAAIACgBIABgCIAOgZIAIAAIAOAZIABACIACABIADAAIACgBIABgCIAOgZg");
	this.shape_15.setTransform(98.3,32.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgLAAIgMAV");
	this.shape_16.setTransform(94.7,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgMgVIgLAA");
	this.shape_17.setTransform(102.4,22.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAVIAFAAIAAgpIgFAA");
	this.shape_18.setTransform(111.8,35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1gfIAAAPIAxAwIAJAAIAxgwIAAgP");
	this.shape_19.setTransform(98.6,16.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAIIgnAAIAAgP");
	this.shape_20.setTransform(91.3,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTAIIAnAAIAAgP");
	this.shape_21.setTransform(105.8,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhphwIAOAYIABACIACABIACAAIADgBIABgCIAOgYIAHAAIAPAYIABACIACABIADAAIACgBIABgCIACgDIAMgVIAHAAIAPAYIABACIABABIADAAIACgBIABgCIAOgYIAIAAIALAVIAEAFIACABIADAAIACgBIABgCIAOgYIAIAAIAOAYIABACIACABIACAAIADgBIABgCIAOgYIAHAAIAOAXIAADKIkHAAIAAjGIACgBIACgCIAOgYg");
	this.shape_22.setTransform(98.3,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgMgVIgLAA");
	this.shape_23.setTransform(102.4,-8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgLAAIgMAV");
	this.shape_24.setTransform(94.7,-8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgFIgLALIgmAA");
	this.shape_25.setTransform(105.3,15.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZAGIgnAAIgLgL");
	this.shape_26.setTransform(91.9,15.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWg4QAUAFAMANQAOAPgBAVIAAA7IgnAAIAAgwQABgGgHgD");
	this.shape_27.setTransform(113.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgUIAFAAIAAAqIgFAA");
	this.shape_28.setTransform(111.8,5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDhDIAACHIAHAA");
	this.shape_29.setTransform(84.7,3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADEBXIgfAAIAAgkQAAg6gkgiQgmgrg1gBIjpgB");
	this.shape_30.setTransform(64.4,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA9glIgNAAIgZAFIgXAKIgWAOIgSAPIgIAKIgMAV");
	this.shape_31.setTransform(51,-7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Aiag6IBbhbQAMgLAMAHIC0BLQANAFABALQABANgHAGIjIDI");
	this.shape_32.setTransform(50.1,-38.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AeIgYgYIgRAHIgCAAIgDAAIgBgDIgIgUIgFgCIgVAIIgCABIgDgBIgCgCIgJgWIgFgBIgFAC");
	this.shape_33.setTransform(49.6,-36.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgzgYIAGgDIAFADIAKAXIADABIACAAIAWgJIAEACIAIAUIACACIACABIADAAIARgHIATAT");
	this.shape_34.setTransform(49.3,-36.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFDjkQAygsAAhQIAAgvQgChVBbgFQBbAGAABUIAAMeQAAAfgRAVQgdApgtgDIqFAAQg3ABgXguIhXiXQgcgvgyACIgkAAQhVABgFhbQAGhbBUABIAkAAQAyAEAcgxIBXiWQAXgtA3AAIEOAAIADABIAiAAIADgBIBCAAQBHADA7g7g");
	this.shape_35.setTransform(-10.4,4.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AILlKIgYgNIpUAAQgDADgGABIjsAAQgFgBgDgDIisAAIAAKvICsAAQACgDAGgBIDsAAQAGABADADIJUAAIAYgN");
	this.shape_36.setTransform(-63.9,20.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BCBFC6").s().p("AAABLQgRAAgOgHIgCgBIAAgCIACgBIACAAQANAGAQAAQAZAAATgQIACAAIACABIAAACIgBABQgUARgbAAIAAAAgAg8AqIgCgBQgMgSAAgXQAAgUAKgRIACgBIABAAIACACIgBACQgJAPAAATQAAAVALARIABACIgBACIgCAAIAAAAgABEAbIgBgBIAAgCQADgLAAgNQAAgcgUgVIgBgBIABgCIABgBIACABQAWAWAAAeQAAAOgEALIgBACIgBAAIgBAAgAAog4QgRgNgXAAQgRAAgPAIIgCAAIgCgBIAAgCIABgCQARgIASAAQAZAAASAOIABACIAAABIgCABIAAAAIgCAAg");
	this.shape_37.setTransform(-59.5,43.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgTAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_38.setTransform(-59.5,43.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BCBFC6").s().p("AAABMQgQgBgOgGIgBgCIAAgBIABgCIACAAQANAHAPgBQAaAAASgQIACgBIACABIABACIgBACQgUASgcAAIAAAAgAg8ArIgBgBQgNgSAAgYQAAgTAJgRIACgBIABAAIACACIgBACQgIAPAAASQAAAWAMASIAAACIgBABIgBABIgBgBgABEAaIgBgCIAAgBQADgLAAgMQAAgcgUgVIgBgBIABgCIABgBIACABQAWAWAAAeQAAANgEALIgBACIgBAAIgBAAgAAng5QgRgNgWAAQgSABgPAIIgCAAIgBgBIgBgCIABgBQARgKATABQAYAAASAMIABACIAAACIgCABIAAAAIgCAAg");
	this.shape_39.setTransform(-59.5,-3.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgTAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_40.setTransform(-59.5,-3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARA1QARgFAKgOQALgPAAgSQAAgVgQgQQgQgQgXAAQgWAAgQAQQgQAQAAAVQAAASALAOQAKAPARAF");
	this.shape_41.setTransform(0.3,-18.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAPgKAKQgKALgPAAQgNAAgLgLQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKg");
	this.shape_42.setTransform(16.6,38.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAQAdAAAUAVg");
	this.shape_43.setTransform(16.6,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAagSASQgSASgZAAQgZAAgSgSQgSgSAAgaQAAgYASgSQASgSAZAAQAZAAASASg");
	this.shape_44.setTransform(16.6,38.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIAAAnIgjAVIgjgVIAAgoIAjgUg");
	this.shape_45.setTransform(16.6,38.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgjQAPAAAKALQAKALAAANQAAAPgKAKQgKALgPAAQgNAAgLgLQgKgKAAgPQAAgNAKgLQALgLANAAg");
	this.shape_46.setTransform(-8.6,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhFQAdAAAVAVQAUAUAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAg");
	this.shape_47.setTransform(-8.6,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg8QAaAAASARQARASAAAZQAAAagRASQgSARgaAAQgZAAgSgRQgSgSAAgaQAAgZASgSQASgRAZAAg");
	this.shape_48.setTransform(-8.6,2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAApIgjgVIAAgoIAjgUIAkAVIAAAng");
	this.shape_49.setTransform(-8.6,2.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKg");
	this.shape_50.setTransform(64.2,-23.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgjQAPAAAKALQAKALAAANQAAAPgKAKQgKALgPAAQgNAAgLgLQgKgKAAgPQAAgNAKgLQALgLANAAg");
	this.shape_51.setTransform(16.6,2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhFQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAg");
	this.shape_52.setTransform(16.6,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg8QAZAAASARQASASAAAZQAAAagSASQgSARgZAAQgZAAgSgRQgSgSAAgaQAAgZASgSQASgRAZAAg");
	this.shape_53.setTransform(16.6,2.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAApIgjgVIAAgoIAjgUIAjAVIAAAng");
	this.shape_54.setTransform(16.6,2.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAHAA");
	this.shape_55.setTransform(84.7,-3.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_56.setTransform(105.3,-7.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_57.setTransform(98.6,-9.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_58.setTransform(87.3,-7.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_59.setTransform(96.3,-7.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_60.setTransform(109.8,-7.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOAAIAdAA");
	this.shape_61.setTransform(100.8,-7.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_62.setTransform(98.6,15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_63.setTransform(91.8,-7.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_64.setTransform(87.3,23.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOAAIAdAA");
	this.shape_65.setTransform(100.8,23.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_66.setTransform(109.8,23.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_67.setTransform(91.8,23.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_68.setTransform(96.3,23.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_69.setTransform(98.6,45.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_70.setTransform(98.6,21.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAfAA");
	this.shape_71.setTransform(105.3,23.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgPIgDAHIgBAIIgBAQ");
	this.shape_72.setTransform(26.6,-28.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADADIgFgF");
	this.shape_73.setTransform(54.7,-33.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAp");
	this.shape_74.setTransform(-12.1,2.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_75.setTransform(4,6.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLAAIiVAA");
	this.shape_76.setTransform(4,-2.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADFAAImJAA");
	this.shape_77.setTransform(-8.1,42.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah/gMQAKABAGAHQAHAGgBALIDTAAQgDgXAZgC");
	this.shape_78.setTransform(98.6,52);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_79.setTransform(109.2,53.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhNIAACb");
	this.shape_80.setTransform(75.7,44.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhuIAADc");
	this.shape_81.setTransform(89.4,-17.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_82.setTransform(84.2,6.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhuIAADd");
	this.shape_83.setTransform(86.3,-19.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgrIAABX");
	this.shape_84.setTransform(105.9,-13.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAZIAAgx");
	this.shape_85.setTransform(23.3,-35.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACLIAAkV");
	this.shape_86.setTransform(77.3,-20.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACCIAAkD");
	this.shape_87.setTransform(68.7,-23.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_88.setTransform(68.4,-10.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgJIAAAEIABAGIACAGIACAD");
	this.shape_89.setTransform(-99.1,2.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAMIAEgBIACgEIABgBIABgCIAAgCIACgCIABgHIAAgD");
	this.shape_90.setTransform(-74,2.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIACAAIADAA");
	this.shape_91.setTransform(-98.5,48.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAAIATAA");
	this.shape_92.setTransform(-45.9,-10.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah1AAIDrAA");
	this.shape_93.setTransform(-86.4,3.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEATIAEgFIAEgKIABgDIAAgEIgCgEIgDgHIgEgE");
	this.shape_94.setTransform(-93.5,-6.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABOIAAib");
	this.shape_95.setTransform(-73.4,-6.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhNIAACb");
	this.shape_96.setTransform(-99.3,-6.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgHIgDAAIgDABIgBACIgDAEIgBAFIAAAD");
	this.shape_97.setTransform(-98.8,45.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhNIAACb");
	this.shape_98.setTransform(-99.3,46.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_99.setTransform(-96.1,48.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABPIAAid");
	this.shape_100.setTransform(-73.4,46.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_101.setTransform(-94,-6.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEATIAGgIIABgDIACgEIAAgEIgCgGIgDgHIgEgF");
	this.shape_102.setTransform(-93.5,46.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAAIgpAA");
	this.shape_103.setTransform(-96.1,44.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AB2AAIjrAA");
	this.shape_104.setTransform(-86.4,36.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAKIAAgEIgBgGIgCgGIgCgD");
	this.shape_105.setTransform(-73.7,37.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAAIgpAA");
	this.shape_106.setTransform(-96.1,-8.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgm");
	this.shape_107.setTransform(-94,46.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAAIgTAA");
	this.shape_108.setTransform(-45.9,-11.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgDAAIgCAA");
	this.shape_109.setTransform(-98.5,-8.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFgHIAAADIABAEIADAFIABACIADABIADAA");
	this.shape_110.setTransform(-98.8,-5.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgKIgEABIgBABIgCAEIgDAFIgBAHIAAAD");
	this.shape_111.setTransform(-98.8,37.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_112.setTransform(-96.1,-4.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3C456A").s().p("AyKIhIAAquICpAAIAMADIDqAAIANgFIHrgBIAvgnQBphbCag7QCag7A5ADQAWg2AygCQBBhEAUgSQATgSAGAHQCmBBAUAJQAVAKgLAYIgyAvIBRATQA8AQB4AzQB4AzCFB6IAABRQAJAAAQAKQAQAKAFAcIAABAIgpAAIAAAGIgHAAIAAA+IgmAAIAAARIgJAMIgpAAIgiAkIgLAAIgogjIglAAIgLgNIAAgQIgqAAIAAgkIgHAAIAAghIgjAAIAAguQABgWgbgwQgbgvhFgJIh6AAQhIAAguBHIAAEkIAdAqQAPAWAhAUQAfAVAwADIC2AAQAcAAgCgbIAhAAIAAhIIAGAAIAAgbIAGgDIANgaIAIAAIAKAWQAEAHAEAAQAFAAAAgDIANgZIAJAAIAMAWIANgVIBLAAIAOAWIAMgWIAKAAIAJAUIAFAEQAJAFgCgDIAPgaIAJAAIALAVIAABkIAIAAIAAAFIApAAIAACUQAAAUgTACIgjAAQgRAAABAZIg6AAIgGAEIhSAAIgHgEIg+gDQgBgWgOAAIg3AAIhmAZIgOgBIAAAIIl3AAIAAgJImxAAIgXAOIpTAAIgKgDIjtAAIgMAEgAgijbQgRAQABAXQAAASAKAOQAKAOARAGIAhAAQAQgGALgOQAKgOAAgSQAAgXgQgQQgQgQgWAAQgWAAgPAQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-55.5,234.5,111);


(lib.generic_square_button_bkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGCjIyLAAIAAlGISLAAg");
	this.shape.setTransform(2.5,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#112039").s().p("ApECjIAAlFISKAAIAAFFg");
	this.shape_1.setTransform(2.5,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.txt_RetrofitJaws = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8898A6").s().p("ABVA0QgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgdIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAvAAQAIAAANADIAHACIAFAEQAEAEABAGQACAGAAAIIAAADIgeAAIgBgGQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgDgCgJAAIghAAIgKABQgDAAgDADQgCACgBAEIgBALIAAALIABALQABAEACACQADADADABIAKABIAhAAQAIAAADgCIAEgEQABgCABgEIAAgDIgnAAIAAgTIBFAAIAAAbIgBAKIgBAHIgEAGIgGAEIgHACIgIABIgWABgAoKA0QgLAAgIgCQgKgDgEgCIgFgFIgEgHIgCgIIgBgKIAAgdIABgKIACgIIAEgHIAFgFQAEgCAKgDQAIgCALAAIAkAAQALAAAQACIAIADQAEABADADIAEAFQACADAAADQACAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgHAAIgiAAQgHAAgDACQgEABgCADQgCACgBAEIgBAJIAAAKIABAJQAAAEACACQADADADABIAJABIAqgBIAGgBQABgCABgDIABgHIAgAAIAAAJQgBAHgBAFQgCAGgEAEQgEAEgHADQgLACgIAAgALhAzIAAhlIBvAAIAAAYIhQAAIAAAQIBMAAIAAAUIhMAAIAAAQIBSAAIAAAZgAJvAzIAAhlIAfAAIAABLIBGAAIAAAagAHbAzIAAhlIBZAAQAKAAAGACQAHABAFADQAFADACAFQACAGAAAHQAAAGgBAFQgBAEgDACIgEAEIgGACIAAAAQAFAAADACQAEACACADQADADAAAEIABAKQAAAIgCAFQgCAGgFADQgEACgFACIgMABgAH5AaIA5AAQAFAAACgBQAEgCAAgEQAAgFgEgCQgCgBgFAAIg5AAgAH5gJIA3AAQAFAAACgCQACgCAAgEQAAgFgCgBQgCgCgFAAIg3AAgAGtAzIgJgSIg/AAIgJASIgjAAIA2hlIApAAIA4BlgAGYALIgVglIgTAlIAoAAgAC/AzIAAhlIBvAAIAAAYIhQAAIAAAQIBLAAIAAAUIhLAAIAAAQIBSAAIAAAZgAgaAzIg6hJIAAAAIAABJIggAAIAAhlIAxAAIA6BJIAAAAIAAhJIAfAAIAABlgAihAzIgKgSIg/AAIgJASIgjAAIA3hlIApAAIA3BlgAi2ALIgUglIgUAlIAoAAgAk/AzIAAgnIhCAAIAAAnIgfAAIAAhlIAfAAIAAAlIBCAAIAAglIAeAAIAABlgApqAzIghglIgiAlIgqAAIAygzIgugyIAoAAIAgAkIAfgkIApAAIgvAyIAyAzgAtQAzIAAhlIBuAAIAAAYIhQAAIAAAQIBMAAIAAAUIhMAAIAAAQIBSAAIAAAZg");
	this.shape.setTransform(9.2,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8898A6").s().p("ADPA0IgTgBQgHgCgFgDQgFgDgCgFQgCgFAAgIIAAgHIAfAAIABAGIACADQADACAHAAIAnAAQAGAAADgBIADgDIABgEIgBgGIgGgCIgNgBIgYgBIgcgBIgJgCQgEgBgCgCQgDgBgCgDIgCgEQgCgFAAgKIABgNQABgGAEgEIAFgEIAHgDIAKgCIA4gBQAJAAANACIAHADIAEAEQAEADABAGQACAFAAAHIAAADIggAAQAAgGgCgCIgEgBIgJgBIgiAAQgGAAgDACQgDACAAAEIABAFQACACADABQAFABAaAAIAeABIAKABIAIADIAGAEIADAFIACAHIABAKQgBAMgBAFIgDAFIgFAEIgHADIgIACIgaABgAj+A0QgLAAgIgCQgHgCgFgEQgEgDgDgHQgCgGAAgJIAAgMIAfAAIAAAJQAAAGADACQADADAHAAIAMAAQAJAAADgCQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAIABgGIAAhCIAfAAIAABFIgBAJIgCAIIgEAFIgEAFQgGADgIACIgTABgABYAzIgXhCIgBAAIgXBCIgkAAIgghlIAeAAIAVBKIAahKIAdAAIAaBKIAAAAIAWhKIAeAAIghBlgAg/AzIgJgSIg/AAIgJASIgjAAIA3hlIAoAAIA4BlgAhUALIgUglIgUAlIAoAAg");
	this.shape_1.setTransform(131.9,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-7.9,237.2,10.5);


(lib.ButtonsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#112039").s().p("A0zIUIAAwnMApnAAAIAAQng");
	this.shape.setTransform(125.5,53.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,0,266.3,106.4);


(lib.btn_BACK_squareR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFGB5IgQgBQgHgBgEgEQgFgCgCgFQgBgFAAgHIAAgGIAbAAIABAFIACAEQADACAGAAIAiAAQAGgBACgBIADgCIABgEIgBgFIgFgDIgMAAIgVgBIgZgBIgIgBIgGgDIgEgEIgCgFQgBgEAAgJIAAgLQACgGADgDIAEgEIAHgDIAJgBIAygBQAIAAALACIAGACIAEAEQAEADABAFIABALIAAACIgcAAQAAgFgCgCIgEgBIgmAAQgFAAgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAXAAIAbABIAJACIAHABIAFAFIADAEIACAIIABAIQgBALgBAEIgDAFIgEADIgGADIgIACIgXABgAh6B5QgKgBgGgBQgHgCgEgDQgEgDgCgGQgCgGAAgHIAAgLIAbAAIAAAHQAAAGADACQADACAGAAIALAAQAIAAADgCIADgCIAAgGIAAg7IAcAAIAABGIgCAHIgDAFIgFAEQgEADgIACIgQABgAslB5QgKgBgHgBQgJgDgDgCIgFgEIgDgGIgCgHIgBgJIAAgcIABgIIACgHIADgGIAFgFQADgCAJgCQAHgCAKAAIAhAAIAXACIAIACIAGAEQACABABADIADAGQABAGAAAKIgcAAIAAgDQAAgEgDgCQgDgCgHAAIgeAAIgJABQgDACgCACIgDAGIAAAHIAAAKIAAAIQABAEACACQABADAEAAIAIABIAlAAQADAAACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAIAAgHIAcAAIAAAJQAAAFgBAFQgCAFgDADQgEAEgGADQgKACgHAAgALpB4IAAhbIBjAAIAAAVIhHAAIAAAPIBDAAIAAASIhDAAIAAAPIBJAAIAAAWgAKHB4IAAhbIAcAAIAABDIA+AAIAAAYgAI0B4IAAggIgxg6IAAAVIgnAAIAABFIgcAAIAAhFIgnAAIAAgWICLAAIAeAlIAfglIAhAAIgyA7IAAAggACoB4IgVg9IgWA9IgfAAIgehbIAbAAIATBCIABAAIAXhCIAaAAIAXBCIAThCIAbAAIgdBbgAAsB4IgJgRIg3AAIgIARIgfAAIAxhbIAjAAIAyBbgAAZBUIgSgiIgRAiIAjAAgAlIB4IAAhbIBLAAQAHAAAKACIAFADIAFAEQADAEACAGIABAMIAAAHIgBALQgCAFgCAEQgDAEgFADQgIACgFAAIg3AAIAAAYgAktBLIAsAAQAEAAACgDQACgDAAgEIAAgEQAAgEgCgDQgDgDgGAAIgpAAgAlvB4IAAhBIgBAAIgkBBIgVAAIgkhBIAABBIgbAAIAAhbIAqAAIAgA6IAfg6IArAAIAABbgAoLB4IgJgRIg4AAIgIARIh4AAIAAhbIAcAAIAABDIA+AAIAAAVIAwhYIAkAAIAyBbgAoeBUIgSgiIgSAiIAkAAgAJrgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAqAAQAIAAALACIAGADIAFADQADAEABAFQACAFAAAHIAAAEIgcAAIgBgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgDgCgIAAIgeAAIgIABQgEABgCACQgCACgBAEIAAAJIAAAMIAAAJQABAEACACQACACAEAAIAIABIAeAAQAHAAADgBQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAIABgGIAAgCIgiAAIAAgTIA+AAIAAAiIgCAHIgEAFIgFADIgGACIgHABIgVABgABigbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAhAAIAXACIAIADIAGADQACACABADIADAFQABAGAAALIgcAAIAAgDQAAgEgDgDQgDgBgHAAIgeAAIgJABQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAlAAQADgBACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgGIAcAAIAAAIQAAAGgBAFQgCAFgDADQgEAEgGACQgKACgHAAgAhdgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAsAAQAKABAHABIAHACIAGADIAEAEIAEAGIACAIIAAAIIAAAcIAAAJIgCAHIgEAFIgEAFIgGACIgHACQgHACgKAAgAhghfQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAjAAIAIgBQADgBACgDQACgBAAgEIABgIIAAgKIgBgHIgCgHQgCgCgEgBIgIgBIghAAIgJABgAn/gbQgJAAgHgCQgJgCgEgCIgEgFIgEgFIgCgHIAAgJIAAgcIAAgIIACgIIAEgGIAEgEQAEgDAJgCQAHgBAJgBIAhAAIAYACIAIADIAFADQADACABADIACAFQACAGAAALIgcAAIAAgDQAAgEgEgDQgDgBgGAAIgfAAIgIABQgEABgCACIgCAHIgBAHIAAAKIABAIQAAAEACABQACADADABIAIABIAlAAQAEgBABgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGIAcAAIAAAIQAAAGgCAFQgBAFgEADQgDAEgHACQgKACgHAAgALFgcIAAhbIBjAAIAAAWIhIAAIAAAOIBEAAIAAASIhEAAIAAAPIBJAAIAAAWgAINgcIg0hCIAAAAIAABCIgcAAIAAhbIArAAIA0BDIAAhDIAcAAIAABbgAGagcIgJgQIg4AAIgIAQIgfAAIAxhbIAkAAIAyBbgAGHhAIgSghIgSAhIAkAAgAERgcIAAgiIg6AAIAAAiIgcAAIAAhbIAcAAIAAAhIA6AAIAAghIAcAAIAABbgAjNgcIAAhEIgnAAIAAgXIBqAAIAAAXIgnAAIAABEgAlVgcIgogiIgMAAIAAAiIgcAAIAAhbIAcAAIAAAiIANAAIAjgiIAmAAIgxAsIA2AvgApIgcIgIgQIg5AAIgIAQIgfAAIAxhbIAkAAIAyBbgApbhAIgSghIgRAhIAjAAgAsmgcIAAhbIBQAAIAOABQAHACAEADQAEADACAEQACAFAAAGIgBAKIgDAGIgEADIgFACIAAAAIAHADIAFAEIADAGIABAJQAAAHgCAFQgCAFgEADQgDACgFABIgLABgAsKgyIAyAAQAFAAACgBQADgBAAgFQAAgDgDgCQgCgCgFAAIgyAAgAsKhTIAxAAQAEAAACgBQACgCAAgDQAAgEgCgCQgCgCgEABIgxAAg");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFGB5IgQgBQgHgBgEgEQgFgCgCgFQgBgFAAgHIAAgGIAbAAIABAFIACAEQADACAGAAIAiAAQAGgBACgBIADgCIABgEIgBgFIgFgDIgMAAIgVgBIgZgBIgIgBIgGgDIgEgEIgCgFQgBgEAAgJIAAgLQACgGADgDIAEgEIAHgDIAJgBIAygBQAIAAALACIAGACIAEAEQAEADABAFIABALIAAACIgcAAQAAgFgCgCIgEgBIgmAAQgFAAgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAXAAIAbABIAJACIAHABIAFAFIADAEIACAIIABAIQgBALgBAEIgDAFIgEADIgGADIgIACIgXABgAh6B5QgKgBgGgBQgHgCgEgDQgEgDgCgGQgCgGAAgHIAAgLIAbAAIAAAHQAAAGADACQADACAGAAIALAAQAIAAADgCIADgCIAAgGIAAg7IAcAAIAABGIgCAHIgDAFIgFAEQgEADgIACIgQABgAslB5QgKgBgHgBQgJgDgDgCIgFgEIgDgGIgCgHIgBgJIAAgcIABgIIACgHIADgGIAFgFQADgCAJgCQAHgCAKAAIAhAAIAXACIAIACIAGAEQACABABADIADAGQABAGAAAKIgcAAIAAgDQAAgEgDgCQgDgCgHAAIgeAAIgJABQgDACgCACIgDAGIAAAHIAAAKIAAAIQABAEACACQABADAEAAIAIABIAlAAQADAAACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAIAAgHIAcAAIAAAJQAAAFgBAFQgCAFgDADQgEAEgGADQgKACgHAAgALpB4IAAhbIBjAAIAAAVIhHAAIAAAPIBDAAIAAASIhDAAIAAAPIBJAAIAAAWgAKHB4IAAhbIAcAAIAABDIA+AAIAAAYgAI0B4IAAggIgxg6IAAAVIgnAAIAABFIgcAAIAAhFIgnAAIAAgWICLAAIAeAlIAfglIAhAAIgyA7IAAAggACoB4IgVg9IgWA9IgfAAIgehbIAbAAIATBCIABAAIAXhCIAaAAIAXBCIAThCIAbAAIgdBbgAAsB4IgJgRIg3AAIgIARIgfAAIAxhbIAjAAIAyBbgAAZBUIgSgiIgRAiIAjAAgAlIB4IAAhbIBLAAQAHAAAKACIAFADIAFAEQADAEACAGIABAMIAAAHIgBALQgCAFgCAEQgDAEgFADQgIACgFAAIg3AAIAAAYgAktBLIAsAAQAEAAACgDQACgDAAgEIAAgEQAAgEgCgDQgDgDgGAAIgpAAgAlvB4IAAhBIgBAAIgkBBIgVAAIgkhBIAABBIgbAAIAAhbIAqAAIAgA6IAfg6IArAAIAABbgAoLB4IgJgRIg4AAIgIARIh4AAIAAhbIAcAAIAABDIA+AAIAAAVIAwhYIAkAAIAyBbgAoeBUIgSgiIgSAiIAkAAgAJrgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAqAAQAIAAALACIAGADIAFADQADAEABAFQACAFAAAHIAAAEIgcAAIgBgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgDgCgIAAIgeAAIgIABQgEABgCACQgCACgBAEIAAAJIAAAMIAAAJQABAEACACQACACAEAAIAIABIAeAAQAHAAADgBQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAIABgGIAAgCIgiAAIAAgTIA+AAIAAAiIgCAHIgEAFIgFADIgGACIgHABIgVABgABigbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAhAAIAXACIAIADIAGADQACACABADIADAFQABAGAAALIgcAAIAAgDQAAgEgDgDQgDgBgHAAIgeAAIgJABQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAlAAQADgBACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgGIAcAAIAAAIQAAAGgBAFQgCAFgDADQgEAEgGACQgKACgHAAgAhdgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAsAAQAKABAHABIAHACIAGADIAEAEIAEAGIACAIIAAAIIAAAcIAAAJIgCAHIgEAFIgEAFIgGACIgHACQgHACgKAAgAhghfQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAjAAIAIgBQADgBACgDQACgBAAgEIABgIIAAgKIgBgHIgCgHQgCgCgEgBIgIgBIghAAIgJABgAn/gbQgJAAgHgCQgJgCgEgCIgEgFIgEgFIgCgHIAAgJIAAgcIAAgIIACgIIAEgGIAEgEQAEgDAJgCQAHgBAJgBIAhAAIAYACIAIADIAFADQADACABADIACAFQACAGAAALIgcAAIAAgDQAAgEgEgDQgDgBgGAAIgfAAIgIABQgEABgCACIgCAHIgBAHIAAAKIABAIQAAAEACABQACADADABIAIABIAlAAQAEgBABgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGIAcAAIAAAIQAAAGgCAFQgBAFgEADQgDAEgHACQgKACgHAAgALFgcIAAhbIBjAAIAAAWIhIAAIAAAOIBEAAIAAASIhEAAIAAAPIBJAAIAAAWgAINgcIg0hCIAAAAIAABCIgcAAIAAhbIArAAIA0BDIAAhDIAcAAIAABbgAGagcIgJgQIg4AAIgIAQIgfAAIAxhbIAkAAIAyBbgAGHhAIgSghIgSAhIAkAAgAERgcIAAgiIg6AAIAAAiIgcAAIAAhbIAcAAIAAAhIA6AAIAAghIAcAAIAABbgAjNgcIAAhEIgnAAIAAgXIBqAAIAAAXIgnAAIAABEgAlVgcIgogiIgMAAIAAAiIgcAAIAAhbIAcAAIAAAiIANAAIAjgiIAmAAIgxAsIA2AvgApIgcIgIgQIg5AAIgIAQIgfAAIAxhbIAkAAIAyBbgApbhAIgSghIgRAhIAjAAgAsmgcIAAhbIBQAAIAOABQAHACAEADQAEADACAEQACAFAAAGIgBAKIgDAGIgEADIgFACIAAAAIAHADIAFAEIADAGIABAJQAAAHgCAFQgCAFgEADQgDACgFABIgLABgAsKgyIAyAAQAFAAACgBQADgBAAgFQAAgDgDgCQgCgCgFAAIgyAAgAsKhTIAxAAQAEAAACgBQACgCAAgDQAAgEgCgCQgCgCgEABIgxAAg");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFGB5IgQgBQgHgBgEgEQgFgCgCgFQgBgFAAgHIAAgGIAbAAIABAFIACAEQADACAGAAIAiAAQAGgBACgBIADgCIABgEIgBgFIgFgDIgMAAIgVgBIgZgBIgIgBIgGgDIgEgEIgCgFQgBgEAAgJIAAgLQACgGADgDIAEgEIAHgDIAJgBIAygBQAIAAALACIAGACIAEAEQAEADABAFIABALIAAACIgcAAQAAgFgCgCIgEgBIgmAAQgFAAgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAXAAIAbABIAJACIAHABIAFAFIADAEIACAIIABAIQgBALgBAEIgDAFIgEADIgGADIgIACIgXABgAh6B5QgKgBgGgBQgHgCgEgDQgEgDgCgGQgCgGAAgHIAAgLIAbAAIAAAHQAAAGADACQADACAGAAIALAAQAIAAADgCIADgCIAAgGIAAg7IAcAAIAABGIgCAHIgDAFIgFAEQgEADgIACIgQABgAslB5QgKgBgHgBQgJgDgDgCIgFgEIgDgGIgCgHIgBgJIAAgcIABgIIACgHIADgGIAFgFQADgCAJgCQAHgCAKAAIAhAAIAXACIAIACIAGAEQACABABADIADAGQABAGAAAKIgcAAIAAgDQAAgEgDgCQgDgCgHAAIgeAAIgJABQgDACgCACIgDAGIAAAHIAAAKIAAAIQABAEACACQABADAEAAIAIABIAlAAQADAAACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAIAAgHIAcAAIAAAJQAAAFgBAFQgCAFgDADQgEAEgGADQgKACgHAAgALpB4IAAhbIBjAAIAAAVIhHAAIAAAPIBDAAIAAASIhDAAIAAAPIBJAAIAAAWgAKHB4IAAhbIAcAAIAABDIA+AAIAAAYgAI0B4IAAggIgxg6IAAAVIgnAAIAABFIgcAAIAAhFIgnAAIAAgWICLAAIAeAlIAfglIAhAAIgyA7IAAAggACoB4IgVg9IgWA9IgfAAIgehbIAbAAIATBCIABAAIAXhCIAaAAIAXBCIAThCIAbAAIgdBbgAAsB4IgJgRIg3AAIgIARIgfAAIAxhbIAjAAIAyBbgAAZBUIgSgiIgRAiIAjAAgAlIB4IAAhbIBLAAQAHAAAKACIAFADIAFAEQADAEACAGIABAMIAAAHIgBALQgCAFgCAEQgDAEgFADQgIACgFAAIg3AAIAAAYgAktBLIAsAAQAEAAACgDQACgDAAgEIAAgEQAAgEgCgDQgDgDgGAAIgpAAgAlvB4IAAhBIgBAAIgkBBIgVAAIgkhBIAABBIgbAAIAAhbIAqAAIAgA6IAfg6IArAAIAABbgAoLB4IgJgRIg4AAIgIARIh4AAIAAhbIAcAAIAABDIA+AAIAAAVIAwhYIAkAAIAyBbgAoeBUIgSgiIgSAiIAkAAgAJrgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAqAAQAIAAALACIAGADIAFADQADAEABAFQACAFAAAHIAAAEIgcAAIgBgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgDgCgIAAIgeAAIgIABQgEABgCACQgCACgBAEIAAAJIAAAMIAAAJQABAEACACQACACAEAAIAIABIAeAAQAHAAADgBQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAIABgGIAAgCIgiAAIAAgTIA+AAIAAAiIgCAHIgEAFIgFADIgGACIgHABIgVABgABigbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAhAAIAXACIAIADIAGADQACACABADIADAFQABAGAAALIgcAAIAAgDQAAgEgDgDQgDgBgHAAIgeAAIgJABQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAlAAQADgBACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgGIAcAAIAAAIQAAAGgBAFQgCAFgDADQgEAEgGACQgKACgHAAgAhdgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAsAAQAKABAHABIAHACIAGADIAEAEIAEAGIACAIIAAAIIAAAcIAAAJIgCAHIgEAFIgEAFIgGACIgHACQgHACgKAAgAhghfQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAjAAIAIgBQADgBACgDQACgBAAgEIABgIIAAgKIgBgHIgCgHQgCgCgEgBIgIgBIghAAIgJABgAn/gbQgJAAgHgCQgJgCgEgCIgEgFIgEgFIgCgHIAAgJIAAgcIAAgIIACgIIAEgGIAEgEQAEgDAJgCQAHgBAJgBIAhAAIAYACIAIADIAFADQADACABADIACAFQACAGAAALIgcAAIAAgDQAAgEgEgDQgDgBgGAAIgfAAIgIABQgEABgCACIgCAHIgBAHIAAAKIABAIQAAAEACABQACADADABIAIABIAlAAQAEgBABgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGIAcAAIAAAIQAAAGgCAFQgBAFgEADQgDAEgHACQgKACgHAAgALFgcIAAhbIBjAAIAAAWIhIAAIAAAOIBEAAIAAASIhEAAIAAAPIBJAAIAAAWgAINgcIg0hCIAAAAIAABCIgcAAIAAhbIArAAIA0BDIAAhDIAcAAIAABbgAGagcIgJgQIg4AAIgIAQIgfAAIAxhbIAkAAIAyBbgAGHhAIgSghIgSAhIAkAAgAERgcIAAgiIg6AAIAAAiIgcAAIAAhbIAcAAIAAAhIA6AAIAAghIAcAAIAABbgAjNgcIAAhEIgnAAIAAgXIBqAAIAAAXIgnAAIAABEgAlVgcIgogiIgMAAIAAAiIgcAAIAAhbIAcAAIAAAiIANAAIAjgiIAmAAIgxAsIA2AvgApIgcIgIgQIg5AAIgIAQIgfAAIAxhbIAkAAIAyBbgApbhAIgSghIgRAhIAjAAgAsmgcIAAhbIBQAAIAOABQAHACAEADQAEADACAEQACAFAAAGIgBAKIgDAGIgEADIgFACIAAAAIAHADIAFAEIADAGIABAJQAAAHgCAFQgCAFgEADQgDACgFABIgLABgAsKgyIAyAAQAFAAACgBQADgBAAgFQAAgDgDgCQgCgCgFAAIgyAAgAsKhTIAxAAQAEAAACgBQACgCAAgDQAAgEgCgCQgCgCgEABIgxAAg");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_squareC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFGB5IgQgBQgHgBgEgEQgFgCgCgFQgBgFAAgHIAAgGIAbAAIABAFIACAEQADACAGAAIAiAAQAGgBACgBIADgCIABgEIgBgFIgFgDIgMAAIgVgBIgZgBIgIgBIgGgDIgEgEIgCgFQgBgEAAgJIAAgLQACgGADgDIAEgEIAHgDIAJgBIAygBQAIAAALACIAGACIAEAEQAEADABAFIABALIAAACIgcAAQAAgFgCgCIgEgBIgmAAQgFAAgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAXAAIAbABIAJACIAHABIAFAFIADAEIACAIIABAIQgBALgBAEIgDAFIgEADIgGADIgIACIgXABgAh6B5QgKgBgGgBQgHgCgEgDQgEgDgCgGQgCgGAAgHIAAgLIAbAAIAAAHQAAAGADACQADACAGAAIALAAQAIAAADgCIADgCIAAgGIAAg7IAcAAIAABGIgCAHIgDAFIgFAEQgEADgIACIgQABgAslB5QgKgBgHgBQgJgDgDgCIgFgEIgDgGIgCgHIgBgJIAAgcIABgIIACgHIADgGIAFgFQADgCAJgCQAHgCAKAAIAhAAIAXACIAIACIAGAEQACABABADIADAGQABAGAAAKIgcAAIAAgDQAAgEgDgCQgDgCgHAAIgeAAIgJABQgDACgCACIgDAGIAAAHIAAAKIAAAIQABAEACACQABADAEAAIAIABIAlAAQADAAACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAIAAgHIAcAAIAAAJQAAAFgBAFQgCAFgDADQgEAEgGADQgKACgHAAgALpB4IAAhbIBjAAIAAAVIhHAAIAAAPIBDAAIAAASIhDAAIAAAPIBJAAIAAAWgAKHB4IAAhbIAcAAIAABDIA+AAIAAAYgAI0B4IAAggIgxg6IAAAVIgnAAIAABFIgcAAIAAhFIgnAAIAAgWICLAAIAeAlIAfglIAhAAIgyA7IAAAggACoB4IgVg9IgWA9IgfAAIgehbIAbAAIATBCIABAAIAXhCIAaAAIAXBCIAThCIAbAAIgdBbgAAsB4IgJgRIg3AAIgIARIgfAAIAxhbIAjAAIAyBbgAAZBUIgSgiIgRAiIAjAAgAlIB4IAAhbIBLAAQAHAAAKACIAFADIAFAEQADAEACAGIABAMIAAAHIgBALQgCAFgCAEQgDAEgFADQgIACgFAAIg3AAIAAAYgAktBLIAsAAQAEAAACgDQACgDAAgEIAAgEQAAgEgCgDQgDgDgGAAIgpAAgAlvB4IAAhBIgBAAIgkBBIgVAAIgkhBIAABBIgbAAIAAhbIAqAAIAgA6IAfg6IArAAIAABbgAoLB4IgJgRIg4AAIgIARIh4AAIAAhbIAcAAIAABDIA+AAIAAAVIAwhYIAkAAIAyBbgAoeBUIgSgiIgSAiIAkAAgAJrgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAqAAQAIAAALACIAGADIAFADQADAEABAFQACAFAAAHIAAAEIgcAAIgBgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgDgCgIAAIgeAAIgIABQgEABgCACQgCACgBAEIAAAJIAAAMIAAAJQABAEACACQACACAEAAIAIABIAeAAQAHAAADgBQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAIABgGIAAgCIgiAAIAAgTIA+AAIAAAiIgCAHIgEAFIgFADIgGACIgHABIgVABgABigbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAhAAIAXACIAIADIAGADQACACABADIADAFQABAGAAALIgcAAIAAgDQAAgEgDgDQgDgBgHAAIgeAAIgJABQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAlAAQADgBACgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAgGIAcAAIAAAIQAAAGgBAFQgCAFgDADQgEAEgGACQgKACgHAAgAhdgbQgKAAgHgCQgJgCgDgCIgFgFIgDgFIgCgHIgBgJIAAgcIABgIIACgIIADgGIAFgEQADgDAJgCQAHgBAKgBIAsAAQAKABAHABIAHACIAGADIAEAEIAEAGIACAIIAAAIIAAAcIAAAJIgCAHIgEAFIgEAFIgGACIgHACQgHACgKAAgAhghfQgDABgCACIgDAHIAAAHIAAAKIAAAIQABAEACABQABADAEABIAIABIAjAAIAIgBQADgBACgDQACgBAAgEIABgIIAAgKIgBgHIgCgHQgCgCgEgBIgIgBIghAAIgJABgAn/gbQgJAAgHgCQgJgCgEgCIgEgFIgEgFIgCgHIAAgJIAAgcIAAgIIACgIIAEgGIAEgEQAEgDAJgCQAHgBAJgBIAhAAIAYACIAIADIAFADQADACABADIACAFQACAGAAALIgcAAIAAgDQAAgEgEgDQgDgBgGAAIgfAAIgIABQgEABgCACIgCAHIgBAHIAAAKIABAIQAAAEACABQACADADABIAIABIAlAAQAEgBABgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIABgGIAcAAIAAAIQAAAGgCAFQgBAFgEADQgDAEgHACQgKACgHAAgALFgcIAAhbIBjAAIAAAWIhIAAIAAAOIBEAAIAAASIhEAAIAAAPIBJAAIAAAWgAINgcIg0hCIAAAAIAABCIgcAAIAAhbIArAAIA0BDIAAhDIAcAAIAABbgAGagcIgJgQIg4AAIgIAQIgfAAIAxhbIAkAAIAyBbgAGHhAIgSghIgSAhIAkAAgAERgcIAAgiIg6AAIAAAiIgcAAIAAhbIAcAAIAAAhIA6AAIAAghIAcAAIAABbgAjNgcIAAhEIgnAAIAAgXIBqAAIAAAXIgnAAIAABEgAlVgcIgogiIgMAAIAAAiIgcAAIAAhbIAcAAIAAAiIANAAIAjgiIAmAAIgxAsIA2AvgApIgcIgIgQIg5AAIgIAQIgfAAIAxhbIAkAAIAyBbgApbhAIgSghIgRAhIAjAAgAsmgcIAAhbIBQAAIAOABQAHACAEADQAEADACAEQACAFAAAGIgBAKIgDAGIgEADIgFACIAAAAIAHADIAFAEIADAGIABAJQAAAHgCAFQgCAFgEADQgDACgFABIgLABgAsKgyIAyAAQAFAAACgBQADgBAAgFQAAgDgDgCQgCgCgFAAIgyAAgAsKhTIAxAAQAEAAACgBQACgCAAgDQAAgEgCgCQgCgCgEABIgxAAg");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.btn_BACK_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5C2D7").s().p("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");
	this.shape_1.setTransform(1.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7C8CA").ss(1,1,1).p("AOvDFI9dAAIAAmJIddAAg");
	this.shape_2.setTransform(1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112039").s().p("AuuDFIAAmJIddAAIAAGJg");
	this.shape_3.setTransform(1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-0.4,190.6,41.4);


(lib.box_ltCorner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C456A").s().p("AxjHUIAAunMAjHAAAIAAOng");
	this.shape.setTransform(112.4,65.6,1,1.402);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.9,131.3);


(lib.N_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgFgBgEgDQgDgCgCgEQgCgEABgFIAXAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIARAAIASAAQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgJAAgDABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAIAAIARAAQAKAAAGACQAGABADADQACADABAEIABAHQABAHgCADQgBAEgFADQgDACgHABIgQABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQADgDAGgBIALgBIARAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAADQAAAGgDADQgCAEgEACQgEACgFABIgNABgAC1BAIAAgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAFIAhAAIAAAAgABQBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAFgCAUAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgGABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABgBABIgVAAQgBgGACgEQACgEADgCQADgCAGgBIAMAAIAaAAIAKABQAEABAEADQADADABAEQACAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAJABIAHAAQAHAAAHgBQACgCAAgDQABgEgDgBQgDgBgHAAIgLAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgFACgHAAgAjFBoIgJgBQgFgBgDgDQgFgDgCgEIgBgGIgBgVQAAgFACgHQACgFAFgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAi/A6QgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAIgCAEIgBAFIAAAGIABAFIACAEIAFACIAHAAIAPAAQADAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBIAAgFIAAgIIAAgFQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgFgCIgPAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgUAAQAAgGgDgDIgDgCIgGAAQgGAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgFABIgJABgAB6gOIgKAAQgEgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQADgDAEgCQAFgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgHABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQABgGABgEQABgDAEgCQADgCAGgBIAMgBIAaAAIALABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAB8gnQgCABgBAEQAAADADACIAKABIAGAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgIAAIgLAAQgHAAgCACgAg6gOIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQAEgDAFgCIALgBIARAAIAPABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQACACAIAAIAIAAIAHgBIADgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgBADgFADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAhAAIAAAAgAkYgOQgJAAgHgBIgMgFIgFgEIgDgGIgCgHIgBgIIAAgaIABgJIACgHIADgFIAFgEQADgDAJgCQAHgCAJAAIAqAAQAKAAAGACIAHACQADABADACIAEAEIADAFIACAHIABAJIAAAaIgBAIIgCAHIgDAGIgEAEIgGADIgHACQgGABgKAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEJgPIgLghIgBAAIgLAhIgfAAIgXg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAYAAIgXA9gAh9gPIAAgjQAAgEgEgDIgFgBIgLgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAEgBAMgBIALABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(180.9,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAABAAAAQgBAAAAABQAAAAAAABQgBABAAAAIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAAAAAABQABABAAAAQAAABAAAAQABAAAAABQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj4g8QAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAIgDAEIgBAFIAAAGIABAFIADAEIAEACIAHAAIAPAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgPAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(46.3,77.3);

	this.instance = new lib.jaw3_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(182,36.8,0.5,0.5,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.jaw3_drawing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.9,36.8,0.5,0.5,0,0,0,0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_2.setTransform(113.8,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-0.4,251.4,90);


(lib.jaw4_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXgWQAKAJAAANQAAAOgKAJQgKAKgNAAQgNAAgJgKQgKgJAAgOQAAgNAKgJQAJgKANAAQANAAAKAKg");
	this.shape.setTransform(21.6,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAUIAXgXIgQgQ");
	this.shape_1.setTransform(42.1,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKQgKgLAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKg");
	this.shape_2.setTransform(21.6,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjAAQAAAPgKAKQgLAKgOAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANg");
	this.shape_3.setTransform(43.9,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgLALgOAAQgOAAgKgLQgKgLAAgOQAAgNAKgLQAKgLAOAAQAOAAALALg");
	this.shape_4.setTransform(6.2,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcg");
	this.shape_5.setTransform(6.2,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSARQgSASgZAAQgYAAgSgSQgSgRAAgaQAAgZASgSQASgSAYAAQAZAAASASg");
	this.shape_6.setTransform(6.2,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgUIgkgUIgjAUIAAAoIAjAVIAkgVg");
	this.shape_7.setTransform(6.2,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQALALAAANQAAAOgLALQgLALgOAAQgNAAgLgLQgLgLAAgOQAAgNALgLQALgLANAAQAOAAALALg");
	this.shape_8.setTransform(-19,-18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_9.setTransform(-19,-18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSQgRgSAAgaQAAgZARgSQASgRAZAAQAaAAASARg");
	this.shape_10.setTransform(-19,-18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAUIAAAoIAjAVIAkgVg");
	this.shape_11.setTransform(-19,-18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgLALgOAAQgOAAgKgLQgKgLAAgOQAAgNAKgLQAKgLAOAAQAOAAALALg");
	this.shape_12.setTransform(6.2,-18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcg");
	this.shape_13.setTransform(6.2,-18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSASQgSASgZAAQgYAAgSgSQgSgSAAgaQAAgZASgSQASgRAYAAQAZAAASARg");
	this.shape_14.setTransform(6.2,-18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAUIAAAoIAjAVIAkgVg");
	this.shape_15.setTransform(6.2,-18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGgJIAAAKIAJAJIB8AAIAIgJIAAgK");
	this.shape_16.setTransform(104.5,69);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGgJIAAAKIAJAJIB7AAIAJgJIAAgK");
	this.shape_17.setTransform(66.2,69);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ALtg9IAADlIrMgCIiUgSIi3gvIithKIighiIh1hg");
	this.shape_18.setTransform(40.3,51.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AGQjbIiIAAIgDAdIgPAoIgOAZIgTAWIgVASIglAWIgpALIgdACIgdgCIgpgLIgYgOIgXgRIgUgUIgRgXIgNgaIgIgbIgEgdIkwAAIAAEDICzC0IFpAAIAAhEICQAAIAABEIByAAg");
	this.shape_19.setTransform(86.6,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AmPDcIExAAIACgPIAGgcIARgnIARgXIAUgUIAXgRIAYgNIAbgKIArgFIAdADIAbAGIAnATIAXARIAlArIAMAaIAJAbIADAdICIAAIAAm3IhyAAIAABDIiQAAIAAhDIlpAAIizC1g");
	this.shape_20.setTransform(86.5,-23);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgrAUIAKAKQAYAaAhgVQAKgJAEgIQAPgbgYgYIgJgK");
	this.shape_21.setTransform(30.7,-39.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYBTIhChDIgCgCIAAgDIAAgDIACgCIBXhY");
	this.shape_22.setTransform(2,-41.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACghQIgQAHIgDAAIgDgBIgBgCIgJgVIgFgCIgVAJIgCAAIgDgBIgCgCIgJgVIgFgCIgUAJIgDAAIgDgBIgBgCIgJgVIgFgCIgVAJIgCAAIgDgBIgCgDIgIgUIgFgDIgaALIgBABIgCgBIgCgBIgIgIIiPCPIAFAFIABABIAAABIAAAPIADACIAYAAIADABIABACIABADIAAAXIADADIAYAAIADABIABACIABADIAAAXIADADIAXAAIADABIACACIABACIAAAYIADADIAXAAIADABIACACIAAACIAAAXIAEAEIAOAAIADABIABABIAEAEIDQjQg");
	this.shape_23.setTransform(24.9,-48.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABJBTIAHgHIgFgFIgDAAIgOAAIgEgFIAAgWIgBgDIgCgCIgDAAIgXAAIgDgDIAAgZIAAgCIgDgBIgCgCIgXAAIgDgCIAAgXIAAgDIgCgBIgCgBIgZAAIgCgEIAAgXIgBgCIgCgCIgCgBIgYAAIgEgCIAAgQIgBgDIgFgF");
	this.shape_24.setTransform(14.5,-41.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AghgMQAGgNANgGQANgGAMAGQAOAFAGANQAGANgGANQgFANgNAGQgNAGgNgFIgLgH");
	this.shape_25.setTransform(44,-55.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA4gYQAKAXgJAXQgJAYgXAKQgYALgWgKQgYgJgKgXQgLgXAJgXQAKgYAXgKQAXgLAXAKQAYAJAKAXg");
	this.shape_26.setTransform(21.6,-48.8);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.6,-48.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgngKIALAnIAnAKIAdgdIgLgmIgmgKg");
	this.shape_27.setTransform(21.6,-48.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABHAKIAAgKIgJgJIh7AAIgJAJIAAAK");
	this.shape_28.setTransform(66.2,-69);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABHAKIAAgKIgIgJIh8AAIgJAJIAAAK");
	this.shape_29.setTransform(104.5,-69);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ALtA/IAAjmIqxAAIgBABIgEAAIidARIi/AvIi2BPIh/BLIiSB1");
	this.shape_30.setTransform(40.3,-51.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah0hFIAGAMIAPAUIATASIBVA+IAVANIAXAJIAZAFIAnAA");
	this.shape_31.setTransform(46.2,31.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah0BGIAGgLIAPgVIATgRIBfhGIAWgLIAYgHIANgCIAnAA");
	this.shape_32.setTransform(46.2,-31.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADdgvImIAAQgtgBgDAwQgBAuAxACIGIAA");
	this.shape_33.setTransform(-21,18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgvIiMAAQgtgBgDAwQgBAuAxADICMgB");
	this.shape_34.setTransform(-33.6,-18);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIVkoQAUAZAAAfIAAHjQgBAigTAUQgdAlgpgDIqGAAQg2AAgYgtIhWiVIgBgBQgdgygxAEIgkAAQgVABgVgLQgwgbAAg1QAAgzAtgaQAWgMAXAAIAkAAQAxAEAdgxIBXiXQAWgtA4AAIKGAAQAogDAeAlg");
	this.shape_35.setTransform(-20.8,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiBhZIAACfIABAEIACAGIADAGIAEAEIDvAAIADgCIABgCIACgDIAAgBIABgCIABgDIACgKIAAic");
	this.shape_36.setTransform(-96.8,-25.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACCBaIAAicIgCgKIgBgEIgBgCIgCgDIgBgCIgDgCIjvAAIgCACIgBAAIgBACIgDAFIgCAHIgBADIAACg");
	this.shape_37.setTransform(-96.8,25.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AILlKIgYgNIpUAAIgDACIgCABIgEABIjsAAIgDgBIgDgBIgCgCIirAAIgBKvICsAAIACgCIADgBIADgBIDsAAIAEABIACABIADACIJUAAIAYgN");
	this.shape_38.setTransform(-74.3,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BCBFC6").s().p("AAABMQgRgBgOgGIgCgCIAAgBIACgCIACAAQANAHAQgBQAZAAATgPIACgBIACABIAAACIgBACQgUARgbAAIAAAAgAg8AqIgCgBQgMgSAAgXQAAgUAKgQIABgCIACABIABABIAAACQgJAQAAASQAAAWALARIABACIgBABIgCABIAAgBgABEAbIgBgCIAAgBQADgLAAgNQAAgcgUgVIgBgBIABgCIABgBIACABQAWAVAAAfQAAANgEAMIgBACIgBAAIgBAAgAAng5QgRgNgWABQgSAAgPAIIgCABIgBgCIgBgCIABgBQARgKATAAQAYABASANIABABIAAACIgCABIAAAAIgCAAg");
	this.shape_39.setTransform(-69.8,23.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_40.setTransform(-69.8,23.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BCBFC6").s().p("AgdBFIgBgBIAAgCIABgBIACAAQAMAGAPgBQAbABASgSIACgBIACABIABACIgBACQgUASgdABQgQgBgNgGgAg6AsIgCgBQgOgSAAgZQAAgTAJgRIABgBIACAAIACACIgBACQgIAPAAASQAAAXANASIAAABIgBACIgBABIAAgBgABFAaIgCgBIAAgCQADgLAAgMQAAgcgUgVIgBgBIABgCIABgBIACABQAWAWAAAeQAAANgDALIgCACIgBAAIAAAAgAAng5QgRgNgWABQgSAAgPAIIgCABIgCgCIAAgCIABgBQARgKATAAQAYABASANIABABIAAACIgCABIAAAAIgCAAg");
	this.shape_41.setTransform(-69.8,-23.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgTAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_42.setTransform(-69.8,-23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIARIgFAAQgMgEAAgNQAAgLANgEIAEgBIARAAIAFABQANADAAAMQAAANgNAEIgEAAIAAAHIAFAAQATgFAAgTQAAgLgJgHQgHgFgIAAIgSAAQgXgBgBAYQgBAWAXACIACAAg");
	this.shape_43.setTransform(-56.3,-28.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGAAICNAA");
	this.shape_44.setTransform(66.2,69.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGAAICNAA");
	this.shape_45.setTransform(66.2,-69.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGAAICNAA");
	this.shape_46.setTransform(104.5,69.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGAAICNAA");
	this.shape_47.setTransform(104.5,-69.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAp");
	this.shape_48.setTransform(2.7,-18);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLAAIiWAA");
	this.shape_49.setTransform(-6.4,-22.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_50.setTransform(-6.4,-13.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAGIgLgL");
	this.shape_51.setTransform(16.2,-60.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_52.setTransform(15.6,-60.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgkIAABJ");
	this.shape_53.setTransform(11,-57.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABFAAIiJAA");
	this.shape_54.setTransform(35.9,-32.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTh0IAoDp");
	this.shape_55.setTransform(48.3,-56.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgZIABAGIgBAHIgBAHIgGAMIgFAGIgFAEIgNAHIgHACIgHAAIgGAAIgHgCIgGgCIgGgEIgKgKIgEgGIgDgFIgCgH");
	this.shape_56.setTransform(46,-41.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKA3IgTht");
	this.shape_57.setTransform(38.2,-61.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAqIgPhT");
	this.shape_58.setTransform(40.8,-47.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_59.setTransform(15.6,-62.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAAIgpAA");
	this.shape_60.setTransform(-106.5,-28.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFgHIAAACIABADIACAFIABACIABACIADABIADAA");
	this.shape_61.setTransform(-109.2,-25.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_62.setTransform(-104.4,26.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEATIAGgJIADgIIAAgEIgDgIIgGgI");
	this.shape_63.setTransform(-103.9,-26.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVAAIgpAA");
	this.shape_64.setTransform(-106.5,24.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgBAA");
	this.shape_65.setTransform(-69.9,-17.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgm");
	this.shape_66.setTransform(-104.4,-26.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgDAAIgCAA");
	this.shape_67.setTransform(-108.9,-28.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDABIAHgB");
	this.shape_68.setTransform(-109,28.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgHIgDAAIgEADIgBACIgCAFIgBACIAAAD");
	this.shape_69.setTransform(-109.2,25.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_70.setTransform(-106.5,28.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_71.setTransform(-106.5,-24.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEATIAGgIIADgHIAAgEIgDgIIgGgK");
	this.shape_72.setTransform(-103.9,26.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3C456A").s().p("APUK9IgHgKIAAgMIjxAAIAAALIgKAKIh6AAIgJgKIAAgKIiLgBIh+gLQhcgQg4gPQg5gOh4gyIhcguIhshEIhUg9Ig8g2InzAAIgKgFIjtAAIgJAFIinAAIAAquICrAAIAHADIDxAAIAIgEIHvAAQA6g/BVg1IB0hIIBbgtIBngmIBggdQB1gdAxAAIBZgHICCgBIAAgJIAJgKIB7AAIAKAJIAAAKIDxAAIAAgKIAHgKIB9AAIAJAKIAAAJIAkAAIAADoIByAAIAAG2IiHAAQgFiaisgQQiggCgYCrIkwAAIAAkBIBwhxIgdgCQgqgBgxAnQgxAogSAJQggAagQAaIAAHrIAZAgIBzBUQATAWBKgCIhvhxIAAkCIEyAAQALCoCkAAQCkAAAVidIAAgLICIAAIAAG2IhzAAIAADnIgkAAIAAAJIgJAMg");
	this.shape_73.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-70.9,255.1,141.9);


(lib.jaw2_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzgyQAWAVAAAdQAAAegWAVQgVAWgeAAQgdAAgVgWQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWg");
	this.shape.setTransform(-59.5,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRQgRgTAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_1.setTransform(-59.5,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzgzQAWAVAAAeQAAAegWAVQgVAWgeAAQgdAAgVgWQgWgVAAgeQAAgeAWgVQAVgVAdAAQAeAAAVAVg");
	this.shape_2.setTransform(-59.5,-11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRARQgSASgZAAQgYAAgSgSQgRgSAAgYQAAgYARgSQASgRAYAAQAZAAASARg");
	this.shape_3.setTransform(-59.5,-11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AqYCKIBaAfIBdAUICeAKIB+gMIB7ggILPknQATgGABgXIAAgdIktAAIgEAFIgGADIh0AwIgIACIjxABIgGgBIgMgDIgGgDIgFgE");
	this.shape_4.setTransform(48.9,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACkhJIAEAKIlLCJIgFgK");
	this.shape_5.setTransform(78,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAbA5IAiAAIAAg7QABgUgOgPQgPgTgaAAIhDAA");
	this.shape_6.setTransform(110.1,-7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiEhwIABDKIANAXIAIAAIANgYIADgCIACgBIACAAIACABIABACIAPAYIAHAAIANgYIADgCIACgBIACAAIACABIABACIAPAYIAHAAIAPgaIACgBIADAAIABABIABACIAPAYIAHAAIAOgYIACgCIABgBIADAAIACABIABACIAPAYIAHAAIAOgYIACgCIACgBIACAAIACABIABACIAPAYIAHAAIAOgYIACgCIADgBIAAjGg");
	this.shape_7.setTransform(98.9,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLALIALAAIAMgV");
	this.shape_8.setTransform(102.5,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLgKIAMAVIALAA");
	this.shape_9.setTransform(94.7,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDhDIAHAAIAACHIgHAA");
	this.shape_10.setTransform(112.4,-1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA2AgIAAgPIgxgwIgJAAIgxAwIAAAP");
	this.shape_11.setTransform(98.6,-15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgVIgFAAIAAArIAFAA");
	this.shape_12.setTransform(85.4,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjLhWIDuABQA3ADAnAzQAQATAHAbQAEAQABATIAAAlIApAAIAAgvQAAgIAGgC");
	this.shape_13.setTransform(65.2,-10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhkhwIAAAIIAAABIgMAMIAAAEIARARIABACIAAADIgBACIgRARIAAAEIARARIABACIAAADIgBACIgRARIAAADIARARIABACIAAADIgBACIgRARIAAAEIARARIABACIAAADIgBACIgRARIAAAFIAMAMIAAABIAAAHIEmAAIAAgiIgRgHIgCgBIAAgDIAAgDIAIgVIgCgFIgVgJIgCgBIgBgDIABgCIAIgWIgDgEIgUgIIgCgCIgBgCIAAgEIAJgVIgCgFIgWgIIgCgCIAAgCIAAgDIAJgVIgCgFIgbgKIgBgCIgBgBIgBgCIAAgMgAjBhwIBdAA");
	this.shape_14.setTransform(64.3,-31.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAWgFQgIALgOAAQgOAAgHgL");
	this.shape_15.setTransform(56.9,-19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArhwIAAAIQAAAAAAABIgBABIgLALIAAAEIARARIACACIAAADIgCACIgRARIAAAEIARARIACACIAAADIgCACIgRARIAAAEIARAQIACACIAAADIgCACIgRARIAAAFIARAQIABACIAAADIgBACIgRAQIAAAGIALALIABABIAAACIAAAGIhcAA");
	this.shape_16.setTransform(49.8,-31.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiYgZIClAQICMAi");
	this.shape_17.setTransform(59,-45.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQASATAAAYQAAAagSASQgSARgaAAQgYAAgSgRQgSgSAAgaQAAgYASgTQASgRAYAAQAaAAASARg");
	this.shape_18.setTransform(64.2,-31.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApAAIgVgiIgoAAIgUAiIAUAkIAoAAg");
	this.shape_19.setTransform(64.2,-31.7);

	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.2,-31.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARA1QAQgFALgOQALgPAAgSQAAgVgQgQQgQgQgXAAQgWAAgQAQQgQAQAAAVQAAASALAPQAKAOARAF");
	this.shape_20.setTransform(0.2,-26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkDB8IBqhUIB1hEICcg/ICMgg");
	this.shape_21.setTransform(1.5,-34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFtkrQgMApgfAgQg7A7hGgFIl4AAQg4ABgWAsIhXCWQgeAxgwgDIgkAAQgSgBgVAKQgVAKgNATQgRAWAAAdQgDA9A+AYQAIADAXADIAkAAQAxgDAdAwIBXCWQAYAtA2AAIKGAAQAoAEAfgmQATgVAAgiIAAsfQgDgYgCgGQgXg+g+ACQg4AAgZAzQgLAUACATIAAAvQAAAjgIASg");
	this.shape_22.setTransform(-10.4,-3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABaIAAiz");
	this.shape_23.setTransform(23.3,-37.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPgIIAPAAIAQAR");
	this.shape_24.setTransform(24.9,-36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKQgLgLAAgOQAAgOALgKQAKgKAOAAQAOAAALAKg");
	this.shape_25.setTransform(16.6,30.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAVQgUAUgdAAQgcAAgUgUQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_26.setTransform(16.6,30.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQASASAAAYQAAAZgSASQgSASgZAAQgZAAgSgSQgSgSAAgZQAAgYASgSQASgSAZAAQAZAAASASg");
	this.shape_27.setTransform(16.6,30.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIgjgVIgjAVIAAAnIAjAVIAjgVg");
	this.shape_28.setTransform(16.6,30.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQALAKAAAOQAAAOgLALQgLAKgOAAQgOAAgKgKQgLgLAAgOQAAgOALgKQAKgKAOAAQAOAAALAKg");
	this.shape_29.setTransform(-8.6,-5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygxQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUg");
	this.shape_30.setTransform(-8.6,-5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQARASAAAZQAAAagRASQgSARgaAAQgZAAgSgRQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASg");
	this.shape_31.setTransform(-8.6,-5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgjAVIAAAnIAjAVIAkgVg");
	this.shape_32.setTransform(-8.6,-5.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKQgLgLAAgOQAAgOALgKQAKgKAOAAQAOAAALAKg");
	this.shape_33.setTransform(16.6,-5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgxQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUg");
	this.shape_34.setTransform(16.6,-5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSASQgSARgZAAQgZAAgSgRQgSgSAAgaQAAgZASgSQASgSAZAAQAZAAASASg");
	this.shape_35.setTransform(16.6,-5.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIgjgVIgjAVIAAAnIAjAVIAjgVg");
	this.shape_36.setTransform(16.6,-5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADdgvImIAAQgugBgCAwQgBAtAxADIGIAA");
	this.shape_37.setTransform(-10.6,30.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgvIiMAAQgugBgCAwQgBAtAxADICMAA");
	this.shape_38.setTransform(-23.2,-5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJARIgEAAQgNgEAAgNQAAgLANgFIAEAAIASAAIAFAAQAMAEAAAMQAAANgMAEIgFAAIAAAHIAGAAQATgFAAgTQAAgMgKgGQgGgFgIAAIgSAAQgXgBgCAYQAAAVAXADIABAAg");
	this.shape_39.setTransform(-45.9,-16.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AILlKIgYgMIpUAAIgCABIgGACIjtAAIgDgBIgCgBIgDgBIisgBIAAKvICsAAIADgCIACgBIADAAIDtAAIAGABIACACIJUAAIAYgN");
	this.shape_40.setTransform(-63.9,12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACChCIAAgDIgBgHIgBgDIgCgDIgCgDIgCgDIgCAAIjuAAIgCAAIgCADIgCADIgCADIgCAGIAAAEIAACf");
	this.shape_41.setTransform(-86.4,37.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiAhZIAACgIAAADIACAHIACADIACADIAAABIACABIADABIDsAAIADgBIABgBIABgBIADgFIACgFIABgGIAAig");
	this.shape_42.setTransform(-86.4,-13.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfgUQAEADAIAAIApAAQAKAIAAAMQAAANgKAFIgqAAQgJAAgCgO");
	this.shape_43.setTransform(-96.2,-14.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfAVQAEgDAIAAIApAAQAKgIAAgMQAAgNgKgFIgqAAQgJAAgCAO");
	this.shape_44.setTransform(-96.2,38.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAUIAAgm");
	this.shape_45.setTransform(-94,-14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_46.setTransform(-94,38.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_47.setTransform(4,-1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAIiMAA");
	this.shape_48.setTransform(-20.7,-10.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABMAAIiXAA");
	this.shape_49.setTransform(4,-10.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABWIAAiq");
	this.shape_50.setTransform(86.3,21.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAaIgHgZIgCgZ");
	this.shape_51.setTransform(23.8,-32.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcAYIg3gv");
	this.shape_52.setTransform(108.7,-23.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhSg2IA6AhIBrBM");
	this.shape_53.setTransform(97.7,-31.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_54.setTransform(109.7,-12.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_55.setTransform(77.3,-41.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAga");
	this.shape_56.setTransform(77.3,-38.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAfIAAg9");
	this.shape_57.setTransform(77.3,-17.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAIIAAgP");
	this.shape_58.setTransform(68.7,-43.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_59.setTransform(68.7,-19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANAAIgZAA");
	this.shape_60.setTransform(91.9,-12.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_61.setTransform(89.8,-12.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAj");
	this.shape_62.setTransform(59.7,-44.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIABAA");
	this.shape_63.setTransform(86.4,-38);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAiCIAAEF");
	this.shape_64.setTransform(86.3,-25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgGIAdAN");
	this.shape_65.setTransform(88,-37.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_66.setTransform(90.4,-12.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAoIAAhP");
	this.shape_67.setTransform(111.5,-16.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgCIAPAF");
	this.shape_68.setTransform(78.1,-41.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgHgDIAMAFIADAC");
	this.shape_69.setTransform(84.8,-38.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgEIAdAJ");
	this.shape_70.setTransform(75.8,-42.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag8AmIACgEQAghFBXgC");
	this.shape_71.setTransform(51,-14.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAg/IAAB/");
	this.shape_72.setTransform(106,-19.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAh2IAADt");
	this.shape_73.setTransform(89.5,-24.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZALIgxgV");
	this.shape_74.setTransform(81.5,-40.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIABgF");
	this.shape_75.setTransform(24.9,-37.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABOIAAic");
	this.shape_76.setTransform(-73.4,38.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_77.setTransform(109.9,8.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_78.setTransform(87.3,8.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_79.setTransform(98.6,-13.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_80.setTransform(96.4,8.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_81.setTransform(105.4,8.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_82.setTransform(91.9,8.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgRAAIAjAA");
	this.shape_83.setTransform(98.6,10.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgeAA");
	this.shape_84.setTransform(100.9,8.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3C456A").s().p("ABSIMQhiAAiXg4Io3AAIgIgHIjwAAIgHAEIisAAIAAquICqAAIAJAEIDqAAIAKgFIHvgBIBBg1IBPg2QA9gjBQglQBRglBhgUIA1gIQAVg7A+AAQA9AAAUAuQA9gBBeAPIBXASIA+ATIBcAiIBAAgIBQAwIBJA1IBBA4IAABRQADgHAWARQAWAQAAAUIAABAIghAAIAABDIgIAAIAAAcIgFADIgOAXIgHAAQgLgTgEgEQgDgFgDADIgSAaIgGAAIgMgVIgPAUIhMAAIgNgVIgNAVIgGAAIgRgaIgFAAIgRAcIgGAAIgNgWIAAhkIgvAAIAAgjQgHh+h3gKIiFAAQg/AAgpBIIAAEiQAAAJAXACID5AAIB2gyQAOgFABgEIEuAAIAAAdQAAAWgOAEIjFBRIAEALIlLCKIgGgLIjVBWQh8Amh8AAQgiAAghgDgAgkkrQgQAQAAAXQAAASAKAOQAKAOARAFIAhAAQAQgFALgOQAKgOAAgSQAAgXgQgQQgPgQgXAAQgWAAgPAQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-53.6,234.3,107.3);


(lib.btn_jaw9_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStyleM("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3,25.8,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AhCB8IgQgBQgIgBgFgDQgGgEgCgGQgDgGAAgJIAAgJIABgKQABgFADgCQACgDAFgBQAEgCAHAAIAAgBIgGgEQgCgCgBgDQgCgDAAgKQAAgJACgEQABgFAEgCQAEgEAIgBIAUgBIAaAAQAPABAIABQAIABAEAEQAFACACAHQABAFAAAKIAAAGIgbAAIAAgFQAAgEgEgCQgDgDgIAAIgXAAQgHAAgDACQgCABAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABACAFACIA2AbIAAgNIAaAAIAAAOIgBANIATAKIgJAUIgTgKQgCAEgEADIgIADIgKABgAhKBMQgCADAAAIIABAHQAAADADABQACADAKABIAwAAIAAgBIgzgaIgFgBQgEAAgCACgAEQB7IAAhNIAAAAIgsBNIgZAAIgrhNIgBAAIAABNIggAAIAAhsIAzAAIAmBGIAlhGIA0AAIAABsgAktB7IAAhsIAhAAIAABQIBLAAIAAAcgAF1BLIAAg8IAXAAIAAA8gAFQBLIAAg8IAXAAIAAA8gAljBLIAAg8IAXAAIAAA8gAmIBLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFAEIgGACIgIAAgAFggiIgMgCQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgCAAgDIAVAAIAAACQAAAHgCADQgCADgFADQgEACgFAAIgMACgAF5hLIgBgEIgCgDIgGgBIgIgBQgMABgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgCQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgBQACgCAAgEIAAgFIAUAAIAAAIQAAAEgCAEQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgCQgGgBgDgCQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAGIACACQACACAHAAIAgAAIAIgBIADgCIABgEIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIADgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHABIgWACgAkSgiIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBABAAAAQAAAAgBABQAAAAAAABQAAABAAABIgWAAQAAgHABgDQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAFIAAAoIgWAAIAAgGIgIAGQgDACgJAAgAkQg8QgCABAAAEQAAAEACABIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgBIADgDIABgGIAAg4IAaAAIAABDIgCAGIgDAGIgEADQgFADgHABIgQACgAEbgkIAAhWIAXAAIAABWgAiCgkIgMggIAAAAIgMAgIgeAAIgYg8IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA8g");
	this.shape.setTransform(2.9,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw8_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStyleK("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.6,25.9,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AAeB8IgugqIgPAAIAAAqIghAAIAAhsIAhAAIAAAnIAPAAIApgnIAuAAIg7A1IBCA3gACIBLIAAg7IAXAAIAAA7gABjBLIAAg7IAXAAIAAA7gAh3BLIAAg7IAXAAIAAA7gAicBLIAAg7IAXAAIAAA7gADPgOIAAgPIACAAQAIAAADgBIADgDIABgEIgIAAIgcg7IAZAAIASAqIARgqIAZAAIgiBIIgDAFIgFADIgGACIgIAAgAFggiIgMgBQgGgBgEgCIgEgFIgDgEIgCgHIgBgJIAAgGQAAgGACgIQACgFAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAAKIg4AAIAAAFIABADIADADQADACAHAAIAIAAIAHgBIAEgCQACgBAAgDIAVAAIAAACQAAAGgCADQgCAEgFADQgEACgFAAIgMABgAF5hKIgBgFIgCgCIgGgBIgIgBQgMAAgCACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgBgEgCQgEgDgCgEQgCgFAAgFIAAgZIgLAAIAAgQIALAAIAAgOIAXAAIAAAOIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAZgiIgQgBQgGgBgDgCQgEgEgCgEQgCgFAAgGIAAgGIAZAAIABAFIACADQACABAHAAIAgAAIAIAAIADgDIABgEIgBgEQgBgCgEgBIgLgBIgVAAIgXgBIgIgCIgFgCIgEgEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgEAAgJIABgLQABgGADgDIADgDIAGgCIAJgDIAwAAQAIAAAKACIAGADIAEACQAEAEABAFIABAKIAAACIgbAAQAAgEgCgCIgEgCIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAEIACAHIAAAIQAAALgCAEQAAACgCACIgEAEIgGADIgHABIgWABgAkSgiIgJgBQgFAAgCgCIgFgGQgCgDAAgGIAAgEQAAgHACgDQADgEAEgCQAGgCATAAIAPABQAGABADADIAAgFQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIgWAAQAAgGABgEQACgEADgBQADgDAGgBIAMAAIAbAAIAKABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAkQg8QgCACAAAEQAAADACABIAKACIAGAAQAIAAAHgCQADgBAAgEQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgBQgHgCgEgEQgEgDgBgFQgCgFAAgIIAAgKIAaAAIAAAHQAAAFACACQADACAGABIALAAQAHgBADgBIADgDIABgFIAAg5IAaAAIAABEIgCAGIgDAFIgEAEQgFACgHACIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape.setTransform(2.4,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw7_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStyleF("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,25.7,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("Ag1B8IAAhsIBwAAIAAAZIhPAAIAAAVIBLAAIAAAZIhLAAIAAAlgAB9BLIAAg7IAXAAIAAA7gABYBLIAAg7IAXAAIAAA7gAhsBLIAAg7IAXAAIAAA7gAiRBLIAAg7IAXAAIAAA7gADPgOIAAgPIACAAQAIAAADgCIADgCIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBIIgDAFIgFADIgGACIgIAAgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgGIgBgJIAAgGQAAgFACgJQACgFAEgDQAEgEAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAFAAAJIAAAJIg4AAIAAAEIABAFIADACQADABAHAAIAIAAIAHAAIAEgCQACgBAAgDIAVAAIAAACQAAAGgCAEQgCADgFADQgEABgFABIgMABgAF5hKIgBgFIgCgCIgGgBIgIgBQgMAAgCACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgPIAXAAIAAAPIAkAAIAAARIgkAAIAAAXQAAADADABIAGABQAGABACgCQACgCAAgEIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAZgiIgQgBQgGgBgDgDQgEgDgCgEQgCgEAAgIIAAgFIAZAAIABAFIACADQACABAHABIAgAAIAIgBIADgDIABgEIgBgEQgBgCgEgBIgLgBIgVAAQgRAAgGgBIgIgBIgFgDIgEgEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgDIAJgCIAwAAQAIAAAKACIAGADIAEADQAEACABAGIABAKIAAACIgbAAQAAgEgCgDIgEgBIgkgBQgFABgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAEABAWAAIAaABIAJABIAGACQADABACADIADAEIACAHIAAAJQAAAKgCAEQAAACgCADIgEADIgGADIgHABIgWABgAkSgiIgJAAQgFgBgCgCIgFgFQgCgEAAgGIAAgFQAAgFACgFQADgDAEgBQAGgDATAAIAPABQAGAAADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADAEQADACACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAkQg8QgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgDgDgCQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgBQgHgCgEgEQgEgDgBgFQgCgGAAgHIAAgKIAaAAIAAAHQAAAFACACQADADAGAAIALAAQAHAAADgCIADgDIABgFIAAg5IAaAAIAABEIgCAGIgDAFIgEADQgFAEgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape.setTransform(2.4,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw6_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStyleR("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,25.7,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AAiB8IgBgUIgCgFIgEgCIgHgBIgzAAIAAAcIghAAIAAhsIBjAAQAJAAAHACQAGACAEAEQADAEACAHQACAFAAAHIAAAIIgBAJIgDAIQgCAEgEABQgDADgGABIAAABIAHABIAGAFIAEAGQABAFAAAHIAAASgAgfBFIA2AAQAGAAADgDQADgDAAgGIAAgDIgBgGIgDgDQgDgCgIAAIgzAAgACIBLIAAg7IAXAAIAAA7gABjBLIAAg7IAXAAIAAA7gAh3BLIAAg7IAXAAIAAA7gAicBLIAAg7IAXAAIAAA7gADPgOIAAgPIACAAQAIAAADgCIADgCIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBIIgDAFIgFADIgGACIgIAAgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgGIgBgJIAAgGQAAgFACgJQACgFAEgDQAEgEAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAFAAAJIAAAJIg4AAIAAAEIABAFIADACQADABAHAAIAIAAIAHAAIAEgCQACgBAAgDIAVAAIAAACQAAAGgCAEQgCADgFADQgEABgFABIgMABgAF5hKIgBgFIgCgCIgGgBIgIgBQgMAAgCACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgPIAXAAIAAAPIAkAAIAAARIgkAAIAAAXQAAADADABIAGABQAGABACgCQACgCAAgEIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAZgiIgQgBQgGgBgDgDQgEgDgCgEQgCgEAAgIIAAgFIAZAAIABAFIACADQACABAHABIAgAAIAIgBIADgDIABgEIgBgEQgBgCgEgBIgLgBIgVAAQgRAAgGgBIgIgBIgFgDIgEgEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgDIAJgCIAwAAQAIAAAKACIAGADIAEADQAEACABAGIABAKIAAACIgbAAQAAgEgCgDIgEgBIgkgBQgFABgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAEABAWAAIAaABIAJABIAGACQADABACADIADAEIACAHIAAAJQAAAKgCAEQAAACgCADIgEADIgGADIgHABIgWABgAkSgiIgJAAQgFgBgCgCIgFgFQgCgEAAgGIAAgFQAAgFACgFQADgDAEgBQAGgDATAAIAPABQAGAAADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAAAAAQgBABAAABQAAAAAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADAEQADACACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAkQg8QgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgDgDgCQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgBQgHgCgEgEQgEgDgBgFQgCgGAAgHIAAgKIAaAAIAAAHQAAAFACACQADADAGAAIALAAQAHAAADgCIADgDIABgFIAAg5IAaAAIAABEIgCAGIgDAFIgEADQgFAEgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape.setTransform(2.4,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw5_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStylej("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,25.8,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("ADaB8QgMAAgIgBQgIgCgFgEQgFgFgDgGQgCgHAAgKIAAgMIAgAAIAAAJQAAAGAEADQADACAIAAIANAAQAJAAAEgCQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAAAQACgDAAgEIAAhHIAhAAIgBBUIgCAIIgEAGIgFAFQgGADgJACIgUABgAgKB8IgRgBQgIgBgFgDQgFgEgDgGQgDgGAAgJIAAgJIABgKQACgFACgCQADgDAEgBQAFgCAHAAIAAgBIgGgEQgDgCgBgDQgBgDAAgKQAAgJABgEQACgFAEgCQAEgEAHgBIAUgBIAaAAQAPABAIABQAIABAFAEQAEACACAHQACAFAAAKIAAAGIgdAAIAAgFQAAgEgDgCQgEgDgIAAIgXAAQgGAAgCACQgDABAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACAFACIA1AbIAAgNIAbAAIAAAOIgBANIATAKIgJAUIgTgKQgDAEgEADIgJADIgKABgAgSBMQgDADAAAIIABAHQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQADADAKABIAuAAIABgBIgygaIgFgBQgEAAgCACgAizB7IAAgoIhHAAIAAAoIghAAIAAhsIAhAAIAAAmIBHAAIAAgmIAhAAIAABsgAFiBLIAAg8IAXAAIAAA8gAE9BLIAAg8IAXAAIAAA8gAlRBLIAAg8IAXAAIAAA8gAl2BLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFAEIgGACIgIAAgAFggiIgMgCQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgCAAgDIAVAAIAAACQAAAHgCADQgCADgFADQgEACgFAAIgMACgAF5hLIgBgEIgCgDIgGgBIgIgBQgMABgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgCQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgBQACgCAAgEIAAgFIAUAAIAAAIQAAAEgCAEQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgCQgGgBgDgCQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAGIACACQACACAHAAIAgAAIAIgBIADgCIABgEIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIADgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHABIgWACgAkSgiIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBABAAAAQAAAAgBABQAAAAAAABQAAABAAABIgWAAQAAgHABgDQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAFIAAAoIgWAAIAAgGIgIAGQgDACgJAAgAkQg8QgCABAAAEQAAAEACABIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgBIADgDIABgGIAAg4IAaAAIAABDIgCAGIgDAGIgEADQgFADgHABIgQACgAEbgkIAAhWIAXAAIAABWgAiCgkIgMggIAAAAIgMAgIgeAAIgYg8IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA8g");
	this.shape.setTransform(2.3,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw4_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStyleg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.1,25.8,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AgVB8QgMAAgIgBQgLgDgEgDIgGgFIgEgHIgCgJIgBgLIAAggIABgLIACgJIAEgHIAGgEQAEgEALgDQAIgCAMAAIAxAAQAJABAOACIAHADIAGAEQAEAEACAHQABAFAAAKIAAADIghAAIgBgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgJAAIgkAAIgKAAQgEACgCACQgDACgBAFIgBALIAAAOIABALQABAFADACQACACAEABIAKABIAjAAQAIAAAEgCQADAAABgDQABgDAAgEIAAgCIgoAAIAAgXIBKAAIAAAfIgBALIgCAHIgEAGIgGAEIgIACIgJACIgYAAgACKBLIAAg8IAXAAIAAA8gABlBLIAAg8IAXAAIAAA8gAh5BLIAAg8IAXAAIAAA8gAieBLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFAEIgGACIgIAAgAFggiIgMgCQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgCAAgDIAVAAIAAACQAAAHgCADQgCADgFADQgEACgFAAIgMACgAF5hLIgBgEIgCgDIgGgBIgIgBQgMABgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgCQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgBQACgCAAgEIAAgFIAUAAIAAAIQAAAEgCAEQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgCQgGgBgDgCQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAGIACACQACACAHAAIAgAAIAIgBIADgCIABgEIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIADgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHABIgWACgAkSgiIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIgWAAQAAgHABgDQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAFIAAAoIgWAAIAAgGIgIAGQgDACgJAAgAkQg8QgCABAAAEQAAAEACABIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgBIADgDIABgGIAAg4IAaAAIAABDIgCAGIgDAGIgEADQgFADgHABIgQACgAEbgkIAAhWIAXAAIAABWgAiCgkIgMggIAAAAIgMAgIgeAAIgYg8IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA8g");
	this.shape.setTransform(1.9,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw3_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawStylenp("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,25.7,1,1,0,0,0,50.1,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AgPB8IgRgBQgIgBgFgDQgFgEgDgGQgDgGAAgJIAAgIIABgLQABgFADgCQADgDAEgCQAEgBAIAAIAAgBIgHgEIgDgFQgBgDAAgKQAAgJABgEQABgFAEgDQAFgDAHgBIAUAAIAaAAQAPgBAHACQAJABAFAEQAEACACAHQABAFABAKIAAAGIgdAAIAAgFQAAgEgEgCQgDgDgIAAIgWAAQgHAAgDACQgCABAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQACABAFADIA1AbIAAgNIAbAAIAAAOIgBANIATAKIgJAUIgTgKQgDAFgEACIgJADIgKABgAgXBMQgDADAAAIIABAIQAAACADABQADACAJACIAvAAIABgBIgzgaIgEgBQgFAAgBACgACxB7IAAhsIBbAAQAIAAAMACIAGAEIAGAEQADAGADAHQACAFAAAJIAAAJQgBAHgBAGQgCAGgDAFQgEAFgFADQgKADgGAAIhCAAIAAAbgADSBFIA1AAQAFAAADgDQACgDAAgFIAAgFQAAgFgDgDQgDgDgIAAIgxAAgAjLB7Ig+hPIgBAAIAABPIghAAIAAhsIA0AAIA+BPIAAhPIAiAAIAABsgAFzBLIAAg8IAXAAIAAA8gAFOBLIAAg8IAXAAIAAA8gAlhBLIAAg8IAXAAIAAA8gAmGBLIAAg8IAXAAIAAA8gACggOIAAgQIACAAQAIAAADgBIADgCIABgFIgIAAIgcg6IAZAAIARAqIASgqIAZAAIgiBIIgDAEIgGADIgGADIgIAAgAGHgjIgNgBQgGAAgDgDQgDgCgCgEQgCgEABgGIAYAAQAAABAAABQAAAAAAABQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgIgBIgVAAIgNgBQgGgBgDgDQgDgCgCgEQgBgFAAgGQAAgGACgEQACgDAEgBQAEgCAFgBIALgBIARAAIASABQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDgBQgDgBgLABQgJgBgDABQgDABAAAEQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAQACABAIAAIARAAQAKAAAGABQAGACADADQACACABAEIABAIQABAHgCADQgCAEgEACQgDACgHABIgPABgAEwgjIgLgBQgGAAgEgDIgEgEIgDgFIgDgHIAAgJIAAgFQAAgGACgIQACgGAEgDQAEgDAFgBIALgCIARAAIAPACQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQACABAIAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAACQAAAHgDADQgBADgFADQgEACgFAAIgNABgAFJhLIAAgEIgCgDIgGgBIgIAAQgMAAgCABQgBABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAIgBAEIAhAAIAAAAgABlgjIgKgBQgGAAgDgDQgEgCgCgFQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAXQAAADADACIAGABQAFAAACgCQACgBAAgEIAAgFIAVAAIAAAIQAAAEgCAEQgCAEgCADQgEADgFABQgFABgGAAgAgWgjIgPgBQgGAAgFgDQgDgDgCgFQgDgEAAgHIAAgGIAbAAIABAGIACACQACACAHAAIAfAAIAIgBIACgCIABgFIgBgDQAAgDgEAAIgLgBIgUAAQgSAAgFgCIgIgBIgGgDIgEgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQgCgEAAgIIABgMQACgFADgEIAEgDIAGgCIAIgCIAwAAQAHAAALACIAGACIAEADQADADABAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIgkgBQgFAAgCACQgDACAAADIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAEABAVAAIAaABIAJACIAGACQADABACACIADAFIABAHIABAIQAAALgCADQAAADgDACIgDAEIgGACIgIABIgVABgAlBgjIgJAAQgFgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAHgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgDgBgGAAIgOAAIgHAAQAAABAAAAQgBAAAAABQAAAAAAABQAAABgBABIgVAAQAAgGABgFQACgDADgCQADgCAFgBIANgBIAbAAIAKACQAFABADADQADADABAEQACAEAAAGIAAAnIgWAAIAAgGIgIAGQgDABgJAAgAlAg8QgBABAAAEQgBADADACIAJABIAHAAQAIAAAGgBQAEgCAAgEQgBgDgCgBQgCgCgKAAIgKAAQgHAAgDACgAmbgjQgKAAgHgBQgGgCgEgDQgEgDgCgFQgCgGAAgIIAAgKIAbAAIAAAIQgBAEADADQADACAGAAIAKAAQAIAAADgBIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAEIgEAEQgFADgHABIgQABgADsgkIAAhWIAXAAIAABWgAixgkIgMggIgBAAIgLAgIgeAAIgZg8IAaAAIAOAsIAQgsIAWAAIAPAsIAOgsIAaAAIgYA8g");
	this.shape.setTransform(2.4,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_jaw2_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_JawStylecd("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.4,25.8,1,1,0,0,0,50.1,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AgfB8IgQgBQgIgBgFgDQgFgEgDgGQgDgGAAgJIAAgJIABgKQABgFADgCQADgDAEgBQAFgCAGAAIAAgBIgGgEQgCgCgBgDQgCgDABgKQgBgJACgEQABgFAFgCQAEgEAHgBIAUgBIAZAAQAPABAJABQAIABAEAEQAFACACAHQABAFAAAKIAAAGIgcAAIAAgFQAAgEgEgCQgDgDgIAAIgWAAQgHAAgCACQgDABAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQACACAEACIA1AbIAAgNIAbAAIAAAOIgBANIATAKIgJAUIgTgKQgCAEgEADIgJADIgKABgAgnBMQgCADAAAIIABAHQAAADADABQACADALABIAuAAIABgBIgzgaIgEgBQgFAAgCACgAkCB8QgLAAgJgBQgLgDgEgDIgGgFIgDgHIgDgJIgBgLIAAggIABgLIADgJIADgHIAGgEQAEgEALgDQAJgCALAAIAnAAQAMABAQACIAKADIAHAEIAFAFIACAHQABAHAAANIghAAIAAgEQABgFgFgDQgEgCgHAAIgkAAQgHABgFABQgDACgCADQgCACgCAFIgBAJIAAALIABAKQABAFACACQADACADABQAEACAFAAIAtgBQAFAAABgCQADgBAAgDIABgIIAiAAIAAAKQAAAHgCAGQgBAGgFAEQgEAFgIACQgMACgIAAgACkB7IAAhsIBkAAQAJAAAMACIAIADIAGADIAEAGIAEAGQACAIAAAJIAAAhQAAALgCAHIgEAHIgEAEIgGAFIgIADQgMABgJAAgADFBfIA7AAIAJgBQAEAAACgCQACgCABgFIABgJIAAgPIgBgJQgBgEgCgCQgCgCgEgBIgJgBIg7AAgAF3BLIAAg8IAXAAIAAA8gAFSBLIAAg8IAXAAIAAA8gAllBLIAAg8IAWAAIAAA8gAmKBLIAAg8IAWAAIAAA8gACggOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgEAEIgEAEIgHACIgIAAgAGHgiIgNgCQgFgBgEgCQgDgCgCgEQgCgEABgGIAXAAQAAABABABQAAABAAAAQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgBgEQgCgFAAgGQAAgFACgFQACgDAEgBQAEgCAFgBIALAAIARAAIASAAQAGABAEACQAEADACADQABADAAAGIgXAAQgBgDgDgBQgDgBgLAAQgJAAgDABQgDABAAAEQAAAAAAAAQAAABABAAQAAAAAAABQABAAABAAQACABAIAAIARAAQAKAAAGABQAGACADADQACACABAEIABAIQABAHgCADQgBAEgFACQgDACgHABIgQACgAEwgiIgLgCQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQADgDAGgBIALgBIARAAIAPABQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIADgCQACgCAAgDIAWAAIAAACQAAAHgDADQgCADgEADQgEACgFAAIgNACgAFJhLIAAgEIgCgDIgGgBIgIgBQgMABgCABQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIAAAEIAhAAIAAAAgABlgiIgKgCQgGgBgDgCQgEgDgCgEQgCgEAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAXQAAADADACIAGABQAFAAACgBQACgCAAgEIAAgFIAVAAIAAAIQAAAEgCAEQgBAEgDADQgEADgFABQgFACgGAAgAgWgiIgPgCQgHgBgEgCQgDgDgDgFQgCgEAAgHIAAgGIAbAAIABAGIACACQACACAGAAIAgAAIAIgBIACgCIABgEIgBgFQgBgCgDAAIgMgBIgTAAIgXgBIgIgCIgGgDIgEgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBQgBgEgBgIIABgLQACgGADgDIAEgEIAGgCIAJgCIAvAAQAHAAALACIAGACIAEADQADADACAFIAAALIAAACIgaAAQAAgFgCgCIgEgBIgkgBQgFAAgCACQgDACAAADIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAEABAVAAIAaABIAJACIAGACQADABACACIADAFIABAHIABAIQAAALgCADQAAADgCACIgFADIgFADIgHABIgWACgAlBgiIgJgBQgFgBgCgCIgGgFQgBgDAAgGIAAgFQAAgGACgEQADgDADgCQAHgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgDgCgGAAIgNAAIgIABQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAABIgXAAQAAgHACgDQABgEAEgCQADgCAFgBIANAAIAaAAIALABQAEABAEADQADADABAEQACAEAAAFIAAAoIgWAAIAAgGIgIAGQgDACgJAAgAk/g8QgCABAAAEQAAAEACABIAJABIAHAAQAIAAAGgBQAEgCAAgEQAAgDgDgBQgCgBgKAAIgKAAQgHAAgCABgAmbgiQgKAAgGgCQgHgBgEgEQgEgDgCgFQgBgGAAgIIAAgKIAaAAIAAAHQgBAFADADQADACAGAAIAKAAQAIAAADgBIADgDIABgGIAAg4IAaAAIAABDIgDAGIgCAGIgEADQgFADgHABIgQACgADsgkIAAhWIAXAAIAABWgAixgkIgMggIgBAAIgLAgIgeAAIgZg8IAaAAIAOAsIAQgsIAWAAIAPAsIAPgsIAZAAIgYA8g");
	this.shape.setTransform(2.3,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGDQIyLAAIAAmfISLAAg");
	this.shape_1.setTransform(2.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApEDRIAAmhISKAAIAAGhg");
	this.shape_2.setTransform(2.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.btn_base_square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_jawSyleS("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,25.7,1,1,0,0,0,45.4,16.3);

	this.instance_1 = new lib.generic_square_button_bkg("synched",0);
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C2D7").s().p("AgYB8IgTgBQgJgBgFgDQgFgDgCgGQgCgFAAgKIAAgHIAhAAIABAHIADADQACACAIABIAoAAQAHAAADgCIADgDIABgEQAAgFgBgBQgCgCgEgBIgOgCIgYAAIgegBIgKgCIgHgDIgFgFIgDgFQgBgFAAgLIABgOQABgHAEgEIAFgEIAIgEIALgCIA7AAQAKgBANADIAHADIAFAEQAEADACAHIABANIAAADIghAAQAAgGgDgCIgFgCIgsgBQgGAAgEACQgDACAAAFIABAFQACACADABQAGABAbAAIAgABIALACIAIACQAEACACADIAEAGIACAIIABAKQgBANgCAFIgDAGIgFAFIgHADIgKABIgbABgACIBLIAAg8IAXAAIAAA8gABjBLIAAg8IAXAAIAAA8gAh3BLIAAg8IAXAAIAAA8gAicBLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIAAADgBIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFADIgGADIgIAAgAFggjIgMgBQgGAAgEgDIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgIQACgGAEgDQAEgDAFgBIAMgCIAQAAIAPACQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgBAAgEIAVAAIAAACQAAAHgCADQgCADgFADQgEACgFAAIgMABgAF5hLIgBgEIgCgDIgGgBIgIAAQgMAAgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAEIAiAAIAAAAgACUgjIgKgBQgFAAgEgDQgEgCgCgFQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgEIAAgFIAUAAIAAAIQAAAEgCAEQgBAEgDADQgEADgEABQgGABgGAAgAAZgjIgQgBQgGAAgDgDQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAGIACACQACACAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgDgEAAIgLgBIgVAAQgRAAgGgCIgIgBIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgMQABgFADgEIADgDIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEAEIgGACIgHABIgWABgAkSgjIgJAAQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgBgHAAIgNAAIgHAAQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIgWAAQAAgGABgFQACgDADgCQADgCAGgBIAMgBIAbAAIAKACQAFABADADQADADACAEQABAEAAAGIAAAnIgWAAIAAgGIgIAGQgDABgJAAgAkQg8QgCABAAAEQAAADACACIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgCgJAAIgLAAQgHAAgCACgAlsgjQgKAAgGgBQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIALAAQAHAAADgBIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAEIgEAEQgFADgHABIgQABgAEbgkIAAhWIAXAAIAABWgAiCgkIgMggIAAAAIgMAgIgeAAIgYg8IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA8g");
	this.shape.setTransform(2.4,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7C8CA").ss(1,1,1).p("AJGCjIyLAAIAAlGISLAAg");
	this.shape_1.setTransform(2.5,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112039").s().p("ApECjIAAlFISKAAIAAFFg");
	this.shape_2.setTransform(2.5,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,6.5,118.3,34.7);


(lib.Box_jaw9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jaw9_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.5,35.2,0.6,0.6,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.2,-6.2,140.4,58.9);


(lib.Box_jaw8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgFgBgEgDQgDgCgCgEQgCgEABgFIAYAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgNgBQgGgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIARAAIASAAQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgJAAgDABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAIAAIARAAQAKAAAGACQAGABADADQACADABAEIABAHQABAHgCADQgCAEgEADQgDACgHABIgPABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIALgBIARAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQACABAIAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAADQAAAGgDADQgBAEgFACQgEACgFABIgNABgAC1BAIAAgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAFIAhAAIAAAAgABQBoIgKgBQgFgBgDgDQgEgCgDgEQgCgFABgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgWAAQABgGABgEQACgEADgCQADgCAGgBIAMAAIAaAAIAKABQAEABAEADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAKABIAGAAQAHAAAHgBQACgCAAgDQABgEgDgBQgDgBgHAAIgLAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAjGBoIgJgBQgEgBgEgDQgDgDgDgEIgBgGIgBgVQAAgFACgHQADgFADgDQAEgCAEgBIAJgBIAjAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAjEA8IgCAEIgBAFIAAAGIABAFIACAEIAFACIAVAAQAEAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgFIAAgIIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIgVAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgUAAQAAgGgCgDIgEgCIgFAAQgHAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgFABIgJABgAB6gOIgJAAQgFgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQADgDADgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAB8gnQgCABAAAEQAAADACACIAKABIAGAAQAIAAAGgCQADgBABgEQAAgDgDgBQgCgCgJAAIgLAAQgHAAgCACgAg5gOIgMgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQAEgDAFgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAIgBIADgBQACgCAAgDIAWAAIAAACQAAAGgCAEQgDADgEADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAhAAIAAAAgAkYgOQgJAAgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgaIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAaIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEKgPIgMghIgBAAIgLAhIgeAAIgYg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAZAAIgYA9gAh9gPIAAgjQAAgEgEgDIgFgBIgLgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAEgBAMgBIALABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(199,72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(64.4,72);

	this.instance = new lib.jaw8_drawingcopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.1,24,0.45,0.45,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.jaw8_drawingcopy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.1,24.9,0.45,0.45,0,0,0,0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_2.setTransform(134.1,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.3,-15.4,245.2,97.8);


(lib.Box_jaw7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(64.4,72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgFgBgEgDQgDgCgCgEQgCgEABgFIAYAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgNgBQgGgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIARAAIASAAQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgJAAgDABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAIAAIARAAQAKAAAGACQAGABADADQACADABAEIABAHQABAHgCADQgCAEgEADQgDACgHABIgPABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIALgBIARAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQACABAIAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAADQAAAGgDADQgBAEgFACQgEACgFABIgNABgAC1BAIAAgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAFIAhAAIAAAAgABQBoIgKgBQgFgBgDgDQgEgCgDgEQgCgFABgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgWAAQABgGABgEQACgEADgCQADgCAGgBIAMAAIAaAAIAKABQAEABAEADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAKABIAGAAQAHAAAHgBQACgCAAgDQABgEgDgBQgDgBgHAAIgLAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAjGBoIgJgBQgEgBgEgDQgDgDgDgEIgBgGIgBgVQAAgFACgHQADgFADgDQAEgCAEgBIAJgBIAjAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAjEA8IgCAEIgBAFIAAAGIABAFIACAEIAFACIAVAAQAEAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgFIAAgIIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIgVAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgUAAQAAgGgCgDIgEgCIgFAAQgHAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgFABIgJABgAB6gOIgJAAQgFgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQADgDADgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAB8gnQgCABAAAEQAAADACACIAKABIAGAAQAIAAAGgCQADgBABgEQAAgDgDgBQgCgCgJAAIgLAAQgHAAgCACgAg5gOIgMgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQAEgDAFgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAIgBIADgBQACgCAAgDIAWAAIAAACQAAAGgCAEQgDADgEADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAhAAIAAAAgAkYgOQgJAAgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgaIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAaIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEKgPIgMghIgBAAIgLAhIgeAAIgYg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAZAAIgYA9gAh9gPIAAgjQAAgEgEgDIgFgBIgLgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAEgBAMgBIALABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(199,72);

	this.instance = new lib.jaw7_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.1,24,0.45,0.45,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.jaw7_drawing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.1,24.9,0.45,0.45,0,0,0,0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_2.setTransform(134.1,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,-9,252.5,91.4);


(lib.box_jaw5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jaw5_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.3,26.8,0.5,0.5,0,0,0,120.6,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.9,122.4,55.4);


(lib.Box_jaw4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(64.4,72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgFgBgEgDQgDgCgCgEQgCgEABgFIAYAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQACABAJAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgNgBQgGgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIARAAIASAAQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgJAAgDABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAIAAIARAAQAKAAAGACQAGABADADQACADABAEIABAHQABAHgCADQgCAEgEADQgDACgHABIgPABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIALgBIARAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQACABAIAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAADQAAAGgDADQgBAEgFACQgEACgFABIgNABgAC1BAIAAgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAFIAhAAIAAAAgABQBoIgKgBQgFgBgDgDQgEgCgDgEQgCgFABgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgWAAQABgGABgEQACgEADgCQADgCAGgBIAMAAIAaAAIAKABQAEABAEADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAKABIAGAAQAHAAAHgBQACgCAAgDQABgEgDgBQgDgBgHAAIgLAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAjGBoIgJgBQgEgBgEgDQgDgDgDgEIgBgGIgBgVQAAgFACgHQADgFADgDQAEgCAEgBIAJgBIAjAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAjEA8IgCAEIgBAFIAAAGIABAFIACAEIAFACIAVAAQAEAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgFIAAgIIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIgVAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgUAAQAAgGgCgDIgEgCIgFAAQgHAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgFABIgJABgAB6gOIgJAAQgFgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQADgDADgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAB8gnQgCABAAAEQAAADACACIAKABIAGAAQAIAAAGgCQADgBABgEQAAgDgDgBQgCgCgJAAIgLAAQgHAAgCACgAg5gOIgMgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQAEgDAFgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAIgBIADgBQACgCAAgDIAWAAIAAACQAAAGgCAEQgDADgEADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAhAAIAAAAgAkYgOQgJAAgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgaIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAaIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEKgPIgMghIgBAAIgLAhIgeAAIgYg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAZAAIgYA9gAh9gPIAAgjQAAgEgEgDIgFgBIgLgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAEgBAMgBIALABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(199,72);

	this.instance = new lib.jaw4_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.1,24,0.45,0.45,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.jaw4_drawing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.1,24.9,0.45,0.45,0,0,0,0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_2.setTransform(134.1,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,-9,251.8,91.4);


(lib.Box_jaw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jaw2_drawing_0degree("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(193.4,25.3,0.5,0.5,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.jaw2_drawing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.3,25.3,0.5,0.5,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,-6.6,251.3,59.4);


(lib.base_drawing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACCBaIAAidQgBgWgKAAIjsAAQgMACABAVIAACc");
	this.shape.setTransform(-86.4,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADdgvImIAAQgugBgCAwQgBAtAxADIGIAA");
	this.shape_1.setTransform(-10.5,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABfgvIiMAAQgugBgCAwQgBAtAxADICMAA");
	this.shape_2.setTransform(-23.1,-18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiDhVIAADHIEHAAIAAjLIgNgXIgHgBIgMAWIgDAEQgBACgDAAQgDABgCgDIgCgF");
	this.shape_3.setTransform(98.4,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABKAHIgMgUIgHAAIgPAYQgBACgDABQgDAAgCgDIgCgDIgMgUIgHAAIgOAXQgBADgDAAQgEAAgBgDIgCgDIgMgUIgIgBIgOAYQgBADgEAAQgDAAgDgHIgNgU");
	this.shape_4.setTransform(99.6,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMALIgMgVIgLAA");
	this.shape_5.setTransform(102.5,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMgKIgLAAIgMAV");
	this.shape_6.setTransform(94.8,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAsQgSARgZAAQgYAAgTgRQgRgTAAgZQAAgZARgSQATgRAYAAQAZAAASARQATASAAAZQAAAZgTATg");
	this.shape_7.setTransform(64.3,-43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AApAAIgVgiIgnAAIgVAiIAVAjIAnAAg");
	this.shape_8.setTransform(64.3,-43.9);

	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.3,-43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhkhwIAAAHIAAACIgMAMIAAAEIARARIACACIAAADIgCACIgRARIAAAEIARARIACACIAAADIgCACIgRARIAAADIARARIACACIAAADIgCACIgRARIAAAEIARAQIABADIAAADIgBACIgRARIAAAFIAMALIAAACIAAAHIEmAAIAAgiIgRgIIgCgBIAAgCIAAgDIAIgVIgCgFIgVgJIgCgBIgBgDIABgCIAIgWIgCgEIgVgIIgCgCIgBgDIAAgDIAJgVIgCgFIgXgKIgBgCIAAgDIAJgVIgCgFIgagKQgDgCgBgDIAAgMgAjBhwIBdAA");
	this.shape_9.setTransform(64.3,-43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxBxIBcAAIAAgIIgBgCIgLgKIAAgFIARgSIABgBIAAgDIgBgCIgRgRIAAgEIARgRIACgCIAAgDIgCgCIgRgQIAAgEIARgRIACgCIAAgDIgCgCIgRgRIAAgEIARgRIACgCIAAgDIgCgCIgRgRIAAgEIALgLQABAAAAgBIAAgCIAAgH");
	this.shape_10.setTransform(49.8,-43.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXgEQgJAKgOAAQgOAAgIgL");
	this.shape_11.setTransform(56.8,-32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AlSilICmAPIBxAcIB7AuQALAFAPAHIAdAPIBwBEIBsBYIAAA7");
	this.shape_12.setTransform(77.6,-43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFTiwIAABRIg3AvIh2BSIhjA0IiHAzIiFAdIiJAL");
	this.shape_13.setTransform(77.6,42.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAQAGgBABgIIAAgvIAnAAIAAA7QgBAXgLAMQgSAUgYgBIhDAA");
	this.shape_14.setTransform(110.1,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAWIAFAAIAAgrIgFAA");
	this.shape_15.setTransform(111.9,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGhyIgLAAIABDl");
	this.shape_16.setTransform(91.6,36.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1gfIAAAQIAwAvIAKAAIAxgvIAAgQ");
	this.shape_17.setTransform(98.7,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADhDIgGAAIAACHIAGAA");
	this.shape_18.setTransform(84.8,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADBEIgGAAIAAiHIAGAA");
	this.shape_19.setTransform(84.8,-17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjFgJQAqhQBRAEIBkAAQBAgDArA3QAeAhAAAzIgBAkIAkAA");
	this.shape_20.setTransform(64.7,-22.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjFAKQAqBQBRgEIBkAAQBAADArg3QAeghAAgzIgBgkIAkAA");
	this.shape_21.setTransform(64.7,22.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAALQgKAAAAgLQAAgKAKAAQALAAAAAKQAAALgLAAg");
	this.shape_22.setTransform(84,37.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKg");
	this.shape_23.setTransform(64.3,43.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAghQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgOAKgJQAKgKANAAg");
	this.shape_24.setTransform(55.6,51.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgEIAFAAIAAACQgCAEgDAD");
	this.shape_25.setTransform(45.2,50.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMggQALADAGAJQAIAJAAALQAAAagZAH");
	this.shape_26.setTransform(46.2,51.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAZQgJgWAAgc");
	this.shape_27.setTransform(23.8,-44.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPgIIAPAAIAQAR");
	this.shape_28.setTransform(25,-48.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARA1QARgFAKgOQALgOAAgSQAAgWgQgQQgQgQgXAAQgWAAgQAQQgQAQAAAWQAAASALAOQAKAOARAF");
	this.shape_29.setTransform(0.3,-38.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARg0QARAFAKAPQALAOAAASQAAAVgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgVQAAgSALgOQAKgPARgF");
	this.shape_30.setTransform(0.3,38.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKALgPAAQgOAAgKgLQgKgLAAgOQAAgNAKgLQAKgLAOAAQAPAAAKALg");
	this.shape_31.setTransform(16.7,18);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_32.setTransform(16.7,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgrQASASAAAZQAAAagSASQgSARgZAAQgYAAgSgRQgSgSAAgaQAAgZASgSQASgSAYAAQAZAAASASg");
	this.shape_33.setTransform(16.7,18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIgjgVIgiAUIAAAoIAiAVIAjgVg");
	this.shape_34.setTransform(16.7,18);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQALALAAANQAAAOgLALQgKALgPAAQgNAAgLgLQgKgLAAgOQAAgNAKgLQALgLANAAQAPAAAKALg");
	this.shape_35.setTransform(16.7,-18);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAygwQAUAUAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVg");
	this.shape_36.setTransform(16.7,-18);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQASASAAAZQAAAagSASQgSASgaAAQgYAAgSgSQgSgSAAgaQAAgZASgSQASgRAYAAQAaAAASARg");
	this.shape_37.setTransform(16.7,-18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAkgTIgkgVIgiAUIAAAoIAiAVIAkgVg");
	this.shape_38.setTransform(16.7,-18);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZgYQAKALAAANQAAAOgKALQgKALgPAAQgNAAgLgLQgKgLAAgOQAAgNAKgLQALgLANAAQAPAAAKALg");
	this.shape_39.setTransform(-8.5,-18);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjgTIgjgVIgiAUIAAAoIAiAVIAjgVg");
	this.shape_40.setTransform(-8.5,-18);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAsgrQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSQgSgSAAgaQAAgZASgSQASgRAZAAQAaAAASARg");
	this.shape_41.setTransform(-8.5,-18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVg");
	this.shape_42.setTransform(-8.5,-18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AF1ouQgBhUBbgGQBSAAAIBZIAARdQgGBahUABQhegJAEhSIAAgvQAAhKgxgxQg4g+hLAFIl4AAQg4gBgWgsIhXiXQgbgvgzACIgiAAQhcgEAAhWQAFhZBVAAIAkAAQAxAEAdgxIBXiYQAZgsA1AAIF4AAQAjABAogSQBjgtAGh2g");
	this.shape_43.setTransform(-10.4,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AIKlKIgYgNIpUAAQgCADgGABIjtAAQgFgBgCgDIisAAIAAKvICsAAQACgDAGgBIDsAAQAGAAACAEIJUAAIAYgN");
	this.shape_44.setTransform(-63.8,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfgUQAFADAHAAIApAAQAKAIAAAMQAAAMgKAGIgqgBQgJABgCgO");
	this.shape_45.setTransform(-96.1,-26.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgfAVQAFgDAHAAIApAAQAKgIAAgMQAAgNgKgFIgqAAQgJAAgCAO");
	this.shape_46.setTransform(-96.1,26.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiBhZIAACbQAAACABACQABATAKABIDrAAQALAAAAgYIAAib");
	this.shape_47.setTransform(-86.3,-25.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BCBFC6").s().p("AgeBFIgBgBIAAgCIABgBIACAAQAOAGAOgBQAbABATgSIACgBIABABIABACIgBACQgUASgdABQgQgBgOgGgAg7AsIgBgBQgOgSgBgZQAAgTAKgRIABgBIACAAIACACIgBACQgIAPAAASQgBAXANASIABABIgBACIgBABIgBgBgABFAaIgCgBIAAgCQADgLAAgMQAAgcgUgVIgBgBIABgCIABgBIACABQAXAWAAAeQAAANgEALIgBACIgCAAIAAAAgAAng6QgRgMgWABQgSAAgPAIIgCABIgCgCIAAgCIABgBQARgKATAAQAYABASAMIABACIgBACIgBABIAAAAIgCgBg");
	this.shape_48.setTransform(-59.4,23.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgXAAgSgRQgSgSAAgZQAAgYASgSQASgRAXAAQAZAAASARg");
	this.shape_49.setTransform(-59.4,23.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BCBFC6").s().p("AgeBFIgBgBIAAgCIABgCIACAAQAOAGAOAAQAbAAATgRIACgBIABABIABACIgBACQgUASgdAAQgQAAgOgGgAg7AsIgBgBQgOgSgBgZQAAgTAKgRIABgBIACAAIACABIgBACQgIAQAAASQgBAXANARIABACIgBACIgBAAIgBAAgABFAaIgCgBIAAgCQADgLAAgMQAAgcgUgVIgBgCIABgCIABAAIACAAQAXAXAAAeQAAANgEALIgBABIgCABIAAAAgAAng6QgRgLgWAAQgSAAgPAIIgCABIgCgCIAAgCIABgBQARgJATAAQAYAAASAMIABACIgBACIgBABIAAAAIgCgBg");
	this.shape_50.setTransform(-59.4,-23.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArgqQARASAAAYQAAAZgRASQgSARgZAAQgYAAgRgRQgSgSAAgZQAAgYASgSQASgRAXAAQAZAAASARg");
	this.shape_51.setTransform(-59.4,-23.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_52.setTransform(105.4,-29.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXgXIAvAv");
	this.shape_53.setTransform(95.7,-2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAHAA");
	this.shape_54.setTransform(96.4,-29.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_55.setTransform(110.8,-28.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_56.setTransform(96.4,-27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABmIAAjL");
	this.shape_57.setTransform(111.6,-16.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_58.setTransform(87.4,-29.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_59.setTransform(95.4,-28.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_60.setTransform(104.4,-28.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgCABIgCAAIgBAAIgCAAIgCgB");
	this.shape_61.setTransform(94.1,-26.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_62.setTransform(85.7,-27);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgUIAAAq");
	this.shape_63.setTransform(112.2,-15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_64.setTransform(99.2,-27);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_65.setTransform(93.3,-5.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABkIAAjH");
	this.shape_66.setTransform(85.2,-16.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_67.setTransform(90.9,-28.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAIIAAgP");
	this.shape_68.setTransform(104.1,-5.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_69.setTransform(103.7,-27);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_70.setTransform(91.9,-29.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgBABIgCAAIgCAA");
	this.shape_71.setTransform(98.8,-26.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_72.setTransform(111.9,-17.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_73.setTransform(105.4,-27.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgBIgCAD");
	this.shape_74.setTransform(90.2,-27);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_75.setTransform(109.9,-29.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAAIgBABIgCAAIgCAAIgBAAIgCgB");
	this.shape_76.setTransform(103.2,-26.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgBIgCAD");
	this.shape_77.setTransform(108.2,-27);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_78.setTransform(88.3,-28.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgCABIgBAB");
	this.shape_79.setTransform(85.4,-26.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgKAA");
	this.shape_80.setTransform(95.4,-29.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_81.setTransform(98.6,-29.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAAIgLAA");
	this.shape_82.setTransform(101.9,-29.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_83.setTransform(111.9,-12.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_84.setTransform(89.1,-27);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAAIAJAA");
	this.shape_85.setTransform(98.6,-0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgC");
	this.shape_86.setTransform(111.5,-27.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_87.setTransform(109.9,-27.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiDAAIEHAA");
	this.shape_88.setTransform(98.4,-6.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_89.setTransform(94.7,-27);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_90.setTransform(92.8,-28.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_91.setTransform(98.7,-5.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_92.setTransform(108.9,-28.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_93.setTransform(101.9,-28.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_94.setTransform(99.9,-28.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_95.setTransform(93.5,-27);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgMgV");
	this.shape_96.setTransform(103.1,-28.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_97.setTransform(87.4,-27.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_98.setTransform(100.9,-29.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_99.setTransform(100.9,-27.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_100.setTransform(107.1,-27);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_101.setTransform(91.9,-27.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgCABIgCAAIgBAAIgCAAIgCgB");
	this.shape_102.setTransform(89.6,-26.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgCgD");
	this.shape_103.setTransform(98.1,-27);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgCABIgCAAIgBAAIgCAAIgCgB");
	this.shape_104.setTransform(107.6,-26.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_105.setTransform(106.3,-28.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGALIgLgV");
	this.shape_106.setTransform(97.4,-28.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAYIAwgv");
	this.shape_107.setTransform(101.6,-2.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_108.setTransform(102.6,-27);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHgKIgMAV");
	this.shape_109.setTransform(94.2,-28.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgJIgLAT");
	this.shape_110.setTransform(86.4,-28.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_111.setTransform(109.9,3.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_112.setTransform(91.9,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgKIgLAU");
	this.shape_113.setTransform(86.4,2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_114.setTransform(105.4,3.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_115.setTransform(100.9,3.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAKIgLgU");
	this.shape_116.setTransform(88.3,2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgKIgLAU");
	this.shape_117.setTransform(90.9,2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_118.setTransform(89.1,3.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_119.setTransform(87.4,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1AAIBrAA");
	this.shape_120.setTransform(98.7,25.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_121.setTransform(98.6,1.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_122.setTransform(85.7,3.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABABIgBgB");
	this.shape_123.setTransform(89.3,3.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_124.setTransform(87.4,3.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgCABIgBAA");
	this.shape_125.setTransform(85.4,3.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_126.setTransform(91.9,3.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgBIgCAD");
	this.shape_127.setTransform(90.2,3.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIAeAA");
	this.shape_128.setTransform(96.4,3.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAGIALgL");
	this.shape_129.setTransform(107.3,-4.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAIIAAgP");
	this.shape_130.setTransform(107.9,-5.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_131.setTransform(91.4,-5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_132.setTransform(105.9,-5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_133.setTransform(92.5,-3.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_134.setTransform(104.7,-3.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFgFIALAL");
	this.shape_135.setTransform(90,-4.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_136.setTransform(89.4,-5.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAAICVAA");
	this.shape_137.setTransform(4.1,-13.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABMAAIiXAA");
	this.shape_138.setTransform(4.1,-22.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEEB8IgegFQkGgkjjjO");
	this.shape_139.setTransform(1.5,46.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgFIAAAM");
	this.shape_140.setTransform(109.8,24.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAABAIAAh/");
	this.shape_141.setTransform(106,31.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgEIADABQAAAFgDAD");
	this.shape_142.setTransform(45.1,53.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAA9IAAh5");
	this.shape_143.setTransform(67.6,51);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAHIAAgN");
	this.shape_144.setTransform(92.2,24.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACFIAAkJ");
	this.shape_145.setTransform(75.5,41.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgJAA");
	this.shape_146.setTransform(92.7,25);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAA8IAAh4");
	this.shape_147.setTransform(67.6,36.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_148.setTransform(77.4,-53.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgb");
	this.shape_149.setTransform(77.4,-50.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAfIAAg9");
	this.shape_150.setTransform(77.4,-29.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgdIAAA7");
	this.shape_151.setTransform(116.2,-16.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAFIAAgDIgCgCIgDgE");
	this.shape_152.setTransform(111.9,-18.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhuIAADd");
	this.shape_153.setTransform(86.4,-39.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXAbIAAgIIgCgHIgHgNIgEgGIgLgLIgHgDIgOgF");
	this.shape_154.setTransform(113.9,-22.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIABgF");
	this.shape_155.setTransform(25,-50);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhtIAADc");
	this.shape_156.setTransform(89.5,-37.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgRIAAAj");
	this.shape_157.setTransform(59.8,-57);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_158.setTransform(84.3,-13.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_159.setTransform(68.5,-30.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAApIAAhR");
	this.shape_160.setTransform(23.4,-54.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_161.setTransform(114.2,-13.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgrIAABX");
	this.shape_162.setTransform(106,-33.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_163.setTransform(112.3,-15.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_164.setTransform(23.4,-50);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkCB8QBkhdB3g5QB3hACKgZIApgI");
	this.shape_165.setTransform(1.6,-46.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABwAAIjfAA");
	this.shape_166.setTransform(56.1,-30.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAIIAAgP");
	this.shape_167.setTransform(68.8,-56);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgS");
	this.shape_168.setTransform(68.8,-31.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgb");
	this.shape_169.setTransform(23.4,-48.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIABAB");
	this.shape_170.setTransform(86.5,-50.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAhIAAhB");
	this.shape_171.setTransform(23.4,-43.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIARIgFAAQgNgEAAgNQAAgLANgEIAEgBIASAAIAFABQANAEAAALQAAANgNAEIgFAAIAAAHIAGAAQATgFAAgTQAAgLgKgHQgHgFgHAAIgSAAQgXAAgCAXQAAAWAXACIACAAg");
	this.shape_172.setTransform(-45.9,-28.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_173.setTransform(-93.9,-26.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAATIAAgl");
	this.shape_174.setTransform(-93.9,26.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3C456A").s().p("AEoJvQgOgLgJgVQi9gqgggTQinhIh+hxInvAAIgJgGIjsAAIgMAGIioAAIABqvICqAAIAJADIDwAAIAIgEIHrAAQByhtCchDQCehCBZgEQANg6BHAAQA0gDAbAxQBbABBKAPQBKAOAcAJIAnAMQBeAZCCBSQBAAnBSBLIAABSQAwAJAAAoIAABAIglAAIgEAIIgGAAIAAA9IglAAIAAASIgKALIgoAAIglAjIgKAAIgmgkIgmAAIgNgMIAAgPIgpAAIAAglIgHAAIAAghIgjAAQAYiQiPgeIiGAAQhNAHgeBIIAAHRQAlBJBWAAIBsAAQAtACAtgoQAngpAAgvIAAgwIAjAAIAAhGIAJAAIAAgbIAHgKIAKgSIAIAAIALAWQACAFAFAAQAGAAABgDIAMgXIAHAAIAMAUIAGgDIAJgRIBMAAIANAVIAMgWIAHAAIAPAYQACADACAAQADAAADgDIANgYIAHAAIAOAXIAABiIAGAAIAAAGIAnAAIAABEQgJAtgiAAIgDAGIAABKIhcBOQh8BUg3AVIhbAkQhRAdhAAJQg/AKguAEIg+ACQgYAugxAAQgyAAgSgagAgoFfQgKAOAAASQAAAWAQAQQAPAQAWAAQAXAAAQgQQAPgQAAgWQAAgSgKgOQgLgPgQgFIghAAQgRAFgKAPgAgimlQgQAQAAAXQAAASAKAOQAKAOARAFIAhAAQAQgFALgOQAKgOAAgSQAAgXgPgQQgQgQgXAAQgWAAgPAQg");
	this.shape_175.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-65.8,234.3,131.8);


(lib.LM_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Box_jaw9("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.1,2.7,140.4,58.9);


(lib.K_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Box_jaw8("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,-6.5,245.2,97.8);


(lib.G_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Box_jaw4("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,251.8,91.4);


(lib.F_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Box_jaw7("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,252.5,91.4);


(lib.C_Top_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiTA8IgDADIgBAGIAAAGIABAFIADAEIAFABIAHABIAOgBQAEAAACgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgGgBIgVAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(50.6,76.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD0BoIgOgBQgGgBgDgDQgDgCgCgEQgBgEAAgFIAXAAQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQAEABAJAAIAIAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgBgEQgCgEAAgHQAAgFADgEQACgDADgCQAEgCAFgBIALAAIARAAIASAAQAGABAFADQADACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgKAAQgLAAgCABQgDAAAAAEQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAJAAIAQAAQAJAAAHACQAGABADADQADADABAEIABAHQgBAHgBADQgCAEgEADQgDACgHABIgQABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAGAAIAFgCQABgBAAgEIAWAAIAAADQAAAGgDADQgCAEgEACQgEACgGABIgMABgAC2BAIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAFIAiAAIAAAAgABQBoIgKgBQgFgBgDgDQgFgCgBgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQABADACABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgDADgFABQgFACgHAAgAgYBoIgJgBQgFgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQACgDAEgCQAGgCAUAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgHABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABgBABIgVAAQAAgGABgEQABgEAEgCQADgCAFgBIANAAIAaAAIAKABQAFABADADQADADABAEQACAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgBACAAAEQgBADADABIAJABIAHAAQAHAAAHgBQADgCAAgDQgBgEgCgBQgCgBgJAAIgKAAQgHAAgDABgAhbBoIgKgBQgFgBgEgDQgEgCgBgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQABADACABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgDADgFABQgGACgGAAgAjFBoIgJgBQgFgBgDgDQgFgDgCgEIgBgGIAAgVQAAgFABgHQACgFAFgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQACAHAAAFIAAAVIgCAGQgCAEgEADQgDADgFABIgJABgAi/A6QgBAAAAABQgBAAgBAAQAAAAgBABQAAAAAAAAIgDAEIgCAFIAAAGIACAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgFIAAgIIgBgFQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgFgCIgPAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgVAAQAAgGgCgDIgDgCIgGAAQgGAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg9IAXAAIAABBQAAAFgCADQgCADgCACQgDACgEABIgJABgAB6gOIgKAAQgEgBgDgCIgEgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgDATAAIAPABQAGABADADIAAgFQAAgFgCgCQgCgCgHAAIgOAAIgGABQgBAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgWAAQABgGABgEQACgDADgCQADgCAGgBIAMgBIAaAAIALABQAEACAEADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAB7gnQgCABAAAEQABADACACIAKABIAGAAQAIAAAHgCQACgBAAgEQABgDgDgBQgDgCgIAAIgLAAQgHAAgDACgAg6gOIgLgBQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAGgBIAFgBQABgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBABIAAAEIAhAAIAAAAgAkYgOQgKAAgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgaIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQADABACACIAFAEIADAFIACAHIABAJIAAAaIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKAAgAkbhPIgFADIgDAGIAAAHIAAAKIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgKIAAgHIgDgGIgEgDIgJgBIggAAIgIABgAEJgPIgLghIAAAAIgMAhIgfAAIgXg9IAZAAIAOAtIAQgtIAVAAIARAtIANgtIAZAAIgXA9gAh9gPIAAgjQAAgEgEgDIgEgBIgNgBIgGABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAGgEQAEgBAKgBIAMABQAHAAAEADIAFADIAEAFIACAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(178.9,76.9);

	this.instance = new lib.Box_jaw2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-12.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAlrIAALX");
	this.shape_2.setTransform(113.9,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-0.6,251.3,87.9);


(lib.Box_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgFgBgEgDQgDgCgCgEQgBgEgBgFIAZAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAEABAIAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgIgBIgWAAIgNgBQgGgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQADgDADgCQAEgCAFgBIALAAIAQAAIASAAQAIABADADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgKAAQgKAAgDABQgDAAAAAEQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQADABAIAAIAQAAQALAAAGACQAGABADADQADADAAAEIABAHQAAAHgBADQgBAEgEADQgEACgGABIgQABgACdBoIgMgBQgGgBgEgDIgEgEIgDgFIgDgHIAAgIIAAgGQAAgGACgIQACgGAEgDQADgDAGgBIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIACADQADABAIAAIAHAAIAIAAIADgCQACgBABgEIAVAAIAAADQAAAGgCADQgCAEgFACQgEACgFABIgMABgAC1BAIAAgFIgDgCIgFgCIgIAAQgMAAgCACQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAFIAhAAIAAAAgABQBoIgKgBQgFgBgEgDQgDgCgDgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAYAAIAAAPIAjAAIAAAQIgjAAIAAAYQgBADADABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgFACgHAAgAgYBoIgKgBQgEgBgCgCIgGgFQgBgDAAgGIAAgFQAAgGACgEQADgDAEgCQAFgCAUAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgDgCgFAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgXAAQABgGABgEQABgEAEgCQADgCAGgBIAMAAIAZAAIALABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgWBOQgCACgBAEQAAADADABIAKABIAGAAQAHAAAGgBQADgCAAgDQAAgEgCgBQgDgBgHAAIgLAAQgHAAgCABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAYAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgGACgGAAgAjGBoIgJgBQgEgBgEgDQgDgDgCgEIgCgGIgBgVQABgFACgHQACgFADgDQAEgCAEgBIAJgBIAjAAIAJABQAFABADACQAEADACAFQACAHABAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAjEA8IgDAEIAAAFIAAAGIAAAFIADAEIAFACIAVAAQAEAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgFIAAgIIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIgVAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAktBnIAAg9IAVAAIAAALIABAAQABgDACgDIAFgEQAEgCAKAAIALABQAFABACADQADADABAFIABALIAAAFIgUAAQAAgGgBgDIgEgCIgFAAQgHAAgDACIgDADIgBAFIAAAigAA2AFIAAgOIADAAQADAAABgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg9IAXAAIAABBQAAAFgCADQgCADgDACQgCACgFABIgJABgAB6gOIgJAAQgFgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAHgDATAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAIgVAAQAAgGABgEQACgDADgCQADgCAFgBIANgBIAbAAIAKABQAFACADADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAB7gnQgBABAAAEQgBADADACIAJABIAHAAQAIAAAGgCQAEgBAAgEQgBgDgCgBQgCgCgKAAIgKAAQgHAAgDACgAg5gOIgMgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQADgCAAgDIAVAAIAAACQAAAGgCAEQgCADgFADQgEACgGAAIgLABgAggg2IgBgEIgDgDIgFgBIgIgBQgMABgCABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAiAAIAAAAgAkYgOQgJAAgIgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgaIAAgJIACgHIADgFIAFgEQADgDAIgCQAIgCAJAAIArAAQAJAAAHACIAGACQAEABACACIAEAEIAEAFIABAHIABAJIAAAaIgBAIIgBAHIgEAGIgEAEIgGADIgGACQgHABgJAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQABACAEABIAHABIAiAAIAIgBQADgBACgCIACgFIAAgIIAAgKIAAgHIgCgGIgGgDIgIgBIgfAAIgJABgAEKgPIgMghIgBAAIgLAhIgeAAIgZg9IAaAAIAOAtIAQgtIAWAAIAPAtIAPgtIAZAAIgYA9gAh9gPIAAgjQAAgEgEgDIgFgBIgMgBIgGABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAFgBAKgBIAMABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape.setTransform(190.6,82.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(56,82.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_2.setTransform(123.6,43.8);

	this.instance = new lib.jaw1_drawing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(191.5,27.2,0.5,0.5,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.base_drawing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.2,37.4,0.5,0.5,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.2,251.6,93.8);


// stage content:
(lib.ExchangeableJaws = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:0,s:6,s_stop:54,s_apart:56,c:103,c_stop:152,c_apart:154,n:199,n_stop:246,n_apart:248,g:294,g_stop:343,g_apart:345,j:391,j_stop:438,j_apart:441,r:488,r_stop:535,r_apart:538,f:585,f_stop:631,f_apart:634,k:681,k_stop:728,k_apart:732,m:778,m_stop:828,m_apart:832});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.base.addEventListener('click', playbase);
		function playbase(evt) {
			var name = "s";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw2.addEventListener('click', playcc);
		function playcc(evt) {
			var name = "c";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw3.addEventListener('click', playnn);
		function playnn(evt) {
			var name = "n";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw4.addEventListener('click', playgg);
		function playgg(evt) {
			var name = "g";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw5.addEventListener('click', playjj);
		function playjj(evt) {
			var name = "j";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw6.addEventListener('click', playrr);
		function playrr(evt) {
			var name = "r";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw7.addEventListener('click', playff);
		function playff(evt) {
			var name = "f";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw8.addEventListener('click', playkk);
		function playkk(evt) {
			var name = "k";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		this.jaw9.addEventListener('click', playmm);
		function playmm(evt) {
			var name = "m";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		/* import flash.events.MouseEvent;
		base.addEventListener(MouseEvent.CLICK, plays);
		jaw2.addEventListener(MouseEvent.CLICK, playc);
		jaw3.addEventListener(MouseEvent.CLICK, playn);
		jaw4.addEventListener(MouseEvent.CLICK, playg);
		jaw5.addEventListener(MouseEvent.CLICK, playj);
		jaw6.addEventListener(MouseEvent.CLICK, playr);
		jaw7.addEventListener(MouseEvent.CLICK, playf);
		jaw8.addEventListener(MouseEvent.CLICK, playk);
		jaw9.addEventListener(MouseEvent.CLICK, playm);
		
		//
		function plays(event:MouseEvent):void
		{
		   trace("goto plays");
		   stop();
		   gotoAndPlay("s");
		}
		function playc(event:MouseEvent):void
		{
		   trace("goto playc");
		   stop();
		   gotoAndPlay("c");
		}
		function playn(event:MouseEvent):void
		{
		   trace("goto playn");
		   stop();
		   gotoAndPlay("n");
		}
		function playg(event:MouseEvent):void
		{
		   trace("goto playg");
		   stop();
		   gotoAndPlay("g");
		}
		function playj(event:MouseEvent):void
		{
		   trace("goto playj");
		   stop();
		   gotoAndPlay("j");
		}
		function playr(event:MouseEvent):void
		{
		   trace("goto playr");
		   stop();
		   gotoAndPlay("r");
		}
		function playf(event:MouseEvent):void
		{
		   trace("goto playf");
		   stop();
		   gotoAndPlay("f");
		}
		function playk(event:MouseEvent):void
		{
		   trace("goto playk");
		   stop();
		   gotoAndPlay("k");
		}
		function playm(event:MouseEvent):void
		{
		   trace("goto playm");
		   stop();
		   gotoAndPlay("m");
		}*/
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		var self = this;
		
		this.btn_backs.addEventListener('click', playbs);
		function playbs(evt) {
			var name = "s_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backs.addEventListener(MouseEvent.CLICK, plays_apart);
		
		//
		function plays_apart(event:MouseEvent):void
		{
		   trace("goto plays_apart");
		   stop();
		   gotoAndPlay("s_apart");
		}
		*/
	}
	this.frame_55 = function() {
		this.stop();
	}
	this.frame_102 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		var self = this;
		
		this.btn_backc.addEventListener('click', playbc);
		function playbc(evt) {
			var name = "c_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backc.addEventListener(MouseEvent.CLICK, playc_apart);
		
		//
		function playc_apart(event:MouseEvent):void
		{
		   trace("goto playc_apart");
		   stop();
		   gotoAndPlay("c_apart");
		}
		*/
	}
	this.frame_153 = function() {
		this.stop();
	}
	this.frame_198 = function() {
		this.stop();
	}
	this.frame_246 = function() {
		var self = this;
		
		this.btn_backn.addEventListener('click', playbn);
		function playbn(evt) {
			var name = "n_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backn.addEventListener(MouseEvent.CLICK, playn_apart);
		
		//
		function playn_apart(event:MouseEvent):void
		{
		   trace("goto playn_apart");
		   stop();
		   gotoAndPlay("n_apart");
		}
		*/
	}
	this.frame_247 = function() {
		this.stop();
	}
	this.frame_293 = function() {
		this.stop();
	}
	this.frame_343 = function() {
		var self = this;
		
		this.btn_backg.addEventListener('click', playbg);
		function playbg(evt) {
			var name = "g_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backg.addEventListener(MouseEvent.CLICK, playg_apart);
		
		//
		function playg_apart(event:MouseEvent):void
		{
		   trace("goto playg_apart");
		   stop();
		   gotoAndPlay("g_apart");
		}
		*/
	}
	this.frame_344 = function() {
		this.stop();
	}
	this.frame_390 = function() {
		this.stop();
	}
	this.frame_439 = function() {
		var self = this;
		
		this.btn_backj.addEventListener('click', playbj);
		function playbj(evt) {
			var name = "j_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backj.addEventListener(MouseEvent.CLICK, playj_apart);
		
		//
		function playj_apart(event:MouseEvent):void
		{
		   trace("goto playj_apart");
		   stop();
		   gotoAndPlay("j_apart");
		}
		*/
	}
	this.frame_440 = function() {
		this.stop();
	}
	this.frame_487 = function() {
		this.stop();
	}
	this.frame_536 = function() {
		var self = this;
		
		this.btn_backr.addEventListener('click', playbr);
		function playbr(evt) {
			var name = "r_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backr.addEventListener(MouseEvent.CLICK, playr_apart);
		
		//
		function playr_apart(event:MouseEvent):void
		{
		   trace("goto playr_apart");
		   stop();
		   gotoAndPlay("r_apart");
		}
		*/
	}
	this.frame_537 = function() {
		this.stop();
	}
	this.frame_584 = function() {
		this.stop();
	}
	this.frame_632 = function() {
		var self = this;
		
		this.btn_backf.addEventListener('click', playbf);
		function playbf(evt) {
			var name = "f_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backf.addEventListener(MouseEvent.CLICK, playf_apart);
		
		//
		function playf_apart(event:MouseEvent):void
		{
		   trace("goto playf_apart");
		   stop();
		   gotoAndPlay("f_apart");
		}
		*/
	}
	this.frame_633 = function() {
		this.stop();
	}
	this.frame_680 = function() {
		this.stop();
	}
	this.frame_729 = function() {
		var self = this;
		
		this.btn_backk.addEventListener('click', playbk);
		function playbk(evt) {
			var name = "k_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		
		/* btn_backk.addEventListener(MouseEvent.CLICK, playk_apart);
		
		//
		function playk_apart(event:MouseEvent):void
		{
		   trace("goto playk_apart");
		   stop();
		   gotoAndPlay("k_apart");
		}
		*/
	}
	this.frame_731 = function() {
		this.stop();
	}
	this.frame_777 = function() {
		this.stop();
	}
	this.frame_829 = function() {
		var self = this;
		
		this.btn_backm.addEventListener('click', playbm);
		function playbm(evt) {
			var name = "m_apart";
		    console.log("goto " + name);
		    self.stop();
		    self.gotoAndPlay(name);
		}
		
		/* btn_backm.addEventListener(MouseEvent.CLICK, playm_apart);
		
		//
		function playm_apart(event:MouseEvent):void
		{
		   trace("goto playm_apart");
		   stop();
		   gotoAndPlay("m_apart");
		}
		*/
	}
	this.frame_831 = function() {
		this.stop();
	}
	this.frame_877 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(49).call(this.frame_54).wait(1).call(this.frame_55).wait(47).call(this.frame_102).wait(50).call(this.frame_152).wait(1).call(this.frame_153).wait(45).call(this.frame_198).wait(48).call(this.frame_246).wait(1).call(this.frame_247).wait(46).call(this.frame_293).wait(50).call(this.frame_343).wait(1).call(this.frame_344).wait(46).call(this.frame_390).wait(49).call(this.frame_439).wait(1).call(this.frame_440).wait(47).call(this.frame_487).wait(49).call(this.frame_536).wait(1).call(this.frame_537).wait(47).call(this.frame_584).wait(48).call(this.frame_632).wait(1).call(this.frame_633).wait(47).call(this.frame_680).wait(49).call(this.frame_729).wait(2).call(this.frame_731).wait(46).call(this.frame_777).wait(52).call(this.frame_829).wait(2).call(this.frame_831).wait(46).call(this.frame_877).wait(1));

	// Titles
	this.instance = new lib.txt_RetrofitJaws("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.9,-21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(878));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL7AsIgPgBQgHAAgEgDQgEgDgCgFQgCgEAAgHIAAgGIAbAAIABAGIACACQACACAGAAIAgAAIAIgBIADgCIABgFIgBgEQgBgCgEAAIgLgBIgUAAQgSAAgGgCIgIgBIgGgCIgEgEQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgBAAgBQgCgEAAgIIABgMQABgFADgEIAFgDIAFgCIAJgCIAxAAQAHAAALACIAFACIAFADQADADABAFIABAKIAAADIgbAAQAAgFgCgCIgDgBIglgBQgFAAgCACQgDACAAADIABAEQAAABAAAAQABAAAAABQABAAABAAQAAAAABAAQAEABAWAAIAaABIAJACIAHACQACABACACIAEAEIABAHIABAIQgBALgBADQgBADgCACIgEAEIgGACIgHABIgWABgAI/AsQgKAAgGgBIgNgEIgDgFIgEgFIgCgHIgBgJIAAgZIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgBAKAAIAqAAQAKAAAHABIAGACQADABACACIAFAEIADAFIACAHIABAJIAAAZIgBAJIgCAHIgDAFIgFAFIgFACIgGACQgHABgKAAgAI8gUIgFAEIgDAFIAAAHIAAAJIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIAAgIIAAgJIAAgHIgDgFIgEgEIgJgBIggAAIgIABgAifAsIgQgBQgHAAgDgDQgEgDgDgFQgBgEgBgHIAAgGIAbAAIABAGIACACQACACAGAAIAhAAIAIgBIADgCIAAgFIAAgEQgCgCgDAAIgMgBIgUAAQgRAAgHgCIgIgBIgFgCIgEgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAgBAAgBQgBgEgBgIIABgMQABgFAEgEIAEgDIAGgCIAJgCIAwAAQAHAAALACIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIglgBQgEAAgDACQgDACAAADIABAEQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAEABAWAAIAZABIAJACIAHACQADABACACIADAEIABAHIABAIQAAALgCADQgBADgBACIgFAEIgFACIgHABIgXABgApgAsQgJAAgHgBQgHgCgEgDQgDgDgCgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQAEACAFAAIALAAQAHAAAEgBIACgDIABgGIAAg3IAaAAIAABCIgCAHIgDAEIgEAEQgFADgGABIgQABgAxMAsQgJAAgHgBIgMgEIgEgFIgEgFIgCgHIAAgJIAAgZIAAgJIACgHIAEgFIAEgEQADgDAJgCQAHgBAJAAIAgAAQAJAAANACIAIACIAGADIADAFIACAFQACAFAAAKIgbAAIAAgCQgBgFgDgCQgDgBgGAAIgdAAIgJABIgFAEIgCAFIgBAHIAAAJIABAIQABADABACQACACADABIAIABIAkAAIAEgCIADgEIABgGIAbAAIAAAJQAAAFgCAFQgCAFgCADQgFADgFACQgKACgHAAgATWArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgASLArIgBgPIgCgFQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgEgBIgqAAIAAAWIgbAAIAAhVIBRAAQAHAAAFACQAFABADADQADAEACAFIABALIAAAFIgBAIIgDAFIgEAEIgIAEIAGABIAFADQACACABAEIABAJIAAAOgARWAAIAsAAQAFAAADgCQACgCAAgFIAAgDIgBgEIgCgDQgDgCgGAAIgqAAgAQUArIgIgPIg2AAIgIAPIgeAAIAvhVIAjAAIAwBVgAQCAKIgRggIgRAgIAiAAgAN1ArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAHPArIAAhAIglAAIAAgVIBlAAIAAAVIglAAIAABAgAEEArIAAhVIBfAAIAAAUIhFAAIAAANIBCAAIAAARIhCAAIAAAOIBGAAIAAAVgACiArIAAhVIAbAAIAAA/IA7AAIAAAWgABNArIAAgeIgvg3IAfAAIAeAjIAdgjIAgAAIgwA3IAAAegAglArIAAhAIgmAAIAAgVIBlAAIAAAVIglAAIAABAgAlAArIgUg4IgVA4IgfAAIgbhVIAaAAIASA/IAWg/IAZAAIAWA/IATg/IAaAAIgdBVgAm8ArIgJgPIg2AAIgIAPIgdAAIAvhVIAiAAIAwBVgAnPAKIgRggIgRAgIAiAAgAreArIgIgPIg2AAIgIAPIgdAAIAuhVIAjAAIAwBVgArwAKIgRggIgRAgIAiAAgAujArIgnghIgMAAIAAAhIgbAAIAAhVIAbAAIAAAfIANAAIAhgfIAlAAIgwAqIA1ArgAyeArIAAhVIAaAAIAABVgA0VArIAAhVIBIAAQAHAAAJACIAFACIAFAEQADAEABAGQABAEAAAHIAAAIIgBAJQgBAFgCAEQgDAEgFACQgHACgFABIg1AAIAAAVgAz7AAIApAAQAFAAACgCQACgCAAgEIAAgEQAAgEgCgDQgDgCgGAAIgnAAg");
	this.shape.setTransform(220.2,161.1);

	this.instance_1 = new lib.Box_base("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(482.3,13.1);

	this.instance_2 = new lib.C_Top_button("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(491.8,13.7);

	this.instance_3 = new lib.N_Top_button("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(491.8,13.8);

	this.instance_4 = new lib.G_Top_button("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(482.8,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADzBoIgNgBQgGgBgDgDQgDgCgCgEQgCgEABgFIAYAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACABAJAAIAJAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgNgBQgGgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIARAAIASAAQAGABAEADQAEACACADQABADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgJAAgDABQgDAAAAAEQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAIAAIARAAQAKAAAGACQAGABADADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgPABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgDgHIAAgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIALgBIARAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQACABAIAAIAIAAIAHAAIADgCQACgBAAgEIAWAAIAAADQAAAGgDADQgCAEgEACQgEACgFABIgNABgAC1BAIAAgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAFIAhAAIAAAAgABQBoIgKgBQgFgBgDgDQgEgCgDgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgWAAQABgGABgEQACgEADgCQADgCAGgBIAMAAIAaAAIAKABQAEABAEADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAKABIAGAAQAHAAAHgBQACgCAAgDQABgEgDgBQgDgBgHAAIgLAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgEADgEABQgGACgGAAgAjFBoIgKgBQgEgBgEgDQgDgDgDgEIgBgGIgBgVQAAgFACgHQADgFADgDQAEgCAEgBIAKgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAjEA8IgCAEIgBAFIAAAGIABAFIACAEIAFACIAVAAQAEAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgFIAAgIIgBgFQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgCIgVAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIAAALIAAAFIgTAAQAAgGgCgDIgEgCIgFAAQgHAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgFABIgJABgAB6gOIgJAAQgFgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQADgDADgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgIABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQAAgGACgEQABgDAEgCQADgCAGgBIAMgBIAaAAIALABQAEACAEADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgDABgJAAgAB8gnQgCABAAAEQAAADACACIAKABIAGAAQAIAAAGgCQADgBABgEQAAgDgDgBQgCgCgJAAIgLAAQgHAAgCACgAg5gOIgMgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQAEgDAFgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQACACAIAAIAHAAIAIgBIADgBQACgCAAgDIAWAAIAAACQAAAGgCAEQgDADgEADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAEIAhAAIAAAAgAkYgOQgKAAgHgBIgLgFIgFgEIgDgGIgCgHIAAgIIAAgaIAAgJIACgHIADgFIAFgEQADgDAIgCQAHgCAKAAIArAAQAJAAAGACIAHACQAEABACACIAEAEIAEAFIABAHIABAJIAAAaIgBAIIgBAHIgEAGIgEAEIgGADIgHACQgGABgJAAgAkbhPIgFADIgCAGIgBAHIAAAKIABAIQAAADACACQACACACABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEKgPIgMghIgBAAIgLAhIgeAAIgYg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAZAAIgYA9gAh9gPIAAgjQAAgEgEgDIgFgBIgLgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAFgEQAEgBAMgBIALABQAGAAAFADIAFADIADAFIADAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape_1.setTransform(604.9,94.3);

	this.instance_5 = new lib.box_jaw5("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(547.6,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD0BoIgOgBQgGgBgDgDQgDgCgCgEQgBgEAAgFIAXAAQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQACABAKAAIAIAAIALgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgIgBIgVAAIgOgBQgFgBgDgDQgDgCgBgEQgCgEAAgHQAAgFACgEQADgDADgCQAEgCAFgBIALAAIARAAIASAAQAHABAEADQADACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQACABAJAAIAQAAQAJAAAHACQAFABAEADQACADACAEIABAHQgBAHgBADQgCAEgEADQgDACgHABIgQABgACcBoIgLgBQgGgBgEgDIgEgEIgDgFIgCgHIgBgIIAAgGQAAgGACgIQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAGAAIAFgCQABgBAAgEIAWAAIAAADQAAAGgDADQgCAEgEACQgEACgGABIgMABgAC2BAIgBgFIgCgCIgGgCIgIAAQgMAAgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAFIAiAAIAAAAgABQBoIgKgBQgFgBgDgDQgFgCgCgEQgBgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgFACgHAAgAgYBoIgKgBQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQACgDAEgCQAGgCAUAAIAOAAQAGABADAEIAAgGQAAgFgCgBQgCgCgGAAIgOAAIgHABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABgBABIgVAAQgBgGACgEQACgEADgCQADgCAFgBIANAAIAaAAIAKABQAFABADADQADADABAEQACAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgIAAgAgXBOQgCACAAAEQABADACABIAJABIAHAAQAHAAAHgBQACgCAAgDQAAgEgCgBQgCgBgJAAIgKAAQgHAAgDABgAhbBoIgKgBQgFgBgDgDQgFgCgBgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAWAAIAAAPIAkAAIAAAQIgkAAIAAAYQABADACABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgDADgFABQgFACgHAAgAjFBoIgJgBQgFgBgDgDQgEgDgDgEIgBgGIAAgVQAAgFABgHQADgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQACAHAAAFIAAAVIgCAGQgCAEgEADQgDADgFABIgJABgAi/A6QgBAAAAABQgBAAgBAAQAAAAgBABQAAAAAAAAIgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgFIAAgIIgBgFQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgFgCIgPAAgAktBnIAAg9IAWAAIAAALIAAAAQAAgDADgDIAFgEQAEgCAKAAIALABQAEABADADQADADACAFIABALIAAAFIgUAAQgBgGgCgDIgDgCIgGAAQgGAAgEACIgCADIgBAFIAAAigAA2AFIAAgOIACAAQAEAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg9IAXAAIAABBQAAAFgCADQgBADgDACQgDACgEABIgJABgAB6gOIgKAAQgEgBgCgCIgGgFQgBgEAAgFIAAgFQAAgGACgEQACgDAFgCQAGgDATAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgNAAIgHABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIgXAAQABgGABgEQACgDADgCQADgCAGgBIAMgBIAaAAIALABQAEACAEADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAB8gnQgDABAAAEQAAADADACIAKABIAGAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgIAAIgLAAQgHAAgCACgAg6gOIgLgBQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIADgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgFAAIgNABgAghg2IAAgEIgCgDIgGgBIgIgBQgMABgCABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBABIAAAEIAhAAIAAAAgAkYgOQgKAAgGgBIgNgFIgDgEIgEgGIgCgHIgBgIIAAgaIABgJIACgHIAEgFIADgEQAEgDAJgCQAGgCAKAAIAqAAQAKAAAGACIAHACQAEABABACIAFAEIADAFIACAHIABAJIAAAaIgBAIIgCAHIgDAGIgFAEIgFADIgHACQgGABgKAAgAkbhPIgFADIgDAGIAAAHIAAAKIAAAIQABADACACQABACADABIAIABIAiAAIAIgBQADgBABgCIADgFIABgIIAAgKIgBgHIgDgGIgEgDIgJgBIggAAIgIABgAEJgPIgLghIAAAAIgMAhIgfAAIgXg9IAZAAIAOAtIAQgtIAVAAIAQAtIAPgtIAYAAIgXA9gAh9gPIAAgjQAAgEgEgDIgEgBIgMgBIgHABIgFACIgDAFIgBAFIAAAfIgXAAIAAg9IAXAAIAAAKIAEgFIAGgEQADgBAMgBIALABQAGAAAFADIAFADIAEAFIACAGIABAJIAAAjgAA/hUIAAgSIAXAAIAAASg");
	this.shape_2.setTransform(674.9,94.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADNBnIgLgBQgGgBgEgCIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgJQACgFAEgDQADgDAGgCIALgBIAQAAIAQABQAHABAEADQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIACACQADACAIAAIAHAAIAHgBIAEgBQACgCAAgDIAWAAIAAACQAAAGgDAEQgCADgEADQgEACgGAAIgMABgADmA/IAAgEIgDgDIgFgBIgIgBQgMABgCABQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABIAAAEIAhAAIAAAAgACBBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAAYBnIgKAAQgEgBgDgCIgFgFQgBgEAAgFIAAgFQAAgGACgEQACgDAEgCQAGgDAUAAIAPABQAGABADADIAAgFQAAgFgCgCQgDgCgGAAIgOAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIgWAAQAAgGACgEQABgDAEgCQADgCAFgBIANgBIAaAAIALABQAEACAEADQADACABAFQACAEAAAFIAAAoIgWAAIAAgHIgIAHQgEABgIAAgAAZBOQgCABAAAEQAAADADACIAJABIAHAAQAIAAAGgCQADgBAAgEQAAgDgCgBQgDgCgJAAIgKAAQgHAAgDACgAgqBnIgKgBQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAXQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEACQgGABgGAAgAiVBnIgJgBQgEgBgEgCQgEgDgCgFIgBgFIgBgWQAAgFACgHQACgFAEgCQAEgDAEgBIAJgBIAjAAIAJABQAFABADADQAEACACAFQACAHAAAFIAAAWIgCAFQgCAFgEADQgDACgFABIgJABgAiOA6QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgDADIgBAGIAAAGIABAFIADAEIAFABIAVAAQAEAAACgBQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIAAgJIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBIgGgBIgOgBgAj8BmIAAg9IAVAAIAAAMIABAAQAAgEADgCIAFgEQAEgCAKgBIALABQAEACADADQADADABAEIABALIAAAGIgUAAQAAgHgCgCIgDgCIgGgBQgGAAgEADIgCADIgBAEIAAAigAAxAEIAAgOIADAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAg8IAXAAIAABBQAAAFgCADQgBADgDABQgDACgEABIgJABgAFegOIgNgBQgGgBgDgDQgDgCgCgEQgCgEAAgFIAYAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQADABAJAAIAJAAIALgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgCgBgGAAIgVAAIgOgBQgFgBgDgDQgDgCgCgEQgBgEAAgHQAAgFACgEQACgDAEgCQAEgCAFgBIALAAIAQAAIASAAQAHABAEADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgLAAQgKAAgCABQgDAAAAAEQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADABAIAAIAQAAQAKAAAHACQAFABAEADQACADABAEIABAHQAAAHgBADQgCAEgEADQgDACgHABIgQABgAB1gOIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADAEIAAgGQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgWAAQAAgGABgEQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAB3goQgCACAAAEQAAADACABIAKABIAGAAQAIAAAHgBQADgCAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAiUgOIgKgBQgFgBgDgDQgEgCgCgEQgCgFAAgGIAAgYIgMAAIAAgQIAMAAIAAgPIAXAAIAAAPIAjAAIAAAQIgjAAIAAAYQAAADACABIAHABQAFAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgBADQgCAEgDADQgDADgFABQgFACgHAAgAj+gOIgJgBQgFgBgDgDQgEgDgCgEIgCgGIAAgVQAAgFACgHQACgFAEgDQADgCAFgBIAJgBIAiAAIAJABQAFABADACQAEADACAFQADAHAAAFIgBAVIgCAGQgCAEgEADQgDADgFABIgJABgAj8g6IgDAEIgBAFIAAAGIABAFIADAEIAEACIAWAAQADAAACgCQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgFIAAgIIgBgFQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIgWAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAEFgPIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9gAgpgPIAAgjQAAgFgEgCIgEgCIgMAAIgHAAIgFADIgDAEIgBAGIAAAfIgXAAIAAhXIAXAAIAAAjIAEgFIAGgDQAEgCALAAIALAAQAHABAEACIAFADIAEAFIACAHIABAJIAAAjgAmUgPIAAhXIBMAAQAJAAAFABQAGABAEADQAEADACAEQACAEAAAHIgBAJQgBADgCACIgEAEIgFACIAIACQADABABADQACACABAEIABAJQAAAHgCAEQgCAFgDACQgEADgFABIgKABgAl6gkIAwAAIAHgBQADgCAAgDQAAgFgDgBQgCgCgFAAIgwAAgAl6hEIAwAAQADAAACgBQACgCAAgDQAAgEgCgCQgCgBgDAAIgwAAgAA6hUIAAgSIAXAAIAAASg");
	this.shape_3.setTransform(540.3,94.3);

	this.instance_6 = new lib.jaw6b_drawing("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(538.6,51,0.5,0.5,0,0,0,101.7,63.7);

	this.instance_7 = new lib.jaw6_drawing("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(671.6,44.2,0.5,0.5,0,0,0,101.7,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#3C456A").ss(3,1,1).p("AAAmyIAANl");
	this.shape_4.setTransform(607.8,56.1);

	this.instance_8 = new lib.F_Top_button("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(482.8,15.1);

	this.instance_9 = new lib.K_Top_button("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(482.8,15.1);

	this.instance_10 = new lib.LM_Top_button("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(482.8,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},97).to({state:[{t:this.instance_3}]},96).to({state:[{t:this.instance_4}]},95).to({state:[{t:this.instance_5},{t:this.shape_1}]},97).to({state:[{t:this.shape_4},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2}]},97).to({state:[{t:this.instance_8}]},97).to({state:[{t:this.instance_9}]},96).to({state:[{t:this.instance_10},{t:this.shape_1}]},97).wait(100));

	// AboveTEXT_OFF
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F99E5").s().p("AgYB8IgTgBQgJgBgFgDQgFgDgCgGQgCgFAAgKIAAgHIAhAAIABAHIADAEQACACAIAAIAoAAQAHgBADgBIADgDIABgEQAAgFgBgCQgCgBgEgBIgOgBIgYgBIgegBIgKgCIgHgDIgFgFIgDgFQgBgFAAgMIABgNQABgHAEgFIAFgDIAIgEIALgCIA7gBQAKABANACIAHADIAFADQAEAEACAHIABANIAAADIghAAQAAgHgDgCIgFgBIgsgBQgGAAgEACQgDACAAAFIABAFQACACADABQAGABAbAAIAgABIALABIAIADQAEACACADIAEAGIACAIIABALQgBAMgCAGIgDAFIgFAFIgHACIgKACIgbABgACIBLIAAg8IAXAAIAAA8gABjBLIAAg8IAXAAIAAA8gAh3BLIAAg8IAXAAIAAA8gAicBLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFAEIgGACIgIAAgAFggiIgMgBQgGgCgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEACQAEADACAFQACAGAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgCAAgDIAVAAIAAADQAAAGgCADQgCADgFADQgEACgFABIgMABgAF5hLIgBgEIgCgDIgGgBIgIgBQgMABgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgBQgFgCgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgBQACgCAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEADgEACQgGACgGAAgAAZgiIgQgBQgGgCgDgCQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAFIACADQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIADgEIAGgCIAJgCIAwAAQAIAAAKABIAGADIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDABQgDACAAAEIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEACAWAAIAaAAIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEADIgGADIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBABAAAAQAAAAgBABQAAABAAAAQAAABAAABIgWAAQAAgHABgDQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADACACAFQABAEAAAFIAAApIgWAAIAAgHIgIAGQgDACgJAAgAkQg8QgCABAAAEQAAAEACABIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgHIAAgLIAaAAIAAAHQAAAGACABQADADAGAAIALAAQAHAAADgCIADgCIABgGIAAg4IAaAAIAABDIgCAGIgDAGIgEADQgFADgHACIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape_5.setTransform(542,135.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#122039").s().p("AmrCIIAAkPINXAAIAAEPg");
	this.shape_6.setTransform(542.7,135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F99E5").s().p("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");
	this.shape_7.setTransform(674.1,135.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#122039").s().p("AneCGIAAkLIO9AAIAAELg");
	this.shape_8.setTransform(675.1,135.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},6).to({state:[]},48).to({state:[{t:this.shape_6},{t:this.shape_5}]},47).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[]},49).wait(726));

	// BAckButotn
	this.btn_backs = new lib.btn_BACK_square();
	this.btn_backs.parent = this;
	this.btn_backs.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backs, 0, 1, 2, false, new lib.btn_BACK_square(), 3);

	this.btn_backc = new lib.btn_BACK_squareC();
	this.btn_backc.parent = this;
	this.btn_backc.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backc, 0, 1, 2, false, new lib.btn_BACK_squareC(), 3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7F99E5").s().p("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");
	this.shape_9.setTransform(674.1,135.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#122039").s().p("AneCGIAAkLIO9AAIAAELg");
	this.shape_10.setTransform(675.1,135.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F99E5").s().p("AgQB8IgQAAQgIgCgFgEQgFgDgDgGQgDgGAAgJIAAgIIABgLQABgFADgCQADgDAEgCQAFgBAGAAIAAgBIgFgEQgDgCgBgDQgBgDgBgKQABgJABgEQABgFAFgDQADgCAIgBIAUgBIAZAAQAPgBAJACQAIABAEADQAFAEACAFQACAGgBAKIAAAGIgcAAIAAgFQAAgFgDgBQgEgDgIAAIgWAAQgHAAgCABQgDACAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQABABAEADIA1AbIAAgNIAbAAIAAAOIgBANIATAKIgJAVIgTgKQgCADgEADIgJADIgKABgAgYBMQgCADAAAIIABAIQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACACALACIAuAAIAAgCIgygZIgEgCQgEABgDACgACyB8IAAhtIBaAAQAIAAAMACIAHAEIAEAEQAFAFACAHQABAHAAAIIAAAJQABAHgCAFQgCAHgDAFQgEAFgGADQgIADgGAAIhDAAIAAAcgADSBFIA0AAQAGAAACgDQADgDAAgFIAAgFQAAgFgDgDQgEgDgGAAIgyAAgAjLB8Ig+hQIgBAAIAABQIggAAIAAhtIAzAAIA+BPIAAhPIAiAAIAABtgAFzBLIAAg8IAXAAIAAA8gAFOBLIAAg8IAXAAIAAA8gAlhBLIAAg8IAXAAIAAA8gAmGBLIAAg8IAXAAIAAA8gACggOIAAgPIACAAQAHgBAEgBIADgDIABgEIgIAAIgcg7IAZAAIARArIASgrIAZAAIgjBJIgCAEIgGADIgFADIgIAAgAGHgjIgNgBQgFAAgEgDQgDgCgCgEQgCgEAAgGIAZAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAEABAIAAIAJAAIALgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgIgBIgWAAIgNgBQgGgCgDgCQgDgDgCgEQgBgEAAgGQAAgFADgFQABgCAEgCQAEgCAFgBIALgBIAQAAIASABQAIABADADQAEACABADQACADAAAGIgXAAQgBgDgDAAQgDgBgKAAQgLAAgCABQgDAAAAADQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQADABAIAAIAQAAQAKAAAHABQAFACAEADQACACABAEIACAIQAAAGgCAEQgBAEgEADQgEABgGABIgQABgAExgjIgMgBQgGAAgEgDIgEgEIgDgFIgDgHIAAgJIAAgGQAAgFACgIQACgGAEgDQADgDAGgCIALgBIAQAAIAQABQAHACAEADQAEACACAGQACAFAAAIIAAAKIg4AAIAAAEIABAEIACADQADABAIAAIAHAAIAIAAIADgCQADgBAAgEIAVAAIAAACQAAAHgCADQgCADgFADQgEACgGAAIgLABgAFKhKIgBgFIgDgDIgFgBIgIAAQgMAAgCABQgBABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAIgBAFIAiAAIAAAAgABkgjIgKgBQgEAAgEgDQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAADADABIAGABQAFAAADgCQACgBAAgEIAAgFIATAAIAAAIQAAAEgBAEQgBAEgEADQgDADgFABQgFABgHAAgAgWgjIgPgBQgGAAgEgDQgFgDgBgFQgCgEAAgHIAAgGIAaAAIABAGIACADQACABAHAAIAfAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgUgBIgXgBIgJgBIgFgCIgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgFAAgIIABgMQABgFACgEIAFgDIAGgCIAIgCIAwgBQAHABALACIAGACIAEADQAEADAAAFIABAKIAAADIgaAAQAAgFgCgCIgEgBIgjgBQgFAAgDACQgDACAAADIABAFQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAQAFABAVAAIAaABIAIABIAHADQADABACACIADAFIACAHIAAAIQgBALgBAEQgBACgCACIgDAEIgGACIgIABIgVABgAlBgjIgKAAQgEgBgDgCIgEgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAFgDAUABIAPAAQAGABADADIAAgFQAAgFgCgCQgCgBgHAAIgOAAIgGABQgBAAAAAAQgBAAAAABQAAAAAAABQAAABgBAAIgVAAQgBgFACgFQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAEACAEADQADADABAEQACAEAAAGIAAAnIgWAAIAAgHIgIAHQgEABgIAAgAlAg8QgCACAAADQABADACACIAJABIAHAAQAIAAAHgBQACgCAAgDQABgEgDgBQgDgCgIAAIgLAAQgHAAgDACgAmcgjQgJAAgHgBQgGgBgEgEQgEgDgBgFQgDgGAAgIIAAgKIAaAAIAAAIQABAFACACQADACAGAAIALAAQAHAAADgBIACgEIABgEIAAg5IAbAAIgBBDIgBAHIgDAEIgFAEQgEADgHABIgQABgADsgkIAAhWIAXAAIAABWgAiygkIgLggIAAAAIgMAgIgfAAIgYg9IAaAAIAOAtIAQgtIAVAAIARAtIANgtIAZAAIgXA9g");
	this.shape_11.setTransform(541.8,172.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#122039").s().p("AneCDIAAkFIO8AAIAAEFg");
	this.shape_12.setTransform(542.9,171.8);

	this.btn_backn = new lib.btn_BACK_squareN();
	this.btn_backn.parent = this;
	this.btn_backn.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backn, 0, 1, 2, false, new lib.btn_BACK_squareN(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F99E5").s().p("AgVB9QgMgBgIgBQgLgDgEgDIgGgFIgEgHIgCgIIgBgMIAAggIABgLIACgIIAEgHIAGgGQAEgDALgCQAIgCAMgBIAxAAQAJAAAOADIAHADIAGAEQAEAEACAHQABAGAAAIIAAAEIghAAIgBgHQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgJAAIgkAAIgKAAQgEACgCACQgDADgBAEIgBAMIAAANIABAMQABAEADACQACADAEABIAKABIAjAAQAIAAAEgCQADgBABgDQABgCAAgEIAAgEIgoAAIAAgWIBKAAIAAAfIgBAKIgCAIIgEAGIgGAEIgIADIgJABIgYABgACKBLIAAg8IAXAAIAAA8gABlBLIAAg8IAXAAIAAA8gAh5BLIAAg8IAXAAIAAA8gAieBLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIAAADgCIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFADIgGABIgIABgAFggjIgMAAQgGgCgEgCIgEgEIgDgFIgCgHIgBgIIAAgHQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEAEQAEADACAEQACAGAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHgBIAEgBQACgCAAgDIAVAAIAAADQAAAFgCAEQgCAEgFACQgEACgFABIgMAAgAF5hKIgBgFIgCgCIgGgCIgIAAQgMAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgjIgKAAQgFgCgEgCQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAACADACIAGABQAGAAACgCQACgBAAgFIAAgDIAUAAIAAAHQAAAFgCADQgBAEgDACQgEAEgEABQgGABgGAAgAAZgjIgQAAQgGgCgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAFIACAEQACABAHAAIAgAAIAIgBIADgDIABgDIgBgEQgBgDgEAAIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgKQABgGADgEIADgCIAGgDIAJgCIAwgBQAIAAAKACIAGADIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgCIgkAAQgFAAgDABQgDADAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEABAWAAIAaAAIAJABIAGADQADABACADIADAEIACAHIAAAIQAAAKgCAFQAAACgCACIgEADIgGADIgHACIgWAAgAkSgjIgJAAQgFgBgCgCIgFgFQgCgEAAgFIAAgFQAAgGACgEQADgDAEgCQAGgCATAAIAPAAQAGABADADIAAgFQAAgFgCgBQgCgCgHAAIgNAAIgHABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgWAAQAAgFABgFQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAFIAAApIgWAAIAAgIIgIAHQgDABgJAAgAkQg8QgCABAAAFQAAADACABIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgjQgKAAgGgBQgHgCgEgDQgEgDgBgGQgCgFAAgHIAAgLIAaAAIAAAIQAAAEACACQADADAGAAIALAAQAHAAADgCIADgDIABgEIAAg6IAaAAIAABEIgCAGIgDAFIgEAEQgFADgHACIgQAAgAEbgjIAAhYIAXAAIAABYgAiCgjIgMgiIAAAAIgMAiIgeAAIgYg+IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA+g");
	this.shape_13.setTransform(674,172.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#122039").s().p("AnSCOIAAkbIOlAAIAAEbg");
	this.shape_14.setTransform(674.6,172.3);

	this.btn_backg = new lib.btn_BACK_squareG();
	this.btn_backg.parent = this;
	this.btn_backg.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backg, 0, 1, 2, false, new lib.btn_BACK_squareG(), 3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F99E5").s().p("ADaB8QgMAAgIgBQgIgCgFgEQgFgFgDgGQgCgGAAgLIAAgMIAgAAIAAAKQAAAFAEADQADACAIAAIANAAQAJABAEgCQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAgBQACgCAAgDIAAhIIAhAAIgBBUIgCAIIgEAHIgFAEQgGAEgJACIgUAAgAgKB8IgRAAQgIgCgFgEQgFgDgDgGQgDgGAAgJIAAgIIABgMQACgEACgCQADgEAEgBQAFgBAHAAIAAAAIgGgFIgEgFQgBgDAAgLQAAgHABgFQACgFAEgDQAEgCAHgBIAUgBIAaAAQAPAAAIABQAIABAFADQAEAEACAFQACAGAAAKIAAAGIgdAAIAAgFQAAgEgDgDQgEgCgIAAIgXAAQgGAAgCABQgDACAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABAAQABADAFACIA1AbIAAgOIAbAAIAAAPIgBANIATAKIgJAVIgTgKQgDADgEACIgJAEIgKABgAgSBMQgDADAAAIIABAIQABACACABQADACAKABIAuAAIABgBIgygaIgFgBQgEAAgCADgAizB8IAAgqIhHAAIAAAqIghAAIAAhtIAhAAIAAAmIBHAAIAAgmIAhAAIAABtgAFiBLIAAg8IAXAAIAAA8gAE9BLIAAg8IAXAAIAAA8gAlRBLIAAg8IAXAAIAAA8gAl2BLIAAg8IAXAAIAAA8gADPgPIAAgOIACAAQAIgBADgBIADgDIABgEIgIAAIgcg7IAZAAIASArIARgrIAZAAIgiBJIgDAFIgFACIgGACIgIABgAFggjIgMgBQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgGQAAgFACgIQACgGAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHACAEADQAEACACAGQACAFAAAIIAAAKIg4AAIAAAEIABAEIADACQADACAHAAIAIAAIAHAAIAEgCQACgBAAgEIAVAAIAAACQAAAGgCAEQgCADgFADQgEACgFAAIgMABgAF5hKIgBgFIgCgDIgGgBIgIAAQgMAAgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBAFIAiAAIAAAAgACUgjIgKgBQgFgBgEgCQgEgDgCgDQgCgFAAgGIAAgYIgLAAIAAgRIALAAIAAgOIAXAAIAAAOIAkAAIAAARIgkAAIAAAYQAAADADABIAGABQAGAAACgCQACgBAAgEIAAgFIAUAAIAAAIQAAAFgCADQgBAEgDADQgEACgEACQgGACgGgBgAAZgjIgQgBQgGgBgDgCQgEgDgCgEQgCgFAAgHIAAgGIAZAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgFIgBgDQgBgCgEgBIgLgBIgVgBIgXgBIgIgBIgFgCIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgFAAgJIABgLQABgFADgEIADgCIAGgDIAJgCIAwgBQAIAAAKADIAGACIAEADQAEADABAFIABAKIAAADIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABQAEAAAWAAIAaABIAJABIAGADQADABACACIADAFIACAHIAAAIQAAAKgCAFQAAACgCACIgEAEIgGACIgHABIgWABgAkSgjIgJAAQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgDATABIAPAAQAGABADADIAAgFQAAgFgCgCQgCgBgHAAIgNAAIgHABQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAAAIgWAAQAAgFABgFQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFACADADQADADACAEQABAEAAAGIAAAnIgWAAIAAgHIgIAHQgDACgJgBgAkQg8QgCACAAADQAAADACACIAKABIAGAAQAIAAAHgCQADgBAAgDQAAgEgDgBQgCgBgJgBIgLAAQgHABgCABgAlsgjQgKABgGgCQgHgCgEgDQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAIQAAAEACADQADACAGAAIALAAQAHAAADgBIADgEIABgEIAAg6IAaAAIAABEIgCAHIgDAEIgEAEQgFADgHABIgQABgAEbgkIAAhXIAXAAIAABXgAiCgkIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA9g");
	this.shape_15.setTransform(541.8,209.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#122039").s().p("Am8CHIAAkNIN5AAIAAENg");
	this.shape_16.setTransform(543.6,209.8);

	this.btn_backj = new lib.btn_BACK_squareJ();
	this.btn_backj.parent = this;
	this.btn_backj.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backj, 0, 1, 2, false, new lib.btn_BACK_squareJ(), 3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7F99E5").s().p("AAiB8IgBgUIgCgFIgEgCIgHgBIgzAAIAAAcIghAAIAAhsIBjAAQAJAAAHACQAGACAEAEQADAFACAGQACAFAAAHIAAAHIgBAKIgDAIQgCAEgEACQgDACgGABIAAAAIAHACIAGAFIAEAHQABAEAAAHIAAASgAgfBFIA2AAQAGAAADgDQADgCAAgHIAAgDIgBgGIgDgEQgDgBgIAAIgzAAgACIBLIAAg7IAXAAIAAA7gABjBLIAAg7IAXAAIAAA7gAh3BLIAAg7IAXAAIAAA7gAicBLIAAg7IAXAAIAAA7gADPgOIAAgPIACAAQAIAAADgBIADgDIABgEIgIAAIgcg7IAZAAIASAqIARgqIAZAAIgiBIIgDAFIgFADIgGACIgIAAgAFggiIgMgBQgGgBgEgCIgEgFIgDgEIgCgHIgBgJIAAgGQAAgGACgIQACgFAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAAKIg4AAIAAAFIABADIADADQADACAHAAIAIAAIAHgBIAEgCQACgBAAgDIAVAAIAAACQAAAGgCADQgCAEgFADQgEACgFAAIgMABgAF5hKIgBgFIgCgCIgGgBIgIgBQgMAAgCACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgBgEgCQgEgDgCgEQgCgFAAgFIAAgZIgLAAIAAgQIALAAIAAgOIAXAAIAAAOIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAIQAAAEgCAEQgBAEgDACQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgCQgEgEgCgEQgCgFAAgGIAAgGIAZAAIABAFIACADQACABAHAAIAgAAIAIAAIADgDIABgEIgBgEQgBgCgEgBIgLgBIgVAAIgXgBIgIgBIgFgDIgEgEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgEAAgJIABgLQABgGADgDIADgDIAGgCIAJgDIAwAAQAIAAAKACIAGADIAEACQAEAEABAEIABALIAAACIgbAAQAAgEgCgCIgEgCIgkgBQgFAAgDACQgDACAAADIABAFQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAEIACAHIAAAIQAAALgCAEQAAACgCACIgEAEIgGADIgHABIgWABgAkSgiIgJgBQgFAAgCgCIgFgGQgCgDAAgGIAAgEQAAgHACgDQADgEAEgBQAGgDATAAIAPABQAGABADADIAAgFQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIgWAAQAAgGABgEQACgEADgBQADgDAGgBIAMAAIAbAAIAKABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg8QgCACAAAEQAAADACABIAKACIAGAAQAIAAAHgCQADgBAAgEQAAgEgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgFAAgIIAAgKIAaAAIAAAHQAAAFACACQADACAGABIALAAQAHgBADgBIADgDIABgFIAAg5IAaAAIAABEIgCAGIgDAFIgEAEQgFACgHACIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape_17.setTransform(674.5,209.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#122039").s().p("Am5CFIAAkJINzAAIAAEJg");
	this.shape_18.setTransform(675.6,209.6);

	this.btn_backr = new lib.btn_BACK_squareR();
	this.btn_backr.parent = this;
	this.btn_backr.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backr, 0, 1, 2, false, new lib.btn_BACK_squareR(), 3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F99E5").s().p("Ag1B8IAAhsIBwAAIAAAaIhPAAIAAATIBLAAIAAAaIhLAAIAAAlgAB9BMIAAg8IAXAAIAAA8gABYBMIAAg8IAXAAIAAA8gAhsBMIAAg8IAXAAIAAA8gAiRBMIAAg8IAXAAIAAA8gADPgOIAAgPIACAAQAIAAADgBIADgDIABgEIgIAAIgcg7IAZAAIASAqIARgqIAZAAIgiBIIgDAFIgFADIgGACIgIABgAFggiIgMgBQgGgBgEgCIgEgFIgDgEIgCgIIgBgIIAAgGQAAgGACgIQACgFAEgDQAEgDAFgCIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAAKIg4AAIAAAFIABADIADADQADACAHAAIAIAAIAHgBIAEgCQACgBAAgDIAVAAIAAACQAAAGgCADQgCAEgFADQgEACgFAAIgMABgAF5hKIgBgFIgCgCIgGgBIgIgBQgMAAgCACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBAFIAiAAIAAAAgACUgiIgKgBQgFgBgEgCQgEgDgCgEQgCgFAAgFIAAgZIgLAAIAAgQIALAAIAAgOIAXAAIAAAOIAkAAIAAAQIgkAAIAAAYQAAADADABIAGABQAGAAACgBQACgCAAgEIAAgEIAUAAIAAAHQAAAFgCAEQgBADgDADQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgCQgEgDgCgFQgCgFAAgGIAAgGIAZAAIABAFIACADQACACAHgBIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEAAIgLgCIgVAAIgXgBIgIgCIgFgCIgEgEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgEAAgJIABgLQABgGADgDIADgDIAGgCIAJgDIAwAAQAIAAAKACIAGADIAEACQAEADABAFIABALIAAADIgbAAQAAgGgCgBIgEgCIgkAAQgFAAgDABQgDACAAADIABAFQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADAAACADIADAFIACAGIAAAIQAAALgCAEQAAADgCABIgEAEIgGACIgHACIgWABgAkSgiIgJgBQgFgBgCgBIgFgGQgCgDAAgGIAAgEQAAgHACgDQADgEAEgCQAGgCATAAIAPABQAGABADADIAAgFQAAgGgCgBQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgWAAQAAgGABgEQACgDADgCQADgCAGgCIAMAAIAbAAIAKABQAFACADADQADACACAFQABAEAAAFIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg8QgCACAAAEQAAADACACIAKABIAGAAQAIAAAHgCQADgBAAgEQAAgDgDgCQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgDQgEgDgBgGQgCgGAAgHIAAgLIAaAAIAAAIQAAAFACACQADACAGABIALAAQAHgBADgBIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAFIgEAEQgFADgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA9g");
	this.shape_19.setTransform(541.9,246.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#122039").s().p("Am8CIIAAkPIN5AAIAAEPg");
	this.shape_20.setTransform(544,246.7);

	this.btn_backf = new lib.btn_BACK_squareF();
	this.btn_backf.parent = this;
	this.btn_backf.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backf, 0, 1, 2, false, new lib.btn_BACK_squareF(), 3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F99E5").s().p("AAeB8IgugpIgPAAIAAApIghAAIAAhtIAhAAIAAApIAPAAIApgpIAuAAIg7A2IBCA3gACIBMIAAg9IAXAAIAAA9gABjBMIAAg9IAXAAIAAA9gAh3BMIAAg9IAXAAIAAA9gAicBMIAAg9IAXAAIAAA9gADPgOIAAgPIACAAQAIAAADgBIADgDIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBJIgDAEIgFADIgGACIgIABgAFggiIgMgBQgGgBgEgDIgEgDIgDgGIgCgHIgBgIIAAgGQAAgFACgJQACgGAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEADQAEADACAFQACAGAAAHIAAALIg4AAIAAADIABAEIADADQADABAHABIAIAAIAHgBIAEgBQACgCAAgEIAVAAIAAADQAAAGgCADQgCAEgFACQgEACgFABIgMABgAF5hKIgBgEIgCgDIgGgCIgIAAQgMABgCABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgBQgFgBgEgDQgEgCgCgEQgCgFAAgGIAAgYIgLAAIAAgQIALAAIAAgOIAXAAIAAAOIAkAAIAAAQIgkAAIAAAYQAAADADACIAGABQAGAAACgCQACgBAAgFIAAgEIAUAAIAAAHQAAAFgCADQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgBQgGgBgDgDQgEgCgCgFQgCgFAAgGIAAgHIAZAAIABAGIACADQACABAHAAIAgAAIAIgBIADgCIABgEIgBgEQgBgCgEAAIgLgBIgVgBIgXgBIgIgCIgFgCIgEgDQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgFAAgIIABgLQABgFADgEIADgDIAGgCIAJgCIAwgBQAIAAAKACIAGACIAEADQAEAEABAEIABALIAAADIgbAAQAAgGgCgCIgEgBIgkAAQgFgBgDACQgDACAAAEIABAEQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAEABAWAAIAaAAIAJACIAGADQADABACACIADAFIACAHIAAAHQAAALgCAEQAAACgCADIgEADIgGACIgHACIgWABgAkSgiIgJgBQgFgBgCgCIgFgEQgCgEAAgFIAAgGQAAgFACgEQADgEAEgCQAGgCATAAIAPAAQAGACADADIAAgGQAAgEgCgCQgCgCgHAAIgNAAIgHABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgWAAQAAgGABgEQACgDADgCQADgCAGgBIAMgBIAbAAIAKABQAFABADADQADADACAFQABADAAAGIAAAoIgWAAIAAgHIgIAGQgDACgJAAgAkQg7QgCABAAAEQAAADACACIAKABIAGAAQAIgBAHgBQADgCAAgDQAAgEgDAAQgCgCgJAAIgLAAQgHAAgCACgAlsgiQgKAAgGgCQgHgBgEgDQgEgDgBgGQgCgGAAgHIAAgLIAaAAIAAAIQAAAFACACQADADAGgBIALAAQAHABADgCIADgDIABgFIAAg5IAaAAIAABDIgCAHIgDAFIgEAEQgFADgHABIgQABgAEbgjIAAhXIAXAAIAABXgAiCgjIgMghIAAAAIgMAhIgeAAIgYg9IAZAAIAOAtIAQgtIAWAAIAQAtIAOgtIAZAAIgYA9g");
	this.shape_21.setTransform(674.5,247);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#122039").s().p("AmmCHIAAkNINNAAIAAENg");
	this.shape_22.setTransform(674.1,247.1);

	this.btn_backk = new lib.btn_BACK_squareK();
	this.btn_backk.parent = this;
	this.btn_backk.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backk, 0, 1, 2, false, new lib.btn_BACK_squareK(), 3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7F99E5").s().p("AhCB8IgQgBQgIgBgFgDQgGgEgCgGQgDgGAAgJIAAgJIABgKQABgFADgDQACgCAFgBQAEgCAHAAIAAgBIgGgEIgDgFQgCgDAAgKQAAgJACgEQABgFAEgCQAEgEAIgBIAUAAIAaAAQAPAAAIABQAIABAEAEQAFACACAHQABAFAAAKIAAAGIgbAAIAAgFQAAgEgEgCQgDgDgIAAIgXAAQgHAAgDACQgCABAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABACAFACIA2AbIAAgNIAaAAIAAAOIgBANIATAKIgJAUIgTgKQgCAEgEADIgIADIgKABgAhKBMQgCADAAAIIABAIQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQACADAKABIAwAAIAAgBIgzgaIgFgBQgEAAgCACgAEQB7IAAhNIAAAAIgsBNIgZAAIgrhNIgBAAIAABNIggAAIAAhsIAzAAIAmBGIAlhGIA0AAIAABsgAktB7IAAhsIAhAAIAABQIBLAAIAAAcgAF1BLIAAg8IAXAAIAAA8gAFQBLIAAg8IAXAAIAAA8gAljBLIAAg8IAXAAIAAA8gAmIBLIAAg8IAXAAIAAA8gADPgOIAAgQIACAAQAIABADgCIADgCIABgFIgIAAIgcg6IAZAAIASAqIARgqIAZAAIgiBIIgDAEIgFAEIgGACIgIAAgAFggiIgMgCQgGgBgEgCIgEgEIgDgFIgCgHIgBgJIAAgFQAAgGACgJQACgFAEgDQAEgDAFgBIAMgBIAQAAIAPABQAHABAEACQAEAEACAFQACAFAAAIIAAAKIg4AAIAAAEIABAEIADADQADABAHAAIAIAAIAHAAIAEgCQACgCAAgDIAVAAIAAACQAAAHgCADQgCADgFADQgEACgFAAIgMACgAF5hLIgBgEIgCgDIgGgBIgIgBQgMABgCABQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBAEIAiAAIAAAAgACUgiIgKgCQgFgBgEgCQgEgDgCgEQgCgEAAgGIAAgYIgLAAIAAgQIALAAIAAgPIAXAAIAAAPIAkAAIAAAQIgkAAIAAAXQAAADADACIAGABQAGAAACgBQACgCAAgEIAAgFIAUAAIAAAIQAAAEgCAEQgBAEgDADQgEADgEABQgGACgGAAgAAZgiIgQgCQgGgBgDgCQgEgDgCgFQgCgEAAgHIAAgGIAZAAIABAGIACACQACACAHAAIAgAAIAIgBIADgDIABgDIgBgFQgBgCgEAAIgLgBIgVAAIgXgBIgIgCIgFgDIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQgBgEAAgIIABgLQABgGADgDIADgEIAGgCIAJgCIAwAAQAIAAAKACIAGACIAEADQAEADABAFIABALIAAACIgbAAQAAgFgCgCIgEgBIgkgBQgFAAgDABQgDADAAADIABAEQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEABAWAAIAaABIAJACIAGACQADABACACIADAFIACAHIAAAIQAAALgCADQAAADgCACIgEAEIgGACIgHABIgWACgAkSgiIgJgBQgFgBgCgCIgFgFQgCgDAAgGIAAgFQAAgGACgEQADgDAEgCQAGgCATgBIAPABQAGABADAEIAAgGQAAgFgCgCQgCgCgHAAIgNAAIgHABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIgWAAQAAgHABgDQACgEADgCQADgCAGgBIAMAAIAbAAIAKABQAFABADADQADADACAEQABAEAAAGIAAAnIgWAAIAAgGIgIAGQgDACgJAAgAkQg8QgCABAAAEQAAAEACABIAKABIAGAAQAIAAAHgBQADgCAAgEQAAgDgDgBQgCgBgJAAIgLAAQgHAAgCABgAlsgiQgKAAgGgCQgHgBgEgEQgEgDgBgFQgCgGAAgIIAAgKIAaAAIAAAHQAAAFACADQADACAGAAIALAAQAHAAADgCIADgCIABgGIAAg4IAaAAIAABDIgCAGIgDAGIgEADQgFADgHABIgQACgAEbgkIAAhWIAXAAIAABWgAiCgkIgMggIAAAAIgMAgIgeAAIgYg8IAZAAIAOAsIAQgsIAWAAIAQAsIAOgsIAZAAIgYA8g");
	this.shape_23.setTransform(607.7,284.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#122039").s().p("AnECNIAAkZIOJAAIAAEZg");
	this.shape_24.setTransform(608.1,284.5);

	this.btn_backm = new lib.btn_BACK_squareM();
	this.btn_backm.parent = this;
	this.btn_backm.setTransform(607,170.8);
	new cjs.ButtonHelper(this.btn_backm, 0, 1, 2, false, new lib.btn_BACK_squareM(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_backs}]},54).to({state:[]},2).to({state:[{t:this.btn_backc}]},96).to({state:[]},2).to({state:[{t:this.shape_10},{t:this.shape_9}]},43).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.btn_backn}]},47).to({state:[]},3).to({state:[{t:this.shape_12},{t:this.shape_11}]},43).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.btn_backg}]},49).to({state:[]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},44).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.btn_backj}]},48).to({state:[]},2).to({state:[{t:this.shape_16},{t:this.shape_15}]},44).to({state:[{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.btn_backr}]},48).to({state:[]},3).to({state:[{t:this.shape_18},{t:this.shape_17}]},44).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.btn_backf}]},47).to({state:[]},2).to({state:[{t:this.shape_20},{t:this.shape_19}]},45).to({state:[{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.btn_backk}]},48).to({state:[]},3).to({state:[{t:this.shape_22},{t:this.shape_21}]},44).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.btn_backm}]},51).to({state:[]},3).to({state:[{t:this.shape_24},{t:this.shape_23}]},44).wait(2));

	// buttons
	this.jaw9 = new lib.btn_jaw9_square();
	this.jaw9.parent = this;
	this.jaw9.setTransform(604.9,260.5);
	new cjs.ButtonHelper(this.jaw9, 0, 1, 2, false, new lib.btn_jaw9_square(), 3);

	this.jaw8 = new lib.btn_jaw8_square();
	this.jaw8.parent = this;
	this.jaw8.setTransform(672.1,223);
	new cjs.ButtonHelper(this.jaw8, 0, 1, 2, false, new lib.btn_jaw8_square(), 3);

	this.jaw7 = new lib.btn_jaw7_square();
	this.jaw7.parent = this;
	this.jaw7.setTransform(539.5,223);
	new cjs.ButtonHelper(this.jaw7, 0, 1, 2, false, new lib.btn_jaw7_square(), 3);

	this.jaw6 = new lib.btn_jaw6_square();
	this.jaw6.parent = this;
	this.jaw6.setTransform(672.1,185.6);
	new cjs.ButtonHelper(this.jaw6, 0, 1, 2, false, new lib.btn_jaw6_square(), 3);

	this.jaw5 = new lib.btn_jaw5_square();
	this.jaw5.parent = this;
	this.jaw5.setTransform(539.5,185.6);
	new cjs.ButtonHelper(this.jaw5, 0, 1, 2, false, new lib.btn_jaw5_square(), 3);

	this.base = new lib.btn_base_square();
	this.base.parent = this;
	this.base.setTransform(539.5,111.3);
	new cjs.ButtonHelper(this.base, 0, 1, 2, false, new lib.btn_base_square(), 3);

	this.jaw4 = new lib.btn_jaw4_square();
	this.jaw4.parent = this;
	this.jaw4.setTransform(672.1,148.5);
	new cjs.ButtonHelper(this.jaw4, 0, 1, 2, false, new lib.btn_jaw4_square(), 3);

	this.jaw3 = new lib.btn_jaw3_square();
	this.jaw3.parent = this;
	this.jaw3.setTransform(539.5,148.5);
	new cjs.ButtonHelper(this.jaw3, 0, 1, 2, false, new lib.btn_jaw3_square(), 3);

	this.jaw2 = new lib.btn_jaw2_square();
	this.jaw2.parent = this;
	this.jaw2.setTransform(671.9,111.3);
	new cjs.ButtonHelper(this.jaw2, 0, 1, 2, false, new lib.btn_jaw2_square(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]}).to({state:[]},54).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},47).to({state:[]},51).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},45).to({state:[]},49).to({state:[{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9},{t:this.jaw2}]},46).to({state:[]},51).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},46).to({state:[]},50).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},46).to({state:[]},51).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},47).to({state:[]},49).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},47).to({state:[]},50).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},47).to({state:[]},53).to({state:[{t:this.jaw2},{t:this.jaw3},{t:this.jaw4},{t:this.base},{t:this.jaw5},{t:this.jaw6},{t:this.jaw7},{t:this.jaw8},{t:this.jaw9}]},47).wait(2));

	// BlueBoxes
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C7C8CA").ss(1,1,1).p("A0woTMAphAAAIAAQnMgphAAAg");
	this.shape_25.setTransform(606.3,59.5);

	this.instance_11 = new lib.ButtonsScreen("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(481.1,6.4);
	this.instance_11.alpha = 0.309;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3C456A").s().p("A2OX3MAAAgvtMAsdAAAMAAAAvtg");
	this.shape_26.setTransform(607.7,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.instance_11},{t:this.shape_25}]}).to({state:[{t:this.shape_26},{t:this.instance_11},{t:this.shape_25}]},54).wait(824));

	// Stext
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkUCOIAAgSIACAAQAEAAABgCQADgBAAgEIAAhHIAaAAIAABMQAAAGgCAEQgBAEgEACQgEADgEABIgLABgAM6B3IAAgXIAKAAQAFAAADgCQADgCAAgGIAAgmQAAgFgDgDQgDgCgFAAIgKAAIAAgXIASAAQAHAAAGACQAFABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgFABQgGACgHAAgAL0B3IgNgBQgIgBgEgEIgFgEIgDgGIgDgIIgBgKIAAgHQAAgHADgJQACgHAEgDQAFgEAGgBQAFgCAJAAIASAAQALAAAHACQAJABAEADQAFAEACAGQADAGAAAJIAAAMIhCAAIAAAEQAAADABACIAEADQADACAJAAIAIAAIAIgBIAFgBQACgCABgEIAZAAIAAADQgBAHgDAEQgCAEgFADIgLADIgOABgAMSBIIgBgFIgEgDIgFgCIgKAAQgOAAgCACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBAFIAoAAIAAAAgAKaB3IgMgBQgFgBgEgDQgFgDgCgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEACABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAYAAIAAAJQgBAFgBAEQgCAFgEADQgEADgFACQgGACgIAAgAIhB3IgLgBIgJgDQgEgCgCgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAEAEIAAgGQAAgGgCgCQgDgCgHAAIgQAAIgIABQgCABgBAEIgaAAQABgHABgFQACgEAEgDQADgCAHgBIAPgBIAfAAQAGAAAGACQAGACADADQADADACAFQACAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAIiBZQgCACAAAFQAAADADACQADABAIAAIAHAAQAKAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgKAAIgNAAQgHAAgEACgAHSB3IgMgBQgFgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCgBgFIAAgFIAYAAIAAAJQAAAFgBAEQgDAFgDADQgEADgFACQgHACgIAAgAFWB3IgKgBQgFgCgFgCQgEgEgDgFIgCgGIAAgZQAAgGACgJQADgFAEgDQAFgDAFgCIAKgBIApAAIAKABQAGACADADQAFADADAFQACAJAAAGIgBAZIgBAGQgDAFgFAEQgDACgGACIgKABgAFeBCIgFACQgDACgBACIgBAHIAAAGIABAHQABACADACIAFACIAIABIARgBQAFAAACgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIABgGIAAgKIgBgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgCgCgFAAIgRgBgABJB3IgQgBQgGgCgEgCQgEgDgCgEQgCgFAAgHIAcAAQAAAEACABQAEACALAAIAJAAQAKAAACgBQAEgBAAgDQAAgEgDgBQgCgBgHAAIgZAAIgPgBQgHgCgDgCQgEgDgCgFQgCgFABgHQgBgHADgEQADgEAEgCQAEgCAGgBIANgBIATAAIAWABQAHABAFADQAEACACAEQACAEgBAHIgaAAQgBgDgDgBIgQgBIgPABQgDABAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAOABIASAAQAMAAAHABQAHACADAEQADACACAFIABAJQAAAHgCAFQgCAEgEADQgEADgIABIgTABgAjGB3IgLgBIgIgDQgEgCgBgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAHABAEAEIAAgGQgBgGgCgCQgCgCgJAAIgPAAIgIABQgCABAAAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAOgBIAgAAQAHAAAFACQAFACAEADQAEADACAFQABAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAjDBZQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgLAAIgLAAQgJAAgCACgAn7B3IgMgBQgGgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQABAEADABQACACAFAAQAGAAADgCQACgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgDADQgEADgGACQgGACgIAAgAp3B3IgLgBIgJgEQgEg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");
	this.shape_27.setTransform(138.5,140.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOCmQgIgEgFgIQgGgJAAgNQAAgSAKgKQAJgJARAAQANAAAIAFQAIAGADALIgTAFIgCgFIgFgEIgGgBQgGAAgEAGQgDAEAAAKQAAAMADAEQAEAEAFAAQAHAAADgDQADgEACgHIATAGQgCAIgEAGQgEAFgGADQgHADgJAAQgLAAgHgDgABHB6IgDgOIAAgMIATAAIAAAMIgDAOgAAtB6IgDgOIAAgMIAUAAIAAAMIgDAOgAg4B6IgDgOIAAgMIATAAIAAAMIgDAOgAhSB6IgDgOIAAgMIAUAAIAAAMIgDAOgAinAdQgHgHgBgKIAVgCQAAAFADADQADAEAGAAQAFAAADgCQACgCAAgDQAAgDgCgCQgDgCgJgCQgOgDgGgFQgHgFAAgJQAAgFAEgFQADgFAGgDQAHgDALAAQAOAAAHAGQAHAFABALIgVABQAAgFgDgCQgDgCgEAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAIADQAOADAHADQAGAEADADQADAFAAAGQAAAHgEAGQgEAFgHADQgHADgKAAQgSAAgHgHgAB0AjIAAhGIA7AAIAAAPIglAAIAAALIAjAAIAAAOIgjAAIAAAOIAmAAIAAAQgAAyAjIAAhGIAWAAIAAA1IAiAAIAAARgAgHAjIAAgeIgcgoIAZAAIANAYIAPgYIAYAAIgcAoIAAAegAhSAjIAAg1IgWAAIAAgRIBDAAIAAARIgXAAIAAA1gAhqhiQgGgDgDgGQgDgFgBgIIAVgDIABAHIADADIADABQAEAAACgCQABgDAAgHIAAgsIAXAAIAAAnQAAAMgDAHQgCAGgGAFQgHAEgKAAQgLAAgGgDgABVhgIgMgtIgNAtIgVAAIgQhIIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBIgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhIIAYAAIAaBIgAgIh8IgHgZIgIAZIAPAAg");
	this.shape_28.setTransform(217.6,41.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeCoIAAhHIAgAAQAKAAAGACQAGADAEAFQAEAFABAGQACAHAAAHQAAAMgCAGQgDAGgFAFQgEAEgGABQgHACgGAAgAgICYIAGAAQAGAAADgCQADgBABgEQACgEAAgIQAAgMgEgEQgDgEgIAAIgGAAgABHB7IgDgPIAAgLIATAAIAAALIgDAPgAAtB7IgDgPIAAgLIAUAAIAAALIgDAPgAg4B7IgDgPIAAgLIATAAIAAALIgDAPgAhSB7IgDgPIAAgLIAUAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_29.setTransform(213.2,108.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AkNCOIAAgSIADAAQAEAAABgCQACgBAAgEIAAhHIAbAAIAABMQAAAGgCAEQgCAEgDACQgEADgFABIgKABgANCB3IAAgXIAKAAQAFAAADgCQADgCAAgGIAAgmQAAgFgDgDQgDgCgFAAIgKAAIAAgXIASAAQAHAAAFACQAGABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgGABQgFACgHAAgAL8B3IgOgBQgHgBgEgEIgFgEIgEgGIgCgIIgBgKIAAgHQAAgHADgJQACgHAEgDQAEgEAHgBQAFgCAIAAIATAAQALAAAHACQAIABAFADQAFAEACAGQACAGAAAJIAAAMIhBAAIAAAEQAAADABACIADADQAEACAJAAIAIAAIAIgBIAFgBQACgCAAgEIAZAAIAAADQAAAHgDAEQgCAEgFADIgLADIgOABgAMZBIIgBgFIgDgDIgGgCIgJAAQgOAAgDACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAFIAnAAIAAAAgAKiB3IgMgBQgFgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgEADQgEADgFACQgGACgIAAgAIoB3IgLgBIgIgDQgEgCgCgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAEAEIAAgGQAAgGgCgCQgDgCgIAAIgPAAIgIABQgDABAAAEIgaAAQAAgHACgFQACgEAEgDQADgCAHgBIAOgBIAgAAQAGAAAGACQAFACAEADQADADACAFQACAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAIqBZQgCACAAAFQAAADADACQADABAIAAIAHAAQAKAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgLAAIgMAAQgIAAgDACgAHaB3IgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgCAEQgCAFgDAD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DAFIgGAEIgHACgAIZgmIgQgBQgHgCgFgDQgFgDgCgGQgDgFAAgJIAAgIIABgKQABgEADgDQACgCAEgBQAFgCAGAAIAAAAIgGgEIgDgFQgBgDAAgJQAAgIABgEQABgFAEgCQAEgDAHgBIATgBIAYAAIAWABQAIACAEACQAEADACAGQACAFAAAKIAAAFIgbAAIAAgFQAAgEgDgCQgEgCgHAAIgWAAQgGAAgCABQgDACAAADIABAFQACACAEACIAzAaIAAgOIAZAAIAAAPIgBALIASAKIgJATIgSgJQgCADgEACIgIADIgJACgAIRhUQgCADAAAIIABAGQABADACACQACABAJABIAtAAIAAgBIgvgYIgFgBQgEAAgCACgAFFgmQgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIAAgKIAAgeIAAgKIADgIIADgHIAFgFQAEgCAKgDQAIgCALAAIAlAAQALAAAPACIAJADQAEABACADIAEAFQACADABADQABAHAAALIgfAAIAAgCQAAgGgEgCQgDgCgHAAIgiAAQgGAAgEACQgEABgCADQgCACgBAEIgBAJIAAALIABAJQABAEACACQACADADABIAJABIAqgBIAGgBQACgCABgDIABgHIAfAAIAAAJQAAAHgCAFQgBAGgEAEQgFAEgHADQgLACgIAAgAAogmIgQgBQgHgCgEgCQgDgDgCgEQgCgFAAgHIAcAAQAAAEACABQAEACAKAAIAKAAQAJAAADgBQAEgBAAgDQAAgEgDgBQgCgBgHAAIgZAAIgQgBQgGgCgEgCQgDgDgCgFQgCgFAAgHQAAgHADgEQACgEAFgCQAEgCAGgBIANgBIATAAIAVABQAIABAFADQAEACACAEQABAEAAAHIgaAAQgBgDgEgBIgPgBIgPABQgEABAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIANABIATAAQALAAAIABQAHACADAEQADACACAFIAAAJQAAAHgBAFQgCAEgEADQgEADgIABIgTABgAg9gmIgOgBQgHgBgEgEIgFgEIgEgGIgCgIIgBgKIAAgHQAAgHADgJQACgHAEgDQAEgEAHgBQAFgCAIAAIATAAQALAAAHACQAIABAFADQAFAEACAGQACAGAAAJIAAAMIhBAAIAAAEQAAADABACIADADQAEACAJAAIAIAAIAIgBIAFgBQACgCAAgEIAZAAIAAADQAAAHgDAEQgCAEgFADIgLADIgOABgAgghVIgBgFIgDgDIgGgCIgJAAQgOAAgDACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAFIAnAAIAAAAgAkrgmIgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgCAEQgCAFgDADQgEADgGACQgGACgIAAgAm6gmIgTgBQgHgCgFgDQgFgDgCgFQgCgFAAgIIAAgHIAfAAIABAGIACADQADACAHAAIAnAAQAGAAADgBIADgDIABgEIgBgGIgGgCIgNgBIgYgBIgcgBIgJgCQgEgBgCgCQgDgBgCgDIgCgFQgCgFAAgKIABgNQABgGAEgEIAFgEIAHgDIAKgCIA4gBQAJAAANACIAHADIAEAEQAEADABAGQACAFAAAHIAAADIggAAQAAgGgCgCIgEgBIgJgBIgiAAQgGAAgDACQgDACAAAEIABAFQACACADABQAFABAaAAIAeABIAKABIAIADIAGAEIADAGIACAHIABAKQgBAMgBAFIgDAFIgFAEIgHADIgIACIgaABgAsXgmIgLgBIgIgDQgEgCgCgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAEAEIAAgGQAAgGgCgCQgDgCgIAAIgPAAIgIABQgDABAAAEIgaAAQAAgHACgFQACgEAEgDQADgCAHgBIAOgBIAgAAQAGAAAGACQAFACAEADQADADACAFQACAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAsVhEQgCACAAAFQAAADADACQADABAIAAIAHAAQAKAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgLAAIgMAAQgIAAgDACgAuAgmQgMAAgHgCQgIgCgEgEQgFgDgCgHQgCgGAAgJIAAgMIAeAAIAAAJQAAAGADACQADADAIAAIAMAAQAIAAAEgCQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgGIAAhDIAfAAIAABGIgBAJIgCAIIgDAFIgFAFQgFADgJACIgSABgALPgnIAAhmIBeAAQAHAAAMACIAIADIAFAEIAFAEIACAHQADAGAAAKIAAAeQAAAKgDAHIgCAGIgFAEIgFAEIgIADQgMACgHAAgALuhBIA3AAIAJgBIAFgDQADgCABgEIABgIIAAgOIgBgJQgBgEgDgCQgCgCgDgBIgJAAIg3AAgAiNgnIAAhmIAaAAIAABmgApwgnIgNgnIgBAAIgNAnIgkAAIgbhIIAdAAIAQA0IABAAIASg0IAZAAIATA0IAQg0IAeAAIgcBIgAOUhVIAAg4IAVAAIAAA4gANxhVIAAg4IAWAAIAAA4gADohVIAAg4IAVAAIAAA4gADFhVIAAg4IAWAAIAAA4g");
	this.shape_30.setTransform(130.4,156.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABiyIAACQQgBAUAAANQAAANABAUIAACS");
	this.shape_31.setTransform(63.8,100.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACyIAAiQQABgPAAgQQAAgQgBgUIAAiR");
	this.shape_32.setTransform(48.4,100.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAFQAAAKAHgBIAYAAQAGgIAAgGQAAgGgGgIIgfAA");
	this.shape_33.setTransform(50.2,88.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgc");
	this.shape_34.setTransform(51.5,88.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAPIAAgc");
	this.shape_35.setTransform(51.5,113.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgYAAQgCAAgCAAIgDAA");
	this.shape_36.setTransform(49.9,115.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQgEIgYAAQgHAAAAAJ");
	this.shape_37.setTransform(49.9,112.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_38.setTransform(52.2,113.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAcIAAg3");
	this.shape_39.setTransform(122.2,98.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAYImrAAIAAgvIK3AAIA7AhQADACACABQALAEALAAIAcAAQANAAANgH");
	this.shape_40.setTransform(121.1,93.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag6AuIAAhFIBAAAIAAgWIA1AA");
	this.shape_41.setTransform(121.1,106.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACRATIhQAAIgBgkIAAgBIjQAA");
	this.shape_42.setTransform(107.8,99);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAdIAAg5");
	this.shape_43.setTransform(115.2,107.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADqhrIiPAAIAAAFIkpAAQgMAAgHAIQgIAIAAALIAACWQAAALAIAIQAIAJALAAIEpAAIAAAFICNAA");
	this.shape_44.setTransform(100.8,100.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADfAeIm9AAIAAgvIAaAAIAEgCIACgEIAAgGIEFAA");
	this.shape_45.setTransform(101.7,107.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAqIAXAAIAAhTIgXAA");
	this.shape_46.setTransform(78.6,100.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABDAoIACgPIAAgtQAAgLgFgIIh4AAIgEABIgIAA");
	this.shape_47.setTransform(86.7,100.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAAIAIAAIAEABIAPAA");
	this.shape_48.setTransform(81.2,105.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADGAbIAAg1ImLAAIAAAG");
	this.shape_49.setTransform(102.6,97.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAgggIg7AAQgCAAgBACQgBACAAABIAAA4QAAABABACQACABABAA");
	this.shape_50.setTransform(112,107.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag5BCQgCAAgDgBIgEgDIBjAAQAigXAAgoQAAgpgigXIhZAA");
	this.shape_51.setTransform(168.4,101.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTgWIAGACQAFACABAEIACAGIAAAEIACACIAIAMIAMALQACACACAA");
	this.shape_52.setTransform(160.5,105.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKAdIAAg4IABgDIABgCICOAAQABAAACACQABACAAABIAAA4QAAABgBACQgCABgBAA");
	this.shape_53.setTransform(135.4,107.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYAPIAAgaIgBgCQgCgBgBAAIgrAAIAAAI");
	this.shape_54.setTransform(124.6,102.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_55.setTransform(123.2,101.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah3gGIAAAVIC6AAIAAgaQAAgDADAAIAwAAIACABQABABAAABIAAAa");
	this.shape_56.setTransform(137.5,102.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAPIAAgaIAAgCIgCgB");
	this.shape_57.setTransform(126.8,102.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhFgDICBAAQADAGAHAB");
	this.shape_58.setTransform(121.3,90.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_59.setTransform(159.1,94.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHADIAAgFIgNAAIAAAF");
	this.shape_60.setTransform(158.6,94.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABPAwIieAAIAAhfICeAAg");
	this.shape_61.setTransform(167.1,89.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhHhBIBoAAIAAAEIAnAAIAAB/IggAA");
	this.shape_62.setTransform(170.6,100.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKgKIAVAAIAAAV");
	this.shape_63.setTransform(176.1,93.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_64.setTransform(175.3,94.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBACIADAAIAAgD");
	this.shape_65.setTransform(174.1,94.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNgBIAAADIAbAA");
	this.shape_66.setTransform(161.5,94.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiDAFIDhAAIANgHIAPgCIAKAA");
	this.shape_67.setTransform(145.8,110.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOgFIgOADIgNAH");
	this.shape_68.setTransform(156.6,110.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCACIAAgDIAFAA");
	this.shape_69.setTransform(174.2,107.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_70.setTransform(175.3,107.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AALgLIAAAXIgVAA");
	this.shape_71.setTransform(176.1,108.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhPgvIAABfICeAAIAAhf");
	this.shape_72.setTransform(167.1,112.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIACIAAgDIARAA");
	this.shape_73.setTransform(161,107.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhPgVIAAArICfAA");
	this.shape_74.setTransform(167.1,105.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag/ggQABAAABABIAAAAQABACAAAAIAAAbIA1AAQAAgBABAAQAEgEAEAAIAeAAQAGAAAEAEQAEADAAAGIAAAEIABADQAHAMAKAI");
	this.shape_75.setTransform(155.5,104);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACIAAIkPAA");
	this.shape_76.setTransform(128.8,110.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAArIAFAGIBLAAIAFgGIAAgr");
	this.shape_77.setTransform(128.3,113.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGgiIANAAIAABF");
	this.shape_78.setTransform(133.2,115.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAFAFIBLAAIAFgFIAAgs");
	this.shape_79.setTransform(117.9,123.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAFAFIBLAAIAFgFIAAgs");
	this.shape_80.setTransform(102.8,123.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AizixIAAgXIKWAAIAAAXIqWAAIkvAAIAAFkIEvAAIKWAAIAAAWIqWAAIAAgW");
	this.shape_81.setTransform(86.6,100.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgFgFIhLAAIgFAFIAAAs");
	this.shape_82.setTransform(117.9,78.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgFgFIhLAAIgFAFIAAAs");
	this.shape_83.setTransform(102.8,78.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgiIAABFIhhAA");
	this.shape_84.setTransform(129.1,86.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_85.setTransform(160.2,94.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAJIAAgR");
	this.shape_86.setTransform(160.2,106.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_87.setTransform(174.4,107.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_88.setTransform(175,94.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_89.setTransform(175,107.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASgaIgSgFIgQAFIgLALIgFAPIAFAQIANANIAOADIAPgDIANgNIAFgQIgFgPg");
	this.shape_90.setTransform(167.3,89.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgBIAAADIACABIADgBIAAgDIgDgBg");
	this.shape_91.setTransform(167.3,89.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQgfIgMACIgKAHIgHALIgCALIACAMIAHALIAKAHIAMAC");
	this.shape_92.setTransform(165.6,89.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAAACIACABIADgBIAAgCIgDgCg");
	this.shape_93.setTransform(167.3,112.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcgQIgKgLIgSgFIgQAFIgLALIgFAPIAFARIANAMIAOAFIAPgFIANgMIAFgRg");
	this.shape_94.setTransform(167.3,112.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQggIgMADIgKAHIgHALIgCALIACAMIAHALIAKAHIAMAD");
	this.shape_95.setTransform(165.6,112.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_96.setTransform(174.1,107.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPgXIgPgEIgOAEIgJAKIgEANIAEAOIALALIAMADIANgDIALgLIAEgOIgEgNg");
	this.shape_97.setTransform(167.3,100.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_98.setTransform(102.8,125.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_99.setTransform(102.8,76.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_100.setTransform(126.2,101.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_101.setTransform(125.7,101.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_102.setTransform(128.3,115.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAdAAIg5AA");
	this.shape_103.setTransform(112.3,110.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIABAA");
	this.shape_104.setTransform(109.3,110.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIAAAC");
	this.shape_105.setTransform(127.9,110.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_106.setTransform(135.1,103.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_107.setTransform(134.9,103.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_108.setTransform(133.2,103.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_109.setTransform(133,103.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_110.setTransform(131.3,103.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_111.setTransform(131.1,103.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_112.setTransform(129.4,103.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_113.setTransform(129.2,103.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgiIAABF");
	this.shape_114.setTransform(127.9,107.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_115.setTransform(137.3,103.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_116.setTransform(137,103.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_117.setTransform(136.8,103.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqAAIBVAA");
	this.shape_118.setTransform(117.9,125.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_119.setTransform(117.9,76.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_120.setTransform(124.1,119.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgLIAAAW");
	this.shape_121.setTransform(124.1,81.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACQAAgCAAgB");
	this.shape_122.setTransform(92.4,90.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_123.setTransform(92.4,96.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_124.setTransform(84.5,96.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_125.setTransform(84.5,90.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_126.setTransform(84.5,110.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_127.setTransform(92.4,110.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgLIAAAX");
	this.shape_128.setTransform(115.1,102.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgdIAAA7");
	this.shape_129.setTransform(84.2,107.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAYIAAgv");
	this.shape_130.setTransform(79.5,108.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIABgb");
	this.shape_131.setTransform(115.1,103.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_132.setTransform(177.2,93.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA1AEIhhAAQgCgGgGgB");
	this.shape_133.setTransform(118.7,111.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_134.setTransform(115.3,100.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAEQAIAAADgH");
	this.shape_135.setTransform(113.7,90.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAFIAQgCIAQgI");
	this.shape_136.setTransform(161.7,94.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKABIACAAIABAAIACAAIABgBIACAAIAAAAIACAAIABAAIAHAAIABAAIADAA");
	this.shape_137.setTransform(119.6,91);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAwIASgEIAPgLIAKgPIAEgSIgEgRIgKgQIgPgLIgSgD");
	this.shape_138.setTransform(170.5,100.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYgvQgUAAgNAOQgOAOAAATQAAATAOAOQANAOAUAB");
	this.shape_139.setTransform(164.6,100.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAAIALAA");
	this.shape_140.setTransform(167.6,96.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAwQAUgBANgOQANgOAAgTQAAgTgNgOQgNgOgUAA");
	this.shape_141.setTransform(170.6,100.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAAIgLAA");
	this.shape_142.setTransform(167.6,105.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAEIgEgFIgFgC");
	this.shape_143.setTransform(83.7,96.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgNAA");
	this.shape_144.setTransform(121.6,99);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCACIAFgD");
	this.shape_145.setTransform(163.1,94.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA5AAIhxAA");
	this.shape_146.setTransform(168.2,107.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAmIAAhL");
	this.shape_147.setTransform(99.5,86.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgiIAABF");
	this.shape_148.setTransform(124.2,86.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAARIAAgh");
	this.shape_149.setTransform(124.2,117);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAglIAABL");
	this.shape_150.setTransform(99.5,115);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAArIAAhV");
	this.shape_151.setTransform(81.2,100.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3C456A").s().p("AA+D7IgFgFIAAgsIhBAAIAAAsIgGAFIhLAAIgEgFIAAgsIktAAIAAgXIkvAAIABlkIEuAAIAAgXIEtAAIAAgsIAFgGIBLAAIAFAGIAAArIBBAAIAAgrIAFgGIBLAAIAFAFIAAAtIB/AAIAAAXIgKAAIAABGIhEAAIACACQADAJAJAAIDLgBIArAZIAFACIARAJQALAGAGAAIAKAAIAAgHIALAAIAAgGIAAhgICfAAIAABPIAWAAIAAAXIAGAAIAAB+IgGAAIAAAXIgWAAIAABPIieAAIAAhPIgMAAIgPADIgMAIIjkAAIAAAKIAPAAIAABHIAJAAIAAAXIiAAAIAAAsIgEAFg");
	this.shape_152.setTransform(108,100.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAFQAAAKAHAAIAYAAQAGgJAAgGQAAgFgGgIIgbAAQgCgBgBAA");
	this.shape_153.setTransform(55.3,21.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgb");
	this.shape_154.setTransform(56.6,21.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABiyIAACQQgBAUAAANQAAANABAUIAACT");
	this.shape_155.setTransform(68.8,34.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACzIAAiRQABgPAAgQQAAgPgBgVIAAiR");
	this.shape_156.setTransform(53.5,34.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA3BAQAhgYAAgoQAAgnghgYIhYAAQgMAHgOAAIgcAA");
	this.shape_157.setTransform(171.3,34.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag1gBIBrAAIAAAD");
	this.shape_158.setTransform(172.3,24.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_159.setTransform(166.8,24.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQARIAAghIifAAIAAAT");
	this.shape_160.setTransform(172.4,26.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHADIAAgFIgNAAIAAAF");
	this.shape_161.setTransform(163.6,28.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBARIABgCIABgDIAAgc");
	this.shape_162.setTransform(164.3,26.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgC");
	this.shape_163.setTransform(164.4,27.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGgNIAAAbIiLAA");
	this.shape_164.setTransform(172.3,26.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhXg1IARgEIAQgIIBoAAIAAAFIAnAAIAAB+IggAA");
	this.shape_165.setTransform(174,34.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgKIASAAIAAAV");
	this.shape_166.setTransform(181.3,27);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJgKIAAAVIgSAA");
	this.shape_167.setTransform(181.3,42);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABQgQIAAAhIifAAIAAgT");
	this.shape_168.setTransform(172.4,42.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAVgFIgNAAIgPADIgNAH");
	this.shape_169.setTransform(162.3,43.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAkIAAgdIgBgDIAAAAIgBgBIAAgKIABgBIAAgBIABgCIgBgDIAAgCIgBAAIAAgLIABgBIABgDIgBgDIgBgB");
	this.shape_170.setTransform(164.3,40.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAVIgBgCIgCgBIAAgMIACgBIAAAAIABgCIgBgDIgBAAIgBgBIAAgLIABgBIABgBIABgCIgBgDIgCgB");
	this.shape_171.setTransform(164.3,39.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAWIgMgLIgIgMIgCgCIAAgEIgBgGQgCgFgEgCIgBAAIgGgB");
	this.shape_172.setTransform(165.3,39);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag+gfIAAAbIA1AAIABgBQAEgDAEAAIAeAAQAGAAAEAEQAEAEAAAEIAAAEIACADQAGALALAJ");
	this.shape_173.setTransform(160.7,37.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_174.setTransform(164.4,37.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABlAPIAAgaQgBgBAAgBQgCgBgBAAIgvAAQgDAAAAADIAAAaIiTAA");
	this.shape_175.setTransform(144.5,35.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhKgcIABgDIACgBICNAAQACAAABABQACACAAABIAAA4QgBACgBABQgCACgBAAIhXAA");
	this.shape_176.setTransform(140.4,41);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgYIgYAAIAAgVAAGAuIAAhGIANAA");
	this.shape_177.setTransform(132.3,39.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACQATIhPAAIgBgkIAAgBIjPAA");
	this.shape_178.setTransform(112.8,32.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIAAAAIADAAIAAABIgBgBgAgWAAIAqAA");
	this.shape_179.setTransform(129.7,34.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_180.setTransform(128.2,34.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzgKIgmAAIAAAUIg/AA");
	this.shape_181.setTransform(125.3,36.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGgiIANAAIAABG");
	this.shape_182.setTransform(138.3,48.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAFAFIBLAAIAFgFIAAgs");
	this.shape_183.setTransform(133.3,46.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkzgKIKWAAIAAAVIqWAAgAligKIAvAA");
	this.shape_184.setTransform(104.4,53.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAFAFIBKAAIAGgFIAAgs");
	this.shape_185.setTransform(123,57.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAFAFIBLAAIAFgFIAAgs");
	this.shape_186.setTransform(107.8,57.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLhoIjCAAQgLAAgIAIQgIAHAAAMIAACWQAAALAIAIQAIAIALAAIEpAAIAAAFICNAA");
	this.shape_187.setTransform(105.8,34.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAgggIg7AAQgBAAgCABQgBACAAABIAAA4QAAACABABQACACABAAIA7AA");
	this.shape_188.setTransform(117,41);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAqIAXAAIAAhTIgXAA");
	this.shape_189.setTransform(83.6,34.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAAIAIAAQABAAABAAQABAAABAAIAPAA");
	this.shape_190.setTransform(86.2,38.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADgAeIm/AAIAAguIAbAAIAEgCIACgFIAAgGIEFAA");
	this.shape_191.setTransform(106.7,41.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABDAoIACgPIAAgsQAAgJgFgLIh5AAQgCABgCAAIgHAA");
	this.shape_192.setTransform(91.7,34.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADFAAImJAA");
	this.shape_193.setTransform(107.5,29.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjFgUIAAgGIGLAAIAAA1");
	this.shape_194.setTransform(107.6,31.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ak4AYIgjAAIAAgvIK3AA");
	this.shape_195.setTransform(119.2,27.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhMAEQAJAAADgHICBAAQADAHAJAA");
	this.shape_196.setTransform(125.8,24.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AirAmIBoAAIAAgFIDvAAIAAhG");
	this.shape_197.setTransform(121.8,20.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgGgFIhKAAIgFAFIAAAs");
	this.shape_198.setTransform(123,11.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgFgFIhLAAIgFAFIAAAs");
	this.shape_199.setTransform(107.8,11.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AizinIAAgWIKWAAIAAAWgAniC+IAAllIEvAA");
	this.shape_200.setTransform(91.6,33.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEAAIgHAA");
	this.shape_201.setTransform(165.7,40.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAHAA");
	this.shape_202.setTransform(165.7,28.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAIiLAA");
	this.shape_203.setTransform(172.3,41.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgFIAAAK");
	this.shape_204.setTransform(165.3,39.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgb");
	this.shape_205.setTransform(165.3,26.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_206.setTransform(165.3,28.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_207.setTransform(165.3,40.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgNIAAAb");
	this.shape_208.setTransform(165.3,42.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_209.setTransform(166.9,24.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_210.setTransform(165.3,41.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgEIAAAEIAAAF");
	this.shape_211.setTransform(165.2,41.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_212.setTransform(179.3,41.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgb");
	this.shape_213.setTransform(179.3,42.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_214.setTransform(164.4,39.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAGIAAgL");
	this.shape_215.setTransform(164.4,41.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_216.setTransform(165.3,27.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgFIAAAL");
	this.shape_217.setTransform(164.4,27.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_218.setTransform(179.3,27.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAADIAAAF");
	this.shape_219.setTransform(165.2,27.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgXIgKAKIgDANIADAOIAMALIAMADIANgDIALgLIAEgOIgEgNIgJgKIgPgEg");
	this.shape_220.setTransform(172.4,34.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_221.setTransform(107.8,59.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_222.setTransform(107.8,9.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_223.setTransform(131.2,34.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_224.setTransform(130.8,34.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_225.setTransform(133.3,48.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAdIAAg5");
	this.shape_226.setTransform(120.2,40.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAbAAIg1AA");
	this.shape_227.setTransform(135.9,44.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIABAB");
	this.shape_228.setTransform(133,43.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAdIAAg5");
	this.shape_229.setTransform(132.9,40.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAjIAAhF");
	this.shape_230.setTransform(120.2,40.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgBAA");
	this.shape_231.setTransform(134.3,37.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_232.setTransform(140.1,37.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_233.setTransform(139.9,37.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_234.setTransform(138.2,37.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_235.setTransform(138,37.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_236.setTransform(136.3,37.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_237.setTransform(136.2,37.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_238.setTransform(134.5,37.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_239.setTransform(134.2,37.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_240.setTransform(142.4,37.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_241.setTransform(142,37.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_242.setTransform(141.8,37.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgBAA");
	this.shape_243.setTransform(133,44.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA/AAIh+AA");
	this.shape_244.setTransform(126.6,44.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIAAIgPAA");
	this.shape_245.setTransform(131.2,35.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqAAIBVAA");
	this.shape_246.setTransform(123,59.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAAIhVAA");
	this.shape_247.setTransform(123,9.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_248.setTransform(129.1,53.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_249.setTransform(129.1,15.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgF");
	this.shape_250.setTransform(97.4,24.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_251.setTransform(97.4,29.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAH");
	this.shape_252.setTransform(89.6,29.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_253.setTransform(89.6,24.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_254.setTransform(89.6,44.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_255.setTransform(97.4,44.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgLIAAAX");
	this.shape_256.setTransform(120.1,35.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgdIAAA7");
	this.shape_257.setTransform(89.2,41.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAYIAAgv");
	this.shape_258.setTransform(84.6,41.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_259.setTransform(120.1,37.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAOgFIgOADIgNAH");
	this.shape_260.setTransform(161.7,43.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_261.setTransform(158.4,44.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_262.setTransform(182.3,42);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_263.setTransform(182.3,27);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_264.setTransform(164.2,37.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_265.setTransform(164.2,39.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAALIAAgV");
	this.shape_266.setTransform(164.2,42);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxAAIhhAA");
	this.shape_267.setTransform(124.1,45.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_268.setTransform(120.3,34.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANAAIgZAA");
	this.shape_269.setTransform(140.4,44.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAIiLAA");
	this.shape_270.setTransform(148.7,44.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAAIgJAA");
	this.shape_271.setTransform(156.2,44.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgNAA");
	this.shape_272.setTransform(138.3,44.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgVIAAAr");
	this.shape_273.setTransform(127.3,32.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAQACAAABAA");
	this.shape_274.setTransform(167.3,41.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape_275.setTransform(127.3,34.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_276.setTransform(132.1,35.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOABIACAAIAAAAIADAAIAAgBIACAAIABAAIADAAIAAAAIAKAAIABAAIACAAIAAAAIACAAIABABIACAA");
	this.shape_277.setTransform(124.9,24.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAwIARgEIAQgKIAKgQIAEgSIgEgRIgKgQIgQgKIgRgE");
	this.shape_278.setTransform(175.6,34.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAXgvQgTABgMANQgOAOAAATQAAAUAOANQAMAPATAA");
	this.shape_279.setTransform(169.6,34.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGAAIANAA");
	this.shape_280.setTransform(172.6,29.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWAwQATAAANgPQANgNAAgUQAAgTgNgOQgNgNgTgB");
	this.shape_281.setTransform(175.6,34.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgNAA");
	this.shape_282.setTransform(172.6,39.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAGIAAgL");
	this.shape_283.setTransform(127.2,30.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAEIgEgFIgFgC");
	this.shape_284.setTransform(88.7,29.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgNAA");
	this.shape_285.setTransform(126.6,32.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAAIgBAA");
	this.shape_286.setTransform(165,38.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCACIAFgD");
	this.shape_287.setTransform(168.1,27.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_288.setTransform(179.3,40.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_289.setTransform(179,41.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_290.setTransform(167.4,41.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAQABAAACAB");
	this.shape_291.setTransform(167,41);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA5AAIhxAA");
	this.shape_292.setTransform(173.3,41.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgDQAMAGANAA");
	this.shape_293.setTransform(161.2,28.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgLgH");
	this.shape_294.setTransform(159.2,27.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgwAAIBhAA");
	this.shape_295.setTransform(171.9,40.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEgBIAJAD");
	this.shape_296.setTransform(158.1,27.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASALIgjgV");
	this.shape_297.setTransform(155.8,25.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAmIAAhL");
	this.shape_298.setTransform(104.6,20.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgiIAABG");
	this.shape_299.setTransform(129.2,20.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAARIAAgh");
	this.shape_300.setTransform(129.2,50.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAglIAABL");
	this.shape_301.setTransform(104.6,48.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_302.setTransform(53.7,52.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhGAAICNAA");
	this.shape_303.setTransform(61.1,52.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDAAIAGAA");
	this.shape_304.setTransform(68.6,52.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxAAIBkAA");
	this.shape_305.setTransform(48.3,52.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAArIAAhV");
	this.shape_306.setTransform(86.2,34.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAOIAAgc");
	this.shape_307.setTransform(56.6,47.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgcAAIgDAA");
	this.shape_308.setTransform(55,48.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQgEIgYAAQgHAAAAAJ");
	this.shape_309.setTransform(55,46.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAABIAAgB");
	this.shape_310.setTransform(57.2,47.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#3C456A").s().p("AA9D7IgFgFIAAgtIhBAAIAAAtIgFAFIhKAAIgGgFIAAgsIksAAIAAgXIkvAAIAAllIEvAAIAAgWIEsAAIAAgtIAGgGIBLAAIAEAGIAAAtIBBAAIAAgtIAGgFIBKAAIAFAFIAAAtIB/AAIAAAWIgJAAIAABHIhFAAIADACQABAJAKgBIDNAAIAvAbQAVAOAPAAIAHAAIAAgHIALAAIADgCIAAggIAZAAIAAgDIBrAAIAAADIAcAAIAAANIATAAIAAAVIAGAAIAAB+IgGAAIAAAZIgTAAIAAAJIifAAIAAgJIgCgBIgMAAIgQADIgMAIIjjAAIAAAKIAOAAIAABHIAKAAIAAAXIiAAAIAAArIgEAGg");
	this.shape_311.setTransform(113,34.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#3C456A").ss(0.5,1,1).p("AxjqMMAjHAAAIAAUZMgjHAAAg");
	this.shape_312.setTransform(138.1,69.9);

	this.instance_12 = new lib.box_ltCorner("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(154.9,56.5,1,1,0,0,0,129.2,51.9);
	this.instance_12.alpha = 0.32;

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#3C456A").ss(3,1,1).p("APQAAI+fAA");
	this.shape_313.setTransform(137.1,68.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AAOCoIgagnIAAAnIgVAAIAAhHIAVAAIAaAnIAAgnIAVAAIAABHgABJB7IgDgPIAAgLIAUAAIAAALIgDAPgAAwB7IgDgPIAAgLIATAAIAAALIgDAPgAg7B7IgDgPIAAgLIATAAIAAALIgDAPgAhVB7IgDgPIAAgLIAUAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_314.setTransform(217.6,41.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgbCoIAAhHIAkAAQAMAAAGAFQAGAGAAALQAAAKgHAHQgGAGgOAAIgLAAIAAAagAgFB/IAFAAQAGAAADgCQACgCAAgEQAAgDgCgCQgCgDgHAAIgFAAgABEB7IgDgPIAAgLIATAAIAAALIgDAPgAAqB7IgDgPIAAgLIAUAAIAAALIgDAPgAg1B7IgDgPIAAgLIATAAIAAALIgDAPgAhPB7IgDgPIAAgLIAUAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_315.setTransform(213.2,108.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AkNCOIAAgSIADAAQAEAAABgCQACgBAAgEIAAhHIAbAAIAABMQAAAGgCAEQgCAEgDACQgEADgFABIgKABgANCB3IAAgXIAKAAQAFAAADgCQADgCAAgGIAAgmQAAgFgDgDQgDgCgFAAIgKAAIAAgXIASAAQAHAAAFACQAGABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgGABQgFACgHAAgAL8B3IgOgBQgHgBgEgEIgFgEIgEgGIgCgIIgBgKIAAgHQAAgHADgJQACgHAEgDQAEgEAHgBQAFgCAIAAIATAAQALAAAHACQAIABAFADQAFAEACAGQACAGAAAJIAAAMIhBAAIAAAEQAAADABACIADADQAEACAJAAIAIAAIAIgBIAFgBQACgCAAgEIAZAAIAAADQAAAHgDAEQgCAEgFADQgFACgGABIgOABgAMZBIIgBgFIgDgDIgGgCIgJAAQgOAAgDACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAFIAnAAIAAAAgAKiB3IgMgBQgFgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgEADQgEADgFACQgGACgIAAgAIoB3IgLgBIgIgDQgEgCgCgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAEAEIAAgGQAAgGgCgCQgDgCgIAAIgPAAIgIABQgDABAAAEIgaAAQAAgHACgFQACgEAEgDQADgCAHgBIAOgBIAgAAQAGAAAGACQAFACAEADQADADACAFQACAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAIqBZQgCACAAAFQAAADADACQADABAIAAIAHAAQAKAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgLAAIgMAAQgIAAgDACgAHaB3IgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgCAEQgCAF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BVIgEAFIgFAEIgIACgAIngmIgQgBQgHgCgFgDQgFgDgCgGQgDgFAAgJIAAgIIABgKQABgEADgDQACgCAEgBQAFgCAGAAIAAAAIgGgEIgDgFQgBgDAAgJQAAgIABgEQABgFAEgCQAEgDAHgBIATgBIAYAAIAWABQAIACAEACQAEADACAGQACAFAAAKIAAAFIgbAAIAAgFQAAgEgDgCQgEgCgHAAIgWAAQgGAAgCABQgDACAAADIABAFQACACAEACIAzAaIAAgOIAZAAIAAAPIgBALIASAKIgJATIgSgJQgCADgEACIgIADIgJACgAIfhUQgCADAAAIIABAGQABADACACQACABAJABIAtAAIAAgBIgvgYIgFgBQgEAAgCACgAArgmIgQgBQgGgCgEgCQgEgDgCgEQgCgFAAgHIAcAAQAAAEADABQADACALAAIAJAAQAKAAADgBQADgBAAgDQAAgEgCgBQgDgBgGAAIgaAAIgPgBQgHgCgDgCQgEgDgCgFQgBgFAAgHQAAgHACgEQADgEAEgCQAEgCAHgBIANgBIASAAIAWABQAIABAEADQAFACABAEQACAEAAAHIgbAAQgBgDgDgBIgQgBIgPABQgDABAAADQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAOABIASAAQAMAAAHABQAHACAEAEQADACABAFIABAJQAAAHgCAFQgCAEgEADQgEADgHABIgTABgAg6gmIgNgBQgHgBgFgEIgEgEIgEgGIgDgIIAAgKIAAgHQAAgHACgJQACgHAFgDQAEgEAGgBQAGgCAIAAIASAAQAMAAAHACQAIABAEADQAFAEACAGQADAGAAAJIAAAMIhCAAIAAAEQAAADACACIADADQADACAJAAIAIAAIAJgBIAEgBQADgCAAgEIAZAAIAAADQAAAHgDAEQgDAEgFADIgLADIgOABgAgchVIgBgFIgDgDIgGgCIgKAAQgOAAgCACQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABIgBAFIAoAAIAAAAgAkogmIgMgBQgFgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgEADQgEADgFACQgGACgIAAgAm3gmIgSgBQgIgCgEgDQgFgDgCgFQgDgFAAgIIAAgHIAgAAIAAAGIADADQACACAIAAIAmAAQAGAAADgBIADgDIABgEIgBgGIgFgCIgOgBIgXgBIgcgBIgJgCQgEgBgDgCQgDgBgBgDIgDgFQgBgFAAgKIAAgNQACgGADgEIAFgEIAIgDIAJgCIA5gBQAJAAAMACIAHADIAFAEQAEADABAGQABAFAAAHIAAADIgfAAQAAgGgCgCIgFgBIgIgBIgjAAQgFAAgDACQgDACAAAEIABAFQABACAEABQAFABAaAAIAdABIALABIAIADIAFAEIAEAGIACAHIAAAKQAAAMgCAFIgDAFIgFAEIgGADIgJACIgZABgAsTgmIgLgBIgJgDQgDgCgCgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAHABAEAEIAAgGQAAgGgDgCQgCgCgIAAIgQAAIgIABQgCABAAAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAPgBIAfAAQAHAAAFACQAGACADADQAEADACAFQABAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAsRhEQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgKAAIgMAAQgIAAgDACgAt9gmQgLAAgIgCQgHgCgFgEQgEgDgDgHQgCgGAAgJIAAgMIAfAAIAAAJQAAAGADACQADADAHAAIAMAAQAJAAADgCQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIABgGIAAhDIAfAAIAABGIgBAJIgCAIIgEAFIgEAFQgGADgIACIgTABgALcgnIAAhmIBUAAQAIAAALADIAGADIAFAEQAEAFACAGQABAGAAAIIAAAJQAAAGgBAFQgCAGgDAFQgDAFgGACQgIADgFAAIg+AAIAAAagAL7haIAwAAQAFAAADgDQACgDAAgFIAAgEQAAgFgDgDQgDgCgHAAIgtAAgAF4gnIg6hKIgBAAIAABKIgfAAIAAhmIAwAAIA7BKIAAAAIAAhKIAfAAIAABmgAiKgnIAAhmIAbAAIAABmgApsgnIgOgnIAAAAIgOAnIgjAAIgchIIAdAAIARA0IAAAAIATg0IAYAAIATA0IARg0IAdAAIgbBIgAORhVIAAg4IAVAAIAAA4gANuhVIAAg4IAVAAIAAA4gADshVIAAg4IAVAAIAAA4gADJhVIAAg4IAVAAIAAA4g");
	this.shape_316.setTransform(133.2,155.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgGgFIhJAAIgGAFIAAAs");
	this.shape_317.setTransform(110.3,78.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABixIAACQQgBATAAAOQAAAMABAUIAACT");
	this.shape_318.setTransform(71.3,100.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACzIAAiRQABgPAAgQQAAgPgBgUIAAiR");
	this.shape_319.setTransform(55.9,100.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABNgEQgJABgCAHIiDAAQgCgHgJgB");
	this.shape_320.setTransform(128.2,110.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEUgkIgDADIgBAIIAAACIoCAAIAAANIghAAIAAAuIAwAA");
	this.shape_321.setTransform(114.4,106.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgIgCIgDgCIADgBIAIgC");
	this.shape_322.setTransform(165.4,107.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEgJIAAAJIACACIABABIABABIAAABIABAAIAFAF");
	this.shape_323.setTransform(166.7,107.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAQIgFgFIgBgBIAAgBIgBgBIgBgBIgCgCIAAgIIACgDIABgBIABgBIAAgBIABgBIAFgF");
	this.shape_324.setTransform(166.7,108.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgFIgFAFIgBAAIAAABIgBABIgBABIAAAAIgCAD");
	this.shape_325.setTransform(166.7,109.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJguIAIACIAFADIAFAHIABAHIAABK");
	this.shape_326.setTransform(166.2,107.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABSAWIijAAIAAgr");
	this.shape_327.setTransform(175.4,114.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACtAIIgBgCIgBgCQAAgCgCgCIAAAAIgBgBQgCgCgCgBIgBgBIgBgBIgBAAIAAAAIgEgBIgEgBIlFAA");
	this.shape_328.setTransform(149.9,111.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhxhZIApApICmAAIAIABIAGAEIAFAHIABAHIAAB3");
	this.shape_329.setTransform(156,107.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgIgCIgDgCIADgBIAIgC");
	this.shape_330.setTransform(165.4,109.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEABIADgCIABgBIAAABIAGAE");
	this.shape_331.setTransform(166.7,106.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAJASIgOgEIgCgBIgBgBIAAgd");
	this.shape_332.setTransform(165.1,104.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjegPIG3AAQABAAADACIACAFIAAAY");
	this.shape_333.setTransform(111.7,97.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHgRQgFAAgEAEQgEADAAAGIAAAJQAAAFAEAEQAEAEAFAA");
	this.shape_334.setTransform(135.4,100.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhJgTIBrAAIAoAn");
	this.shape_335.setTransform(141.5,101);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEbiOIAABGIjxAAIAAAGIkpAAQgLAAgIAIQgIAIAAALIAACWQAAALAIAIQAIAIALAAIEpAAIAAAFICPAA");
	this.shape_336.setTransform(113.2,97.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABXADQgEgFgIAAIihAA");
	this.shape_337.setTransform(98.7,95.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AkEAYIgaAAIAAgvII9AA");
	this.shape_338.setTransform(115.5,93.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABCAoQADgHAAgIIAAgsQAAgLgFgJIh5AAQgCABgCAAIgHAA");
	this.shape_339.setTransform(94.1,100.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAAIAHAAQABAAABAAQABAAABABIAQAA");
	this.shape_340.setTransform(88.6,104.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcAAIg3AA");
	this.shape_341.setTransform(131.1,98.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhTgDQAYAKAZACIBjAAIASgR");
	this.shape_342.setTransform(138.1,101.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADOAAImaAA");
	this.shape_343.setTransform(112.1,110.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgwgiIBhAAIAABF");
	this.shape_344.setTransform(136.6,115);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAAsIAGAFIBJAAIAGgFIAAgs");
	this.shape_345.setTransform(110.3,123.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgBIgDAD");
	this.shape_346.setTransform(167,111);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAAIACAA");
	this.shape_347.setTransform(122.7,100.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA7AAIh1AA");
	this.shape_348.setTransform(128.8,100.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFgDQADAHAIAA");
	this.shape_349.setTransform(135.4,90.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgDIABgC");
	this.shape_350.setTransform(167.1,89.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_351.setTransform(167.2,86.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_352.setTransform(167.2,84.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAACIABgD");
	this.shape_353.setTransform(167,89.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADADIgCgEIgDgB");
	this.shape_354.setTransform(89.7,96);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZAAIAzAA");
	this.shape_355.setTransform(119.7,97);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhRAAICjAA");
	this.shape_356.setTransform(108.9,97);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_357.setTransform(183.8,84.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAAIihAA");
	this.shape_358.setTransform(175.5,84.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAihIAAFD");
	this.shape_359.setTransform(184.1,100.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBACIADgD");
	this.shape_360.setTransform(166.5,90.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhBAAICDAA");
	this.shape_361.setTransform(128.2,90.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAMAAIgXAA");
	this.shape_362.setTransform(133.5,100.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAKIAHgCIAGgEIAEgFIACgI");
	this.shape_363.setTransform(166.4,89.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDABIADgBIAEAA");
	this.shape_364.setTransform(165.6,90.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAWIAAgr");
	this.shape_365.setTransform(167.4,86.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhpAAIDTAA");
	this.shape_366.setTransform(154.8,90.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKAAIAVAA");
	this.shape_367.setTransform(86,104.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AALAAIgVAA");
	this.shape_368.setTransform(86,96.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgpIAABT");
	this.shape_369.setTransform(87.2,100.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAPIAAgd");
	this.shape_370.setTransform(59,88);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQgDIgYAAQgHgBAAAJ");
	this.shape_371.setTransform(57.4,112.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#3C456A").s().p("ABED7IgGgGIAAgsIhAAAIAAAsIgGAGIhKAAIgGgFIAAgsIksAAIAAgXIkvAAIAAllIEvAAIAAgWIEsAAIAAgtIAGgFIBKAAIAFAFIAAAtIBBAAIAAgtIAGgFIBKAAIAGAFIAAAtIB+AAIAAAWIgIAAIAABHIhFAAIACADQADAHALAAIEjAAQATgBgBgTIAAgsICqAAIAAFDIipAAIAAgwQgCgQgTAAIknAAIgFAEIgDAEIgBACIBEAAIAABGIAJAAIAAAXIh/AAIAAAsIgGAGg");
	this.shape_372.setTransform(114.9,100.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHgRQgGAAgDAEQgEAEAAAFIAAAJQAAAFAEAEQADAEAGAA");
	this.shape_373.setTransform(135.4,34.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhmgTIClAAIAoAo");
	this.shape_374.setTransform(138.7,34.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhxgzIApApICmAAIAIABIAGAFIAFAFIABAIIAAAr");
	this.shape_375.setTransform(156,37.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAArIAGAGIBJAAIAGgGIAAgr");
	this.shape_376.setTransform(110.3,56.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AClgEIgPACIgNAHIktAA");
	this.shape_377.setTransform(149.2,43.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEOBdICiAAIAAiuIi4AAIgPgCIgOgIIqKAA");
	this.shape_378.setTransform(138.4,33.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABHAAIiNAA");
	this.shape_379.setTransform(174.5,42.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAgIAEgEIAAgqIgBgCQAAgDgBgBIgBgCIgBgBIgFgFIgBAAIAAgBIgBAAIgEgCIgEAA");
	this.shape_380.setTransform(166.2,39.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAOIgGgFIAAgCIgBgBIgDgDIAAgIIAHgI");
	this.shape_381.setTransform(166.7,38.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAJIgGgGIAAgBIgBgBIgDgCIAAgH");
	this.shape_382.setTransform(166.7,37.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgIgCIgDgCIADgBIAIgC");
	this.shape_383.setTransform(165.4,37.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAQIgGgGIAAgBIgBgBIgDgDIAAgJIAKgL");
	this.shape_384.setTransform(166.7,40.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgIgCIgDgCIADgBIAIgC");
	this.shape_385.setTransform(165.4,39.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEIgLgDIAAgBIAAAAIALgD");
	this.shape_386.setTransform(165.4,41.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgEAKIAAgJIAKgK");
	this.shape_387.setTransform(166.7,41.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCABIAFgB");
	this.shape_388.setTransform(165.8,42.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEUgkQgEAEAAAGIAAADIoCAAIAAANIghAAIAAAvIHKAA");
	this.shape_389.setTransform(114.4,40.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAZAlQACAAABgDIAAhDQgBgEgCABIg0AA");
	this.shape_390.setTransform(119.8,34.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA9AAIh5AA");
	this.shape_391.setTransform(128.6,34.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABaADQgEgFgIAAIihAAQgEgBgCAG");
	this.shape_392.setTransform(98.4,28.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNAAIAHAAQABAAABAAQABAAABABIAQAA");
	this.shape_393.setTransform(88.6,38.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgKAqIAVAAIAAhTIgVAA");
	this.shape_394.setTransform(86,34.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgCIADACIACAE");
	this.shape_395.setTransform(89.7,29.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABMAYIiWAAIAAgvIBrAA");
	this.shape_396.setTransform(94.4,26.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADqhrIiPAAIAAAFIkpAAQgLAAgIAIQgIAIAAALIAACWQAAALAIAJQAIAHALAAIEpAAIAAAGICPAA");
	this.shape_397.setTransform(108.3,34.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABCAoQADgFAAgJIAAgtQAAgKgFgKIh5AAQgCACgCAAIgHAA");
	this.shape_398.setTransform(94.1,33.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AlLgKIAAAVIKXAAIAAgVIlhAA");
	this.shape_399.setTransform(109.2,53.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgwgjIBhAAIAABG");
	this.shape_400.setTransform(136.6,48.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhTgDQAYALAZABIBjAAIASgR");
	this.shape_401.setTransform(138.1,35);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiEgPIEDAAQADAAABACQACABAAAEIAAAY");
	this.shape_402.setTransform(120.7,30.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhMAEQAJAAACgIICDAAQACAIAJAA");
	this.shape_403.setTransform(128.2,23.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AizinIAAgWIKWAAIAAAWgACCC+IpkAAIAAllIEvAA");
	this.shape_404.setTransform(94.1,33);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAxgjIAABHIhhAA");
	this.shape_405.setTransform(136.6,19.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgGgFIhJAAIgGAFIAAAs");
	this.shape_406.setTransform(110.3,11.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqAAIBVAA");
	this.shape_407.setTransform(110.3,9.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqAAIBVAA");
	this.shape_408.setTransform(125.4,9.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_409.setTransform(91.9,44.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAEQgDgHgIAA");
	this.shape_410.setTransform(121.1,44.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGgDQgIAAgDAH");
	this.shape_411.setTransform(135.4,44.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_412.setTransform(171.9,42.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABCAAIiDAA");
	this.shape_413.setTransform(128.2,44.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhRAAICjAA");
	this.shape_414.setTransform(108.9,30.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgQAAIAgAA");
	this.shape_415.setTransform(124.3,34.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgjIAABH");
	this.shape_416.setTransform(131.7,19.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAjIAAhG");
	this.shape_417.setTransform(131.7,48.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIADAAIAWAAQADAAADAA");
	this.shape_418.setTransform(57.4,48.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#3C456A").s().p("ABPD7IgFgFIAAgsIhCAAIAAArIgFAGIhKAAIgFgFIAAgsIktAAIAAgXIktAAIAAlkIEugCIAAgXIEtAAIAAgrIAEgFIBLAAIAFAGIAAArIBBAAIAAgtIAFgEIBLAAIAGAFIAAAtIB+AAIAAAXIgIAAIAABGIhEAAQADAIAHADID3AAIAMAGIASAEIC2AAIAACtIiYAAIgWACIgNAIIkLAAQgOAAAAAKIgCABIBFAAIAABHIAJAAIAAAXIh/AAIAAAsIgFAFg");
	this.shape_419.setTransform(113.7,34.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AAuBAIAAgSIACAAQAJAAAEgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIAAgFIgJAAIghhEIAeAAIAUAyIAUgyIAeAAIgpBUIgDAFIgGAFIgHACgAHrAoQgLAAgIgCQgKgDgEgCIgFgFIgDgHIgDgIIgBgKIAAgdIABgKIADgIIADgHIAFgEQAEgDAKgDQAIgCALABIAvAAQAJgBAMADIAHACIAFAFQAEADACAHQABAFAAAIIAAADIgeAAIgBgGQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgDgCgIAAIgiAAIgKABQgEAAgCADQgCACgBAFIgBAKIAAAMIABAKQABAEACACQACADAEABIAKABIAhAAQAHAAAEgCIAEgEQACgCAAgEIAAgCIgoAAIAAgUIBGAAIAAAcIgBAJIgBAIIgEAFIgFAEIgHACIgJABIgWABgADWAoIgOgBQgGgBgFgDIgFgFIgDgFIgDgIIAAgKIAAgHQAAgHACgJQACgGAFgEQAEgDAGgCQAGgBAHgBIATAAQAMABAGABQAJACAEADQAFADACAGQACAGABAKIAAALIhCAAIAAADQAAAEACACIACACQAEACAJAAIAIAAIAIgBIAFgBQACgCABgEIAZAAIAAAEQAAAGgEAEQgCAEgFADIgLADIgOABgAD0gGIgBgFIgEgDIgFgCIgKAAQgOABgCABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAIgBAFIAoAAIAAAAgAgXAoIgMgBQgFgBgEgDQgFgDgDgEQgCgFAAgIIAAgbIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIApAAIAAAUIgpAAIAAAaQAAAEADABQACACAGAAQAGAAACgCQADgCgBgFIAAgEIAXAAIAAAIQAAAGgBAEQgDAEgDAEQgEADgFABQgGACgIAAgAimAoIgTgBQgHgBgEgDQgFgEgDgEQgCgGAAgIIAAgHIAfAAIABAGIADAEQACACAIAAIAmAAQAGgBADgBIADgDIABgEIgBgGIgFgCIgOgBIgXAAIgcAAIgJgDQgEgBgDgCQgDgBgCgCIgCgGQgCgFABgKIAAgNQACgGADgEIAFgEIAIgDIAJgCIA4AAQAKAAAMABIAHADIAFAEQADADABAHQACAEAAAHIAAADIggAAQAAgFgBgCIgFgCIgJgBIgiAAQgFAAgDACQgEACAAAEIABAFQACACAEABQAFABAZAAIAeABIALABIAIADIAFAEIAEAGIACAIIAAAJQgBAMgBAEIgDAFIgFAFIgHACIgIACIgaABgAoCAoIgMgBIgIgCQgDgDgCgEQgCgEAAgGIAAgGQAAgHACgFQADgCAFgDQAHgDAWAAIASABQAHACADADIAAgGQABgGgDgCQgDgCgHAAIgQAAIgIABQgDACABADIgaAAQgBgHACgFQACgEAEgCQADgDAHgBIAOgBIAgAAQAGABAGABQAGACADADQAEADACAFQABAFAAAGIAAAuIgaAAIAAgIQgFAGgEABQgEACgKAAgAoAAKQgDADAAAEQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgEgDgCQgDgCgLABIgMAAQgIAAgCABgApsAoQgMAAgHgCQgHgBgFgFQgEgDgDgHQgCgGAAgIIAAgMIAfAAIAAAIQAAAGACACQADADAIAAIAMAAQAJAAADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgGIAAhBIAgAAIAABEIgBAJIgCAIIgEAFIgEAFQgGADgJACIgSABgACGAnIAAhkIAbAAIAABkgAlcAnIgNgmIAAAAIgOAmIgkAAIgbhHIAdAAIAQAzIABAAIASgzIAZAAIATAzIARgzIAdAAIgcBHgAKAgGIAAg3IAVAAIAAA3gAJdgGIAAg3IAVAAIAAA3gAGOgGIAAg3IAVAAIAAA3gAFrgGIAAg3IAWAAIAAA3g");
	this.shape_420.setTransform(130.4,138.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAMCoIAAgdIgXAAIAAAdIgWAAIAAhHIAWAAIAAAZIAXAAIAAgZIAXAAIAABHgABJB7IgDgPIAAgLIAUAAIAAALIgDAPgAAwB7IgDgPIAAgLIATAAIAAALIgDAPgAg7B7IgDgPIAAgLIATAAIAAALIgDAPgAhVB7IgDgPIAAgLIAUAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_421.setTransform(217.6,41.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgRCmQgGgDgDgGQgDgFgBgIIAVgDIABAHIADADIADABQADAAACgCQABgDAAgHIAAgsIAXAAIAAAnQAAAMgDAHQgCAGgGAFQgHAEgJAAQgLAAgGgDgABBB6IgDgOIAAgMIATAAIAAAMIgDAOgAAnB6IgDgOIAAgMIAUAAIAAAMIgDAOgAgzB6IgDgOIAAgMIAUAAIAAAMIgDAOgAhMB6IgDgOIAAgMIATAAIAAAMIgDAOgAinAdQgHgHgBgKIAVgCQAAAFADADQADAEAGAAQAFAAADgCQACgCAAgDQAAgDgCgCQgDgCgJgCQgOgDgGgFQgHgFAAgJQAAgFAEgFQADgFAGgDQAHgDALAAQAOAAAHAGQAHAFABALIgVABQAAgFgDgCQgDgCgEAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAIADQAOADAHADQAGAEADADQADAFAAAGQAAAHgEAGQgEAFgHADQgHADgKAAQgSAAgHgHgAB0AjIAAhGIA7AAIAAAPIglAAIAAALIAjAAIAAAOIgjAAIAAAOIAmAAIAAAQgAAyAjIAAhGIAWAAIAAA1IAiAAIAAARgAgHAjIAAgeIgcgoIAZAAIANAYIAPgYIAYAAIgcAoIAAAegAhSAjIAAg1IgWAAIAAgRIBDAAIAAARIgXAAIAAA1gAhqhiQgGgDgDgGQgDgFgBgIIAVgDIABAHIADADIADABQAEAAACgCQABgDAAgHIAAgsIAXAAIAAAnQAAAMgDAHQgCAGgGAFQgHAEgKAAQgLAAgGgDgABVhgIgMgtIgNAtIgVAAIgQhIIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBIgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhIIAYAAIAaBIgAgIh8IgHgZIgIAZIAPAAg");
	this.shape_422.setTransform(213.2,108.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhBgiImpAAIAAgwIKyAAIA7AiQANAHAOAAIAcAAQAOAAANgHIAGgEIBpAAIAAAEIAnAAIAAB/IgnAAIAAAEIhxAAQgCAAgCgBQgCgBgCgCQgKgJgHgMIgCgCIAAgEQAAgGgEgEQgEgEgGAAIgeAAQgFAAgFAEIgzAAIAAgaQgBgCAAAAQgCgBgBAAIgvAAQgCAAAAABQgBABAAABIAAAW");
	this.shape_423.setTransform(131.5,33.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgvAYQgNgYANgXQAOgYAbAAIANAAQAbAAAOAYQANAXgNAYQgPAYgaAAIgNAAQgaAAgPgYg");
	this.shape_424.setTransform(170.3,34.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhBBAIBiAAQAhgYAAgoQAAgnghgYIhYAA");
	this.shape_425.setTransform(171.2,34.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABixIAACPQgBAUAAAOQAAAMABAUIAACT");
	this.shape_426.setTransform(66.7,34.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACzIAAiRQABgPAAgQQAAgPgBgVIAAiQ");
	this.shape_427.setTransform(51.4,34.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAFQAAAKAGAAIAZAAQAGgJAAgGQAAgFgGgIIgbAAIgEgB");
	this.shape_428.setTransform(53.2,22);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgcAAQgDABAAgB");
	this.shape_429.setTransform(52.9,48.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjDgUIAAgGIGHAAIAAA1");
	this.shape_430.setTransform(105.3,31.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AEbiOIAABHIjxAAIAAAFIkpAAQgKAAgJAIQgIAHAAAMIAACWQAAALAIAIQAIAIALAAIEpAAIAAAFICKAA");
	this.shape_431.setTransform(108.7,31.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgZAhIgCgCIgBgDIAAg4IABgDIACgBIC+AAQABAAACABQABACAAABIAAA4QAAACgBABQgCACgBAAgAhyggIgyAAQgBAAgCABQgBACAAABIAAA4QAAABABACQABABACABICLAA");
	this.shape_432.setTransform(133.3,40.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgmAuIAAhGIAYAAIAAgVIAxAAQACABAAAAQACACAAAAIAAAS");
	this.shape_433.setTransform(125.7,39.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgogYQAFAAADAEQACABACACQABACAAADIAAAlIBFAA");
	this.shape_434.setTransform(120.1,32.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADaAeIm0AAIAAgwIAkAAIAAgLIEqAA");
	this.shape_435.setTransform(104.8,41.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABDAoIACgPIAAgsQAAgLgFgJIh4AAIgEABIgIAA");
	this.shape_436.setTransform(89.6,34.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgG");
	this.shape_437.setTransform(95.3,29.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAEIAAgG");
	this.shape_438.setTransform(87.4,29.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABpAAIjRAA");
	this.shape_439.setTransform(106.7,31);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgeALIAAgWIA9AA");
	this.shape_440.setTransform(121.2,36);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag2AAIBtAA");
	this.shape_441.setTransform(140.6,44.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglgMIAAAUIBLAAIAAAF");
	this.shape_442.setTransform(131.8,35.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgbAPIATAAIAAgWQAAgDACgCIAEgCIAeAA");
	this.shape_443.setTransform(158.9,43.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgWIAAAtIAZAA");
	this.shape_444.setTransform(160.6,39.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhOgjIAABHICeAAIAAgQ");
	this.shape_445.setTransform(169.9,40.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgzBEIBnAAIAAiHIhMAA");
	this.shape_446.setTransform(183.4,34.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLgIIAAARIiWAA");
	this.shape_447.setTransform(170.6,42);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANBEIAAiHIgZAA");
	this.shape_448.setTransform(179.5,34.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhAACIAAgDICBAAIAAAD");
	this.shape_449.setTransform(170.1,24.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhOAUIAAgnICeAAIAAAQ");
	this.shape_450.setTransform(169.9,27.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABLAJIAAgRIiWAA");
	this.shape_451.setTransform(170.6,27.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAMIAAgX");
	this.shape_452.setTransform(163.1,27.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMAFIAAgJIAZAA");
	this.shape_453.setTransform(160.6,28.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGADIAAgFIAMAA");
	this.shape_454.setTransform(161.3,28.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiziyIAAgWIKWAAIAAAWgAizCzIKWAAIAAAWIqWAAgAl9iyIhlAAIAAFlIEvAAAl9gsIAAiGIDKAA");
	this.shape_455.setTransform(89.5,34.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhLAEQAIAAAEgHICAAAQAEAHAIAA");
	this.shape_456.setTransform(123.7,24.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAAIAJAAIADABIAZAA");
	this.shape_457.setTransform(84.6,39);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIgiIARAAIAABG");
	this.shape_458.setTransform(136.1,49.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAAIALAA");
	this.shape_459.setTransform(162.5,42.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUgTQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIg");
	this.shape_460.setTransform(170.1,34.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYgXQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKg");
	this.shape_461.setTransform(170.1,34.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUgTQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIg");
	this.shape_462.setTransform(170.1,34.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAEQgBgEgEgD");
	this.shape_463.setTransform(117.4,45.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACABQgCgBgBAA");
	this.shape_464.setTransform(116.9,44.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAAIACAA");
	this.shape_465.setTransform(161.8,41.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgsAAIBZAA");
	this.shape_466.setTransform(122.2,45.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgxAAIBjAA");
	this.shape_467.setTransform(151.1,44.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOAAIADAAIAAAAIACAAIABAAIAFAAIAAAAIABAAIABAAIAEAAIAAAAIACAAIABAAIACAAIAAABIADAAIAAAAIAEAA");
	this.shape_468.setTransform(123.3,24.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAAIgKAA");
	this.shape_469.setTransform(124.4,32.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAUIAAgn");
	this.shape_470.setTransform(127.2,50.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#3C456A").s().p("AAXD8IgGgGIAAgtIhBAAIAAAtIgEAGIhNAAIgEgHIAAgsIksAAIAAgXIkvAAIAAliIEvgBIAAgYIEsAAIAAgsIAFgFIBMAAIAEAGIAAAqIBBAAIAAgrIAGgFIBKAAIAEAEIAAAtICAAAIAAAYIgJAAIAABHIhDAAIAEAGIAEAEIDMAAQAKAEAKAGIAaAQIAhANIAAgKIAbAAIAAgeIAQAAIAAgDICBAAIAAAEIANAAIAAARIAEAAIAAALIBlAAIADACIAACGIhoAAIAAANIgEAAIAAASIifAAIAAgfIgfAAQgIAAgBAGIAAAXIjjAAIAAAMIARAAIAABGIAJAAIAAAWIh+AAIAAAtIgFAGg");
	this.shape_471.setTransform(114.9,34.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgvAYQgNgYANgWQAOgZAbAAIAMAAQAcAAAOAZQANAWgNAYQgOAYgcAAIgMAAQgbAAgOgYg");
	this.shape_472.setTransform(169.4,102.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAACzIAAiRQABgPAAgQQAAgPgBgVIAAiQ");
	this.shape_473.setTransform(50.5,102.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAFQAAAKAHgBIAYAAQAGgMAAgCQAAgGgGgIIgfAA");
	this.shape_474.setTransform(52.3,89.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAPIAAgd");
	this.shape_475.setTransform(53.6,89.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgPAAIADAAIAEAAIAYAA");
	this.shape_476.setTransform(52,116.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgG");
	this.shape_477.setTransform(94.4,96.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAADIAAgG");
	this.shape_478.setTransform(86.6,96.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah/giIlrAAIAAgwIKyAAIA8AiQAMAHAOAAIAcAAQAOAAANgHIAGgEIBqAAIAAAEIAnAAIAAB/IgnAAIAAAEIhzAAIgDgBQgCgCgCgBQgJgIgJgNIgBgCIAAgEQAAgGgEgEQgDgEgHAAIgeAAQgFAAgFAEIgzAAIAAgaQAAgCgBAAQgBgBgCAAIgvAAQgCAAgBABQAAABAAABIAAAW");
	this.shape_479.setTransform(130.6,100.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgzCiIBnAAIAAlDIhhAA");
	this.shape_480.setTransform(182.5,102.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhBBAIBiAAQAhgXAAgpQAAgoghgXIhZAA");
	this.shape_481.setTransform(170.3,102.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiHAAIELAAQADAAABAB");
	this.shape_482.setTransform(147.8,112.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADqhrIiPAAIAAAFIkpAAQgLAAgIAIQgIAIAAALIAACWQAAALAIAJQAHAHAMAAIEpAAIAAAGICJAA");
	this.shape_483.setTransform(102.9,102.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgvgDQAFADACAEIBYAA");
	this.shape_484.setTransform(121,112.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABIAhIiKAAQgCAAgBgCQgBgCAAgBIAAg4QAAgBABgCQACgBABAAIAyAA");
	this.shape_485.setTransform(122.7,107.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjASIgRAAIgVAAIAAABIAVgBAgDASIgfAAIAAgk");
	this.shape_486.setTransform(119.9,100.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAcgKIg3AAIAAAW");
	this.shape_487.setTransform(120,103.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AjDgUIAAgGIGHAAIAAA1");
	this.shape_488.setTransform(104.4,99.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABDAoQACgFAAgKIAAgsQAAgKgEgKIh5AAQgDACgBAAIgIAA");
	this.shape_489.setTransform(88.7,102);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACngdIkqAAIAAALIgjAAIAAAw");
	this.shape_490.setTransform(98.8,109);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAAIAHAAQABAAABAAQABAAABABIAaAA");
	this.shape_491.setTransform(83.7,106.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgLAqIAWAAIAAhTIgWAA");
	this.shape_492.setTransform(80.7,102.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhLAFQAIgBADgIICBAAQADAIAJAB");
	this.shape_493.setTransform(122.9,92.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiziyIAAgWIKWAAIAAAWIqWAAIkvAAIAAFlIEvAAIKWAAIAAAWIqWAAIAAgW");
	this.shape_494.setTransform(88.7,102.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AArAZIAAgsIgFgFIhLAAIgFAF");
	this.shape_495.setTransform(120,79.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgqgYIAAArIAFAGIBLAAIAFgGIAAgr");
	this.shape_496.setTransform(120,124.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgsIAAAsIAFAFIAAAo");
	this.shape_497.setTransform(126,115.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgnAZIBKAAIAFgFIAAgs");
	this.shape_498.setTransform(130.3,113.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgIgiIARAAIAABG");
	this.shape_499.setTransform(135.2,116.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgmAuIAAhGIAYAAIAAgVIAxAAIADABIAAACIAAAS");
	this.shape_500.setTransform(124.8,106.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AglgMIAAAUIBLAAIAAAF");
	this.shape_501.setTransform(130.9,103.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhhAfIACACIC+AAQACAAABgCQABgCAAgBIAAg4QAAgBgBgCQgCgBgBAAIi+AAIgCABIgBADIAAA4g");
	this.shape_502.setTransform(139.5,107.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhPgpIAABTICeAA");
	this.shape_503.setTransform(169.4,114.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABRAcIihAAIAAg3");
	this.shape_504.setTransform(169.2,107.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMgWIAAAtIAZAA");
	this.shape_505.setTransform(159.8,106.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgyIAABl");
	this.shape_506.setTransform(177.3,113.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_507.setTransform(176.2,109.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMhDIAZAAIAACHIgZAA");
	this.shape_508.setTransform(178.7,102.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgfIADAAIAAA/IgDAA");
	this.shape_509.setTransform(177.5,114.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBAhIADAAIAAhBIgDAA");
	this.shape_510.setTransform(177.5,89.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgIIAAAR");
	this.shape_511.setTransform(176.2,95);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAMIAAgX");
	this.shape_512.setTransform(162.2,95.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhQAMIAAgXIChAA");
	this.shape_513.setTransform(169.2,95.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGADIAAgFIANAA");
	this.shape_514.setTransform(160.4,96.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgMAFIAAgJIAZAA");
	this.shape_515.setTransform(159.8,96);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABPgpIieAAIAABT");
	this.shape_516.setTransform(169.4,89.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAIiLAA");
	this.shape_517.setTransform(169.2,95.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABGAAIiLAA");
	this.shape_518.setTransform(169.2,109.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgIIAAAR");
	this.shape_519.setTransform(177.3,95);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAcIAAg4");
	this.shape_520.setTransform(121,107.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWgWQAKgJAMAAQAOAAAJAJQAKAKAAAMQAAANgKAKQgJAJgOAAQgMAAgKgJQgKgKAAgNQAAgMAKgKg");
	this.shape_521.setTransform(169.2,113.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCQADAAAAACQABACgDABQgCAAgBgDQAAgCACAAg");
	this.shape_522.setTransform(169.2,113.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgCQADgBAAADQABACgDABQgCAAgBgDQAAgCACAAg");
	this.shape_523.setTransform(169.2,90.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgWgWQAKgKAMAAQAOAAAJAKQAKAJAAANQAAANgKAKQgJAKgOAAQgMAAgKgKQgKgKAAgNQAAgNAKgJg");
	this.shape_524.setTransform(169.2,90.7);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTgTQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgLQAAgLAIgIg");
	this.shape_525.setTransform(169.2,102.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAYgXQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKg");
	this.shape_526.setTransform(169.2,102.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgTgTQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgLQAAgLAIgIg");
	this.shape_527.setTransform(169.2,102.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACABQgCgBgBAA");
	this.shape_528.setTransform(116.1,112.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgOIAAAd");
	this.shape_529.setTransform(160.8,110.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_530.setTransform(177.6,86.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA6AAIhzAA");
	this.shape_531.setTransform(87.9,112.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAguIAABd");
	this.shape_532.setTransform(177.9,113.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAguIAABd");
	this.shape_533.setTransform(177.9,90.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOAAIAdAA");
	this.shape_534.setTransform(124.3,112.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiRAAIEjAA");
	this.shape_535.setTransform(108.3,112.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgNABIACAAIABAAIACAAIABgBIACAAIAAAAIADAAIAAAAIAEAAIAAAAIACAAIAAAAIAFAAIAAAAIADAAIAAAAIACAA");
	this.shape_536.setTransform(121.8,92.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAGQAAgEgEgEQgDgDgFAA");
	this.shape_537.setTransform(115.7,97.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAQAAIgfAA");
	this.shape_538.setTransform(119.4,97.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgdAA");
	this.shape_539.setTransform(122.5,97.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABOAAIibAA");
	this.shape_540.setTransform(103.2,98.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgiIAABF");
	this.shape_541.setTransform(126.3,88);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#3C456A").s().p("AAWD7IgFgHIAAgqIhBAAIAAAqIgGAHIhKAAIgFgDIAAgvIktAAIAAgWIkuAAIAAlkIEuABIAAgXIEtAAIAAgsIAFgIIBKAAIAGAIIAAArIBBAAIAAgsIAFgGIBMAAIAFAGIAAAtIB+AAIAAAWIgJAAIAABHIhEAAIAHAJIDNAAIBKAoIAGABIAAgMIAaAAIAAgLIADAAIAAhWICcAAIAFAEIBnAAIAAFDIhlAAIgHAEIicAAIAAhDIkNAAIAAAIIARAAIAABJIAIAAIAAAWIiAAAIAAAsIgEAFg");
	this.shape_542.setTransform(114,102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},10).to({state:[]},93).to({state:[{t:this.shape_313},{t:this.instance_12},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310,p:{x:57.2,y:47.3}},{t:this.shape_309,p:{x:55,y:46.2}},{t:this.shape_308},{t:this.shape_307,p:{x:56.6,y:47.2}},{t:this.shape_306,p:{x:86.2,y:34.5}},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301,p:{x:104.6,y:48.5}},{t:this.shape_300,p:{x:129.2,y:50.6}},{t:this.shape_299},{t:this.shape_298,p:{x:104.6,y:20.4}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288,p:{x:179.3,y:40.9}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284,p:{x:88.7,y:29.8}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:127.3,y:32.9}},{t:this.shape_272},{t:this.shape_271,p:{x:156.2,y:44.3}},{t:this.shape_270,p:{x:148.7,y:44.3}},{t:this.shape_269,p:{x:140.4,y:44.3}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:84.6,y:41.9}},{t:this.shape_257,p:{x:89.2,y:41.2}},{t:this.shape_256,p:{x:120.1,y:35.7}},{t:this.shape_255},{t:this.shape_254,p:{x:89.6,y:44.5}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251,p:{x:97.4,y:29.8}},{t:this.shape_250},{t:this.shape_249,p:{x:129.1,y:15.5}},{t:this.shape_248,p:{x:129.1,y:53.5}},{t:this.shape_247,p:{x:123,y:9.9}},{t:this.shape_246,p:{x:123,y:59.1}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:120.2,y:40.7}},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227,p:{x:135.9,y:44.3}},{t:this.shape_226},{t:this.shape_225,p:{x:133.3,y:48.7}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:107.8,y:9.9}},{t:this.shape_221,p:{x:107.8,y:59.1}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217,p:{x:164.4}},{t:this.shape_216,p:{x:165.3,y:27.4}},{t:this.shape_215,p:{x:164.4,y:41.6}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{x:179.3,y:41.1}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209,p:{x:166.9,y:24.5}},{t:this.shape_208},{t:this.shape_207,p:{x:165.3,y:40.5}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203,p:{x:172.3,y:41.4}},{t:this.shape_202,p:{x:165.7,y:28.7}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:107.8,y:11.9}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183,p:{x:133.3,y:46.7}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:164.4,y:37.4}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:166.8,y:24.5}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:53.5,y:34.5}},{t:this.shape_155,p:{x:68.8,y:34.5}},{t:this.shape_154,p:{x:56.6,y:21.8}},{t:this.shape_153,p:{x:55.3,y:21.7}},{t:this.shape_152},{t:this.shape_151,p:{x:81.2,y:100.9}},{t:this.shape_150,p:{x:99.5,y:115}},{t:this.shape_149,p:{x:124.2,y:117}},{t:this.shape_148,p:{x:124.2,y:86.6}},{t:this.shape_147,p:{x:99.5,y:86.9}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{x:121.6,y:99}},{t:this.shape_143,p:{x:83.7,y:96.3}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:167.6,y:96.2}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:113.7,y:90.7}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:177.2,y:93.4}},{t:this.shape_131},{t:this.shape_130,p:{x:79.5,y:108.3}},{t:this.shape_129,p:{x:84.2,y:107.7}},{t:this.shape_128,p:{x:115.1,y:102.1}},{t:this.shape_127,p:{x:92.4,y:110.9}},{t:this.shape_126,p:{x:84.5,y:110.9}},{t:this.shape_125,p:{x:84.5,y:90.9}},{t:this.shape_124},{t:this.shape_123,p:{x:92.4,y:96.3}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:124.1,y:119.9}},{t:this.shape_119,p:{x:117.9,y:76.3}},{t:this.shape_118,p:{x:117.9,y:125.5}},{t:this.shape_117,p:{x:136.8,y:103.9}},{t:this.shape_116,p:{x:137,y:103.9}},{t:this.shape_115,p:{x:137.3,y:103.9}},{t:this.shape_114,p:{x:127.9,y:107.2}},{t:this.shape_113,p:{x:129.2,y:103.9}},{t:this.shape_112,p:{x:129.4,y:103.9}},{t:this.shape_111,p:{x:131.1,y:103.9}},{t:this.shape_110,p:{x:131.3,y:103.9}},{t:this.shape_109,p:{x:133,y:103.9}},{t:this.shape_108,p:{x:133.2,y:103.9}},{t:this.shape_107,p:{x:134.9,y:103.9}},{t:this.shape_106,p:{x:135.1,y:103.9}},{t:this.shape_105,p:{x:127.9,y:110.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:128.3,y:115.1}},{t:this.shape_101,p:{x:125.7,y:101.1}},{t:this.shape_100,p:{x:126.2,y:101.1}},{t:this.shape_99,p:{x:102.8,y:76.3}},{t:this.shape_98,p:{x:102.8,y:125.5}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:175,y:107.5}},{t:this.shape_88,p:{x:175,y:94.3}},{t:this.shape_87,p:{x:174.4,y:107.5}},{t:this.shape_86},{t:this.shape_85,p:{x:160.2,y:94.8}},{t:this.shape_84,p:{x:129.1,y:86.6}},{t:this.shape_83,p:{x:102.8,y:78.3}},{t:this.shape_82,p:{x:117.9,y:78.3}},{t:this.shape_81,p:{x:86.6,y:100.9}},{t:this.shape_80,p:{x:102.8,y:123.5}},{t:this.shape_79,p:{x:117.9,y:123.5}},{t:this.shape_78},{t:this.shape_77,p:{x:128.3,y:113.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:175.3,y:107.6}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:175.3,y:94.2}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:159.1,y:94.3}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:123.2,y:101.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:115.2,y:107.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:52.2,y:113.7}},{t:this.shape_37,p:{x:49.9,y:112.6}},{t:this.shape_36,p:{x:49.9,y:115.1}},{t:this.shape_35,p:{x:51.5,y:113.6}},{t:this.shape_34,p:{x:51.5,y:88.2}},{t:this.shape_33,p:{x:50.2,y:88.2}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},4).to({state:[]},92).to({state:[{t:this.shape_313},{t:this.instance_12},{t:this.shape_312},{t:this.shape_419},{t:this.shape_306,p:{x:88.6,y:34.1}},{t:this.shape_310,p:{x:59.7,y:46.9}},{t:this.shape_37,p:{x:57.4,y:45.8}},{t:this.shape_418},{t:this.shape_35,p:{x:59,y:46.8}},{t:this.shape_301,p:{x:107,y:48.1}},{t:this.shape_417},{t:this.shape_144,p:{x:107.7,y:52}},{t:this.shape_416,p:{x:131.7,y:19.8}},{t:this.shape_298,p:{x:107,y:20}},{t:this.shape_415},{t:this.shape_414},{t:this.shape_227,p:{x:104.6,y:29.1}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_258,p:{x:87,y:41.5}},{t:this.shape_257,p:{x:91.6,y:40.8}},{t:this.shape_411},{t:this.shape_410},{t:this.shape_106,p:{x:99.8,y:44.1}},{t:this.shape_409},{t:this.shape_212,p:{x:91.9,y:24.1}},{t:this.shape_101,p:{x:91.9,y:29.4}},{t:this.shape_251,p:{x:99.7,y:29.4}},{t:this.shape_88,p:{x:99.8,y:24.1}},{t:this.shape_408},{t:this.shape_119,p:{x:125.4,y:58.7}},{t:this.shape_407},{t:this.shape_102,p:{x:110.3,y:58.7}},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_83,p:{x:125.4,y:11.5}},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394,p:{x:86,y:34.1}},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_156,p:{x:55.9,y:34.1}},{t:this.shape_155,p:{x:71.3,y:34.1}},{t:this.shape_307,p:{x:59,y:21.4}},{t:this.shape_153,p:{x:57.7,y:21.3}},{t:this.shape_376},{t:this.shape_77,p:{x:125.4,y:56.7}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_87,p:{x:59.7,y:113.5}},{t:this.shape_371},{t:this.shape_36,p:{x:57.4,y:114.9}},{t:this.shape_34,p:{x:59,y:113.4}},{t:this.shape_370,p:{x:59,y:88}},{t:this.shape_151,p:{x:88.6,y:100.7}},{t:this.shape_369,p:{x:87.2,y:100.7}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_150,p:{x:107,y:114.8}},{t:this.shape_230,p:{x:131.7,y:115}},{t:this.shape_114,p:{x:131.7,y:86.4}},{t:this.shape_147,p:{x:107,y:86.7}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_202,p:{x:131.9,y:100.7}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_288,p:{x:183.8,y:116.9}},{t:this.shape_123,p:{x:122.6,y:97.9}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_207,p:{x:167.2,y:85.9}},{t:this.shape_351},{t:this.shape_126,p:{x:167.2,y:87.7}},{t:this.shape_254,p:{x:167.2,y:88.5}},{t:this.shape_350},{t:this.shape_256,p:{x:122.6,y:99.5}},{t:this.shape_135,p:{x:121.1,y:90.5}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_130,p:{x:87,y:108.1}},{t:this.shape_129,p:{x:91.6,y:107.5}},{t:this.shape_85,p:{x:122.6,y:103.5}},{t:this.shape_346},{t:this.shape_70,p:{x:166.1,y:110.4}},{t:this.shape_216,p:{x:167.2,y:85.4}},{t:this.shape_209,p:{x:167.2,y:87.2}},{t:this.shape_159,p:{x:167.2,y:89}},{t:this.shape_128,p:{x:122.6,y:101.9}},{t:this.shape_59,p:{x:99.8,y:110.7}},{t:this.shape_64,p:{x:91.9,y:110.7}},{t:this.shape_125,p:{x:91.9,y:90.7}},{t:this.shape_100,p:{x:91.9,y:96.1}},{t:this.shape_55,p:{x:99.7,y:96.1}},{t:this.shape_38,p:{x:99.8,y:90.7}},{t:this.shape_246,p:{x:125.4,y:76.1}},{t:this.shape_99,p:{x:125.4,y:125.3}},{t:this.shape_118,p:{x:110.3,y:76.1}},{t:this.shape_98,p:{x:110.3,y:125.3}},{t:this.shape_345},{t:this.shape_79,p:{x:125.4,y:123.3}},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_81,p:{x:94.1,y:100.7}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_33,p:{x:57.7,y:88}},{t:this.shape_319},{t:this.shape_318,p:{x:71.3,y:100.7}},{t:this.shape_317},{t:this.shape_82,p:{x:125.4,y:78.1}},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314}]},4).to({state:[]},91).to({state:[{t:this.shape_420}]},4).to({state:[{t:this.shape_313},{t:this.instance_12},{t:this.shape_312},{t:this.shape_542},{t:this.shape_306,p:{x:83.2,y:102.3}},{t:this.shape_301,p:{x:101.6,y:116.3}},{t:this.shape_541},{t:this.shape_298,p:{x:101.6,y:88.2}},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_271,p:{x:123.5,y:100.4}},{t:this.shape_227,p:{x:113.6,y:98.5}},{t:this.shape_284,p:{x:85.9,y:97.6}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_127,p:{x:161.1,y:96.3}},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_288,p:{x:123.1,y:102.3}},{t:this.shape_529},{t:this.shape_528},{t:this.shape_85,p:{x:134.5,y:111.6}},{t:this.shape_249,p:{x:126.2,y:83.3}},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_248,p:{x:126.2,y:121.3}},{t:this.shape_369,p:{x:177.3,y:89.9}},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_247,p:{x:120,y:77.7}},{t:this.shape_273,p:{x:115.8,y:79.9}},{t:this.shape_246,p:{x:120,y:126.9}},{t:this.shape_225,p:{x:104.9,y:77.7}},{t:this.shape_222,p:{x:104.9,y:126.9}},{t:this.shape_148,p:{x:129.5,y:107.7}},{t:this.shape_174,p:{x:131.9,y:104.4}},{t:this.shape_117,p:{x:132.2,y:104.4}},{t:this.shape_116,p:{x:134.4,y:104.4}},{t:this.shape_520},{t:this.shape_221,p:{x:130,y:115.7}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_300,p:{x:162.2,y:108.6}},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_77,p:{x:104.9,y:124.9}},{t:this.shape_199,p:{x:104.9,y:79.7}},{t:this.shape_495},{t:this.shape_494},{t:this.shape_84,p:{x:131.2,y:88}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_115,p:{x:94.4,y:112.3}},{t:this.shape_113,p:{x:86.6,y:112.3}},{t:this.shape_89,p:{x:86.6,y:92.3}},{t:this.shape_112,p:{x:94.4,y:92.2}},{t:this.shape_478},{t:this.shape_477},{t:this.shape_88,p:{x:54.2,y:115}},{t:this.shape_309,p:{x:52,y:113.9}},{t:this.shape_476},{t:this.shape_34,p:{x:53.6,y:114.9}},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_318,p:{x:65.9,y:102.2}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_151,p:{x:84.1,y:34.8}},{t:this.shape_150,p:{x:102.5,y:48.8}},{t:this.shape_470},{t:this.shape_416,p:{x:127.2,y:20.5}},{t:this.shape_147,p:{x:102.5,y:20.7}},{t:this.shape_469},{t:this.shape_143,p:{x:86.7,y:30.1}},{t:this.shape_468},{t:this.shape_59,p:{x:162,y:28.8}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_55,p:{x:135.3,y:44.1}},{t:this.shape_132,p:{x:127,y:15.8}},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_120,p:{x:127,y:53.8}},{t:this.shape_119,p:{x:120.9,y:10.2}},{t:this.shape_118,p:{x:120.9,y:59.4}},{t:this.shape_102,p:{x:105.8,y:10.2}},{t:this.shape_99,p:{x:105.8,y:59.4}},{t:this.shape_114,p:{x:130.4,y:40.2}},{t:this.shape_111,p:{x:132.8,y:36.9}},{t:this.shape_110,p:{x:133.1,y:36.9}},{t:this.shape_109,p:{x:135.3,y:36.9}},{t:this.shape_43,p:{x:121.9,y:40.4}},{t:this.shape_98,p:{x:130.9,y:48.2}},{t:this.shape_270,p:{x:170.1,y:41.7}},{t:this.shape_459},{t:this.shape_215,p:{x:177.1,y:42.3}},{t:this.shape_203,p:{x:170.1,y:27.9}},{t:this.shape_140,p:{x:162.5,y:26.7}},{t:this.shape_217,p:{x:177.1}},{t:this.shape_125,p:{x:177.1,y:28.2}},{t:this.shape_105,p:{x:177.1,y:41.3}},{t:this.shape_269,p:{x:179.5,y:41.6}},{t:this.shape_183,p:{x:105.8,y:57.4}},{t:this.shape_80,p:{x:120.9,y:57.4}},{t:this.shape_458},{t:this.shape_79,p:{x:130.9,y:46.2}},{t:this.shape_108,p:{x:95.3,y:44.8}},{t:this.shape_107,p:{x:87.4,y:44.8}},{t:this.shape_457},{t:this.shape_394,p:{x:81.5,y:34.8}},{t:this.shape_106,p:{x:87.4,y:24.8}},{t:this.shape_87,p:{x:95.3,y:24.8}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_83,p:{x:105.8,y:12.2}},{t:this.shape_82,p:{x:120.9,y:12.2}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_149,p:{x:163.1,y:41.1}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_38,p:{x:55.1,y:47.6}},{t:this.shape_37,p:{x:52.9,y:46.5}},{t:this.shape_429},{t:this.shape_370,p:{x:54.5,y:47.5}},{t:this.shape_154,p:{x:54.5,y:22.1}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421}]},93).to({state:[]},97).wait(390));

	// S
	this.instance_13 = new lib.jawbase_apart("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,152.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.Assembly_Base_0039();
	this.instance_14.parent = this;

	this.instance_15 = new lib.Assembly_Base_0037();
	this.instance_15.parent = this;

	this.instance_16 = new lib.Assembly_Base_0035();
	this.instance_16.parent = this;

	this.instance_17 = new lib.Assembly_Base_0033();
	this.instance_17.parent = this;

	this.instance_18 = new lib.Assembly_Base_0031();
	this.instance_18.parent = this;

	this.instance_19 = new lib.Assembly_Base_0029();
	this.instance_19.parent = this;

	this.instance_20 = new lib.Assembly_Base_0027();
	this.instance_20.parent = this;

	this.instance_21 = new lib.Assembly_Base_0025();
	this.instance_21.parent = this;

	this.instance_22 = new lib.Assembly_Base_0023();
	this.instance_22.parent = this;

	this.instance_23 = new lib.Assembly_Base_0021();
	this.instance_23.parent = this;

	this.instance_24 = new lib.Assembly_Base_0019();
	this.instance_24.parent = this;

	this.instance_25 = new lib.Assembly_Base_0017();
	this.instance_25.parent = this;

	this.instance_26 = new lib.Assembly_Base_0015();
	this.instance_26.parent = this;

	this.instance_27 = new lib.Assembly_Base_0013();
	this.instance_27.parent = this;

	this.instance_28 = new lib.Assembly_Base_0011();
	this.instance_28.parent = this;

	this.instance_29 = new lib.Assembly_Base_0009();
	this.instance_29.parent = this;

	this.instance_30 = new lib.Assembly_Base_0007();
	this.instance_30.parent = this;

	this.instance_31 = new lib.Assembly_Base_0005();
	this.instance_31.parent = this;

	this.instance_32 = new lib.Assembly_Base_0003();
	this.instance_32.parent = this;

	this.instance_33 = new lib.Assembly_Base_0001();
	this.instance_33.parent = this;

	this.instance_34 = new lib.Assembly_Base_0000();
	this.instance_34.parent = this;

	this.instance_35 = new lib.jaw2_apart("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(375,152.3);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.instance_36 = new lib.Assembly_jaw2_0038();
	this.instance_36.parent = this;

	this.instance_37 = new lib.Assembly_jaw2_0036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.Assembly_jaw2_0034();
	this.instance_38.parent = this;

	this.instance_39 = new lib.Assembly_jaw2_0032();
	this.instance_39.parent = this;

	this.instance_40 = new lib.Assembly_jaw2_0030();
	this.instance_40.parent = this;

	this.instance_41 = new lib.Assembly_jaw2_0028();
	this.instance_41.parent = this;

	this.instance_42 = new lib.Assembly_jaw2_0026();
	this.instance_42.parent = this;

	this.instance_43 = new lib.Assembly_jaw2_0024();
	this.instance_43.parent = this;

	this.instance_44 = new lib.Assembly_jaw2_0022();
	this.instance_44.parent = this;

	this.instance_45 = new lib.Assembly_jaw2_0020();
	this.instance_45.parent = this;

	this.instance_46 = new lib.Assembly_jaw2_0018();
	this.instance_46.parent = this;

	this.instance_47 = new lib.Assembly_jaw2_0016();
	this.instance_47.parent = this;

	this.instance_48 = new lib.Assembly_jaw2_0014();
	this.instance_48.parent = this;

	this.instance_49 = new lib.Assembly_jaw2_0012();
	this.instance_49.parent = this;

	this.instance_50 = new lib.Assembly_jaw2_0010();
	this.instance_50.parent = this;

	this.instance_51 = new lib.Assembly_jaw2_0008();
	this.instance_51.parent = this;

	this.instance_52 = new lib.Assembly_jaw2_0006();
	this.instance_52.parent = this;

	this.instance_53 = new lib.Assembly_jaw2_0004();
	this.instance_53.parent = this;

	this.instance_54 = new lib.Assembly_jaw2_0002();
	this.instance_54.parent = this;

	this.instance_55 = new lib.Assembly_jaw2_0000();
	this.instance_55.parent = this;

	this.instance_56 = new lib.jaw3_apart("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(375,152.5);
	this.instance_56.alpha = 0.031;
	this.instance_56._off = true;

	this.instance_57 = new lib.Assembly_jaw3_0038();
	this.instance_57.parent = this;

	this.instance_58 = new lib.Assembly_jaw3_0036();
	this.instance_58.parent = this;

	this.instance_59 = new lib.Assembly_jaw3_0034();
	this.instance_59.parent = this;

	this.instance_60 = new lib.Assembly_jaw3_0032();
	this.instance_60.parent = this;

	this.instance_61 = new lib.Assembly_jaw3_0030();
	this.instance_61.parent = this;

	this.instance_62 = new lib.Assembly_jaw3_0028();
	this.instance_62.parent = this;

	this.instance_63 = new lib.Assembly_jaw3_0026();
	this.instance_63.parent = this;

	this.instance_64 = new lib.Assembly_jaw3_0024();
	this.instance_64.parent = this;

	this.instance_65 = new lib.Assembly_jaw3_0022();
	this.instance_65.parent = this;

	this.instance_66 = new lib.Assembly_jaw3_0020();
	this.instance_66.parent = this;

	this.instance_67 = new lib.Assembly_jaw3_0018();
	this.instance_67.parent = this;

	this.instance_68 = new lib.Assembly_jaw3_0016();
	this.instance_68.parent = this;

	this.instance_69 = new lib.Assembly_jaw3_0014();
	this.instance_69.parent = this;

	this.instance_70 = new lib.Assembly_jaw3_0012();
	this.instance_70.parent = this;

	this.instance_71 = new lib.Assembly_jaw3_0010();
	this.instance_71.parent = this;

	this.instance_72 = new lib.Assembly_jaw3_0008();
	this.instance_72.parent = this;

	this.instance_73 = new lib.Assembly_jaw3_0006();
	this.instance_73.parent = this;

	this.instance_74 = new lib.Assembly_jaw3_0004();
	this.instance_74.parent = this;

	this.instance_75 = new lib.Assembly_jaw3_0002();
	this.instance_75.parent = this;

	this.instance_76 = new lib.Assembly_jaw3_0000();
	this.instance_76.parent = this;

	this.instance_77 = new lib.jaw4_apart("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(375,152.3);
	this.instance_77.alpha = 0.031;
	this.instance_77._off = true;

	this.instance_78 = new lib.Assembly_jaw4_0038();
	this.instance_78.parent = this;

	this.instance_79 = new lib.Assembly_jaw4_0036();
	this.instance_79.parent = this;

	this.instance_80 = new lib.Assembly_jaw4_0034();
	this.instance_80.parent = this;

	this.instance_81 = new lib.Assembly_jaw4_0032();
	this.instance_81.parent = this;

	this.instance_82 = new lib.Assembly_jaw4_0030();
	this.instance_82.parent = this;

	this.instance_83 = new lib.Assembly_jaw4_0028();
	this.instance_83.parent = this;

	this.instance_84 = new lib.Assembly_jaw4_0026();
	this.instance_84.parent = this;

	this.instance_85 = new lib.Assembly_jaw4_0024();
	this.instance_85.parent = this;

	this.instance_86 = new lib.Assembly_jaw4_0022();
	this.instance_86.parent = this;

	this.instance_87 = new lib.Assembly_jaw4_0020();
	this.instance_87.parent = this;

	this.instance_88 = new lib.Assembly_jaw4_0018();
	this.instance_88.parent = this;

	this.instance_89 = new lib.Assembly_jaw4_0016();
	this.instance_89.parent = this;

	this.instance_90 = new lib.Assembly_jaw4_0014();
	this.instance_90.parent = this;

	this.instance_91 = new lib.Assembly_jaw4_0012();
	this.instance_91.parent = this;

	this.instance_92 = new lib.Assembly_jaw4_0010();
	this.instance_92.parent = this;

	this.instance_93 = new lib.Assembly_jaw4_0008();
	this.instance_93.parent = this;

	this.instance_94 = new lib.Assembly_jaw4_0006();
	this.instance_94.parent = this;

	this.instance_95 = new lib.Assembly_jaw4_0004();
	this.instance_95.parent = this;

	this.instance_96 = new lib.Assembly_jaw4_0002();
	this.instance_96.parent = this;

	this.instance_97 = new lib.Assembly_jaw4_0000();
	this.instance_97.parent = this;

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("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");
	this.shape_543.setTransform(133.2,147.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AkUCOIAAgSIACAAQAEAAACgCQABgBABgEIAAhHIAaAAIAABMQAAAGgBAEQgCAEgEACQgEADgFABIgKABgAM6B3IAAgXIAKAAQAGAAACgCQADgCAAgGIAAgmQAAgFgDgDQgCgCgGAAIgKAAIAAgXIASAAQAHAAAGACQAFABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgFABQgGACgHAAgAL0B3IgOgBQgGgBgFgEIgFgEIgEgGIgCgIIAAgKIAAgHQAAgHACgJQACgHAFgDQAEgEAGgBQAGgCAHAAIATAAQAMAAAGACQAJABAEADQAFAEACAGQACAGABAJIAAAMIhCAAIAAAEQAAADACACIACADQAEACAJAAIAIAAIAIgBIAFgBQADgCgBgEIAaAAIAAADQAAAHgDAEQgDAEgFADQgFACgGABIgOABgAMRBIIAAgFIgDgDIgGgCIgKAAQgOAAgDACQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBAFIAnAAIAAAAgAKbB3IgNgBQgFgBgEgDQgEgDgDgFQgDgFAAgHIAAgcIgMAAIAAgUIAMAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEAEABQACACAFAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgDADQgFADgFACQgGACgIAAgAIgB3IgKgBIgJgDQgDgCgDgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAFAEIAAgGQgBgGgCgCQgCgCgJAAIgPAAIgIABQgDABAAAEIgZAAQAAgHABgFQACgEAEgDQAEgCAGgBIAOgBIAgAAQAHAAAFACQAGACADADQADADADAFQABAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAIiBZQgCACAAAFQAAADADACQADABAIAAIAIAAQAJAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgLAAIgLAAQgIAAgEACgAHSB3IgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgBAEQgCAFgEADQgEADgGACQgGACgHAAgAFXB3IgLgBQgFgCgEgCQgFgEgCgFIgCgGIgBgZQAAgGADgJQACgFAFgDQAEgDAFgCIALgBIAnAAIALABQAFACAEADQAFADACAFQADAJAAAGIgBAZIgCAGQgCAFgFAEQgEACgFACIgLABgAFeBCIgGACQgCACgBACIgBAHIAAAGIABAHQABACACACIAGACIAIABIARgBQAEAAACgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIACgGIAAgKIgCgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgCgCgEAAIgRgBgABJB3IgQgBQgHgCgDgCQgEgDgCgEQgCgFAAgHIAcAAQAAAEACABQAEACAKAAIAKAAQAJAAADgBQAEgBAAgDQAAgEgCgBQgDgBgGAAIgaAAIgPgBQgHgCgDgCQgEgDgCgFQgBgFgBgHQABgHACgEQACgEAFgCQAEgCAGgBIAOgBIASAAIAVABQAJABAEADQAEACACAEQABAEAAAHIgaAAQgBgDgDgBIgQgBIgPABQgDABgBADQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIANABIATAAQALAAAIABQAHACADAEQAEACABAFIABAJQgBAHgBAFQgCAEgEADQgEADgHABIgTABgAjFB3IgMgBIgIgDQgDgCgCgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAGABAEAEIAAgGQABgGgDgCQgDgCgHAAIgQAAIgIABQgDABABAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAPgBIAfAAQAGAAAGACQAFACAEADQADADADAFQABAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAjDBZQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgLAAIgMAAQgHAAgDACgAn8B3IgLgBQgGgBgEgDQgEgDgDgFQgDgFABgHIAAgcIgOAAIAAgUIAOAAIAAgQIAbAAIAAAQIApAAIAAAUIgpAAIAAAbQAAAEACABQACACAGAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQgBAFgBAEQgCAFgEADQgDADgGACQgGACgIAAgAp3B3IgLgBQgFgC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");
	this.shape_544.setTransform(131.2,139.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AkUCOIAAgSIACAAQAEAAABgCQADgBAAgEIAAhHIAaAAIAABMQAAAGgCAEQgBAEgEACQgEADgEABIgLABgAM6B3IAAgXIAKAAQAFAAADgCQADgCAAgGIAAgmQAAgFgDgDQgDgCgFAAIgKAAIAAgXIASAAQAHAAAGACQAFABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgFABQgGACgHAAgAL0B3IgNgBQgIgBgEgEIgFgEIgDgGIgDgIIgBgKIAAgHQAAgHADgJQACgHAEgDQAFgEAGgBQAFgCAIAAIATAAQALAAAHACQAJABAEADQAFAEACAGQADAGAAAJIAAAMIhCAAIAAAEQAAADABACIAEADQADACAJAAIAIAAIAIgBIAFgBQACgCABgEIAZAAIAAADQgBAHgDAEQgCAEgFADIgLADIgOABgAMSBIIgBgFIgEgDIgFgCIgKAAQgOAAgCACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBAFIAoAAIAAAAgAKaB3IgMgBQgFgBgEgDQgFgDgCgFQgCgFgBgHIAAgcIgMAAIAAgUIAMAAIAAgQIAbAAIAAAQIArAAIAAAUIgrAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgEADQgEADgFACQgGACgIAAgAIhB3IgLgBIgJgDQgEgCgCgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAEAEIAAgGQAAgGgCgCQgDgCgIAAIgPAAIgIABQgCABgBAEIgaAAQABgHABgFQACgEAEgDQADgCAHgBIAPgBIAfAAQAGAAAGACQAGACADADQADADACAFQACAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAIiBZQgCACAAAFQAAADADACQADABAIAAIAHAAQAKAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgKAAIgNAAQgHAAgEACgAHSB3IgMgBQgFgBgEgDQgFgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCgBgFIAAgFIAYAAIAAAJQAAAFgBAEQgDAFgDADQgEADgFACQgHACgIAAgAFWB3IgKgBQgFgCgFgCQgEgEgDgFIgCgGIAAgZQAAgGACgJQADgFAEgDQAFgDAFgCIAKgBIApAAIAKABQAGACADADQAFADADAFQACAJAAAGIgBAZIgBAGQgDAFgFAEQgDACgGACIgKABgAFeBCIgFACQgDACgBACIgBAHIAAAGIABAHQABACADACIAFACIAIABIARgBQAFAAACgCQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIABgGIAAgKIgBgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgCgCgFAAIgRgBgABJB3IgQgBQgGgCgEgCQgEgDgCgEQgCgFAAgHIAcAAQAAAEACABQAEACALAAIAJAAQAKAAACgBQAEgBAAgDQAAgEgDgBQgCgBgHAAIgZAAIgPgBQgHgCgDgCQgEgDgCgFQgCgFABgHQgBgHADgEQADgEAEgCQAEgCAGgBIANgBIATAAIAWABQAHABAFADQAEACACAEQACAEgBAHIgaAAQgBgDgDgBIgQgBIgPABQgDABAAADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAOABIASAAQAMAAAHABQAHACAEAEQACACACAFIABAJQAAAHgCAFQgCAEgEADQgEADgIABIgTABgAjGB3IgLgBIgIgDQgEgCgBgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAHABAEAEIAAgGQgBgGgCgCQgCgCgJAAIgPAAIgIABQgCABAAAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAOgBIAgAAQAHAAAFACQAFACAEADQAEADACAFQABAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAjDBZQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgLAAIgLAAQgJAAgCACgAn7B3IgMgBQgGgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgMAAIAAgUIAMAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQABAEADABQACACAFAAQAGAAADgCQACgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgDADQgEADgGACQgGACgIAAgAp3B3IgLgBIgJgEQgEg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");
	this.shape_545.setTransform(125.9,137);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AkUCOIAAgSIACAAQAEAAACgCQABgBABgEIAAhHIAaAAIAABMQAAAGgBAEQgCAEgEACQgEADgFABIgKABgAM6B3IAAgXIAKAAQAGAAACgCQADgCAAgGIAAgmQAAgFgDgDQgCgCgGAAIgKAAIAAgXIASAAQAHAAAGACQAFABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgFABQgGACgHAAgAL0B3IgOgBQgGgBgFgEIgFgEIgEgGIgCgIIAAgKIAAgHQAAgHACgJQACgHAFgDQAEgEAGgBQAGgCAHAAIATAAQAMAAAGACQAJABAEADQAFAEACAGQACAGABAJIAAAMIhCAAIAAAEQAAADACACIACADQAEACAJAAIAIAAIAIgBIAFgBQADgCgBgEIAaAAIAAADQAAAHgDAEQgDAEgFADQgFACgGABIgOABgAMRBIIAAgFIgDgDIgGgCIgKAAQgOAAgDACQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgBAFIAnAAIAAAAgAKbB3IgNgBQgFgBgEgDQgEgDgDgFQgDgFAAgHIAAgcIgMAAIAAgUIAMAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEAEABQACACAFAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgDADQgFADgFACQgGACgIAAgAIgB3IgKgBIgJgDQgDgCgDgEQgBgEAAgGIAAgGQAAgHACgFQACgEAGgCQAGgDAXAAIASABQAGABAFAEIAAgGQgBgGgCgCQgCgCgJAAIgPAAIgIABQgDABAAAEIgZAAQAAgHABgFQACgEAEgDQAEgCAGgBIAOgBIAgAAQAHAAAFACQAGACADADQADADADAFQABAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAIiBZQgCACAAAFQAAADADACQADABAIAAIAIAAQAJAAAHgCQAEgBAAgEQAAgFgDgBQgDgCgLAAIgLAAQgIAAgEACgAHSB3IgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgBAEQgCAFgEADQgEADgGACQgGACgHAAgAFXB3IgLgBQgFgCgEgCQgFgEgCgFIgCgGIgBgZQAAgGADgJQACgFAFgDQAEgDAFgCIALgBIAnAAIALABQAFACAEADQAFADACAFQADAJAAAGIgBAZIgCAGQgCAFgFAEQgEACgFACIgLABgAFeBCIgGACQgCACgBACIgBAHIAAAGIABAHQABACACACIAGACIAIABIARgBQAEAAACgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIACgGIAAgKIgCgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgCgCgEAAIgRgBgABJB3IgQgBQgHgCgDgCQgEgDgCgEQgCgFAAgHIAcAAQAAAEACABQAEACAKAAIAKAAQAJAAADgBQAEgBAAgDQAAgEgCgBQgDgBgGAAIgaAAIgPgBQgHgCgDgCQgEgDgCgFQgBgFgBgHQABgHACgEQACgEAFgCQAEgCAGgBIAOgBIASAAIAVABQAJABAEADQAEACACAEQABAEAAAHIgaAAQgBgDgDgBIgQgBIgPABQgDABgBADQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIANABIATAAQALAAAIABQAHACADAEQAEACABAFIABAJQgBAHgBAFQgCAEgEADQgEADgHABIgTABgAjFB3IgMgBIgIgDQgDgCgCgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAGABAEAEIAAgGQABgGgDgCQgDgCgHAAIgQAAIgIABQgDABABAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAPgBIAfAAQAGAAAGACQAFACAEADQADADADAFQABAFAAAGIAAAvIgaAAIAAgIQgFAGgEABQgEACgKAAgAjDBZQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgLAAIgMAAQgHAAgDACgAn8B3IgLgBQgGgBgEgDQgEgDgDgFQgDgFABgHIAAgcIgOAAIAAgUIAOAAIAAgQIAbAAIAAAQIApAAIAAAUIgpAAIAAAbQAAAEACABQACACAGAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQgBAFgBAEQgCAFgEADQgDADgGACQgGACgIAAgAp3B3IgLgBQgFgC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");
	this.shape_546.setTransform(131.2,139.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgYCoIAAhHIAWAAIAAA2IAhAAIAAARgABBB7IgDgPIAAgLIATAAIAAALIgDAPgAAnB7IgDgPIAAgLIAUAAIAAALIgDAPgAgzB7IgDgPIAAgLIAUAAIAAALIgDAPgAhMB7IgDgPIAAgLIATAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_547.setTransform(217.6,37.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AAXCoIAAg2IgOA2IgQAAIgOg2IAAA2IgSAAIAAhHIAdAAIALArIALgrIAdAAIAABHgABPB7IgDgPIAAgLIATAAIAAALIgDAPgAA1B7IgDgPIAAgLIAUAAIAAALIgDAPgAhBB7IgDgPIAAgLIAUAAIAAALIgDAPgAhaB7IgDgPIAAgLIATAAIAAALIgDAPgAinAeQgHgHgBgLIAVgBQAAAFADADQADAEAGAAQAFAAADgCQACgDAAgCQAAgDgCgCQgDgDgJgCQgOgDgGgEQgHgGAAgIQAAgGAEgFQADgEAGgDQAHgDALAAQAOAAAHAFQAHAFABALIgVACQAAgFgDgDQgDgCgEAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAIADQAOADAHADQAGADADAEQADAFAAAFQAAAHgEAGQgEAGgHADQgHADgKAAQgSAAgHgHgAB0AkIAAhHIA7AAIAAAPIglAAIAAAMIAjAAIAAANIgjAAIAAAPIAmAAIAAAQgAAyAkIAAhHIAWAAIAAA1IAiAAIAAASgAgHAkIAAgeIgcgpIAZAAIANAYIAPgYIAYAAIgcApIAAAegAhSAkIAAg1IgWAAIAAgSIBDAAIAAASIgXAAIAAA1gAhqhhQgGgDgDgGQgDgGgBgIIAVgDIABAHIADAEIADABQAEAAACgDQABgDAAgGIAAgsIAXAAIAAAnQAAAMgDAGQgCAHgGAEQgHAEgKAAQgLAAgGgCgABVhgIgMgtIgNAtIgVAAIgQhHIAVAAIAHAoIALgoIAVAAIALAoIAIgoIAVAAIgQBHgAAAhgIgDgMIgZAAIgDAMIgXAAIAbhHIAYAAIAaBHgAgIh7IgHgaIgIAaIAPAAg");
	this.shape_548.setTransform(213.2,101);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AkNCOIAAgSIACAAQAEAAACgCQACgBAAgEIAAhHIAaAAIAABMQAAAGgBAEQgCAEgEACQgDADgFABIgLABgANBB3IAAgXIAKAAQAGAAACgCQADgCAAgGIAAgmQAAgFgDgDQgCgCgGAAIgKAAIAAgXIASAAQAHAAAGACQAFABAEAEQAEADACAGQACAGAAAJIAAAqQAAAJgCAGQgCAGgEADQgEAEgFABQgGACgHAAgAL7B3IgNgBQgHgBgFgEIgEgEIgEgGIgDgIIAAgKIAAgHQAAgHACgJQACgHAFgDQAEgEAGgBQAGgCAIAAIASAAQAMAAAHACQAIABAEADQAFAEACAGQADAGAAAJIAAAMIhCAAIAAAEQAAADACACIADADQADACAJAAIAIAAIAJgBIAEgBQADgCAAgEIAZAAIAAADQAAAHgDAEQgDAEgFADIgLADIgOABgAMZBIIgBgFIgDgDIgGgCIgKAAQgOAAgCACQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABIgBAFIAoAAIAAAAgAKiB3IgMgBQgGgBgEgDQgEgDgDgFQgCgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAFAAQAHAAACgCQACgCAAgFIAAgFIAYAAIAAAJQAAAFgCAEQgCAFgDADQgEADgGACQgGACgIAAgAIoB3IgLgBIgJgDQgDgCgCgEQgCgEAAgGIAAgGQAAgHACgFQADgEAFgCQAHgDAWAAIASABQAHABAEAEIAAgGQAAgGgDgCQgCgCgIAAIgQAAIgIABQgCABAAAEIgaAAQAAgHABgFQACgEAEgDQAEgCAGgBIAPgBIAfAAQAHAAAFACQAGACADADQAEADACAFQABAFAAAGIAAAvIgZAAIAAgIQgGAGgEABQgEACgKAAgAIqBZQgDACAAAFQAAADADACQADABAIAAIAIAAQAJAAAIgCQADgBAAgEQAAgFgDgBQgDgCgKAAIgMAAQgIAAgDACgAHZB3IgMgBQgFgBgEgDQgFgDgCgFQgDgFAAgHIAAgcIgNAAIAAgUIANAAIAAgQIAbAAIAAAQIAqAAIAAAUIgqAAIAAAbQAAAEADABQACACAGAAQAGAAACgCQADgCAAgFIAAgFIAXAAIAAAJQAAAFgBAEQgCAFgEAD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");
	this.shape_549.setTransform(130.4,154.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#BCBFC6").s().p("AA8ABIgoAAIgBAAIAAgBIAAAAIABAAIAoAAIABAAIAAAAIAAABIgBAAIAAAAgAgTABIgoAAIgBAAIAAgBIAAAAIABAAIAoAAIABAAIAAAAIAAABIgBAAIAAAAg");
	this.shape_550.setTransform(170.1,115.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#BCBFC6").s().p("AA8ABIgoAAIgBAAIAAgBIAAAAIABAAIAoAAIABAAIAAAAIAAABIgBAAIAAAAgAgTABIgoAAIgBAAIAAgBIAAAAIABAAIAoAAIABAAIAAAAIAAABIgBAAIAAAAg");
	this.shape_551.setTransform(170.1,85.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#BCBFC6").s().p("AAACNIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAA9IAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAgSIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAhiIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAg");
	this.shape_552.setTransform(162,101.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#BCBFC6").s().p("AAACNIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAA9IAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAgSIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAAAhiIAAAAIAAgBIAAgoIAAgBIAAAAIABAAIAAABIAAAoIAAABIgBAAIAAAAg");
	this.shape_553.setTransform(176.1,101.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#BCBFC6").s().p("AC+A/IgEAAIgBAAIAAgBIAAgBIABAAIACAAIAAgkIABgBIABAAIABAAIAAABIAAAlIAAABIgBAAIAAAAgACSA/IgnAAIgCAAIAAgBIAAgBIACAAIAnAAIABAAIABABIgBABIAAAAIgBAAgABCA/IgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAgAgNA/IgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAgAhdA/IgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAgAC+gNIgBAAIgBgBIAAgoIABgBIABAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAgXguIgGAAIgBAAIAAgBIAAgBIABAAIAEAAIAAgNIABgBIABAAIAUAAIABAAIABABIgBABIgBAAIgTAAIAAANIgBABIAAAAIAAAAgAhEguIgoAAIgCAAIAAgBIAAgBIACAAIAoAAIAAAAIABABIgBABIAAAAIAAAAgAiVguIgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAgACcg8IgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAgABMg8IgnAAIgBAAIgBgBIABgBIABAAIAnAAIABAAIABABIgBABIAAAAIgBAAg");
	this.shape_554.setTransform(160,100);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#BCBFC6").s().p("AgEAgIAAgBIAAgBIABAAIADAAQAIAAAHgEIABAAIAAABIABAAIgBABQgHAEgJAAIgDAAIAAAAIgBAAgAgVAXIgBAAQgHgHgCgLIAAgBIABAAIABAAIABABQABAJAHAHIAAABIAAABIgBAAIAAAAgAAcANIAAAAIAAgBQABgGABgGIgBgHIAAgBIABgBIABABIAAAAIABAIQAAAHgCAGIgBAAIAAAAIgBAAgAgbgNIgBAAIAAgBQACgEAEgEQADgEAFgCIABAAIAAABIABABIgBABIgHAFIgGAHIAAABIAAAAIgBgBgAASgWQgIgHgKAAIAAAAIAAgBIAAgBIAAAAQALAAAJAHIAAAAIAAABIgBABIAAAAIgBAAg");
	this.shape_555.setTransform(169.1,100);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgWIAAAt");
	this.shape_556.setTransform(126.9,77.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgmAAIBNAA");
	this.shape_557.setTransform(130.8,75.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAXIAAgt");
	this.shape_558.setTransform(134.7,77.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAnAAIhNAA");
	this.shape_559.setTransform(130.8,124.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgWIAAAt");
	this.shape_560.setTransform(126.9,122.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAXIAAgt");
	this.shape_561.setTransform(134.7,122.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAXIAAgt");
	this.shape_562.setTransform(120.8,77.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgWIAAAt");
	this.shape_563.setTransform(113,77.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgmAAIBNAA");
	this.shape_564.setTransform(116.9,75.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAXIAAgt");
	this.shape_565.setTransform(120.8,122.4);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgWIAAAt");
	this.shape_566.setTransform(113,122.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAnAAIhNAA");
	this.shape_567.setTransform(116.9,124.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgJIAAAT");
	this.shape_568.setTransform(85.4,119.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAKIAAgT");
	this.shape_569.setTransform(146.3,119.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AixAAIFjAA");
	this.shape_570.setTransform(123.5,120.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgUAAIApAA");
	this.shape_571.setTransform(103.6,120.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgXAAIAvAA");
	this.shape_572.setTransform(99.1,120.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgVAAIArAA");
	this.shape_573.setTransform(94.5,120.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgJAAIATAA");
	this.shape_574.setTransform(91.4,120.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_575.setTransform(143.8,120.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AiCAAIEFAA");
	this.shape_576.setTransform(128.2,118.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_577.setTransform(143.8,118.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_578.setTransform(87.9,120.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgKIAAAU");
	this.shape_579.setTransform(85.4,80.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAKIAAgU");
	this.shape_580.setTransform(146.3,80.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AiCAAIEFAA");
	this.shape_581.setTransform(128.2,82);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_582.setTransform(143.8,82);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AixAAIFjAA");
	this.shape_583.setTransform(123.5,79.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgUAAIApAA");
	this.shape_584.setTransform(103.6,79.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgXAAIAvAA");
	this.shape_585.setTransform(99.1,79.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgVAAIArAA");
	this.shape_586.setTransform(94.5,79.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgJAAIATAA");
	this.shape_587.setTransform(91.4,79.9);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_588.setTransform(143.8,79.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_589.setTransform(87.9,79.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AASAAIgjAA");
	this.shape_590.setTransform(140.1,115.6);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAGADIgLgF");
	this.shape_591.setTransform(137.5,97);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAGgCIgLAF");
	this.shape_592.setTransform(136.3,97);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgFgCIALAF");
	this.shape_593.setTransform(136.3,99);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgFADIALgF");
	this.shape_594.setTransform(137.5,99);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAHIAAgN");
	this.shape_595.setTransform(138.1,98);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgGIAAAN");
	this.shape_596.setTransform(135.7,98);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgSQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAHAAg");
	this.shape_597.setTransform(136.9,98);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgWQAJAAAHAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgJAAgGgHQgHgHAAgJQAAgJAHgGQAGgHAJAAg");
	this.shape_598.setTransform(136.9,98);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#BCBFC6").s().p("AgIAYQgFgCgEgEIABAAQgIgHAAgKQAAgHAEgGIABAAIABAAIABABIgBABQgDAFAAAGQAAAJAGAGIABAAQADADAEACIABABIAAABIgBABIAAAAIgBAAgAAXAHIgBgBIAAgBIAAgEQAAgIgGgHIgBAAQgGgGgJAAIAAgBIAAgBIAAgBIAAAAQAKAAAHAHIAAABQAIAHAAAJIgBAFIAAAAIgBABIAAAAg");
	this.shape_599.setTransform(156.5,87);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#BCBFC6").s().p("AAPAQIgBgBIAAgBQADgEABgGQgBgGgFgFQgFgFgGgBIgBAAQgGABgFAFQgFAFAAAGIAAACIgBABIgBAAIgBAAIAAgBIAAgCQAAgHAGgGQAGgGAHAAIABAAQAHAAAGAGQAGAGAAAHQAAAHgEAEIAAABIgBAAIAAAAg");
	this.shape_600.setTransform(169.2,87.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AANgMQAFAGAAAGQAAAIgFAFQgGAFgHAAQgRAAAAgSQAAgGAFgGQAFgFAHAAQAHAAAGAFg");
	this.shape_601.setTransform(169.2,88.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#BCBFC6").s().p("AgKASIgBAAIgCgCQgGgGAAgJQAAgHAGgGQAGgFAHAAQAJAAAFAFQAFAFABAFIgBABIAAAAIgBAAIgBgBQgBgEgEgEQgFgFgHAAQgGAAgFAFQgFAGAAAFQAAAIAFAFIACACIAAABIAAABIgBAAIAAAAg");
	this.shape_602.setTransform(169.2,111.6);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AASAAQAAAHgFAFQgGAFgHAAQgRAAAAgRQAAgQARAAQAHAAAGAFQAFAFAAAGg");
	this.shape_603.setTransform(169.2,111.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgqQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgRAAgNgNQgMgMAAgSQAAgRAMgNQANgMARAAg");
	this.shape_604.setTransform(105.8,98);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ADBAAImBAA");
	this.shape_605.setTransform(165.9,82.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAhgIAADB");
	this.shape_606.setTransform(100.2,99.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AjkAAIHJAA");
	this.shape_607.setTransform(123.1,90.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAjIAAhF");
	this.shape_608.setTransform(146.6,113.8);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAiIAAhE");
	this.shape_609.setTransform(146.6,86.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ADlAAInJAA");
	this.shape_610.setTransform(123.1,109.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAIgQQAIAEACAHQADAHgEAHQgEAHgHACQgHADgGgEQgIgEgCgHQgDgHAEgHQAEgHAHgCQAHgCAGADg");
	this.shape_611.setTransform(156.5,87);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAisIAAFZ");
	this.shape_612.setTransform(185.3,100);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ADBAAImBAA");
	this.shape_613.setTransform(165.9,117.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAGAAIgLAA");
	this.shape_614.setTransform(146,110.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#BCBFC6").s().p("AgHAaIgBAAIAAAAQgLgDgEgKIAAgBIAAgBIABAAIABABQAEAJAKADIAAAAIABAAIABABIgBABIgBABIAAgBgAAMAZIgBAAIAAgBIABgBQAIgFADgJIAAAAIAAgCIABgBIABAAIABAAIAAABIgBADIAAAAQgDAKgJAFIgBAAIAAAAgAgYgEIgBgBIAAgBIAAgBIAAAAQADgJAIgFIABAAIAAABIAAABIAAAAQgHAFgDAIIAAAAIAAABIgBABIAAAAgAAWgKIgBAAQgFgIgIgDIAAAAIgFgCIgBAAIAAgCIABAAIABgBIAFACQAJADAFAJIAAABIAAABIgBAAIAAAAg");
	this.shape_615.setTransform(169.1,99.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AABAGIABgDIAAgCIgBgDIgBAAIAAgD");
	this.shape_616.setTransform(57.8,88.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAFIABgEIAAgBIAAgE");
	this.shape_617.setTransform(57.8,112);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgbIAAA3");
	this.shape_618.setTransform(145.4,112.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AFNAAIqaAA");
	this.shape_619.setTransform(112.1,115.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAANIAAgZ");
	this.shape_620.setTransform(140.8,83.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_621.setTransform(137.7,83.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAANIAAgZ");
	this.shape_622.setTransform(140.8,116.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_623.setTransform(137.7,116.8);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAfgdQgaAAgRARQgSARAAAZ");
	this.shape_624.setTransform(96.6,93.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAglIAABL");
	this.shape_625.setTransform(93.6,100);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgIQAAAIACAJ");
	this.shape_626.setTransform(93.7,104.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAANIAAgZ");
	this.shape_627.setTransform(78.7,83.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ADkAAInIAA");
	this.shape_628.setTransform(122.6,90.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAANIAAgZ");
	this.shape_629.setTransform(113.9,83.2);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_630.setTransform(78.7,116.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgiAAIBFAA");
	this.shape_631.setTransform(82.2,82);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_632.setTransform(113.9,116.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AiLAAIEXAA");
	this.shape_633.setTransform(99.8,82);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAjAAIhFAA");
	this.shape_634.setTransform(82.2,118.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("ACMAAIkXAA");
	this.shape_635.setTransform(99.8,118.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAizIAAFn");
	this.shape_636.setTransform(71.8,100);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCAAIAFAA");
	this.shape_637.setTransform(57.9,82);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCAAIAFAA");
	this.shape_638.setTransform(71.5,82);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhAAAICBAA");
	this.shape_639.setTransform(64.7,82);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCAAIAFAA");
	this.shape_640.setTransform(57.8,118.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgCAAIAFAA");
	this.shape_641.setTransform(71.4,118.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhAAAICBAA");
	this.shape_642.setTransform(64.7,118.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA0AAIhnAA");
	this.shape_643.setTransform(140.3,109.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_644.setTransform(136.5,83.2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAjAAIhFAA");
	this.shape_645.setTransform(75.2,82);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_646.setTransform(145.4,83.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgMIAAAZ");
	this.shape_647.setTransform(145.4,116.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAjAAIhFAA");
	this.shape_648.setTransform(75.2,118.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgGAAIANAA");
	this.shape_649.setTransform(114.5,82);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAANIAAgZ");
	this.shape_650.setTransform(136.5,116.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAAcIAAg3");
	this.shape_651.setTransform(145.4,87.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAHAAIgNAA");
	this.shape_652.setTransform(114.5,118.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AlNAAIKaAA");
	this.shape_653.setTransform(112.1,84.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgRAIQATgCAQgN");
	this.shape_654.setTransform(133.3,110.7);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgcgLQAFAWAXAAQAYAAAFgW");
	this.shape_655.setTransform(117.9,112.7);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgcgLQAGAWAWAAQAXAAAGgW");
	this.shape_656.setTransform(128.6,112.7);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgYAAIAxAA");
	this.shape_657.setTransform(123.2,111.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AhbAAIC3AA");
	this.shape_658.setTransform(105.7,111.5);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AATAAIgkAA");
	this.shape_659.setTransform(98.4,104);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AANgIQgSAAgHAQ");
	this.shape_660.setTransform(95.2,104.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAEPIAAod");
	this.shape_661.setTransform(57.5,100);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgHIAAAP");
	this.shape_662.setTransform(93.6,107.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgOgOQAAANAJAHQAIAJAMAA");
	this.shape_663.setTransform(95,110);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AACgFQgCAFAAAG");
	this.shape_664.setTransform(93.7,106.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAkOIAAId");
	this.shape_665.setTransform(45.2,100);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AA9AAIh5AA");
	this.shape_666.setTransform(51.4,72.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAVgbQAMAJACAPQACANgJALQgJAMgPACQgNABgMgJQgLgJgCgOQgCgNAJgLQAJgMAPgCQANgCALAJg");
	this.shape_667.setTransform(105.8,98);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAIglQAQADAJAOQAIANgDAPQgDAQgOAJQgNAIgPgDQgQgDgJgOQgJgNAEgPQADgQAOgJQANgIAPADg");
	this.shape_668.setTransform(105.8,98);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAgKIAAAV");
	this.shape_669.setTransform(107.7,98);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAAALIAAgV");
	this.shape_670.setTransform(103.8,98);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAKAFIgTgK");
	this.shape_671.setTransform(104.8,99.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AAKgFIgTAK");
	this.shape_672.setTransform(106.7,99.7);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgJgEIATAJ");
	this.shape_673.setTransform(106.7,96.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#BCBFC6").ss(0.4,1,1).p("AgJAFIATgJ");
	this.shape_674.setTransform(104.8,96.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#3C456A").s().p("Aq7kOIB6AAIAABcIEYgCIAAgUIETgBIABgvIBMAAIgBAvIA/AAIgCgvIBPAAIABAvIByABIgBAUIgGABIAABSIALACIABhMIGBgCIABFYImCAAIAAhBIgMgBIABBKIAGAAIABAWIh0AAIABAuIhOABIgBguIg9gBIABAsIhOABIABgtIkUAAIABgUIkYgCIgBBbIh5ABg");
	this.shape_675.setTransform(115.3,100);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#BCBFC6").s().p("ABGCXIgnAAIgBgBIAAgBIAAgBIABAAIAmAAIAAAAIAAgBIABgBIABABIAAABIAAABIAAABIgBABIAAAAgAgICXIgoAAIgBgBIAAgBIAAgBIABAAIAoAAIABAAIAAABIAAABIgBABIAAAAgAhFCEIgBAAIAAgBIAAgoIAAgBIABgBIABABIAAABIAAAoIAAABIgBAAIAAAAgABGBtIgBAAIAAgBIAAgoIAAgBIABAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAhFA0IgBAAIAAgBIAAgoIAAgBIABgBIABABIAAABIAAAoIAAABIgBAAIAAAAgABGAdIgBAAIAAgBIAAgnIAAgBIABAAIABAAIAAABIAAAnIAAABIgBAAIAAAAgAhFgbIgBAAIAAgBIAAgoIAAgBIABgBIABABIAAABIAAAoIAAABIgBAAIAAAAgABGgyIgBAAIAAgBIAAgoIAAgBIABAAIABAAIAAABIAAAoIAAABIgBAAIAAAAgAhFhrIgBAAIAAgBIAAgoIAAgBIABgBIABABIAAABIAAAoIAAABIgBAAIAAAAgABGiCIgBAAIAAgBIAAgQIgWAAIgBAAIAAgBIAAgBIABgBIAXAAIABABIAAABIAAARIAAABIgBAAIAAAAgAAHiTIgnAAIgBAAIAAgBIAAgBIABgBIAnAAIABABIAAABIAAABIgBAAIAAAAg");
	this.shape_676.setTransform(167.3,35.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#BCBFC6").s().p("AC8A/IgIAAIgBgBIAAgBIAAgBIABAAIAHAAIAAgfIAAgBIABgBIABABIAAABIAAAgIAAABIgBABIAAAAgACNA/IgpAAIgBgBIAAgBIAAgBIABAAIApAAIABAAIAAABIAAABIgBABIAAAAgAA9A/IgpAAIgBgBIAAgBIAAgBIABAAIApAAIAAAAIABABIgBABIAAABIAAAAgAgTA/IgnAAIgCgBIAAgBIAAgBIACAAIAnAAIABAAIABABIgBABIAAABIgBAAgAhjA/IgdAAIgBgBIgBgBIABgBIABAAIAdAAIABAAIABABIgBABIAAABIgBAAgAC8gJIgBAAIAAgBIAAgoIAAgBIABgBIABABIAAABIAAAoIAAABIgBAAIAAAAgAgVgtIgGAAIgBAAIAAgBIAAgBIABAAIAEAAIAAgNIABgBIABgBIAUAAIABABIAAABIAAABIgBAAIgTAAIAAANIAAABIgBAAIAAAAgAhDgtIgoAAIgBAAIAAgBIAAgBIABAAIAoAAIABAAIAAABIAAABIgBAAIAAAAgAiTgtIgoAAIgBAAIAAgBIAAgBIABAAIAoAAIABAAIAAABIAAABIgBAAIAAAAgACeg7IgoAAIgBAAIAAgBIAAgBIABgBIAoAAIABABIAAABIAAABIgBAAIAAAAgABOg7IgoAAIgBAAIAAgBIAAgBIABgBIAoAAIABABIAAABIAAABIgBAAIAAAAg");
	this.shape_677.setTransform(158.1,35.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmAAIhMAA");
	this.shape_678.setTransform(128.4,46.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgmAA");
	this.shape_679.setTransform(122.6,46.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAAIgLAA");
	this.shape_680.setTransform(120.1,46.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgFIAAAL");
	this.shape_681.setTransform(119.5,46);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAFIAAgK");
	this.shape_682.setTransform(132.6,45.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgmAAIBMAA");
	this.shape_683.setTransform(129.6,11.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_684.setTransform(133.4,13.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_685.setTransform(125.7,13.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_686.setTransform(125.7,58);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_687.setTransform(133.4,58);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmAAIhMAA");
	this.shape_688.setTransform(129.6,60.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_689.setTransform(119.8,13.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_690.setTransform(112.1,13.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgmAAIBMAA");
	this.shape_691.setTransform(115.9,11.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWIAAAt");
	this.shape_692.setTransform(112.1,58);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAXIAAgt");
	this.shape_693.setTransform(119.8,58);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAmAAIhMAA");
	this.shape_694.setTransform(115.9,60.3);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgJIAAAT");
	this.shape_695.setTransform(85,54.7);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAKIAAgT");
	this.shape_696.setTransform(144.8,54.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiuAAIFdAA");
	this.shape_697.setTransform(122.5,55.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_698.setTransform(102.9,55.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAuAA");
	this.shape_699.setTransform(98.4,55.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_700.setTransform(93.9,55.7);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAAIATAA");
	this.shape_701.setTransform(90.8,55.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_702.setTransform(142.4,55.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah/AAID/AA");
	this.shape_703.setTransform(127.1,53.7);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_704.setTransform(142.4,53.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_705.setTransform(87.4,55.7);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgJIAAAT");
	this.shape_706.setTransform(85,16.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAKIAAgT");
	this.shape_707.setTransform(144.8,16.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ah/AAID/AA");
	this.shape_708.setTransform(127.1,18);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_709.setTransform(142.4,18);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_710.setTransform(102.9,15.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiuAAIFdAA");
	this.shape_711.setTransform(122.5,15.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAuAA");
	this.shape_712.setTransform(98.4,15.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUAAIApAA");
	this.shape_713.setTransform(93.9,15.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAAIATAA");
	this.shape_714.setTransform(90.8,15.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_715.setTransform(142.4,15.9);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_716.setTransform(87.4,15.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_717.setTransform(138.7,51.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADgFIgFAL");
	this.shape_718.setTransform(134.6,33.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAGIgFgL");
	this.shape_719.setTransform(136.6,33.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAGIAFgL");
	this.shape_720.setTransform(136.6,34.4);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCgFIAFAL");
	this.shape_721.setTransform(134.6,34.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgGAAIANAA");
	this.shape_722.setTransform(135.6,35);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgWQAJAAAHAHQAHAHAAAIQAAAKgHAHQgHAGgJAAQgJAAgHgGQgGgHAAgKQAAgIAGgHQAHgHAJAAg");
	this.shape_723.setTransform(135.6,33.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgNAA");
	this.shape_724.setTransform(135.6,32.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgSQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFQgGgGAAgIQAAgHAGgFQAFgGAHAAg");
	this.shape_725.setTransform(135.6,33.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgMQAFAFAAAHQAAAIgFAFQgFAGgIAAQgRAAAAgTQAAgHAFgFQAFgGAHAAQAIAAAFAGg");
	this.shape_726.setTransform(167.4,35.8);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AARAAQAAAHgFAFQgFAFgHAAQgGAAgFgFQgFgFAAgHQAAgGAFgFQAFgFAGAAQARAAAAAQg");
	this.shape_727.setTransform(167.3,35.8);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgpQASAAAMAMQANAMAAARQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgMARAAg");
	this.shape_728.setTransform(105,33.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AGiAAItDAA");
	this.shape_729.setTransform(141.3,26.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhfIAAC/");
	this.shape_730.setTransform(99.6,35.8);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAhfIAAC/");
	this.shape_731.setTransform(183.1,35.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AGiAAItDAA");
	this.shape_732.setTransform(141.3,45.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AACgCQgCACgBAD");
	this.shape_733.setTransform(126.8,46.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAUAAIgnAA");
	this.shape_734.setTransform(97.5,41.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_735.setTransform(95.2,41.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgDIAAAI");
	this.shape_736.setTransform(145.2,45.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAHIgNgN");
	this.shape_737.setTransform(96.2,45.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ABXAAIitAA");
	this.shape_738.setTransform(110.8,46.3);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAGAAIgLAA");
	this.shape_739.setTransform(144.6,46.3);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAEgBIgEACIgDAB");
	this.shape_740.setTransform(119.7,46.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADAAIgFAA");
	this.shape_741.setTransform(119.1,47.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AALAAIgVAA");
	this.shape_742.setTransform(101.1,46.3);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgkAAIBJAA");
	this.shape_743.setTransform(123,47.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgSAAIAlAA");
	this.shape_744.setTransform(116.9,47.1);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAPAAIgdAA");
	this.shape_745.setTransform(98.4,46.3);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAFAEQgCgHgIAA");
	this.shape_746.setTransform(114.4,46.7);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AADADIgFgF");
	this.shape_747.setTransform(95.2,44.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAIADIgEgCIgEgBIgHgC");
	this.shape_748.setTransform(117.8,46.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgLIAAAX");
	this.shape_749.setTransform(94.9,43);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#BCBFC6").s().p("AgIAaQgKgEgFgKQgFgKAEgJIABgBIABAAIAAABIAAABQgDAIAEAJQAFAJAJADIABABIAAABIgBABIAAAAIgBAAgAAYAIIAAgBIgBgBQADgHgEgIQgEgJgKgEIgDgBIAAAAIgBgBIABgBIABAAIADABIAAAAQALAEAEAKQAEAJgCAIIgBABIgBAAIAAAAg");
	this.shape_750.setTransform(167.2,35.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AFIAAIqPAA");
	this.shape_751.setTransform(111.2,51.1);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgbIAAA3");
	this.shape_752.setTransform(144,48.3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_753.setTransform(139.5,19.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_754.setTransform(136.4,19.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_755.setTransform(136.4,52.4);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_756.setTransform(139.5,52.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ADgAAInAAA");
	this.shape_757.setTransform(121.5,26.1);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAegdQgZAAgRASQgRAQAAAZ");
	this.shape_758.setTransform(96,29.1);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAglIAABL");
	this.shape_759.setTransform(93,35.9);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgBgIQAAAIACAJ");
	this.shape_760.setTransform(93.2,40.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_761.setTransform(78.4,19.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgiAAIBFAA");
	this.shape_762.setTransform(81.9,18);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_763.setTransform(113,19.2);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AiJAAIETAA");
	this.shape_764.setTransform(99.2,18);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_765.setTransform(78.4,52.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAjAAIhFAA");
	this.shape_766.setTransform(81.9,53.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_767.setTransform(113,52.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("ACKAAIkTAA");
	this.shape_768.setTransform(99.2,53.7);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAixIAAFk");
	this.shape_769.setTransform(71.6,35.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_770.setTransform(57.9,18);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_771.setTransform(71.3,18);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag/AAIB/AA");
	this.shape_772.setTransform(64.6,18);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_773.setTransform(57.9,53.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("Ag/AAIB/AA");
	this.shape_774.setTransform(64.6,53.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgCAAIAFAA");
	this.shape_775.setTransform(71.3,53.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_776.setTransform(135.2,19.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAzAAIhkAA");
	this.shape_777.setTransform(138.9,45.6);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_778.setTransform(144,19.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgMIAAAZ");
	this.shape_779.setTransform(144,52.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAiAAIhDAA");
	this.shape_780.setTransform(75,18);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAiAAIhDAA");
	this.shape_781.setTransform(75,53.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgFAAIAMAA");
	this.shape_782.setTransform(113.6,18);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAHAAIgMAA");
	this.shape_783.setTransform(113.6,53.7);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAANIAAgZ");
	this.shape_784.setTransform(135.2,52.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AlHAAIKPAA");
	this.shape_785.setTransform(111.2,20.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAcIAAg3");
	this.shape_786.setTransform(144,23.3);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcgKQAFAWAXAAQAXAAAFgW");
	this.shape_787.setTransform(127.4,48.3);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgRAIQATgBAQgO");
	this.shape_788.setTransform(132.1,46.4);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcgKQAFAVAXAAQAXAAAFgV");
	this.shape_789.setTransform(116.9,48.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_790.setTransform(122.2,47.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AhZAAICzAA");
	this.shape_791.setTransform(105,47.2);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcAAIA4AA");
	this.shape_792.setTransform(127.4,47.2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgcAAIA4AA");
	this.shape_793.setTransform(116.9,47.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAAFIABgEIAAgBIAAgE");
	this.shape_794.setTransform(57.9,47.6);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABAFIAAgEIgBgCIAAgD");
	this.shape_795.setTransform(57.9,24);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA8AAIh3AA");
	this.shape_796.setTransform(51.5,62.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AASAAIgjAA");
	this.shape_797.setTransform(97.8,39.7);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AANgHQgSAAgHAQ");
	this.shape_798.setTransform(94.6,40.6);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAEMIAAoX");
	this.shape_799.setTransform(57.6,35.8);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgHIAAAP");
	this.shape_800.setTransform(93,43.4);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgOgOQAAANAJAHQAHAJANAA");
	this.shape_801.setTransform(94.5,45.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AABgFQgCAFAAAG");
	this.shape_802.setTransform(93.2,42);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAkLIAAIX");
	this.shape_803.setTransform(45.5,35.8);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AA8AAIh3AA");
	this.shape_804.setTransform(51.5,9);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgDghQANgCALAJQAMAJABAOQACANgJALQgJALgNACQgOACgLgJQgMgJgBgOQgCgNAJgLQAJgMAOgBg");
	this.shape_805.setTransform(105,33.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgUgfQANgJAPADQAPAEAJANQAIANgCAPQgEAPgNAJQgNAJgPgDQgPgEgJgNQgIgNACgPQAEgQANgIg");
	this.shape_806.setTransform(105,33.8);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_807.setTransform(106.9,33.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAALIAAgV");
	this.shape_808.setTransform(103.1,33.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKAGIgTgL");
	this.shape_809.setTransform(104.1,35.5);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAKgFIgTAL");
	this.shape_810.setTransform(106,35.5);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJgFIATAK");
	this.shape_811.setTransform(106,32.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AgJAFIATgK");
	this.shape_812.setTransform(104.1,32.2);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#BCBFC6").ss(0.5,1,1).p("AAAgKIAAAV");
	this.shape_813.setTransform(127.3,46.9);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#3C456A").s().p("AquELIgCoWIB7AAIgBBZIETABIgBgUIEOAAIAAgvIBNAAIgBAuIA8AAIAAgtIBNAAIABAtIByAAIgDAVIgGAAIABBRIGGAAIgBC/Il7AAIgBAKIgJAAIAABJIAIABIAAAUIhzAAIACAuIhOAAIgBgtIg8gBIABAuIhOAAIADgtIkQAAIgBgUIkRAAIAABXg");
	this.shape_814.setTransform(114.3,35.8);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#3C456A").ss(0.5,1,1).p("AxjqMMAjHAAAIAAUZMgjHAAAg");
	this.shape_815.setTransform(138.1,69.9);

	this.instance_98 = new lib.box_ltCorner("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(154.9,56.5,1,1,0,0,0,129.2,51.9);
	this.instance_98.alpha = 0.32;

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#3C456A").ss(3,1,1).p("APQAAI+fAA");
	this.shape_816.setTransform(137.1,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_35}]},6).to({state:[{t:this.instance_35}]},4).to({state:[{t:this.instance_36}]},5).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_55}]},4).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_56}]},6).to({state:[{t:this.instance_56}]},4).to({state:[{t:this.instance_57}]},4).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70}]},2).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},2).to({state:[{t:this.instance_75}]},4).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_70}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_77}]},7).to({state:[{t:this.instance_77}]},4).to({state:[{t:this.instance_78}]},5).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_80}]},2).to({state:[{t:this.instance_81}]},2).to({state:[{t:this.instance_82}]},2).to({state:[{t:this.instance_83}]},2).to({state:[{t:this.instance_84}]},2).to({state:[{t:this.instance_85}]},2).to({state:[{t:this.instance_86}]},2).to({state:[{t:this.instance_87}]},2).to({state:[{t:this.instance_88}]},2).to({state:[{t:this.instance_89}]},2).to({state:[{t:this.instance_90}]},2).to({state:[{t:this.instance_91}]},2).to({state:[{t:this.instance_92}]},2).to({state:[{t:this.instance_93}]},2).to({state:[{t:this.instance_94}]},2).to({state:[{t:this.instance_95}]},2).to({state:[{t:this.instance_96}]},2).to({state:[{t:this.instance_97}]},2).to({state:[{t:this.instance_96}]},5).to({state:[{t:this.instance_95}]},2).to({state:[{t:this.instance_94}]},2).to({state:[{t:this.instance_93}]},2).to({state:[{t:this.instance_92}]},2).to({state:[{t:this.instance_91}]},2).to({state:[{t:this.instance_90}]},2).to({state:[{t:this.instance_89}]},2).to({state:[{t:this.instance_88}]},2).to({state:[{t:this.instance_87}]},2).to({state:[{t:this.instance_86}]},2).to({state:[{t:this.instance_85}]},2).to({state:[{t:this.instance_84}]},2).to({state:[{t:this.instance_83}]},2).to({state:[{t:this.instance_82}]},2).to({state:[{t:this.instance_81}]},2).to({state:[{t:this.instance_80}]},2).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_78}]},2).to({state:[{t:this.instance_77}]},2).to({state:[{t:this.shape_543}]},7).to({state:[]},97).to({state:[{t:this.shape_544}]},4).to({state:[]},93).to({state:[{t:this.shape_545}]},4).to({state:[]},92).to({state:[{t:this.shape_546}]},4).to({state:[]},93).to({state:[{t:this.shape_816},{t:this.instance_98},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547}]},4).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(82).to({_off:false},0).to({_off:true},6).wait(775));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(103).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(81).to({_off:false},0).to({_off:true},6).wait(679));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(199).to({_off:false},0).to({alpha:1},4).to({_off:true},4).wait(80).to({_off:false},0).to({_off:true},7).wait(584));
	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(294).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(81).to({_off:false},0).to({_off:true},7).wait(487));

	// CDtext
	this.instance_99 = new lib.jaw5_apart("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(375,152.3,1,1,0,0,0,375,152.5);
	this.instance_99.alpha = 0;
	this.instance_99._off = true;

	this.instance_100 = new lib.Assembly_jawJ0038();
	this.instance_100.parent = this;

	this.instance_101 = new lib.Assembly_jawJ0036();
	this.instance_101.parent = this;

	this.instance_102 = new lib.Assembly_jawJ0034();
	this.instance_102.parent = this;

	this.instance_103 = new lib.Assembly_jawJ0032();
	this.instance_103.parent = this;

	this.instance_104 = new lib.Assembly_jawJ0030();
	this.instance_104.parent = this;

	this.instance_105 = new lib.Assembly_jawJ0028();
	this.instance_105.parent = this;

	this.instance_106 = new lib.Assembly_jawJ0026();
	this.instance_106.parent = this;

	this.instance_107 = new lib.Assembly_jawJ0024();
	this.instance_107.parent = this;

	this.instance_108 = new lib.Assembly_jawJ0022();
	this.instance_108.parent = this;

	this.instance_109 = new lib.Assembly_jawJ0020();
	this.instance_109.parent = this;

	this.instance_110 = new lib.Assembly_jawJ0018();
	this.instance_110.parent = this;

	this.instance_111 = new lib.Assembly_jawJ0016();
	this.instance_111.parent = this;

	this.instance_112 = new lib.Assembly_jawJ0014();
	this.instance_112.parent = this;

	this.instance_113 = new lib.Assembly_jawJ0012();
	this.instance_113.parent = this;

	this.instance_114 = new lib.Assembly_jawJ0010();
	this.instance_114.parent = this;

	this.instance_115 = new lib.Assembly_jawJ0008();
	this.instance_115.parent = this;

	this.instance_116 = new lib.Assembly_jawJ0006();
	this.instance_116.parent = this;

	this.instance_117 = new lib.Assembly_jawJ0004();
	this.instance_117.parent = this;

	this.instance_118 = new lib.Assembly_jawJ0002();
	this.instance_118.parent = this;

	this.instance_119 = new lib.Assembly_jawJ0000();
	this.instance_119.parent = this;

	this.instance_120 = new lib.Assembly_jawJ0015();
	this.instance_120.parent = this;

	this.instance_121 = new lib.jaw6_apart("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(375,152.3,1,1,0,0,0,375,152.5);
	this.instance_121.alpha = 0;
	this.instance_121._off = true;

	this.instance_122 = new lib.Assembly_jawR0038();
	this.instance_122.parent = this;

	this.instance_123 = new lib.Assembly_jawR0036();
	this.instance_123.parent = this;

	this.instance_124 = new lib.Assembly_jawR0034();
	this.instance_124.parent = this;

	this.instance_125 = new lib.Assembly_jawR0032();
	this.instance_125.parent = this;

	this.instance_126 = new lib.Assembly_jawR0030();
	this.instance_126.parent = this;

	this.instance_127 = new lib.Assembly_jawR0028();
	this.instance_127.parent = this;

	this.instance_128 = new lib.Assembly_jawR0026();
	this.instance_128.parent = this;

	this.instance_129 = new lib.Assembly_jawR0024();
	this.instance_129.parent = this;

	this.instance_130 = new lib.Assembly_jawR0022();
	this.instance_130.parent = this;

	this.instance_131 = new lib.Assembly_jawR0020();
	this.instance_131.parent = this;

	this.instance_132 = new lib.Assembly_jawR0018();
	this.instance_132.parent = this;

	this.instance_133 = new lib.Assembly_jawR0016();
	this.instance_133.parent = this;

	this.instance_134 = new lib.Assembly_jawR0014();
	this.instance_134.parent = this;

	this.instance_135 = new lib.Assembly_jawR0012();
	this.instance_135.parent = this;

	this.instance_136 = new lib.Assembly_jawR0010();
	this.instance_136.parent = this;

	this.instance_137 = new lib.Assembly_jawR0008();
	this.instance_137.parent = this;

	this.instance_138 = new lib.Assembly_jawR0006();
	this.instance_138.parent = this;

	this.instance_139 = new lib.Assembly_jawR0004();
	this.instance_139.parent = this;

	this.instance_140 = new lib.Assembly_jawR0002();
	this.instance_140.parent = this;

	this.instance_141 = new lib.Assembly_jawR0000();
	this.instance_141.parent = this;

	this.instance_142 = new lib.Assembly_jawR0015();
	this.instance_142.parent = this;

	this.instance_143 = new lib.jaw7_apart("synched",0);
	this.instance_143.parent = this;
	this.instance_143.setTransform(375,152.3,1,1,0,0,0,375,152.5);
	this.instance_143.alpha = 0;
	this.instance_143._off = true;

	this.instance_144 = new lib.Assembly_jawF_alpha0038();
	this.instance_144.parent = this;

	this.instance_145 = new lib.Assembly_jawF_alpha0036();
	this.instance_145.parent = this;

	this.instance_146 = new lib.Assembly_jawF_alpha0034();
	this.instance_146.parent = this;

	this.instance_147 = new lib.Assembly_jawF_alpha0032();
	this.instance_147.parent = this;

	this.instance_148 = new lib.Assembly_jawF_alpha0030();
	this.instance_148.parent = this;

	this.instance_149 = new lib.Assembly_jawF_alpha0028();
	this.instance_149.parent = this;

	this.instance_150 = new lib.Assembly_jawF_alpha0026();
	this.instance_150.parent = this;

	this.instance_151 = new lib.Assembly_jawF_alpha0024();
	this.instance_151.parent = this;

	this.instance_152 = new lib.Assembly_jawF_alpha0022();
	this.instance_152.parent = this;

	this.instance_153 = new lib.Assembly_jawF_alpha0020();
	this.instance_153.parent = this;

	this.instance_154 = new lib.Assembly_jawF_alpha0018();
	this.instance_154.parent = this;

	this.instance_155 = new lib.Assembly_jawF_alpha0016();
	this.instance_155.parent = this;

	this.instance_156 = new lib.Assembly_jawF_alpha0014();
	this.instance_156.parent = this;

	this.instance_157 = new lib.Assembly_jawF_alpha0012();
	this.instance_157.parent = this;

	this.instance_158 = new lib.Assembly_jawF_alpha0010();
	this.instance_158.parent = this;

	this.instance_159 = new lib.Assembly_jawF_alpha0008();
	this.instance_159.parent = this;

	this.instance_160 = new lib.Assembly_jawF_alpha0006();
	this.instance_160.parent = this;

	this.instance_161 = new lib.Assembly_jawF_alpha0004();
	this.instance_161.parent = this;

	this.instance_162 = new lib.Assembly_jawF_alpha0002();
	this.instance_162.parent = this;

	this.instance_163 = new lib.Assembly_jawF_alpha0000();
	this.instance_163.parent = this;

	this.instance_164 = new lib.Assembly_jawF_alpha0015();
	this.instance_164.parent = this;

	this.instance_165 = new lib.jaw8_apart("synched",0);
	this.instance_165.parent = this;
	this.instance_165.setTransform(375,152.3,1,1,0,0,0,375,152.5);
	this.instance_165.alpha = 0;
	this.instance_165._off = true;

	this.instance_166 = new lib.Assembly_jawK_alpha0038();
	this.instance_166.parent = this;

	this.instance_167 = new lib.Assembly_jawK_alpha0036();
	this.instance_167.parent = this;

	this.instance_168 = new lib.Assembly_jawK_alpha0034();
	this.instance_168.parent = this;

	this.instance_169 = new lib.Assembly_jawK_alpha0032();
	this.instance_169.parent = this;

	this.instance_170 = new lib.Assembly_jawK_alpha0030();
	this.instance_170.parent = this;

	this.instance_171 = new lib.Assembly_jawK_alpha0028();
	this.instance_171.parent = this;

	this.instance_172 = new lib.Assembly_jawK_alpha0026();
	this.instance_172.parent = this;

	this.instance_173 = new lib.Assembly_jawK_alpha0024();
	this.instance_173.parent = this;

	this.instance_174 = new lib.Assembly_jawK_alpha0022();
	this.instance_174.parent = this;

	this.instance_175 = new lib.Assembly_jawK_alpha0020();
	this.instance_175.parent = this;

	this.instance_176 = new lib.Assembly_jawK_alpha0018();
	this.instance_176.parent = this;

	this.instance_177 = new lib.Assembly_jawK_alpha0016();
	this.instance_177.parent = this;

	this.instance_178 = new lib.Assembly_jawK_alpha0014();
	this.instance_178.parent = this;

	this.instance_179 = new lib.Assembly_jawK_alpha0012();
	this.instance_179.parent = this;

	this.instance_180 = new lib.Assembly_jawK_alpha0010();
	this.instance_180.parent = this;

	this.instance_181 = new lib.Assembly_jawK_alpha0008();
	this.instance_181.parent = this;

	this.instance_182 = new lib.Assembly_jawK_alpha0006();
	this.instance_182.parent = this;

	this.instance_183 = new lib.Assembly_jawK_alpha0004();
	this.instance_183.parent = this;

	this.instance_184 = new lib.Assembly_jawK_alpha0002();
	this.instance_184.parent = this;

	this.instance_185 = new lib.Assembly_jawK_alpha0000();
	this.instance_185.parent = this;

	this.instance_186 = new lib.jaw9_apart("synched",0);
	this.instance_186.parent = this;
	this.instance_186.setTransform(375,152.3,1,1,0,0,0,375,152.5);
	this.instance_186.alpha = 0;
	this.instance_186._off = true;

	this.instance_187 = new lib.Assembly_jawM_alpha0038();
	this.instance_187.parent = this;

	this.instance_188 = new lib.Assembly_jawM_alpha0036();
	this.instance_188.parent = this;

	this.instance_189 = new lib.Assembly_jawM_alpha0034();
	this.instance_189.parent = this;

	this.instance_190 = new lib.Assembly_jawM_alpha0032();
	this.instance_190.parent = this;

	this.instance_191 = new lib.Assembly_jawM_alpha0030();
	this.instance_191.parent = this;

	this.instance_192 = new lib.Assembly_jawM_alpha0028();
	this.instance_192.parent = this;

	this.instance_193 = new lib.Assembly_jawM_alpha0026();
	this.instance_193.parent = this;

	this.instance_194 = new lib.Assembly_jawM_alpha0024();
	this.instance_194.parent = this;

	this.instance_195 = new lib.Assembly_jawM_alpha0022();
	this.instance_195.parent = this;

	this.instance_196 = new lib.Assembly_jawM_alpha0020();
	this.instance_196.parent = this;

	this.instance_197 = new lib.Assembly_jawM_alpha0018();
	this.instance_197.parent = this;

	this.instance_198 = new lib.Assembly_jawM_alpha0016();
	this.instance_198.parent = this;

	this.instance_199 = new lib.Assembly_jawM_alpha0014();
	this.instance_199.parent = this;

	this.instance_200 = new lib.Assembly_jawM_alpha0012();
	this.instance_200.parent = this;

	this.instance_201 = new lib.Assembly_jawM_alpha0010();
	this.instance_201.parent = this;

	this.instance_202 = new lib.Assembly_jawM_alpha0008();
	this.instance_202.parent = this;

	this.instance_203 = new lib.Assembly_jawM_alpha0006();
	this.instance_203.parent = this;

	this.instance_204 = new lib.Assembly_jawM_alpha0004();
	this.instance_204.parent = this;

	this.instance_205 = new lib.Assembly_jawM_alpha0002();
	this.instance_205.parent = this;

	this.instance_206 = new lib.Assembly_jawM_alpha0000();
	this.instance_206.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_99}]},391).to({state:[{t:this.instance_99}]},4).to({state:[{t:this.instance_100}]},5).to({state:[{t:this.instance_101}]},2).to({state:[{t:this.instance_102}]},2).to({state:[{t:this.instance_103}]},2).to({state:[{t:this.instance_104}]},2).to({state:[{t:this.instance_105}]},2).to({state:[{t:this.instance_106}]},2).to({state:[{t:this.instance_107}]},2).to({state:[{t:this.instance_108}]},2).to({state:[{t:this.instance_109}]},2).to({state:[{t:this.instance_110}]},2).to({state:[{t:this.instance_111}]},2).to({state:[{t:this.instance_112}]},2).to({state:[{t:this.instance_113}]},2).to({state:[{t:this.instance_114}]},2).to({state:[{t:this.instance_115}]},2).to({state:[{t:this.instance_116}]},2).to({state:[{t:this.instance_117}]},2).to({state:[{t:this.instance_118}]},2).to({state:[{t:this.instance_119}]},2).to({state:[{t:this.instance_118}]},5).to({state:[{t:this.instance_117}]},2).to({state:[{t:this.instance_116}]},2).to({state:[{t:this.instance_115}]},2).to({state:[{t:this.instance_114}]},2).to({state:[{t:this.instance_113}]},2).to({state:[{t:this.instance_120}]},2).to({state:[{t:this.instance_111}]},2).to({state:[{t:this.instance_110}]},2).to({state:[{t:this.instance_109}]},2).to({state:[{t:this.instance_108}]},2).to({state:[{t:this.instance_107}]},2).to({state:[{t:this.instance_106}]},2).to({state:[{t:this.instance_105}]},2).to({state:[{t:this.instance_104}]},2).to({state:[{t:this.instance_103}]},2).to({state:[{t:this.instance_102}]},2).to({state:[{t:this.instance_101}]},2).to({state:[{t:this.instance_100}]},2).to({state:[{t:this.instance_99}]},2).to({state:[{t:this.instance_121}]},7).to({state:[{t:this.instance_121}]},4).to({state:[{t:this.instance_122}]},5).to({state:[{t:this.instance_123}]},2).to({state:[{t:this.instance_124}]},2).to({state:[{t:this.instance_125}]},2).to({state:[{t:this.instance_126}]},2).to({state:[{t:this.instance_127}]},2).to({state:[{t:this.instance_128}]},2).to({state:[{t:this.instance_129}]},2).to({state:[{t:this.instance_130}]},2).to({state:[{t:this.instance_131}]},2).to({state:[{t:this.instance_132}]},2).to({state:[{t:this.instance_133}]},2).to({state:[{t:this.instance_134}]},2).to({state:[{t:this.instance_135}]},2).to({state:[{t:this.instance_136}]},2).to({state:[{t:this.instance_137}]},2).to({state:[{t:this.instance_138}]},2).to({state:[{t:this.instance_139}]},2).to({state:[{t:this.instance_140}]},2).to({state:[{t:this.instance_141}]},2).to({state:[{t:this.instance_140}]},5).to({state:[{t:this.instance_139}]},2).to({state:[{t:this.instance_138}]},2).to({state:[{t:this.instance_137}]},2).to({state:[{t:this.instance_136}]},2).to({state:[{t:this.instance_135}]},2).to({state:[{t:this.instance_142}]},2).to({state:[{t:this.instance_133}]},2).to({state:[{t:this.instance_132}]},2).to({state:[{t:this.instance_131}]},2).to({state:[{t:this.instance_130}]},2).to({state:[{t:this.instance_129}]},2).to({state:[{t:this.instance_128}]},2).to({state:[{t:this.instance_127}]},2).to({state:[{t:this.instance_126}]},2).to({state:[{t:this.instance_125}]},2).to({state:[{t:this.instance_124}]},2).to({state:[{t:this.instance_123}]},2).to({state:[{t:this.instance_122}]},2).to({state:[{t:this.instance_121}]},2).to({state:[{t:this.instance_143}]},7).to({state:[{t:this.instance_143}]},4).to({state:[{t:this.instance_144}]},4).to({state:[{t:this.instance_145}]},2).to({state:[{t:this.instance_146}]},2).to({state:[{t:this.instance_147}]},2).to({state:[{t:this.instance_148}]},2).to({state:[{t:this.instance_149}]},2).to({state:[{t:this.instance_150}]},2).to({state:[{t:this.instance_151}]},2).to({state:[{t:this.instance_152}]},2).to({state:[{t:this.instance_153}]},2).to({state:[{t:this.instance_154}]},2).to({state:[{t:this.instance_155}]},2).to({state:[{t:this.instance_156}]},2).to({state:[{t:this.instance_157}]},2).to({state:[{t:this.instance_158}]},2).to({state:[{t:this.instance_159}]},2).to({state:[{t:this.instance_160}]},2).to({state:[{t:this.instance_161}]},2).to({state:[{t:this.instance_162}]},2).to({state:[{t:this.instance_163}]},2).to({state:[{t:this.instance_162}]},5).to({state:[{t:this.instance_161}]},2).to({state:[{t:this.instance_160}]},2).to({state:[{t:this.instance_159}]},2).to({state:[{t:this.instance_158}]},2).to({state:[{t:this.instance_157}]},2).to({state:[{t:this.instance_164}]},2).to({state:[{t:this.instance_155}]},2).to({state:[{t:this.instance_154}]},2).to({state:[{t:this.instance_153}]},2).to({state:[{t:this.instance_152}]},2).to({state:[{t:this.instance_151}]},2).to({state:[{t:this.instance_150}]},2).to({state:[{t:this.instance_149}]},2).to({state:[{t:this.instance_148}]},2).to({state:[{t:this.instance_147}]},2).to({state:[{t:this.instance_146}]},2).to({state:[{t:this.instance_145}]},2).to({state:[{t:this.instance_144}]},2).to({state:[{t:this.instance_143}]},2).to({state:[{t:this.instance_165}]},7).to({state:[{t:this.instance_165}]},4).to({state:[{t:this.instance_166}]},5).to({state:[{t:this.instance_167}]},2).to({state:[{t:this.instance_168}]},2).to({state:[{t:this.instance_169}]},2).to({state:[{t:this.instance_170}]},2).to({state:[{t:this.instance_171}]},2).to({state:[{t:this.instance_172}]},2).to({state:[{t:this.instance_173}]},2).to({state:[{t:this.instance_174}]},2).to({state:[{t:this.instance_175}]},2).to({state:[{t:this.instance_176}]},2).to({state:[{t:this.instance_177}]},2).to({state:[{t:this.instance_178}]},2).to({state:[{t:this.instance_179}]},2).to({state:[{t:this.instance_180}]},2).to({state:[{t:this.instance_181}]},2).to({state:[{t:this.instance_182}]},2).to({state:[{t:this.instance_183}]},2).to({state:[{t:this.instance_184}]},2).to({state:[{t:this.instance_185}]},2).to({state:[{t:this.instance_184}]},5).to({state:[{t:this.instance_183}]},2).to({state:[{t:this.instance_182}]},2).to({state:[{t:this.instance_181}]},2).to({state:[{t:this.instance_180}]},2).to({state:[{t:this.instance_179}]},2).to({state:[{t:this.instance_178}]},2).to({state:[{t:this.instance_177}]},2).to({state:[{t:this.instance_176}]},2).to({state:[{t:this.instance_175}]},2).to({state:[{t:this.instance_174}]},2).to({state:[{t:this.instance_173}]},2).to({state:[{t:this.instance_172}]},2).to({state:[{t:this.instance_171}]},2).to({state:[{t:this.instance_170}]},2).to({state:[{t:this.instance_169}]},2).to({state:[{t:this.instance_168}]},2).to({state:[{t:this.instance_167}]},2).to({state:[{t:this.instance_166}]},2).to({state:[{t:this.instance_165}]},2).to({state:[{t:this.instance_186}]},7).to({state:[{t:this.instance_186}]},4).to({state:[{t:this.instance_187}]},8).to({state:[{t:this.instance_188}]},2).to({state:[{t:this.instance_189}]},2).to({state:[{t:this.instance_190}]},2).to({state:[{t:this.instance_191}]},2).to({state:[{t:this.instance_192}]},2).to({state:[{t:this.instance_193}]},2).to({state:[{t:this.instance_194}]},2).to({state:[{t:this.instance_195}]},2).to({state:[{t:this.instance_196}]},2).to({state:[{t:this.instance_197}]},2).to({state:[{t:this.instance_198}]},2).to({state:[{t:this.instance_199}]},2).to({state:[{t:this.instance_200}]},2).to({state:[{t:this.instance_201}]},2).to({state:[{t:this.instance_202}]},2).to({state:[{t:this.instance_203}]},2).to({state:[{t:this.instance_204}]},2).to({state:[{t:this.instance_205}]},2).to({state:[{t:this.instance_206}]},2).to({state:[{t:this.instance_205}]},5).to({state:[{t:this.instance_204}]},2).to({state:[{t:this.instance_203}]},2).to({state:[{t:this.instance_202}]},2).to({state:[{t:this.instance_201}]},2).to({state:[{t:this.instance_200}]},2).to({state:[{t:this.instance_199}]},2).to({state:[{t:this.instance_198}]},2).to({state:[{t:this.instance_197}]},2).to({state:[{t:this.instance_196}]},2).to({state:[{t:this.instance_195}]},2).to({state:[{t:this.instance_194}]},2).to({state:[{t:this.instance_193}]},2).to({state:[{t:this.instance_192}]},2).to({state:[{t:this.instance_191}]},2).to({state:[{t:this.instance_190}]},2).to({state:[{t:this.instance_189}]},2).to({state:[{t:this.instance_188}]},2).to({state:[{t:this.instance_187}]},2).to({state:[{t:this.instance_186}]},2).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(391).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(81).to({_off:false},0).to({_off:true},7).wait(390));
	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(488).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(81).to({_off:false},0).to({_off:true},7).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(585).to({_off:false},0).to({alpha:1},4).to({_off:true},4).wait(81).to({_off:false},0).to({_off:true},7).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_165).wait(681).to({_off:false},0).to({alpha:1},4).to({_off:true},5).wait(81).to({_off:false},0).to({_off:true},7).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_186).wait(778).to({_off:false},0).to({alpha:1},4).to({_off:true},8).wait(81).to({_off:false,y:152.5},0).wait(7));

	// background
	this.instance_207 = new lib.Background();
	this.instance_207.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_207).wait(878));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,123.5,750,334.1);
// library properties:
lib.properties = {
	width: 750,
	height: 305,
	fps: 30,
	color: "#40485B",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ExchangeableJaws_atlas_.png", id:"ExchangeableJaws_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;