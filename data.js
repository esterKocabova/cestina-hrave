const categoriesData = [
      {
        id: 'iy_vybrana',
        title: 'Vybraná slova a koncovky (i/y)',
        icon: 'fa-spell-check',
        color: 'bg-blue-500',
        type: 'choice',
        items: [
          { q: 'přátelstv_ (podle vzoru stavení)', options: ['í', 'ý', 'i', 'y'], a: 'í', expl: 'Slovo přátelství je podstatné jméno rodu středního, vzor stavení -> píšeme dlouhé Í.' },
          { q: 's_ček (noční pták)', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Sýček je vybrané slovo po S.' },
          { q: 'v_r (noční dravý pták)', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Výr (pták) je vybrané slovo po V. Vodní vír má měkké i!' },
          { q: 'vodní v_r (točící se voda)', options: ['í', 'ý', 'i', 'y'], a: 'í', expl: 'Vodní vír není vybrané slovo, označuje točivý pohyb.' },
          { q: 'b_linožravé zvíře', options: ['y', 'i', 'ý', 'í'], a: 'y', expl: 'Slovo býložravý je příbuzné k vybranému slovu bylina.' },
          { q: 'lesní m_tina', options: ['y', 'i', 'ý', 'í'], a: 'y', expl: 'Mýtina je příbuzná k vybranému slovu mýtit.' },
          { q: 'p_cha předchází pád', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Pýcha je vybrané slovo po P.' }
        ]
      },
      {
        id: 'abeceda',
        title: 'Řazení dle abecedy',
        icon: 'fa-arrow-down-a-z',
        color: 'bg-emerald-500',
        type: 'sort',
        items: [
          { words: ['Bambus', 'Ananas', 'Citrón', 'Borůvka'], correct: ['Ananas', 'Bambus', 'Borůvka', 'Citrón'] },
          { words: ['Jablko', 'Jahoda', 'Jeřabina', 'Javor'], correct: ['Jablko', 'Jahoda', 'Javor', 'Jeřabina'] },
          { words: ['Škola', 'Sešit', 'Slabikář', 'Tabule'], correct: ['Sešit', 'Slabikář', 'Škola', 'Tabule'] }
        ]
      },
      {
        id: 'nadrazena',
        title: 'Slova nadřazená a podřazená',
        icon: 'fa-sitemap',
        color: 'bg-amber-500',
        type: 'choice',
        items: [
          { q: 'Co je nadřazené slovům: Pes, Kočka, Králík?', options: ['Zvířata', 'Vozidla', 'Ovoce', 'Rostliny'], a: 'Zvířata', expl: 'Pes, kočka i králík patří do skupiny zvířat.' },
          { q: 'Vyber podřazené slovo ke slovu: NÁBYTEK', options: ['Židle', 'Jablko', 'Košile', 'Autobus'], a: 'Židle', expl: 'Židle je konkrétní druh nábytku.' },
          { q: 'Vyber slovo nadřazené pro: Jablko, Hruška, Švestka', options: ['Ovoce', 'Zelenina', 'Pečivo', 'Hračky'], a: 'Ovoce', expl: 'Jablko, hruška i švestka jsou druhy ovoce.' }
        ]
      },
      {
        id: 'pribuzna',
        title: 'Slova příbuzná',
        icon: 'fa-people-roof',
        color: 'bg-purple-500',
        type: 'choice',
        items: [
          { q: 'Které slovo je příbuzné ke slovu "LES"?', options: ['Lesník', 'Lesklý', 'Létat', 'List'], a: 'Lesník', expl: 'Lesník má stejný kořen (les-) a souvisí s lesem.' },
          { q: 'Které slovo NENÍ příbuzné ke slovu "VODA"?', options: ['Vodovod', 'Vodička', 'Vodič (např. drát)', 'Povodně'], a: 'Vodič (např. drát)', expl: 'Vodič v elektřině pochází od slovesa vést, ne od vody.' },
          { q: 'Najdi příbuzné slovo ke slovu "DŮM":', options: ['Domek', 'Domino', 'Domažlice', 'Domiňo'], a: 'Domek', expl: 'Domek má stejný slovní kořen dom-.' }
        ]
      },
      {
        id: 'stavba',
        title: 'Stavba slov (kořen, předpona)',
        icon: 'fa-cubes',
        color: 'bg-rose-500',
        type: 'choice',
        items: [
          { q: 'Urči KOŘEN ve slově "PODHORSKÝ":', options: ['hor', 'pod', 'ský', 'podhor'], a: 'hor', expl: 'Kořen je společný pro příbuzná slova (hora, horský, pohoří -> hor).' },
          { q: 'Urči PŘEDPONU ve slově "VÝLET":', options: ['vý-', 'let-', 'výl-', '-et'], a: 'vý-', expl: 'Předpona stojí před kořenem (vý-).' },
          { q: 'Jaký je kořen slova "PRALES"?', options: ['les', 'pra', 'prales', 'es'], a: 'les', expl: 'Slovo vzniklo z předpony pra- a kořene les.' }
        ]
      },
      {
        id: 'predlozky',
        title: 'Předložky a předpony',
        icon: 'fa-object-ungroup',
        color: 'bg-teal-500',
        type: 'choice',
        items: [
          { q: 'Vyber správný zápis: (u stolu)', options: ['u stolu', 'ustolu', 'u-stolu'], a: 'u stolu', expl: 'U je samostatná předložka, píše se zvlášť (u našeho stolu).' },
          { q: 'Vyber správný zápis: (pod lesem)', options: ['pod lesem', 'podlesem', 'pod-lesem'], a: 'pod lesem', expl: 'Pod je předložka, píše se odděleně od podstatného jména.' },
          { q: 'Vyber správný zápis slova s předponou: (podchod)', options: ['podchod', 'pod chod', 'pod-chod'], a: 'podchod', expl: 'Podchod obsahuje předponu pod-. Píšeme ho dohromady.' }
        ]
      },
      {
        id: 'slovni_druhy',
        title: 'Slovní druhy (1–10)',
        icon: 'fa-list-ol',
        color: 'bg-indigo-500',
        type: 'choice',
        items: [
          { q: 'Urči slovní druh slova "PES":', options: ['1 - Podstatné jméno', '2 - Přídavné jméno', '3 - Zájmeno', '5 - Sloveso'], a: '1 - Podstatné jméno', expl: 'Pes je název zvířete (kdo, co?).' },
          { q: 'Urči slovní druh slova "RADOSTNÝ":', options: ['2 - Přídavné jméno', '1 - Podstatné jméno', '3 - Zájmeno', '6 - Příslovce'], a: '2 - Přídavné jméno', expl: 'Odpovídá na otázku "jaký?".' },
          { q: 'Urči slovní druh slova "BĚŽET":', options: ['5 - Sloveso', '1 - Podstatné jméno', '2 - Přídavné jméno', '7 - Předložka'], a: '5 - Sloveso', expl: 'Vyjadřuje děj nebo činnost.' },
          { q: 'Urči slovní druh slova ON ve větě „On čte.“', options: ['3 - Zájmeno', '1 - Podstatné jméno', '6 - Příslovce'], a: '3 - Zájmeno', expl: 'On zastupuje jméno osoby. Je to zájmeno.' },
{ q: 'Urči slovní druh slova TŘI ve větě „Mám tři tužky.“', options: ['4 - Číslovka', '3 - Zájmeno', '5 - Sloveso'], a: '4 - Číslovka', expl: 'Tři vyjadřuje počet. Ptáme se kolik?' },
{ q: 'Urči slovní druh slova RYCHLE ve větě „Běží rychle.“', options: ['6 - Příslovce', '2 - Přídavné jméno', '5 - Sloveso'], a: '6 - Příslovce', expl: 'Rychle říká, jak běží. Je to příslovce.' },
{ q: 'Urči slovní druh slova A ve větě „Petr a Jana čtou.“', options: ['8 - Spojka', '7 - Předložka', '9 - Částice'], a: '8 - Spojka', expl: 'A spojuje slova Petr a Jana. Je to spojka.' },
{ q: 'Urči slovní druh slova AŤ ve větě „Ať se ti daří!“', options: ['9 - Částice', '8 - Spojka', '10 - Citoslovce'], a: '9 - Částice', expl: 'Ať na začátku této věty vyjadřuje přání. Je to částice.' },
{ q: 'Urči slovní druh slova AU ve větě „Au, to bolí!“', options: ['10 - Citoslovce', '9 - Částice', '1 - Podstatné jméno'], a: '10 - Citoslovce', expl: 'Au vyjadřuje pocit bolesti. Je to citoslovce.' },
{ q: 'Urči slovní druh slova "POD":', options: ['7 - Předložka', '8 - Spojka', '9 - Částice', '10 - Citoslovce'], a: '7 - Předložka', expl: 'Předložka se pojí s podstatným jménem.' }
        ]
      }
    ];