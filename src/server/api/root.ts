import { haveNeverCategoryRouter } from './routers/haveNeverCategory';
import { createTRPCRouter } from "~/server/api/trpc";
import { haveNeverRouter } from './routers/haveNever';
import { userRouter } from './routers/user';
import { secretsCircleRouter } from './routers/secretsCircle';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  haveNeverCategories: haveNeverCategoryRouter,
  haveNever: haveNeverRouter,
  user: userRouter,
  secretsCircle: secretsCircleRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
