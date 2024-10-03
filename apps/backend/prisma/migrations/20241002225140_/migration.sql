-- CreateTable
CREATE TABLE "grupo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("id")
);
