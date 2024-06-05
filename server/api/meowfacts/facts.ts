import { defineEventHandler } from "h3";
import { MeowFact } from "~/types/meowFact";
import { MeowFactResponse } from "~/types/meowFactResponse";

export default defineEventHandler(async () => {
  const { apiMeowFacts } = useRuntimeConfig();
  const uri = `${apiMeowFacts}/?count=90`; // Limit of the count parameter: 90 facts

  try {
    const response: MeowFactResponse = await $fetch(uri);
    const data: MeowFact[] = response.data.map((fact) => ({ fact }));
    return data;
  } catch (error) {
    console.error("Error fetching cat facts:", error);
    throw createError({ statusCode: 404, statusMessage: 'Error fetching cat facts', fatal: true })
  }
});
