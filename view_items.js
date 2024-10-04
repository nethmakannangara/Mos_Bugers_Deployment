console.log("View Items");

const itemTabel = document.getElementById("item_table");

const burgersItem = [
    {
        itemCode: "B1001",
        itemName: "Classic Burger(Large)",
        price: "750.00",
        discont: "-"
    },
    {
        itemCode: "B1002",
        itemName: "Classic Burger(Regular)",
        price: "1550.00",
        discont: "15%"
    },
    {
        itemCode: "B1003",
        itemName: "Turkey Burger",
        price: "1600.00",
        discont: "-"
    },
    {
        itemCode: "B1004",
        itemName: "Chicken Burger(Large)",
        price: "1400.00",
        discont: "-"
    },
    {
        itemCode: "B1005",
        itemName: "Chicken Burger(Regular)",
        price: "800.00",
        discont: "20%"
    },
    {
        itemCode: "B1006",
        itemName: "Cheese Burger(Large)",
        price: "1000.00",
        discont: "-"
    },
    {
        itemCode: "B1007",
        itemName: "Cheese Burger(Regular)",
        price: "600.00",
        discont: "-"
    },
    {
        itemCode: "B1008",
        itemName: "Bacon Burger",
        price: "650.00",
        discont: "15%"
    },
    {
        itemCode: "B1009",
        itemName: "Shawarma Burger",
        price: "800.00",
        discont: "-"
    },
    {
        itemCode: "B1010",
        itemName: "Olive Burger",
        price: "1800.00",
        discont: "-"
    },
    {
        itemCode: "B1012",
        itemName: "Double_cheese Burger",
        price: "1250.00",
        discont: "20%"
    },
    {
        itemCode: "B1013",
        itemName: "Crispy Chicken Burgers(Regular)",
        price: "1200.00",
        discont: "-"
    }
];

const submarines = [
    {
        itemCode: "B1016",
        itemName: "Crispy Chicken Submerine(Large)",
        price: "2000.00",
        discont: "-"
    },
    {
        itemCode: "B1017",
        itemName: "Crispy Chicken Submerine(Regular)",
        price: "1500.00",
        discont: "-"
    },
    {
        itemCode: "B1018",
        itemName: "Chicken Submerine(Large)",
        price: "1800.00",
        discont: "3%"
    },
    {
        itemCode: "B1019",
        itemName: "Chicken Submerine(Regular)",
        price: "1400.00",
        discont: "-"
    },
    {
        itemCode: "B1020",
        itemName: "Grinder Submarine",
        price: "750.00",
        discont: "-"
    },
    {
        itemCode: "B1021",
        itemName: "Cheese Submarine",
        price: "2200.00",
        discont: "-"
    },
    {
        itemCode: "B1022",
        itemName: "Double Cheese & Chicken Submarine",
        price: "1900.00",
        discont: "16%"
    },
    {
        itemCode: "B1023",
        itemName: "Special Horgie Submarine",
        price: "2800.00",
        discont: "-"
    },
    {
        itemCode: "B1024",
        itemName: "MOS Special Submarine",
        price: "3000.00",
        discont: "-"
    }
];

const Fries = [
    {
        itemCode: "B1025",
        itemName: "Steak Fries (Large)",
        price: "1200.00",
        discont: "-"
    },
    {
        itemCode: "B1026",
        itemName: "Steak Fries (Medium) ",
        price: "600.00",
        discont: "-"
    },
    {
        itemCode: "B1027",
        itemName: "French Fries (Large)",
        price: "800.00",
        discont: "-"
    },
    {
        itemCode: "B1028",
        itemName: "French Fries (Medium) ",
        price: "650.00",
        discont: "-"
    },
    {
        itemCode: "B1029",
        itemName: "French Fries (Small)",
        price: "450.00",
        discont: "-"
    },
    {
        itemCode: "B1030",
        itemName: "Sweet Potato Fries (Large)",
        price: "600.00",
        discont: "-"
    }
];

