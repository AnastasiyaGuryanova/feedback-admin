/**
 * Интерфейс для отзыва
 */
export interface Feedback {
  id: string;
  projectId: string;
  rating: number | null;
  message: string;
  url: string;
  userAgent: string;
  createdAt: string;
}

/**
 * Интерфейс для пагинации
 */
export interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

/**
 * Интерфейс состояния стора отзывов
 */
export interface FeedbackState {
  // Данные
  feedbacks: Feedback[];
  pagination: Pagination | null;

  // Состояние загрузки
  isLoading: boolean;
  error: string | null;

  // Действия (actions)
  fetchFeedbacks: (page?: number, limit?: number) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}
