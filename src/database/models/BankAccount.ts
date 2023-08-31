import { sequelize } from '../sequelize';
import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

export type BankAccountAttributes = InferAttributes<BankAccount>;

class BankAccount extends Model<BankAccountAttributes, InferCreationAttributes<BankAccount>> {

  declare id: CreationOptional<number>;

  declare accountName: string;

  declare dateOfBirth: CreationOptional<string> | null;

  declare accountNumber: number;

  declare accountType: 'savings' | 'checking' | 'current';

  declare initialBalance: number;

  declare createdAt: CreationOptional<Date>;
}

BankAccount.init(
  {
  // @ts-ignore
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    accountNumber: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    accountType: {
      type: DataTypes.ENUM('savings', 'checking', 'current'),
      defaultValue: 'savings',
      allowNull: false
    },
    initialBalance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.00,
      allowNull: false
    },
    createdAt: DataTypes.DATE()
  },
  {
    tableName: 'bankAccounts',
    sequelize
  }
);

export { BankAccount };
