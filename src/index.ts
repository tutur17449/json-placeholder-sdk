import JsonPlaceholderService from './jsonPlaceholderService';
import type { Album, Comment, Photo, Post, Todo, User } from './types';

export const jsonPlaceholderApi = {
  albums: new JsonPlaceholderService<Album>('albums'),
  comments: new JsonPlaceholderService<Comment>('comments'),
  photos: new JsonPlaceholderService<Photo>('photos'),
  posts: new JsonPlaceholderService<Post>('posts'),
  todos: new JsonPlaceholderService<Todo>('todos'),
  users: new JsonPlaceholderService<User>('users'),
};

export * from './types';
