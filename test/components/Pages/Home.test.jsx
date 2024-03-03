import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { AppContext } from '../../../src/context/index';
import HomePage from '../../../src/components/Pages/Home/Home';

const initialState = {
    info: {
        numDocumento: "",
        tipoDocumento: "dni",
        celular: ""
    },
    user: {
        name: "",
        lastName: "",
        birthDay: "",
        age: 0
    },
    plan: {
        titulo: "",
        precio: ""
    },
    paso: 1
}

describe("Test in HomePage", () => {

    it.skip("Should render", () => {

        const { container } = render(
            <AppContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={ ['/']}>
                    <HomePage />;
                </MemoryRouter>
            </AppContext.Provider>
        );
        
    });
});