console.log("viewOrder");

const order_details = [
    {
        orderId:"O1001",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006 ",
        amount:"4000.00"
    },
    {
        orderId:"O1002",
        customerID:"C0105",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006 ",
        amount:"4000.00"
    },
    {
        orderId:"O1003",
        customerID:"C0102",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1004",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006, B1006, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    },
    {
        orderId:"O1005",
        customerID:"C0101",
        orderDate:"Thu, 10/3/2024",
        orderItem:"B1004, B1006",
        amount:"4000.00"
    }
];

const date = new Date();

const format = {
    weekday:`short`,
    year:`numeric`,
    month: `numeric`,
    day:`numeric`
};

console.log(date.toLocaleDateString(`en-US`,format));

showOrderDetails = () =>{
    let tblOrderDetails = document.getElementById("tbl_view_order");

    let tabelBody = `<tr>
                        <th id="tblOrder_header">Order Id</th>
                        <th id="tblOrder_header">Customer ID</th>
                        <th id="tblOrder_header">Order Date</th>
                        <th id="tblOrder_header">Order Items</th>
                        <th id="tblOrder_header">Amount</th>
                    </tr>`;

    order_details.forEach(element =>{
        tabelBody += `<tr>
                            <td id="tblOrder_details">${element.orderId}</td>
                            <td id="tblOrder_details">${element.customerID}</td>
                            <td id="tblOrder_details">${element.orderDate}</td>
                            <td id="tblOrder_details">${element.orderItem}</td>
                            <td id="tblOrder_details">${element.amount}</td>
                        </tr>`
    });
    

    tblOrderDetails.innerHTML = tabelBody;
}

showOrderDetails();