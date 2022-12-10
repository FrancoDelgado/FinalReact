/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Botton from "../Components/Card"

let contenedor = null;

beforeEach(() => {

    contenedor = document.createElement("div");
    document.body.appendChild(contenedor)

})

afterEach (() => {

    unmountComponentAtNode(contenedor);
    contenedor.remove();
    contenedor = null;
})

it ("cambia el valor al hacerle click", () => {

    const onChange = jest.fn();

    act(() => {

        render(<Botton onChange={onChange} />, contenedor);
    });



    const button = document.querySelector("[data-testid=toggle]");
    
    expect(button.innerHTML).toBe("CLARO");

    

    act(() => {

        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("CLARO");

    act(() => {
        for (let i = 0; i < 5; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
  expect(button.innerHTML).toBe("CLARO");

})