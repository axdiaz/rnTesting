import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import NewMessageForm from "../NewMessageForm";

describe("NewMessageForm", () => {
  describe("clicking send", () => {
    it("clears the message field", () => {
      const { getByTestId } = render(<NewMessageForm />);

      fireEvent.changeText(getByTestId("messageText"), "Hello world");
      fireEvent.press(getByTestId("sendButton"));

      expect(getByTestId("messageText").props.value).toEqual("");
    });
    it("calls the send handler", () => {
      const messageText = "Hello world";
      const sendHandler = jest.fn();
      const { getByTestId } = render(<NewMessageForm onSend={sendHandler} />);

      fireEvent.changeText(getByTestId("messageText"), messageText);
      fireEvent.press(getByTestId("sendButton"));

      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
