QUnit.module('スーパーの支払金額を計算する', function () {
    QUnit.test('商品番号1を渡すと金額100を返す', function (assert) {
        var actual = getPrice(1);
        // QUnit の assert.equal 系は引数の順番が actual, expected の順(JUnit の逆)なので注意
        assert.equal(actual, 100);
    });
    QUnit.test('商品番号7を渡すと金額440を返す', function (assert) {
        var actual = getPrice(7);
        assert.equal(actual, 440);

    });

    QUnit.module('複数商品の合計金額を返す', function () { 
        QUnit.test('商品番号1を2個と商品番号5を2個の合計金額1000を返す', function (assert) {
            var items = [1,5];
            var itemCount = [2,2];
            var actual = cart(items, itemCount);
            assert.equal(actual, 1000);
        
        });
        QUnit.test('商品番号7を1個で合計金額440を返す', function (assert) {
            var items = [7];
            var itemCount = [1];
            var actual = cart(items, itemCount);
            assert.equal(actual, 440);
        });
        QUnit.test('与えられた商品番号と個数の配列の長さが異なる場合例外を返す', function (assert) {
            assert.throws(function () {
                var items = [1,2,3,4];
                var itemCount = [1,1];
                cart(items, itemCount);
            });
        });
    });
});

// QUnit.module('QUnit の使い方', function () {

//     QUnit.module('基礎編', function () {

//         QUnit.test('assert.ok の使い方', function (assert) {
//             var truth = true;
//             assert.ok(truth, 'assert.ok は引数が truthy であるかどうかを検証します');
//             var falsy = null;
//             assert.ok(!falsy);
//         });

//         // QUnit の assert.equal 系は引数の順番が actual, expected の順(JUnit の逆)なので注意してください
//         QUnit.test('equal, notEqual の使い方', function (assert) {
//             assert.equal('hoge', 'hoge');
//             assert.equal(1, '1', 'equal は == を使います');
//             assert.notEqual('foo', 'bar');
//         });

//         QUnit.test('strictEqual, notStrictEqual の使い方', function (assert) {
//             assert.strictEqual('1', '1');
//             assert.notStrictEqual(1, '1', 'strictEqual は === を使います');
//         });

//         QUnit.test('deepEqual, notDeepEqual の使い方', function (assert) {
//             var ary = ['foo', 'bar'];
//             assert.deepEqual(ary.map(function (str){
//                 return str.toUpperCase();
//             }), ['FOO', 'BAR'], 'Array の比較を行えます');

//             var o1 = {name: 'foo', age: 20};
//             var o2 = {age: 20, name: 'foo'};
//             assert.deepEqual(o1, o2, 'オブジェクト同士の比較もできます');

//             var o3 = {name: 'bar', age: 32};
//             assert.notDeepEqual(o1, o3);
//         });
//     });


//     QUnit.module('応用編', function () {

//         QUnit.test('例外のテストの書き方', function (assert) {
//             assert.throws(function () {
//                 throw new Error('例外');
//             }, 'throws で例外が投げられることをテストできます');
//         });

//         QUnit.test('非同期のテストの書き方', function (assert) {
//             var done = assert.async();
//             setTimeout(function () {
//                 assert.equal('hoge', 'hoge', '100ミリ秒後にこの比較が行われています');
//                 done();
//             }, 100);
//         });

//     });
// });


