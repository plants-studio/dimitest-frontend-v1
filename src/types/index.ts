import React from 'react';

export type Result = {};

export type LargeButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export type HeaderProps = {
  size: 'Large' | 'Medium' | 'Small';
  children?: React.ReactNode;
};

export type CommentProps = {
  children?: React.ReactNode;
};

export type ChoiceButtonProps = {
  children?: React.ReactNode;
  onClick?: () => Result;
};

export type BarProps = {
  value: number;
  maxValue: number;
};
