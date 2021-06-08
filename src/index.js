import React, { Suspense ,lazy} from "react"
import { Provider } from "react-redux"
import { Layout } from "./utility/context/Layout"
import { store } from "./redux/storeConfig/store"
import ReactDOM from "react-dom"
import { IntlProviderWrapper } from "./utility/context/Internationalization"

const LazyApp = lazy(() => import("./App"))

// configureDatabase()

ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<div />}>
        <Layout>
          <IntlProviderWrapper>
            <LazyApp />
          </IntlProviderWrapper>
        </Layout>
      </Suspense>
    </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
