import { defineEventHandler } from "h3";
import { MeowFact } from "~/types/meowFact";
import { MeowFactResponse } from "~/types/meowFactResponse";

export default defineEventHandler(async () => {
  const { apiMeowFacts } = useRuntimeConfig();
  const uri = `${apiMeowFacts}/?count=90`; // Limite do param count: 90 fatos

  try {
    const response: MeowFactResponse = await $fetch(uri);
    const data: MeowFact[] = response.data.map((fact) => ({ fact }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar fatos de gatos:", error);
    throw createError({ statusCode: 404, statusMessage: 'Erro ao buscar fatos de gatos', fatal: true })
  }
});
