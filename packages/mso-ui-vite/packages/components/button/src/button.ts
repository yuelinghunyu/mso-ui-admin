export const buttonTypes = ["default", "primary"];
export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: "",
  },
} as const;
