// Brand new file with bugs
function newFunctionWithBugs() {
    var a = 10;  // Bug: var instead of let/const
    var b = 20;  // Bug: var instead of let/const
    var c = a + b;  // Bug: unused variable
    console.log("This has bugs!");
    return a + b;
}

// Hardcoded credentials (security hotspot)
var password = "admin123";  // Bug: hardcoded password

// Empty catch block
try {
    JSON.parse("invalid json");
} catch (e) {
    // Empty catch - bug
}