const pastaItem = [
    {
        itemCode: "B1031",
        itemName: "Chicken & Cheese Pasta",
        price: "1600.00",
        discont: "15%"
    },
    {
        itemCode: "B1032",
        itemName: "Chicken Penne Pasta",
        price: "1700.00",
        discont: "-"
    },
    {
        itemCode: "B1033",
        itemName: "Ground Turkey Pasta Bake",
        price: "2900.00",
        discont: "10%"
    },
    {
        itemCode: "B1034",
        itemName: "Creamy Shrimp Pasta",
        price: "2000.00",
        discont: "-"
    },
    {
        itemCode: "B1035",
        itemName: "Lemon Butter Pasta",
        price: "1950.00",
        discont: "-"
    },
    {
        itemCode: "B1036",
        itemName: "Tagliatelle Pasta",
        price: "2400.00",
        discont: "1%"
    },
    {
        itemCode: "B1037",
        itemName: "Baked Ravioli",
        price: "2000.00",
        discont: "1%"
    }
];

const chickenItem = [
    {
        itemCode: "B1038",
        itemName: "Fried Chicken (Small)",
        price: "1200.00",
        discont: "15%"
    },
    {
        itemCode: "B1039",
        itemName: "Fried Chicken (Regular)",
        price: "2300.00",
        discont: "10%"
    },
    {
        itemCode: "B1040",
        itemName: "Fried Chicken (Large)",
        price: "3100.00",
        discont: "5%"
    },
    {
        itemCode: "B1041",
        itemName: "Hot Wings (Large)",
        price: "2400.00",
        discont: "-"
    },
    {
        itemCode: "B1042",
        itemName: "Devilled Chicken (Large)",
        price: "900.00",
        discont: ""
    },
    {
        itemCode: "B1043",
        itemName: "BBQ Chicken (Regular)",
        price: "2100.00",
        discont: ""
    },
];

const beveragesItem = [
    {
        itemCode: "B1044",
        itemName: "Pepsi (330ml)",
        price: "2100.00",
        discont: "5%"
    },
    {
        itemCode: "B1045",
        itemName: "Coca-Cola (330ml)",
        price: "2100.00",
        discont: "-"
    },
    {
        itemCode: "B1046",
        itemName: "Sprite (330ml)",
        price: "2100.00",
        discont: "3%"
    },
    {
        itemCode: "B1047",
        itemName: "Mirinda (330ml)",
        price: "2100.00",
        discont: "7%"
    },
];

setItemTable = (itemSet) => {

    let itemTabelDody = `<tr>
                        <th id="item_table_header">Item Code</th>
                        <th id="item_table_header">Item Name</th>
                        <th id="item_table_header">Price (Rs)</th>
                        <th id="item_table_header">Discount</th>
                    </tr>`;

    itemSet.forEach((item) => {
        itemTabelDody += `<tr>
                            <td id="item_table_details">${item.itemCode}</td>
                             <td id="item_table_details">${item.itemName}</td>
                            <td id="item_table_details">${item.price}</td>
                            <td id="item_table_details_col4">${item.discont}</td>
                         </tr>`
    });

    itemTabel.innerHTML = itemTabelDody;
}

loadTable = (num) => {
    switch (num) {
        case 1:
            setItemTable(burgersItem);
            break;
        case 2:
            setItemTable(submarines);
            break;
        case 3:
            setItemTable(Fries);
            break;
        case 4:
            setItemTable(pastaItem);
            break;
        case 5:
            setItemTable(chickenItem);
            break;
        case 6:
            setItemTable(beveragesItem);
            break;
    }
}

editItemDetails = () => {
    document.getElementById("edit_dialog_box").style.display = "block";

    document.getElementById("btnAdd").disable = false;
    document.getElementById("btnDelate").disable = false;
}

