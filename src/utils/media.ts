export const resizeImage = (url: string, width?: number, height?: number) => {
  if (!url) return '';
  const parts = url.split('.');
  const ext = parts.pop();
  const base = parts.join('.');
  
  if (width && height) {
    return `${base}-${width}x${height}.${ext}`;
  } else if (width) {
    return `${base}-w${width}.${ext}`;
  } else if (height) {
    return `${base}-h${height}.${ext}`;
  }
  
  return url;
};

export const getImageSizes = (screenWidths: number[]) => {
  return screenWidths.map(width => `(max-width: ${width}px) ${width}px`).join(', ');
};

export const generateBlurDataUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return '';
  }
};
