// import App from 'next/app'
import "../styles/global.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialised bg-gray-100 text-gray-700 h-screen px-2">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
