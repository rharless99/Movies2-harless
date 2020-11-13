CREATE TABLE movie_search_project (
	
  	id INT PRIMARY KEY,
  	title TEXT,
  	year INT,
	age TEXT,
	imdb FLOAT,
	rotten_tomatoes INT,
	netflix BOOLEAN,
	hulu BOOLEAN,
	prime_video BOOLEAN,
	directors TEXT,
	genres TEXT,
	language TEXT,
	runtime FLOAT
		
);
SELECT * FROM movie_search_project;

-- Deleted movies that only disney+ had
DELETE FROM movie_search_project
WHERE (netflix = false AND hulu = false AND prime_video = false);

-- Delete Least popular genres to leave the top 10
DELETE  FROM movie_search_project
WHERE (genres = 'Romance' OR genres = 'Sport' OR genres = 'Mystery' OR genres = 'Musical'
OR genres = 'Short' OR genres = 'Western' OR genres = 'Sci-Fi' OR genres = 'Family' OR genres ='Thriller');

-- Check to make sure you only have 10 genres (Genre Count)
SELECT  genres,COUNT(genres) FROM movie_search_project
GROUP BY genres;