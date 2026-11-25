


// ==========================================
// PART 1: CALLBACK HELL (10 QUESTIONS)
// ==========================================

// Q1: Order Processing System

function placeOrder(payment) {
    console.log("Order Placed!");
    payment();
}

function paymentProcess(food) {
    console.log("Payment Successful!");
    food();
}

function prepareFood(deliver) {
    console.log("Food is Preparing!");
    deliver();
}

function deliverFood() {
    console.log("Food Delivered!");
}

placeOrder(function () {
    paymentProcess(function () {
        prepareFood(function () {
            deliverFood();
        });
    });
});


// Q2: Student Registration System

function register(verify) {
    console.log("Student Registered!");
    verify();
}

function verifyEmail(create) {
    console.log("Email Verified!");
    create();
}

function createAccount(login) {
    console.log("Account Created!");
    login();
}

function login() {
    console.log("Login Successful!");
}

register(function () {
    verifyEmail(function () {
        createAccount(function () {
            login();
        });
    });
});


// Q3: Online Shopping System

function selectProduct(payment) {
    console.log("Product Selected!");
    payment();
}

function makePayment(shipping) {
    console.log("Payment Done!");
    shipping();
}

function shipProduct(delivery) {
    console.log("Product Shipped!");
    delivery();
}

function deliverProduct() {
    console.log("Product Delivered!");
}

selectProduct(function () {
    makePayment(function () {
        shipProduct(function () {
            deliverProduct();
        });
    });
});


// Q4: Library Management System

function searchBook(issue) {
    console.log("Book Found!");
    issue();
}

function issueBook(returnBook) {
    console.log("Book Issued!");
    returnBook();
}

function returnBook(finish) {
    console.log("Book Returned!");
    finish();
}

function finish() {
    console.log("Process Completed!");
}

searchBook(function () {
    issueBook(function () {
        returnBook(function () {
            finish();
        });
    });
});


// Q5: Hospital Appointment System

function bookAppointment(check) {
    console.log("Appointment Booked!");
    check();
}

function checkDoctor(consult) {
    console.log("Doctor Available!");
    consult();
}

function consultation(medicine) {
    console.log("Consultation Completed!");
    medicine();
}

function prescribeMedicine() {
    console.log("Medicine Prescribed!");
}

bookAppointment(function () {
    checkDoctor(function () {
        consultation(function () {
            prescribeMedicine();
        });
    });
});


// Q6: ATM Transaction System

function insertCard(pin) {
    console.log("Card Inserted!");
    pin();
}

function enterPin(balance) {
    console.log("PIN Verified!");
    balance();
}

function checkBalance(withdraw) {
    console.log("Balance Checked!");
    withdraw();
}

function withdrawMoney() {
    console.log("Money Withdrawn!");
}

insertCard(function () {
    enterPin(function () {
        checkBalance(function () {
            withdrawMoney();
        });
    });
});


// Q7: Movie Ticket Booking

function selectMovie(seat) {
    console.log("Movie Selected!");
    seat();
}

function selectSeat(payment) {
    console.log("Seat Selected!");
    payment();
}

function payTicket(ticket) {
    console.log("Payment Successful!");
    ticket();
}

function generateTicket() {
    console.log("Ticket Generated!");
}

selectMovie(function () {
    selectSeat(function () {
        payTicket(function () {
            generateTicket();
        });
    });
});


// Q8: Website Login System

function enterUsername(password) {
    console.log("Username Entered!");
    password();
}

function enterPassword(verify) {
    console.log("Password Entered!");
    verify();
}

function verifyUser(dashboard) {
    console.log("User Verified!");
    dashboard();
}

function openDashboard() {
    console.log("Dashboard Opened!");
}

enterUsername(function () {
    enterPassword(function () {
        verifyUser(function () {
            openDashboard();
        });
    });
});


// Q9: Exam Result System

function submitExam(check) {
    console.log("Exam Submitted!");
    check();
}

function checkAnswers(calculate) {
    console.log("Answers Checked!");
    calculate();
}

function calculateResult(show) {
    console.log("Result Calculated!");
    show();
}

function showResult() {
    console.log("Result Displayed!");
}

submitExam(function () {
    checkAnswers(function () {
        calculateResult(function () {
            showResult();
        });
    });
});


// Q10: Food Delivery App

function selectFood(payment) {
    console.log("Food Selected!");
    payment();
}

function paymentProcess2(restaurant) {
    console.log("Payment Completed!");
    restaurant();
}

function restaurantPrepare(delivery) {
    console.log("Food Prepared!");
    delivery();
}

function deliveryFood() {
    console.log("Food Delivered!");
}

selectFood(function () {
    paymentProcess2(function () {
        restaurantPrepare(function () {
            deliveryFood();
        });
    });
});



// ==========================================
// PART 2: PROMISES (10 QUESTIONS)
// ==========================================


// Q1: Simple Promise

let myPromise = new Promise(function(resolve, reject) {
    resolve("Task Completed!");
});

myPromise.then(function(result) {
    console.log(result);
});


// Q2: Promise with Reject

let promise2 = new Promise(function(resolve, reject) {
    reject("Something went wrong!");
});

promise2.catch(function(error) {
    console.log(error);
});


// Q3: Student Registration

let registration = new Promise(function(resolve, reject) {
    let registered = true;

    if (registered) {
        resolve("Registration Successful!");
    } else {
        reject("Registration Failed!");
    }
});

registration
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Q4: Check Payment

