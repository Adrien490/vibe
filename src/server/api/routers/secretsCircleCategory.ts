import { type SecretsCircleCategory } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const secretsCircleCategoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.prisma.secretsCircleCategory.findMany();

    return categories
  }),
});
