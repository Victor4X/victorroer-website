var query = window.location.href
var url = new URL(query);
var s = url.searchParams.get("s");
console.log(s);
if (s !== null){
    document.getElementById("copytext").innerHTML = "\""+s+"\" was copied to the clipboard!";
    navigator.clipboard.writeText(s);
    }

