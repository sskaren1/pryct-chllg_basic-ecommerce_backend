// import models
import Product from './../models/Product.js';

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

            // delete
            await Product.findOneAndDelete({_id : id});

            return "Producto Eliminado";
        }

        

    }
}