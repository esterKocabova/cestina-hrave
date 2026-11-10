const categoriesData = [
      {
        id: 'iy_vybrana',
        title: 'Vybraná slova a koncovky (i/y)',
        tile: 'i/y',
        type: 'choice',
        items: [
          { q: 'přátelstv_ (podle vzoru stavení)', options: ['í', 'ý', 'i', 'y'], a: 'í', expl: 'Slovo přátelství je podstatné jméno rodu středního, vzor stavení -> píšeme dlouhé Í.' },
          { q: 's_ček (noční pták)', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Sýček je vybrané slovo po S.' },
          { q: 'v_r (noční dravý pták)', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Výr (pták) je vybrané slovo po V. Vodní vír má měkké i!' },
          { q: 'vodní v_r (točící se voda)', options: ['í', 'ý', 'i', 'y'], a: 'í', expl: 'Vodní vír není vybrané slovo, označuje točivý pohyb.' },
          { q: 'b_ložravé zvíře', options: ['y', 'i', 'ý', 'í'], a: 'ý', expl: 'Býložravé zvíře se živí rostlinami. Slovo býložravý je příbuzné s vyjmenovaným slovem bylina a píše se s dlouhým ý.' },
          { q: 'lesní m_tina', options: ['y', 'i', 'ý', 'í'], a: 'y', expl: 'Mýtina je příbuzná k vybranému slovu mýtit.' },
          { q: 'p_cha předchází pád', options: ['ý', 'í', 'y', 'i'], a: 'ý', expl: 'Pýcha je vybrané slovo po P.' },
          { q: "Sestry přišl_ na návštěvu.", options: ["y", "i", "a"], a: "y", expl: "Sestry jsou rodu ženského v množném čísle. Píšeme přišly." },
          { q: "Doplň i, í, y nebo ý. Kyselé zel_ je ve sklenici.", options: ["í", "i", "y", "ý"], a: "í", expl: "Zelí je podstatné jméno podle vzoru stavení." },
          { q: "Doplň i, í, y nebo ý. V kuchyn_ svítilo světlo.", options: ["i", "í", "y", "ý"], a: "i", expl: "Ptáme se kde? V kuchyni. V tomto tvaru je na konci krátké i." },
          { q: "Doplň i, í, y nebo ý. Do horké polévky nasypal b_linky.", options: ["y", "i", "í", "ý"], a: "y", expl: "Bylinka je příbuzná s vyjmenovaným slovem bylina." },
          { q: "Doplň i, í, y nebo ý. Všichni b_dlíme v jednom domě.", options: ["y", "i", "í", "ý"], a: "y", expl: "Bydlíme patří ke slovu bydlit. To je vyjmenované slovo po B." },
          { q: "Doplň i, í, y nebo ý. Včera sv_tilo sluníčko.", options: ["í", "i", "y", "ý"], a: "í", expl: "Ve slově svítit i v jeho tvaru svítilo píšeme dlouhé í." },
          { q: "Doplň i, í, y nebo ý. Nad vchodem visel štít s náp_sem.", options: ["i", "í", "y", "ý"], a: "i", expl: "Píšeme nápis. Pomůže příbuzné slovo nápisek." },
          { q: "Doplň i, í, y nebo ý. Na vývěsním štítu byla zkřížená klad_vka.", options: ["í", "i", "y", "ý"], a: "í", expl: "Píšeme kladívka s dlouhým í, stejně jako kladívko." }
        ]
      },
      {
        id: 'abeceda',
        title: 'Řazení dle abecedy',
        tile: 'A–Z',
        type: 'sort',
        items: [
          { words: ['Bambus', 'Ananas', 'Citrón', 'Borůvka'], correct: ['Ananas', 'Bambus', 'Borůvka', 'Citrón'] },
          { words: ['Jablko', 'Jahoda', 'Jeřabina', 'Javor'], correct: ['Jablko', 'Jahoda', 'Javor', 'Jeřabina'] },
          { words: ['Škola', 'Sešit', 'Slabikář', 'Tabule'], correct: ['Sešit', 'Slabikář', 'Škola', 'Tabule'] },
          { words: ["kosatec", "tulipán", "bledule", "růže", "narcis", "šalvěj", "heřmánek"], correct: ["bledule", "heřmánek", "kosatec", "narcis", "růže", "šalvěj", "tulipán"] },
          { words: ["bernardýn", "jezevčík", "doga", "dobrman", "pudl", "kokršpaněl"], correct: ["bernardýn", "dobrman", "doga", "jezevčík", "kokršpaněl", "pudl"] },
          { words: ["Dyje", "Labe", "Úhlava", "Ploučnice", "Vltava", "Úslava", "Morava"], correct: ["Dyje", "Labe", "Morava", "Ploučnice", "Úhlava", "Úslava", "Vltava"] },
          { words: ["být", "bydlit", "obyvatel", "byt", "příbytek", "nábytek", "dobytek"], correct: ["bydlit", "byt", "být", "dobytek", "nábytek", "obyvatel", "příbytek"] }
        ]
      },
      {
        id: 'nadrazena',
        title: 'Slova nadřazená a podřazená',
        tile: '⊃',
        type: 'choice',
        items: [
          { q: 'Co je nadřazené slovům: Pes, Kočka, Králík?', options: ['Zvířata', 'Vozidla', 'Ovoce', 'Rostliny'], a: 'Zvířata', expl: 'Pes, kočka i králík patří do skupiny zvířat.' },
          { q: 'Vyber podřazené slovo ke slovu: NÁBYTEK', options: ['Židle', 'Jablko', 'Košile', 'Autobus'], a: 'Židle', expl: 'Židle je konkrétní druh nábytku.' },
          { q: 'Vyber slovo nadřazené pro: Jablko, Hruška, Švestka', options: ['Ovoce', 'Zelenina', 'Pečivo', 'Hračky'], a: 'Ovoce', expl: 'Jablko, hruška i švestka jsou druhy ovoce.' },
          { q: "Co mají společného jezevčík, doga a dobrman?", options: ["Jsou to plemena psů.", "Jsou to názvy řek.", "Jsou to druhy nábytku."], a: "Jsou to plemena psů.", expl: "Jezevčík, doga i dobrman jsou různá plemena psů." },
          { q: "Které slovo je nadřazené názvům Dyje, Labe a Vltava?", options: ["Řeky", "Města", "Jezera", "Pohoří"], a: "Řeky", expl: "Dyje, Labe i Vltava jsou řeky." },
          { q: "Které slovo nepatří mezi názvy rostlin? Kosatec, narcis, bledule, dobrman.", options: ["dobrman", "kosatec", "narcis", "bledule"], a: "dobrman", expl: "Dobrman je plemeno psa. Zbylá slova označují rostliny." }
        ]
      },
      {
        id: 'pribuzna',
        title: 'Slova příbuzná',
        tile: 'les',
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
        tile: '∎',
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
        tile: 'pod',
        type: 'choice',
        items: [
          { q: 'Vyber správný zápis: (u stolu)', options: ['u stolu', 'ustolu', 'u-stolu'], a: 'u stolu', expl: 'U je samostatná předložka, píše se zvlášť (u našeho stolu).' },
          { q: 'Vyber správný zápis: (pod lesem)', options: ['pod lesem', 'podlesem', 'pod-lesem'], a: 'pod lesem', expl: 'Pod je předložka, píše se odděleně od podstatného jména.' },
          { q: 'Vyber správný zápis slova s předponou: (podchod)', options: ['podchod', 'pod chod', 'pod-chod'], a: 'podchod', expl: 'Podchod obsahuje předponu pod-. Píšeme ho dohromady.' },
          { q: "Která dvojice je napsaná správně?", options: ["bez barvy, bezbarvý", "bezbarvy, bez barvý", "bez barvy, bez barvý"], a: "bez barvy, bezbarvý", expl: "Předložku bez píšeme zvlášť. Předponu bez- ve slově bezbarvý píšeme dohromady se zbytkem slova." },
          { q: "Jak napíšeš obě spojení? „Zůstali jsme ___ peněz“ a „byl to ___cenný papír“.", options: ["bez peněz, bezcenný", "bezpeněz, bez cenný", "bez peněz, bez cenný"], a: "bez peněz, bezcenný", expl: "Bez peněz jsou dvě slova. Bezcenný je jedno přídavné jméno." },
          { q: "Doplň zápis. Strašidlo se objevilo (vnašem) domě.", options: ["v našem", "vnašem", "v-našem"], a: "v našem", expl: "V je předložka. Píšeme ji zvlášť: v našem domě." }
        ]
      },
      {
        id: 'slovni_druhy',
        title: 'Slovní druhy (1–10)',
        tile: '1–10',
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
{ q: 'Urči slovní druh slova "POD":', options: ['7 - Předložka', '8 - Spojka', '9 - Částice', '10 - Citoslovce'], a: '7 - Předložka', expl: 'Předložka se pojí s podstatným jménem.' },
          { q: "Která možnost je sloveso?", options: ["odstěhovali se", "u moře", "výjimečně", "poklidné"], a: "odstěhovali se", expl: "Odstěhovali se vyjadřuje děj. Říká, co někdo udělal." },
          { q: "Která možnost obsahuje jen slovesa?", options: ["zapomněli, rozhodil, je", "zapomněli, trochu, je", "věčnost, rozhodil, je", "zapomněli, rozhodil, až"], a: "zapomněli, rozhodil, je", expl: "Zapomněli, rozhodil i je jsou tvary sloves. Je je tvar slovesa být." },
          { q: "Které slovo je přídavné jméno? „V komíně se objevilo bílé strašidlo.“", options: ["bílé", "komíně", "objevilo", "strašidlo"], a: "bílé", expl: "Ptáme se jaké strašidlo? Bílé." },
          { q: "Které slovo je zájmeno? „V našem domě se objevilo strašidlo.“", options: ["našem", "domě", "v", "strašidlo"], a: "našem", expl: "Našem je tvar přivlastňovacího zájmena náš." },
          { q: "Které slovo je číslovka? „Na půdě bydlelo jedno malé strašidlo.“", options: ["jedno", "malé", "půdě", "bydlelo"], a: "jedno", expl: "Kolik strašidel tam bydlelo? Jedno." }
        ]
      },
      {
        id: 'be_bje',
        title: 'Bě, nebo bje?',
        tile: 'bě',
        type: 'choice',
        items: [
          { q: "Snědl můj o__d.", options: ["bě", "bje"], a: "bě", expl: "Píšeme oběd. Ve slově oběd není předpona ob-." },
          { q: "Byla to od něho velká o__ť.", options: ["bě", "bje"], a: "bě", expl: "Píšeme oběť. Tady slyšíme „bje“, ale píšeme bě." },
          { q: "Vědec učinil velký o__v.", options: ["bje", "bě"], a: "bje", expl: "Objev souvisí se slovy objevit a jev. Předpona ob- a část jev tvoří zápis bje." },
          { q: "Musíme o__t tu kaluž na kole.", options: ["bje", "bě"], a: "bje", expl: "Objet znamená jet kolem něčeho. Předpona ob- se připojí ke slovu jet." },
          { q: "Přišly tam o__ sestry.", options: ["bě", "bje"], a: "bě", expl: "Píšeme obě. Znamená to, že přišly obě dvě." },
          { q: "Na půdě se o__vilo strašidlo.", options: ["bje", "bě"], a: "bje", expl: "Píšeme objevilo. Stejně jako u slova objev se na hranici ob- a jev píše bje." },
          { q: "Chci si o__dnat časopis.", options: ["bje", "bě"], a: "bje", expl: "Píšeme objednat. Když se předpona ob- připojí ke slovu jednat, vznikne bje." },
          { q: "O__m téhle láhve je jeden litr.", options: ["bje", "bě"], a: "bje", expl: "Píšeme objem. Stejně píšeme bje ve slově objemný." }
        ]
      },
      {
        id: 'souhlasky',
        title: 'Párové a zdvojené souhlásky',
        tile: 'zz',
        type: 'choice',
        items: [
          { q: "V truhle ležel pokla_.", options: ["d", "t"], a: "d", expl: "Pomůže jiný tvar: bez pokladu. Před u slyšíš d." },
          { q: "Dostal jsem správnou odpově_.", options: ["ď", "ť"], a: "ď", expl: "Řekni si dvě odpovědi. Podle tvaru odpovědi poznáš, že na konci píšeme ď." },
          { q: "Je to tě_ký batoh.", options: ["ž", "š"], a: "ž", expl: "Pomůže slovo těžší. Na stejném místě v něm píšeme ž." },
          { q: "Na konci vlaku jsou dva vlá_ky z lega.", options: ["č", "š"], a: "č", expl: "Vláček má č. Ve slově vláčky č zůstává." },
          { q: "Snědl jsem čerstvý chlé_.", options: ["b", "p"], a: "b", expl: "Zkus jiný tvar: krajíc chleba. V něm zřetelně slyšíš b." },
          { q: "Babička, která nemá zuby, je ___.", options: ["bezzubá", "bezubá", "beszubá"], a: "bezzubá", expl: "Předpona bez- končí na z a slovo zub začíná na z. Proto píšeme dvě z." },
          { q: "Býk, který zuří, je ___.", options: ["rozzuřený", "rozuřený", "roszuřený"], a: "rozzuřený", expl: "Roz- a zuřený se setkají na dvou z." },
          { q: "Maminka, která se zlobí, je ___.", options: ["rozzlobená", "rozlobená", "roslobená"], a: "rozzlobená", expl: "Předpona roz- končí na z a sloveso zlobit se začíná na z." },
          { q: "Člověk bez zásad je ___.", options: ["bezzásadový", "bezásadový", "beszásadový"], a: "bezzásadový", expl: "Bez- a zásada mají na hranici dvě z." },
          { q: "Když se zářivka rozsvítí a silně září, je ___.", options: ["rozzářená", "rozářená", "roszářená"], a: "rozzářená", expl: "Roz- a zářit mají na hranici dvě z." }
        ]
      },
      {
        id: 'spisovna',
        title: 'Spisovná a citově zabarvená slova',
        tile: 'Aa',
        type: 'choice',
        items: [
          { q: "Jak napíšeš větu spisovně? „Zejtra máme matiku.“", options: ["Zítra máme matematiku.", "Zejtra máme matematiku.", "Zítra máme matiku."], a: "Zítra máme matematiku.", expl: "V tomto cvičení nahradíme zejtra slovem zítra a matiku slovem matematiku." },
          { q: "Jak spisovně nahradíš slovo SÉGRA?", options: ["sestra", "sousedka", "sestřenice"], a: "sestra", expl: "Ségra je nespisovná podoba slova sestra." },
          { q: "Jak spisovně nahradíš zvýrazněné slovo? „Obleč si GATĚ.“", options: ["kalhoty", "ponožky", "rukavice", "boty"], a: "kalhoty", expl: "V této větě místo gatě použijeme spisovné slovo kalhoty." },
          { q: "Jak upravíš větu pro školní sloh? „Za tejden mám narozky.“", options: ["Za týden mám narozeniny.", "Za tejden mám narozeniny.", "Za týden mám narozky."], a: "Za týden mám narozeniny.", expl: "Ve školním slohu použijeme týden a narozeniny." },
          { q: "Které slovo zní nejněžněji?", options: ["pusinka", "pusa", "ústa"], a: "pusinka", expl: "Pusinka je zdrobnělina. V oslovení nebo prosbě může vyjadřovat něhu." },
          { q: "Které pojmenování psa může znít nelichotivě?", options: ["čokl", "pes", "pejsek", "štěňátko"], a: "čokl", expl: "Čokl může vyjadřovat nelibost. Pejsek a štěňátko znějí spíš mile." },
          { q: "Která dvojice obsahuje jen zdrobněliny?", options: ["ručičky, nožičky", "ruce, nohy", "ručičky, nohy", "ruce, nožičky"], a: "ručičky, nožičky", expl: "Ručičky a nožičky jsou zdrobněliny. Mohou označit něco malého nebo vyjádřit něhu." }
        ]
      },
      {
        id: 'prirovnani',
        title: 'Přirovnání a ustálená rčení',
        tile: 'jako',
        type: 'choice',
        items: [
          { q: "Je pilná jako ___.", options: ["včelka", "liška", "kotě", "havran"], a: "včelka", expl: "Pilná jako včelka znamená, že někdo pracuje s velkou chutí a vytrvalostí." },
          { q: "Je mazaná jako ___.", options: ["liška", "včelka", "pomněnka", "slon"], a: "liška", expl: "O mazaném člověku říkáme, že je chytrý a umí si poradit. V příbězích bývá mazaná liška." },
          { q: "Co znamená „má oči jako pomněnky“?", options: ["Má modré oči.", "Má zelené oči.", "Má zavřené oči."], a: "Má modré oči.", expl: "Pomněnky mají modré květy. Přirovnání popisuje barvu očí." },
          { q: "Co znamená „je jako slon v porcelánu“?", options: ["Chová se neobratně nebo bez citu.", "Je velmi trpělivý.", "Má výbornou paměť."], a: "Chová se neobratně nebo bez citu.", expl: "Představ si slona mezi křehkými talíři. Přirovnání popisuje neobratné nebo necitlivé chování." },
          { q: "Vlasy černé jako ___.", options: ["havran", "sníh", "pomněnky", "včelka"], a: "havran", expl: "Havran má černé peří. Přirovnání zdůrazňuje černou barvu vlasů." },
          { q: "Je ospalý jako ___.", options: ["kotě", "slon v porcelánu", "pomněnka", "havran"], a: "kotě", expl: "Koťata často pospávají. Přirovnání říká, že je někdo hodně ospalý." },
          { q: "Co znamená ‚ani pes po něm neštěkne‘?", options: ["Nikdo si na něj nevzpomene.", "Psi se ho bojí.", "Má rád psy."], a: "Nikdo si na něj nevzpomene.", expl: "Rčení znamená, že si člověka nikdo nevšimne nebo si na něj nikdo nevzpomene." },
          { q: "Co znamená „ani psa by nevyhnal“?", options: ["Venku je hodně nevlídno.", "Má doma mnoho psů.", "Pes utekl ze zahrady."], a: "Venku je hodně nevlídno.", expl: "Rčení používáme, když je venku opravdu nepříjemné počasí." },
          { q: "Co znamená „má se pod psa“?", options: ["Má se hodně špatně.", "Spí v psí boudě.", "Vede se mu skvěle."], a: "Má se hodně špatně.", expl: "Pod psa je ustálené spojení pro něco velmi špatného." },
          { q: "Co znamená „svěřil maso psovi“?", options: ["Svěřil něco někomu, kdo to nejspíš neuhlídá.", "Připravil psovi večeři.", "Schoval něco na bezpečném místě."], a: "Svěřil něco někomu, kdo to nejspíš neuhlídá.", expl: "Pes by maso mohl sníst. Rčení říká, že někdo svěřil věc nevhodnému člověku." }
        ]
      },
      {
        id: 'podstatna_jmena',
        title: 'Podstatná jména (rod, číslo, pád)',
        tile: 'pád',
        type: 'choice',
        items: [
          { q: "Urči rod, číslo a pád slova ZAHRADĚ. „Hrajeme si v zahradě.“", options: ["ženský, jednotné, 6. pád", "ženský, jednotné, 3. pád", "ženský, množné, 6. pád", "střední, jednotné, 6. pád"], a: "ženský, jednotné, 6. pád", expl: "Ta zahrada je rodu ženského. Je jedna. V kom, v čem? V zahradě." },
          { q: "Urči pád slova KOUTA. „Kotě vylezlo z kouta.“", options: ["2. pád", "1. pád", "4. pád", "6. pád"], a: "2. pád", expl: "Z koho, z čeho? Z kouta." },
          { q: "Urči rod, číslo a pád slova RUKAMA. „Zamávala oběma rukama.“", options: ["ženský, množné, 7. pád", "ženský, jednotné, 7. pád", "ženský, množné, 3. pád", "střední, množné, 7. pád"], a: "ženský, množné, 7. pád", expl: "Ta ruka je rodu ženského. Obě ruce jsou množné číslo. Kým, čím? Rukama." },
          { q: "Urči rod, číslo a pád slova TÝDNŮ. „Do prázdnin zbývá pět týdnů.“", options: ["mužský, množné, 2. pád", "mužský, jednotné, 2. pád", "mužský, množné, 4. pád", "ženský, množné, 2. pád"], a: "mužský, množné, 2. pád", expl: "Ten týden je rodu mužského. Týdnů je víc. Pět koho, čeho? Týdnů." },
          { q: "Urči rod slova TAJEMSTVÍ. „Pověděl mi svoje tajemství.“", options: ["střední", "mužský", "ženský"], a: "střední", expl: "Říkáme to tajemství. Ukazovací zájmeno to pomůže určit střední rod." },
          { q: "Urči pád slova PSOVI. „Dal psovi misku.“", options: ["3. pád", "2. pád", "5. pád", "6. pád"], a: "3. pád", expl: "Komu, čemu dal misku? Psovi." }
        ]
      },
      {
        id: 'vety',
        title: 'Věta jednoduchá a souvětí',
        tile: 'V',
        type: 'choice',
        items: [
          { q: "Která věta je jednoduchá?", options: ["V komíně se objevilo bílé strašidlo.", "V komíně něco zapraskalo a děti ztichly.", "Když se setmělo, děti šly domů."], a: "V komíně se objevilo bílé strašidlo.", expl: "V první možnosti je jeden přísudek: objevilo se. Proto je to věta jednoduchá." },
          { q: "Která možnost je souvětí?", options: ["Když se rozsvítilo, strašidlo zmizelo.", "Strašidlo se schovalo do komína.", "Obě sestry se polekaly."], a: "Když se rozsvítilo, strašidlo zmizelo.", expl: "V souvětí jsou dva přísudky: rozsvítilo se a zmizelo." },
          { q: "Je to věta jednoduchá, nebo souvětí? „Pes zaštěkal a kočka utekla.“", options: ["Souvětí", "Věta jednoduchá"], a: "Souvětí", expl: "Pes zaštěkal a kočka utekla jsou dvě věty spojené spojkou a." },
          { q: "Která možnost je věta jednoduchá?", options: ["Před domem stály dvě vysoké lípy.", "Před domem stály lípy a vítr ohýbal větve.", "Vidím dům, ve kterém bydlí kamarád."], a: "Před domem stály dvě vysoké lípy.", expl: "Ve větě o lípách je jeden přísudek: stály." },
          { q: "Je to věta jednoduchá, nebo souvětí? „Musíme objet tu kaluž.“", options: ["Věta jednoduchá", "Souvětí"], a: "Věta jednoduchá", expl: "Musíme objet patří dohromady. Objet je neurčitek a s musíme tvoří jeden přísudek." }
        ]
      }
    ];
