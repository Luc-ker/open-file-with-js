var string = "sdfjkl";

document.getElementById("box").addEventListener("click",function(){
	alert("Nice.")
});

var dict = {
  "WoodandSon": "Lee",
  "SunandMoon": "Ming",
  "OneandOne": "Two"
};


console.log(dict["WoodandSon"])

const readTxt = async() => {
  let url = "./text.txt";
  let response = await fetch (url);
  const txt = await response.text().then(( str ) => {
      return str.split('\r');    // return the string after splitting it.
  });
  
  let result = txt;

  let ele = document.getElementById('textData');
  for (i = 1; i <= result.length - 1; i++) {
    ele.innerHTML = ele.innerHTML + '<br />' + result[i];
  }
}

readTxt ();


