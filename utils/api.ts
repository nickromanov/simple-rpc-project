import { IAuthorData, IPostData, TPostDataList, IPostDataWithAuthor, TAuthorDataList, TPostDataWithAuthorList } from '~/types/interfaces';

const API_LINK = 'http://jsonplaceholder.typicode.com';

async function postData($http : any): Promise<TPostDataList> {
  return $http.$get(`${API_LINK}/posts`);
}

async function authorData($http : any): Promise<TAuthorDataList> {
  return $http.$get(`${API_LINK}/users`);
}

export function filterByAuthor(query: string, list: TPostDataWithAuthorList): TPostDataWithAuthorList {
  const newList: TPostDataWithAuthorList = [...list];
  return newList.filter((value: IPostDataWithAuthor)  => value.authorName.toLowerCase().includes(query.toLowerCase()));
}

export async function getListWithAuthors($http : any): Promise<TPostDataWithAuthorList>  {
  const posts: TPostDataList = await postData($http);
  const authors: TAuthorDataList = await authorData($http);
  const postsWithAuthors: TPostDataWithAuthorList = [];

  posts.forEach(((post: IPostData) => {
    let currAuthor: IAuthorData | undefined = authors.find(author => post.userId === author.id);
    if(currAuthor) {
      postsWithAuthors.push({...post, authorName: currAuthor.name})
    }
  }));
  return postsWithAuthors;

}

