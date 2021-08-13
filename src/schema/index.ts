import { gql } from "apollo-server-core";

import { DocumentNode } from "graphql";

const typeDefs: DocumentNode = gql`
  type Animal {
    id: ID!
    title: String!
    image: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type MainCard {
    title: String!
    image: String!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Mutation {
    addAnimal(
      title: String!
      image: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: String!
    ): Animal
    
    removeAnimal(id: ID!): Boolean
  }
`;

export default typeDefs;