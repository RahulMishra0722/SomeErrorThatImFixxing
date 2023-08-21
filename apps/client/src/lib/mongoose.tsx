import mongoose from "mongoose";
let alreadyDone = false 
export async function ensureDbConnected(){
    if(alreadyDone){
        return
    }
    await mongoose.connect("mongodb+srv://rahulmishra1716:qI0MlBPAlnQLGExp@cluster0.oikrzcn.mongodb.net/")
    alreadyDone = true
}