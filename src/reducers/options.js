export const options = (options = {
    sizes: [
        {
            name: 'Small',
            price: 500
        },
        {
            name: 'Medium',
            price: 600
        },
        {
            name: 'Large',
            price: 700
        }
    ],
    bases: [
        {
            name: 'Tomato',
            price: 50
        },
        {
            name: 'White',
            price: 0
        }
    ],
    toppings: [
        {
            group: 'Cheese',
            items: [
                {
                    name: 'Mozzarella',
                    price: 0
                },
                {
                    name: 'Halloumi',
                    price: 100
                },
                {
                    name: 'Burrata',
                    price: 200
                },
                {
                    name: 'Gorgonzola',
                    price: 100
                },
                {
                    name: 'Shaved Parmesan',
                    price: 50
                },
            ]
        },
        {
            group: 'Meat',
            items: [
                {
                    name: 'Bone Marrow',
                    price: 300
                },
                {
                    name: 'Capocollo',
                    price: 300
                },
                {
                    name: 'N\'duja',
                    price: 300
                },
                {
                    name: 'Pancetta',
                    price: 300
                },
                {
                    name: 'Prosciutto',
                    price: 300
                },
                {
                    name: 'Sicilian Sausage',
                    price: 300
                },
            ]
        },
        {
            group: 'Seafood',
            items: [
                {
                    name: 'Anchovies',
                    price: 50
                },
                {
                    name: 'Capers',
                    price: 50
                },
                {
                    name: 'Cured Salmon',
                    price: 300
                },
            ],
        },
        {
            group: 'Vegetables',
            items: [
                {
                    name: 'Artichoke Heart',
                    price: 100
                },
                {
                    name: 'Aubergine',
                    price: 100
                },
                {
                    name: 'Courgette',
                    price: 100
                },
                {
                    name: 'Mushroom',
                    price: 100
                },
                {
                    name: 'Rapini',
                    price: 100
                },
            ],
        },
        {
            group: 'Olives',
            items: [
                {
                    name: 'Black Olive',
                    price: 50
                },
                {
                    name: 'Green Olive',
                    price: 50
                },
            ]
        },
        {
            group: 'Fruit',
            items: [
                {
                    name: 'Fig',
                    price: 100
                },
                {
                    name: 'Pear',
                    price: 100
                },
            ]
        },
        {
            group: 'Finishing',
            items: [
                {
                    name: 'Caramelized Onion',
                    price: 100
                },
                {
                    name: 'Fresh Chili',
                    price: 20
                },
                {
                    name: 'Garlic',
                    price: 50
                },
                {
                    name: 'Oregano',
                    price: 20
                },
                {
                    name: 'Pine Nut',
                    price: 50
                },
                {
                    name: 'Smoked Paprika',
                    price: 20
                },
                {
                    name: 'Soft Egg',
                    price: 100
                },
                {
                    name: 'Walnut',
                    price: 50
                },
            ]
        },
        {
            group: 'Uncooked',
            items: [
                {
                    name: 'Basil',
                    price: 100
                },
                {
                    name: 'Rocket',
                    price: 100
                },
                {
                    name: 'Spinach',
                    price: 100
                },
                {
                    name: 'Watercress',
                    price: 100
                },
            ],
        },
        {
            group: 'Oil',
            items: [
                {
                    name: 'Chili Oil',
                    price: 20
                },
                {
                    name: 'Garlic Oil',
                    price: 20
                },
                {
                    name: 'Truffle Oil',
                    price: 20
                },
            ]
        }
    ]
}) => options;
