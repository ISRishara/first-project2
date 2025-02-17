"use server";

import { db } from "@/lib/mongodb";

//MOvies related server actions
export const createMovie = async (movie) => {
    try{
        //const client = await clientPromise();
        //const db = client.db("sample_mflix");
        //Create movie query
        const result = await db.collection("movies_n").insertOne(movie);

        console.log(`A movie was inserted with the _id: ${result.insertedId}`);


        if(result.acknowledged) {
            return { success: true };
        } else {
            return { success: false };
        }

    }catch(error) {
        console.log("Mongodb insert failed!", error);
        return { success: false, error };
    }
};



//update movie server action
export const updateMovie = async (movie) => {
    try{
        //const client = await clientPromise();
        //const db = client.db("sample_mflix");
        //Create movie query
        const result = await db.collection("movies_n").insertOne(movie);

        console.log(`A movie was inserted with the _id: ${result.insertedId}`);


        if(result.acknowledged) {
            return { success: true };
        } else {
            return { success: false };
        }

    }catch(error) {
        console.log("Mongodb insert failed!", error);
        return { success: false, error };
    }
};