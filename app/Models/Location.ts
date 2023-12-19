import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import History from './History'
import User from './User'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public latitude: string

  @column()
  public longitude: string

  @column()
  public provinsi: string

  @column()
  public kabupaten_kota: string

  @column()
  public kecamatan: string

  @column()
  public desa: string

  @column()
  public date: DateTime

  @column({ serializeAs: 'geom' })
  public geom: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => History)
  public histories: HasMany<typeof History>
}