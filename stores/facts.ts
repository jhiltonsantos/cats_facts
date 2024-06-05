import { defineStore } from "pinia";
import type { MeowFact } from "~/types/meowFact";

export const useFactsStore = defineStore("facts", {
  state: () => ({
    facts: [] as MeowFact[],
    currentFactIndex: 0,
  }),
  actions: {
    // fetchFacts makes a call to the API available on the server and saves it inside facts
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
          statusMessage: "Error fetching cat facts",
          fatal: true,
        });
      }
    },
    // getNextIndexFact changes the index value in the list to display the next one
    // and makes a new call if the list's index has already reached its end.
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
