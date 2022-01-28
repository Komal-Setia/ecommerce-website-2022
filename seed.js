const { Module } = require('module');
const Product=require('./models/product');


const products=[
    {
        name:'Apple iPhone 13 (128GB)',
        price:70000,
        desc:'15 cm (6.1-inch) Super Retina XDR display,Cinematic mode adds shallow depth of field and shifts focus automatically in your videos,Advanced dual-camera system with 12MP Wide',
        img:'https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg'
    },
    {
        name:'Levi\'s Women\'s Skinny Fit Jeans',
        price:1320,
        desc:'Care Instructions: Machine Wash, Fit Type: Skinny, Red tab, Heavy Fade, Clean Look, plain, Machine Wash, Skinny,Warranty Type: Manufacturer & Seller,Warranty Description: 30 days',
        img:'https://m.media-amazon.com/images/I/81mSbzR6r5L._UL1500_.jpg'

    },
    {
        name:'Gucci Intense Oud EDP',
        price:17775,
        desc:'This intense oud EDP has a refreshing fragrance, Top notes are incense, woody notes, Middle notes are leather, amber, Base notes are agarwood (oud) and olibanum, Gender: unisex, fragrance: balsamic',
        img:"https://m.media-amazon.com/images/I/81Q4mBnkqbL._SL1500_.jpg"
    },
    {
        name:'2020 Apple iPad Air with A14 Bionic chip',
        price:54900,
        desc:'Stunning 27.69 cm (10.9-inch) Liquid Retina display with True Tone and P3 wide colour,A14 Bionic chip with Neural Engine,Touch ID for secure authentication,Wide stereo audio,Available in Silver, Space Grey, Rose Gold, Green and Sky Blue,Wi-Fi 6 (802.11ax),Up to 10 hours of battery life',
        img:'https://m.media-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg'
    },
    {
        name:'Nike Men\'s Runallday 2 Running Shoes',
        price:5495,
        desc:'Closure: Lace-Up,Shoe Width: Regular,Outer Material: Synthetic,Closure Type: Lace-Up,Toe Style: Round Toe,Warranty Type: Manufacturer & Seller,Warranty Description: 30 days',
        img:"https://m.media-amazon.com/images/I/714Pt5LHG3L._UL1500_.jpg"
        
    },

    {
        name:'2021 Apple MacBook Pro',
        price:194900,
        desc:'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance,Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever,Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games',
        img:'https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg'
    },
    {
        name:'Raymond Weil Freelancer Analog Grey Dial Men\'s Watch-7730-STC-JHDX1',
        price:198800,
        desc:'Dial Color: Grey , Dial Shape: Round,Dial Material: Steel &, Grey PVD , Strap Material: Leather,Movement: Automatic , Watch Type: Analog, Glass Type: Sapphire Crystal , Water Resistance: 100,  Case Size: 42 mm , Clasp Type: Folding Clasp',
        img:"https://m.media-amazon.com/images/I/610vwp16GqL._UL1000_.jpg"
    },
    {
        name:'Apple AirPods Pro',
        price:20900,
        desc:'Active noise cancellation for immersive sound,Transparency mode for hearing and connecting with the world around you,Three sizes of soft, tapered silicone tips for a customisable fit, Sweat and water resistant,Adaptive EQ automatically tunes music to the shape of your ear',
        img:'https://m.media-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg'
    }
];


const seedDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');

}

module.exports=seedDB;