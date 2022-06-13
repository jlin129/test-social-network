
# SocialNet

This project is a mockup of a very basic social network, it has the following functions:  
- Sign up/Log in  
- Make new posts  
- View all the publications

And it was developed with these technologies:  
- Mongo DB to store the data.
- RESTful API with NodeJS Express, routes and schemas are neatly separated in their own folders.  Mongoose is used to establish the connection with the database.
- Docker to pack everything up in 2 separated containers.
- Simple front end skeleton with HTML and Jquery/JS, where you can test the API calls and visualize the contents of the db.  


## How to use

Build the Dockers with:

```bash
  docker compose build
```
Then get them up:

```bash
  docker compose up
```
You can then use the "requests.http" file with Rest Client in VSCode or equivalent to try all 
the API calls. You also have the option to try them with "index.html" (e.g. using Live Server) 
if you preffer a little moregraphic experience.
 
## Authors

- [@jlin129](https://www.github.com/jlin129)


## License

[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)

