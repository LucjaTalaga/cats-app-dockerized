console.log("script is up");

(async function init(){
    console.log("Init runs");
    const response = await fetch('http://localhost:3001/get-cats');
    console.log("response", response);
    
    const cats = await response.json();
    console.log(typeof(cats));
    console.log(Object.keys(cats));
    if(Object.keys(cats).length === 0){
        console.log("cats not loaded");
        document.getElementById("no-loaded").style.visibility = "visible";
    }
    console.log((cats));
})();

//function showNoCatsSign()