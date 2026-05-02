import { PrismaClient } from '../generated/client2'

const globalForPrisma2 = global as unknown as { prisma2: PrismaClient }

export const prisma2 =
  globalForPrisma2.prisma2 ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma2.prisma2 = prisma2
