async function getproduct(id){
    const responsePromise=fetch('https://fakestoreapi.com/products/'+id)
      .then(res=>res.json());
                return responsePromise;
    }
    getproduct().then(resolve=>console.log(resolve));
  
    
    let product;
    async function main(){
        for(let i=2;i<=13;i++){
      let product =await getproduct(i);
      console.log(product);
  
  
      let prodiv=document.createElement("div");
      let navdiv=document.createElement("div");
      let procat=document.createElement("p");
      let navcart=document.createElement("img")
      let proimg=document.createElement("img");
      let proname=document.createElement("p");
      let pricediv=document.createElement("div");
      let proprice=document.createElement("p");
      let prorat=document.createElement("img");




      let shopt=document.querySelector(".shopt");
      shopt.appendChild(prodiv);
      prodiv.appendChild(navdiv);
      prodiv.classList.add("prodiv");
      navdiv.appendChild(procat);
      procat.classList.add("procat")
      navdiv.classList.add("navdiv")
      navdiv.appendChild(navcart);
      procat.innerHTML=product.category;
      navcart.classList.add("navcart")
      navcart.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png")
      prodiv.appendChild(proimg);
      proimg.setAttribute("src",product.image);
      proimg.classList.add("proimg")
      prodiv.appendChild(proname);

      let proname3=product.title.split(' ');
      proname.innerHTML=proname3.slice(0, 3).join(' ');
      prodiv.appendChild(pricediv);
      pricediv.appendChild(proprice);
      pricediv.appendChild(prorat);


      pricediv.classList.add("pricediv")
      proprice.innerHTML=("$"+product.price);
      prorat.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png")
      prorat.classList.add("prorat")









      let showproduct=document.querySelector(".prodiv");

showproduct.addEventListener("click",show);

function show(){
  window.open("shopsingle.html")
}








    }
}
main()


