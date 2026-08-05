export default function BottomEdgeBlur() {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 right-0 z-30 h-14 sm:h-20 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"
    />
  );
}
