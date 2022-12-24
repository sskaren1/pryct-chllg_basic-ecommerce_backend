// import mongoose
import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    order: {
        type: Array,
        required: true,
    },     
    total: {
        type: Number,
        required: true,
    },
    shipping: {
        type: Number,
        required: true,
    },
    taxes : {
        type: Number,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    delivery_date: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        default: "Pendiente"
    }
}, {
    timestamps: true //crea dos columnas más, una de creado y otra de actualizado
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;