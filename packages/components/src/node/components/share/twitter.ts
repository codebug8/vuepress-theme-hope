import type { ShareServiceConfig } from "../../../shared/index.js";

export const twitter: ShareServiceConfig = {
  link: "https://twitter.com/intent/tweet?text=[title]&url=[url]&hashtags=[tags][title][twitter-user]",
  color: "#3397db",
  shape:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M921.177 283.063c-25.031 23.062-35.437 34.875-35.437 34.875s9 179.718-85.22 318.093-216 221.344-392.905 239.063c-176.907 17.718-292.22-54.282-292.22-54.282s77.345-4.5 126.845-23.343c49.218-19.125 120.093-68.906 120.093-68.906s-100.687-31.22-136.968-66.094c-36.282-35.157-45.282-55.969-45.282-55.969l99.563-1.406S175.02 549.125 145.208 505.25s-33.75-87.187-33.75-87.187l76.5 30.937s-63.562-86.906-72.562-154.406 11.531-103.782 11.531-103.782 32.344 61.032 165.656 128.532 245.813 63.562 245.813 63.562-43.031-149.344 88.875-215.437S849.74 213.03 849.74 213.03s23.062-6.187 40.218-12.656c17.157-6.187 41.907-17.719 41.907-17.719l-40.5 72.844 62.718-6.75s-7.875 11.25-32.906 34.313z"/></svg>',
};