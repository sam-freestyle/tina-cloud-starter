import * as React from "react";
import Markdown from "react-markdown";
import { Actions } from "../actions";
import { Container } from "../container";
import { Section } from "../section";
import { ThemeContext } from "../theme";

export const Hero = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <Container
        size="large"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center"
      >
        <div className="row-start-2 lg:row-start-1 lg:col-start-1 lg:col-end-3 text-left">
          {data.tagline && (
            <h2 className="w-full	mb-8 text-md font-bold tracking-wide title-font dark:text-gray-50">
              {data.tagline}
            </h2>
          )}
          {data.headline && (
            <h3
              className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal title-font`}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r  ${
                  data.color === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses[theme.color]
                }`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              className={`prose prose-lg mb-10 ${
                data.color === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <Markdown>{data.text}</Markdown>
            </div>
          )}
          {data.actions && (
            <Actions
              className="justify-start py-1"
              parentColor={data.color}
              actions={data.actions}
            />
          )}
        </div>
        {data.image && (
          <div className="row-start-1 flex lg:justify-center">
            <img
              className="w-full max-w-xs lg:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};
