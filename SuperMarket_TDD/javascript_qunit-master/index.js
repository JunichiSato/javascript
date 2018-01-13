function getPrice(itemNumber) {
    var itemArray = {
        1:100,     // りんご
        2:40,      // みかん
        3:150,     // ぶどう
        4:350,     // のり弁
        5:400,     // しゃけ弁
        6:420,     //タバコ
        7:440,     // メンソールタバコ
        8:100,     // ライター
        9:80,      // お茶
        10:100,    // コーヒー
    }

    if (!itemArray.hasOwnProperty(itemNumber)) {
        throw new Error('商品番号が存在しません');
    }

    return itemArray[itemNumber];
}

function cart(items, itemCount) {
    if (items.length != itemCount.length){
        throw new Error('商品番号と個数の配列の長さが異なります');
    }

    var tax = 0;
    var taxExcluded = 0;
    for (var i = 0; i < items.length; i++) {
        taxExcluded += getPrice(items[i]) * itemCount[i];
    }
    tax = getTax(taxExcluded);

    return taxExcluded + tax;
}

function getTax(total) {
    const TAXRATIO = 0.08;
    var tax = total * TAXRATIO;

    return Math.floor(tax);
}