/**
 * const,letの変数宣言
 */

const val = {
  name: "taro",
  age: 28,
};
val.address = "tokyo";
val.name = "jiro";
console.log(val);

const { name, age } = val;

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);
