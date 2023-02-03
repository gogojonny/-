// if (true){
//     let age=100;
//     console.log(age);
// }
// console.log(age);

// let age;
// let age;

// var name;
// let name;

// console.log(age);
// let age=100;

// var name="john";
// console.log(window.name);

// let age=100;
// console.log(window.age);
// console.log(age);

// var age=100;

// function test(){
//     var age=10;
//     console.log(age);
// }

// test();
// console.log(age);

// /for (let i=1;i<6;i++){
//     setTimeout(()=>console.log(i),0);
// }

// const age=26;

// if (true){
//     const age=27;
//     console.log(age);
// }
// console.log(age);

// age=27;

// var 旺财={name:"旺财",age:2,gentle:"male"};

// for (let index in 旺财){
//     if (index=="name"){
//         continue;
//     }
//     console.log(index);
// }

// for (let index of 旺财){
//     // if (index==旺财.name){
//     //     break
//     // }
//     console.log(index);
// }

// var arr=Array(1,2,3,4,5);
// for (let i of arr){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }

// let a="";
// console.log(typeof a);

// let a=10;
// console.log(typeof a);
// console.log(typeof b);

// let message;

// if (message){
//     console.log("存在");
// }

// if (!message){
//     console.log("没值");

// }

// if (age){
//     console.log("cunzai ");
// }

// let a=null;
// console.log(typeof a);

// console.log(undefined==null);

// let a={};
// console.log(typeof a);

// let a=077;//63
// let b=076;//62
// console.log(a);
// console.log(b);
// console.log(a+b);

// console.log(+0==-0);

// console.log(0/0);
// console.log(1/0);

// console.log(Number.MAX_VALUE+Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(Number.POSITIVE_INFINITY);

// console.log("blue"==NaN);
// console.log(isNaN("10"));

// let a=true,b=false,c=100,d=null,e=undefined,f="-11",g="011",h=".1",i="0x11",j="",k="blue";
// console.log(Number(a) )
// console.log(Number(b) )
// console.log(Number(c) )
// console.log(Number(d) )
// console.log(Number(e) )
// console.log(Number(f) )
// console.log(Number(g) )
// console.log(Number(h) )
// console.log(Number(i) )
// console.log(Number(j) )
// console.log(Number(k) )

// let 旺财={name:"旺财",age:2,height:40,gentle:"male"};
// for (let i of 旺财){
//     // let j;
//     // j=Number(i);
//     // if (isNaN(j)){
//     //     j=Number(i.toString());
//     // }
//     // console.log(j);
// }

// console.log(Number(011));

// console.log(parseInt("000100",10));

// let letter="this is a letter: \u038a";

// console.log(letter.length)

// let num=10;
// console.log(typeof(num.toString(2)));
// console.log(10);

// let a=null;
// console.log(a)

// let a=10;
// let b=a+"";
// console.log(typeof(b));

// let myTemplateLiteral=
// `first line
// second line`;
// console.log(myTemplateLiteral[0]);
// console.log(myTemplateLiteral[0]==="\n");

// let a="灰太狼";
// a="红太狼";
// let b="羊";
// let c=`${a}永远抓不到${b}`;
// console.log(c);

// console.log(`Hello ${`World!`}`)

// let a=10;
// let b=20;
// console.log(`a+b=${a+b}`);

// let a={toString:()=>"world"};
// console.log(`hello ${a}` );

// function toUpper(word){
//     return `${word[0].toUpperCase()}${word.slice(1)}`;
// }

// console.log(`${toUpper("hello")} ${toUpper("world")}!`);

// let value="";

// function add(){
//     value=`${value}abc`;
//     console.log(value);
// }

// add();
// add();
// add();

// let arr=[1,2,3,4,5]

// for (let i of arr){
//    console.log(i);
// }

// let a=3,b=5;

// function tagFunc(expression,...result){
//     console.log(expression);
//     for (let i of result){
//         console.log(i);
//     }
//     return "foobar";
// }

// let tagResult=tagFunc`${a}+${b}=${a+b}`;
// console.log(tagResult);

// let a=5,b=3;
// function tagFunc(strings,...expression){
//     for(let i of strings){
//         console.log(strings.indexOf(i), i);
//     }
//     console.log(strings);
// }
// let tagResult=tagFunc`${a}+${b}=${a+b}`;

// let a=6,b=9;
// function tagFunc(strings,...expressions){
//     return strings[0]+expressions.map((e,i)=>`${e}${strings[i+1]}`).join("");
// }
// let tagResult=tagFunc`${a}+${b}=${a+b}`;
// console.log(tagResult);

// console.log(`\u00A9`);
// console.log(String.raw `\u00A9`);

// console.log(`first line\n\tsecond line`);
// console.log(String.raw `first line\n\tsecond line`);

// console.log(
//     `first line
//      second line`
// );
// console.log(String.raw
//     `first line
//      second line`
// );

// let a="\u00A9";

// console.log(a);
// console.log(String.raw `${a}`);

// function tagFunc(strings){
//     console.log("actually template");
//     for (let i of strings){
//         console.log(i);
//     }
//     console.log("root template");
//     for (let rawString of strings.raw){
//         console.log(rawString);

//     }

// }

// tagFunc`\u00A9${'and'}\n`

// let sym=Symbol();
// console.log(typeof(sym));

// let a=Symbol("a");
// console.log( a);

// let newObj=new Symbol();
// let newObj1=new Boolean();
// let newObj2=new Number();
// let newObj3=new String();

// let a=Symbol();
// let newObj=Object(a);
// console.log(newObj);
// // console.log(typeof newObj);

// let s1=Symbol("foo"),
//     s2=Symbol("bar"),
//     s3=Symbol("baz");
//     s4=Symbol("herz");

// let o={
//     [s1]:"foo val",
// };

// console.log(o);

// Object.defineProperty(o,s2,{value:"bar val"});

// Object.defineProperties(o,{
//     [s3]:{value:"baz val"},
//     [s4]:{value:"herz val"}
// });
// console.log(o);

// let s1=Symbol("foo"),s2=Symbol("bar");

// let o={
//     [s1]:"foo val",
//     [s2]:"bar val",
//     s3:"baz val",
//     s4:"herz val"
// };

// console.log(Object.getOwnPropertySymbols(o));
// console.log(Object.getOwnPropertyNames(o));
// console.log(Object.getOwnPropertyDescriptors(o));
// console.log(Reflect.ownKeys(o));

// function Foo(){};
// let o=new Foo();
// console.log(o instanceof Foo);
// console.log(Foo[Symbol.hasInstance](o));

// class Bar{};
// class Baz extends Bar{
//     static [Symbol.hasInstance](){
//         return false;
//     }
// }

// let o=new Baz();
// console.log(o instanceof Baz);
// console.log(o instanceof Bar);
// console.log(Baz[Symbol.hasInstance](o));
// console.log(Bar[Symbol.hasInstance](o));

// let initial =["foo"];
// let array=["bar"];
// console.log(array[Symbol.isConcatSpreadable]);
// console.log(initial.concat(array));
// array[Symbol.isConcatSpreadable]=false;
// let a=initial.concat(array);
// // console.log(initial.concat(array));
// console.log(typeof a[1]);
// console.log(a[1]);

// let arrayLikeObject={length:1,0:"baz"};
// console.log(arrayLikeObject[Symbol.isConcatSpreadable]);
// console.log(initial.concat(arrayLikeObject));
// arrayLikeObject[Symbol.isConcatSpreadable]=true;
// console.log(initial.concat(arrayLikeObject));

// class Emitter {
//     constructor (max){
//         this.max=max;
//         this.idx=0;
//     }

//     *[Symbol.iterator](){
//         while(this.idx<this.max){
//             yield this.idx++;
//         }
//     }
// }

// function count(){
//     let emitter =new Emitter(5);

//     for (const x of emitter){
//         console.log(x);
//     }
// }

// count();

// console.log(RegExp.prototype[Symbol.match]);
// console.log("foobar".match(/bar/));
// console.log("football".match(/ball/));

// class fooMatch {
//     static [Symbol.match](target){
//         return target.includes("foo");
//     }
// }

// console.log("foobar".match(fooMatch));
// console.log("barbar".match(fooMatch));

// class strMatch {
//     constructor(str){
//         this.str=str;
//     }

//     [Symbol.match](target){
//         return target.includes(this.str);
//     }
// }

// console.log("foobar".match(new strMatch("foo")));
// console.log("barbar".match(new strMatch("barbar")));

// class fooReplace {
//     static [Symbol.replace](target,str){
//         return target.split("foo").join(str);
//     }
// }

// console.log("foobarbaz".replace(fooReplace,"bar"));
// console.log("barbarbar".replace(fooReplace,"bar"));

// class strReplace{
//     constructor (str){
//         this.str=str;
//     }
//     [Symbol.replace](target,replaceStr){
//         return target.split(this.str).join(replaceStr);
//     }
// }

// console.log("foobarbaz".replace(new strReplace("bar"),"foo"));

// class fooSearch{
//     static [Symbol.search](target){
//         return target.indexOf("foo");
//     }
// }

// console.log("foobar".search(fooSearch));
// console.log("barfoo".search(fooSearch));
// console.log("barbar".search(fooSearch));

// class strSearch{
//     constructor(str){
//         this.str=str;
//     }

//     [Symbol.search](target){
//         return target.indexOf(this.str);
//     }
// }

// console.log("foobar".search(new strSearch("bar")));

// class fooSplit{
//     static [Symbol.split](target){
//         return target.split("foo")
//     }
// }
// console.log("barfoobaz".split(fooSplit));

// class StrSplit{
//     constructor(str){
//         this.str=str;
//     }

//     [Symbol.split](target){
//         return target.split(this.str);
//     }
// }

// console.log("barfoobaz".split(new StrSplit("foo")));

// class Bar {};
// let bar =new Bar;

// console.log(3+bar);
// console.log(3-bar);
// console.log(String(bar));

// class Bar {
//     constructor(){
//         this[Symbol.toPrimitive]=function(hint){
//             switch(hint){
//                 case "number":
//                     return 3;
//                 case "string":
//                      return "string bar";
//                 case "default":
//                     return "default bar";

//             }
//         }
//     }
// }
// let bar =new Bar();
// console.log(3+bar);
// console.log(3-bar);
// console.log(String(bar));

// let set =new Set();

// console.log(set);
// console.log(set.toString());
// console.log(set[Symbol.toStringTag]);

// class Foo{};
// let foo=new Foo();
// console.log(foo);
// console.log(foo.toString());
// console.log(foo[Symbol.toStringTag]);

// class Bar{
//     constructor(){
//         this[Symbol.toStringTag]="Bar";
//     }
// }
// let bar =new Bar();
// console.log(bar);
// console.log(bar.toString());
// console.log(bar[Symbol.toStringTag]);

// class Foo{};
// let foo=new Foo();
// console.log(foo);

// let a="1",b="1.1",c="blue",d=false,e={
//     valueOf(){
//         return -1;
//     }
// };
// console.log(-a);
// console.log(-b);
// console.log(-c);
// console.log(-d);
// console.log(-e);

// let a=9;
// let b=a**2;
// console.log(b);

// let a=16;
// let b=a**0.5;
// console.log(b);

// let a=Infinity;
// let b=Infinity;
// let c=a%b;
// console.log(c);

// console.log("bA">"aB");

// let num1=1,num2=2,num3=3;
// let num=(5,1,8,4,0);
// // console.log(num);
// let age=10;
// if (age>25){
//     console.log("older than 25");
// }else{
//     console.log("younger than 25");
// }

// let num=0;

// for(let i=1;i<10;i++){
//     if (i%5==0){
//         continue;
//     }
//     num++;
// }
// console.log(num);

// let num=0;

// lable:
// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         if(i==5&&j==5){
//             continue lable;
//         }
//         num++;
//     }
// }
// console.log(num);
// i=25;
// switch(i){
//     case 25:
//     case 35:
//         console.log("25or35");
//         break;
//     case 45:
//         console.log(45);
//         break;
//     default:
//      console.log("other");
// }

// let num=25;

// switch(true){
//     case num<0:
//         console.log("less than 0");
//         break;
//     case num<10:
//         console.log("num less than 10");
//         break;
//     case num<20:
//         console.log("num less than 20");
//         break;
//     default:
//         console.log("num bigger than 20");
// }

// function diff(num1,num2){
//     if (num1<num2){
//         return num2-num1;
//     }else{
//         return num1-num2;
//     }
// }

// let num3=diff(10,5);
// console.log(num3);
// let num4=diff(5,10);
// console.log(num4);

// let str=new String("matt");
// // console.log(str);

// let color="blue";
// let a=1;
// function Color(){
//     let color="red";
//     {
//         let color="green";
//         return color;
//     }
// }

// console.log(Color());

// let time=new Date(Date.parse("Sep 30,2022"));
// time=Date.parse("9/3/2022");
// let otherTime=time.parse("9/3/2022")
// console.log(time);
// console.log(otherTime);

// let otherTime=new Date.parse("9/3/2022");
// console.log( otherTime);

// let time=Date(Date.UTC(2005,4,5,17,55,55));
// console.log(time);
// let otherTime=Date(2005,4,5,17,55,55);
// console.log( otherTime);

// let start=Date.now();
// console.log(start);

// for (let i=0;i<10000;i++){
//     let a=i;
// }

// let end=Date.now();
// console.log(end);

// let result=end-start;
// console.log(result);

// let a={};
// console.log(a);

// let now =Date();
// console.log(now instanceof Date());
// console.log(now);

// function foo(){
//     return "foo";
// }

// console.log(typeof foo());

// let now=new Date();
// console.log(now.constructor);

// Date.prototype.myFunc=function (){
//     if (this.getMonth()==1){this.myMonth="January"};
//     if(this.getMonth()==2){this.myMonth="February"};
//     if(this.getMonth()==3){this.myMonth="March"};
//     if(this.getMonth()==4){this.myMonth="April"};
//     if(this.getMonth()==5){this.myMonth="May"};
//     if(this.getMonth()==6)(this.myMonth="June");
//     if(this.getMonth()==7){this.myMonth="July"};
//     if(this.getMonth()==8){this.myMonth="Augrust"};
//     if(this.getMonth()==9){this.myMonth="September"};
//     if(this.getMonth()==10){this.myMonth="October"};
//     if(this.getMonth()==11){this.myMonth="November"};
//     if(this.getMonth()==12){this.myMonth="December"}

// }

// let d=new Date();

// d.myFunc();

// console.log(d.myMonth);

// let now =Date();
// let num=Date.parse(now);
// console.log(now);

// console.log(num);

// let start=Date.parse();
// console.log(start);

// let time=new Date();
// console.log(Date(time.setDate(15)));

// let d=new Date();
// // console.log();
// let year=d.getFullYear(d.setDate(0));
// let month=d.getMonth(d.setDate(0));
// let day=d.getDay(d.setDate(0));

// console.log(""+year+month+day);
// // console.log(year);

// // let d=new Date();
// // d.setDate(10);
// // console.log(d);

// let a=/[bc]at/i;
// console.log(a);

// let b= new RegExp("[bc]at","i")
// console.log(b);

// let c=/\[bc\]at/i;
// console.log(c);

