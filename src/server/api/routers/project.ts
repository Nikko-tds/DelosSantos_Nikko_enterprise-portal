import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from 'zod';

export const projectRouter = createTRPCRouter({
    create: protectedProcedure
        .input(
            z.object({
                title: z.string().min(1, "Project title is required"),
                description: z.string().optional(),
                orgId: z.string(),
            })
        )
        .mutation( async({ ctx, input }) => {
            // ctx.db our prisma client instance
            // input is the input we declare a few lines ago

            return ctx.db.project.create({
                data: {
                    title: input.title,
                    description: input.description,
                    orgID: input.orgId,
                }
            })
        }),
    getAll: protectedProcedure
        .query( async({ ctx }) => {
            return ctx.db.project.findMany({
                include: {tasks: true}
            })
        })
})