/*
  Warnings:

  - You are about to drop the column `created_at` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `todos` table. All the data in the column will be lost.
  - You are about to alter the column `is_active` on the `todos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1)` to `TinyInt`.
  - Added the required column `updatedAt` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `todos` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `is_active` BOOLEAN NOT NULL DEFAULT true;
