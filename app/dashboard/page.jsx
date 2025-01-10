import { getMovies } from "@/lib/apis/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function DashboardPage() {
  //1. add shadcn card
  //2. create movies GET endpoints
  //3. Read thr dummy response
  //4. Render data in the UI
  const moviesQuery = await getMovies();

  console.log("MOVIES FE", moviesQuery);

  return (
    <main>
      {/* navigation bar */}
      <nav className="bg-red-900 w-full h-16 flex justify-start items-center">
        <div className="container">
          <h1 className="text-white font-bold text-xl">Netflix Dashboard</h1>
        </div>
      </nav>

      {/*body section*/}
      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-[480px]">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{movie?.title}</CardTitle>
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
                    <p className="line-clamp-3">{movie?.plot}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
