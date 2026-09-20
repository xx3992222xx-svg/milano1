import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createOrder, createProduct, listActiveProducts } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => { const cookieOptions = getSessionCookieOptions(ctx.req); ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 }); return { success: true } as const; }),
  }),
  store: router({
    products: publicProcedure.query(() => listActiveProducts()),
    createOrder: publicProcedure.input(z.object({ customerName: z.string().min(2), customerPhone: z.string().min(5), customerAddress: z.string().min(5), items: z.array(z.object({ productId: z.number(), name: z.string(), quantity: z.number().int().positive(), price: z.number().int().nonnegative() })).min(1), total: z.number().int().nonnegative() })).mutation(({ input }) => createOrder({ orderNumber: `ML-${Date.now().toString(36).toUpperCase()}`, customerName: input.customerName, customerPhone: input.customerPhone, customerAddress: input.customerAddress, items: JSON.stringify(input.items), total: input.total, status: "new" })),
  }),
  products: router({
    create: publicProcedure.input(z.object({ name: z.string().min(2), sku: z.string().min(1), price: z.number().int().nonnegative(), cost: z.number().int().nonnegative(), stock: z.number().int().nonnegative(), description: z.string().optional() })).mutation(({ input }) => createProduct({ ...input, isActive: 1 })),
  }),
});
export type AppRouter = typeof appRouter;
