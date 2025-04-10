-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2025 at 07:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drdevavratarya`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `short_desc` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `date`, `title`, `image`, `short_desc`, `description`, `url`) VALUES
(1, '2025-03-27', 'Early Warning Signs of Cancer You Shouldn’t Ignore', 'blog1.jpg', 'Cancer is a leading cause of death worldwide, but early detection can significantly improve survival rates. Recognizing the early warning signs of cancer can make a critical difference in seeking time', '<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Cancer is a leading cause of death worldwide, but early detection can significantly improve survival rates. Recognizing the early warning signs of cancer can make a critical difference in seeking timely medical intervention. <strong>Dr. Devavrat Arya, Senior Director of Medical Oncology and recognized as the <span style=\"color: rgb(44, 130, 201);\">Best Cancer Doctor in Delhi</span></strong>, emphasizes the importance of awareness and regular health check-ups. Here are some key early warning signs of cancer that you should never ignore.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">1. Unexplained Weight Loss</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">If you are losing weight without changes in diet or physical activity, it could be a sign of cancer. Sudden weight loss of 10 pounds or more may indicate cancers of the stomach, pancreas, lung, or esophagus. This is one of the most commonly overlooked warning signs of cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">2. Persistent Fatigue</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Extreme tiredness that does not improve with rest can be an early sign of cancers such as leukemia, colon cancer, or stomach cancer. If fatigue is persistent and unexplained, a medical evaluation is recommended. Dr. Devavrat Arya, regarded as the<strong>&nbsp;<span style=\"color: rgb(44, 130, 201);\">Best Cancer Doctor in Delhi</span>,</strong> advises patients to seek medical attention for chronic fatigue as it may indicate underlying health issues.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">3. Lumps or Swelling</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Unusual lumps or swelling in any part of the body, such as the breast, testicles, lymph nodes, or soft tissues, should not be ignored. A painless lump that grows over time can be a warning sign of cancer and needs medical examination.<br></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">4. Changes in Skin Appearance</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Skin changes such as new moles, changes in existing moles, or sores that do not heal can be early signs of skin cancer. Watch for changes in color, size, or shape, and consult a doctor if you notice any unusual alterations. Skin abnormalities are often overlooked but can be early warning signs of cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">5. Persistent Cough or Hoarseness</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">A chronic cough lasting more than three weeks, especially when accompanied by blood or chest pain, can be an early symptom of lung or throat cancer. If a cough does not go away, it is essential to get it checked.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">6. Difficulty Swallowing</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Trouble swallowing, persistent indigestion, or a feeling of food getting stuck in the throat may indicate esophageal, stomach, or throat cancer. If these symptoms persist, seek medical attention.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">7. Unusual Bleeding</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Unexplained bleeding, such as blood in urine, stool, or coughing up blood, could be a sign of cancer in the bladder, kidney, colon, or lungs. Postmenopausal bleeding in women should also be evaluated by a doctor.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">8. Changes in Bowel or Bladder Habits</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Persistent constipation, diarrhea, or changes in stool color and consistency may indicate colorectal cancer. Similarly, increased frequency of urination or pain while urinating can be linked to bladder or prostate cancer. Dr. Devavrat Arya, a well-known<strong>&nbsp;<span style=\"color: rgb(44, 130, 201);\">Best Cancer Doctor in Delhi</span>,</strong> stresses that digestive changes should not be ignored as they are among the less-recognized warning signs of cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">9. Persistent Pain</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Chronic pain that does not have a clear cause and lasts for weeks may be an indication of bone, ovarian, or other types of cancer. If you experience ongoing pain, consult a healthcare professional.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">10. Non-Healing Sores</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Sores that do not heal, especially in the mouth, skin, or genitals, should not be ignored. Oral sores that persist may be a symptom of oral cancer, particularly in those who use tobacco or alcohol excessively.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">11. Unexplained Fevers or Night Sweats</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">Frequent fevers and night sweats can sometimes indicate blood cancers like leukemia or lymphoma. If these symptoms persist without a clear cause, a medical evaluation is necessary.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 18px;\">Take Action: Early Detection Saves Lives</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px;\">If you notice any of these warning signs of cancer, do not ignore them. Early diagnosis and treatment can significantly improve outcomes. Regular screenings, self-examinations, and a healthy lifestyle can help prevent cancer.</span></p>', 'best-cancer-doctor-in-delhi');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `s.no` int(11) NOT NULL,
  `date` date NOT NULL,
  `id` varchar(200) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `medicalReport` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`s.no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `s.no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
