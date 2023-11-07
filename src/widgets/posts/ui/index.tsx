import { FC } from "react";

import { PostCard } from "@entities/post/components/post-card";
import { PostLikes } from "@entities/post/components/post-likes";
import { PostOptions } from "@entities/post/components/post-options/ui";
import { IPost } from "@entities/post/types";
import { ComplainBtn } from "@src/features/post/complain-post";
import { HidePostBtn } from "@src/features/post/hide-post";
import { SavePostBtn } from "@src/features/post/save-post";
import { SharePostBtn } from "@src/features/post/share-post/ui";
import { Button } from "@src/shared/ui/button";
import { IconComment, IconDots } from "@src/shared/ui/icons";

interface IPostsProps {
  posts: IPost[];
  sectionTitle: string;
}
const posts: IPost[] = new Array(3)
  .fill({})
  .map((p, idx) => ({ ...p, id: idx, likesCount: 99, myLike: 0 }));

export const Posts: FC<IPostsProps> = ({ sectionTitle }) => (
  <section className="section posts">
    <h2 className="visually-hidden">{sectionTitle}</h2>
    <ul className="posts__list list-reset">
      {posts.map((post, idx) => (
        <PostCard
          key={idx}
          post={post}
          commentsComponent={() => <></>}
          likesComponent={(postId, likesCount, myLike) => (
            <PostLikes
              postId={postId}
              myLike={myLike}
              likesCount={likesCount}
              theLikeFeature={(postId, isLiked) => {
                console.log("feature", postId, isLiked);
              }}
            />
          )}
          controlsComponent={() => <></>}
          optionsComponent={(postId) => (
            <PostOptions
              buttonComponent={() => (
                <Button
                  className="options__btn"
                  type="button"
                  icon={<IconDots className="options__icon" />}
                  onClick={() => {}}
                >
                  <span className="visually-hidden">Опции</span>
                </Button>
              )}
            >
              <li>
                <Button
                  className="button button--option interactive-1"
                  onClick={() => {
                    console.log("show comments");
                  }}
                  key={1}
                  icon={<IconComment />}
                >
                  Комментарии
                </Button>
              </li>
              <li>
                <SharePostBtn postId={postId} />
              </li>
              <li>
                <HidePostBtn postId={postId} />
              </li>
              <li>
                <SavePostBtn postId={postId} />
              </li>
              <li>
                <ComplainBtn postId={postId} />
              </li>
            </PostOptions>
          )}
        />
      ))}
    </ul>
  </section>
);
