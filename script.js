//your JS code here. If required.
// Function to detect the browser name and version
function getBrowserInfo() {
    // Get the user agent string
    const userAgent = navigator.userAgent;

    // Initialize variables for browser name and version
    let browserName = "Unknown Browser";
    let version = "Unknown Version";

    // Check for different browsers using regular expressions
    if (userAgent.includes("Chrome")) {
        browserName = "Chrome";
        version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes("Firefox")) {
        browserName = "Firefox";
        version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes("Safari")) {
        browserName = "Safari";
        version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes("Edge")) {
        browserName = "Edge";
        version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes("MSIE")) {
        browserName = "Internet Explorer";
        version = userAgent.match(/MSIE (\d+\.\d+)/)[1];
    }

    // Return the browser name and version
    return `You are using ${browserName} version ${version}`;
}

// Display the browser information in the div
document.getElementById("browser-info").innerText = getBrowserInfo();
