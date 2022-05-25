-- ********************
-- ** Add the tables **
-- ********************

-- Make the logs table
CREATE TABLE IF NOT EXISTS `logs`
(
 `id`               int NOT NULL AUTO_INCREMENT ,
 `request_type`     text NOT NULL ,
 `request_params`   text NOT NULL ,
 `added_by`         text NOT NULL ,
 `request_date`     datetime DEFAULT CURRENT_TIMESTAMP ,
 PRIMARY KEY (`id`)
);
