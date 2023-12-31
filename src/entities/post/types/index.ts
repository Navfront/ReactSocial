import { LikeType } from "@src/shared/types";

export interface IAuthor {
  id: string;
  name: string;
  avaSrc: string;
}

export interface IPost {
  id: string;
  title: string;
  imgSrc: string;
  published: string;
  author: IAuthor;
  likesCount: number;
  myLike: LikeType;
}
