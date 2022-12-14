/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeFeed
// ====================================================

export interface seeFeed_seeFeed_user {
  __typename: "User";
  username: string;
  avatar: string | undefined;
}

export interface seeFeed_seeFeed_comments_user {
  __typename: "User";
  username: string;
  avatar: string | undefined;
}

export interface seeFeed_seeFeed_comments {
  __typename: "Comment";
  id: number;
  user: seeFeed_seeFeed_comments_user;
  payload: string;
  isMine: boolean;
  createdAt: string;
}

export interface seeFeed_seeFeed {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
  user: seeFeed_seeFeed_user;
  caption: string | undefined;
  comments: seeFeed_seeFeed_comments[];
  createdAt: string;
  isMine: boolean;
}

export interface seeFeed {
  seeFeed: (seeFeed_seeFeed | undefined)[] | undefined;
}
