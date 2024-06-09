let button = document.querySelector("button");
let select = document.querySelector("select");
let str = "";
let xhr = new XMLHttpRequest();
window.addEventListener("load", () => {
  xhr.onreadystatechange = getdetails;
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.send(null);
});
let obj;
function getdetails() {
  obj = JSON.parse(xhr.responseText);
  console.log(obj);
  obj.forEach((e) => {
    str += "<option>" + e.name.common + "</option>";
  });
  let select = document.querySelector("select");
  select.innerHTML = str;
}
/**/
let cname = "";
let cobj;
button.addEventListener("click", () => {
  cname = select.value;
  console.log(cname);
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].name.common === cname);
    if (obj[i].name.common === cname) {
      cobj = obj[i];
      setdetails();
      break;
    }
  }
});

let img = document.querySelector("img");
let capital = document.querySelector(".p1");
let curr = document.querySelector(".p2");
let lang = document.querySelector(".p3");
let popu = document.querySelector(".p4");
let reg = document.querySelector(".reg");
let cou = document.querySelector(".cou");
let gmap = document.querySelector(".gmap");
function setdetails() {
  let lname = "" + "Languages - ";
  let png = cobj.flags.png;
  let capitalname = cobj.capital[0];
  let cnam = cobj.currencies.name;
  img.setAttribute("src", png);
  cou.innerHTML = cobj.name.common;
  capital.innerHTML = "Capital - " + capitalname;
  curr.innerHTML = cnam;
  reg.innerHTML = "Region -" + cobj.region;
  let cp = "Population - " + (cobj.population / 1000000).toFixed(2) + " M";
  popu.innerHTML = cp;
  let lobj = cobj.languages;
  for (let x in lobj) {
    lname = lname + lobj[x] + " ";
  }
  lang.innerHTML = lname;
  let objcur;
  let ccurr = cobj.currencies;
  for (let x in ccurr) {
    objcur = "Currency - " + ccurr[x].name + " (" + ccurr[x].symbol + ")";
    break;
  }
  curr.innerHTML = objcur;
  console.log(ccurr);
}
