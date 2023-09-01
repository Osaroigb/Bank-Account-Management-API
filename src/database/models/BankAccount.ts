import { sequelize } from '../sequelize';
import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

export type BankAccountAttributes = InferAttributes<BankAccount>;

interface BankAccountCreationAttributes extends InferCreationAttributes<BankAccount> {
  initialBalance: number;
}

class BankAccount extends Model<BankAccountAttributes, BankAccountCreationAttributes> {
  declare id: CreationOptional<number>;

  declare accountName: string;

  declare dateOfBirth: Date;

  declare accountNumber: number;

  declare accountType: 'savings' | 'checking' | 'current';

  declare initialBalance: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

BankAccount.init(
  {
    id: {
      type: DataTypes.INTEGER().UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    accountName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    accountNumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accountType: {
      type: DataTypes.ENUM('savings', 'checking', 'current'),
      allowNull: false
    },
    initialBalance: {
      type: DataTypes.BIGINT,
      defaultValue: 0.00,
      allowNull: false
    },
    createdAt: DataTypes.DATE(),
    updatedAt: DataTypes.DATE()
  },
  {
    tableName: 'bankAccounts',
    sequelize
  }
);

export { BankAccount };
