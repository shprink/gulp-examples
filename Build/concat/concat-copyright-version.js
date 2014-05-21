/*
Gulp Examples by @julienrenaux:

* https://github.com/shprink
* https://twitter.com/julienrenaux
* https://www.facebook.com/julienrenauxblog

Version: 1.0.0
Full source at https://github.com/shprink/gulp-examples

MIT License, https://github.com/shprink/gulp-examples/blob/master/LICENSE
*/
var math;

math = {
  root: Math.sqrt,
  square: square,
  cube: function(x) {
    return x * square(x);
  }
};
var contenders;

contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];