import type { ObjectSchema, Schema } from './types'

export function jsonSchema(schema: Schema): ObjectSchema {
  if (schema.type !== 'object') {
    throw new Error('Top-level schema must be an object')
  }

  return schema
}
