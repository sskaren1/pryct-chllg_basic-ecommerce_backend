// import mongoose
import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, //quita los espacios tanto iniciales y finales, mas no los intermedios
    },     
    price: {
        type: Number,
        required: true,
        trim: true,
    },     
    image: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true //crea dos columnas más, una de creado y otra de actualizado
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;