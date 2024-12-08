

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/menu') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              menu: [
                {
                  id: 1,
                  name: 'Margherita Pizza',
                  description: 'Fresh mozzarella, tomato sauce, and basil.',
                  price: 12.99,
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc9j7nS76Hq9_xj5IpRS4wrrm6YZEQvzpGw&s',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 30,
                },
                {
                  id: 2,
                  name: 'Pepperoni Pizza',
                  description: 'Pepperoni, mozzarella, and tomato sauce.',
                  price: 14.99,
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSesw2XM-agQdLD9pouvHtpKKmOEkULJIl2w&',
                  is_vegetarian: false,
                  is_spicy: true,
                  delivery_time: 35,
                },
                {
                  id: 3,
                  name: 'Pesto Pasta',
                  description: 'Penne pasta with homemade pesto sauce.',
                  price: 10.99,
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMA1QB0NFsGJggWt7mT2EWcNLxi8Vlx3gvsg&s',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 25,
                },
                {
                  id: 4,
                  name: 'Chicken Alfredo',
                  description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken.',
                  price: 13.99,
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObWit9VQfRDvon3MCjH4MGeFEP-agACXHow&s',
                  is_vegetarian: false,
                  is_spicy: false,
                  delivery_time: 40,
                },
                {
                  id: 5,
                  name: 'Tiramisu',
                  description: 'Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.',
                  price: 6.99,
                  image: 'https://www.countdown.co.nz/Content/Recipes/224513%20Tiramisu%20810x570.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 15,
                },
              ],
            },
          });
        } else {
          reject({
            status: 404,
            message: 'Food list not found.',
          });
        }
      }, 2000);
    });
  };
  