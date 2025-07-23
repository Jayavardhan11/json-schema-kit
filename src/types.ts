export interface BaseSchema {
  title?: string;
  description?: string;
  default?: any;
}

export interface StringSchema extends BaseSchema {
  type: 'string';
  enum?: string[];
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}

export interface NumberSchema extends BaseSchema {
  type: 'number';
  minimum?: number;
  maximum?: number;
}

export interface IntegerSchema extends BaseSchema {
  type: 'integer';
  minimum?: number;
  maximum?: number;
}

export interface BooleanSchema extends BaseSchema {
  type: 'boolean';
}

export interface ObjectSchema extends BaseSchema {
  type: 'object';
  properties: Record<string, Schema>;
  required?: string[];
  additionalProperties?: boolean;
  $defs?: Record<string, Schema>;
}

export interface ArraySchema extends BaseSchema {
  type: 'array';
  items: Schema;
  minItems?: number;
  maxItems?: number;
}

export interface RefSchema {
  $ref: string;
}

export interface AnyOfSchema {
  anyOf: Schema[];
}

export type Schema =
  | StringSchema
  | NumberSchema
  | IntegerSchema
  | BooleanSchema
  | ObjectSchema
  | ArraySchema
  | RefSchema
  | AnyOfSchema;
