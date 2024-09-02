import {Provider} from 'react-redux';
import Router from './src/navigation/stack';
import {persistor, store} from './src/utils/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
