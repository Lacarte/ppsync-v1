-- SQLite
-- insert table in another tasble
INSERT INTO motives ( description, state, published_at, created_by, updated_by, created_at, updated_at)
SELECT  description, state, published_at, created_by, updated_by, created_at, updated_at
FROM motive;





drop table motifs;