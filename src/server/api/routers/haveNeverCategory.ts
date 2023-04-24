import { type HaveNeverCategory } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const haveNeverCategoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.prisma.haveNeverCategory.findMany();

    return categories
  }),
});
