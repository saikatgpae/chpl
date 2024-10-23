import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// import { store, persistor } from './redux/store'

export default function ReduxProvider(prop) {
  const { children } = prop;
  return (
    <Provider store={store}>
      <PersistGate loading={<p className="text-center">loading...</p>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
