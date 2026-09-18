// Everything the studio may need to edit lives here.
// Replace the TODO values before going live.

export const site = {
  name: 'Shashtik Design House',
  tagline: ['Learn', 'Create', 'Stitch your dreams'],

  // WhatsApp number in international format, digits only (e.g. 919876543210)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER, // TODO
  // Shown in the footer and used for the Call button. Leave empty to hide.
  phone: import.meta.env.VITE_WHATSAPP_NUMBER, // TODO e.g. '+91 98765 43210'
  email: 'kannan143199@gmail.com', // TODO optional

  address: ['Add your studio address', 'City, PIN'], // TODO
  mapUrl: '', // TODO optional Google Maps link

  instagram: {
    handle: 'shashtik_design_house',
    url: 'https://www.instagram.com/shashtik_design_house/',
    // Where the latest videos are fetched from (see /api/instagram.js)
    feedEndpoint: '/api/instagram',
    count: 6,
  },
}
