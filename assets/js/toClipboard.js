var query = window.location.href
var url = new URL(query);
var s = url.searchParams.get("s");
var data = url.searchParams.get("data");
console.log(s, data);

if (s !== null && data == "base64"){
    s = decodeURIComponent(s);
    s = Base64.decode(s);
    console.log(s, data);
    }

if (s !== null){
    document.getElementById("copytext").innerHTML = "\""+s+"\" was copied to the clipboard!";
    navigator.clipboard.writeText(s);
    }

//Incorporate this: https://stackoverflow.com/questions/13228835/passing-hash-symbol-in-request-parameter-of-url-not-working-in-firefox

