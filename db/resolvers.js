const productos = [
    {
        nombre: 'aaaaaa',
        precio: '123',
    },
    {
        nombre: 'bbbbbb',
        precio: '123',
    }
];
// resolvers
export const resolvers = {
    Query: {
        obtenerProductos: () => productos
    }
}