
const fakeUser = {
    username: "Nicolas",
    loggedIn: true
}

export const trending = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title: "Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
    ];
    return res.render("home", {pageTitle: "Home", fakeUser, videos});
}

export const see = (req, res) => {
    return res.render("watch", {pageTitle: "Watch"});
}

export const edit = (req, res) => {
    return res.render("edit", {pageTitle: "Edit"});
}

export const search = (req, res) => {
    return res.send("<h1>Search Video</h1>");
}

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("<h1>Delete Video</h1>");
}

export const upload = (req, res) => {
    return res.send("<h1>Upload Video</h1>");
}