export const feedbackActions = (set: any, get: any) => ({
  /**
   * Загрузка отзывов с сервера
   * @param page - номер страницы (по умолчанию 1)
   * @param limit - количество элементов на странице (по умолчанию 10)
   */
  fetchFeedbacks: async (page = 1, limit = 10) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`/api/feedback?page=${page}&limit=${limit}`);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Неизвестная ошибка");
      }

      set({
        feedbacks: data.data,
        pagination: data.pagination,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Ошибка при загрузке отзывов";

      set({
        isLoading: false,
        error: errorMessage,
      });

      console.error("Ошибка при загрузке отзывов:", error);
    }
  },

  /**
   * Очистка ошибки
   */
  clearError: () => set({ error: null }),

  /**
   * Сброс состояния к начальному
   */
  reset: () => set(get().initialState),
});
