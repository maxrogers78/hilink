export const formatStringToHref = (value: string): string => {
  return value.toLowerCase().replace(/\s/g, '-');
};
