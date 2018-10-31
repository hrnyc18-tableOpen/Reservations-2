DROP DATABASE IF EXISTS tableopenreservations;

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
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'tables'
-- 
-- ---

DROP TABLE IF EXISTS `tables`;
		
CREATE TABLE `tables` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `seats` INTEGER NULL DEFAULT NULL,
  `id_restaurants` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
  
);

-- ---
-- Table 'Bookings'
-- 
-- ---

DROP TABLE IF EXISTS `bookings`;
		
CREATE TABLE `bookings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
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