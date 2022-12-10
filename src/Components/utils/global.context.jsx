import { createContext, useReducer } from "react";
import { createTheme, ThemeProvider } from "@mui/system";
import { green, blue } from "@mui/material/colors";

export const initialState = {theme: "CLARO",  data: [], favoritos : [],flag : true}

export const ContextoGlobal = createContext(undefined);

const funcionDeReducion = (state, action) => {

  switch (action.type) {

    case "data":

        return {...state, data: action.payload}

    case "favoritos":

      return {...state, favoritos: action.payload}

    case "theme":

      return {...state, theme: action.payload}

    case "flag":

      return {...state, flag: action.payload}

      default: return state
  }
}

export const ContextProvider = ({ children }) => {

    const [state, dispach] = useReducer(funcionDeReducion,initialState);

    const tema = createTheme ({

      colorPrimario : {
        main : state.theme === "CLARO" ? green[700] : blue[900],
      },
      
      colorSecundario : {
        main : green[500]
      },

    })

    const stateYDispatch = {
      state, dispach
    }
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  return (
    <ContextoGlobal.Provider value={{stateYDispatch}}>
      <ThemeProvider theme = {tema}>
          <div className={state.theme}>
            {children}
          </div>
      </ThemeProvider>
    </ContextoGlobal.Provider>
  );
};
