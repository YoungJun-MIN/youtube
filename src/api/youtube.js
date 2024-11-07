import { GiConsoleController } from "react-icons/gi";

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search({keyword, pageParam}) {
    return keyword ? this.#searchByKeyword({keyword, pageParam}) : this.#mostPopular({keyword, pageParam});
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id }})
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
 
  async relatedVideos(id) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        channelId: id   
      }
    })
    .then((res) => {
      return res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
    });
  }
  async #searchByKeyword({keyword, pageParam}) {
    return this.apiClient
    .search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
        pageToken: pageParam
    }})
    .then((res) => {
      return ({
        items: res.data.items
                .filter((item) => item.id.kind.includes('video'))
                .map((item) => ({...item, id: (item.id.kind ? item.id.videoId ? item.id.videoId : item.id.channelId: item.id )})), 
        nextPageToken: res.data.nextPageToken
      })
    })
  }

  async #mostPopular({keyword, pageParam}) {
    return this.apiClient
    .videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: `mostPopular`,
        regionCode: `US`,
        pageToken: pageParam
      }
    })
    .then((res) => ({items: res.data.items, nextPageToken: res.data.nextPageToken}))
  }
}