
import { fireEvent ,render, screen } from "@testing-library/react";
// import Bookingform from "./Components/Bookingform";
// // import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test('Submission is disabled if guest is lower than 1 and there is no occastion', () => {
    const handleSubmit= jest.fn();
    // onSubmit={handleSubmit}
    render(<Bookingform onSubmit={handleSubmit}/>);

    const rangeInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(rangeInput,{ target: { value: "4" }});

    const rangeInput1 = screen.getByLabelText(/Occasion/);
    fireEvent.change(rangeInput1,{ target: { value: "Birthday" }});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  });
});
// import { render, screen } from "@testing-library/react";
import Bookingform from "./Components/Bookingform";

test('Renders the BookingForm heading', () => {
    render(<Bookingform />);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();
})
test('The user Input is Validated', () => {
  render(<Bookingform />);
     const userinput = screen.getByText('Number of guests')
    expect(userinput).toBeVisible();
})
