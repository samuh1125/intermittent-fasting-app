import { TouchableOpacity } from "react-native";
import { ElementStyler } from "";
import styled from "styled-components/native";
import { ActionButtonDirection } from "./ActionButton.types";

export const ActionButtonRoot = styled(TouchableOpacity)<ActionButtonDirection>(({ theme, direction }) => ({
    flexDirection: direction === "row" ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    gap: direction === "row" ? theme.spacing[2] : theme.spacing[0],
}));

export const ActionButtonIcon = styled(ElementStyler)(({ theme }) => ({
    color: theme.palette.actionButton.color,
}));