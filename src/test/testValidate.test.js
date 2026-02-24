// test de validacion de url de github y email
import { describe } from "vitest";
import { urlGithubValidateWithUsername, emailValidate} from "../utils/utils";

describe('urlGithubValidateWithUsername', () => {
    test('deberia retornar true para una url de github valida', () => {
        expect(urlGithubValidateWithUsername('https://github.com/TomasBozzano/prueba-tecnica-react')).toBe(true);
    });

    test('deberia retornar false para una url de github invalida', () => {
        expect(urlGithubValidateWithUsername('https://gitlab.com/TomasBozzano/prueba-tecnica-react')).toBe(false);
    });

    test('deberia retornar false para una url vacia', () => {
        expect(urlGithubValidateWithUsername('')).toBe(false);
    });

    test('deberia retornar false para una url nula', () => {
        expect(urlGithubValidateWithUsername(null)).toBe(false);
    });

    test('deberia retornar false por url de github sin usuario', () => {
        expect(urlGithubValidateWithUsername('https://github.com/prueba-tecnica-react')).toBe(false);
    });

    test('deberia retornar false por url de github con usuario pero sin repositorio', () => {
        expect(urlGithubValidateWithUsername('https://github.com/TomasBozzano')).toBe(false);
    })

    test('deberia retornar true por url de github con usuario y repositorio', () => {
        expect(urlGithubValidateWithUsername('https://github.com/TomasBozzano/prueba-tecnica')).toBe(true);
    });
});

describe('emailValidate', () => {
    test('deberia retornar true para un email valido', () => {
        expect(emailValidate('tomasbozzano@gmail.com')).toBe(true);
    });

    test('deberia retornar false para un email invalido', () => {
        expect(emailValidate('tomasbozzano')).toBe(false);
    });

    test('deberia retornar false para un email vacio', () => {
        expect(emailValidate('')).toBe(false);
    });

    test('deberia retornar false para un email con longitud mayor a 254 caracteres', () => {
        const longEmail = 'a'.repeat(255) + '@gmail.com';
        expect(emailValidate(longEmail)).toBe(false);
    });
});