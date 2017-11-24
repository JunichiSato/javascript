//var array = Array(3);
var MyClass = function(){
	// スコープ内でのローカルな変数／関数定義は、プライベートとして利用可能
	var privateVar = "private";
	var privateFunc = function(){
		alert(privateVar);
	};

	// 以下、パブリック
	this.setPrivateVar = function(chg){
		privateVar = chg;
	};

	this.getPrivateVar = function(){
		return privateVar;
	};

	this.publicVar = "public";
	this.publicFunc = function(){
		alert(MyClass.staticVar);	// "static"
		alert(this.protoVar);		// "prototype"
		alert(this.publicVar);		// "public"
		alert(this.getPrivateVar());// "private"
	};
};

MyClass.prototype.protoVar = "prototype"; MyClass.prototype.protoFunc = function(){
    alert(MyClass.staticVar);    // "static"
    alert(this.protoVar);        // "prototype"
    alert(this.publicVar);       // "public"
    alert(this.getPrivateVar()); // "private"
};
MyClass.prototype.protoTwicePrivateVar = function(){
    this.setPrivateVar(this.getPrivateVar() + this.getPrivateVar()); };

MyClass.staticVar = "static";
MyClass.staticFunc = function(){
    alert(MyClass.staticVar);  // "static"
};

// インスタンス生成 ///////////////////////////////////////////////////////////
var my = new MyClass();
MyClass.staticFunc();  // "static"
my.protoFunc();        // "static", "prototype", "public", "private"
my.publicFunc();       // "static", "prototype", "public", "private"
my.setPrivateVar("hoge");
my.publicFunc();       // "static", "prototype", "public", "hoge"
my.protoTwicePrivateVar();
my.publicFunc();       // "static", "prototype", "public", "hogehoge"
//my.privateFunc();      // エラー

// 継承 ///////////////////////////////////////////////////////////
var MyClass2 = function(){};
MyClass2.prototype = new MyClass();  // 継承
MyClass2.prototype.protoVar = "prototype2";

var my2 = new MyClass2();
my2.publicVar = "public2";
my2.setPrivateVar("private2");
my2.protoFunc();       // "static", "prototype2", "public2", "private2"
my2.publicFunc();      // "static", "prototype2", "public2", "private2"
my2.setPrivateVar("hoge2");
my2.publicFunc();      // "static", "prototype2", "public2", "hoge2"
my2.protoTwicePrivateVar();
my2.publicFunc();      // "static", "prototype2", "public2", "hoge2hoge2"

// 継承変更 ///////////////////////////////////////////////////////////
var MyClass3 = function(){};
MyClass3.prototype = new MyClass();  // 継承
MyClass3.prototype.protoVar = "prototype3";

var my3 = new MyClass3();
my3.protoFunc();       // "static", "prototype3", "public", "private"