// let d=new RegExp("\\[bc\\]at","i");
// console.log(d);

// let e=new RegExp(a);
// console.log(e);
// console.log(e.ignoreCase);
// console.log(e.lastIndex);
// console.log(e.flags);
// console.log(e.source);
// console.log(e.global);
// console.log(e.sticky);
// console.log(e.dotAll);

// console.log(c.dotAll);

// let f=/./i;
// console.log(f.dotAll);

// let a=/[bc]at/i;
// console.log(a.exec("cCat"));
// console.log(a.exec("ccAt"));
// console.log(a.exec("cCat").index);
// console.log(a.exec("Ccat").input);
// // console.log(a.test("ccat"));

// let a=/^\(?0\d{3}\)?-\d{7}$|^0\d{3}-\d{7}$/;
// console.log(a.test("0101-3344567"));

// let a="let cat fat bat";
// let b=/.at/g;

// let c=b.exec(a);
// console.log(c.index);
// console.log(c.input);
// console.log(c[0]);
// console.log(b.lastIndex);
// // console.log(b.exec(a));
// // console.log(b.exec(a).index);
// // console.log(b.exec(a).input);
// // console.log(b.exec(a).lastIndex);
// c=b.exec(a);
// console.log(c.index);
// console.log(c.input);
// console.log(c[0]);
// console.log(b.lastIndex);

// let a="cat fat bat ";
// let b=/.at/y;

// let c=b.exec(a);

// console.log(c.index);
// console.log(c.input);
// console.log(b.lastIndex);

// b.lastIndex=4;
// c=b.exec(a);
// console.log(c.index);
// console.log(c.input);
// console.log(b.lastIndex);

// let b=/.at/i;
// console.log(b.valueOf());

// let c=new RegExp(".at","i");
// console.log(c.valueOf());

// let a="it has been a long way";
// let b=/(.)ee(.)/;
// let c=b.exec(a);

// if (b.test(a)){
//     console.log(c.input);
//     console.log(RegExp.lastMatch);
//     console.log(RegExp.leftContext);
//     console.log(RegExp.rightContext);
//     console.log(RegExp.lastParen);
// }

// let a="hello world";
// let b=a.substring(2)
// // console.log(b);

// let a=new Number(10);

// if (a){
//     console.log("哈哈哈");
// }
// console.log( typeof a);

// console.log(a instanceof Number);

// console.log(String(20));

// let a=20;
// console.log(a.toString(2));

// let a=10.495;
// console.log(a.toFixed(2));

// console.log(String.fromCodePoint(128522));

// let message1="ab😊de";
// let message2="abcde";

// console.log(message1.charAt(0));
// console.log(message1.charAt(1));
// console.log(message1.charAt(2));
// console.log(message1.charAt(3));
// console.log(message1.charAt(4));

// console.log(message1.codePointAt(0));
// console.log(message1.codePointAt(1));
// console.log(message1.codePointAt(2));
// console.log(message1.codePointAt(4));
// console.log(message1.codePointAt(5));

// // console.log(String.fromCharCode(97));
// // console.log(String.fromCharCode(98));
// // console.log(String.fromCharCode(99));
// // console.log(String.fromCharCode(100));
// // console.log(String.fromCharCode(101));

// console.log(String.fromCharCode(97,98,55357,56842,100,101));

// console.log(String.fromCodePoint(97,98,128522,100,101));

// console.log([..."ab😊de"]);
// let message="ab😊de"

// // for(let i=0;i<message.length;i++){

// // }

// // for (const i of message){
// //     console.log(i);
// // }

// for (const i in message){
//     console.log(i);
// // }b
// let a=String.fromCharCode(0x00c5);
// let b=String.fromCharCode(0x212B);

// console.log(a.normalize("NFC")===b.normalize("NFC"));

// let a="foobarbaz";
// console.log(a.indexOf("b"));
// console.log(a.lastIndexOf("b"));

// console.log(a.startsWith("foo",1));
// console.log(a.startsWith("bar",3));

// console.log(a.endsWith("baz",1));
// console.log(a.endsWith("bar",6));

// let a=" hello world ";
// console.log(a);
// console.log(a.trim());

// let a="la ";
// console.log(a.repeat(17));\

// let color="red,green,blue,yellow";
// console.log(color.split(","));
// console.log(color.split(",",2));
// console.log(color.split(/[^,]+/));

// let a="foo";

// // console.log(a.padStart("6"));
// // console.log(a.padStart("6","."));
// // console.log(a.padEnd("6"));
// // console.log(a.padEnd("6","."));

// let b=a.padEnd(6,"d");
// console.log(b);
// console.log(b.padStart(2));

// let str="abcde";
// let iterator=str[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // console.log([...str]);

// let a="cat,let,sat,bat";
// let pattern=/.at/g;

// let matcher=a.match(pattern);

// console.log(matcher);

// console.log(pattern.exec(a));

// link();

// // console.log(small());
// let msg="hello world";
// eval(console.log(msg));

// eval("function sayHi(){console.log('hi');}");
// sayHi();

// eval="hi";
// console.log(eval);

// console.log(Math.SQRT2);

// let a=Math.max(3,56,89,93);
// console.log(a);
// let b=Math.min(3,56,89,93);
// console.log(b);

// function getRandom(minValue,maxValue){
//     let total=maxValue-minValue+1;
//     return Math.floor(Math.random()*total+minValue);
// }

// let colorArray=["red","green","blue","yellow","pink","brown","black","white"];
// console.log(colorArray[getRandom(0,colorArray.length-1)]);
// // console.log(getRandom(2,10));

// function funcOf(args){
//     let output="";

//     if (typeof args.name=="string"){
//         output+="Name:"+args.name+"\n";
//     }

//     if (typeof args.age=="number"){
//         output+="Age:"+args.age+"\n";
//     }
//     console.log(output);
// }

// funcOf({
//     name:"heiheihei",
//     age:18
// });

// funcOf({
//     name:"小米"
// })

// let array=new Array(3);
// console.log(array.length);

// let array2=new Array("red","green","blue");
// console.log(array2);

// let array3=[1,2,3,4,5];
// console.log(array3);

// console.log(Array.from("MAtt"));

// const obj={
//     0:1,
//     1:2,
//     2:3,
//     3:4,
//     4:5,
//     length:5
// }

// console.log(Array.from(obj));

// const obj2={
//     *[Symbol.iterator](){
//         yield 1;
//         yield 2;
//         yield 3;
//         yield 4;
//         yield 5;

//     }
// }

// console.log(Array.from(obj2));

// let arr=[1,2,3,4,5];

// let arr2=Array.from(arr);

// console.log(arr2);

// console.log(arr==arr2);

// const m=new Map().set(1,2).set(3,4);
// console.log(Array.from(m));

// const n=new Set().add(1).add(2).add(3).add(4);
// console.log(Array.from(n));

// let a=[1,2,3,4,5];

// if(Array.isArray(a)){
//     console.log(true);
// }else{
// console.log(false);

// }

// console.log([..."matt"]);

// let a=["red","green","blue","black","white"];
// console.log(a.keys());
// console.log(Array.from(a.keys()));

// let a=[0,0,0,0,0];

// console.log(a.fill(5));
// a.fill(0);
// console.log(a.fill(5,3));
// a.fill(0);
// console.log(a.fill(5,1,4));
// a.fill(0);
// console.log(a.fill(5,-1));
// a.fill(0);
// console.log(a.fill(5,-4,-1));

// a.fill(0);
// console.log(a.fill(5,-10));

// a.fill(0);
// console.log(a.fill(5,4,10));

// let a,b=function(){
//     a=[0,1,2,3,4,5,6,7,8,9];
// };

// b();
// console.log(a);
// console.log(a.copyWithin(5));

// b();
// console.log(a.copyWithin(4,1,5));

// b();
// console.log( a.copyWithin(4,-9,-5));

// b();
// console.log( a.copyWithin(4,9,5));

// b();
// console.log( a.copyWithin(4 ,-17,-11));

// let a={
//     toString(){
//         return "a";
//     },

//    toLocaleString(){
//     return "A";
//    }
// }

// let b={
//     toString(){
//         return "b";
//     },
//     toLocaleString(){
//         return "b";
//     }
// }

// let c=[a,b];

// // console.log(c);

// alert(c);
// alert(c.toString());
// alert(c.toLocaleString())

// let a=["red","green","blue","yellow","black","white"];

// console.log(a.join(","));
// console.log(a.join(undefined));

// let color=["red","green","blue","yellow","brown","black","white"];

// let item=color.pop();
// console.log(item);

// let num=color.push("purple");
// console.log(color);
// console.log(num);

// let color=[];
// color.unshift("red","green");
// console.log(color.pop());
// console.log(color.shift());

// let num=[15,10,5,7,9,12];

// // console.log(num.reverse());
// // console.log(num.sort());

// function comparer(val1,val2){
//     if( val1>val2){
//         return 1;
//     }else if(val1<val2){
//         return -1;
//     }else{
//         return 0;
//     }
// }

// console.log(num.sort(comparer));

// console.log(num.sort((a,b)=>a-b));
// console.log(num.sort((a,b)=>a>b?1:a<b?-1:0));

// let color=["red","green","blue"];

// let newColor=["brown","black"];

// newColor[Symbol.isConcatSpreadable]=false;

// console.log(color.concat(newColor));

// let otherColor={
//     // [Symbol.isConcatSpreadable]:true,
//     length:2,
//     0:"pink",
//     1:"white"

// }

// console.log(color.concat(otherColor));

// let num=[
//     {
//         name:"matt",
//         age:18
//     },
//     {
//         name:"jonny",
//         age:88
//     }
// ]

// console.log(num.find((member,index,array)=>member.age<98));
// console.log(num.find((member,index,array)=>member.age<98));
// console.log(num.findIndex((member,index,array)=>member.age<98));

// let num2=[2,4,6];

// console.log(num2.find((member,index,array)=>member<3));

// num2.find(function (member,index,array){
//     console.log(member);
//     console.log(index);
//     console.log(array);
//     return member===6;

// })

// let num=[1,2,3,4,5,4,3,2,1];

// let numEvery=num.every((member,index,array)=>member>2);
// console.log(numEvery);

// let numSome=num.some((member,index,array)=>member>2);
// console.log(numSome);

// let numMap=num.map((member,index,array)=>member**2);
// console.log(numMap);

// let numFilter=num.filter((member,index,array)=>member>2);
// console.log(numFilter);

// let numForEach=num.forEach((member,index,array)=>{
//     console.log(member);
// })

// let num=[1,2,3,4,5];
// let numReduce=num.reduce((pre,cur,index,array)=>pre+cur);
// console.log(numReduce);

// let numReduceRight=num.reduceRight((pre,cur,index,array)=>pre+cur);
// console.log( numReduceRight);

// console.log(view.buffer===buf);
// console.log(view.byteOffset);
// console.log(view.byteLength);

// console.log(view.getInt8(0));
// console.log(view.getInt8(1));
// console.log(view.getInt8(1));
// // console.log(view.getInt8(6));

// console.log(view.getInt16(1));
// console.log(view.getInt16(0));
// console.log(view.getInt16(2));
// console.log(view.getInt16(3));

///////////////////////////////////////////////////////////////////////

// let buf=new ArrayBuffer(2);
// let view=new DataView(buf,0);

// view.setInt8(0,255);

// console.log(view.getInt8(0));
// console.log(view.getInt8(1));
// console.log(view.getInt16(0));

// view.setInt8(1,255);
// console.log(view.getInt16(0));

// let num=100;
// console.log(num.toString(2));

// let buf=new ArrayBuffer(2);
// let view=new DataView(buf);

// view.setUint8(0,0x80);
// view.setUint8(1,0x01);

// //0x8001 正常字节序是从左到右
// //1000 0000 0000 0001;
// console.log(view.getUint8(0));//2^7
// console.log(view.getUint8(1));//1

// console.log(view.getUint16(0));
// // console.log(view.getInt16(0));

// //字节序通过true取反
// console.log(view.getUint8(0,true));
// console.log(view.getUint8(1,true));
// console.log(view.getUint16(0,true));

// // console.log(view.getUint16(3));

// let buf=new ArrayBuffer(16);
// let arr=new Int32Array(buf);
// console.log(arr.length);

// let arr=new Int32Array(6);
// console.log(arr.length);

// let arr=new Int32Array([2,3,4,5]);
// console.log(arr.length);
// console.log(arr);

// let arr2=new Int16Array(arr);
// console.log(arr2);
// console.log(arr2.length);

// console.log(arr2 instanceof Int16Array);

// let arr=Int32Array.from([2,4,6]);
// console.log(arr.length);
// console.log(arr.buffer.byteLength);

// let arr2=Float32Array.of(2.71,3.14,6.28);
// console.log(arr2.length);
// console.log(arr2.BYTES_PER_ELEMENT);
// console.log(arr2.buffer.byteLength);
// console.log(arr2[1]);
// console.log(arr2[5]);

// let arr=new Int32Array(3);
// arr.set([2,4,6]);

// let arr2=new Int32Array(5);
// arr2.set(arr,1);
// // for(const i of arr2){
// //     console.log(arr2[i]);
// // }

// // console.log(arr2);

// let arr3=arr2.subarray(2);
// console.log(arr3.length);
// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr3[3]);

// const ints=new Int8Array(2);

// const unsignedInts=new Uint8Array(2);

// // unsignedInts[1]=256;
// // console.log(unsignedInts);

// // unsignedInts[1]=-1;
// // console.log( unsignedInts);

// // ints[1]=128;
// // console.log(ints);

// ints[1]=-130;
// console.log(ints);

// const s=new Set(["val1","val2","val3"]);

// console.log(s[Symbol.iterator]===s.keys);
// console.log(s.keys===s.values);

// console.log([...s]);

// for(let i of s.values()){
//     console.log(i);
// }

// for (let i of s.entries()){
//     console.log(i);
// }

// s.forEach((val,dupval)=>console.log(`${val}->${dupval}`))

// let s=new Set(["val1"]);

// for (let val of s){
//     val="newval";
//     console.log(val);
//     console.log(s);
//     console.log(s.has("val1"));
// }

// let objVal={id:1};
// let s=new Set([objVal]);

// for (let val of s){
//     val.id=2;
//     console.log(val);
//     console.log(s);

// }

// let s=new Set("1");
// s.add("2");
// s.add("2");
// console.log(s);

// function powerSet(a){
//     const powerSet =new Set().add(new Set());
//     for(const aValue of a){
//         for (const set of new Set(powerSet)){
//             powerSet.add(new Set(set).add(aValue));
//         }
//     }
//     return powerSet;
// }

// console.log( powerSet([1,2,3]));

// console.log("a");

// const ws=new WeakSet();

// // console.log(ws.has(val1));

// const ws=new WeakSet([val1,val2,val3]);

// console.log(ws);

// let strObj=new String("hhh");

// let ws=new WeakSet([strObj]);

// console.log(ws);
// console.log(ws.has(strObj));

// ws.add(val1);
// ws.add(val2);
// ws.delete(val2)

// console.log(ws.has(val2));

// const val1={id:1},val2={id:2},val3={id:3};

// let ws=new WeakSet().add(val1).add(val2);

