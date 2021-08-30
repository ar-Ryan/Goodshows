import "./styles.css";
import React, { useState } from "react";

const showDB = {
  Sitcom: [
    {
      name: "Friends",
      rating: "5/5",
      description:
        "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening."
    },
    {
      name: "Young Sheldon",
      rating: "4/5",
      description:
        "Sheldon Cooper, a bona fide genius, has been promoted four grades. Meanwhile, he struggles to fit in with his unintellectual family in Texas."
    },
    {
      name: "Rick and Morty",
      rating: "4.8/5",
      description:
        "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer."
    }
  ],

  Drama: [
    {
      name: "Suits",
      rating: "5/5",
      description:
        "Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret."
    },
    {
      name: "Game of Thrones",
      rating: "4.5/5",
      description:
        "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men."
    },
    {
      name: "Peaky Blinders",
      rating: "4.5/5",
      description:
        "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities."
    }
  ],

  Thriller: [
    {
      name: "Supernatural",
      rating: "4.5/5",
      description:
        "Brothers Dean and Sam follow in their father's footsteps and set out to eliminate monsters, demons and other supernatural entities that exist on Earth."
    },
    {
      name: "Mindhunter",
      rating: "4/5",
      description:
        "Catching a criminal often requires the authorities to get inside the villain's mind to figure out how he thinks. That's the job of FBI agents Holden Ford and Bill Tench. They attempt to understand and catch serial killers by studying their damaged psyches. Along the way, the agents pioneer the development of modern serial-killer profiling. The crime drama has a strong pedigree behind the camera, with Oscar-nominated director David Fincher and Oscar-winning actress Charlize Theron among the show's executive producers."
    },
    {
      name: "Tom Clancy's Jack Ryan",
      rating: "4/5",
      description:
        " Jack is thrust into a dangerous field assignment for the first time and uncovers a pattern in terrorist communication. That launches him into the middle of a dangerous gambit with a new breed of terrorism that threatens destruction on a global scale."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sitcom");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📺 Goodshows </h1>
      <p>Checkout my favorite shows. Select a genre to get started</p>

      <div>
        {Object.keys(showDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div>
        {showDB[selectedGenre].map((show) => (
          <div className="showlist">
            <div style={{ fontSize: "larger" }}>
              {" "}
              {show.name} ★{show.rating}
            </div>
            <div style={{ fontSize: "small", color: "white" }}>
              {" "}
              {show.description}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
