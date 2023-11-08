import { render, screen, fireEvent } from "@testing-library/react";

import { PostLikes } from "./ui";

const ID = "abc";
const INIT_COUNT = 10;
const LIKES_TESTID = "likes";
const LIKE_BTN_TESTID = "likes-btn-up";
const DISLIKE_BTN_TESTID = "likes-btn-down";
const COUNT_BTN_TESTID = "likes-counter";
const mockedHandler = jest.fn();

describe("Post-likes should works fine", () => {
  beforeEach(() => {
    render(
      <PostLikes
        likesCount={INIT_COUNT}
        myLike={0}
        postId={ID}
        theLikeFeature={mockedHandler}
      />
    );
  });

  test("Should be defined", () => {
    expect(screen.getByTestId(LIKES_TESTID)).toBeInTheDocument();
  });

  test("Should add like correctly", () => {
    const likesCounter = screen.getByTestId(COUNT_BTN_TESTID);
    expect(likesCounter).toHaveTextContent(INIT_COUNT.toString());
    const likeBtn = screen.getByTestId(LIKE_BTN_TESTID);
    fireEvent.click(likeBtn);
    expect(likesCounter).toHaveTextContent((INIT_COUNT + 1).toString());
    fireEvent.click(likeBtn);
    expect(likesCounter).toHaveTextContent(INIT_COUNT.toString());
  });

  test("Should add dislike correctly", () => {
    const likesCounter = screen.getByTestId(COUNT_BTN_TESTID);
    expect(likesCounter).toHaveTextContent(INIT_COUNT.toString());
    const dislikeBtn = screen.getByTestId(DISLIKE_BTN_TESTID);
    fireEvent.click(dislikeBtn);
    expect(likesCounter).toHaveTextContent((INIT_COUNT - 1).toString());
    fireEvent.click(dislikeBtn);
    expect(likesCounter).toHaveTextContent(INIT_COUNT.toString());
  });

  test("Should call likes handler correctly", () => {
    const likeBtn = screen.getByTestId(LIKE_BTN_TESTID);
    const dislikeBtn = screen.getByTestId(DISLIKE_BTN_TESTID);
    fireEvent.click(likeBtn);
    expect(mockedHandler).toHaveBeenCalledTimes(5);
    expect(mockedHandler).toHaveBeenCalledWith(ID, 1);
    fireEvent.click(likeBtn);
    expect(mockedHandler).toHaveBeenCalledTimes(6);
    expect(mockedHandler).toHaveBeenCalledWith(ID, 0);
    fireEvent.click(dislikeBtn);
    expect(mockedHandler).toHaveBeenCalledTimes(7);
    expect(mockedHandler).toHaveBeenCalledWith(ID, -1);
    fireEvent.click(dislikeBtn);
    expect(mockedHandler).toHaveBeenCalledTimes(8);
    expect(mockedHandler).toHaveBeenCalledWith(ID, 0);
  });
});
