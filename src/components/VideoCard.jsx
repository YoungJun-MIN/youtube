import { useNavigate } from 'react-router-dom';
import {formatAgo} from '../util/date'
import PropTypes from 'prop-types';
const VideoCard = ({ video, type, innerRef })  => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  const id = video.id.kind ? video.id.videoId ? video.id.videoId : video.id.channelId: video.id 

  return (
    <li ref={innerRef}
      className={(isList) ? 'flex gap-1 m-2 p-1.5' : 'p-1.5'}
      onClick={() => {
        navigate(`/videos/watch/${id}`, { state: { video, id } });
      }}
    >
      {/* <picture>
        <source srcSet={thumbnails.default.url} media="(max-width: 1300px)" />
        <source srcSet={thumbnails.medium.url} media="(min-width: 1301px)" />
      </picture> */}
        <img className={isList ? 'w-60 mr-2 border-2 rounded-lg cursor-pointer transition ease-in-out border-transparent hover:border-rose-600' : 'w-full border-2 rounded-lg cursor-pointer transition ease-in-out border-transparent hover:border-rose-600'} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

export default VideoCard;