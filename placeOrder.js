let customerID = 6;
let orderID = 5;
let total = 0.00;

/**-----Customer ArrayList----- */
const customer = [
    {
        id: "C0001",
        name: "Amal",
        teleNO: "077 1212121",
        address: "Panadura"
    },
    {
        id: "C0002",
        name: "Kamal",
        teleNO: "077 1212122",
        address: "Kaluthara"
    },
    {
        id: "C0003",
        name: "Nimal",
        teleNO: "077 1212123",
        address: "Wadduwa"
    },
    {
        id: "C0004",
        name: "Sunil",
        teleNO: "077 1212124",
        address: "Waskaduwa"
    },
    {
        id: "C0005",
        name: "Nihal",
        teleNO: "077 1212124",
        address: "Wadiyamnkada"
    }
];
/**-------------------------------*/

/**-----Order ArrayList----- */
const order = [
    {
        orderID: "O0001",
        custID: "C0001",
        amount: 2600

    },
    {
        orderID: "O0002",
        custID: "C0002",
        amount: 2700

    },
    {
        orderID: "O0003",
        custID: "C0003",
        amount: 640

    }
    , {
        orderID: "O0004",
        custID: "C0004",
        amount: 2600

    }
];
/**-------------------------------*/

disabledTxtFiled = () => {
    document.getElementById("btnPlaceOrder").disabled = true;
    document.getElementById("btnAddCustomer").disabled = true;
    document.getElementById("id-details").disabled = true;
    document.getElementById("name-details").disabled = true;
    document.getElementById("address-details").disabled = true;

    document.getElementById("order-id").disabled = true;
    document.getElementById("order-item").disabled = true;
    document.getElementById("quantity").disabled = true;
}

clearTxtFiled = () => {
    document.getElementById("id-details").value = null;
    document.getElementById("name-details").value = null;
    document.getElementById("address-details").value = null;

    document.getElementById("order-id").value = null;
    document.getElementById("order-item").value = null;
    document.getElementById("quantity").value = null;
}

searchCustomer = () => {
    let telephoneNO = document.getElementById("telephone-no").value;
    let index ;

    if (telephoneNO.length != 0) {
        index = getIndex(telephoneNO);
    } else {
        document.getElementById("message_box_2").style.display = "block";
    }


    if (index != -1) {
        document.getElementById("id-details").value = customer[index].id;
        document.getElementById("name-details").value = customer[index].name;
        document.getElementById("address-details").value = customer[index].address;

        /* enabled order txtFiled*//* enabled order txtFiled*/

        document.getElementById("order-id").value = "O000" + orderID;
        document.getElementById("order-item").disabled = false;
        document.getElementById("quantity").disabled = false;

    } else {
        document.getElementById("message_box").style.display = "block";
    }


}

/* check previous customer */
checkDetails = (no) => {
    customer.forEach(element => {
        if (element.teleNO === no) {

            return true;
        }
    });
}

/* get customer details */
getIndex = (no) => {
    let index = -1;
    for (let i = 0; i < customer.length; i++) {
        if (customer[i].teleNO === no) {
            return i;
        }
    }
    return -1;
}


/* message box function */
addBTN = () => {
    document.getElementById("btnAddCustomer").disabled = false;
    document.getElementById("message_box").style.display = "none";

    /*Enabale text filed */
    document.getElementById("name-details").disabled = false;
    document.getElementById("address-details").disabled = false;

    document.getElementById("id-details").value = "C000" + customerID;

    document.getElementById("name-details").value = null;
    document.getElementById("address-details").value = null;

}

cancelBTN = () => {
    document.getElementById("message_box").style.display = "none";
    document.getElementById("message_box_2").style.display = "none";

    disabledTxtFiled();
}

// window.onclick = function (event) {
//     if (event.target == document.getElementById("message_box")) {
//         document.getElementById("message_box").style.display = "none";
//     }
// }

/*-------------------------------------------------------------------------- */


