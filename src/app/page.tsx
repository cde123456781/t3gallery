import Link from "next/link";


const mockUrls = [
  "https://eyt0897rgn.ufs.sh/f/2zFACZuM1rWfznt6fH5OPRyXvqBu7QnLgbCVrDea9pE5hUxY",
  "https://eyt0897rgn.ufs.sh/f/2zFACZuM1rWf2CASeI0ZuM1rWfxOqeYoJ0i28gCFlRVsLG4z",
  "https://eyt0897rgn.ufs.sh/f/2zFACZuM1rWfAesBxtJyP0gd7tpXfmwJLqQCGU5eWa129I86",
  "https://eyt0897rgn.ufs.sh/f/2zFACZuM1rWf5eyoN2DE3Q0S1eRuZGp8f4B9qPnLVxjUsyYD"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1, 
  url
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
      {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
      
      ))}

      </div>
    </main>
  );
}
