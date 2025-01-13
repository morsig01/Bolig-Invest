import { type SchemaTypeDefinition } from 'sanity'

import { employee } from './employeeType';
import { project } from './projectType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [employee, project],
}