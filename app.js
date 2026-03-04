// Function with bug - unused variable
function calculateSum(a, b) {
    var result = a + b;
    var unusedVariable = "I am not used";
    return a + b;  // Bug: result variable defined but not used
}

// Function with security issue - hardcoded password
function login() {
    var username = "admin";
    var password = "password123";  // Security issue: hardcoded password
    console.log("Logging in with " + username);
}

// Function with duplicate code
function printHello() {
    console.log("Hello World");
}

function printHelloAgain() {
    console.log("Hello World");  // Duplicate code
}

// Function with empty catch block
function riskyOperation() {
    try {
        var x = 10 / 0;
    } catch (error) {
        // Empty catch block - bug
    }
}

// Function with complex condition (code smell)
function checkAccess(user) {
    if (user.role == "admin" || user.role == "superadmin" || user.role == "manager" || user.role == "director" || user.role == "ceo") {
        return true;
    } else {
        return false;
    }
}

// Global variable (bad practice)
globalVar = "I am global";  // Bug: global variable
