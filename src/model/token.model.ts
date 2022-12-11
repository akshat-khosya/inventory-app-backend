import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { sequelize } from '../lib/db';

export interface TokenAttributes {
    phoneNumber: string;
    otp: number;
}

class Token extends Model<TokenAttributes> implements TokenAttributes {
    public phoneNumber!: string;
    public otp!: number;
}

Token.init({
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    otp: {
        type: DataTypes.NUMBER,
        allowNull: false

    },
}, {
    sequelize: sequelize.sequelize,
    modelName: 'token',
    timestamps: false
}
);

export default Token;

