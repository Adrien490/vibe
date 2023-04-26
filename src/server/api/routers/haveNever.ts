import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const haveNeverRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const haveNever = await ctx.prisma.haveNever.findMany();
    return haveNever;
  }),
  getAllByCategory: publicProcedure
    .input(
      z.object({
        categoryId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { categoryId } = input;

      // Vérifier si la catégorie existe
      const categoryExists = await ctx.prisma.haveNeverCategory.findUnique({
        where: { id: categoryId },
      });

      // Si la catégorie n'existe pas, renvoyer tous les éléments haveNever
      if (!categoryExists) {
        return await ctx.prisma.haveNever.findMany();
      }

      const haveNeverByCategory = await ctx.prisma.haveNever.findMany({
        where: { categoryId },
      });

      return haveNeverByCategory;
    }),
  deleteById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const deletedHaveNever = await ctx.prisma.haveNever.delete({
        where: { id },
      });

      return deletedHaveNever;
    }),
  create: publicProcedure
    .input(
      z.object({
        phrase: z.string(),
        categoryId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { phrase, categoryId } = input;
      const newHaveNever = await ctx.prisma.haveNever.create({
        data: {
          phrase,
          categoryId,
        },
      });

      return newHaveNever;
    }),
});
