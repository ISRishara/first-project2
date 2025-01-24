import { getMovies } from "@/lib/apis/server";
import { SiImdb } from "react-icons/si";
import { SiNetflix } from "react-icons/si";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  //1. add shadcn card
  //2. create movies GET endpoints
  //3. Read thr dummy response
  //4. Render data in the UI
  const moviesQuery = await getMovies();

  console.log("MOVIES FE", moviesQuery);

  return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-[480px]">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>
                      {movie?.title}{" "}
                      <span className="text-xs text-neutral-400 font-normal">
                        ({movie?.year ?? "N/A"})
                      </span>
                    </CardTitle>
                    <CardDescription className="sr-only">
                      {movie?.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center bg-black w-full h-[220px] mb-4 rounded">
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="h-full w-auto object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="flex flex-col justify-between h-[154px]">
                      {/* movie plot */}
                      <p className="line-clamp-3 text-xs">{movie?.plot}</p>
                      {/* movie Genres */}
                      <div className="text-sm text-blue-900 font-semibold">
                        {movie?.genres?.length && movie?.genres?.join(" / ")}
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <Badge variant="success" className="font-medium">
                          Rated: {movie?.rated ?? "N/A"}
                        </Badge>

                        <div className="flex flex-row gap-1 items-center" title="IMdb Ratings">
                          <SiImdb className="text-black bg-yellow-500 text-xl" />
                          <span className="text-sm font-semibold">
                            {movie?.imdb?.rating ?? 0}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
  );
}
