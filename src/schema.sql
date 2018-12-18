-- Peter Zhou, Roland Huang, Owais Khan, Valerie Chen
-- Final Project, Intro to Database Theory F2018

create database if not exists sleepdb;

use sleepdb;

create table User (
	id int unsigned not null,
	name varchar(255) not null,
	googleFitAccount varchar(255),
	fitbitAccount varchar(255),
	rescueTimeAccount varchar(255),
	sleepLogLastUpdatedDate datetime,
	productivityLogLastUpdatedDate datetime,
	createdAt datetime not null,
	PRIMARY KEY(id)
);

create table SleepLog (
	id int unsigned not null,
	userId int unsigned not null 
	dateOfSleep varchar(255) not null,
	duration int not null,
	efficiency int not null,
	isMainSleep boolean not null,
	logId float not null,
	minutesAfterWakeup int not null,
	minutesAsleep int not null,
	minutesAwake int not null,
	minutesToFallAsleep int not null,
	startTime datetime not null,
	timeInBed int not null,
	type varchar(255) not null,
	summaryDeepCount int,
	summaryDeepMinutes int,
	summaryDeepThirtyDayAvgMinutes int,
	summaryLightCount int,
	summaryLightMinutes int,
	summaryLightThirtyDayAvgMinutes int,
	summaryRemCount int,
	summaryRemMinutes int,
	summaryRemThirtyDayAvgMinutes int,
	summaryWakeCount int,
	summaryWakeMinutes int,
	summaryWakeThirtyDayAvgMinutes int,
	summaryAsleepCount int,
	summaryAsleepMinutes int,
	summaryAwakeCount int,
	summaryAwakeMinutes int,
	summaryRestlessCount int,
	summaryRestlessMinutes int,
	PRIMARY KEY(id),
	FOREIGN KEY (userId) REFERENCES user(id)
);

create table SleepData (
	id int unsigned not null,
	sleepLogId int unsigned not null,
	startTime dateTime not null,
	level varchar(255) not null,
	second int not null,
	PRIMARY KEY(id),
  	FOREIGN KEY (sleepLogId) REFERENCES SleepLog(id)
);

create table FitbitAccount {
  id int unsigned not null,
  userId int unsigned not null,
  fitbitUserId varchar(255) not null,
  refreshToken varchar(255) not null,
  accessToken varchar(255) not null,
  expiration datetime not null,
  PRIMARY KEY(id),
}