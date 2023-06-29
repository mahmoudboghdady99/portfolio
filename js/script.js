let title;
let index = 1;
//
let title2;
let index2 = 1;
//
let title3;
let index3 = 1;
//
let title4;
let index4 = 1;

const text = () => {
    let title = "Html && css"
  document.querySelector(".projects-g1-span").textContent = title.slice(0, index)
  index ++
  if(index > title.length){
    index = 1
  }
}

const text2 = () => {
  title2 = "Html && css && JavaScript";
  document.querySelector(".projects-g1-span2").textContent = title2.slice(0, index2);
  index2++;
  if (index2 > title2.length) {
    index2 = 1;
  }
};

const text3 = () => {
    title3 = "React Js";
    document.querySelector(".projects-g1-span3").textContent = title3.slice(0, index3);
    index3++;
    if (index3 > title3.length) {
      index3 = 1;
    }
  };

  const text4 = () => {
    let title4 = "Next Js"
  document.querySelector(".projects-g1-span4").textContent = title4.slice(0, index4)
  index4 ++
  if(index4 > title4.length){
    index4 = 1
  }
}

setInterval(() => {
    text()
    text2()
    text3()
    text4()
}, 1000)