addCustomer = () => {

    let id = document.getElementById("id-details").value;
    let name = document.getElementById("name-details").value;
    let teleNO = document.getElementById("telephone-no").value
    let address = document.getElementById("address-details").value;

    const temp = { id, name, teleNO, address }

    customer.push(temp);

    /*increase customer ID*/
    customerID++;

    document.getElementById("btnAddCustomer").disabled = "true";

    document.getElementById("order-id").value = "O000" + orderID;
    document.getElementById("order-item").disabled = false;
    document.getElementById("quantity").disabled = false;
    document.getElementById("name-details").disabled = true;
    document.getElementById("address-details").disabled = true;

}

/** ----------Place Order----------- */
addOrder = () => {
    let orderID = document.getElementById("order-id").value;
    let item = document.getElementById("order-item").value;
    let qty = document.getElementById("quantity").value;

    if (qty === "") {
        document.getElementById("invalid_quantity").style.display = "block";
    } else {
        document.getElementById("btnPlaceOrder").disabled = false;

        chooseItem(item, parseInt(qty));

        document.getElementById("invalid_quantity").style.display = "none";
        document.getElementById("order_items_list").style.display = "block";
    }

}

chooseItem = (item, qty) => {

    switch (item) {
        case "B1001":
            total += 750 * parseInt(qty);
            updateOrderLabel("B1001 - Classic Burger (Large)", qty);
            break;
        case "B1002":
            total += 1500 * qty - ((1500 * 0.15) * qty);
            updateOrderLabel("B1002 - Classic Burger (Regular)", qty);
            break;
        case "B1003":
            total += 1600 * qty;
            updateOrderLabel("B1003 - Turkey Burger", qty);
            break;
        case "B1004":
            total += 1400 * qty;
            updateOrderLabel("B1004 - Classic Burger (Large)", qty);
            break;
        case "B1005":
            total += 800 * qty - ((800 * 0.2) * parseInt(qty));
            updateOrderLabel("B1005 - Classic Burger (Large)", qty);
            break;
        case "B1006":
            total += 1000 * qty;
            updateOrderLabel("B1006 - Cheese Burger (Large)", qty);
            break;
        case "B1007":
            total += 600 * qty;
            updateOrderLabel("B1007 - Cheese Burger (Regular)", qty);
            break;
        case "B1008":
            total += 650 * qty - ((650 * 0.15) * parseInt(qty));
            updateOrderLabel("B1008 - Bacon Burger", qty);
            break;
        case "B1009":
            total += 800 * qty;
            updateOrderLabel("B1009 - Shawarma Burger", qty);
            break;
        case "B1010":
            total += 1800 * qty;
            updateOrderLabel("B1010 - Olive Burger", qty);
            break;
        case "B10012":
            total += 1250 * qty - ((1250 * 0.2) * parseInt(qty));
            updateOrderLabel("B1012 - Double-Cheese Burger", qty);
            break;
        case "B1013":
            total += 1200 * qty;
            updateOrderLabel("B1013 - Crispy Chicken Burger (Regular)", qty);
            break;
        case "B10014":
            total += 1600 * qty - ((1600 * 0.1) * parseInt(qty));
            updateOrderLabel("B1014 - Crispy Chicken Burger (Large)", qty);
            break;
        case "B1015":
            total += 900 * qty;
            updateOrderLabel("B1015 - Paneer Burger", qty);
            break;
        default:

            break;
    }
    document.getElementById("amount").innerHTML = total + ".00";
}

updateOrderLabel = (order, qty) => {
    document.getElementById("items").innerHTML += "<br>" + order + " x " + qty;
}
placeOrder = () => {
    // document.getElementById("order-item-display").innerHTML =null;

    document.getElementById("amount").innerHTML = total + ".00";
    document.getElementById("amount").style.color = "#c1121f";
    document.getElementById("lbl_amount").style.color = "#c1121f";

    total = 0.00

    disabledTxtFiled();
    document.getElementById("btnPlaceOrder").disabled = true;

}

newOrder = () => {

    document.getElementById("invalid_quantity").style.display = "none";
    document.getElementById("order_items_list").style.display = "none";

    document.getElementById("telephone-no").value = null;

    document.getElementById("amount").innerHTML = total + ".00";
    document.getElementById("items").innerHTML = null;

    document.getElementById("amount").style.color = "#c1121f";
    document.getElementById("lbl_amount").style.color = "#000";
    document.getElementById("amount").style.color = "#000";
    clearTxtFiled();

    orderID++;
}

//------------FUNCTION CALL-----------//

disabledTxtFiled();