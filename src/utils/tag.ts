import { create } from "random-seed";
import { TagColor, tagColors } from "../types/tag";

const colorToBackgroundClassMap = {
  [TagColor.GRAY]: "bg-gray-100",
  [TagColor.RED]: "bg-red-100",
  [TagColor.ORANGE]: "bg-orange-100",
  [TagColor.AMBER]: "bg-amber-100",
  [TagColor.YELLOW]: "bg-yellow-100",
  [TagColor.LIME]: "bg-lime-100",
  [TagColor.GREEN]: "bg-green-100",
  [TagColor.EMERALD]: "bg-emerald-100",
  [TagColor.TEAL]: "bg-teal-100",
  [TagColor.CYAN]: "bg-cyan-100",
  [TagColor.SKY]: "bg-sky-100",
  [TagColor.BLUE]: "bg-blue-100",
  [TagColor.INDIGO]: "bg-indigo-100",
  [TagColor.VIOLET]: "bg-violet-100",
  [TagColor.PURPLE]: "bg-purple-100",
  [TagColor.FUCHSIA]: "bg-fuchsia-100",
  [TagColor.PINK]: "bg-pink-100",
  [TagColor.ROSE]: "bg-rose-100",
} as const satisfies {
  [color in TagColor]: string;
};

const colorToHoverClassMap = {
  [TagColor.GRAY]: "hover:bg-gray-200",
  [TagColor.RED]: "hover:bg-red-200",
  [TagColor.ORANGE]: "hover:bg-orange-200",
  [TagColor.AMBER]: "hover:bg-amber-200",
  [TagColor.YELLOW]: "hover:bg-yellow-200",
  [TagColor.LIME]: "hover:bg-lime-200",
  [TagColor.GREEN]: "hover:bg-green-200",
  [TagColor.EMERALD]: "hover:bg-emerald-200",
  [TagColor.TEAL]: "hover:bg-teal-200",
  [TagColor.CYAN]: "hover:bg-cyan-200",
  [TagColor.SKY]: "hover:bg-sky-200",
  [TagColor.BLUE]: "hover:bg-blue-200",
  [TagColor.INDIGO]: "hover:bg-indigo-200",
  [TagColor.VIOLET]: "hover:bg-violet-200",
  [TagColor.PURPLE]: "hover:bg-purple-200",
  [TagColor.FUCHSIA]: "hover:bg-fuchsia-200",
  [TagColor.PINK]: "hover:bg-pink-200",
  [TagColor.ROSE]: "hover:bg-rose-200",
} as const satisfies {
  [color in TagColor]: string;
};

const colorToBorderClassMap = {
  [TagColor.GRAY]: "border-gray-300",
  [TagColor.RED]: "border-red-300",
  [TagColor.ORANGE]: "border-orange-300",
  [TagColor.AMBER]: "border-amber-300",
  [TagColor.YELLOW]: "border-yellow-300",
  [TagColor.LIME]: "border-lime-300",
  [TagColor.GREEN]: "border-green-300",
  [TagColor.EMERALD]: "border-emerald-300",
  [TagColor.TEAL]: "border-teal-300",
  [TagColor.CYAN]: "border-cyan-300",
  [TagColor.SKY]: "border-sky-300",
  [TagColor.BLUE]: "border-blue-300",
  [TagColor.INDIGO]: "border-indigo-300",
  [TagColor.VIOLET]: "border-violet-300",
  [TagColor.PURPLE]: "border-purple-300",
  [TagColor.FUCHSIA]: "border-fuchsia-300",
  [TagColor.PINK]: "border-pink-300",
  [TagColor.ROSE]: "border-rose-300",
} as const satisfies {
  [color in TagColor]: string;
};

export function generateColorClasses(
  color: TagColor,
  withHoverStyles = false,
  withBorderStyles = false
): string {
  const classes: string[] = [colorToBackgroundClassMap[color]];
  if (withHoverStyles) {
    classes.push(colorToHoverClassMap[color]);
  }
  if (withBorderStyles) {
    classes.push(colorToBorderClassMap[color]);
  }
  return classes.join(" ");
}

export function colorFromTag(tag: string): TagColor {
  const index: number = create(tag).intBetween(0, tagColors.length - 1);
  return tagColors[index];
}
