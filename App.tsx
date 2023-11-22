import { Provider } from "react-redux";
import AppStack from "./src/navigator/App";
import { store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
}