// console.log(ws.has(val2));

// let ws=new WeakSet().add({});

// let ws=new WeakSet();

// let obj={
//     val:{}
// }

// ws.add(obj.val);

// function deletefunc(){
//     obj.val=null;
// }

// console.log(ws.has(obj.val));

// const disableElement=new WeakSet();

// let loginButton=document.querySelector("#login");

// disableElement.add(loginButton);

// let a=[1,2,3];
// let b=[...a];
// console.log(b);
// console.log(a==b);

// let iterableThings=[
//     Array.of(1,2),
//     typeArr=Int32Array.from([3,4]),
//     new Map([[5,6],[7,8]]),
//     new Set([9,10])
// ]

// for (let iterableThing of iterableThings){
//     for (const i of iterableThing){
//         console.log(i);
//     }
// }

// let a=Array.of(1,2)
// console.log(a);

// let map1=new Map([[1,2],[3,4]]);

// let map2=new Map(map1);
// console.log(map2);
// console.log(map1);
// console.log(map1==map2);

// let a=[1,2,3,4];

// let b=[0,...a,5,6];
// console.log(b);

// let a=[{}];

// let b=[...a];

// a[0].id=10;

// console.log(b[0]);

// let a=[1,2,3];
// // // let b=...a;

// // let typeArr=Int32Array.of(...a);
// // let typeArr2=Int32Array.from(a);

// // console.log(typeArr);
// // console.log(typeArr2);
// // console.log(typeof typeArr);

// // let b=new Set(a.map((x)=>[x,"val"+x]));

// // console.log(b);

// let map1=new Set([a]);
// console.log(map1);
// let b=[...map1];
// console.log(b);

// // let map1=new Map([[1,2],[3,4]]);

// // let b=[...map1];
// // console.log(b);

// let num=1;
// let obj={};
// console.log(num[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);

// let arr=[1,2,3,4,5];
// let map=new Map([[1,2],[3,4]]);
// let set=new Set([1,2,3,4,5]);
// let typeArr=new Int32Array(arr);
// let other=document.querySelectorAll("div");

// console.log(arr[Symbol.iterator]);
// console.log(map[Symbol.iterator]);
// console.log(set[Symbol.iterator]);
// console.log(typeArr[Symbol.iterator]);
// console.log(other[Symbol.iterator]);

// console.log(arr[Symbol.iterator]());
// console.log(map[Symbol.iterator]());
// console.log(set[Symbol.iterator]());
// console.log(typeArr[Symbol.iterator]());
// console.log(other[Symbol.iterator]());

// let arr=["foo","bar","baz"];

// for (const i of arr){
//     console.log(i);
// }

// let [a,b,c]=arr;
// console.log([a,b,c]);

// let arr2=[...arr];
// console.log(arr2);

// let arr3=Array.from(arr);
// console.log(arr3);

// let set=new Set(arr);
// console.log(set);

// let arr2=arr.map((x,i)=>[x,i]);
// console.log(arr2);

// let map=new Map(arr2);
// console.log(map);

// class fooArray extends Array{

// }
// let foo=new fooArray("foo","bar","baz");

// for (const i of foo){
//     console.log(i);
// }

// let arr=["foo","bar","baz"];

// console.log(arr[Symbol.iterator]);
// console.log(arr[Symbol.iterator]());

// let arrIte=arr[Symbol.iterator]();

// console.log(arrIte.next());
// console.log(arrIte.next());
// // console.log(arrIte.next());
// // console.log(arrIte.next());

// // let iter=arr[Symbol.iterator]();

// // console.log(iter.next());
// // console.log(iter.next());

// arr.splice(2,0,"hhh");

// console.log(arrIte.next());
// console.log(arrIte.next());

// let a=new WeakMap();
// console.log(a[Symbol.iterator]);

// class Counter{
//     constructor(limit){
//         this.count=1;
//         this.limit=limit;
//     }

//     next(){
//         if(this.count<=this.limit){
//             return {done:false,value:this.count++};
//         }else{
//             return {done:true,value:undefined};
//         }
//     }
//     [Symbol.iterator](){
//         return this;
//     }

// }

// let counter=new Counter(3);

// for (let i of counter){
//     console.log(i);
// }

// // for (let i of counter){
// //     console.log(i);
// // }

// // for (let i of counter){
// //     console.log(i);
// // }

// // let counter2=new Counter(3)

// let count=new Counter(3);
// for (let i of count){
//     console.log(i);
// }

// for (let i of count){
//     console.log(i);
// }for (let i of count){
//     console.log(i);
// // }

// let arr=["foo","bar","baz"];
// let iter=arr[Symbol.iterator]();

// for (const i of arr){
//     console.log(i);
// }

// for (const i of iter){
//     console.log(i);
// }

// class Counter{
//     constructor(limit){
//         this.count=1;
//         this.limit=limit;
//     }
//     [Symbol.iterator](){
//         let count=this.count,limit=this.limit;
//         return {
//             next(){
//                 if(count<=limit){
//                     return {done:false,value:count++};
//                 }else{
//                     return {done:true,value:undefined};
//                 }
//             },
//             return(){
//                 console.log("exit early");
//                 return {done:true};
//             }
//         }

//     }
// }

// let counterObj=new Counter(5);
// let counter=counterObj[Symbol.iterator]()

// for (let i of counter){

//     console.log(i);
//     if (i>2){
//         break;
//     }
// }

// for (const i of counter){
//     console.log(i);
// }

// // let arr=[1,2,3,4,5];
// // let iter=arr[Symbol.iterator]();

// // for (const i of iter){

// //     console.log(i);
// //     if (i>2){
// //         break;
// //     }
// // }

// // for (const i of iter){

// //     console.log(i);
// // }

// // try{
// //     for (let i of counter){
// //         if (i>2){
// //             throw "err";
// //         }
// //         console.log(i);
// //     }
// // // }catch(e){}

// // let [a,b]=counter
// // console.log([a,b]);

// // let arr=[1,2,3,4,5];
// let arr=["foo","bar","baz"]

// let a=new Counter(5)
// for ( const i of a){

//     if(i>3){
//         break;
//     }
//     console.log(i);
// }

// for ( const i of a){
//     if(i>3){
//         break;
//     }
//     console.log(i);
// }

// function * fn(){};

// let newFunc =function*(){

// }

// let foo={
//     *function(){

//     }
// }

// class Foo{
//    static *newFunc(){}
// // }
// function *newFunc(){};

// let a=newFunc();

// console.log(a);
// console.log(a.next());

// function *newFoo(){
//     // return ["foo","bar"];
//     console.log("hello");
// }

// let a=newFoo();

// console.log(a);
// a.next();
// console.log(a.next());

// function * num(n){
//     if(n>0){
//         yield* num(n-1);
//         yield n-1;
//     }

// }

// // console.log(num(3));

// for (const i of num(3)){
//     console.log(i);
// }

// function *func(n){
//     if(n>0){
//         yield * func(n-1);
//         yield n-1;
//     }

// }

// for(const i of func(3)){
//     console.log(i);
// }

// class Node{
//     constructor(id){
//         this.id=id;
//         this.neighbors=new Set();

//     }

//     connect(y){
//         if(this.id!==y.id){
//             this.neighbors.add(y);
//             y.neighbors.add(this);
//         }

//     }
// }

// class RandomGraph{
//     constructor(size){
//         this.nodes=new Set();

//         for (let i=0;i<size;i++){
//             this.nodes.add(new Node(i));
//         }

//         let random=1/size;
//         for (const x of this.nodes){
//             for (const y of this.nodes){
//                 if (Math.random()>random){
//                     x.connect(y);
//                 }
//             }
//         }
//     }
//     print(){
//         for (let node of this.nodes){
//             let ids=[...node.neighbors].map((x)=>x.id).join(",");
//             console.log(`${node.id}:${ids}`);
//         }
//     }

//   isConned(){

//     let visitednode=new Set();

//     function*checkAndPush(nodes){
//         for(let node of nodes){
//             if(!visitednode.has(node)){
//                 yield node;
//                 yield * checkAndPush(node.neighbors)
//             }
//         }
//     }

//     let firstNode=this.nodes[Symbol.iterator]().next().value;

// for(let node of checkAndPush([firstNode])){
//     visitednode.add(node);
// }

//     return this.nodes.size==visitednode.size
//   }

// }

// let numGraph=new RandomGraph(6);

// console.log(numGraph.isConned());

// numGraph.print();

// class Foo{
//     constructor(){
//         this.value=[1,2,3];
//     }
//     *[Symbol.iterator](){
//         yield * this.value;
//     }
// }

// let foo=new Foo();

// for (const x of foo){
//     // console.log(typeof x);
//     console.log(x);
// }

// function * num(){
//     for(let x of [1,2,3]){
//         console.log(x);
//     }
// }

// let n=num();

// console.log(n);
// console.log(n.return(4));
// console.log(n);
// console.log(n.next());
// console.log(n.next());

// function * num(){
//     for (const x of [1,2,3]){
//         yield x;
//     }
// }

// let n=num();

// for(let x of n){
//     if(x>1){
//         n.return(4)
//     }
//     console.log(x);
// }

// function * count(){
//     for (let x of [1,2,3]){
//         yield x;
//     }
// }

// let g =count();
// console.log(g);

// try{
//     g.throw("foo")
// }catch(e){
//     console.log(e);
// }

// console.log(g);

// function * count(){
//     for (let x of [1,2,3]){
//         try{
//             yield x
//         }catch(e){
//             console.log(e);
//         }
//     }
// }

// let g=count();

// console.log(g);
// console.log(g.next());
// g.throw("foo");
// console.log(g.next());

// let obj={};
// Object.defineProperty(obj,"name",{
//     value:"matt",
// })

// console.log(obj.name);

// let book={
//     year_:2017,
//     edition:1,

// }
// Object.defineProperty(book,"year",{
//     get(){
//         return this.year_;
//     },
//     set(newValue){
//         if(newValue>2017){
//             this.year_=newValue;
//             this.edition+=newValue-2017;
//         }
//     }
// });
// book.year=2018;
// console.log(book.edition);

// let foo={
//     name:"fooname"
// }

// Object.defineProperty(foo,"name",{
//     // writable:false
//     configurable:false

// })
// console.log(foo.name);
// // foo.name="matt";
// delete foo.name;
// console.log(foo.name);

// let foo={
//     year_:2022,
//     edition:1
// }

// Object.defineProperty(foo,"year",{
//     get(){
//         return this.year_;
//     },
//     set(newYear){
//         if(newYear>2022){
//             this.year_=newYear;
//             this.edition+=newYear-2022;
//         }
//     }
// })
// // foo.year.set(2023)
// foo.year=2027;
// console.log(foo.year);
// console.log(foo.edition);
// // console.log();

// let foo={};

// Object.defineProperties(foo,{
//     year_:{
//         value:2022
//     },
//     edition:{
//         value:1
//     },
//     year:{
//         get(){
//             return this.year_;
// //         },
//         set(newYear){
//             if(newYear>2022){
//                 this.year_=newYear;
//                 this.edition+=newYear-2022;
//             }
//         }
//     }

// })

// let prototype=Object.getOwnPropertyDescriptor(foo,"edition");

// console.log(prototype.value);
// console.log(prototype.configurable);
// console.log(prototype.enumerable);
// console.log(prototype.writable);

// let prototype2=Object.getOwnPropertyDescriptor(foo,"year");

// console.log(prototype2.configurable);
// console.log( prototype2.enumerable);
// console.log( prototype2.get);
// console.log(prototype2.set);

// let person={
//     name:"matt",
//     age:10
// }
// let prototype=Object.getOwnPropertyDescriptors(person)

// console.log(prototype);

// let foo={
//     name:"fooname"
// }

// Object.defineProperty(foo,"age",{
//     configurable:true,
//     enumerable:true,
//     value:20,
//     writable:true
// })

// let prototype=Object.getOwnPropertyDescriptors(foo);
// console.log(prototype);

// let dest={};

// let src={id:"src"};

// result=Object.assign(dest,src);
// console.log(result===dest);
// console.log(result===src);
// console.log(dest);

// let dest={};

// Object.assign(dest,{id:"1"},{id:2});
// console.log(dest);

// let dest={
//     year:"oldYear",
//     set a(newYear){
//         console.log(`happy ${newYear}`);
//         this.year=newYear+1;
//     },
//     get a(){
//         return this.year

//     }
// };

// let src={
//     get a(){
//         console.log("welcome to new year" );
//         return "newYear"
//     }
// }

// Object.assign(dest,src);

// console.log(dest.a);
// console.log(" ");
// console.log(src.a);

// let foo={
//     get a(){
//         return 1;
//     },
//     get a(){
//         return 2;
//     }
// }

// console.log(foo.a);

// let foo={};

// let src={
//     a:"foo",
//     b:{},
//     get c(){
//         console.log("panic");
//         throw new Error()
//     },
//     d:"bar"
// }
// try{
//     Object.assign(foo,src);

// }catch(e){}

// console.log(foo);
// console.log(foo.b===src.b);

// console.log(+0===0);
// console.log(+0===-0);
// console.log(0===-0);

// console.log(Object.is(+0,0));
// console.log(Object.is(0,-0));
// console.log(Object.is(+0,-0));

// console.log(NaN===NaN);

// console.log(Object.is(NaN,NaN));

// function allSame(x,...args){
//     return Object.is(x,args[0])&&(args.length<2||allSame(...args))
// }
// console.log(Object.is(NaN,NaN,NaN,NaN,NaN));
// console.log(Object.is(0,1));
// let a2=allSame("a",["a","a","a"]);
// console.log(a2);

// let a="a";
// let arg=["a","a","a"];

// console.log(Object.is(a,arg[0]));

// let name="foo";
// let foo={
//     name
// }
// console.log(foo.name);

// console.log("abc");

// function superfunc(age){
//   this.name="foo",
//   this.age=age,
//   this.arr=[1,2,3,4,5]
// }

// function subfunc(){
//   this.name="bar";
//   // this.age=18
// }

// subfunc.prototype=new superfunc();

// let people=new subfunc(29);
// console.log(people.age);
// console.log(people.arr);

// function SuperValue(){
//   this.property=true;
// }

// SuperValue.prototype.getSuperValue=function(){
//   return this.property;
// }

// function SubValue(){
//   this.Subproperty=false;
// }

// SubValue.prototype=new SuperValue()

// SubValue.prototype.getSubValue=function(){
//   return this.Subproperty;
// }

// SubValue.prototype.getSuperValue=function(){
//   return false;
// }

// let instance=new SubValue();

// console.log(instance.getSuperValue());

// function SuperType(){
//   this.prototype=true;
// }

// SuperType.prototype.getSuperValue=function(){
//   return this.prototype;
// }

// function SubType(){
//   this.subprototype=false;
// }

// SubType.prototype=new SuperType();

// SubType.prototype={
//   getSubValue(){
//     return this.prototype
//   },
//   anyOtherMethod(){
//     return false;
//   }
// }
// let instance =new SubType();

// console.log(instance.getSuperValue());

// function SuperType(){
//   this.color=["red","green","blue"];
// }

// SuperType.prototype.getSuperValue=function(){
//   return this.color;
// }

