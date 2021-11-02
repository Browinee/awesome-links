export const resolvers = {
    Query: {
        links (_parent, _arg, ctx) {
            return ctx.prisma.link.findMany()
        }
    }
}
