import { defineData } from '@aws-amplify/backend-graphql';
import { type ClientSchema, a } from '@aws-amplify/amplify-api-next-alpha';
import * as cdk from 'aws-cdk-lib'

const schema = a.schema({
  Post: a.model({
    title: a.string(),
    comments: a.hasMany("Comment")
  }).authorization([a.allow.public()]),

  Comment: a.model({
    content: a.string(),
    post: a.belongsTo('Post')
  })
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema, 
  authorizationModes: {
    apiKeyConfig: {
      expires: cdk.Duration.days(30)
    }
  }
});
