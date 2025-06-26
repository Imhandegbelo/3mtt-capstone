
# Moviebox

Moviebox is a one stop for movie lovers. It allows users to search for movies, find trending movies and movie details.

[Tools](#tools)
[Running Locally](#running-locally)
[Api Reference](#api-reference)
[Acknowledgments](#acknowledgements)

## Tools
* Vitejs
* Reactjs
* Tailwindcss for styling
* Vercel for hosting

## Running Locally

To run Locally, the following requirements must be moviebox
* Nodejs
* npm (comes with Nodejs)
* Git

Clone the project

```bash
  git clone https://github.com/Imhandegbelo/moviebox.git
```

Go to the project directory

```bash
  cd moviebox
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

The project should be live at https://localhost/5173


## API Reference
* TMDB api - A very rich dataset of movies, spanning different genres, culture  and languages

#### Get all items

```http
  GET /movie/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /movie/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of movie to fetch |


## Acknowledgements

 - [The Movie Database](https://themoviedatabase.org/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


The app is live [here](https://moviebox-hc13.vercel.app/)
