const express = require("express");
const app = express();
const dotenv = require("dotenv")

const conn = require("./conn.js")
// EJS
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public files
app.use(express.static("public"));
app.use("/images", express.static("public/images"));

// Home
app.get("/", (req, res) => {
    res.render("index", {
        website: "Coffee Time"
    });
});


// Menu
app.get("/menu", (req, res) => {
    res.render("menu");
});
app.get("/user/orders", (req, res) => {
    res.render("customer/user_order",{orders: "Orders"});
});
app.get("/profile", (req, res) => {
    res.render("profile");
});


// Register
app.post("/user/register", (req, res) => {
    console.log("Register request received");
    res.redirect("/user/login");
});
// Login page
app.get("/user/login", (req, res) => {
    res.render("customer/user_login", {
        customer: "Login"
    });
});
// Forgot password
app.get("/user/forgot", (req, res) => {
    res.render("customer/user_forgot", {
        forgotpassword: "Forgot Password"
    });

});

// ADMIN
app.post("/admin/login", (req, res) => {
    console.log("Admin login");
});
app.post("/admin/forgot", (req, res) => {
    console.log("Admin forgot password");
});
app.post("/admin/dashboard", (req, res) => {
    console.log("Admin dashboard");
});
app.post("/admin/setting", (req, res) => {
    console.log("Admin settings");
});
app.get("/admin/view_order", (req, res) => {
    console.log("View orders");
});
app.get("/admin/edit_item", (req, res) => {
    console.log("Edit item");
});



// CASHIER
app.post("/cashier/login", (req, res) => {
    console.log("Cashier login");
});
app.post("/cashier/order", (req, res) => {
    console.log("Cashier order");
});
app.post("/cashier/customer_order", (req, res) => {
    console.log("Customer order");
});



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});