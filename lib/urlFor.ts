import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configurated url-builder from sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
