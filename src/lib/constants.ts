export const WA_NUMBER = "9648116960";
export const WA_FORMATTED = "+91 9648116960";
export const WA_DEFAULT_TEXT = "Hi, I'd like a pest-control quote for my property.";

export const getWhatsAppLink = (text: string = WA_DEFAULT_TEXT): string => {
  return `https://wa.me/91${WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const TEL_LINK = `tel:+91${WA_NUMBER}`;

export const COMPANY_NAME = "Pestr";
export const SITE_URL = "https://pestr.lovable.app";
