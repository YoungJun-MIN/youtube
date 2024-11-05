import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import VideoCard from '../components/VideoCard'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Videos() {
  const { ref, inView } = useInView()
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
    { 
      queryKey:['videos', keyword], 
      queryFn: ({pageParam = ''}) => {
        return youtube.search({keyword, pageParam});
      },
      staleTime: 1000 * 60 * 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.nextPageToken
      },
      getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    }
  )
  console.log(`videos: `, videos);
  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      {isLoading && <p className="flex justify-self-center self-center text-8xl">Loading... 😂😂😂😂😂😂😂😂😂</p>}
      {error && <p className="flex justify-self-center self-center text-8xl">Something is wrong... 😅😅😅😅</p>}
      {videos && (
        <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.pages.map((page, pagesIndex) =>
            (page.items.map((item, itemsIndex) => {
              if(pagesIndex === (videos.pages.length - 1) && itemsIndex === (page.items.length - 1)) {
                return (<VideoCard key={item.etag} video={item} type='' innerRef={ref} />)
              } 
              return (<VideoCard key={item.etag} video={item} type='' />)
            })) 
          )}
        </ul>
      )}
    </>
  )
}