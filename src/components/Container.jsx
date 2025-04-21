export default function Container({ children }) {
  return (
    <div className="max-w-[900px] mx-auto px-[40px]">
      {children}
    </div>
  );
}
