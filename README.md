# HOW TO RUN

## Start local server

```
npm run dev
```

<br/>

## Start redis Server

install redis on your machine (if you havent already)

```
brew install redis
```

run default redis server with

```
redis-server
```

<br/>

## Make GET request to /menu endpoint

```
http://localhost:3000/menu
```

check ms of first call and compare to subsequent calls to see effect of caching
