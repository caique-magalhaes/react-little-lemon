import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Reservation from "./components/Reservation/Reservation";
import {fetchAPI, submitAPI} from "./api";
import { initializeTimes, updateTimes } from "./reducers/bookingReducer";

// 1. Mock React Router DOM
jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
  MemoryRouter: ({ children }) => <div>{children}</div>,
  useLocation: () => ({ pathname: "/" }),
  useParams: () => ({}),
}));

const mockTimes = ["17:00", "18:00", "19:00"]

jest.mock("./api", () => ({
  __esModule: true,
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
  submitAPI: jest.fn( ()=> true)
}))

// 2. Mock API module cleanly with __esModule: true

describe("Reservation Form Tests", () => {
  test("renders all main form labels, inputs, and submit button", () => {
    render(<Reservation />);

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
  });

  test("Verify HTML5 validation attributes expected", ()=>{
    render(
      <Reservation />
    )

    const dateInput = screen.getByLabelText(/choose date/i)
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    const timeInput = screen.getByLabelText(/Choose time/i)
    const occasionInput = screen.getByLabelText(/Occasion/i)

    expect(dateInput).toHaveAttribute("type", "date")
    expect(dateInput).toHaveAttribute("required")
    expect(guestsInput).toHaveAttribute("type", "number")
    expect(guestsInput).toHaveAttribute("required")
    expect(guestsInput).toHaveAttribute("min", "1")
    expect(guestsInput).toHaveAttribute("max", "10")
    expect(timeInput).toHaveAttribute("required")
    expect(occasionInput).toHaveAttribute("required")
  })

  test("display validation errors when submitting an empty form", async () => {
    render(<Reservation />);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/you must choose the date./i)).toBeInTheDocument();
      expect(screen.getByText(/You must choose the Time./i)).toBeInTheDocument();
      expect(screen.getByText(/You must choose the number of diners/i)).toBeInTheDocument();
      expect(screen.queryByText(/You must Choose the occasion./i)).toBeInTheDocument()
    });
  });
});

describe("Booking Logic & Reducer Tests", () => {
  beforeEach(()=>{
    fetchAPI.mockImplementation(() => mockTimes)
    submitAPI.mockImplementation(() => true)
  })

  afterEach(() =>{
    jest.clearAllMocks()
  })

  test("initializeTimes returns a non-empty array of available booking times", () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
    expect(fetchAPI).toHaveBeenCalled()
  });

  test("updateTimes returns updated available times for selected date", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", payload: new Date() };

    const newState = updateTimes(initialState, action);

    expect(Array.isArray(newState)).toBe(true)

    expect(newState.length).toBeGreaterThan(0)
  });

  test("Send a Form", async ()=>{
    render(
      <Reservation />
    )

    const dateInput = screen.getByLabelText(/choose date/i)
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    const timeInput = screen.getByLabelText(/Choose time/i)
    const occasionInput = screen.getByLabelText(/Occasion/i)
    const submitButton = screen.getByRole("button", /make your reservation/i)

    fireEvent.change(dateInput, {target: {value: new Date()}})
    fireEvent.change(guestsInput, {target: {value: "2" }})
    fireEvent.change(timeInput, {target: {value: "17:00"}})
    fireEvent.change(occasionInput, {target: {value: "Standard"}})
    fireEvent.click(submitButton)

    //Verify Error disappear
    await waitFor(() =>{
      expect(screen.queryByText(/You must choose the date./i)).not.toBeInTheDocument()
      expect(screen.queryByText(/You must choose the Time./i)).not.toBeInTheDocument()
      expect(screen.queryByText(/You must choose the number of diners/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/You must Choose the occasion./i)).not.toBeInTheDocument()
    })




  })
});