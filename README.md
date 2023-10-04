# @tutur17449/json-server-sdk

🚀 Work around https://jsonplaceholder.typicode.com/ 🚀

## Installation

```bash
yarn add @tutur17449/json-server-sdk
```

## Usage

```ts
import { jsonPlaceholderApi } from '@tutur17449/json-placeholder-sdk';

await jsonPlaceholderApi.posts.getbyId(1);

await jsonPlaceholderApi.posts.getAll(new URLSearchParams({ userId: '1' }));

await jsonPlaceholderApi.posts.update(1, {
  title: 'foo',
});

await jsonPlaceholderApi.posts.create({
  title: 'foo',
  body: 'bar',
  userId: 1,
  id: 1,
});
```

## License

MIT
