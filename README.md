# REST API using Express.js, PostgreSQL

This is a CRUD API that follows the REST structure.

## Endpoints

#### Get all blogs

```http
  GET /api/blogs
```

#### Post a blog

```http
  POST /api/blogs
```

#### Post all items

```http
  GET /api/blogs
```

#### Get blog by id

```http
  GET /api/blogs/:id
```

| Parameter | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `id`      | `int` | **Required**. ID of blog to fetch |

#### Edit blog with id

```http
  PUT /api/blogs/:id
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `int`    | **Required**. ID of blog to update      |
| `title`   | `string` | **Required**. Title to be update with   |
| `content` | `string` | **Required**. Content to be update with |

#### Delete blog by id

```http
  GET /api/items/:id
```

| Parameter | Type  | Description                        |
| :-------- | :---- | :--------------------------------- |
| `id`      | `int` | **Required**. ID of blog to delete |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DBConfigLink`
