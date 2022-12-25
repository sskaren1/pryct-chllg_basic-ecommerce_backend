// import models
import Product from './../models/Product.js';
import Order from './../models/Order.js';

// resolvers
export const resolvers = {
    Query: {
        // Products
        getProducts: async () => {
            try {
                const products = await Product.find({}); //({}): para que se traiga todos los productos
                return products;
            } catch (error) {
                console.log(error);
            }
        },
        getProduct: async(_, {id}) =>{
            // check if the product exists
            const product = await Product.findById(id);

            if(!product) {
                throw new Error('Producto no encontrado');
            }
            return product;
        },
        // Orders
        getOrders: async () => {
            try {
                const orders = await Order.find({});
                return orders;
            } catch (error) {
                console.log(error);
            }
        }, 
        getOrder: async(_, {id}) => {
            // Whether the order exists or not
            const order = await Order.findById(id);
            if(!order) {
                throw new Error('Pedido no encontrado');
            }       

            // return the result
            return pedido;
        }, 
        // Advanced searches
        searchProduct: async(_, { text }) => {
            const products = await Product.find({ $text: { $search: text  } }).limit(10) // limit(10) to bring a maximum of 10

            return products;
        }
    },
    Mutation: {
        // Products
        newProduct: async(_,{input}) => {
            try {
                const product = new Product(input);

                // store in database
                const result = await product.save();

                return result;
            } catch (error) {
                console.log(error);
            }
        },
        updateProduct: async(_, {id, input}) => {
            // check if the product exists
            let product = await Product.findById(id);

            if(!product) {
                throw new Error('Producto no encontrado');
            }

            // store in database
            product = await Product.findOneAndUpdate({ _id:id }, input, {new:true} )

            return product;
        },
        deleteProduct: async(_, {id}) => {
            // check if the product exists
            let product = await Product.findById(id);

            if(!product) {
                throw new Error('Producto no encontrado');
            }

            // remove from database
            await Product.findOneAndDelete({_id : id});

            return "Producto Eliminado";
        },
        // Orders
        newOrder: async(_, {input}) => {
             // Create a new order
             const newOrder = new Order(input);

             // Save to database
            const result = await newOrder.save();

            return result;
        },
        updateOrder: async(_, {id, input}) => {
            // check if the order exists
            const order = await Order.findById(id);
            if(!order) {
                throw new Error('El pedido no existe');
            }

            // store in database
            const result = await Order.findOneAndUpdate({_id: id}, input, { new: true });
            return result;
        },
        deleteOrder: async (_, {id}, ctx) => {
            // check if the order exists
            const order = await Order.findById(id);
            if(!order) {
                throw new Error('El pedido no existe');
            }

            // remove from database
            await Order.findOneAndDelete({_id: id});
            return "Pedido Eliminado"
        }        
    }
}