// function SubType(){

// }
// SubType.prototype=new SuperType();

// let instance=new SubType();
// console.log(instance.getSuperValue());

// instance.getSuperValue().push

// instance.color.push("black");
// console.log(instance.getSuperValue());

// let instance2=new SubType();

// console.log(instance2.getSuperValue());

// function SuperType(){
//   this.color=["red","green","blue"];
// }

// SuperType.prototype.getSuperValue=function(){
//   return this.color;
// }

// function SubType(){
//   SuperType.call(this)
// }

// SubType.prototype=new SuperType();

// let instance1=new SubType();
// console.log(instance1.getSuperValue());
// instance1.color.push("black");
// console.log(instance1.getSuperValue());

// let instance2=new SubType();
// console.log(instance2.getSuperValue());

// function SuperType(name){
// this.name=name;
// }
// SuperType.prototype.getSuperValue=function(){
//   return this.name;
// }

// function SubType(){
//   SuperType.call(this,"matt");
// }

// SubType.prototype=new SuperType();

// let instance=new SubType();

// console.log(instance.getSuperValue());

// function object(o){
//   function F(){} ;
//   F.prototype=o;
//   return F();
// }

// let Person={
//   name:"matt",
//   age:28
// }

// let anotherPerson=object(Person);

// anotherPerson.prototype.age=19;
// anotherPerson.prototype.name="Nicolace"
// console.log(anotherPerson);

// function object(o){
//   function F(){}
//   F.prototype=o;
//   return new F();
// }

// let person={
//   name:"Nicolaxe",
//   friends:["Van","Court"]
// }

// let anotherPerson=object(person);
// anotherPerson.name="Gerg";
// anotherPerson.friends.push("Rob");
// console.log(anotherPerson);

// class Foo{

// }
// console.log(Foo);

// let foo=class Foo{

// }
// console.log(foo.name);
// console.log(Foo);

// function creat(object){
//   let F=function(){};
//   F.prototype=object;
//   return new F();
// }

// let Person={
//   name:"matt",
//   friends:["rob","mike","susan"]
// }

// let john=creat(Person);
// john.name="john";
// john.friends.push("aha");
// console.log(john.friends);
// console.log(john.name);

// let daisy=creat(Person);
// daisy.name="daisy";
// daisy.friends.push("jonny")
// console.log(daisy.friends);

// let Person={
//   name:"matt",
//   friends:["nash","simon","lousrike"]
// }

// let fox=Object.create(Person);
// fox.name="fox";
// fox.friends.push("wolf");
// console.log(fox.name);
// console.log(fox.friends);

// let banana=Object.create(Person,{
//   name:{
//     value:"banana"
//   }
// })
// console.log(banana.name);

// function creatAnotherPerson(object){
//   let anotherPerson=Object.create(object);
//   anotherPerson.sayHi=function(){
//     console.log("hello");
//   }
//   return anotherPerson;
// }

// let Person={
//   name:"matt",
//   friends:["nicolase","crepper"]
// }

// let zombie=creatAnotherPerson(Person);

// // console.log(zombie.sayHi());
// zombie.sayHi()

// let john=creatAnotherPerson(Person)
// console.log(john.sayHi());

// function prototypeRebuild(SuperType,SubType){
//   let prototype=Object.create(SuperType.prototype);
//   prototype.constructor=SubType;
//   SubType.prototype=prototype;
// }

// // let SuperType()

// function SuperType(name){
//   this.name=name;
//   this.friends=["marsk","jackson"];
// }

// SuperType.prototype.sayName=function(){
//   console.log(this.name);
// }

// function SubType(){
//   SuperType.call(this,"matt");
//   this.age=27;
// }

// prototypeRebuild(SuperType,SubType);
// let matt=new SubType()

// console.log(matt.name);

// class Person{};

// const Animals=class {};

// console.log(couldUpFunc());
// function couldUpFunc(){}
// console.log(couldUpFunc);

// console.log(couldUpVar);
// var couldUpVar=function(){}
// console.log(couldUpVar);

// console.log(couldUpClass);
// var couldUpClass=class{};
// console.log(couldUpClass);

// console.log(CantUpClass);
// class CantUpClass{};
// console.log( CantUpClass);

// {
//   function func(){};
//   class Foo{};
// }

// console.log(func);
// console.log(foo);

// class Foo{};

// class Bar{
//   constructor(){}
// };

// class Baz{
//   get myBaz(){}
// };

// class Qux{
//   static myQux(){}
// };

// let person=class Person{
//   identify(){
//     console.log(person.name,Person.name);
//   }
// }

// let p=new person;

// p.identify()
// // person.identify()
// console.log(person.name);
// // console.log(Person.name);
// console.log();

// class Animals{
//   identify(){
//     console.log(Animals.name);
//   }
// }

// let a=new Animals();
// a.identify();
// // console.log(a.name);
// // HTMLFormControlsCollection()

// let foo={
//   id:"foo"
// }
// let bar={};

// let proxy=new Proxy(foo,bar);

// console.log(foo.id);
// console.log(proxy.id);

// foo.id="bar";
// console.log(foo.id);
// console.log(proxy.id);

// proxy.id="proxy"
// console.log(foo.id);
// console.log(proxy.id);

// console.log(foo.hasOwnProperty("id"));
// console.log(proxy.hasOwnProperty("id"));

// // console.log(proxy instanceof Proxy);
// // console.log(foo instanceof Proxy);

// console.log(proxy === foo);

// let foo={
//   id:"foo"
// }
// let bar={
//   get(){
//     return "代理"
//   }

// }

// let proxy=new Proxy(foo,bar)

// console.log(foo.id);
// console.log(proxy.id);

// console.log(foo["id"]);
// console.log(proxy["id"]);

// console.log(Object.create(foo)["id"]);
// console.log(Object.create(proxy)["id"]);

// let foo={
//   id:"foo"
// }

// let bar={
//   get(trapTarget,property,proxy){
//     trapTarget[property]="bar"
//     return trapTarget[property]+1;
//   }
// }

// let proxy=new Proxy(foo,bar)

// console.log(foo.id);
// // console.log(foo.id.get());
// console.log(proxy.id);

// let foo={
//   id:"foo"
// }

// let bar={
//   get(){
//     return Reflect.get(...arguments)
//   }
// }

// let proxy=new Proxy(foo,bar)

// console.log(foo.id);

// console.log(proxy.id);

// let a=[1,2,3,4,5];
// console.log(a.join(",","."));

// let foo={
//   name:"fooname"
// };

// let bar={};

// let proxy=new Proxy(foo,bar);

// console.log(foo.name);
// console.log(proxy.name);

// foo.name="barname"
// console.log(foo.name);
// console.log(proxy.name);

// proxy.name="proxy"
// console.log(foo.name);
// console.log(proxy.name);

// console.log(foo === proxy);

// console.log(proxy instanceof Proxy);
// console.log(proxy instanceof foo);

// let foo={
//   name:"fooname"
// }

// let bar={
//   get(){
//     return "193E578E.png"
//   }
// }

// let proxy=new Proxy(foo,bar);

// console.log(foo.name);
// console.log(proxy.name);

// let foo={
//   name:"fooname"
// }
// let bar={
//   get(){
//     return "heihh"
//   }
// }

// let proxy=new Proxy(foo,bar);

// console.log(proxy.name);
// console.log(proxy["name"]);
// console.log(Object.create(proxy)["name"]);

// let foo={
//   name:"fooname"
// }

// let bar={
//   get(target,property,reviewer){
//     return target[property]
//   }
// }

// let proxy=new Proxy(foo,bar);

// console.log(proxy.name);

// let target={
//   name:"foo"
// }

// let handler={
//   get(){
//     return Reflect.get(...arguments)
//   },
//   set:Reflect.set
// }

// let proxy=new Proxy(target,Reflect);

// console.log(proxy.name);

// proxy.name="bar";
// console.log(target.name);

// let target={
//   name:"foo"
// }

// let handler={
//   get(){
//     let symbol="!!!";
//     return Reflect.get(...arguments)+symbol
//   }
// }

// let proxy=new Proxy(target,handler);

// console.log(proxy.name);

// let target={}
// Object.defineProperty(target,"name",{
//   configurable:false,
//   value:"foo",
//   writable:false
// })

// let handler={
//   get(){
//     return "bar"
//   }
// }

// let proxy=new Proxy(target,handler);

// console.log(proxy.name);

// let target={
//   name:"foo"
// }
// let handler={
//   get:Reflect.get
// }
// let {proxy,reve}=Proxy.revocable(target,handler);

// console.log(proxy.name);
// reve()
// console.log(proxy.name);

// let foo={}

// // try{

// if(Reflect.defineProperty(foo,"name",{age:"bar"})){
//   console.log("success");
// }else{
//   console.log("fail");
// }

// let foo={
//   name:"fooo"
// }

// let proxy=new Proxy(foo,{
//   get(){
//     console.log("catch one");
//     return Reflect.get(...arguments)
//   }
// })

// let otherProxy=new Proxy(proxy,{
//   get(){
//     console.log("catch two");
//     return Reflect.get(...arguments)
//   }
// })

// console.log(otherProxy.name);

// let arr=[1,3,5,7,9]
// console.log(Math.max(...arr));
// console.log(Math.max.apply(null,arr));

// let wm=new WeakMap()

// class Foo{
//   constructor(id){
//     wm.set(this,id)
//   }

//   set id(id){
//     wm.set(this,id)
//   }
//   get id(){
//     return wm.get(this)
//   }
// }

// let people=new Foo(1);
// console.log(people.id);

// people.id=2;
// console.log(people.id);

// let proxy=new Proxy(people,{})

// console.log(proxy.id);
// proxy.id=5;
// console.log(proxy.id);

// let proxy=new Proxy(Foo,{});
// let instanceOfProxy=new proxy(123)

// console.log(instanceOfProxy.id);
// console.log(people.id);

// let foo={
//   name:"fooo"
// }
// let proxy=new Proxy(foo,{})

// console.log(proxy instanceof Proxy);

// const date=new Date();
// const proxy=new Proxy(date,{})

// console.log(proxy instanceof Date);
// proxy.getDate()

// let people={
//   name:"amtt"
// }

// let proxy=new Proxy(people,{
//   get(target,property,reciver){
//     console.log(`get ${property}`);
//     return Reflect.get(...arguments)
//   },
//   set(target,property,value,reciver){
//     console.log(`set ${property}=${value}`);
//   }
// })

// console.log(proxy.name);

// proxy.age=27

// let hiddenList=["foo","bar"]

// let people={
//   foo:"foo",
//   bar:"bar",
//   baz:"baz"
// }
// let proxy=new Proxy(people,{
//   get(target,property,reciver){
//     if(hiddenList.includes(property)){
//       return undefined
//     }else{
//       return Reflect.get(...arguments)
//     }
//   },
//   has(target,property){
//     if(hiddenList.includes(property)){
//       return undefined
//     }else{
//       return Reflect.get(...arguments)
//     }
//   }
// })

// console.log(proxy.foo);
// console.log("foo" in proxy);

// let foo={
//   num:1
// }

// let proxy=new Proxy(foo,{
//   set(target,property,value,reciver){
//     if(typeof value!==Number){
//      return false
//   }else{
//     return Reflect.set(...arguments)
//   }
// }})

// proxy.num=2;
// console.log(proxy.num);
// console.log(foo.num);
// proxy.num="2";
// console.log(proxy.num="2");

// let target ={
//   num:1
// }
// let proxy=new Proxy(target,{
//   set(target,property,value,reciver){
//     if(typeof value!=="number"){
//       return false
//     }else{
//       return Reflect.set(...arguments)
//     }
//   }
// })
// proxy.num=3;
// console.log(proxy.num);
// proxy.num="3";
// console.log(proxy.num);
// console.log(target.num);

// console.log(

// );

// let o={
//   age:23
// }

// let proxy2=new Proxy(o,{})

// console.log(proxy2.age);

// proxy2.age=25
// console.log(o.age);

// let target={
//   return
// }

// function median(...nums){
//   return nums.sort()[Math.floor(nums.length/2)]
// }

// let proxy=new Proxy(median,{
//   apply(target,thisArg,argArray){
//     for(arg of argArray){
//       if(typeof arg !== "number"){
//         return false
//       }else{
//         return Reflect.apply(...arguments)
//       }
//     }
//   }
// })

// console.log(proxy(4,1,7));

// class Foo{
//   constructor(id){
//     this.id_=id
//   }

// }

// let proxy=new Proxy(Foo,{
//   construct(target,argArray,newTarget){
//     if(argArray[0]===undefined){
//       throw "need a arg"
//     }
//     return Reflect.construct(...arguments)
//   }
// })

// new proxy(2)
// console.log( new proxy(2).id_);

// function foo(){
//   name="matt";
//   age=27;
//   get(){
//     return name
//   }
// }

// // console.log(func.get());\
// let f=foo()

// console.log(f.get());

// function myObject(){
//   let privateVariable=10;

//   function privateFunction(){
//     return false
//   }

//   this.publicMethod=function(){
//     privateVariable++;
//     return privateFunction()
//   }
// }
// let obj=new myObject();

// console.log(obj.publicMethod());
// // console.log(obj.publicMethod());

// function Person(name){
//   this.getName=function(){
//     return name;
//   }
//   this.setName=function(value){
//     name=value;
//   }
// }
// let person=new Person("matt")
// console.log(person.getName());
// person.setName("nico")
// console.log(person.getName());

// function Foo(){
//   name="matt";
//   age=27;
//   this.getName=function(){
//     return name;

//   }
// }
// let foo=new Foo()
// console.log(foo.getName);

// (function(){

// })()

// function foo(){
//   // let name="matt";
//   var age=10;
//   let num=100
// }

// console.log(name);
// console.log(age);
// console.log(num);

// function foo(){
//   var name="matt"
// }
// console.log(name);

// function application(){
//   let components=new Array()
//   // components.push(new BaseComponent())

//   return {
//     getComponentSum(){
//       return components.length;
//     },
//     addComponent(component){
//       if(typeof component==="object"){
//         components.push(component)
//       }
//     }
//   }

// }
// let a=application();
// console.log(a.getComponentSum());

// a.addComponent({})
// console.log(a.getComponentSum());

// let x=3;
// x=x+3;
// console.log(x);

// let x=3;
// function double(value){
//   value=value*2;
// return value;
// }
// setTimeout(()=>{
//   console.log(double(x));
// }
// , 1000);

// let x=3;

// function handler(value,func){
//   // let value=x;
//   setTimeout(() => {
//    func(value*2)
//   }, 1000);
// }

// function getValue(num){
//   console.log(`I get ${num}`);
// }

// handler(x,getValue)

// setTimeOut有一个有用的返回值,需要在1000ms后返回给getValue这个函数
// 但是使用setTimeOut后会把这个箭头函数加入到消息队列中,不知道什么时候会出列并执行
// 明确一定要在1s后传给这个getValue这个函数,那么可以定义一个处理函数,用于接收这个getValue函数
// 将这个函数作为回调函数,在1s后在调用

// function getValue(value){
//   console.log(`I get ${value}`);
// }

// setTimeout(() => {
//   let value=100;
//   getValue(value);
// }, 1000);

