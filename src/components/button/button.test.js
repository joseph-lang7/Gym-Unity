import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
test("displays correct dynamic text based on props", () => {
  render(
    <Button
      content="Click Me"
      bgColor="bg-blue-500"
      textColor="text-white"
      width="w-32"
    />
  );

  // Ensure the button with "Click Me" text is present
  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();
});
