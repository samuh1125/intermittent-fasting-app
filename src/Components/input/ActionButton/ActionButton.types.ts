import { SvgIconProps } from '@mui/material';
import { JSXElementConstructor } from "react";

export type ActionButtonProps = {
    label: string;
    Icon?: JSXElementConstructor<SvgIconProps>;
    onPress: () => void;
    direction?: "row" | "column";
};

export type ActionButtonDirection = Pick<ActionButtonProps, "direction">;