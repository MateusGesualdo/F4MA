# F4MA

## Stack

## Running the project

1. Clone this repository into your machine
1. Open your CLI inside the cloned repo and run the following commands:

   * npm install
   * touch .env
   * start .env
  
1. Paste the following environment variables into your **.env** file, replacing their values for those of your own SQL database:

  ```
   DB_HOST = mysql
   DB_USER = me
   DB_PASSWORD = xxxxxx
   DB_NAME = mytable      
   
   JWT_KEY = xxxxxx
  ```
  
  1.Run the following queries on your SQL database:

   ```SQL
   CREATE TABLE  (
       id VARCHAR(255) PRIMARY KEY,
       name VARCHAR(255) UNIQUE NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) UNIQUE
   );
   ```
   
   ```SQL
   CREATE TABLE  (
       user_id VARCHAR(255),
       friend_id VARCHAR(255),
       PRIMARY KEY (user_id , friend_id),
       FOREIGN KEY (user_id) REFERENCES future_book_users (id),
       FOREIGN KEY (friend_id) REFERENCES future_book_users (id)
   );
   ```
   
   ```SQL
   CREATE TABLE  (
       id VARCHAR(255) PRIMARY KEY,
       author_id VARCHAR(255),
       description VARCHAR(255),
       creation_date DATETIME,
       type VARCHAR(255),
       img VARCHAR(255),
       FOREIGN KEY (author_id) REFERENCES future_book_users (id)
   );
   ```
   
   ```SQL
   CREATE TABLE  (
       friend_id VARCHAR(255),
       post_id VARCHAR(255),
       PRIMARY KEY (friend_id , post_id),
       FOREIGN KEY (friend_id) REFERENCES future_book_users (id),
       FOREIGN KEY (post_id) REFERENCES future_book_posts (id)
   );
   ```
   
   ```SQL
   CREATE TABLE  (
       id VARCHAR(255) PRIMARY KEY,
       friend_id VARCHAR(255),
       post_id VARCHAR(255),
       comment_text VARCHAR(255),
       FOREIGN KEY (friend_id) REFERENCES future_book_users (id),
       FOREIGN KEY (post_id) REFERENCES future_book_posts (id)
   );
   ```
1. Run npm run start on your CLI

1. Open your browser's localhost and test the endpoints using this project's own GUI. You'll find templates for all available requests, but feel free to send them via other softwares such as Postman.
