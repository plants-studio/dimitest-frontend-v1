import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type LargeButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export type HeaderProps = {
  size: 'Large' | 'Medium' | 'Small';
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type CommentProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type ChoiceButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
};

export type ProgressBarProps = {
  value: number;
  maxValue: number;
  style?: React.CSSProperties;
};

export type TextFieldProps = {
  placeholder?: string;
  style?: React.CSSProperties;
  ref?: React.ForwardedRef<HTMLInputElement>;
};

export type TextProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export type QuestionList = {
  createdAt: Date;
  updatedAt: Date;
  sequence: string;
  sub?: string;
  question: string;
  answer: {
    text: string;
    score: {
      type:
        | 'developer'
        | 'designer'
        | 'manager'
        | 'pA'
        | 'pB'
        | 'dA'
        | 'dB'
        | 'mA'
        | 'mB'
        | 'pA1'
        | 'pA2'
        | 'pB1'
        | 'pB2'
        | 'dA1'
        | 'dA2'
        | 'dB1'
        | 'dB2'
        | 'mA1'
        | 'mA2'
        | 'mB1'
        | 'mB2'
        | 'application developer'
        | 'game developer'
        | 'frontend developer'
        | 'mobile application developer'
        | 'machine learning engineer'
        | 'iot & robotics engineer'
        | 'information security professional'
        | 'backend developer'
        | 'illustrator'
        | 'editing designer'
        | 'product designer'
        | 'animator'
        | 'ui designer'
        | 'ux designer'
        | 'video designer'
        | 'computer graphics professor'
        | 'product manager'
        | 'business development manager'
        | 'business analyst'
        | 'finance manager'
        | 'communication manager'
        | 'personnel manager'
        | 'marketer'
        | 'customer representative';
      num: number;
    }[];
  }[];
}[];

export type ResultProps = RouteComponentProps & {
  match: {
    params: {
      tendency:
        | 'application developer'
        | 'game developer'
        | 'frontend developer'
        | 'mobile application developer'
        | 'machine learning engineer'
        | 'iot & robotics engineer'
        | 'information security professional'
        | 'backend developer'
        | 'illustrator'
        | 'editing designer'
        | 'product designer'
        | 'animator'
        | 'ui designer'
        | 'ux designer'
        | 'video designer'
        | 'computer graphics professor'
        | 'product manager'
        | 'business development manager'
        | 'business analyst'
        | 'finance manager'
        | 'communication manager'
        | 'personnel manager'
        | 'marketer'
        | 'customer representative';
    };
  };
};

export type RowBoxGraphProps = {
  developer: number;
  designer: number;
  manager: number;
  style?: React.CSSProperties;
};

export type KakaoShareButtonProps = {
  name: string;
  tendency:
    | 'application developer'
    | 'game developer'
    | 'frontend developer'
    | 'mobile application developer'
    | 'machine learning engineer'
    | 'iot & robotics engineer'
    | 'information security professional'
    | 'backend developer'
    | 'illustrator'
    | 'editing designer'
    | 'product designer'
    | 'animator'
    | 'ui designer'
    | 'ux designer'
    | 'video designer'
    | 'computer graphics professor'
    | 'product manager'
    | 'business development manager'
    | 'business analyst'
    | 'finance manager'
    | 'communication manager'
    | 'personnel manager'
    | 'marketer'
    | 'customer representative';
};
