onmessage = function(event) {
    var message = event.data;
    //ここに処理を記述する
    console.log('[wt] ' + message);
    var result = "処理結果";
    postMessage(result);
}