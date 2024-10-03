-- CreateTable
CREATE TABLE "modulo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfil" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "discriminacao" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "idModulo" INTEGER NOT NULL,

    CONSTRAINT "perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupoacesso" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "idperfil" INTEGER NOT NULL,
    "idgrupo" INTEGER NOT NULL,

    CONSTRAINT "grupoacesso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "datacadastro" TIMESTAMP(3) NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "tentativas" INTEGER NOT NULL,
    "ultimoacesso" TIMESTAMP(3) NOT NULL,
    "ultimasenha" TEXT NOT NULL,
    "primeiroacesso" BOOLEAN NOT NULL,
    "acessotipo" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuariogrupoacesso" (
    "id" SERIAL NOT NULL,
    "dataativacao" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "usuarioativacao" TEXT NOT NULL,
    "idgrupo" INTEGER NOT NULL,
    "idusuario" INTEGER NOT NULL,

    CONSTRAINT "usuariogrupoacesso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarioauthenticacao" (
    "id" SERIAL NOT NULL,
    "dataativacao" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "usuarioativacao" TEXT NOT NULL,
    "idperfil" INTEGER NOT NULL,
    "idusuario" INTEGER NOT NULL,

    CONSTRAINT "usuarioauthenticacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "perfil" ADD CONSTRAINT "perfil_idModulo_fkey" FOREIGN KEY ("idModulo") REFERENCES "modulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupoacesso" ADD CONSTRAINT "grupoacesso_idperfil_fkey" FOREIGN KEY ("idperfil") REFERENCES "perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupoacesso" ADD CONSTRAINT "grupoacesso_idgrupo_fkey" FOREIGN KEY ("idgrupo") REFERENCES "grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuariogrupoacesso" ADD CONSTRAINT "usuariogrupoacesso_idgrupo_fkey" FOREIGN KEY ("idgrupo") REFERENCES "grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuariogrupoacesso" ADD CONSTRAINT "usuariogrupoacesso_idusuario_fkey" FOREIGN KEY ("idusuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioauthenticacao" ADD CONSTRAINT "usuarioauthenticacao_idperfil_fkey" FOREIGN KEY ("idperfil") REFERENCES "grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioauthenticacao" ADD CONSTRAINT "usuarioauthenticacao_idusuario_fkey" FOREIGN KEY ("idusuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
