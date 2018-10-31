CREATE DATABASE tableopenreservations;

USE tableopenreservations;
  -- ---
-- Globals
-- ---

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'restaurants'
-- 
-- ---

DROP TABLE IF EXISTS `restaurants`;
		
CREATE TABLE `restaurants` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `totaltables` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'tables'
-- 
-- ---

DROP TABLE IF EXISTS `tables`;
		
CREATE TABLE `tables` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `seats` INTEGER NULL DEFAULT NULL,
  `total` INT NULL
  `id_restaurants` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
  
);

-- ---
-- Table 'Bookings'
-- 
-- ---

DROP TABLE IF EXISTS `bookings`;
		
CREATE TABLE `bookings` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `starttime` TIME NULL DEFAULT NULL,
  `endtime` TIME NULL DEFAULT NULL,
  `resdate` DATE NULL DEFAULT NULL,
  `id_tables` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `tables` ADD FOREIGN KEY (id_restaurants) REFERENCES `restaurants` (`id`);
ALTER TABLE `tables` ADD FOREIGN KEY (total) REFERENCES `restaurants` (`totalTables`);
ALTER TABLE `bookings` ADD FOREIGN KEY (id_tables) REFERENCES `tables` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `restaurants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `tables` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bookings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `restaurants` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `tables` (`id`,`seats`,`id_restaurants`) VALUES
-- ('','','');
-- INSERT INTO `Bookings` (`id`,`starttime`,`endtime`,`resdate`,`id_tables`) VALUES
-- ('','','','','');