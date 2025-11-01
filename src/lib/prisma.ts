import { PrismaClient } from "@prisma/client";

// Глобальная переменная для хранения экземпляра в режиме разработки
// Это предотвращает создание множественных подключений при hot-reload
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Создаем или переиспользуем экземпляр Prisma Client
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// В режиме разработки сохраняем экземпляр глобально
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
