/**
 * 独自の型定義
 *      独自の型を定義したい場合に使う
 * 
 *      普通に使っても良いが、型定義のないプラグインなどを使う際、
 *      エラーが出てコンパイルできない時にも使える
 *      ここに独自に型を定義して、エラーを打ち消すことができる
 * 
 *      困った時は[any]または[...any]で宣言すれば全て許可できる
 */

// 存在しない変数を宣言する
declare const exampleConstVariable: any
declare let exampleLetVariable: any

// 存在しない関数を宣言する
declare function exampleFunction (...any)

// 存在しないクラスを宣言する
declare class ExampleClass {
    constructor(...any);
    test(...any);
}

// jqueryの拡張を宣言する
interface JQuery {
    exampleJQueryFunction (...any);
}
