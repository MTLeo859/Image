// _app.tsx
import Layout from "./layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
