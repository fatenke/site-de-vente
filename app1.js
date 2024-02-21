
async function getproduct(){
  const responsePromise=fetch('https://fakestoreapi.com/products/2')
    .then(res=>res.json());
              return responsePromise;
  }
  getproduct().then(resolve=>console.log(resolve));

  let product;
  async function main(){
    let product =await getproduct()
    console.log(product);

    let productdiv=document.createElement("div");
    let detailsdiv=document.createElement("div");
    let prodinfodiv=document.createElement("div");
    let productimg=document.createElement("img");
    let productname=document.createElement("h1")
    let productrating=document.createElement("img")
    let productprice=document.createElement("h3")
    let productdesc=document.createElement("p");


    let productquantity=document.createElement("div")
    let productq=document.createElement("p")
    let productq1=document.createElement("input")
    let productq2=document.createElement("input")


    let productdescinf=document.createElement("input")
    let productdescadd=document.createElement("input")
    let prodinfodiv1=document.createElement("div")
    let prodinfodiv11=document.createElement("p")

    productdiv.appendChild(productimg);
    productdiv.appendChild(detailsdiv);

    detailsdiv.classList.add("details");
    detailsdiv.appendChild(productname);
    detailsdiv.appendChild(productrating);
    detailsdiv.appendChild(productprice);
    detailsdiv.appendChild(productdesc);
    detailsdiv.appendChild(productquantity);

    productquantity.appendChild(productq);
    productquantity.appendChild(productq1);
    productquantity.appendChild(productq2);
    


    let shopsingle=document.querySelector(".shopsingle");


    shopsingle.appendChild(productdiv);
    productdiv.classList.add("single");
    shopsingle.appendChild(prodinfodiv);
    prodinfodiv.classList.add("prodinfo");
    shopsingle.appendChild(prodinfodiv)
    
    prodinfodiv.appendChild(productdescinf)
    productdescinf.setAttribute("type","button")
    productdescinf.setAttribute("value","Product Description")
    productdescinf.classList.add("in1")

    prodinfodiv.appendChild(productdescadd)
    productdescadd.setAttribute("type","button")
    productdescadd.setAttribute("value","Additional info")
    productdescadd.classList.add("in2")

    prodinfodiv.appendChild(prodinfodiv1);
    prodinfodiv1.classList.add("desc");
    prodinfodiv1.appendChild(prodinfodiv11);
    prodinfodiv11.innerHTML=product.description;



    

    productimg.setAttribute("src",product.image);
    productimg.classList.add("shopsingleimg")
    let productname3=product.title.split(' ');
    productname.innerHTML= productname3.slice(0, 3).join(' ');
    productrating.setAttribute("src","https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png");
    productrating.classList.add("rating")
    productprice.innerHTML=("$"+product.price);
    productdesc.innerHTML=product.description

    productquantity.classList.add("productquantity");
    productq.innerHTML=("quantity:");
    productq1.classList.add("numquant")
    productq1.setAttribute("value","1");
    productq2.classList.add("btnadd")
    productq2.setAttribute("value","add to cart")
    productq2.setAttribute("type","button")
  
  }
  main()