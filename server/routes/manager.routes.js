const ManagerCtrl = require('../controllers/manager.controller');

module.exports = function(app){
    app.post('/api/product', ManagerCtrl.createProduct);
    app.get('/api/product', ManagerCtrl.getAllProducts);
    app.get('/api/product/:id', ManagerCtrl.getOneProduct);
    app.put('/api/product/:id', ManagerCtrl.updateProduct);
    app.delete('/api/product/:id', ManagerCtrl.deleteProduct);
}