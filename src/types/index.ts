import React from 'react';

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
      type: // #region base
      | 'developer'
        | 'designer'
        | 'manager'
        // #endregion

        // #region developer
        | 'p1'
        | 'p2'
        | 'p3'
        | 'p4'
        // #endregion

        // #region designer
        | 'd1'
        | 'd2'
        | 'd3'
        | 'd4'
        // #endregion

        // #region manager
        | 'm1'
        | 'm2'
        | 'm3'
        | 'm4'
        // #endregion

        // #region p1
        | 'application developer'
        | 'game developer'
        // #endregion

        // #region p2
        | 'frontend developer'
        | 'mobile application developer'
        // #endregion

        // #region p3
        | 'machine learning engineer'
        | 'iot & robotics engineer'
        // #endregion

        // #region p4
        | 'information security professional'
        | 'backend developer'
        // #endregion

        // #region d1
        | 'illustrator'
        | 'editing designer'
        // #endregion

        // #region d2
        | 'product designer'
        | 'animator'
        // #endregion

        // #region d3
        | 'ui designer'
        | 'ux designer'
        // #endregion

        // #region d4
        | 'video designer'
        | 'computer graphics professor'
        // #endregion

        // #region m1
        | 'product manager'
        | 'business development manager'
        // #endregion

        // #region m2
        | 'business analyst'
        | 'finance manager'
        // #endregion

        // #region m3
        | 'communication manager'
        | 'personnel manager'
        // #endregion

        // #region m4
        | 'marketer'
        | 'customer representative';
      // #endregion
    }[];
  }[];
}[];
