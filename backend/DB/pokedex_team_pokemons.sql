-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pokedex
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `team_pokemons`
--

DROP TABLE IF EXISTS `team_pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_pokemons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int NOT NULL,
  `pokemon_id` int NOT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `nature_id` int DEFAULT NULL,
  `iv_hp` int DEFAULT '31',
  `iv_atk` int DEFAULT '31',
  `iv_def` int DEFAULT '31',
  `iv_sp_atk` int DEFAULT '31',
  `iv_sp_def` int DEFAULT '31',
  `iv_speed` int DEFAULT '31',
  `ev_hp` int DEFAULT '0',
  `ev_atk` int DEFAULT '0',
  `ev_def` int DEFAULT '0',
  `ev_sp_atk` int DEFAULT '0',
  `ev_sp_def` int DEFAULT '0',
  `ev_speed` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `team_id` (`team_id`),
  KEY `pokemon_id` (`pokemon_id`),
  KEY `nature_id` (`nature_id`),
  CONSTRAINT `team_pokemons_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE,
  CONSTRAINT `team_pokemons_ibfk_2` FOREIGN KEY (`pokemon_id`) REFERENCES `pokemons` (`id`),
  CONSTRAINT `team_pokemons_ibfk_3` FOREIGN KEY (`nature_id`) REFERENCES `natures` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_pokemons`
--

LOCK TABLES `team_pokemons` WRITE;
/*!40000 ALTER TABLE `team_pokemons` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_pokemons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-07 20:01:40
