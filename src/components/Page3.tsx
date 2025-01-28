import DropText from "./dropText";

const Page3 = () => {
  const headings: Array<string> = [
    "What we Do",
    "Pro Experience",
    "Partners and investors",
  ];

  const texts: Array<string> = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.",
  ];

  return (
    <div className="page3-container">
      <div className="page3-image-wrapper">
        <div className="page3-image">image</div>
      </div>
      <div className="page3-text">
        <h1>Innovation to transform your organization.</h1>
        <div className="text-details">
          <h3>
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
            ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet
            leo acun volutpat. Suspendisse hendrerit vehicula leo, vel efficitur
            fel.
          </h3>
        </div>
        <div>
          {headings.map((e: string, i: number) => (
            <DropText heading={e} text={texts[i]} />
          ))}

          <div className="learnmore"><h3>learn More</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
