import { RequestHandler } from "express";

export const createVideo :RequestHandler= (req,res)=> {
    res.json('creating a  video')
}
export const getVideos :RequestHandler= (req,res)=> {
    res.json('getting videos')
}
export const getVideo :RequestHandler= (req,res)=> {
    res.json('getting a single video')
}
export const deleteVideo :RequestHandler= (req,res)=> {
    res.json('deleting a video')
}
export const updateVideo :RequestHandler= (req,res)=> {
    res.json('updating a  video')
}