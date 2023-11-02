CREATE DATABASE ksiegarnia1;
USE ksiegarnia1;
CREATE TABLE IF NOT EXISTS `ksiazki` (
  `idksiazki` int(11) NOT NULL AUTO_INCREMENT,
  `imieautora` text COLLATE utf8_polish_ci NOT NULL,
  `nazwiskoautora` text COLLATE utf8_polish_ci NOT NULL,
  `tytul` text COLLATE utf8_polish_ci NOT NULL,
  `cena` float NOT NULL,
  PRIMARY KEY (`idksiazki`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=6 ;



INSERT INTO `ksiazki` (`idksiazki`, `imieautora`, `nazwiskoautora`, `tytul`, `cena`) VALUES
(1, 'Peter', 'MacIntyre', 'PHP. Zaawansowane programowanie', 47.29),
(2, 'Andrzej', 'Szeląg', 'Windows 8 PL. Zaawansowana administracja systemem', 49.99),
(3, 'Jacob', 'Seidelin', 'HTML5. Tworzenie gier', 53.65),
(4, 'Tomasz', 'Kowalski', 'Urządzenia techniki komputerowej. Podręcznik dla technikum', 34.15),
(5, 'Łukasz', 'Pasternak', 'PHP. Tworzenie nowoczesnych stron WWW', 29.99);