// 这时候getValue不在想得到这个value,而是想得到valueHandle处理过的value

// function valueHandle(value){
//   value=value*2;
//   return value;
// }

// setTimeout(() => {
//   getValue(valueHandle(100));

// }, 1000);

//

// let p=new Promise((resolve,reject)=>{resolve()})

// setTimeout(console.log(p), 1000,p);

// let q=new Promise((resolve,reject)=>reject())

// setTimeout(console.log(q), 1000,q);

// let p=new Promise((resolve,reject)=>{setTimeout(resolve, 1000);})

// console.log(p);
// setTimeout(console.log, 1000,p);
// console.log(p);

// let p=Promise.resolve(7)

// let q=Promise.resolve(8)

// setTimeout(console.log, 0,Promise.resolve(Promise.resolve(p)));

// let p=new Promise((resolve,reject)=>resolve(7));
// let q=Promise.resolve(7)

// setTimeout(console.log, 0,p);
// setTimeout(console.log, 0,q);

// let err=new Promise((resolve,reject)=>reject(new Error("err")));

// let err2=Promise.reject(new Error("err"));

// setTimeout(console.log, 0,err);
// setTimeout(console.log, 0,err2);

// let p=new Promise((resolve,reject)=>reject("reject"))

// setTimeout(console.log, 0,Promise.reject(p));

// try{
//   throw new Error("foo")
// }catch(e){
//   console.log(e);
// }

// try{
//   Promise.reject(new Error("bar"))
// }catch(e){
//   console.log(e);
// }

// 实现thenable接口
// class MyThenable{
//   then(){}
// }

// let p=new Promise((resolve,reject)=>resolve())

// p.then()

// promise.prototype.then()

// function onResolved(id){
//   setTimeout(console.log, 0,id,"resolved","really","resolved");
// }

// function onReject(id){
//   setTimeout(console.log,0,id,"rejected");
// }

// let p1=new Promise((resolve,reject)=>setTimeout(resolve, 3000))
// let p2=new Promise((resolve,reject)=>setTimeout(reject, 3000))

// p1.then(onResolved("p1"),()=>onReject("p1"))
// p2.then(()=>onResolved("p2"),onReject("p2"))

// function onResolved(id){
//   setTimeout(console.log, 0,id,"resolve");
// }

// function onRejected(id){
//   setTimeout(console.log, 0,id,"rejected");
// }

// let p1=new Promise((resolve,reject)=>setTimeout(resolve, 3000))
// let p2=new Promise((resolve,reject)=>setTimeout(reject,3000))

// p1.then("this will be 忽略")
// p2.then(null,()=>onRejected("p2"))

// Promise.prototype.then()

// let p1=new Promise(()=>{})
// let p2=p1.then()

// setTimeout(console.log, 0,p1);
// setTimeout(console.log, 0,p2);

// setTimeout(console.log, 0,p1===p2);

// let p1=new Promise((resolve,reject)=>resolve("foo"))
// let p3=new Promise((resolve,reject)=>resolve("bar"))

// let p2=p1.then()
// let p4=p3.then(()=>)

// setTimeout(console.log, 0,p1);
// setTimeout(console.log, 0,p2);
// setTimeout(console.log, 0,p3);
// setTimeout(console.log, 0,p4);

// let p1=new Promise((resolve,reject)=>setTimeout(() => {

// }, timeout);)

// let p1=Promise.resolve(7)

// function foo(){
//   return "foo"
// }
// let p2=p1.then(()=>foo())

// setTimeout(console.log, 0,p2);

// let p=new Promise((a,b)=>a())

// let p=new Promise((resolve,reject)=>resolve())
// setTimeout(console.log, 0,p);

//用then创立新期约
// then的第一个参数是()=>onResolve,意思是当p1解决的时候,这时用onResolve函数做进一步处理,并返回一个东西,可以利用这个返回值来创建新的期约.
// onResolve可以传入,也可以不传入,也可以传入其他不一样的东西,想要获得期约,就需要传入最起码是对象

//先声明一个已经解决的期约作为父级期约
// let p1=Promise.resolve(7)

//用这个p1来创建其他期约
//创建不传入onResolve参数的期约
// let p2=p1.then()
// setTimeout(console.log,0,p2)

// 创建返回值是对象的期约
//这个对象是由期约建立的,且没有值
// let p3=p1.then(()=>new Promise(()=>{}))
// let p4=p1.then(()=>Promise.resolve())
// let p5=p1.then(()=>Promise.reject())

// setTimeout(console.log,0,p3)
// setTimeout(console.log,0,p4)
// setTimeout(console.log,0,p5)

//这个对象是由期约建立的,且有值

// let p6=p1.then(()=>new Promise((resolve,reject)=>resolve(9)))
// let p7=p1.then(()=>new Promise((resolve,reject)=>reject("foo")))
// let p8=p1.then(()=>Promise.resolve(10))
// let p9=p1.then(()=>Promise.reject("bar"))

// setTimeout(console.log,0,p6)
// setTimeout(console.log,0,p7)
// setTimeout(console.log,0,p8)
// setTimeout(console.log,0,p9)

// 创建onResolve返回值是对象但不是promise关键词创建的
// let p2=p1.then(()=>{})
// let p3=p1.then(()=>undefined)
// let p4=p1.then(()=>{
//   name:"foo"
// })
// setTimeout(console.log,0,p2)
// setTimeout(console.log,0,p3)
// setTimeout(console.log,0,p4)
// 说明用then方法创建的只能是由onResolve返回的期约

// 返回reject的期约
// let p5=p1.then(()=>{throw "bar"})
// setTimeout(console.log,0,p5)

// 返回的对象内部出现错误,那就会建立一个reject的期约,这一点和reject的原理到时很像,这时候可以看做用p5代理监督这个返回的对象,但问题是这个对象内部有问题或者抛出错误才会让期约转化为reject.

// let p6=p1.then(()=> Error("bar"))
// setTimeout(console.log,0,p6)

// 使用onReject来创建新的期约,那必须父级期约是一个状态为reject的期约才行
// let p1=Promise.reject("foo"/)

// 用onRejct和用onResolve是一个思路,同样分不往里面传onReject参数,传参数且返回值是promise构建的,或者返回值是对象或者一个字符串

// 在then里面不传参数
// let p2=p1.then()
// setTimeout(console.log,0,p2)
// 不传参数相当于浅浅的复制一下

// 在then里面传参数但是返回值是由promise定义的
// let p3=p1.then(null,()=>Promise.resolve(8))
// let p4=p1.then(null,()=>Promise.reject("bar"))

// setTimeout(console.log,0,p3)
// setTimeout(console.log,0,p4)
//用promise做返回值的我觉得可以直接当做赋值给新期约

// 在then里面传参数但是返回值是对象或者字符串
// let p5=p1.then(null,()=>"bar")
// let p6=p1.then(null,()=>{
//   return {}
// })
// let p7=p1.then(null,()=>{
//   return "foo"
// })

// setTimeout(console.log,0,p5)
// setTimeout(console.log,0,p6)
// setTimeout(console.log,0,p7)
// 如果没有显式的返回语句(例如return或者箭头函数不加{}),就会promise.resolve包装成undefine

// 返回error对象,期约不会变为reject状态
// let p8=p1.then(null,()=>Error("bar"))
// setTimeout(console.log,0,p8)

// let p9=p1.then(null,()=>({}))
// setTimeout(console.log,0,p9)
// 箭头函数的{}会被理解为代码块,所以想隐士返回对象就需要用()包裹对象

//
// let p10=p1.then(null,()=>{throw "bar"})

// setTimeout(console.log,0,p10)
// 在执行onReject过程中出现问题会直接给新期约,让他状态为reject

// reject和finally的具体用法

// 一般reject和promise.then(null,onReject)一样

// let p=Promise.reject("foo")

// let rejectHandler=function (e){
//   // console.log("p is reject");
//   setTimeout(console.log, 0,"reject");
// }

// p.then(null,rejectHandler)

// p.catch(rejectHandler)

// 用catch创建新的期约,与用onReject处理函数创建方式一样

// let p=Promise.reject("foo")

// let p2=p.catch()

// setTimeout(console.log,0,p2)

// let p3=p.catch(()=>Promise.resolve(7))

// setTimeout(console.log,0,p3)

// let p4=p.catch(()=>"foo")
// setTimeout(console.log,0,p4)

// let p5=p.catch(()=>{throw new Error("error")})
// setTimeout(console.log,0,p5)

// finally与catch有很大不同,因为finally不论期约状态变化为解决还是拒绝都会执行,这一点和finally没有办法知道期约的状态有关

// let p1=Promise.resolve(8)
// let p2=Promise.reject("foo")

// let onFinally=function(e){
//   setTimeout(console.log,0,"finally")
// }

// p1.finally(onFinally)
// p2.finally(onFinally)
// // finally看起来不是一个处理函数

// finally同样可以创建新的期约,不过新的期约与then或者catch方法创建的有很大的不同

// 与then和catch方法创建新的期约最大不同在于,有关得到期约为resolve状态的方法均失效,变成浅复制

// let p1=p.finally()
// setTimeout(console.log,0,p1)

// let p2=p.finally(()=>{})
// setTimeout(console.log,0,p2)

// let p3=p.finally(()=>"foo")
// setTimeout(console.log,0,p3)

// let p4=p.finally(()=>Promise.resolve(7))
// setTimeout(console.log,0,p4)

// let p5=p.finally(()=>undefined)
// setTimeout(console.log,0,p5)

// 对于创建新期约的状态为pendding和reejct的则不会影响

// let p=Promise.resolve(7)

// let p2=p.finally(()=>Promise.reject("foo"))
// setTimeout(console.log,0,p2)

// let p3=p.finally(()=>{throw "foo"})
// setTimeout(console.log,0,p3)

// let p4=p.finally(()=>new Promise(()=>{}))
// setTimeout(console.log,0,p4)

// 即使是pendding状态,一旦变成resolve状态依旧会执行浅复制

// let p=Promise.resolve(7)

// // 返回1s后变成resolve状态的期约
// let p2=p.finally(()=>new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000)
// }))

// setTimeout(console.log,0,p2)
// // 2s 之后
// setTimeout(console.log,2000,p2)

// 非重入期约方法
// 非重入期约方法一共涉及四个,then()方法中的onResolve(和onReject(),catch(),finally(),执行到他们时会将其推入到消息队列中,然后继续执行他们后面的代码.

// let p=new Promise((resolve,reject)=>{resolve(7)})

// p.then(()=>console.log("onResolve 后执行"))

// console.log("先执行");

// 在尝试onReject,catch和finally

// 新建一个reject状态的p用作父级期约
// let p=Promise.reject("foo")
// p.then(null,(e)=>console.log("onReject 后执行"))
// p.catch((e)=>console.log("catch 后执行"))
// p.finally(()=>console.log("finally 后执行"))

// console.log("先执行");
// 可以发现非重入的执行顺序自上而下

// 期约在状态改变的时候会产生一个值或者产生一个拒绝理由,这个理由可以被处理函数接收到
// let p1=new Promise((resolve,reject)=>resolve(7))
// p1.then((e)=>console.log(e))

// let p2=Promise.reject(new Error("foo"))
// p2.catch((e)=>console.log(e))

// 拒绝期约类似于throw(),因为他们都代表一种程序状态,也就是需要中断或者处理
// let p1=Promise.reject(Error("foo"))
// let p2=new Promise((resolve,reject)=>{throw Error("foo")})
// let p3=Promise.resolve().then(()=>{throw Error("bar")})

// setTimeout(console.log,0,p1)
// setTimeout(console.log,0,p2)
// setTimeout(console.log,0,p3)

// 最好用对象来代表拒绝理由,因为使用对象作为拒绝理由会让浏览器捕获错误对象中的栈追踪信息,更加有利于调试
// let p1=Promise.reject("foo")
// let p2=Promise.reject(Error("foo"))

// setTimeout(console.log,0,p1)
// setTimeout(console.log,0,p2)

// 异常与拒绝期约在上下文中的执行顺序不同,异常被检测出后会直接停止程序的运行,拒绝期约会继续下面的代码执行
// throw "foo";
// console.log("bar");

// let p1=Promise.reject(Error("foo"))
// // 由于错误实际在消息队列中异步抛出的,下面的代码仍能执行
// console.log("仍能执行");

// 同样异步错误只能异步捕获
// try{
//   let p2=Promise.reject(Error("foo"))
// }catch(e){
//   console.log(e);
// }
// 使用普通的try...catch语句无法捕获

// let p2=Promise.reject(Error("foo"))
// p2.catch((e)=>console.log(e))
// 捕获成功

// 在执行函数中仍能使用try...catch..捕获错误
// let p1=new Promise((resolve,reject)=>{
//   try{
//     throw "err"
//   }catch(e){
//     console.log(e);
//   }
//   resolve()
// })

// setTimeout(console.log,0,p1)

// 期约连锁:由于期约的方法会产生新的期约,那么利用旧的处理过的期约进一步处理,就可以得到我们想要的结果

// let arr=[]
// let p=new Promise((resolve,reject)=>{setTimeout(resolve,1000)})

// p.then(()=>{arr.push("This")})
//  .then(()=>{arr.push("is")})
//  .then(()=>{arr.push("your")})
//  .then(()=>{arr.push("life")})

// // let str=[...arr]
// // let str=arr.
// let str="";
// for(const i of arr){
// str=i+" ";
// }
// // arr.push("hello")
// console.log(arr);
// console.log(str);
// ?????????????????????????????????????????

// let q=new Promise((resolve,reject)=>{resolve()})

// q.then(()=>Promise.resolve(7))
// // q.then(()=>{return new Promise((resolve,reject)=>{setTimeout(resolve(7),0)})})//不能在第二个then都执行了还没拿到e，如果能不用等待直接拿到e，反而同步会更好用
//  .then((e)=>{console.log(e+8);return Promise.resolve(e+8)})
//  .then((e)=>{console.log(e+9)})
// 虽然使用异步方法来一步一步处理的,但这样的处理方式更像同步,而且同步会处理的更好

// let p=new Promise((resolve,reject)=>{resolve()})

// p.then(()=>{
//   return new Promise((resolve,reject)=>{console.log("first step is over");setTimeout(resolve,10000)})
// }).then(
//   ()=>{
//     return new Promise((resolve,reject)=>{console.log("first step is over");setTimeout(resolve,10000)})
//   }
// ).then(
//   ()=>{
//     return new Promise((resolve,reject)=>{console.log("first step is over");setTimeout(resolve,10000)})
//   }
// )
//用异步的方法处理，下一个then执行之前必须等待上一个执行完毕。

//将期约包装成一个函数
// function delayFunc(str){
//   return new Promise((resolve,reject)=>{
//     console.log(str)
//     setTimeout(resolve,1000)
//   })
// }

// delayFunc("first step").then(()=>delayFunc("second step")).then(()=>delayFunc("third step"))

// let A=new Promise((resolve,reject)=>{console.log("A");setTimeout(resolve,0)})

// let B=A.then(()=>{console.log("B")})
// let C=A.then(()=>console.log("C"))

