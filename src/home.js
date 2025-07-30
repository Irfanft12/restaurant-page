import banner from "./images/banner.jpg";


    const img = document.createElement("img");
    img.src = banner;
    img.classList.add("banner");

    const h1 = document.createElement("h1");
    h1.textContent = "Fast Food";

    const para = document.createElement("p");
    para.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque voluptas in. Enim id aliquid sequi culpa repellat dolor ea?";

    export {img, h1, para};

    

