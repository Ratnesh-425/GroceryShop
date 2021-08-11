import bcrypt from 'bcryptjs';
const data = {
        users: [
            {
                name:'Ratnesh',
                email:'ratneshsingh425@gmail.com',
                password: bcrypt.hashSync('1234', 8),
                isAdmin: true,
            },
            {
               name:'Naruto',
               email:'naruto@gmail.com',
               password: bcrypt.hashSync('1234', 8),
               isAdmin: false,
           },
       ],
       product: [
        {
           
            name: 'Paracetamol',
            category: 'Tablets',
            image: '/images/p1.jpg',
            price: 80,
            countInStock: 10,
            brand:'medical',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Azithral 500 TAblet',
            category: 'Tablets',
            image: '/images/p2.png',
            price: 160,
            countInStock: 20,
            brand:'medical',
            rating: 4,
            numReviews: 18,
            description: 'high quality product'
        },
        {
            
            name:'Ascoril d syrup',
            category: 'Syrup',
            image: '/images/p3.png',
            price: 220,
            countInStock: 0,
            brand:'medical',
            rating: 5,
            numReviews: 11,
            description: 'high quality product'
        },
        {
           
            name: 'Avil 25 TAblet',
            category: 'Tablets',
            image: '/images/p4.png',
            price: 95,
            countInStock: 15,
            brand:'medical',
            rating: 5,
            numReviews: 27,
            description: 'high quality product'
        },
        {
            
            name: 'Allerga 125 Tablet',
            category: 'Tablets',
            image: '/images/p5.png',
            price: 128,
            countInStock: 5,
            brand:'medical',
            rating: 5,
            numReviews: 17,
            description: 'high quality product'
        },
        {
           
            name: 'Ascoril D syrup Sugar free',
            category: 'Syrup',
            image: '/images/p6.png',
            price: 160,
            countInStock: 12,
            brand:'medical',
            rating: 5,
            numReviews: 29,
            description: 'high quality product'
        },
    ],
};
export default data;