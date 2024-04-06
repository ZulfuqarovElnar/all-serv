

export default function FitnessGallery() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
        <div className="grid gap-4">
          {[1, 2, 3].map(index => (
            <div key={index}>
              {(
                <img
                  className="h-full max-w-full rounded-lg object-cover object-center hover:scale-105 transition-all hover:brightness-110"
                  src={`/assets/images/gym/fitness/fitness${index}.svg`}
                  alt="gallery-photo"
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {[4, 5, 6].map(index => (
            <div key={index}>
              {(
                <img
                  className="h-full max-w-full rounded-lg object-cover object-center hover:scale-105 transition-all hover:brightness-110"
                  src={`/assets/images/gym/fitness/fitness${index}.jpg`}
                  alt="gallery-photo"
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {[7, 8, 9].map(index => (
            <div key={index}>
              {(
                <img
                  className="h-full max-w-full rounded-lg object-cover object-center hover:scale-105 transition-all hover:brightness-110"
                  src={`/assets/images/gym/fitness/fitness${index}.jpg`}
                  alt="gallery-photo"
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {[10, 11].map(index => (
            <div key={index}>
              {(
                <img
                  className="h-full max-w-full rounded-lg object-cover object-center hover:scale-105 transition-all hover:brightness-110"
                  src={`/assets/images/gym/fitness/fitness${index}.jpg`}
                  alt="gallery-photo"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-4 pb-10">
          <button className="px-[15px] py-[10px] border-black border rounded-3xl hover:bg-[#333] hover:text-white transition-all">Load More</button>
      </div>
    </div>
  );
}
