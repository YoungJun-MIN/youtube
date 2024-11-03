import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import VideoCard from '../components/VideoCard'
import { useYoutubeApi } from '../context/YoutubeApiContext'

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(
    { 
      queryKey:['videos', keyword], 
      queryFn: () => {
        return youtube.search(keyword);
      },
      staleTime: 1000 * 60 * 1
    })
  return (
    <>
      <div>Videos {keyword ? keyword : `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <ul className=""> */}
          {videos.map((video) => 
            (<VideoCard key={video.id} video={video} type={''} />)
          )}
        </ul>
      )}
    </>
  )
}