import { v4 } from "uuid";

import type { Context, Resolvers } from "../../types/graphql.types";
import type { MainCard, Animal, Category } from "./animal.types";

const resolvers: Resolvers = {
  Query: {
    mainCards: (parent, args, context: Context): Array<MainCard> => context.mainCards,
    
    animals: (parent, args, context: Context): Array<Animal> => context.animals,
    
    animal: (parent, args, context: Context): Animal | undefined => {
      return context.animals.find(animal => animal.slug === args.slug);
    },

    categories: (parent, args, context: Context): Array<Category> => context.categories,

    category: (parent, args, context: Context): Category | undefined => {
      return context.categories.find(category => category.slug === args.slug);
    },
  },

  Mutation: {
    addAnimal: (parent, args, context: Context): Animal => {
      const {
        image,
        title,
        rating,
        price,
        description,
        stock,
        onSale,
        slug,
        category,
      } = args;

      const newAnimal: Animal = {
        id: v4(),
        image,
        title,
        rating,
        price,
        description,
        stock,
        onSale,
        slug,
        category,
      };

      context.animals.push(newAnimal);

      return newAnimal;
    },

    removeAnimal: (parent, args: { id: string; }, context: Context): Boolean => {
      const animalIndex: number = context.animals.findIndex(animal => animal.id === args.id);

      context.animals.splice(animalIndex, 1);

      return true;
    },
  },

  Category: {
    animals: (parent: Category, args, context: Context): Array<Animal> | undefined => {
      return context.animals.filter(animal => animal.category === parent.id);
    },
  },

  Animal: {
    category: (parent: Animal, args, context: Context): Category | undefined => {
      return context.categories.find(category => category.id === parent.category);
    },
  },
};

export default resolvers;