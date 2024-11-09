import { Helmet } from "react-helmet-async"

//export default function DetailHelmet({title, description, image, url, type}) {
export default function DetailHelmet({title, description}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content="https://via.placeholder.com/1200" />
      <meta property="og:url" content="{https://www.google.com}" />
      <meta property="og:type" content="website" /> */}
    </Helmet>
  )
}