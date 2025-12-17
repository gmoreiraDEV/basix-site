# Database schema for form submissions

The `/api/submit-form` endpoint stores submissions in a `leads` table with the following columns:

- `id` (BIGSERIAL, primary key)
- `name` (TEXT, required)
- `email` (TEXT, required, unique)
- `whatsapp` (TEXT, optional)
- `company` (TEXT, optional)
- `revenue` (TEXT, optional)
- `message` (TEXT, required)
- `source` (TEXT, optional)
- `created_at` (TIMESTAMPTZ, default `now()`)

## Indexes
- `PRIMARY KEY` on `id` (implicit clustered index)
- `UNIQUE` index on `email` to prevent duplicate submissions (queried during inserts)

## Example DDL
```sql
CREATE TABLE leads (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  whatsapp    TEXT,
  company     TEXT,
  revenue     TEXT,
  message     TEXT NOT NULL,
  source      TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```
