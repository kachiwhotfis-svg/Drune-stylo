import { Stage } from "@/components/illustrations/Scene";
import { SceneId } from "@/components/illustrations/scenes";

export type ProcessStep = {
  stage: Stage;
  label: string;
  caption: string;
};

export type Artwork = {
  slug: string;
  title: string;
  sceneId: SceneId;
  medium: string;
  book: string;
  year: string;
  blurb: string;
  process: ProcessStep[];
};

export const artworks: Artwork[] = [
  {
    slug: "fox-and-book",
    title: "The Fox Who Borrowed the Moon",
    sceneId: "fox-and-book",
    medium: "Digital gouache",
    book: "Picture book, spread 4",
    year: "2024",
    blurb:
      "A quiet forest spread built around the fox's stillness — the whole page had to feel like a held breath before a page turn.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Loose thumbnails to find the pose and where the reader's eye lands first." },
      { stage: "rough", label: "Rough clean-up", caption: "Tightening proportions and settling the composition before committing to line." },
      { stage: "line", label: "Line art", caption: "Final ink pass — confident, single-weight lines ready for colour." },
      { stage: "color", label: "Final colour", caption: "Flat colour, then light and texture layered on top for the finished spread." },
    ],
  },
  {
    slug: "moonlit-sailor",
    title: "Goodnight, Little Harbour",
    sceneId: "moonlit-sailor",
    medium: "Watercolour + digital",
    book: "Picture book, cover art",
    year: "2023",
    blurb:
      "The cover needed to work small on a shelf and large on a screen, so the silhouette and moon had to read instantly.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Testing three boat positions before landing on this one for balance." },
      { stage: "rough", label: "Rough clean-up", caption: "Locking the horizon line and boat scale against the moon." },
      { stage: "line", label: "Line art", caption: "Clean vector line work, built for easy re-colouring later in production." },
      { stage: "color", label: "Final colour", caption: "Deep dusk palette with a warm light source to keep it cosy, not scary." },
    ],
  },
  {
    slug: "dragons-teatime",
    title: "Ferdinand's Tea Party",
    sceneId: "dragons-teatime",
    medium: "Digital ink & colour",
    book: "Chapter book, interior spot art",
    year: "2024",
    blurb:
      "A spot illustration for a chapter opener — needed personality in a small footprint, so the dragon's expression carries it.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Exaggerating the dragon's expression early, before anything else." },
      { stage: "rough", label: "Rough clean-up", caption: "Refining the teapot and table so the silhouette reads at spot-art size." },
      { stage: "line", label: "Line art", caption: "Final linework, kept loose and warm to match the chapter's tone." },
      { stage: "color", label: "Final colour", caption: "Warm, candlelit palette to sell 'cosy' even in a small image." },
    ],
  },
  {
    slug: "bear-in-the-rain",
    title: "Bramble's Rainy Day",
    sceneId: "bear-in-the-rain",
    medium: "Gouache texture, digital finish",
    book: "Picture book, spread 9",
    year: "2022",
    blurb:
      "Rain is hard to make feel gentle rather than gloomy — the umbrella colour had to do a lot of emotional work here.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Working out the umbrella angle so it shelters the bear without hiding the face." },
      { stage: "rough", label: "Rough clean-up", caption: "Adjusting the rain rhythm so it frames rather than crowds the figure." },
      { stage: "line", label: "Line art", caption: "Confident final lines, ready for the gouache-texture colour pass." },
      { stage: "color", label: "Final colour", caption: "A warm coral umbrella against cool rain to keep the mood soft." },
    ],
  },
  {
    slug: "owls-library",
    title: "The Late Library Owl",
    sceneId: "owls-library",
    medium: "Digital gouache",
    book: "Picture book, spread 2",
    year: "2023",
    blurb:
      "Every book on the shelf got its own tiny colour decision — small details like this are what make a spread worth re-reading.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Blocking in the shelving before deciding where the owl perches." },
      { stage: "rough", label: "Rough clean-up", caption: "Straightening the shelves and refining the owl's silhouette." },
      { stage: "line", label: "Line art", caption: "Final line pass, keeping the shelf grid steady behind the softer owl shape." },
      { stage: "color", label: "Final colour", caption: "A jewel-toned row of spines to reward a slower look." },
    ],
  },
  {
    slug: "rabbit-and-balloons",
    title: "Up and Over the Hedgerow",
    sceneId: "rabbit-and-balloons",
    medium: "Digital ink & colour",
    book: "Picture book, endpapers",
    year: "2024",
    blurb:
      "Endpaper art needs to be gentle and pattern-like rather than a 'moment' — this one is built to be looked at slowly.",
    process: [
      { stage: "sketch", label: "Thumbnail sketch", caption: "Testing balloon placement so the rabbit still feels grounded, not lost." },
      { stage: "rough", label: "Rough clean-up", caption: "Simplifying the ear shapes so they stay soft at a glance." },
      { stage: "line", label: "Line art", caption: "Clean final lines, kept minimal to suit the endpaper's supporting role." },
      { stage: "color", label: "Final colour", caption: "A pastel sky palette so it never competes with the story pages." },
    ],
  },
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((a) => a.slug === slug);
}
