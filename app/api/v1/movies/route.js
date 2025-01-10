import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async (req) => {
  // Get movies  from mongoDB
  try {
    const client = await clientPromise();
    
    // sample mflix is the dataset name
    const db = client.db("sample_mflix");

    //fetch movies from the database
    const movies = await db
      .collection("movies")
      .find({})
      .sort({metacritic: -1})
      .limit(10)
      .toArray();

    return NextResponse.json(movies);

  } catch(error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      {error: "Internal server Error"},
      {status: 500},
    );
  }
  
};
