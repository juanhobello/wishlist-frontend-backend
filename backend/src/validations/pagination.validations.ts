export function validatePaginationParams(page: number, limit: number): boolean {
  if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
    return true;
  }

  return false;
}
