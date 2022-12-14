import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from '../lib/db';

export interface UserAttributes {
    userId: string;
    phoneNumber: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public userId!: string;
    public phoneNumber!: string;
}

User.init({
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false

    },
}, {
    sequelize: sequelize.sequelize,
    modelName: 'User',
    timestamps: false
}
);

export default User;

