import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CitySelector } from "./CitySelector";

const meta: Meta<typeof CitySelector> = {
  title: "Components/CitySelector",
  component: CitySelector,
};

export default meta;

type Story = StoryObj<typeof CitySelector>;

export const Default: Story = {
  args: {
    currentCitySlug: "varanasi",
    onSelectCity: (slug: string) => console.log("selected", slug),
  },
};
