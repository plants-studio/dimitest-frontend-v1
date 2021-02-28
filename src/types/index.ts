import React from 'react';

export type LargeButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export type HeaderProps = {
  size: 'Large' | 'Medium' | 'Small';
  children?: React.ReactNode;
}
