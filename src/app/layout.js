import './globals.css';

export const metadata = {
  title: 'Junko | Data Analyst Portfolio',
  description: '15年の臨床経験 × データサイエンスで、医療と社会の課題を解く',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
