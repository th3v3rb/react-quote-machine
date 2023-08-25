import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaTwitter, FaTumblr } from "react-icons/fa";
import Button from "../Button/Button";
import "./Card.css";
import requestQuote from "../../service/requestQuote";
import { useEffect, useState } from "react";

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

  const tweet = () => {
    window.open(twitterUrl);
  };

  const tumbrl = () => {
    window.open(tumbrlUrl);
  };

  return (
    <article className="card">
      <section className="cardSection">
        <div className="phraseContent">
          <h1 style={{ color: fontColor, fontSize: "3vw" }}>
            <RiDoubleQuotesL style={{ color: fontColor }} />
            {" " + randomQuote+" "}
            <RiDoubleQuotesR style={{ color: fontColor }} />
          </h1>
        </div>
        <div className="phraseAuthorContainer">
          <h3 className="quoteAuthor">{author}</h3>
        </div>
        <div className="buttonDisplayer">
          <div>
            <Button
              color={fontColor}
              icon={<FaTwitter />}
              largeButton={false}
              onclick={() => tweet()}
            />
            <Button
              color={fontColor}
              icon={<FaTumblr />}
              largeButton={false}
              onclick={() => tumbrl()}
            />
          </div>
          <div>
            <Button
              color={fontColor}
              text="Get andom Quote"
              largeButton={true}
              onclick={() => getRandomQuote()}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Card;
