import {increment,decrement} from './js/a.js';
import {name} from './js/b.js';
import './index.less'
let result = increment(2, 5);
let result2 = decrement(3, 1);
let result3 = name('古天乐', '王祖贤');
let obj = {};
obj = {result,result2,result3 };
console.log(obj);
