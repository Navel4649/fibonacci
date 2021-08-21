'use strict';

const memo = new Map(); //連想配列を利用して計算量を削減
memo.set(0, 0);
memo.set(1, 1);

function fib(n) 
{
    // 改良前
    // if (n === 0) return 0;
    // else if (n === 1) return 1;
    // return fib(n-1) + fib(n-2);
    
    if (memo.has(n)) return memo.get(n); //nをキーとした答えを持っていたらそれを返す
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value); //nをキーとして答えをセット
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) console.log(fib(i));