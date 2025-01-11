/*
  Warnings:

  - You are about to drop the column `nome_completo` on the `users` table. All the data in the column will be lost.
  - Added the required column `nomeCompleto` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "nome_completo",
ADD COLUMN     "nomeCompleto" TEXT NOT NULL;
