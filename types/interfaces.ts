export interface IPostData {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IAuthorData {
  id: number,
  name: string
}

export interface IPostDataWithAuthor extends IPostData{
  authorName: string;
}

export type TPostDataList = IPostData[];

export type TAuthorDataList = IAuthorData[];

export type TPostDataWithAuthorList = IPostDataWithAuthor[];
