import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../TodoItem";

const mockTodo = {
  userId: 1,
  title: "Wave hello! 👋",
  completed: false,
  id: 1,
};

const mockSetTodos = jest.fn();

describe("AddTodo", () => {
  describe("Render", () => {
    it("should render an article", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const article = screen.getByRole("article");

      expect(article).toBeInTheDocument(); // ASSERT
    });

    it("should render a label", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const label = screen.getByTestId("todo-item");

      expect(label).toBeInTheDocument(); // ASSERT
    });

    it("should render a checkbox", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument(); // ASSERT
    });

    it("should render a button", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument(); // ASSERT
    });
  });

  describe("Behavior", () => {
    it("should call setTodos when checkbox clicked", async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const checkbox = screen.getByRole("checkbox");
      fireEvent.click(checkbox);

      expect(mockSetTodos).toHaveBeenCalled(); // ASSERT
    });

    it("should call setTodos when button clicked", async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />); // ARRANGE

      //ACT
      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(mockSetTodos).toHaveBeenCalled(); // ASSERT
    });
  });
});
