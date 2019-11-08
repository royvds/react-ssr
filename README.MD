<h1>React Server Side Rendering with ExpressJs</h1>

This is intended as a small example for rendering a React Application on an ExpressJs node server.

<b>This is a monorepo using yarn workspaces.</b>

Index.js exports StaticRouter from react-router-dom. This is due the changes in react-router-dom 5.0.0 and above. Since that update there is a new React.createContext API. More about this can be found <a href="https://github.com/ReactTraining/react-router/issues/6789#issuecomment-502490351">here</a>.