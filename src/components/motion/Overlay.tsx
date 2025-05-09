const Overlay = ({ opacity = 0.7 }: { opacity?: number }) => (
    <div
      className="absolute inset-0 z-10"
      style={{ backgroundColor: `rgba(15, 23, 42, ${opacity})` }}
    />
  );
  export default Overlay;
  