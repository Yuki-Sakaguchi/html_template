/**
 * TypeScriptの環境を説明するためのサンプルファイルです
 * 実際の構築時には削除してください
 * 
 *      INDEX
 *          (1) jQueryについて
 *          (2) 型定義について
 *          (3) ES6について
 *          (4) 外部モジュールについて
 */

/**
 * (1) jQueryについて
 *      ts上でエラーを出さないように型定義（node_modules/@types/jquery）は読み込んでいます。
 *      実行時にはjQueryを別途読み込まないとランタイムエラーになります。
 */


/**
 * (2) 型定義について
 *      型定義のない外部ライブラリを使いたい場合などはts上でエラーが出なくなるように型を定義する必要があります。
 *      @types/_index.tsに独自で定義すればエラーは出なくなります。
 *      
 *      あくまでts上のエラー回避でしかないので、ランタイムエラーには注意です。
 *      以下の例は全てランタイムでエラーが出ます。
 */
console.log(exampleConstVariable);
console.log(exampleLetVariable);

exampleFunction();
exampleFunction(1);
exampleFunction('test');
exampleFunction(1, 2, 3, 4, 5);

const exampleInstance = new ExampleClass();
exampleInstance.test();

$(function() {
    $('.test').exampleJQueryFunction('test');
});


/**
 * (3) ES6について
 *      ES6も書けます（let, const, class, アロー関数など）
 *      コンパイル後はES5向けに変換されます。
 *      async, awaitなどはES5向けに書かれたとしても動かない場合があるので、
 *      新しい機能を使う場合には、ブラウザの対応状態を確かめましょう。
 */
class Member {
    // クラス変数
    static sequenceId: number = 1;
    static digitId: number = 5;

    // メンバ変数
    private id: string;
    private name: string;

    // コンストラクタ
    constructor (name: string='GEST') {
        this.id = (Member.sequenceId++).toString();
        this.name = name;
    }

    // 自己紹介メソッド
    getMyData () {
        console.log(`私の名前は [${this.name}] です。`);
        console.log(`私のIDは [${this.id}] です。`);
    }
}

// インスタンス生成
const taro: Member = new Member('taro');
taro.getMyData();

const hanako: Member = new Member('hanako');
hanako.getMyData();

const gest: Member = new Member();
gest.getMyData();


/**
 * (4) 外部モジュールについて
 *      モジュールも使えます。
 *      今後のことも考えてJavaScript標準になりそうな"ES6モジュール"を使います（import, export)
 */
// 読み込む
import util from './modules/_util'; // 本当はページの最上部でまとめてimportした方がいいと思う

// 使う
console.log(util.zeroPadding(123, 5)); //-> "00123"
console.log(util.zeroPadding('１２３', 10, '０')); //-> "０００００００１２３"
console.log(util.createRandom(1, 10)); //-> 1〜10のランダムの数値
