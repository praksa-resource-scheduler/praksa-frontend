// Mocks
jest.mock("../utils/validateReservationForm", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../utils/parseReservationData", () => (data) => ({
  StartTime: data.startTime,
  EndTime: data.endTime,
  Purpose: data.description,
  UserId: data.user,
  RoomId: data.resource,
}));
jest.mock("../utils/duration", () => () => true);
jest.mock("../utils/duration", () => ({
  __esModule: true,
  default: jest.fn(),
}));
import { test, expect, jest } from "@jest/globals";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Reservation from "../pages/Reservation";
import React from "react";
import "@testing-library/jest-dom";
import duration from "../utils/duration";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Mock axios
const mock = new MockAdapter(axios);
import validateReservationForm from "../utils/validateReservationForm";

// Dummy test
test("testing test", () => {
  expect(true).toBe(true);
});

// UI rendering test
test("renders reservation form with all inputs, selects, textarea and button", () => {
  render(<Reservation />);
  expect(screen.getByText("Nova Rezervacija")).toBeInTheDocument();
  expect(screen.getByLabelText("Profesor ili ID")).toBeInTheDocument();
  expect(screen.getByLabelText("Soba")).toBeInTheDocument();
  expect(screen.getByLabelText("Početak")).toBeInTheDocument();
  expect(screen.getByLabelText("Kraj")).toBeInTheDocument();
  expect(screen.getByLabelText("Svrha rezervacije")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Rezerviraj/i }),
  ).toBeInTheDocument();
});

// Success test
test("submits valid form and calls API", async () => {
  validateReservationForm.mockImplementation(() => ({ ok: true }));
  mock.onPost("https://localhost:7260/api/reservation-requests").reply(200, {});
  window.alert = jest.fn();

  render(<Reservation />);

  fireEvent.change(screen.getByPlaceholderText("Ime profesora"), {
    target: { value: "Profesor X" },
  });
  fireEvent.change(screen.getByDisplayValue("Odaberite sobu"), {
    target: { value: "00000000-0000-0000-0000-000000000101" },
  });
  fireEvent.change(screen.getByLabelText("Početak"), {
    target: { value: "2025-07-19T10:00" },
  });
  fireEvent.change(screen.getByLabelText("Kraj"), {
    target: { value: "2025-07-19T11:00" },
  });
  fireEvent.change(screen.getByPlaceholderText("Unesite svrhu rezervacije"), {
    target: { value: "Sastanak" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Rezerviraj/i }));

  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith(
      "Reservation created successfully",
    ),
  );
});

// Testira ponašanje kad API ne uspije (npr. server error).
test("server error", async () => {
  validateReservationForm.mockImplementation(() => ({ ok: true }));
  mock.onPost("https://localhost:7260/api/reservation-requests").reply(500);

  window.alert = jest.fn();

  render(<Reservation />);
  fireEvent.change(screen.getByPlaceholderText("Ime profesora"), {
    target: { value: "Profesor X" },
  });
  fireEvent.change(screen.getByDisplayValue("Odaberite sobu"), {
    target: { value: "00000000-0000-0000-0000-000000000101" },
  });
  fireEvent.change(screen.getByLabelText("Početak"), {
    target: { value: "2025-07-19T10:00" },
  });
  fireEvent.change(screen.getByLabelText("Kraj"), {
    target: { value: "2025-07-19T11:00" },
  });
  fireEvent.change(screen.getByPlaceholderText("Unesite svrhu rezervacije"), {
    target: { value: "Predavanje" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Rezerviraj/i }));

  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith("Failed to create reservation"),
  );
});

//Provjerava da li se prikazuje alert("Warning: reservation is more than two hours") kada je rezervacija duža od 2 sata.
test("shows warning if reservation is longer than 2 hours", async () => {
  validateReservationForm.mockImplementation(() => ({ ok: true }));
  duration.mockImplementation(() => false);
  mock.onPost("https://localhost:7260/api/reservation-requests").reply(200, {});
  window.alert = jest.fn();

  render(<Reservation />);

  fireEvent.change(screen.getByPlaceholderText("Ime profesora"), {
    target: { value: "Profesor Y" },
  });
  fireEvent.change(screen.getByDisplayValue("Odaberite sobu"), {
    target: { value: "00000000-0000-0000-0000-000000000101" },
  });
  fireEvent.change(screen.getByLabelText("Početak"), {
    target: { value: "2025-07-19T10:00" },
  });
  fireEvent.change(screen.getByLabelText("Kraj"), {
    target: { value: "2025-07-19T13:30" },
  });
  fireEvent.change(screen.getByPlaceholderText("Unesite svrhu rezervacije"), {
    target: { value: "Dug sastanak" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Rezerviraj/i }));

  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith(
      "Reservation created successfully",
    ),
  );
  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith(
      "Warning: reservation is more than two hours",
    ),
  );
});

// Provjerava da se alert("Failed to create reservation") poziva kad axios.post baci grešku.
test("shows alert if API call fails", async () => {
  validateReservationForm.mockReturnValue({ ok: true });
  duration.mockReturnValue(true);
  mock.onPost("https://localhost:7260/api/reservation-requests").reply(500);
  window.alert = jest.fn();

  render(<Reservation />);

  fireEvent.change(screen.getByPlaceholderText("Ime profesora"), {
    target: { value: "Profesor Fail" },
  });
  fireEvent.change(screen.getByDisplayValue("Odaberite sobu"), {
    target: { value: "00000000-0000-0000-0000-000000000101" },
  });
  fireEvent.change(screen.getByLabelText("Početak"), {
    target: { value: "2025-07-19T10:00" },
  });
  fireEvent.change(screen.getByLabelText("Kraj"), {
    target: { value: "2025-07-19T11:00" },
  });
  fireEvent.change(screen.getByPlaceholderText("Unesite svrhu rezervacije"), {
    target: { value: "Greška test" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Rezerviraj/i }));

  await waitFor(() =>
    expect(window.alert).toHaveBeenCalledWith("Failed to create reservation"),
  );
});
