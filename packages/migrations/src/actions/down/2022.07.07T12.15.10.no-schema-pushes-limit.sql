ALTER TABLE
  public.organizations
ADD COLUMN
  limit_schema_push_monthly BIGINT NOT NULL DEFAULT 50;

-- HOBBY plan is default
