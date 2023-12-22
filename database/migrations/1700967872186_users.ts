import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 15).notNullable().unique()
      table.string('province', 50).notNullable()
      table.string('city', 50).notNullable()
      table.string('district', 50).notNullable()
      table.string('password', 60).notNullable()
      table.string('otp', 6)

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
