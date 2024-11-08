import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { useState } from "react";
import DetailHelmet from "../components/DetailHelmet";
export default function VideoDetail() {
  const { state: {video} } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeisOpen = () => {
    setIsOpen(prev => !prev);
  }
  return (
    <>
      <DetailHelmet title={title} description={description}/>
      <section className="flex flex-col lg:flex-row justify-center">
        <article className="basis-4/6">
          <iframe
            id='player'
            type='text/html'
            width='100%'
            height='640'
            src={`https://www.youtube.com/embed/${video.id}`}
          >
          </iframe>
          <div className="p-8">
            <h2 className="text-xl font-bold">{ title }</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <div className={isOpen ? `h-full relative rounded-3xl bg-description p-3` : `h-28 relative rounded-3xl bg-description p-3`}>
              <pre className={isOpen ? `h-full  whitespace-pre-wrap` : `h-2/4 overflow-hidden whitespace-pre-wrap`}>{description}</pre>
              <button onClick={handleChangeisOpen} className={isOpen ? `static my-3` : `static my-3`}>{isOpen ? `show less` : `...more`}</button>
            </div>
          </div>
        </article>
        <section className="basis-2/6">
          <RelatedVideos id={channelId} />
        </section>
      </section>
    </>
  )
}