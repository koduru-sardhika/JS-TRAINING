let demo2 = async () =>{
  let data = await window.fetch("country.json")
  console.log(data);
  let res = await data.json()
  console.log(res);
  //map()
  res.map((x) =>{
    console.log(x);
    console.log(x.country);
    let select = document.getElementById("select")
    console.log(select);

    select.innerHTML+=`<option value=${x.country}>${x.country}</option>`

    let demo1 = document.getElementById("demo1")
    console.log(demo1);

    demo1.innerHTML+=`<option value=${x.country}>${x.country}</option>`

  })
}
demo2() 

let btn = document.getElementById("btn");
console.log(btn);

btn.onclick = () => {
  let search = document.getElementById("search").value;
  console.log(search);
  let page = 30;

  window
    .fetch(`https://pixabay.com/api/?key=48516611-503626437a54525fcd67ed583&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      console.log(res.hits);
      
      let div = document.getElementById("div");
      div.innerHTML = ""; // Clear previous images before appending new ones

      res.hits.forEach((x) => {
        console.log(x);
        div.innerHTML += `<img src="${x.previewURL}" alt="Image" />`;
      });
    })
    .catch((error) => console.error("Error fetching data:", error)); // Added error handling
};
