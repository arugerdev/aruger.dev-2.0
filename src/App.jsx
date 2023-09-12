import _404 from "./routes/404";
import Blog from "./routes/Blog";
import Main from "./routes/Main";
import { Switch, Route } from "wouter";

function App() {

  return (
    <main className="dark text-foreground bg-background min-w-screen min-h-screen" >
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route component={_404} />
      </Switch>
    </main>
  )
}

export default App
