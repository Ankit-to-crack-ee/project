const mongoose = require('mongoose');
const Product = require('./models/Product');

let products = [
    {
        name:"iphone 11" ,
        img: "https://www.costco.co.uk/medias/sys_master/images/h88/h26/15603382714398.jpg",
        price: 40000 ,
        desc: "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light"
    },{
        name:"iphone 14" ,
        img: "https://th.bing.com/th/id/OIP.RMgSZevhD7HOhlr8MP_9KwHaHd?rs=1&pid=ImgDetMain",
        price: 70000,
        desc:"Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging, you can charge your phone quickly up to 50 % in just half an hour by using a 20 W adapter. This phone is loaded with a horde of exciting features such as Siri, face ID, barometer, ambient light sensors etc., and is also resistant to dust and water as it is IP68 rated."
    },{
        name:"laptop table" ,
        img: "https://th.bing.com/th/id/OIP.NF0NE_UPIo_d2Os7FNzkEgHaHa?rs=1&pid=ImgDetMain",
        price: 1000,
        desc: "night study wooden light weight table "
    },{
        name:"Hoodie" ,
        img: "https://media.mennace.com/s/mennace/MW407099_set/1/black-essential-long-sleeve-hoodie.jpg?$product-page__zoom--2x$",
        price: 3999,
        desc:"black hoodie for unisex"
    },
    {
        name:"shirt" ,
        img: "https://th.bing.com/th/id/R.cc67a9534d3d32d47b0a813e6137b1de?rik=%2f4Pu9KwOGrfKUg&riu=http%3a%2f%2fwww.80scasualclassics.co.uk%2fimages%2fgant-broadcloth-shirt-hamptons-blue-p10489-64733_image.jpg&ehk=dGyvrfRJet%2fv9x8KZLYNpnvfC14AE4ojlMs0uZJPCUw%3d&risl=&pid=ImgRaw&r=0",
        price: 5555,
        desc:"cotton premium formal shirt for professionals"
    },
    {
        name:"laptop" ,
        img: "https://s.yimg.com/os/creatr-uploaded-images/2020-12/d37e0460-3eeb-11eb-b7f9-449e864b9135",
        price: 2000000,
        desc:"mackbook h "
    },
    {
        name:"cooker" ,
        img: "https://rukminim1.flixcart.com/image/1664/1664/pressure-cooker/k/a/c/cb50-hawkins-original-imaegtf4gydyggq2.jpeg?q=90",
        price: 25000,
        desc: "capacity 5l"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded");
}

module.exports = seedDB;