/**
 * Grid of bookmarks (of a specific folder).
 * Wrapped in SortableContainer from react-sortable-hoc to allow the
 * re-ordering of its childrens.
 */
import React from "react";
import styled from "styled-components/macro";
import { SortableContainer } from "react-sortable-hoc";
import { BookmarkGridItem } from "./BookmarkGridItem";
import { Folder } from "../types/Folder";
import { Bookmark } from "../types/Bookmark";

interface Props {
  folder: Folder;
  isDragging: boolean;
  isFolderHidden: boolean;
}

// TODO: OPtimise the algorithm
const filterBookmark = (bookmarks: Bookmark[]): Bookmark[] => {
  const listFiltered: Bookmark[] = [];
  bookmarks = bookmarks.sort((item1, item2) => {
    if (item1.title === item2.title) {
      return 0;
    } else if (item1.title > item2.title) {
      return 1;
    }
    return -1;
  });
  bookmarks.forEach((bookmark, index) => {
    if (index === bookmarks.length - 1) {
      listFiltered.push(bookmark);
      return;
    }
    if (
      bookmark.title === "" ||
      bookmark.title !== bookmarks[index + 1].title
    ) {
      listFiltered.push(bookmark);
    }
  });
  return listFiltered.sort((item1, item2) => {
    if (item1.id === item2.id) {
      return 0;
    } else if (item1.id > item2.id) {
      return 1;
    }
    return -1;
  });
};

export const BookmarkGrid = SortableContainer<Props>(
  ({ folder, isDragging, isFolderHidden }) => {
    return (
      <Root>
        {filterBookmark(folder.bookmarks).map((bookmark, index) => (
          <BookmarkGridItem
            key={bookmark.id}
            id={bookmark.id}
            index={index}
            title={bookmark.title}
            url={bookmark.url}
            isHoverDisabled={isDragging}
            isTransitionDisabled={isDragging}
            isHidden={isFolderHidden}
          />
        ))}
      </Root>
    );
  }
);

const Root = styled.ul`
  display: grid;
  /* grid-gap: 12px 20px; TODO: react-sortable-hoc grid workaround */
  grid-template-columns: repeat(auto-fit, 280px);
  /* grid-auto-rows: 54px; TODO: react-sortable-hoc grid workaround */
  padding-left: 0;
`;
