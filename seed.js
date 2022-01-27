const { Module } = require('module');
const Product=require('./models/product');


const products=[
    {
        name:'Iphone 11',
        price:100,
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
        img:'https://images.unsplash.com/photo-1539883305165-f691affc6c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGlwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Ipad',
        price:100,
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
        img:'https://images.unsplash.com/photo-1539883305165-f691affc6c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGlwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Macbook',
        price:100,
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
        img:'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Airpod',
        price:100,
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
        img:'https://media.istockphoto.com/photos/modern-wireless-bluetooth-headphones-with-charging-case-on-a-blue-picture-id1346147559?b=1&k=20&m=1346147559&s=170667a&w=0&h=ofy428m_H-K6na3JpFded3U66TVsIp56D1Z6ffflkk0='
    }
];


const seedDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');

}

module.exports=seedDB;