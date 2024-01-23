import { useEffect, useState } from "react";
import { FaTumblr, FaTwitter } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import requestQuote from "../../service/requestQuote";
import "./Card.css";

interface CardProps {
  fontColor: string;
  updateColor: () => void;
}

const Card: React.FC<CardProps> = ({ fontColor, updateColor }) => {
  const [randomQuote, setRandomQuote] = useState();
  const [author, setAuthor] = useState();

  const getRandomQuote = () => {
    requestQuote().then((data) => {
      setRandomQuote(data.quote);
      setAuthor(data.author);
      updateColor();
    });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const twitterUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(
      randomQuote + " -" + author + ". #RandomQuoteMachine #FreeCodeCamp"
    );

  const tumbrlUrl =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
    encodeURIComponent(author!) +
    "&content=" +
    encodeURIComponent(randomQuote!) +
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

  return (
    <article id="quote-box">
      <h1 id="text" style={{ color: fontColor, fontSize: "3vw" }}>
        <RiDoubleQuotesL style={{ color: fontColor }} />

        {" " + randomQuote + " "}

        <RiDoubleQuotesR style={{ color: fontColor }} />
      </h1>
      <h3 id="author">{author}</h3>
      <div className="buttonDisplayer">
        <div className="buttonContainer">
          <a
            href={twitterUrl}
            id="tweet-quote"
            style={{ backgroundColor: fontColor, color: "white" }}
          >
            <FaTwitter />
          </a>

          <a
            href={tumbrlUrl}
            id="tweet-quote"
            style={{ backgroundColor: fontColor, color: "white" }}
          >
            <FaTumblr />
          </a>
        </div>
        <button
          id="new-quote"
          color={fontColor}
          onClick={() => getRandomQuote()}
          style={{ backgroundColor: fontColor }}
        >
          Get random quote
        </button>
      </div>
    </article>
  );
};

export default Card;
