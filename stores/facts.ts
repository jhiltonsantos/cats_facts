import { defineStore } from "pinia";
import type { MeowFact } from "~/types/meowFact";

export const useFactsStore = defineStore("facts", {
  state: () => ({
    facts: [] as MeowFact[],
    currentFactIndex: 0,
  }),
  actions: {
    // fetchFacts realiza uma chamada na API disponível no server e salva dentro de facts
    async fetchFacts() {
      try {
        const response = await $fetch<{ data: MeowFact[] }>(
          "/api/meowfacts/facts"
        );
        this.facts = response as any;
        this.currentFactIndex = 0;
      } catch (error) {
        throw createError({
          statusCode: 404,
          statusMessage: "Erro ao buscar fatos de gatos",
          fatal: true,
        });
      }
    },
    // getNextIndexFact altera o valor do index na lista para exibir o próximo
    // e faz uma nova chamada caso o index da lista já tenha acabado
    async getNextIndexFact() {
      if (this.facts.length > 0) {
        if (this.currentFactIndex === this.facts.length - 1) {
          await this.fetchFacts();
        } else {
          this.currentFactIndex =
            (this.currentFactIndex + 1) % this.facts.length;
        }
      }
    },
  },
});
