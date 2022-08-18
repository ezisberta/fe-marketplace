import TrendingItems from "../Components/TrendingItems";
export default function HomePage() {
  return (
    <>
      <header>
        <h1 className="title">Our Marketplace</h1>
      </header>
      <div>
        <TrendingItems />
      </div>
    </>
  );
}
