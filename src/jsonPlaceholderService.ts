import { axiosClient } from './axios';

type Endpoints = 'posts' | 'comments' | 'albums' | 'photos' | 'todos' | 'users';

export default class JsonPlaceholderService<T extends {}> {
  private endpoint: Endpoints;

  constructor(_endpoint: Endpoints) {
    this.endpoint = _endpoint;
  }

  getAll(searchParams?: URLSearchParams): Promise<T[]> {
    return axiosClient
      .get<T[]>(`/${this.endpoint}`, {
        params: searchParams,
      })
      .then((res) => res.data);
  }

  async getbyId(id: number): Promise<T> {
    const { data } = await axiosClient.get<T>(`/${this.endpoint}/${id}`);
    if (!('id' in data)) throw new Error('Not found');
    return data;
  }

  create(input: T): Promise<T> {
    return axiosClient
      .post<T>(`/${this.endpoint}`, input)
      .then((res) => res.data);
  }

  update(id: number, input: Partial<T>): Promise<T> {
    return axiosClient
      .patch<T>(`/${this.endpoint}/${id}`, input)
      .then((res) => res.data);
  }

  delete(id: number): Promise<{}> {
    return axiosClient.delete(`/${this.endpoint}/${id}`);
  }
}