closeWindow = () => {
    document.getElementById("edit_dialog_box").style.display = "none";

    document.getElementById("itemID").value = null;
    document.getElementById("item_type").value = null;
    document.getElementById("txt_item_description").value = null;
    document.getElementById("txt_item_Price").value = null;
    document.getElementById("txt_item_discount").value = null;
    
}

searchItem = () => {
    let itemCode = document.getElementById("itemID").value;
    let itemType = document.getElementById("item_type").value;

    let itemIndex;

    if(itemType.length == 0){
        alert("Please Input Item type");
    }else{
        switch (itemType) {
            case "Burgers":
                itemIndex = getIndex(burgersItem, itemCode);
                setItem(itemIndex, burgersItem);
                break;
            case "Submarines":
                itemIndex = getIndex(submarines, itemCode);
                setItem(itemIndex, submarines);
            case "Fries":
                getIndex(Fries, itemCode);
                setItem(itemIndex, Fries);
            case "Pasta":
                itemIndex = getIndex(pastaItem, itemCode);
                setItem(itemIndex, pastaItem);
            case "Chicken":
                itemIndex = getIndex(chickenItem, itemCode);
                setItem(itemIndex, chickenItem);
            case "Beverages":
                itemIndex = getIndex(beveragesItem, itemCode);
                setItem(itemIndex, beveragesItem);
        }
    }
}

setItem = (itemIndex, list) => {
    if (itemIndex != -1) {
        let itemName = document.getElementById("txt_item_description").value = list[itemIndex].itemName;
        let price = document.getElementById("txt_item_Price").value = list[itemIndex].price;
        let discont = document.getElementById("txt_item_discount").value = list[itemIndex].discont;

        document.getElementById("btnAdd").disable = true;
    }else{
        document.getElementById("message_box").style.display = "block";
        document.getElementById("btnDelate").disable = true;
    }    
}

/* get item details */
getIndex = (list, itemCode) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].itemCode === itemCode) {
            return i;
        }
    }
    return -1;
}

checkItem = (itemcode, itemType) => {
    switch (itemType) {
        case "Burgers":
            return burgersItem.some(e => { e.itemCode === itemcode });
        case "Submarines":
            return submarines.some(e => e.itemCode === itemcode);
        case "Fries":
            return Fries.some(e => e.itemCode === itemcode);
        case "Pasta":
            return pastaItem.some(e => e.itemCode === itemcode);
        case "Chicken":
            return checkItem.some(e => e.itemCode === itemcode);
        case "Beverages":
            return beveragesItem.some(e => e.itemCode === itemcode);
        default:
            return false;
    }
}

addItems = () => {
    let itemCode = document.getElementById("itemID").value;
    let type = document.getElementById("item_type").value;
    let itemName = document.getElementById("txt_item_description").value;
    let price = document.getElementById("txt_item_Price").value;
    let discont = document.getElementById("txt_item_discount").value;

    const temp = { itemCode, itemName, price, discont }
    console.log(temp);

    switch (type) {
        case "Burgers":
            burgersItem.push(temp);
            loadTable(1);
            break;
        case "Submarines":
            submarines.push(temp);
            loadTable(2);
            break;
        case "Fries":
            Fries.push(temp);
            loadTable(3);
            break;
        case "Pasta":
            pastaItem.push(temp);
            loadTable(4);
            break;
        case "Chicken":
            chickenItem.push(temp);
            loadTable(5);
            break
        case "Beverages":
            beveragesItem.push(temp);
            loadTable(6);
            break;
    }
}

cancelBTN = () => {
    document.getElementById("message_box").style.display = "none";

    document.getElementById("item_type").value = null;
    document.getElementById("txt_item_description").value = null;
    document.getElementById("txt_item_Price").value = null;
    document.getElementById("txt_item_discount").value = null;

    disabledTxtFiled();
}


setItemTable(burgersItem);
