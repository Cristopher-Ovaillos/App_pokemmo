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
-- Table structure for table `natures`
--

DROP TABLE IF EXISTS `natures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `natures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `increased_stat` varchar(30) DEFAULT NULL,
  `decreased_stat` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `natures`
--

LOCK TABLES `natures` WRITE;
/*!40000 ALTER TABLE `natures` DISABLE KEYS */;
INSERT INTO `natures` VALUES (1,'Hardy',NULL,NULL),(2,'Lonely','attack','defense'),(3,'Brave','attack','speed'),(4,'Adamant','attack','sp_atk'),(5,'Naughty','attack','sp_def'),(6,'Bold','defense','attack'),(7,'Docile',NULL,NULL),(8,'Relaxed','defense','speed'),(9,'Impish','defense','sp_atk'),(10,'Lax','defense','sp_def'),(11,'Timid','speed','attack'),(12,'Hasty','speed','defense'),(13,'Serious',NULL,NULL),(14,'Jolly','speed','sp_atk'),(15,'Naive','speed','sp_def'),(16,'Modest','sp_atk','attack'),(17,'Mild','sp_atk','defense'),(18,'Quiet','sp_atk','speed'),(19,'Bashful',NULL,NULL),(20,'Rash','sp_atk','sp_def'),(21,'Calm','sp_def','attack'),(22,'Gentle','sp_def','defense'),(23,'Sassy','sp_def','speed'),(24,'Careful','sp_def','sp_atk'),(25,'Quirky',NULL,NULL);
/*!40000 ALTER TABLE `natures` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-07 20:01:41