// let D=B.then(()=>console.log("D"))
// let E=B.then(()=>console.log("E"))
// let F=C.then(()=>console.log("F"))
// let G=B.then(()=>console.log("D"))

//------------------------------------------------------------
// promise.all()内部需要一个可迭代对象,一般是数组,且可迭代对象内部每一个元素都是解决的状态才会让all()产生的期约变成解决状态

// let p=Promise.all([
//   Promise.resolve("7"),
//   new Promise((resolve,reject)=>setTimeout(resolve,1000)),
//   Promise.resolve()
// ])

// p.then(()=>console.log("p is in fulfilled（一秒后）"))

// 如果有期约一直处于pendding状态，那么他也会处于pendding状态
// let p=Promise.all([new Promise(()=>{})])
// setTimeout(console.log,0,p)

// // 如果有一个期约处于reject状态,那么他处于reject状态
// let p=Promise.all([
//   Promise.resolve(),
//   Promise.reject()
// ])
// setTimeout(console.log,0,p)

//当他处于fulfilled状态时,他的值是所以解决状态的期约值组成的数组
// let p=Promise.all([
//   Promise.resolve(7),
//   Promise.resolve(9),
//   Promise.resolve(8)

// ])
// p.then((value)=>{console.log(value)})

// 当他处于reject状态时,他的拒绝理由是第一个产生拒绝的期约的拒绝理由,虽然不会采用其他期约的拒绝理由,但仍会处理这些拒绝的期约,所以不会报错
// let p=Promise.all([
//   Promise.reject(Error("foo")),
//   Promise.reject(Error("bar")),
//   Promise.reject(Error("baz"))

// ])
// p.catch((value)=>setTimeout(console.log,0,value))
//-----------------------------------------------------------------------

// race方法返回一个新期约,这个期约是传入的可枚举对象中首先解决或拒绝期约的镜像,也就是说,谁先解决或拒绝,谁就先被处理.不过依旧不会阻止其他期约的正常运行
// let p=Promise.race([
//   Promise.resolve(7),
//   Promise.resolve(8)
// ])
// p.then((value)=>setTimeout(console.log,0,value))

// 如果传入数字就会默认实现,如果在数组内不传任何内容则认为是待定状态,如果不传入任何参数就会报错
// let p2=Promise.race()
// let p3=Promise.race([])
// let p4=Promise.race([3,4])
// setTimeout(console.log,0,p3)
// p4.then((value)=>setTimeout(console.log,0,value))

// 如果第一个落定的是解决状态的期约,那么合成期约就是解决状态,如果第一个落定的契约是拒绝状态,那么合成期约就是拒绝状态,后续的拒绝理由不会影响合成期约的拒绝理由,但后续的拒绝期约依旧会被静默处理
// let p=Promise.race([
//   Promise.resolve(7),
//   Promise.reject(Error("foo"))
// ])
// setTimeout(console.log,0,p)

// let p2=Promise.race([
//   Promise.reject(Error("foo")),
//   Promise.resolve(7)
// ])
// setTimeout(console.log,0,p2)

// let p3=Promise.race([
//   Promise.reject(Error("foo")),
//   Promise.reject(Error("bar")),
//   Promise.reject(Error("baz"))
// ])// 后续不会报错

// p3.catch((reason)=>setTimeout(console.log,0,reason))//原因只有一个

// 通常我们创建函数都会返回一个或者多个值,然后这个值会进入下一个函数继续产生新的值,期约也可以做到类似的效果
// function addPhone(x){return x+" phoneNumber:12345678"}
// function addAddress(x){return x+" Address:America"}
// function addAge(x){return x+" Age:28"}

// function people(name){
//   return addPhone(addAddress(addAge(name)))//连续带入效果一般
// }

// let van=people("van")
// console.log(van)

// // 用期约的方法处理
// let matt=Promise.resolve("matt")
// let messageOfMatt=matt.then(addAge)
//                       .then(addAddress)
//                       .then(addPhone)
// setTimeout(console.log,0,messageOfMatt)

//let messageOfMatt=matt.then(addAge)
// .then(addAddress)
// .then(addPhone)
// 观察这个结构,发现可以做优化,首先then前面的都是期约,then的参数都是函数,这样可以做循环处理

// let arr=[addAge,addAddress,addPhone];
// let tom=Promise.resolve("tom");
// for (const i of arr){
//   tom=tom.then(i);
// }
// setTimeout(console.log,0,tom)

// // 除了for循环还可以使用数组的归并方法
// let arr=[addAge,addAddress,addPhone];
// let p=arr.reduce((promise,fn)=>promise.then(fn),Promise.resolve("jerry"))
// console.log(p);// 直接打印会处于pending状态
// setTimeout(console.log,0,p)

// 还可以将整体包装为一个函数
// function messageOfX(x,...fns){
//   let p=Promise.resolve(x)
//   return fns.reduce((promise,fn)=>promise.then(fn),p)
// }

// let p2=messageOfX("p2",addAge,addAddress,addPhone)

// p2.then(console.log)

// class Foo{
//   constructor(x,y){
//     this.name=x;
//     this.age=y;
//   }

// }

// class Bar extends Foo{
//   constructor()
// }
// function sleep(num){
//   return new Promise((resolve,reject)=>{
//     setTimeout(resolve,num)
//   })
// }

// async function foo(){

//   const t0=Date.now()
//   await sleep(1500)
//   console.log(Date.now()-t0);
// }
// foo()
// function notify(x){
//   console.log(x)
// }

// arr=["a","b","c","d","e"];
// async function output(x){
//  for (let i=1;i<=x;i++){
//   await new Promise((resolve,reject)=>{setTimeout(()=>{
//     console.log(arr[i-1]);
//     resolve()
//    },1000)})
//    notify(`${20*i}%`)
//  }

// }
// output(arr.length)

// 在es8之前,如果想使用异步函数,就需要在期约的执行器中去定义,这样做每次都要声明一个期约,造成不必要的麻烦,在es8之后推出了async/await关键字,可以让普通函数具有异步特性. 可以理解为使用async的函数等价于执行器函数,而且最终会按照resolve的方法返回

// 箭头函数,普通函数声明,表达式函数都可以使用async
// async function foo(){}
// let bar = async function(){}
// let baz = async ()=>{}

// 使用async的函数与普通函数没有太大区别,唯一区别是返回值会返回一个用resolve包装的期约
// async function foo(){
//   return 1
// }

// let p=foo()
// p.then(()=>setTimeout(console.log,0,p))

// 当然直接返回期约也是可以的
// async function bar(){
//   console.log(1)
//   return Promise.resolve(3)
// }

// bar().then((value)=>setTimeout(console.log,0,value))
// console.log(2);

//-------------------------------------------------------------------
// async function foo() {
//   let thenable = {
//     then(callback) {
//       callback([3, 4, 5]);
//     },
//   };
//   return thenable;
// }
// let arr = [1, 2];
// let p=foo().then((x) => {
//   arr=arr.concat(x)
// }).then(()=>{
//   return new Promise((resolve,reject)=>{
//     resolve(arr)
//   })
// })
// arr=arr.concat([3,4,5])
// console.log();
// setTimeout(console.log,5000,arr)
// arr=
//-----------------------------------------------------------------------

// async的返回值期待一个实现了thenable的接口,如果实现了接口,就可以使用then中的函数对对象解包
// async function foo() {
//   let bar = {
//     then(callback) {
//       callback([3, 4, 5]);
//     },
//   };
//   return bar;
// }
// let p = foo();
// p.then((x) => {
//   let arr = [1, 2];
//   arr = arr.concat(x);
//   console.log(arr);
// });

// 如果在异步函数中抛出错误或者返回一个拒绝的期约,那么也会让返回值成为一个拒绝的期约(也就是在异步函数内生成的错误会被捕获),但是如果声明一个拒绝的期约但是没有用return返回，异步函数是不会捕获的
// async function foo(){
//   throw Error("foo")
// }

// // foo()
// foo().catch((reason)=>{setTimeout(console.log,0,reason)})

// async function bar(){
//   return Promise.reject("bar")
// }

// bar().catch((reason)=>{console.log(reason)})

// async function baz(){
//   console.log(1);
//   Promise.reject(3); //不会捕获拒绝期约产生的错误
//   console.log(2);//出现错误也不会停止下面函数的执行
// }

// console.log(baz());//依旧生成一个期约,但这个期约是解决状态

// 在异步函数中,经常要处理并非立即完成的任务(例如下载安装包),所以就有暂停功能的必要，await可以暂停后面的代码，会尝试对await后面的代码进行解包并拿到其值。
//await可以单独使用，也可以和表达式一起使用

// function foo(){
//   await Promise.resolve("8")//无效代码,因为await必须与异步函数一起使用
// }

//await等待一个期约时,会返回这个期约resolve值
// async function foo() {
//   console.log(await Promise.resolve("8"));
//   // console.log(await Promise.reject("9"));
// }
// foo();

// async function bar() {
//   console.log(await "bar");
// }
// bar();

// await 会期待一个实现then接口的对象,如果await等待的是这类对象,就会尝试解包并获取其值
// async function baz() {
//   let o = {
//     then(callback) {
//       callback("baz");//不太清楚这个then接口到底是怎么在没有传入callback的时候调用并让await解包的
//     },
//   };
//   console.log(await o);
// }
// baz();

// 如果await等待的函数内部出错,就会抛出错误
// async function foo(){
//   await (function(){throw 9})();
// }
// foo()// 如果正常抛出错误,异步函数可以捕获,但如果前面跟着await,那么就不会被捕获

// async function bar(){
//   console.log(1);
//   await Promise.reject(3);
//   console.log(4);//注意这行代码不会执行,与async不同
// }
// bar().catch(console.log)
// console.log(2);

//------------------------------------------------------------------------
// // 新建一个reject状态的p用作父级期约
// let p=Promise.reject("foo")
// p.then(null,(e)=>console.log("onReject 后执行1"))
// p.catch((e)=>console.log("catch 后执行1"))
// p.finally(()=>console.log("finally 后执行1"))

// console.log("先执行1");
// // 可以发现非重入的执行顺序自上而下                     栈内存执行顺序谜题

// // 新建一个reject状态的p用作父级期约
// let q=Promise.reject("foo")
// q.then(null,(e)=>console.log("onReject 后执行"))
// q.catch((e)=>console.log("catch 后执行"))
// q.finally(()=>console.log("finally 后执行"))

// console.log("先执行2");
// // 可以发现非重入的执行顺序自上而下

// async function foo(){
//   throw Error("foo")
// }
////栈内存执行顺序谜题
// // foo()
// foo().catch((reason)=>{setTimeout(console.log,0,reason)})

// async function bar(){
//   return Promise.reject("bar")
// }

// bar().catch((reason)=>{console.log(reason)})
//--------------------------------------------------------------
// async function foo(){

// }

//
// let a=/\B(?=(\d{3})+(?!\d))/g

//------------------------------------------------------------------
// try{
//   let a=b;
// console.log(a);
// }catch(e){
//   console.log(a);
// }
//------------------------------------------------------------------

// FinalizationRegistry是es12新出的监听对象是否被垃圾回收的机制,可以在对象被垃圾回收时做一些回调函数的事情\

// let foo={name:"foo",age:20};

// //声明一个实例
// let finalRegister=new FinalizationRegistry((value)=>{
//   console.log("对象已经被垃圾回收:",value);
// })

// finalRegister.register(foo,"foo")//将要监听的对象注册到实例中,第二个参数是传入回调函数的参数

// foo=null;//当foo设置为null时,jc会把对象当做垃圾回收

// let foo = { name: "foo" };
// let baz=foo;

// let bar = new WeakRef(foo);

// let register=new FinalizationRegistry(()=>{
//   console.log("foo is over");
// })

// register.register(foo)

// foo = null;
// let ref = bar.deref();
// console.log(ref);

// 逻辑赋值运算符
// 一般定义的函数有时候需要传入参数,如果使用这个函数的时候没有传入参数,我们可以给这个参数一个默认值,使用默认值的方法可以使用逻辑赋值运算符"||",这个符号会先判断左边是否化为布尔值后为true,如果是就会原样返回,否则返回另一边的内容

// function foo(name){
//   name=name||"foo"
//   //如果左边是true,那么就返回左边
//   console.log(name);
// }

// foo()
// foo("matt")

// //正因为判断标准是布尔值,所以有些情况会出现问题
// function baz(name){
// name=name||"baz"
// }

// baz("")//传入空字符串,因为是false,所以name采取默认值处理

//遇到这种情况需要??来处理,??判断左边是不是null或者undedine,如果是就采取右边的

// console.log("%c住手","font-size:60px; color:red;");

// let obj = {
//   thisjudge() {
//     return this === obj;
//   },
// };

// console.log(obj.thisjudge());

// let objProxy=new Proxy(obj,{

// })
// // 诚然在设置为代理后代理的this指向自身,但仍旧可以看做浅拷贝源对象.当代理作出某些行为并要传播到源对象时,就会触发拦截对象中的方法进行拦截处理
// console.log(objProxy.thisjudge());

// let obj={
//   _name:"foo",
//   get name(){
//     return this._name
//   }
// }

// let objProxy=new Proxy(obj,{})

// console.log(objProxy.name);

// let obj={
//   name:"foo",
//   age:29
// }

// let objProxy=new Proxy(obj,{
//   get(target,key,receiver){
//     console.log(`监听到打印${key}`);
//     return target[key]
//   },
//   set(target,key,newValue,receiver){
//     console.log(`监听到修改${key}`);
//     return target[key]=newValue
//   }
// })

// console.log(objProxy.name);
// objProxy

// let obj = {
//       _name: "foo",
//       set name(newValue) {
//         this._name = newValue

//       },
//       get name() {
//         return this._name
//       }
//     }

//     let objProxy = new Proxy(obj, {
//       get(target, key, receiver) {
//         console.log(`检测到获取${target}${key}`);
//         //反射的API与捕捉函数对象的方法的方法名和参数一致

//         //使用反射作为返回值的好处:
//         //反射本身就有很多方法,不用自己设置拦截后的返回值,也不用考虑捕获器不变式
//         //反射方法一般都会有状态值,也就是会返回布尔值,可以根据状态值判断是否执行成功
//         //利用receiver可以不止对对象监听一次,而是通过控制对象的this值达到多次监听的效果

//         return Reflect.get(target, key, receiver)
//       },
//       set(target, key, newValue, receiver) {
//         console.log(`检测到设置了${target}${key}`);
//         return Reflect.set(target, key, newValue, receiver)//如果不设置就只能监听一次,设置后在obj里面当要设置值的时候this都指向objProxy,这样就又相当于调用一次代理设置值,就又会返回set,继续监听
//       }
//     })

//     console.log(objProxy.name);
//     // objProxy.setname("matt")
//     objProxy.name = "matt"

/* 首字母大写 */
/* text-transform: capitalize; */
/* 全部大写 */
/* text-transform: uppercase; */
/* 全部小写 */
/* text-transform: lowercase; */
/* 无效果 */
/* text-transform: none; */

// let promise=new Promise((resolve,reject)=>{
//      // console.log("已解决");
//      // resolve("已解决")
//      reject("未解决")
// })

// promise.catch((err)=>{
//      console.log(err);
// }).then((value)=>{
//      console.log(value);
// })

