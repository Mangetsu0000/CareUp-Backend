-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drugs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "drugs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pharmacien" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Pharmacien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grossiste" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Grossiste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dpm" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Dpm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pharmacie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Pharmacie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sephire" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Sephire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cnip" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Cnip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spot" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cnopt" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "Cnopt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacien_email_key" ON "Pharmacien"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grossiste_email_key" ON "Grossiste"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grossiste_contact_key" ON "Grossiste"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Dpm_email_key" ON "Dpm"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dpm_contact_key" ON "Dpm"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacie_email_key" ON "Pharmacie"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacie_contact_key" ON "Pharmacie"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Sephire_email_key" ON "Sephire"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sephire_contact_key" ON "Sephire"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Cnip_email_key" ON "Cnip"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cnip_contact_key" ON "Cnip"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Spot_email_key" ON "Spot"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Spot_contact_key" ON "Spot"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Cnopt_email_key" ON "Cnopt"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cnopt_contact_key" ON "Cnopt"("contact");

-- AddForeignKey
ALTER TABLE "drugs" ADD CONSTRAINT "drugs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
