import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'wine-shop',

  projectId: 'kasyhh3w',
  dataset: 'ec-products',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
