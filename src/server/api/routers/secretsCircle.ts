import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const secretsCircleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const secretsCircle = await ctx.prisma.secretsCircle.findMany();
    return secretsCircle;
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
      const categoryExists = await ctx.prisma.secretsCircleCategory.findUnique({
        where: { id: categoryId },
      });

      // Si la catégorie n'existe pas, renvoyer tous les éléments secretsCircle
      if (!categoryExists) {
        return await ctx.prisma.secretsCircle.findMany();
      }

      const secretsCircleByCategory = await ctx.prisma.secretsCircle.findMany({
        where: { categoryId },
      });

      return secretsCircleByCategory;
    }),
  deleteById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const deletedSecretsCircle = await ctx.prisma.secretsCircle.delete({
        where: { id },
      });

      return deletedSecretsCircle;
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
      const newSecretsCircle = await ctx.prisma.secretsCircle.create({
        data: {
          phrase,
          categoryId,
        },
      });

      return newSecretsCircle;
    }),
});
