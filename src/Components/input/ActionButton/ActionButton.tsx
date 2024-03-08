import { Typography } from '@mui/material';
import { ActionButtonIcon, ActionButtonRoot } from "./ActionButtom";
import { ActionButtonProps } from "./ActionButton.types";

export default function FastingBottomHomeScreen({ label, Icon, onPress, direction = "column" }: ActionButtonProps) {
    return (
        <ActionButtonRoot key={`${label}-action-button`} onPress={onPress} direction={direction}>
            {Icon && (
                <ActionButtonIcon>
                    <Icon />
                </ActionButtonIcon>
            )}

            <Typography variant="body3Medium" color="actionButton.color">
                {label}
            </Typography>
        </ActionButtonRoot>
    );
}