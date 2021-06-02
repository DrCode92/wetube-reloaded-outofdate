import Video from "../models/Video";

//* callback function
//! 실행 1
//? console.log("start"); 

//! 실행 마지막
//? Video.find({}, (error, videoMember) => {
//?     if(error) {
//?        return res.render("server-error");
//?     }
//?     return res.render("home", {pageTitle: "Home", videoMember});
//? });

//! 실행 2
//? console.log("finished");

//* primise
export const home = async (req, res) => {
    const videoMember = await Video.find({}); 
    //* await 다음 구문이 완료할 때 까지 대기
    return res.render("home", {pageTitle: "Home", videoMember}); 
}

export const watch = async (req, res) => {
    //* const id = req.params.id; <-- under ES6
    const {id} = req.params; //* ES6
    const videoMember = await Video.findById(id);
    if(!videoMember) {
        return res.render("404", {pageTitle: "Video not found."});
    }
    return res.render("watch", {pageTitle: videoMember.title, videoMember});
}

export const getEdit = async (req, res) => {
    const {id} = req.params;
    //! videoMember is object
    const videoMember = await Video.findById(id);
    if(!videoMember) {
        return res.render("404", {pageTitle: "Video not found."})
    }
    return res.render("edit", {pageTitle: `Edit: ${videoMember.title}`, videoMember});
}

export const postEdit = async (req, res) => {
    const {id} = req.params;
    const {title, description, hashtags} = req.body;
    //* check video exists
    const videoMember = await Video.exists({ _id: id });
    if(!videoMember) {
        return res.render("404", { pageTitle: "Video not found." });
    }
    //* updatd DB
    //! Video is model, different with videoMember, model can only use mongoose function
    await Video.findByIdAndUpdate(id, { 
        title, 
        description,
        hashtags: hashtags.split(",").map((word) => word.startsWith("#") ? word : `#${word}`),
    })
    //* update DB - old version
    /*
    videoMember.title = title;
    videoMember.description = description;
    videoMember.hashtags = hashtags.split(",").map((word) => word.startsWith("#") ? word : `#${word}`);
    await videoMember.save();
    */
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title: title,
            description: description,
            //? createdAt: Date.now(),
            hashtags: hashtags.split(",").map(word => word.startsWith("#") ? word : `#${word}`),
            //? meta: {
            //?     views: 0,
            //?     rating: 0,
            //? }
        })
        return res.redirect("/");
    } catch(error) {
        console.log(error);
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
}

export const search = (req, res) => {
    return res.send("<h1>Search Video</h1>");
}

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("<h1>Delete Video</h1>");
}

