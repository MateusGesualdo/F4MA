# F4MA

## Stack

## Running the project

1. Clone this repository into your machine
1. Open your CLI inside the cloned repo and run the following commands:

   * `npm install`
   * `touch .env`
   * `start .env`
  
1. Paste the following environment variables into your **.env** file, replacing their values for those of your own SQL database:
    ```
    DB_HOST = mysql
    DB_USER = me
    DB_PASSWORD = xxxxxx
    DB_NAME = mytable
    JWT_KEY = xxxxxx
    ```
1. Run the following queries on your SQL database:
  ```SQL
    CREATE TABLE f4ma_bands (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      music_genre VARCHAR(255) NOT NULL,
      responsible VARCHAR(255) NOT NULL
  );
  ```
  ```SQL
    CREATE TABLE f4ma_shows (
      id VARCHAR(255) PRIMARY KEY,
      week_day VARCHAR(255) NOT NULL,
      start_time INT(11) NOT NULL,
      end_time INT(11) NOT NULL,
      band_id VARCHAR(255),
      FOREIGN KEY (band_id) REFERENCES f4ma_bands (id)
  );
  ```
    
1. Run npm run start on your CLI

1. Open your browser's localhost and test the endpoints using this project's own GUI. You'll find templates for all available requests, but feel free to send them via other softwares such as Postman.
