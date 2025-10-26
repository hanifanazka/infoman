import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

export function GlobalStyle() {
  return (
    <style jsx global>{`
      body {
        font-family: 'Inter';
      }
    `}</style>
  )
}