SELECT concat('DROP TABLE IF EXISTS `', table_name, '`;')
FROM information_schema.tables
WHERE table_schema = 'ppsync';




use information_schema;

use ppsync;

SET FOREIGN_KEY_CHECKS = 0;

SELECT
    table_name
FROM
    information_schema.tables
WHERE
    table_schema = db_name;
