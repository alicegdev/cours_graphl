/*
Script de création de la base de données `blog`.
*/
create database IF NOT EXISTS bdblog;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'api-dev'@'%.%.%.%' identified by 'api-dev-password';
grant select, update, insert, delete on bdblog.* to 'api-dev'@'%.%.%.%';
flush privileges;