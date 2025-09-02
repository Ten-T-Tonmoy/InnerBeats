-- CreateTable
CREATE TABLE "public"."Choices" (
    "id" SERIAL NOT NULL,
    "emotion" TEXT NOT NULL,
    "ChosenReason" TEXT NOT NULL,
    "isHelpful" BOOLEAN NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Choices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Choices" ADD CONSTRAINT "Choices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
