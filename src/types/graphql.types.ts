import type { MainCard, Animal, Category } from "../resolvers/animal/animal.types";

export type { IResolvers as Resolvers } from "@graphql-tools/utils";

export interface Context {
  animals: Array<Animal>;
  categories: Array<Category>;
  mainCards: Array<MainCard>;
};