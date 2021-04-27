CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `per_id` INT NOT NULL,
    `status_id` INT NOT NULL,
    `profile_id` INT NOT NULL,
    `user_card` INT NOT NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `document_type_id` INT NOT NULL
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_id_primary`(`id`);
ALTER TABLE
    `user` ADD UNIQUE `user_email_unique`(`email`);
CREATE TABLE `request_motive`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `request_motive` ADD PRIMARY KEY `request_motive_id_primary`(`id`);
CREATE TABLE `request_status_history`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `request_id` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `status_request_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `create_at` INT NOT NULL
);
ALTER TABLE
    `request_status_history` ADD PRIMARY KEY `request_status_history_id_primary`(`id`);
CREATE TABLE `request_history`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `request_id` INT NOT NULL,
    `create_at` DATETIME NOT NULL,
    `form_id` INT NOT NULL,
    `passport_number` VARCHAR(255) NOT NULL,
    `request_date` DATETIME NOT NULL,
    `civil_right` ENUM('') NOT NULL,
    `nif` VARCHAR(255) NOT NULL,
    `request_motive_id` INT NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `new_passport_number` INT NOT NULL,
    `status` ENUM('') NOT NULL,
    `user_id` INT NOT NULL,
    `filler_user_id` INT NOT NULL,
    `createAt` DATETIME NOT NULL
);
ALTER TABLE
    `request_history` ADD PRIMARY KEY `request_history_id_primary`(`id`);
CREATE TABLE `request`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `form_id` INT NOT NULL,
    `passport_number` VARCHAR(255) NULL,
    `civil_right` ENUM('') NOT NULL,
    `nif` VARCHAR(255) NOT NULL,
    `request_date` DATETIME NOT NULL,
    `request_motive_id` INT NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `new_passport_number` VARCHAR(255) NOT NULL,
    `status` ENUM('') NOT NULL,
    `filler_user_id` INT NOT NULL,
    `suggestion` VARCHAR(255) NOT NULL,
    `create_at` DATETIME NOT NULL
);
ALTER TABLE
    `request` ADD PRIMARY KEY `request_id_primary`(`id`);
ALTER TABLE
    `request` ADD INDEX `request_firstname_index`(`firstName`);
ALTER TABLE
    `request` ADD INDEX `request_lastname_index`(`lastName`);
ALTER TABLE
    `request` ADD INDEX `request_form_id_index`(`form_id`);
ALTER TABLE
    `request` ADD INDEX `request_passport_number_index`(`passport_number`);
ALTER TABLE
    `request` ADD INDEX `request_request_date_index`(`request_date`);
ALTER TABLE
    `request` ADD INDEX `request_phone_index`(`phone`);
ALTER TABLE
    `request` ADD INDEX `request_status_index`(`status`);
ALTER TABLE
    `request` ADD INDEX `request_filler_user_id_index`(`filler_user_id`);
CREATE TABLE `menu_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `menu_type` ADD PRIMARY KEY `menu_type_id_primary`(`id`);
CREATE TABLE `menu_profile`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `profile_id` INT NOT NULL,
    `menu_type_id` INT NOT NULL
);
ALTER TABLE
    `menu_profile` ADD PRIMARY KEY `menu_profile_id_primary`(`id`);
CREATE TABLE `profile`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `status_id` INT NOT NULL
);
ALTER TABLE
    `profile` ADD PRIMARY KEY `profile_id_primary`(`id`);
CREATE TABLE `user_status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `user_status` ADD PRIMARY KEY `user_status_id_primary`(`id`);
CREATE TABLE `persona`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `tel` VARCHAR(255) NOT NULL,
    `document_number` VARCHAR(255) NOT NULL,
    `document_type_id` INT NOT NULL,
    `create_at` INT NOT NULL
);
ALTER TABLE
    `persona` ADD PRIMARY KEY `persona_id_primary`(`id`);
CREATE TABLE `status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `status` ADD PRIMARY KEY `status_id_primary`(`id`);
CREATE TABLE `document_type`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `document_type` ADD PRIMARY KEY `document_type_id_primary`(`id`);
ALTER TABLE
    `document_type` ADD INDEX `document_type_description_index`(`description`);
CREATE TABLE `log`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `logout_at` DATETIME NOT NULL,
    `create_at` DATETIME NOT NULL
);
ALTER TABLE
    `log` ADD PRIMARY KEY `log_id_primary`(`id`);
CREATE TABLE `request_status`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `request_status` ADD PRIMARY KEY `request_status_id_primary`(`id`);
ALTER TABLE
    `request_history` ADD CONSTRAINT `request_history_request_id_foreign` FOREIGN KEY(`request_id`) REFERENCES `request`(`id`);
ALTER TABLE
    `request` ADD CONSTRAINT `request_request_motive_id_foreign` FOREIGN KEY(`request_motive_id`) REFERENCES `request_motive`(`id`);
ALTER TABLE
    `log` ADD CONSTRAINT `log_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `request_status_history` ADD CONSTRAINT `request_status_history_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `menu_profile` ADD CONSTRAINT `menu_profile_menu_type_id_foreign` FOREIGN KEY(`menu_type_id`) REFERENCES `menu_type`(`id`);
ALTER TABLE
    `menu_profile` ADD CONSTRAINT `menu_profile_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `profile`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `profile`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_status_id_foreign` FOREIGN KEY(`status_id`) REFERENCES `user_status`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_per_id_foreign` FOREIGN KEY(`per_id`) REFERENCES `persona`(`id`);
ALTER TABLE
    `profile` ADD CONSTRAINT `profile_status_id_foreign` FOREIGN KEY(`status_id`) REFERENCES `status`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_document_type_id_foreign` FOREIGN KEY(`document_type_id`) REFERENCES `document_type`(`id`);
ALTER TABLE
    `request_status_history` ADD CONSTRAINT `request_status_history_status_request_id_foreign` FOREIGN KEY(`status_request_id`) REFERENCES `request_status`(`id`);