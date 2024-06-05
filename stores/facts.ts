import { defineStore } from "pinia";
import type { MeowFact } from "~/types/meowFact";

export const useFactsStore = defineStore("facts", {
  state: () => ({
    facts: [] as MeowFact[],
    currentFactIndex: 0,
  }),
  actions: {
    async fetchFacts() {
      try {
        const response = await $fetch<{ data: MeowFact[] }>(
          "/api/meowfacts/facts"
        );
        this.facts = response as any;
        this.currentFactIndex = 0;
      } catch (error) {
        //TODO: adicionar tela de error
        throw error;
      }
    },
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
