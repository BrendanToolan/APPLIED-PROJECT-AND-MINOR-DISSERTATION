  
Drop database if exists bigproject;
create database bigproject CHARACTER SET utf8 COLLATE UTF8_GENERAL_CI ;
use bigproject
show tables;
Drop table if exists location;
Drop table if exists instructor;
Drop table if exists booking;
Drop table if exists users;

Use bigproject;

create table location (
	Lid int(10),
	name varchar(10),
    NumOfDrivers int(10),
	picture_path varchar(20) DEFAULT NULL
	)Engine=InnoDB;

INSERT INTO location (Lid, name, NumOfDrivers, picture_path) VALUES
	(101, 'Gort', 4, 'assets/1.jpg'),

	(102, 'Loughrea', 4, 'assets/2.jpg'),

    (103, 'Athenry', 4, 'assets/3.jpg'),
    
    (104, 'Tuam', 4, 'assets/4.jpg'),

	(105, 'Oranmore', 3, 'assets/5.jpg'),

	(106, 'Ballinsloe', 4, 'assets/6.jpg');

	create table instructor (
	Lid int(10),
	name varchar(10),
	lastName varchar(15),
	Phonenumber int(10),
	Email varchar(25),
	picture_path varchar(250) DEFAULT NULL
	)Engine=InnoDB;

	INSERT INTO instructor (Lid, name, lastName, Phonenumber, Email, picture_path) VALUES
	(101, 'John', 'Smith', 087215413, 'JohnSmith@gmail.com','https://images.generated.photos/aJIH8NIN3SIcYXoMzK4dx17ASRAs5AdTIYrPQqkK1WQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5Njk0NDguanBn.jpg'),
	(101, 'Roger', 'Murray', 08745785, 'RogerMurray@gmail.com','https://images.generated.photos/_q3D1rdwLPmcsOHPCb5qndEWHcgOl24c7e2XI9fSmzo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk1MTIuanBn.jpg'),
	(101, 'Mark', 'Rice', 087246577, 'MarkRice@gmail.com','https://images.generated.photos/0PjDpiMOeF-HXb2lvBkGiApuNNESjm1YlhAMlJVT6PQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA4MTg2OTYuanBn.jpg'),
	(101, 'Dennis', 'Burke', 087215413, 'DennisBurke@gmail.com','https://images.generated.photos/fjZYXlDg3cuMcbjaqZ8TmYo45gOyBOq51u4YQht-ywQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA0NTE3MDQuanBn.jpg'),
	(102, 'Dan', 'Hynes', 085213413, 'DanHynes@gmail.com','https://images.generated.photos/5fVmsrD30ibA9VD76KFY2PgPP6FrDEc4vMq78GteeCU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA4/MTg0NTUuanBn.jpg'),
	(102, 'Conor', 'Lynch', 083215490, 'ConorLynch@gmail.com','https://images.generated.photos/Ts084mTEVhLbhbg3OM7YKAhUUP4ksR6RFvohaSWtqE8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxNDM4MjMuanBn.jpg'),
	(102, 'Gavan', 'Moran', 086215780, 'GavanMoran@gmail.com','https://images.generated.photos/ICg25inAnjc1DibBeOUpOSl4gIjiAVCBPYJPcr9u4FE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTU5OTQuanBn.jpg'),
	(102, 'Cillian', 'Duffy', 087226713, 'CillianDuffy@gmail.com','https://images.generated.photos/uXXF7hEVPNAKAEru-es2thexZwHk2v_fAlMeayUb0Ak/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTA1NjcuanBn.jpg'),
	(102, 'Sandra', 'Butler', 087260173, 'SandraButler@gmail.com','https://images.generated.photos/jyhIj-7oD6VH3J9DLpoLWy7yNeLcJFg4uC9fclbCEjA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA2NTM3MzQuanBn.jpg'),
	(103, 'Mary', 'Walsh', 087260173, 'MaryWalsh@gmail.com','https://images.generated.photos/aNQYYS0hAZyxZ0qlqKbI-bERqUBV36z8xUK5jacrLEs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTk4ODIuanBn.jpg'),
	(103, 'Robert', 'Massey', 087260173, 'RobertMassey@gmail.com','https://images.generated.photos/h9hWzwNDAywq-4aqKKj5AT7MZKlngHo5oazZStmcOJ4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA2NDg0NTguanBn.jpg'),
	(103, 'Jake', 'Chaill', 087281904, 'JakeChaill@gmail.com','https://images.generated.photos/MKToisSwh4nkL0Gom6wMhrCMCUtLL8co7c59U_aKed0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxMjAzMDguanBn.jpg'),
	(103, 'Ryan', 'Smith', 087210694, 'RyanSmith@gmail.com','https://images.generated.photos/d5lltAZd-0PnwhW6rTM6AEFPWV3GFmZbeGBNC8swfGI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwNjQ4NzcuanBn.jpg'),
	(104, 'Ciara', 'Egan', 087413196, 'CiaraEgan@gmail.com','https://images.generated.photos/9JRa7OqRXNaBe8eBF-pMg39KqS4ZeSn0cch2cvLqdc8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzODQ4MzguanBn.jpg'),
	(104, 'Jake', 'Lyons', 086907862, 'JakeLyons@gmail.com','https://images.generated.photos/JHGWZTAmy1iZI0t0qmCWly1IeKUXhUElWNXi2Azr0dw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA2/MzYwOTYuanBn.jpg'),
	(104, 'Rebecca', 'Kelly', 087379012, 'RebeccaKelly@gmail.com','https://images.generated.photos/JlO28nbhp8-DYqNVTgN-FMTGQ2kWfb4V8LQiPl6DzQY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/ODg3MDIuanBn.jpg'),
	(104, 'Katie', 'Smith', 085793490, 'KatieSmith@gmail.com','https://images.generated.photos/4DhOY72mr-tBVTv0LPFZbi3oj01v6ZRz3DUvgrIOzy0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA4/MTY1MTIuanBn.jpg'),
	(105, 'Shauna', 'Ryan', 087898900, 'ShaunaRyan@gmail.com','https://images.generated.photos/_mdXjh7n7BjCV3dKytdr-Vd3lLiHgdH0DK2C-KEKT3c/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA4Mjc1MTEuanBn.jpg'),
	(105, 'Molly', 'Downes', 087453321, 'MollyDownes@gmail.com','https://images.generated.photos/hOqO4gGBESb05COg_zjK1qWk1Qr3yS7Pj6aPtFUsgKw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA2NjIzODMuanBn.jpg'),
	(105, 'Declan', 'Fahy', 087897762, 'DeclanFahy@gmail.com','https://images.generated.photos/8E98XmUdEOEUvFSmoI-vsb53332n6KbifaCiUifkazE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzNDYyMTEuanBn.jpg'),
	(106, 'Mike', 'Casey', 087432298, 'MikeCasey@gmail.com','https://images.generated.photos/FX0a-auYnrUbq_JHCMxBBbnoXVVlbsUboMDvQwToZ_0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA3MzQzMjQuanBn.jpg'),
	(106, 'John', 'Rogers', 087006726, 'JohnRogers@gmail.com','https://images.generated.photos/7PILUtKR5F7G0duur6qzmcZb8Jc0qIoP1_Yfbi4ezIk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA3ODY1NzguanBn.jpg'),
	(106, 'Aaron', 'Evans', 08703486, 'AaronEvans@gmail.com','https://images.generated.photos/9lTcHmO7kNxpr-OKeVHzkB9ZnVk7sn3T9NxOU65eDUM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAyNjkyNTEuanBn.jpg'),
	(106, 'Brad', 'White', 0870154467, 'BradWhite@gmail.com','https://images.generated.photos/0xMaUB7Ql0yyCbHwSE_nnidq4k_30Aljsl4QMzrAJeo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAyMDUwNjguanBn.jpg');


	create table booking (	
	firstname varchar(15),
	lastname varchar(15),
	email varchar(30),
	bookingDate Date,
	startTime varchar(10),
	endTime varchar(10)
	)Engine=InnoDB;

		INSERT INTO booking (firstname, lastname, email, bookingDate, startTime, endTime) VALUES
		('ty', 'ty', 'r', '2001-01-01', '10:00', '11:00');
		
	create table users(
		username varchar(10),
		password varchar(20)
		)Engine=InnoDB;

		INSERT INTO users (username, password) VALUES 
		('test', 'test');

	show warnings;