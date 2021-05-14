

let videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 1,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 2,
        },
        {
            title: "Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 3,
        },
    ];
export const trending = (req, res) => {
    return res.render("home", {pageTitle: "Home", videos});
}

export const watch = (req, res) => {
    //* const id = req.params.id; <-- under ES6
    const {id} = req.params; //* ES6
    const videoNumber = videos[id - 1]
    return res.render("watch", {pageTitle: `Watching: ${videoNumber.title}`, videoNumber});
}

export const getEdit = (req, res) => {
    const {id} = req.params;
    const videoNumber = videos[id - 1];
    return res.render("edit", {pageTitle: `Editing: ${videoNumber.title}`, videoNumber});
}

export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}

export const postUpload = (req, res) => {
    //todo here we will add a video to the videos array 
    const {title} = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: "just now",
        views: 0,
        id: videos.length + 1,
    }
    videos.push(newVideo);
    return res.redirect("/");
}

export const search = (req, res) => {
    return res.send("<h1>Search Video</h1>");
}

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("<h1>Delete Video</h1>");
}
