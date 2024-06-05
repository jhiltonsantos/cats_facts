import { expect, it, describe } from "vitest";
import { useFactsStore } from "@/stores/facts";
import { createEvent } from "h3";
import nock from "nock";
import { IncomingMessage, ServerResponse } from "http";
import defineEventHandler from "@/server/api/meowfacts/facts";

describe("Facts Store", () => {
  it("Faz chamada na api utilizando o store com o pinia", async () => {
    // URL e endpoint
    const apiUrl = "https://meowfacts.herokuapp.com";
    const endpoint = "/?count=90";

    // Mock do response
    const mockResponse = {
      data: [],
    };

    // Configurações para o nock
    nock(apiUrl).options(endpoint).reply(
      200,
      {},
      {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      }
    );

    // Realiza chamada na api via nock
    nock(apiUrl).get(endpoint).reply(200, mockResponse);

    const req = {} as IncomingMessage;
    const res = {} as ServerResponse;
    const event = createEvent(req, res);

    nock(apiUrl).get("/?count=90").reply(200, mockResponse);

    // Chama defineEventHandler da /api/meowfacts/facts
    const response = await defineEventHandler(event);

    // Verifica os fatos
    expect(response).toEqual(mockResponse.data);
  });
});
