-- CreateTable
CREATE TABLE `cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cliente_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atendimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataVenda` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataTroca` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `atendimento_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vestCasual` VARCHAR(191) NOT NULL,
    `vestEsporte` VARCHAR(191) NOT NULL,
    `vestSocial` VARCHAR(191) NOT NULL,
    `preco` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modificado_em` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
