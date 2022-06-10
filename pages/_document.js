import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/plugin.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;40 0;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <link href="/css/darkmode.css" rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/plugin.min.js"></script>
        <script src="/js/preloader.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </Html>
  )
}