import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from '../lib/db';

export interface ProductAttributes {
    productId: string;
    productOwner: string;
    name: string;
    url: string;
    description: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public productId!: string;
    public productOwner!: string;
    public name!: string;
    public url!: string;
    public description!: string;
}

Product.init({
    productId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    productOwner: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'User',
            key: 'userId'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: sequelize.sequelize,
    modelName: 'product',
    timestamps: false
}
);

export default Product;

