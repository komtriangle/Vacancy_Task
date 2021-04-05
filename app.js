data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

print('Название товара: '+data.displayedName.displayedName.value[0])
let shops = []
let stocks = data.stock.stocks['34']
let max_count_prod =0
let shop_max_cnt = 0
for(key in stocks){
    if(Number(stocks[key]) > 0){
        shops.push(Number(key))
        if(Number(stocks[key]) > max_count_prod){
            max_count_prod = Number(stocks[key])
            shop_max_cnt = Number(key)
        }
    }
}
print('Магазины: ', shops)
print('Магазин с максимальным количеством товара: ',shop_max_cnt,', количество товара: ',max_count_prod)