// promise.then(())

// promise.then((value)=>{
//      console.log(value);
// }).catch((err)=>{
//      console.log(err);
// })

// let p = new Promise((resolve,reject)=>{
// setTimeout(resolve("第二个resolve"),2000)
// })

// let promise = new Promise((resolve, reject) => {
//   resolve(p);
// });

// promise.then((value)=>{
//       console.log(value);
// })
//then(()=>{})

// let promise = new Promise((resolve, reject) => {
//   //resolve期待一个thenable对象
//   resolve({
//     then: function (resolve,reject) {
//       // let a=resolve;

//       // a("hello")
//       reject("heiheihei")
//     },
//   });
// });

// promise.then((value) => {
//   console.log(value);
// });
// promise.catch((err)=>{
//       console.log(err);
// })

// console.log(promise);
// setTimeout(console.log, 0,promise);

// let promise = new Promise((resolve, reject) => {
//   resolve("first");
// });

// promise.then((value) => {
//   console.log(value);
// });

// let p = new Promise((resolve, reject) => {
//   resolve(promise);
// });

// p.then((value) => {
//   console.log(value);
// });

//期约状态改变会通知所有的then和catch
// let p=new Promise((resolve,reject)=>{
//       resolve("hello")
// })

// p.then((value)=>{
//       console.log(value);
// })
// p.then((value)=>{
//       console.log(value);
// })
// p.then((value)=>{
//       console.log(value);
// })
// p.then((value)=>{
//       console.log(value);
// })

// let p = new Promise((resolve, reject) => {
//   reject("err");
// });

// p.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log(err);
// });

// p.catch((err) => {
//   console.log(err);
// });
// p.catch((err) => {
//   console.log(err);
// });
// p.catch((err) => {
//   console.log(err);
// });
// p.catch((err) => {
//   console.log(err);
// });

//object.defineProperty与proxy的区别
//第一遍
// let obj = {
//   a: 2,
//   b: {
//     c: 3,
//   },
// };
// Object.defineProperty(obj, "a", {
//   configurable: true,
//   enumerable: true,
//   get() {
//     console.log("监听到获取a");
//     // console.log(obj['a']);
//     return obj['a']
//   },
//   set(value) {
//     console.log("监听到设置a");
//     obj["a"] = value;
//   },
// });

// // console.log(obj.a);
// // obj.a
// // obj.a=5
// // console.log(obj.a);

//第一遍
//使用__proto__
// let obj = {};
// let descripter = Object.create(null);
// //创造一个继承null的对象
// descripter.value = "static";
// Object.defineProperty(obj, "key", descripter);

// //显式
// Object.defineProperty(obj, "key", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: "static",
// });

// //循环使用同一对象
// function withValue(value) {
//   let d =
//     withValue.d ||
//     (withValue.d = {
//       enumerable: false,
//       writable: false,
//       configurable: false,
//       value: null,
//     });
//   d.value = value;
//   return d;
// }

// //...并且...
// Object.defineProperty(obj, "key", withValue("static"));

// //防止后续代码添加或删除原型对象的属性
// (Object.freeze || Object)(Object.prototype);

//第二遍

// //使用__proto__
// let obj = {};
// let descripter = Object.create(null);
// descripter.value = "static";
// Object.defineProperty(obj, "key", descripter);

// //显式
// Object.defineProperty(obj, "key", {
//   configurable: false,
//   writable: false,
//   value: "static",
//   enumerable: false,
// });

// //循环使用同一对象
// function withValue(value) {
//   let d =
//     withValue.d ||
//     (withValue.d = {
//       enumerable: false,
//       configurable: false,
//       value: null,
//       writable: false,
//     });
//   d.value = value;
//   return d;
// }

// Object.defineProperty(obj, "key", withValue("static"));

//第三遍
// //使用__proto__
// let obj = {};
// let descripter = Object.create(null);
// descripter.value = "static";
// Object.defineProperty(obj, "key", descripter);

// //显式
// Object.defineProperty(obj, "key", {
//   configurable: false,
//   writable: false,
//   enumerable: false,
//   value: "static",
// });

// //循环使用同一对象
// function withValue(value) {
//   let d =
//     withValue.d ||
//     (withValue.d = {
//       configurable: false,
//       enumerable: false,
//       writable: false,
//       value: null,
//     });
//   d.value = value;
//   return d;
// }

// Object.defineProperty(obj, "key", withValue("static"));

//第四遍
// // 使用__proto__
// let obj = {};
// let descripter = Object.create(null);
// descripter.value = "static";
// Object.defineProperty(obj, "key", descripter);

// // 显式
// Object.defineProperty(obj, "key", {
//   configurable: false,
//   enumerable: false,
//   writable: false,
//   value: "static",
// });

// //循环调用同一对象
// function withValue(value) {
//   let d =
//     withValue.d ||
//     (withValue.d = {
//       configurable: false,
//       enumerable: false,
//       writable: false,
//       value: null,
//     });
//   d.value = value;
//   return d;
// }

// Object.defineProperty(obj, "key", withValue("static"));

//第五遍
//默认
// let obj = {};
// let descripter = Object.create(null);
// descripter.value = "static";
// Object.defineProperty(obj, "key", descripter);

// //显式
// Object.defineProperty(obj, "key", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: "static",
// });

// //循环调用同一对象
// function withValue(value) {
//   let d =
//     withValue.d ||
//     (withValue.d = {
//       configurable: false,
//       enumerable: false,
//       writable: false,
//       value: null,
//     });
//   d.value = value;
//   return d;
// }
// Object.defineProperty(obj, "key", withValue("static"));

// //创建属性
// 第一遍
// let o = {};

// Object.defineProperty(o, "a", {
//   value: 37,
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });

// console.log(o.a);

// let bValue = 38;
// Object.defineProperty(o, "b", {
//   get() {
//     console.log("监听到了获取");
//     return bValue;
//   },
//   set(newValue) {
//     bValue = newValue;
//   },
//   enumerable: true,
//   configurable: true,
// });

// console.log(o.b);

// Object.defineProperty(o, "conflict", {
//   value: 0x9f91102,
//   get() {
//     return 0xdeadbeef;
//   },
// });

//第二遍
// let o = {};
// //添加一个属性与数据描述符的事例
// Object.defineProperty(o, "a", {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// //在对象中添加一个设置了存取描述符的事例
// let bValue = 38;
// Object.defineProperty(o, "b", {
//   configurable: true,
//   enumerable: true,
//   get() {
//     console.log("检测到获取");
//     return bValue;
//   },
//   set(newValue) {
//     bValue = newValue;
//   },
// });

// console.log(o.b);

// //get,set不能与value,writable一起使用
// Object.defineProperty(o, "conflict", {
//   value: 10,
//   get() {
//     return "heiheihei";
//   },
// });

//第三遍
// let o = {};
// Object.defineProperty(o, "a", {
//   configurable: true,
//   writable: true,
//   enumerable: true,
//   value: 37,
// });

// console.log(o.a);

// let bValue = 38;
// Object.defineProperty(o, "b", {
//   configurable: true,
//   enumerable: true,
//   get() {
//     console.log("监听到获取");
//     return bValue;
//   },
//   set(newValue) {
//     bValue = newValue;
//   },
// });

// console.log(o.b);

// //数据描述符与存取描述符不能混合使用
// Object.defineProperty(o, "conflict", {
//   get() {
//     return "heiheihei";
//   },
//   value: 38,
// });

//当writable设置为false,那么这个属性就是不可修改的
//第一遍
// let o = {};

// Object.defineProperty(o, "a", {
//   value: 37,
//   writable: false,
// });

// console.log(o.a);

// o.a = 25;
// console.log(o.a);

//严格模式
// (function () {
//   "use strict";
//   let o = {};
//   Object.defineProperty(o, "b", {
//     value: 2,
//     writable: false,
//   });

//   o.b = 3;
//   console.log(o.b);
// })();

//第二遍
// let o = {};
// Object.defineProperty(o, "a", {
//   value: 37,
//   writable: false,
// });

// o.a = 25;
// //啥也没发生
// console.log(o.a);

// //严格模式
// (function () {
//   "use strict";
//   let o = {};
//   Object.defineProperty(o, "a", {
//     value: 2,
//     writable: false,
//   });
//   o.a = 3;
//   console.log(o.a);
// })();

//第三遍
// let o = {};
// Object.defineProperty(o, "a", {
//   value: 37,
//   writable: false,
// });
// o.a = 10;
// console.log(o.a);

// //严格模式
// (function () {
//   "use strict";
//   let o = {};
//   Object.defineProperty(o, "a", {
//     value: 2,
//     writable: false,
//   });
//   o.a = 0;
//   console.log(o.a);
// })();

// enumerable
// let o = {};
// Object.defineProperty(o, "a", {
//   value: 1,
//   enumerable: true,
// });
// Object.defineProperty(o, "b", {
//   value: 2,
//   enumerable: false,
// });
// Object.defineProperty(o, "c", {
//   value: 3,
// });
// o.d = 4;
// Object.defineProperty(o, Symbol.for("e"), {
//   value: 5,
//   enumerable: true,
// });
// Object.defineProperty(o, Symbol.for("f"), {
//   value: 6,
//   enumerable: false,
// });

// for (let i in o) {
//   console.log(i);
// }

// console.log(Object.keys(o));
// // let arr = [];
// console.log(o.propertyIsEnumerable("a"));
// console.log(o.propertyIsEnumerable("b"));
// console.log(o.propertyIsEnumerable("c"));
// console.log(o.propertyIsEnumerable("d"));
// console.log(o.propertyIsEnumerable(Symbol.for("e")));
// console.log(o.propertyIsEnumerable(Symbol.for("f")));

// let p = {...o}
// console.log(p.a);
// console.log(p.b);
// console.log(p.c);
// console.log(p.d);
// console.log(p[Symbol.for('e')]);
// console.log(p[Symbol.for('f')]);

// //第二遍
// let o = {};
// Object.defineProperty(o, "a", {
//   value: 1,
//   enumerable: true,
// });
// Object.defineProperty(o, "b", {
//   value: 2,
//   enumerable: false,
// });
// Object.defineProperty(o, "c", {
//   value: 3,
// });
// o.d = 4;
// Object.defineProperty(o, Symbol.for("e"), {
//   value: 5,
//   enumerable: false,
// });
// Object.defineProperty(o, Symbol.for("f"), {
//   value: 6,
//   enumerable: true,
// });

// for (let i in o) {
//   console.log(i);
// }

// // console.log(o.propertyIsEnumerable("a"));
// // console.log(o.propertyIsEnumerable("b"));
// console.log(o.propertyIsEnumerable("c"));
// console.log(o.propertyIsEnumerable("d"));
// console.log(o.propertyIsEnumerable(Symbol.for("e")));
// console.log(o.propertyIsEnumerable(Symbol.for("f")));

// let p = { ...o };
// console.log(p.a);
// console.log(p.b);
// console.log(p.c);
// console.log(p.d);
// console.log(p[Symbol.for("e")]);
// console.log(p[Symbol.for("f")]);

// let m=p.hasOwnProperty(Symbol.for('f'))

// console.log(m);

// let o = {};
// Object.defineProperty(o, "a", {
//   get() {
//     return 1;
//   },
//   configurable: false,
// });

// Object.defineProperty(o, "a", {
//   configurable: true,
// });

// Object.defineProperty(o,'a',{
//   get(){

//   }
// })

// Object.defineProperty(o,'a',{
//   set(){

//   }
// })

// Object.defineProperty(o, "a", {
//   enumerable: false,
// });

// console.log(o.a);
// delete o.a
// console.log(o.a);

// let obj = {
//   name: "foo",
//   age: 28,
// };

// let objProxy = new Proxy(obj, {
//   get(target, key, reciver) {
//     console.log(`监听到打印${key}`);
//     return target[key];
//   },
//   set(target, key, newVal, reciver) {
//     console.log(`监听到设置值`);
//     target[key] = newVal;
//   },
// });

// console.log(objProxy.name);
// objProxy.age = 30;

// let obj = {
//   thisJudge() {
//     return this === obj;
//   },
// };
// console.log(obj.thisJudge());

// let objProxy=new Proxy(obj,{})

// console.log(objProxy.thisJudge());

// let obj = {
//   _name: "foo",
//   set name(newValue) {
//     this._name = newValue;
//   },
//   get name() {
//     return this._name;
//   },
// };

// let objProxy = new Proxy(obj, {
//   get(target, key, reciver) {
//     console.log(`检测到获取${target}${key}`);
//     return Reflect.get(target, key, reciver);
//   },
//   set(target, key, newValue, reciver) {
//     console.log(`检测到了设置${target}${key}`);
//     return Reflect.set(target, key, newValue, reciver);
//   },
// });
// console.log(objProxy.name);
// objProxy.name = "matt";
// console.log(objProxy.name);

//第二遍
// let obj = {
//   name: "foo",
// };
// let objProxy = new Proxy(obj, {
//   get(target, key, reciver) {
//     console.log(`监听到获取`);
//     return target[key];
//   },
//   set(target, key, newVal, reciver) {
//     console.log(`监听到设置新值`);
//     target[key] = newVal;
//   },
// });

// console.log(objProxy.name);
// objProxy.name = "matt";

// let obj = {
//   thisjudge() {
//     return this === obj;
//   },
// };

// let objProxy = new Proxy(obj, {});

// console.log(objProxy.thisjudge());

// let obj = {
//   _name: "foo",
//   get name() {
//     return this._name;
//   },
//   set name(newVal) {
//     this._name = newVal;
//   },
// };

// let objProxy = new Proxy(obj, {
//   get(target, key, reciver) {
//     console.log(`监听到获取${target}${key}`);
//     return Reflect.get(target, key, reciver);
//   },
//   set(target, key, newVal, reciver) {
//     console.log(`监听到设置新值${target}${key}`);
//     return Reflect.set(target, key, newVal, reciver);
//   },
// });

// console.log(objProxy.name);

//arr的判断方法
// let arr = [1, 2, 3, 4, 5];
// console.log(typeof arr); //不能检测是不是数组
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);
// let judge = Object.prototype.toString.call(arr);
// console.log(judge);
// let judge2 = Array.prototype.isPrototypeOf(arr);
// console.log(judge2);

//第二遍
//arr的判断方法
// let arr = [1, 2, 3, 4, 5];
// let judge = Object.prototype.toString.call(arr);
// console.log(judge);
// let judge2=Array.prototype.isPrototypeOf(arr)
// console.log(judge2);
// console.log(arr instanceof Array);
// console.log(Array.isArray(arr));

//第三遍
//arr的判断方法
// let arr = [1, 2, 3, 4, 5];
// let judge = Object.prototype.toString.call(arr);
// console.log(judge);
// let judge2=Array.prototype.isPrototypeOf(arr)
// console.log(judge2);
// let judge3=Array.isArray(arr)
// console.log(judge3);
// console.log(arr instanceof Array);

//第四遍
// arr=[1,2,3,4,5]
// let judge=Object.prototype.toString.call(arr)
// console.log(judge);
// let judge2=Array.isArray(arr)
// console.log(judge2);
// let judge3=Array.prototype.isPrototypeOf(arr)
// console.log(judge3);
// console.log(arr instanceof Array);

