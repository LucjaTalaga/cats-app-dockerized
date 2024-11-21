console.log("script is up");

(async function init(){
    console.log("Init runs");
    const response = await fetch('http://localhost:3001/get-cats');
    console.log("response", response);
    const cats = await response.json();
    console.log(JSON.stringify(cats));
})();
