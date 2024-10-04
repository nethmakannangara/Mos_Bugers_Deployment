console.log("Home Page");

const adminDetails = [
    {
        userName:"admin",
        password:"admin1234"
    }
];

const userDetails = [
    {
        userName:"user",
        password:"user1234"
    }
];

loadAdminLoginForm = () =>{
    document.getElementById("admin_login_dialog_box").style.display = "block";
}

loadUserLoginForm = () =>{
    document.getElementById("user_login_dialog_box").style.display = "block";
}

checkAdminDetails =() =>{
    let inputAdminName = document.getElementById("txt_admin_username").value;
    let inputAdminPassword = document.getElementById("txt_admin_password").value;

    for (let index = 0; index < adminDetails.length; index++) {
        var tempDetails = adminDetails[index];

        if (tempDetails.userName === inputAdminName && tempDetails.password === inputAdminPassword) {
            document.getElementById("login_error_message").style.display = "none";
            window.open("admin_page.html","_self")
        }else{
            document.getElementById("login_error_message").style.display = "block";
            document.getElementById("txt_admin_password").value = null;
        }
    }  
}

checkUserInputDetails =() =>{
    let inputUserName = document.getElementById("txt_user_username").value;
    let inputUserPassword = document.getElementById("txt_user_password").value;


    for (let index = 0; index < userDetails.length; index++) {
        var tempDetails = userDetails[index];

        if (tempDetails.userName === inputUserName && tempDetails.password === inputUserPassword) {
            document.getElementById("login_error_message").style.display = "none";
            window.open("user_page.html","_self")
        }else{
            document.getElementById("user_login_error_message").style.display = "block";
            document.getElementById("txt_user_password").value = null;
        }
    }  
}

alert("ADMIN- -> UserName : admin  Password : admin1234 /n USER - > UserName : user  Password : user1234" );

//--------Add data to localstorage------------//

// localStorage.setItem(adminDetails);
// localStorage.setItem(userDetails);

// const order_details = [
//     {
//         orderId:"O1001",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006 ",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1002",
//         customerID:"C0105",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006 ",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1003",
//         customerID:"C0102",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1004",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006, B1006, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     },
//     {
//         orderId:"O1005",
//         customerID:"C0101",
//         orderDate:"Thu, 10/3/2024",
//         orderItem:"B1004, B1006",
//         amount:"4000.00"
//     }
// ];

localStorage.setItem(order_details);

/**-----Customer ArrayList----- */
// const customer = [
//     {
//         id: "C0001",
//         name: "Amal",
//         teleNO: "077 1212121",
//         address: "Panadura"
//     },
//     {
//         id: "C0002",
//         name: "Kamal",
//         teleNO: "077 1212122",
//         address: "Kaluthara"
//     },
//     {
//         id: "C0003",
//         name: "Nimal",
//         teleNO: "077 1212123",
//         address: "Wadduwa"
//     },
//     {
//         id: "C0004",
//         name: "Sunil",
//         teleNO: "077 1212124",
//         address: "Waskaduwa"
//     },
//     {
//         id: "C0005",
//         name: "Nihal",
//         teleNO: "077 1212124",
//         address: "Wadiyamnkada"
//     }
// ];
/**-------------------------------*/

/**-----Order ArrayList----- */
// const order = [
//     {
//         orderID: "O0001",
//         custID: "C0001",
//         amount: 2600

//     },
//     {
//         orderID: "O0002",
//         custID: "C0002",
//         amount: 2700

//     },
//     {
//         orderID: "O0003",
//         custID: "C0003",
//         amount: 640

//     }
//     , {
//         orderID: "O0004",
//         custID: "C0004",
//         amount: 2600

//     }
// ];
/**-------------------------------*/

// localStorage.setItem(customer);
// localStorage.setItem(order);

// const burgersItem = [
//     {
//         itemCode: "B1001",
//         itemName: "Classic Burger(Large)",
//         price: "750.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1002",
//         itemName: "Classic Burger(Regular)",
//         price: "1550.00",
//         discont: "15%"
//     },
//     {
//         itemCode: "B1003",
//         itemName: "Turkey Burger",
//         price: "1600.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1004",
//         itemName: "Chicken Burger(Large)",
//         price: "1400.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1005",
//         itemName: "Chicken Burger(Regular)",
//         price: "800.00",
//         discont: "20%"
//     },
//     {
//         itemCode: "B1006",
//         itemName: "Cheese Burger(Large)",
//         price: "1000.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1007",
//         itemName: "Cheese Burger(Regular)",
//         price: "600.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1008",
//         itemName: "Bacon Burger",
//         price: "650.00",
//         discont: "15%"
//     },
//     {
//         itemCode: "B1009",
//         itemName: "Shawarma Burger",
//         price: "800.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1010",
//         itemName: "Olive Burger",
//         price: "1800.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1012",
//         itemName: "Double_cheese Burger",
//         price: "1250.00",
//         discont: "20%"
//     },
//     {
//         itemCode: "B1013",
//         itemName: "Crispy Chicken Burgers(Regular)",
//         price: "1200.00",
//         discont: "-"
//     }
// ];

