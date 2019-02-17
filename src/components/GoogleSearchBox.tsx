/**
 * Screen shown to the user when the are not bookmarks in the list (most of the
 * time it happens if no bookmarks are available in the search result).
 */
import React from "react";
import "../styles/google-search.css";

export const GoogleSearchBox = (): JSX.Element => {
    return (
        <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
            <img id="img-search" src="./search.png" />
            <input
                autoComplete="off"
                className="input-search"
                name="q"
                placeholder="Type and enter to search..."
                required type="text"
            />
        </form>
    )
};
