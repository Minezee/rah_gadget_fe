import "../styles/globals.css";
import "../styles/font.css";
import type { AppProps } from "next/app";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../store/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
