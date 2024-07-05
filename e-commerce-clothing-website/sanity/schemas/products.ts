import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
      defineField({
          name: 'productName',
          title: 'Product Name',
          type: 'string',
        }),
      defineField({
          name: 'productImage',
          title: 'Product Image',
          type: 'image',
        }),
        defineField({
            name: 'productAltText',
            title: 'Product Image Alternative Text',
            type: 'string',
        }),
        defineField({
            name: 'productType',
        title: 'Product Type',
        type: 'string',
        options: {
            list: [
              {title: 'Sweater', value: 'Sweater'},
              {title: 'Dress', value: 'Dress'},
              {title: 'Pants', value: 'Pants'},
              {title: 'Jackets', value: 'Jackets'},
              {title: 'T Shirts', value: 'T-Shirts'},
            ]
        }
    }),
    defineField({
        name: 'productCategory',
        title: 'Product Category',
        type: 'string',
        options: {
            list: [
                {title: 'Male', value: 'Male'},
                {title: 'Female', value: 'Female'},
                {title: 'Kids', value: 'Kids'},
            ]
        }
    }),
    defineField({
        name: 'productPrice',
        title: 'Product Price',
        type: 'number',
    }),
    defineField({
        name: 'productCare',
        title: 'Product Care',
        type: 'text',
    }),
    defineField({
        name: 'productDetail',
        title: 'Product Detail',
        type: 'text',
    }),
    
  ],
})