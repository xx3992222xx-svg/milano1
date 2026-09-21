ALTER TABLE `users` MODIFY COLUMN `role` enum('user','vendor','admin') NOT NULL DEFAULT 'user';
