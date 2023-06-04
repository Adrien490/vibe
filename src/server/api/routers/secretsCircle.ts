import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const secretsCircleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const secretsCircle = await ctx.prisma.secretsCircle.findMany();
    return secretsCircle;
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
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { phrase } = input;
      const newSecretsCircle = await ctx.prisma.secretsCircle.create({
        data: {
          phrase,
        },
      });

      return newSecretsCircle;
    }),
});