let payment = new Promise(function(resolve, reject) {
    let paid = true;

    if (paid) {
        resolve("Payment Successful!");
    } else {
        reject("Payment Failed!");
    }
});

payment
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Q5: Check Age

let ageCheck = new Promise(function(resolve, reject) {
    let age = 20;

    if (age >= 18) {
        resolve("Eligible!");
    } else {
        reject("Not Eligible!");
    }
});

ageCheck
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Q6: Check Internet Connection

let internet = new Promise(function(resolve, reject) {
    let connected = true;

    if (connected) {
        resolve("Internet Connected!");
    } else {
        reject("No Internet Connection!");
    }
});

internet
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Q7: Download File

let download = new Promise(function(resolve, reject) {
    let downloaded = true;

    if (downloaded) {
        resolve("File Downloaded!");
    } else {
        reject("Download Failed!");
    }
});

download
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Q8: Check Exam Result

let examResult = new Promise(function(resolve, reject) {
    let marks = 75;

    if (marks >= 50) {
        resolve("You Passed!");
    } else {
        reject("You Failed!");
    }
});

examResult
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});


// Q9: Product Availability

let product = new Promise(function(resolve, reject) {
    let available = false;

    if (available) {
        resolve("Product Available!");
    } else {
        reject("Product Out of Stock!");
    }
});

product
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});


// Q10: Login Authentication

let loginPromise = new Promise(function(resolve, reject) {
    let username = "admin";
    let password = "1234";

    if (username === "admin" && password === "1234") {
        resolve("Login Successful!");
    } else {
        reject("Invalid Username or Password!");
    }
});

loginPromise
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});



// ==========================================
// PART 3: PROMISE CHAINING (10 QUESTIONS)
// ==========================================


// Q1: Student Registration

let student = Promise.resolve("Student Registered!");

student
.then(function(result) {
    console.log(result);
    return "Email Verified!";
})
.then(function(result) {
    console.log(result);
    return "Account Created!";
})
.then(function(result) {
    console.log(result);
});


// Q2: Order Processing

let order = Promise.resolve("Order Placed!");

order
.then(function(result) {
    console.log(result);
    return "Payment Completed!";
})
.then(function(result) {
    console.log(result);
    return "Food Prepared!";
})
.then(function(result) {
    console.log(result);
    return "Food Delivered!";
})
.then(function(result) {
    console.log(result);
});


// Q3: Online Shopping

let shopping = Promise.resolve("Product Selected!");

shopping
.then(function(result) {
    console.log(result);
    return "Added to Cart!";
})
.then(function(result) {
    console.log(result);
    return "Payment Successful!";
})
.then(function(result) {
    console.log(result);
    return "Product Shipped!";
})
.then(function(result) {
    console.log(result);
});


// Q4: Login System

let loginChain = Promise.resolve("Username Entered!");

loginChain
.then(function(result) {
    console.log(result);
    return "Password Verified!";
})
.then(function(result) {
    console.log(result);
    return "Login Successful!";
})
.then(function(result) {
    console.log(result);
    return "Dashboard Opened!";
})
.then(function(result) {
    console.log(result);
});


// Q5: ATM System

let atm = Promise.resolve("Card Inserted!");

atm
.then(function(result) {
    console.log(result);
    return "PIN Verified!";
})
.then(function(result) {
    console.log(result);
    return "Balance Checked!";
})
.then(function(result) {
    console.log(result);
    return "Money Withdrawn!";
})
.then(function(result) {
    console.log(result);
});


// Q6: Movie Ticket Booking

let movie = Promise.resolve("Movie Selected!");

movie
.then(function(result) {
    console.log(result);
    return "Seat Selected!";
})
.then(function(result) {
    console.log(result);
    return "Payment Completed!";
})
.then(function(result) {
    console.log(result);
    return "Ticket Generated!";
})
.then(function(result) {
    console.log(result);
});


// Q7: Exam Result System

let exam = Promise.resolve("Exam Submitted!");

exam
.then(function(result) {
    console.log(result);
    return "Answers Checked!";
})
.then(function(result) {
    console.log(result);
    return "Marks Calculated!";
})
.then(function(result) {
    console.log(result);
    return "Result Published!";
})
.then(function(result) {
    console.log(result);
});


// Q8: Library System

let library = Promise.resolve("Book Searched!");

library
.then(function(result) {
    console.log(result);
    return "Book Found!";
})
.then(function(result) {
    console.log(result);
    return "Book Issued!";
})
.then(function(result) {
    console.log(result);
    return "Book Returned!";
})
.then(function(result) {
    console.log(result);
});


// Q9: Hospital System

let hospital = Promise.resolve("Appointment Booked!");

hospital
.then(function(result) {
    console.log(result);
    return "Doctor Checked!";
})
.then(function(result) {
    console.log(result);
    return "Patient Examined!";
})
.then(function(result) {
    console.log(result);
    return "Medicine Prescribed!";
})
.then(function(result) {
    console.log(result);
});


// Q10: File Upload System

let upload = Promise.resolve("File Selected!");

upload
.then(function(result) {
    console.log(result);
    return "File Validated!";
})
.then(function(result) {
    console.log(result);
    return "File Uploaded!";
})
.then(function(result) {
    console.log(result);
    return "Upload Completed!";
})
.then(function(result) {
    console.log(result);
});


// ==========================================
// END OF PRACTICE
// TOTAL: 30 QUESTIONS
// ==========================================
