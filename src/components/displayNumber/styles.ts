import styled, { css } from 'styled-components';

type BarProps = {
  color: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 16px;

  min-width: 64px;
  max-width: 64px;

  justify-content: center;
  align-items: center;
`;

export const TopBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      position: relative;
      width: 72px;
      height: 16px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(4% 0, 96% 0, 100% 20%, 84% 100%, 16% 100%, 0 20%);
    }
  `}
`;

export const BottomBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      position: relative;
      width: 72px;
      height: 16px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(16% 0, 84% 0, 100% 80%, 96% 100%, 4% 100%, 0 80%);
    }
  `}
`;

export const MiddleBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      position: relative;
      width: 68px;
      margin: 4px 0;
      height: 16px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color}};
      clip-path: polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
    }
  `}
`;

export const VerticalContainer = styled.div`
  display: flex;
  min-width: 64px;
  max-width: 64px;
  margin: -12px 0;
  justify-content: space-between;
`;

export const LeftTopBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      width: 15px;
      height: 64px;
      margin-left: -8px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(20% 0, 100% 21%, 100% 85%, 25% 100%, 0 95%, 0 5%);
    }
  `}
`;

export const LeftBottomBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      width: 15px;
      height: 64px;
      margin-left: -8px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(25% 0, 100% 15%, 100% 79%, 20% 100%, 0 95%, 0 5%);
    }
  `}
`;

export const RightTopBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      width: 15px;
      height: 64px;
      margin-right: -8px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(80% 0, 100% 5%, 100% 95%, 75% 100%, 0 85%, 0 21%);
    }
  `}
`;

export const RightBottomBar = styled.div<BarProps>`
  ${css`
    &::before {
      display: flex;
      content: ' ';
      width: 15px;
      height: 64px;
      margin-right: -8px;
      overflow: hidden;
      background: ${(props: BarProps) => props.color};
      clip-path: polygon(75% 0, 100% 5%, 100% 95%, 75% 100%, 0 79%, 0 15%);
    }
  `}
`;
