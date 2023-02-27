import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/AppContainer";
import { PATHS } from "./components/constants/paths";
import PaginaCategorias from "./components/PaginaCategorias";
import PaginaJuegos from "./components/PaginaJuegos";

function App() {
    return (
        <Suspense fallback={"Cargando..."}>
            <BrowserRouter>
                <AppContainer>
                    <Switch>
                        <Route
                            path={PATHS.home}
                            exact
                            component={PaginaJuegos}
                        />
                        <Route
                            path={PATHS.juegos}
                            exact
                            component={PaginaJuegos}
                        />
                        <Route
                            path={PATHS.categorias}
                            exact
                            component={PaginaCategorias}
                        />
                    </Switch>
                </AppContainer>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
