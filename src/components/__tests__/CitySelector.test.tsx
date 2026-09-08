import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { describe, expect, test, vi } from "vitest";
import { CitySelector } from "../CitySelector";
import { cities } from "@/data/cities";

describe("CitySelector", () => {
  test("renders current city and allows selecting by click", async () => {
    const onSelect = vi.fn();
    render(<CitySelector currentCitySlug="varanasi" onSelectCity={onSelect} />);

    // input shows current city
    const input = screen.getByRole("combobox");
    expect(input).toHaveValue("Varanasi");

    // type to filter
    await userEvent.clear(input);
    await userEvent.type(input, "lu");

    // Lucknow should appear
    const lucknow = await screen.findByText("Lucknow");
    expect(lucknow).toBeInTheDocument();

    // click it
    await userEvent.click(lucknow);
    expect(onSelect).toHaveBeenCalledWith("lucknow");
  });

  test("keyboard navigation selects highlighted option", async () => {
    const onSelect = vi.fn();
    render(<CitySelector currentCitySlug="varanasi" onSelectCity={onSelect} />);

    const input = screen.getByRole("combobox");
    await userEvent.clear(input);
    await userEvent.type(input, "d"); // matches Delhi

    // Press ArrowDown and Enter to select first
    await userEvent.keyboard("{ArrowDown}{Enter}");

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalled();
    });
  });
});
