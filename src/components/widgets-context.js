import React, { useState, createContext } from 'react';

export const WidgetsContext = createContext();

export const WidgetsProvider = props => {
    const [widgets, setWidgets] = useState({
        recentPostsTitle: '',
        numberOfPosts: 5,
        displayPostsDate: false,
        recentCommentsTitle: '',
        numberOfComments: 5,
        categoriesTitle: '',
        showPostsCount: false
    });

    return (
        <WidgetsContext.Provider value={[widgets, setWidgets]}>
            {props.children}
        </WidgetsContext.Provider>
    )
}