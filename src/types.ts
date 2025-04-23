export type Images = {
  alt_description: string;
  id: string;
  urls: {
    regular: string;
    small: string;
  };
};

export type OpenModal = (urlImage: string) => void;
