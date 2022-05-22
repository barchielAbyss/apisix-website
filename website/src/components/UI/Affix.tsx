import type { CSSProperties, ReactNode, FC } from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getDomStyle, styleUnit2Number } from '../../utils';

interface AffixProps {
  style: CSSProperties;
  children: ReactNode;
}

const AffixContent = styled.div``;

const getPositionStyle = (
  hasCssSticky: boolean,
  defaultStyles: CSSProperties = {},
):CSSProperties => {
  const { width = 0 } = defaultStyles;
  const positionStyle: CSSProperties = hasCssSticky ? {
    position: 'sticky',
    marginLeft: `-${styleUnit2Number(width)}px`,
    display: 'inline-block',
    float: 'left',
  } : {
    position: 'absolute',
  };

  return {
    ...positionStyle,
    ...defaultStyles,
  };
};

const Affix: FC<AffixProps> = (props) => {
  const { style, children } = props;
  const { top: propStyleTop = 0 } = style || {};
  const [hasCssSticky, SetHasCssSticky] = useState(true);
  const [positionStyle, SetPositionStyle] = useState(style);

  useEffect(() => {
    const hasSticky = CSS.supports('position', 'sticky');
    SetHasCssSticky(hasSticky);
    SetPositionStyle(getPositionStyle(hasSticky, style));
  }, []);

  const defaultHeight = styleUnit2Number(propStyleTop);
  const [height, setHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const getHeight = (element: HTMLElement) => {
    if (element) {
      const parentDom = element.parentElement ?? document.body;
      const parentPaddingBottom = parseInt(getDomStyle(parentDom, 'padding-bottom'), 10);
      setHeight(element.clientHeight);
      setParentHeight(parentDom.clientHeight + parentDom.offsetTop - parentPaddingBottom);
    }
  };

  const getScrollHeight = () => {
    setScrollHeight(() => window.scrollY);
  };

  useEffect(() => {
    if (hasCssSticky) {
      window.addEventListener('scroll', getScrollHeight);
    }
    return () => {
      window.removeEventListener('scroll', getScrollHeight);
    };
  }, []);

  const getScrollStyle = (): CSSProperties => {
    if (hasCssSticky) {
      return positionStyle;
    }

    if (parentHeight > (scrollHeight + window.innerHeight)) {
      return {
        ...positionStyle,
        top: scrollHeight + defaultHeight,
      };
    }

    return {
      ...positionStyle,
      top: parentHeight - height,
    };
  };

  return (
    <AffixContent
      ref={getHeight}
      style={getScrollStyle()}
    >
      {children}
    </AffixContent>
  );
};

export default Affix;
