import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import TestRenderer from "react-test-renderer";
import { ButtonArrow } from "./button";

describe("Button arrow", () => {
  test("testing box", async () => {
    render(<ButtonArrow>Lihat Semua Laptop</ButtonArrow>);

    const buttonTest = screen.getByRole("button", {
      name: /Lihat Semua Laptop/i,
    });
    expect(buttonTest).toBeInTheDocument();

    const buttonArrowTest = screen.getByTestId("button-arrow");
    expect(buttonArrowTest).not.toBeVisible()

    // Cari cara untuk test show component when hover button
  });

  test("Matching snapshots", () => {
    const tree = TestRenderer.create(
      <ButtonArrow>Lihat Semua Laptop</ButtonArrow>
    );

    expect(tree).toMatchSnapshot()
  });
});
