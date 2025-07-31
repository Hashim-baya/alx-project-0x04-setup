import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = Component?.getLayout || ((page: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => <Layout>{page}</Layout>);
  
  return (
  <Provider store={store}>
      {getLayout(<Component {...pageProps} /> )}
  </Provider>
    
)
}
