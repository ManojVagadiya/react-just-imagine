import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'justimagine',

  projectId: 'fx5finu3',
  dataset: 'justimagine',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
