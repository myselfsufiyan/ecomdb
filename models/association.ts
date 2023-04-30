import sequelize from '../config/database'
import orders from './order';
import products from './products';

const MyAssociations = function () {

    sequelize.models.users.hasMany(sequelize.models.orders,{foreignKey:"user_id",onUpdate:"CASCADE",onDelete:"CASCADE"});
    sequelize.models.orders.belongsTo(sequelize.models.users,{foreignKey:"user_id",onUpdate:"CASCADE",onDelete:"CASCADE"});

    sequelize.models.orders.belongsToMany(products,{through:"orderitems",foreignKeyConstraint:true,onUpdate:"CASCADE",onDelete:"CASCADE"});
    sequelize.models.products.belongsToMany(orders,{through:"orderitems",foreignKeyConstraint:true,onUpdate:"CASCADE",onDelete:"CASCADE"});

    

}
export default MyAssociations;


