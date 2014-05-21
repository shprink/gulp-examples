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