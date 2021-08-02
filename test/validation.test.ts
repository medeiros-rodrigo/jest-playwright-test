import { chromium } from "playwright";
import * as data from "../utils/environment"

describe('Teste', () =>{
    test('Acessar Bem Promotora > Cartão Consignado e então validar Perguntas/Respostas', async () =>{
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(data.default.URL);
        await page.click("text=CARTÃO CONSIGNADO");
        const content = await page.textContent('.title');
        expect(content).toBe('Cartão Consignado');

        for (var i = 0; i < data.default.question.length; i++) {
            await page.click(data.default.question[i]);
            const answerTxt  = await page.textContent('.active > .answer');
            expect(answerTxt).toBe(data.default.answer[i]);
        }
        await browser.close();
    })
})



