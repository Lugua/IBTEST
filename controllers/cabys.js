const methods = {
    getProducts: (req, res) => {
        let products = {};

        products.header = [{ "title": "Código del bien o servicio", "data": "__EMPTY_16", "sTitle": "Código del bien o servicio", "mData": "__EMPTY_16" },
        { "title": "Descripción del bien o servicio", "data": "__EMPTY_17", "sTitle": "Descripción del bien o servicio", "mData": "__EMPTY_17" },
        { "title": "Impuesto", "data": "__EMPTY_18", "sTitle": "Impuesto", "mData": "__EMPTY_18" }];

        products.values = [];
        global.cabysProducts.values.map(itemCabys => {
            var item = {};
            item.__EMPTY_16 = itemCabys.__EMPTY_16;
            item.__EMPTY_17 = itemCabys.__EMPTY_17;
            item.__EMPTY_18 = itemCabys.__EMPTY_18;
            products.values.push(item);
        })

        res.send(products);
    },
    getCategory: (req, res) => {
        let products = global.cabysProducts.values.filter(info => info.__EMPTY_2 == req.body.category)
        res.json(products);
    }
}




module.exports = methods