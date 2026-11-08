# Čeština hravě

Jednoduchá aplikace pro procvičování českého jazyka pro 4. třídu. Obsahuje 7 okruhů a 32 úloh.

## Soubory

- `index.html`: vzhled, rozložení a vložené CSS
- `app.js`: ovládání aplikace a vyhodnocování
- `data.js`: zadání, nabídky odpovědí, správné odpovědi a vysvětlení
- `.nojekyll`: vypnutí zpracování Jekyllem při statickém hostování

## Úprava úloh

Úlohy upravuj v `data.js`. U výběrových úloh musí být hodnota `a` přesně jednou z možností `options`. U abecedy musí `correct` obsahovat všechna slova z `words` ve správném pořadí. Po změnách obnov stránku.

## Ukládání výsledků

Nejlepší výsledky z dokončených okruhů se ukládají pomocí localStorage pod klíčem `cestina-v1`. Neukládá se rozehraná lekce ani historie jednotlivých odpovědí. Výsledky se nesynchronizují mezi zařízeními, prohlížeči nebo různými adresami webu. Při blokovaném úložišti aplikace funguje bez trvalého ukládání.

Aplikace neobsahuje účty, analytiku, externí knihovny ani přístupové údaje. Funguje na statickém hostingu i v podadresáři repozitáře.
