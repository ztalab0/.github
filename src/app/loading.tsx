import LoadingScreenVisual from "@/components/LoadingScreenVisual";

/**
 * Next.js App Router convention file: automatically shown while a route
 * segment is loading (navigation between pages, or a slow-loading page),
 * and swapped out for the real content the instant it's ready.
 */
export default function Loading() {
  return <LoadingScreenVisual entered exiting={false} />;
}
