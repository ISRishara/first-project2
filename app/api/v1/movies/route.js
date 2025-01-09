import { NextRequest, NextResponse } from "next/server";

const MOVIES = [
  { id: 1, title: "Harry Potter 01" },
  { id: 2, title: "Harry Potter 02" },
  { id: 3, title: "Harry Potter 03" },
  { id: 4, title: "Harry Potter 04" },
  { id: 5, title: "Harry Potter 05" },
  { id: 6, title: "Harry Potter 06" },
  { id: 7, title: "Harry Potter 07" },
  { id: 8, title: "Harry Potter 08" },

];

export const GET = async (req) => {
  return NextResponse.json({ success: true, movies: MOVIES });
};
