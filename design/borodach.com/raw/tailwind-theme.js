/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'green': '#5cae5d',
        'canvas-white': '#ffffff',
        'near-black': '#131313',
        'dark-gray': '#161616',
        'off-white': '#f3f3f3',
        'light-gray': '#c4c4c4',
        'rich-black': '#000000',
        'gray': '#7a7a7a',
        'dark-gray-1': '#2d2a2a',
        'gray-1': '#808080',
        'gray-2': '#767676',
        'dark-gray-2': '#3e3e3e',
      },
      fontSize: {
        'text': ['18px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'text-1': ['16px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'link': ['16px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'text-2': ['13px', { lineHeight: '14.3px', letterSpacing: '-0.2px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'link-1': ['18px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'link-2': ['12px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'text-3': ['14px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '700' }],
        'text-4': ['12px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'body-1': ['18px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'text-5': ['11px', { lineHeight: 'normal', letterSpacing: 'normal', fontWeight: '400' }],
        'heading': ['15px', { lineHeight: '16.65px', letterSpacing: 'normal', fontWeight: '700' }],
      },
      spacing: {
        '1': '0px 10px',
        '2': '142px 0px 95px',
        '3': '0px 10px 6px',
        '4': '12px 20px',
        '5': '1px 2px',
        '6': '0px 0px 0px 13px',
      },
      borderRadius: {
        '1': '10px',
        '2': '4px',
        '3': '30px',
      },
    },
  },
};
