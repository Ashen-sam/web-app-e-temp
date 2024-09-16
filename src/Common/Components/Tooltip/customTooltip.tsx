import React, { useRef, useEffect, useState } from "react";
import {
  Typography,
  Tooltip,
  styled,
  TooltipProps,
  tooltipClasses,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";

import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router-dom";

interface TextWithTooltipProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline";
  typographyStyle?: React.CSSProperties;
  title: string | undefined;
  maxWidth?: number;
  smMaxWidth?: number;
  mdMaxWidth?: number;
  lgMaxWidth?: number;
  xlMaxWidth?: number;
  xsMaxWidth?: number;
  id?: string;
  isAutoComplete?: boolean;
  autoCompleteOptions?: any;
  autoCompleteProps?: any;
  data?: any;
  handleOnClick?: () => void;
  haspointform?: boolean;
}

const TextWithTooltip: React.FC<TextWithTooltipProps> = ({
  variant,
  typographyStyle,
  title,
  maxWidth,
  smMaxWidth,
  mdMaxWidth,
  lgMaxWidth,
  xsMaxWidth,
  xlMaxWidth,
  isAutoComplete,
  autoCompleteOptions,
  autoCompleteProps,
  data,
  id,
  handleOnClick,
  haspointform,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  const theme = useTheme();
  const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      let containerWidth;
      if (maxWidth) {
        containerWidth = maxWidth;
      } else if (isXlUp && xlMaxWidth) {
        containerWidth = xlMaxWidth;
      } else if (isLgUp && lgMaxWidth) {
        containerWidth = lgMaxWidth;
      } else if (isMdUp && mdMaxWidth) {
        containerWidth = mdMaxWidth;
      } else if (isSmUp && smMaxWidth) {
        containerWidth = smMaxWidth;
      } else if (isXsUp && xsMaxWidth) {
        containerWidth = xsMaxWidth;
      } else {
        containerWidth = containerRef.current.offsetWidth;
      }

      setIsOverflown(textRef.current.scrollWidth > containerWidth);
      textRef.current.style.maxWidth = `${containerWidth}px`;
    }
  }, [
    title,
    maxWidth,
    smMaxWidth,
    mdMaxWidth,
    lgMaxWidth,
    xlMaxWidth,
    isSmUp,
    isMdUp,
    isLgUp,
    isXlUp,
  ]);

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      arrow
      PopperProps={{
        // disablePortal: isAutoComplete ? false : true,
        sx: {
          "&[data-popper-reference-hidden]": {
            visibility: "hidden",
            "pointer-events": "none",
          },
        },
        modifiers: [
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: true,
              // altBoundary: true,
              tether: false,
              rootBoundary: "document",
              padding: 8,
            },
          },
        ],
      }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#00499F",
      color: "white",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: "#00499F",
    },
  }));

  const removeDefaultStyles = (node: any) => {
    if (node.type === "tag") {
      const { name, children } = node;

      switch (name) {
        case "p":
          return React.createElement(
            "div",
            { key: node.childrenIndex },
            domToReact(children, { replace: removeDefaultStyles })
          );
        case "strong":
        case "b":
          return React.createElement(
            "span",
            { key: node.childrenIndex, style: { fontWeight: "bold" } },
            domToReact(children, { replace: removeDefaultStyles })
          );
        case "em":
        case "i":
          return React.createElement(
            "span",
            { key: node.childrenIndex, style: { fontStyle: "italic" } },
            domToReact(children, { replace: removeDefaultStyles })
          );
        case "ol":
          return React.createElement(
            "ol",
            { key: node.childrenIndex },
            domToReact(children, { replace: removeDefaultStyles })
          );
        case "div":
          const alignment = node.attribs && node.attribs.align;
          if (alignment === "left") {
            return React.createElement(
              "div",
              { key: node.childrenIndex, style: { textAlign: "left" } },
              domToReact(children, { replace: removeDefaultStyles })
            );
          } else if (alignment === "right") {
            return React.createElement(
              "div",
              { key: node.childrenIndex, style: { textAlign: "right" } },
              domToReact(children, { replace: removeDefaultStyles })
            );
          }
          break;

        default:
          break;
      }
    }

    return undefined;
  };

  const name = title ? title : "";

  const htmlToPlainText = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div
      ref={containerRef}
      onClick={(event) => {
        if (handleOnClick) {
          event.stopPropagation();
          handleOnClick();
        } // Invoke handleOnClick if defined
      }}
    >
      {isOverflown &&
        (id ? (
          <Link
            to={id}
            style={{
              textDecoration: "none",
              // color: theme.colors.alpha.black[100],
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <LightTooltip title={htmlToPlainText(name)} arrow>
              <Typography variant={variant}>
                <Box
                  ref={textRef}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    ...typographyStyle,
                    maxWidth: maxWidth ? maxWidth : "100%",
                    [theme.breakpoints.up("xs")]: {
                      maxWidth: xsMaxWidth ? xsMaxWidth : maxWidth,
                    },
                    [theme.breakpoints.up("sm")]: {
                      maxWidth: smMaxWidth ? smMaxWidth : maxWidth,
                    },
                    [theme.breakpoints.up("md")]: {
                      maxWidth: mdMaxWidth ? mdMaxWidth : maxWidth,
                    },
                    [theme.breakpoints.up("lg")]: {
                      maxWidth: lgMaxWidth ? lgMaxWidth : maxWidth,
                    },
                    [theme.breakpoints.up("xl")]: {
                      maxWidth: xlMaxWidth ? xlMaxWidth : maxWidth,
                    },
                  }}
                >
                  {parse(name, {
                    replace: removeDefaultStyles,
                  } as HTMLReactParserOptions)}
                </Box>
              </Typography>
            </LightTooltip>
          </Link>
        ) : (
          <LightTooltip title={htmlToPlainText(name)} arrow>
            <Typography variant={variant}>
              <Box
                ref={textRef}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                  ...typographyStyle,
                  maxWidth: maxWidth ? maxWidth : "100%",
                  [theme.breakpoints.up("xs")]: {
                    maxWidth: xsMaxWidth ? xsMaxWidth : maxWidth,
                  },
                  [theme.breakpoints.up("sm")]: {
                    maxWidth: smMaxWidth ? smMaxWidth : maxWidth,
                  },
                  [theme.breakpoints.up("md")]: {
                    maxWidth: mdMaxWidth ? mdMaxWidth : maxWidth,
                  },
                  [theme.breakpoints.up("lg")]: {
                    maxWidth: lgMaxWidth ? lgMaxWidth : maxWidth,
                  },
                  [theme.breakpoints.up("xl")]: {
                    maxWidth: xlMaxWidth ? xlMaxWidth : maxWidth,
                  },
                }}
              >
                {parse(name, {
                  replace: removeDefaultStyles,
                } as HTMLReactParserOptions)}
              </Box>
            </Typography>
          </LightTooltip>
        ))}
      {!isOverflown &&
        (id ? (
          <Typography
            variant={variant}
            component="span"
            ref={textRef}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
              ...typographyStyle,
            }}
          >
            <Link
              to={id}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              {parse(name, {
                replace: removeDefaultStyles,
              } as HTMLReactParserOptions)}
            </Link>
          </Typography>
        ) : (
          <Typography
            variant={variant}
            component="span"
            ref={textRef}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
              ...typographyStyle,
            }}
          >
            {parse(name, {
              replace: removeDefaultStyles,
            } as HTMLReactParserOptions)}
          </Typography>
        ))}

      {haspointform && (
        <Box>
          <Typography variant="body2" component="div">
            {/* <ul style={{ fontSize: "20px" }}>
              <li>View permissions for all screens will be allocated to the role by default</li>
              <li>Permission for creating issues is granted with edit permission of test sections and test cases</li>
            </ul> */}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default TextWithTooltip;
