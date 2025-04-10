-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2025 at 06:10 AM
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
-- Database: `drvarungoel`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
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
(1, '2025-04-08', 'What Are the Most Common Cancers Affecting People in India Today?', 'blog1.jpg', 'Cancer remains one of the leading causes of death globally, and India is no exception. With a large and diverse population, the country faces a rising burden of cancer, with an increasing number of pe', '<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Cancer remains one of the leading causes of death globally, and India is no exception. With a large and diverse population, the country faces a rising burden of cancer, with an increasing number of people being diagnosed with this disease every year. As a Senior Director in Medical Oncology, I often encounter patients from all walks of life, and it&rsquo;s critical to shed light on the most common types of cancers affecting people in India today. Dr Varun Goel, a Medical Oncologist and the </span><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(44, 130, 201);\"><strong>Best Cancer Doctor in Delhi</strong></span><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">, emphasizes the need for awareness in combating this health challenge.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">India&apos;s cancer burden is growing, and understanding which types of cancers are most prevalent can help us identify the right strategies for prevention, early detection, and treatment. Let&rsquo;s take a closer look at the cancers that are most common in the country.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">1. Breast Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Breast cancer is the most commonly diagnosed cancer in India, especially among women. According to recent statistics, it accounts for nearly 25% of all cancers in women. Factors such as lifestyle changes, delayed childbirth, lack of breastfeeding, and increased use of hormonal therapies are some of the reasons contributing to the rise of breast cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Breast cancer is often diagnosed at later stages in India, which contributes to its higher mortality rate. However, with increasing awareness, early detection through regular mammograms, self-examinations, and improved treatment options, survival rates have significantly improved.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">2. Lung Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Lung cancer ranks as one of the most common cancers in India, especially among men. This disease is strongly linked to smoking and exposure to air pollution, which is a growing concern in many urban areas. Though lung cancer often presents in later stages, the development of advanced treatments like targeted therapy and immunotherapy is helping patients live longer and with a better quality of life.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">3. Oral Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">India has one of the highest rates of oral cancer in the world, with the disease primarily affecting individuals in their middle age. The consumption of tobacco, be it through smoking, chewing, or using smokeless tobacco products, is a major risk factor for oral cancer in the country.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Despite being highly preventable, oral cancer continues to be a major public health challenge. Regular dental check-ups, maintaining oral hygiene, and avoiding tobacco use are crucial for prevention. Early detection through simple mouth exams can lead to better treatment outcomes.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">4. Cervical Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Cervical cancer is the second most common cancer in women in India. The Human Papillomavirus (HPV) is the primary cause of this cancer, and it is preventable with the HPV vaccine. Unfortunately, many women in India still face barriers to receiving the vaccine due to a lack of awareness or access to healthcare.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Routine screening through Pap smears and HPV tests can help detect cervical cancer at its precursors, enabling early intervention and improving survival rates. Educating women about the importance of these screenings is vital in the fight against cervical cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">5. Colorectal Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Colorectal cancer, which includes cancers of the colon and rectum, is increasingly being seen in India, especially in urban populations. Changes in diet, reduced physical activity, and obesity are contributing factors. Early-stage colorectal cancer may not show noticeable symptoms, so screening is essential for people at higher risk, particularly those with a family history of the disease.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">With advancements in endoscopic techniques, colorectal cancer can be detected early, leading to more effective treatment options and higher survival rates.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">6. Prostate Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Prostate cancer is one of the most common cancers among men, particularly those over the age of 50. The incidence of prostate cancer is on the rise in India, though it remains lower than in Western countries. While prostate cancer typically progresses slowly and may not cause significant symptoms in its early stages, regular screening for men in their late 40s or 50s can help catch the disease early.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">The treatment options for prostate cancer have improved significantly, with surgery, radiation therapy, and hormone therapy offering hope for patients diagnosed at earlier stages.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">7. Stomach Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Stomach cancer, or gastric cancer, is another prevalent cancer in India, often linked to dietary factors, such as a high-salt diet and infection with Helicobacter pylori. Early symptoms of stomach cancer can be vague, leading to delayed diagnosis in many cases. This type of cancer is more common in older adults, particularly in rural areas, and it is often diagnosed in advanced stages.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Surgical resection, chemotherapy, and radiotherapy are the mainstays of treatment. However, prevention through a healthy diet and avoiding risk factors like smoking and alcohol use is key to reducing the incidence of stomach cancer.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">8. Esophageal Cancer</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Esophageal cancer is prevalent in both men and women, with a high incidence in the southern and northern parts of India. The disease is commonly associated with smoking, alcohol consumption, and poor dietary habits. Unfortunately, the prognosis for esophageal cancer is generally poor due to late-stage diagnosis.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Early detection through endoscopic procedures and regular monitoring for people at risk can improve treatment outcomes. The importance of lifestyle modifications, such as avoiding tobacco and alcohol, cannot be overstated.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 18px; color: rgb(0, 0, 0);\"><strong><span style=\"line-height: 107%;\">Overall Summary</span></strong></span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Cancer is still a major health problem in India, but the risk can be reduced by making healthy lifestyle choices. Quitting smoking, drinking less alcohol, eating a balanced diet, and staying physically active are all helpful steps.</span></p>\r\n<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:\"Calibri\",sans-serif;\'><span style=\"font-family: Calibri, sans-serif; font-size: 16px; color: rgb(0, 0, 0);\">Early detection is also very important. Tests like mammograms, Pap smears, and colonoscopies can help find cancer early when it&apos;s easier to treat.</span></p>\r\n<p><span style=\"font-size: 16px; font-family: Calibri, sans-serif; color: rgb(0, 0, 0);\">Thanks to new treatments like immunotherapy, targeted therapy, and precision medicine, cancer care is improving. According to <strong>Dr. Varun Goel, </strong>the<strong> </strong></span><span style=\"font-size: 16px; font-family: Calibri, sans-serif; color: rgb(44, 130, 201);\"><strong>Best Cancer Doctor in Delhi</strong></span><span style=\"font-size: 16px; font-family: Calibri, sans-serif; color: rgb(0, 0, 0);\">, starting treatment early can make a big difference in recovery and outcomes.</span></p>', 'best-cancer-doctor-in-delhi');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `s.no` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `id` varchar(200) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `location` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `medicalreport` text DEFAULT NULL
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
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `s.no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
