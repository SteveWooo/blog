/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-11-23 20:51:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `content`
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_id` char(32) COLLATE utf8_bin NOT NULL,
  `uid` char(32) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin,
  `router_id` char(32) COLLATE utf8_bin NOT NULL,
  `update_time` int(13) NOT NULL,
  `create_time` int(13) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of content
-- ----------------------------

-- ----------------------------
-- Table structure for `router`
-- ----------------------------
DROP TABLE IF EXISTS `router`;
CREATE TABLE `router` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `router_id` char(32) COLLATE utf8_bin NOT NULL,
  `last_router_id` char(32) COLLATE utf8_bin NOT NULL,
  `name` char(100) COLLATE utf8_bin NOT NULL,
  `create_time` int(13) NOT NULL,
  `update_time` int(13) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of router
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` char(32) COLLATE utf8_bin NOT NULL,
  `name` char(100) COLLATE utf8_bin NOT NULL,
  `create_time` int(13) NOT NULL,
  `update_time` int(13) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
