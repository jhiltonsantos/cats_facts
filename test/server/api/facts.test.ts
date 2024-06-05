import { describe, it, expect } from "vitest";
import { createEvent } from "h3";
import nock from "nock";
import apiHandler from "@/server/api/meowfacts/facts";
import { IncomingMessage, ServerResponse } from "http";

describe("API Handler", () => {
  it("Make a call to the meowfacts API via server", async () => {
    // URL and endpoint
    const apiUrl = "https://meowfacts.herokuapp.com";
    const endpoint = "/?count=90";

    // Mock response
    const mockResponse = {
      data: ["Fact 1", "Fact 2"],
    };

    // Nock settings
    nock(apiUrl).options(endpoint).reply(
      200,
      {},
      {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      }
    );

    // Make API call via nock
    nock(apiUrl).get(endpoint).reply(200, mockResponse);

    const req = {} as IncomingMessage;
    const res = {} as ServerResponse;
    const event = createEvent(req, res);

    // Call API
    const response = await apiHandler(event);

    expect(response).toEqual(mockResponse.data.map((fact) => ({ fact })));
  });
});
