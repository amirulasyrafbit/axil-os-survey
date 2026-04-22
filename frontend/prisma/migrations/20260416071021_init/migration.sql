-- CreateTable
CREATE TABLE "survey_responses" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "department" TEXT NOT NULL,
    "respondent_name" TEXT NOT NULL,
    "respondent_email" TEXT NOT NULL,
    "answers" JSONB NOT NULL DEFAULT '{}',
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "survey_responses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "survey_responses_department_idx" ON "survey_responses"("department");

-- CreateIndex
CREATE INDEX "survey_responses_completed_idx" ON "survey_responses"("completed");

-- CreateIndex
CREATE INDEX "survey_responses_created_at_idx" ON "survey_responses"("created_at" DESC);

-- CreateIndex
CREATE INDEX "survey_responses_respondent_email_idx" ON "survey_responses"("respondent_email");
