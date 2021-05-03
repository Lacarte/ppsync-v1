-- SQLite
-- insert table in another tasble
INSERT INTO motives ( description, state, published_at, created_by, updated_by, created_at, updated_at)
SELECT  description, state, published_at, created_by, updated_by, created_at, updated_at
FROM motive;


drop table motifs;




--
INSERT INTO request_motives
SELECT * FROM resquest_motives



id	description	state	published_at	created_by	updated_by	created_at	updated_at
1	Passport Perdu	active	1619575392661	NULL	NULL	1619575392687	1619575392687
2	Renouvellement	active	1619608046351	NULL	NULL	1619608046364	1619608046364
3	Demande de Passeport	active	1619608189634	NULL	NULL	1619608189640	1619608189640
4	Changement Renseignements	active	1619608222762	NULL	NULL