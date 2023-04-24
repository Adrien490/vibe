import { haveNeverCategoryRouter } from './routers/haveNeverCategory';
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  haveNeverCategories: haveNeverCategoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
