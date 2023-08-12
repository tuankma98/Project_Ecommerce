import * as React from 'react';
import useChartStyles from '~/chart';

let rotateAngle = 0;

const SIZE = 34;
const PREFIX = 'donut';

const halfSize = SIZE / 2;
const circleProps = {
  cx: halfSize,
  cy: halfSize,
  r: halfSize - 1,
};

const getClassName = (p, c) => `${p}${c}`;
const renderProgress = (progress) => <strong>{progress}</strong>;

const Donut = ({
  progress = 0,
  onRender = renderProgress,
  prefix = PREFIX,
  number,
  title,
}) => {
  const classes = {
    ...useChartStyles(),
  };

  return (
    <div
      className={
        classes[getClassName(prefix, progress < 0 ? 'isNegative' : '')]
      }
    >
      <svg
        className={classes[getClassName(prefix, 'Canvas')]}
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes[getClassName(prefix, 'Frame')]}
          {...circleProps}
        />

        <circle
          className={classes[getClassName(prefix, 'Circle')]}
          strokeDasharray={`${Math.abs(progress)} 100`}
          {...circleProps}
        />

        <linearGradient id="gradient-2">
          <stop offset="0" stopColor="#954ce9" />
          <stop offset="0.3" stopColor="#954ce9" />
          <stop offset="0.6" stopColor="#24c1ed" />
          <stop offset="1" stopColor="#24c1ed" />
        </linearGradient>
      </svg>

      {typeof onRender === 'function' && (
        <div className={classes[getClassName(prefix, 'Content')]}>
          <div className={classes[getClassName(prefix, 'Text')]}>
            {onRender(number)}
          </div>
          <div className={classes[getClassName(prefix, 'Name')]}>{title}</div>
        </div>
      )}
    </div>
  );
};

type DonutsProps = {
  number: number;
  title: string;
};

export const Donuts = ({ number, title }: DonutsProps) => {
  return (
    <Donut
      progress={100}
      onRender={renderProgress}
      number={number}
      title={title}
    />
  );
};
