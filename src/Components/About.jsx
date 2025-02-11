/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/stockholm.jpg";

const imageAltText = "Stockholm";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "Hi and thanks for visiting my PhD/Pre-Doctoral applications website! My research interests are primarily in microeconometrics and empirical microeconomics.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "2020-2023: Bachelor of Economics @ Charles University Prague (CZ) & Erasmus+ Exchange @ Maastricht University (NL)",
  "2023-2025: MSc in Economics @ Stockholm School of Economics (SE) & Erasmus+ Exchange @ Bocconi University (IT)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <div>
    As a research assistant at the Institute for International Economic Studies, I work with
    Professor{" "}
    <a href="http://perseus.iies.su.se/~ialm/" target="_blank" rel="noopener noreferrer">
      Ingvild Almås
    </a>{" "}
    and the{" "}
    <a
      href="https://www.su.se/english/research/research-projects/kizazi-kijacho-research-for-the-next-generation?open-collapse-boxes=research-project-description,research-project-members/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kizazi Kijacho research team on evaluating an early childhood intervention program.
    </a>{" "}
  </div>
);
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