// const submarines = [
//     {
//         itemCode: "B1016",
//         itemName: "Crispy Chicken Submerine(Large)",
//         price: "2000.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1017",
//         itemName: "Crispy Chicken Submerine(Regular)",
//         price: "1500.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1018",
//         itemName: "Chicken Submerine(Large)",
//         price: "1800.00",
//         discont: "3%"
//     },
//     {
//         itemCode: "B1019",
//         itemName: "Chicken Submerine(Regular)",
//         price: "1400.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1020",
//         itemName: "Grinder Submarine",
//         price: "750.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1021",
//         itemName: "Cheese Submarine",
//         price: "2200.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1022",
//         itemName: "Double Cheese & Chicken Submarine",
//         price: "1900.00",
//         discont: "16%"
//     },
//     {
//         itemCode: "B1023",
//         itemName: "Special Horgie Submarine",
//         price: "2800.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1024",
//         itemName: "MOS Special Submarine",
//         price: "3000.00",
//         discont: "-"
//     }
// ];

// const fries = [
//     {
//         itemCode: "B1025",
//         itemName: "Steak Fries (Large)",
//         price: "1200.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1026",
//         itemName: "Steak Fries (Medium) ",
//         price: "600.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1027",
//         itemName: "French Fries (Large)",
//         price: "800.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1028",
//         itemName: "French Fries (Medium) ",
//         price: "650.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1029",
//         itemName: "French Fries (Small)",
//         price: "450.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1030",
//         itemName: "Sweet Potato Fries (Large)",
//         price: "600.00",
//         discont: "-"
//     }
// ];

// const pastaItem = [
//     {
//         itemCode: "B1031",
//         itemName: "Chicken & Cheese Pasta",
//         price: "1600.00",
//         discont: "15%"
//     },
//     {
//         itemCode: "B1032",
//         itemName: "Chicken Penne Pasta",
//         price: "1700.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1033",
//         itemName: "Ground Turkey Pasta Bake",
//         price: "2900.00",
//         discont: "10%"
//     },
//     {
//         itemCode: "B1034",
//         itemName: "Creamy Shrimp Pasta",
//         price: "2000.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1035",
//         itemName: "Lemon Butter Pasta",
//         price: "1950.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1036",
//         itemName: "Tagliatelle Pasta",
//         price: "2400.00",
//         discont: "1%"
//     },
//     {
//         itemCode: "B1037",
//         itemName: "Baked Ravioli",
//         price: "2000.00",
//         discont: "1%"
//     }
// ];

// const chickenItem = [
//     {
//         itemCode: "B1038",
//         itemName: "Fried Chicken (Small)",
//         price: "1200.00",
//         discont: "15%"
//     },
//     {
//         itemCode: "B1039",
//         itemName: "Fried Chicken (Regular)",
//         price: "2300.00",
//         discont: "10%"
//     },
//     {
//         itemCode: "B1040",
//         itemName: "Fried Chicken (Large)",
//         price: "3100.00",
//         discont: "5%"
//     },
//     {
//         itemCode: "B1041",
//         itemName: "Hot Wings (Large)",
//         price: "2400.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1042",
//         itemName: "Devilled Chicken (Large)",
//         price: "900.00",
//         discont: ""
//     },
//     {
//         itemCode: "B1043",
//         itemName: "BBQ Chicken (Regular)",
//         price: "2100.00",
//         discont: ""
//     },
// ];

// const beveragesItem = [
//     {
//         itemCode: "B1044",
//         itemName: "Pepsi (330ml)",
//         price: "2100.00",
//         discont: "5%"
//     },
//     {
//         itemCode: "B1045",
//         itemName: "Coca-Cola (330ml)",
//         price: "2100.00",
//         discont: "-"
//     },
//     {
//         itemCode: "B1046",
//         itemName: "Sprite (330ml)",
//         price: "2100.00",
//         discont: "3%"
//     },
//     {
//         itemCode: "B1047",
//         itemName: "Mirinda (330ml)",
//         price: "2100.00",
//         discont: "7%"
//     },
// ];

// localStorage.setItem(burgersItem,JSON.stringify(beveragesItem));
// localStorage.setItem(submarines);
// localStorage.setItem(fries);
// localStorage.setItem(pastaItem);
// localStorage.setItem(chickenItem);
// localStorage.setItem(beveragesItem);




