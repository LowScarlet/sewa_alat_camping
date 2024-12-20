import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aplikasi Sewa Alat Camping',
    short_name: 'SEPING',
    description: 'Aplikasi Khusus Sewa Alat Camping',
    start_url: '/home/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/logo222.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}