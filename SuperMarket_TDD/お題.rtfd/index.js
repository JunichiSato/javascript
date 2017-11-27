function getPrice(itemNumber) {
    var itemArray = {
        1:100,
        2:40,
        3:150,
        4:350,
        5:400,
        6:420,
        7:440,
        8:100,
        9:80,
        10:100
    }

    if (!itemArray.hasOwnProperty(itemNumber)) {
        throw new Error('商品番号が存在しません');
    }
    
    return itemArray[itemNumber];
}

function cart(items, itemCount) {
    if (items.length != itemCount.length) {
        throw new Error('商品番号と個数の配列の長さが異なります');
    }

    var excludeTax = 0;
    var includeTax = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] === 6 || items[i] === 7) {
            excludeTax += getPrice(items[i]) * itemCount[i];
        } else {
            includeTax += getPrice(items[i]) * itemCount[i];
        }
    }

    return taxAdd(includeTax) + excludeTax;
}

function taxAdd(total) {
    const TAXRATIO = 0.08;
    var tax = total * TAXRATIO;
    
    return total + Math.floor(tax);
}