//第五遍
// let arr = [1, 2, 3, 4, 5];
// let judge = Object.prototype.toString.call(arr);
// console.log(judge);
// let judge2 = Array.isArray(arr);
// console.log(judge2);
// let judge3 = Array.prototype.isPrototypeOf(arr);
// console.log(judge3);
// console.log(arr instanceof Array);

//第六遍
// let arr = [1, 2, 3, 4, 5];
// let judge = Object.prototype.toString.call(arr);
// console.log(judge);
// let judge2=Array.isArray(arr)
// console.log(judge2);
// let judge3=Array.prototype.isPrototypeOf(arr)
// console.log(judge3);
// console.log(arr instanceof Array);

//第七遍
// let arr=[1,2,3,4,5]
// let judge=Object.prototype.toString.call(arr)
// console.log(judge);
// let judge2=Array.isArray(arr)
// console.log(judge2);
// let judge3=Array.prototype.isPrototypeOf(arr)
// console.log(judge3);
// console.log(arr instanceof Array);

//vue响应式原理
// let obj = {
//   _name: "foo",
//   get name() {
//     console.log("huoqu");
//     return this._name;
//   },
//   set name(newVal) {
//     this._name = newVal;
//   },
// };

// let objProxy = new Proxy(obj, {
//   get(target, key, reciver) {
//     console.log(`监听到了获取行为${target}${key}`);
//     return Reflect.get(target, key, reciver);
//   },
//   set(target, key, newVal, reciver) {
//     console.log(`监听到设置行为${target}${key}`);
//     return Reflect.set(target, key, newVal, reciver);
//   },
// });

// let newObj = {
//   _name:"bar"
// };
// Object.setPrototypeOf(newObj, objProxy);

// console.log(newObj.name);

// let obj={a:1,b:{c:2}};
// let handler={
//   get:function(obj,prop){
//     console.log("helllo");
//     const v = Reflect.get(obj,prop);
//     // console.log(v);
//     return v; // 返回obj[prop]
//   },
//   set(obj,prop,value){
//     return Reflect.set(obj,prop,value);//设置成功返回true
//   }
// };
// let p=new Proxy(obj,handler);

// // console.log(p.a);//会触发get方法
// // p.b.c//会触发get方法获取p.b，不会触发.c的set，因为c没被代理。
// console.log(p.b.c);

// const parent = {
//   name: '19Qingfeng',
//   get value() {
//     return this.name;
//   },
// };

// const handler = {
//   get(target, key, receiver) {
//    return Reflect.get(target, key);
//    return Reflect.get(target, key, receiver);
//   },
// };

// const proxy = new Proxy(parent, handler);

// const obj = {
//   name: 'wang.haoyu',
// };

// // 设置obj继承与parent的代理对象proxy
// Object.setPrototypeOf(obj, proxy);

// // log: wang.haoyu
// console.log(obj.value);
// // 复制代码

// function filter(){

// }

// let div = document.getElementById("div1");
// let iterator = document.createNodeIterator(
//   div,
//   NodeFilter.SHOW_ELEMENT,
//   null,
//   false
// );
// // console.log(iterator);
// let node = iterator.nextNode();
// while (node !== null) {
//   console.log(node.tagName);
//   node = iterator.nextNode();
// }

//nodeIterator的第三个参数filter可以是nodeFilter对象,也可以是一个函数
//用对象方式建立filter
// let filter = {
//   acceptNode(node) {
//     return node.tagName.toLowerCase() == "li"
//       ? NodeFilter.FILTER_ACCEPT
//       : NodeFilter.FILTER_SKIP;
//   },
// };

// let filter = (node) => {
//   return node.tagName.toLowerCase() == "li"
//     ? NodeFilter.FILTER_ACCEPT
//     : NodeFilter.FILTER_SKIP;
// };

// let div = document.getElementById("div1");
// //接收四个参数,根节点,位掩码,过滤器,还有是否扩展实体引用(html文档没有效果,因为默认实体永远不扩展)
// let iterator = document.createNodeIterator(
//   div,
//   NodeFilter.SHOW_ELEMENT,
//   filter,
//   false
// );
// //nodeIterator的两个主要方法时nextNode和previousNode
// // 初次调用nextNode返回根节点,调用到最后一个节点的时候,nextNode返回null
// let node = iterator.nextNode();
// while (node !== null) {
//   console.log(node.tagName);
//   node = iterator.nextNode();
// }

// let div = document.getElementById("div1");
// let walker = document.createTreeWalker(
//   div,
//   NodeFilter.SHOW_ELEMENT,
//   null,
//   false
// );
// let node = walker.firstChild();
// node = walker.nextSibling();
// node = walker.firstChild();
// while (node !== null) {
//   console.log(node.tagName);
//   node = walker.nextSibling();
// }

// let div = document.getElementById("div1");
// let walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, filter);
// function filter(node) {
//   return node.tagName.toLowerCase() == "div"
//     ? NodeFilter.FILTER_ACCEPT
//     : //在treewalker中,reject会直接返回,而不是跳过当前元素并遍历下一个
//       NodeFilter.FILTER_REJECT;
// }
// let node = walker.currentNode;
// console.log(node.tagName);
// node = walker.nextNode;
// console.log(node.tagName);

// //使用iterator的reject
// let div = document.getElementById("div1");
// let iterator = document.createNodeIterator(
//   div,
//   NodeFilter.SHOW_ELEMENT,
//   filter
// );
// function filter(node) {
//   return node.tagName.toLowerCase() == "li"
//     ? NodeFilter.FILTER_ACCEPT
//     : NodeFilter.FILTER_REJECT;
// }
// let node = iterator.nextNode();
// while (node !== null) {
//   console.log(node.tagName);
//   node = iterator.nextNode();
// }

// let div = document.getElementById("div1");
// let walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null);

// let node = walker.currentNode;
// console.log(node.tagName);
// node=walker.firstChild()
// node=walker.currentNode
// console.log(node.tagName);

//范围
//使用creatRange()创造range实例,该实例有五个属性,对应实例的一些与位置有关的信息,分别是startContainer,endContainer,startOffset,endOffset,commonAncestorContainer

//创建range实例
// let range = document.createRange()

//通过范围选择文档中某一部分的最简单方法是使用selectNode()和selectNodeContents()

// let range1 = document.createRange()
// let range2 = document.createRange()

// let p = document.getElementById('p1')
// //selectNode和selectNodeContents方法会把文档中的p节点有关信息传入到范围实例中
// range1.selectNode(p)
// range2.selectNodeContents(p)

// console.log(range1);
// console.log(range2);
//从打印结果可以看出传入的信息以及属性的具体含义
//对于selectNode来说
//startContainers是传入节点的父节点
//endContainers是传入节点的父节点
//Range.commonAncestorContainer 只读属性，返回目标节点的共有祖先节点
//startOffset是传入节点在其父节点的位置索引,由于空格也算是节点,所以这里的p位于1号索引
//endOffset是传入节点的父节点中childNode的个数,也就是范围内包含的子节点个数(不包含孙子节点等更深层节点)

//对于selectNodeContents来说
//startContainers,endContainers,commonAncestorContainer属性的值都是传入的节点
//startOffset是0,因为范围从传入的第一个子节点开始,怎么写都是0
//endOffset由传入节点的子节点个数决定,同样空格也算节点,且不计算深层节点

// ----------

//在选中范围后,还可以在范围上调用相应的方法,实现对选区范围更精细的控制
// let range = document.createRange()
// let p = document.getElementById('p1')
// let text = p.lastChild;
// let b = p.firstChild;

// range.selectNodeContents(p)
// console.log(range);
// //把范围终点设置在text前
// range.setEndBefore(text)
// console.log(range);
//从结果上看得出来,先输出的range仍然被后面的setEndBefore影响

// range.selectNode(p)
// range.setEndBefore(text)
// console.log(range);
//从结果看出,range范围变化了,变成了p标签内,而不是body标签内,虽然startContainer依旧是body
//------------------------

//复杂选择
//对于简单范围的建立只需要传入节点就可以了,面对想要创建复杂的节点,例如指向选择'llo</b> Wo',就可以使用setStart和setEnd方法,两者都接收两个参数,分别startContainer和startOffset,另一个endContainer和endOffset.
// 使用这两个可以造一个和selectNode,selectNodeContents功能一样的代码块
// let p = document.getElementById('p1')
// console.log(p instanceof Node);
// let range = document.createRange()
// range.selectNode(p)
// console.log(range);

// let range2 = document.createRange()

// // let body = document.getElementsByTagName('body')
// // let body = p.parentNode
// let body=document.getElementById('body')
// // 这里有个雷,byId获取的元素是属于Node的,而byTagName获取的元素不属于Node
// console.log(body instanceof Node);
// range2.setStart(body, 1)
// range2.setEnd(body, 2)
// console.log(range2);

// let p = document.getElementById('p1')
// let range2 = document.createRange()
// range2.selectNode(p)
// console.log(range2);
// console.log('--------------------');
// let range = selectNodeLike(p)
// console.log(range);

// function selectNodeLike(node) {
//   let range = document.createRange()
//   if (node instanceof Node) {
//     let parentNode = node.parentNode
//     // console.log(parentNode.childNodes);
//     Array.from(parentNode.childNodes).forEach((e, i) => {
//       if (e === node) {
//         range.setStart(parentNode, i)
//         range.setEnd(parentNode,i+1)

//       }
//     })
//     // range.setStart()
//     // range.setEnd()
//     return range

//   } else {
//     console.log('need a node');
//     return undefined
//   }
// }

//获取'llo</b> Wo'
// let p = document.getElementById('p1')
// let range = document.createRange()
// range.setStart(p.firstChild.firstChild, 2)
// range.setEnd(p.lastChild, 3)
// console.log(range);
//------------------------
//使用deleteContents在dom中删除指定范围
// let p=document.getElementById('p1')
// let range = document.createRange()
//   range.setStart(p.firstChild.firstChild, 2)
//   range.setEnd(p.lastChild, 3)
//   console.log(range);
// range.deleteContents()
//extractContent获取删除的范围
// let extract=range.extractContents()
// console.log(extract);
//如果不想删除,可以创建副本
// let clone=range.cloneContents()
// console.log(clone);

//范围插入
//使用insertNode方法将参数插入到范围前方
// let p = document.getElementById('p1')
// let range = document.createRange()
// range.selectNode(p)
// let textNode = document.createTextNode("你好")
// range.insertNode(textNode)

// let range2 = document.createRange()
// range2.setStart(p.firstChild.firstChild, 2)
// range2.setEnd(p.lastChild, 3)
// let span = document.createElement('span')
// span.style.color = 'red'
// span.appendChild(document.createTextNode('小图标'))
// range2.insertNode(span)
//利用这一点可以给html文档添加结构

// let p = document.getElementById('p1')
// let range = document.createRange()
// range.selectNode(p.firstChild.firstChild)
// let span = document.createElement('span')
// span.style.backgroundColor = 'yellow'
// range.surroundContents(span)

// let range2 = document.createRange()
// range2.setStart(p.firstChild.firstChild, 2)
// range2.setEnd(p.lastChild, 3)

// range2.surroundContents(span)
//包含的内容必须是完整的结构

//范围折叠

//---------------------

// let color = new Array(20);
// console.log(color.length);

// let color2 = new Array("black", "red", "white");
// console.log(color2);

// let colors = Array(3);
// console.log(colors.length);

// let newColor = ["orange", "blue", "purple"];
// console.log(newColor);

// let name = [];
// console.log(name);

// console.log(name instanceof Array);

// console.log(Array.from("matt"));

// let map = new Map().set(1, 2).set(3, 4);
// console.log(Array.from(map));

// let set = new Set().add(1).add(2).add(3).add(4).add(1);
// console.log(Array.from(set));
// console.log(set);
// console.log(map);

// let a1 = [1, 2, 3, 4, 5];
// let a2 = Array.from(a1);
// console.log(a2);
// a2.splice(2,2)
// console.log('.......');
// console.log(a2);
// console.log(a1);

// const iter={
//   *[Symbol.iterator](){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//   }
// }

// console.log(Array.from(iter));

// function getArgsArray() {
//   return Array.from(arguments);
// }

// console.log(getArgsArray(1, 2, 3, 4, 5, 6));

// const arrayLikeObj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };
// console.log(Array.from(arrayLikeObj));
// let exponent=2
// exponent=2
// let a1 = [1, 2, 3, 4];
// let a2 = Array.from(a1, (x) => x ** 2);
// let a3 = Array.from(
//   a1,
//   function (x) {
//     console.log(this);
//     return x ** this.exponent;
//   },
//   {exponent:2}

// );
// console.log(a1);
// console.log(a2);
// console.log(a3);

// console.log(Array.of(3,4,5));
// console.log(new Array(3,4,5));

// let a1 = [1, , , , , 5];
// console.log(a1);
// console.log(a1.length);
// for (a of a1) {
//   console.log(a === undefined);
// // }
// const a1=[1,,,,5]
// console.log(Array.from(a1));
// console.log(Array.of(...a1));
// for (let [index,value] of a1.entries()){
//   console.log(value);
// }

// let a1=[1,2,3,4,5]
// console.log(a1.length);
// console.log(a1[5]);
// console.log(a1.length);

// let a1=[1,2,3,4,5]
// a1.length=4;
// console.log(a1);
// a1.length=7;
// console.log(a1);

// let color = ["red", "green", "blue"];
// color[color.length] = "yellow";
// color[color.length] = "purple";
// console.log(color);

// let color2 = ["white", "black", "brown"];
// for (let c of color2) {
//   color[color.length] = c;
// }
// console.log(color);

// Array.isArray()这个方法在不同作用域中使用依旧生效，但是instanceof方法就不行

// let a1 = ["black", "white", "red", "blue"];
// console.log(Array.from(a1.keys()));
// console.log(Array.from(a1.values()));
// console.log(Array.from(a1.entries()));
// for (let [index, value] of a1.entries()) {
//   console.log(index, value);
// }

// let a1 = [0, 0, 0, 0, 0];
// a1.fill(5);
// console.log(a1);
// a1.fill(0);
// a1.fill(3, 2);
// console.log(a1);
// a1.fill(0);
// a1.fill(8,1,4)
// console.log(a1);
// a1.fill(0)
// a1.fill(5,-2,-1)
// console.log(a1);
// a1.fill(0)

// let a1;
// let reset = () => {
//   a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// };
// reset();
// console.log(a1);
// console.log(a1.copyWithin(5));
// // console.log(a1);
// reset()
// console.log(a1.copyWithin(0,5));
// reset()
// console.log(a1.copyWithin(5,0,3));
// reset()
// console.log(a1.copyWithin(-2,-10,-9));
// reset()
// let a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a1.copyWithin(0,9,10));
// a1[9]=0
// console.log(a1);

// let c = 0;
// for (let i = 0; i < a1.length / 2; i++) {
//   let a = 9 - i;
//   let b = 10 - i;
//   c = a1[i];
//   a1.copyWithin(i, a, b);
//   // console.log(a1);
//   a1[a] = c;
  
// }
// console.log(a1);


