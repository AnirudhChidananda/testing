import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should add a new todo", async () => {
    render(<Home />); // ARRANGE

    // ACT
    const input = screen.getByPlaceholderText("New Todo");
    fireEvent.change(input, {
      target: { value: "My new todo" },
    });
    expect(input).toHaveValue("My new todo"); // ASSERT

    // ACT
    const button = screen.getByRole("button", {
      name: "Submit",
    });
    fireEvent.click(button);
    expect(input).toHaveValue(""); // ASSERT

    const data = await screen.findByText("My new todo");
    expect(data).toHaveTextContent("My new todo");
  });

  it("should update a todo", async () => {
    render(<Home />); // ARRANGE

    // ACT
    const checkbox = screen.getAllByRole("checkbox")[0] as HTMLInputElement;
    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy(); // ASSERT
  });

  it("should delete a todo", async () => {
    render(<Home />); // ARRANGE

    const todoText = screen.queryByText("Write Code 💻");
    expect(todoText).toBeInTheDocument(); // ASSERT

    // ACT
    const button = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(button);

    expect(todoText).not.toBeInTheDocument(); // ASSERT
  });
});
