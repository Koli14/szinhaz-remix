export function links() {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bellefair&family=Noto+Serif:ital@0;1&family=Open+Sans:wght@400;800&display=swap',
    },
  ]
}

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Színház Online',
    viewport: 'width=device-width,initial-scale=1',
  }
}
export const colors = {
  primary: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  },
  accent: {
    50: '#fff3dc',
    100: '#ffddb1',
    200: '#fac882',
    300: '#f7b253',
    400: '#F4A91C',
    500: '#dc820a',
    600: '#ab6505',
    700: '#7b4802',
    800: '#4b2a00',
    900: '#1d0c00',
  },
}

export const fonts = {
  heading: "'Noto Serif', serif",
  body: "'Open Sans', sans-serif",
}
