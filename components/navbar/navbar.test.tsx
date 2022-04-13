import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestRenderer from "react-test-renderer";
import Navbar from "./navbar";
import { NavbarItem } from "./navbar.elements";

afterEach(() => {
  cleanup();
});

describe("Navbar", () => {
  it("Checking Navbar item in Navbar", () => {
    render(
      <Navbar>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Rekomendasi</NavbarItem>
        <NavbarItem>Review</NavbarItem>
        <NavbarItem>Katalog</NavbarItem>
        <NavbarItem>Tentang Kami</NavbarItem>
      </Navbar>
    );
    const navbarItem1 = screen.getByRole("heading", {
      name: /Home/i,
    });
    const navbarItem2 = screen.getByRole("heading", {
      name: /Rekomendasi/i,
    });
    const navbarItem3 = screen.getByRole("heading", {
      name: /Review/i,
    });
    const navbarItem4 = screen.getByRole("heading", {
      name: /Katalog/i,
    });
    const navbarItem5 = screen.getByRole("heading", {
      name: /Tentang/i,
    });

    expect(navbarItem1).toBeInTheDocument();
    expect(navbarItem2).toBeInTheDocument();
    expect(navbarItem3).toBeInTheDocument();
    expect(navbarItem4).toBeInTheDocument();
    expect(navbarItem5).toBeInTheDocument();
  });

  it("Matching snapshots", () => {
    const tree = TestRenderer.create(
      <Navbar>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Rekomendasi</NavbarItem>
        <NavbarItem>Review</NavbarItem>
        <NavbarItem>Katalog</NavbarItem>
        <NavbarItem>Tentang Kami</NavbarItem>
      </Navbar>
    );

    expect(tree).toMatchSnapshot()
  });
});
