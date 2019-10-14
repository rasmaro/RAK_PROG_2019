const puder = [{"imgSrc":"https://i.ebayimg.com/images/g/nmoAAOSwylBcGTbf/s-l1600.webp","title":"Pudrusärk","price":"$12.00","category":"puder"}];

const lusikad = [{"imgSrc":"https://i.ebayimg.com/images/g/XpkAAOSwtKldojKQ/s-l300.webp","title":"Vintage American Collectors Guild SPOON","price":"$5.99","category":"lusikad"} ];

const puuuuder = [{"imgSrc":"images/puder1.jpg","title":"Puder","price":"60€","category":"puuuuder"}, {"imgSrc":"images/puder2.jpg","title":"PUder","price":"1500€","category":"PUUDER"},{"imgSrc":"images/puder3.jpg","title":"PUDer","price":"5€","category":"puuuuder"},{"imgSrc":"images/puder4.jpg","title":"PUDEr","price":"50€","category":"puuuuder"}, {"imgSrc":"images/puder5.jpg","title":"puuuuder","price":"25€","category":"puuuuder"} ];

const getItems = () => {
    const items = [];
    puder.forEach((puder, index) =>{
        items.push({
            ...puder,
            id: "puder-" + index,
            category: "puder"
        })
    });
    lusikad.forEach((lusikad, index) =>{
        items.push({
            ...lusikad,
            id: "lusikad-" + index,
            category: "lusikad"
        });
    });
    puuuuder.forEach((puuuuder, index) =>{
        items.push({
            ...puuuuder,
            id: "puuuuder-" + index,
            category: "puuuuder"
        });
    });

    return items;
};

const getItem = (itemId) =>{
    return getItems().find( item => item.id === itemId);
};

module.exports = {
   getItems, getItem
}
