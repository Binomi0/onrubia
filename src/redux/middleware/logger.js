const logger = (store) => (next) => (action) => {
  if (action.type) {
    console.group(action.type);
    console.info('dispatching', action);
    return next(action);
  } else {
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();

    return result;
  }
};

export default logger;
