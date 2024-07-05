import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './schemas/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
}
