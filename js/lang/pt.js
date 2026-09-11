/* Português */
window.LANGS = window.LANGS || {};
window.LANGS.pt = {
  code: "pt", name: "Português", dir: "ltr",
  meta: { title: "Barrie Nissan · Portal do cliente", description: "Tudo o que um cliente da Barrie Nissan precisa num só lugar: horários, marcação de serviço, peças, financiamento, recursos para proprietários e a quem ligar." },

  ui: {
    langLabel: "Idioma",
    langPrompt: "Leia esta página no seu idioma",
    hubTitle: "Portal do cliente",
    tagline: "Tudo o que precisa como cliente da Barrie Nissan, a um toque. Horários, marcações, peças, financiamento, a quem ligar. We make it easy, nós facilitamos.",
    call: "Ligar", directions: "Direções", fullWebsite: "Site completo",
    vcardLabel: "Guardar o nosso contacto",
    vcardHint: "Adiciona a nossa morada, telefones, e-mail e horários aos seus contactos no iPhone ou Android.",
    vcardNote: "Vendas seg-qui 9h-20h, sex-sáb 9h-17h. Serviço e peças seg-sex 8h-17h. We Make It Easy.",
    openNow: "Aberto", closedNow: "Fechado", checking: "A verificar horários…",
    openUntil: "Aberto · até às {t}", closedToday: "Fechado · hoje {a} – {b}", closedAllDay: "Fechado hoje", closed: "Fechado",
    days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    quickTitle: "Do que precisa hoje?", quickAccent: "Nós facilitamos.",
    hoursTitle: "Horários", findUs: "Onde estamos", openMaps: "Abrir no Mapas", callUs: "Ligue-nos",
    localTollFree: "Local {a} · Gratuito {b}",
    depts: { sales: "Vendas", service: "Serviço", parts: "Peças" },
    allBrandsTitle: "Não conduz um Nissan? Continua a ser um dos nossos.",
    allBrandsText: "Se comprou o seu veículo connosco, seja qual for a marca, tudo nesta página se aplica a si. A mesma equipa, as mesmas ferramentas de marcação, os mesmos programas, os mesmos padrões de atendimento.",
    loyaltyEyebrow: "Programa de fidelização",
    valueEyebrow: "My Mechanic",
    serviceEyebrow: "Serviço", serviceTitle: "O que esperar de uma visita ao serviço",
    serviceIntro: "\"We Make It Easy\" não é um slogan pendurado na parede e esquecido. É assim que cada visita deve ser. Se algum passo falhar, queremos saber no próprio dia.",
    salesEyebrow: "Vendas", salesTitle: "Acabou de comprar um veículo? Eis o que se segue",
    teamEyebrow: "Pessoas reais, linhas diretas", teamTitle: "Com quem falar",
    teamIntro: "Salte o menu telefónico. Ligue para (705) 726-0649 e marque a extensão, ou toque para ligar diretamente do seu telemóvel.",
    ext: "ext.",
    linksTitle: "Todas as ligações, num só lugar",
    faqTitle: "Perguntas que ouvimos todas as semanas",
    helpEyebrow: "Preferimos resolver a ler sobre isso", helpTitle: "Algo não correu bem? Fale primeiro connosco.",
    helpText: "Um problema que conhecemos é um problema que podemos resolver, normalmente na mesma semana. Contacte diretamente a pessoa responsável.",
    leaveGoogle: "Satisfeito com a visita? Deixe uma avaliação no Google", readReviews: "Ler avaliações de clientes",
    visitWebsite: "Visitar o nosso site completo", privacy: "Privacidade", rights: "Todos os direitos reservados.",
    publishedBy: "Portal criado por",
    stickyBook: "Marcar serviço", stickyCall: "Ligar",
    specialsEyebrow: "Promoções de serviço", specialsTitle: "Promoções da época", specialsIntro: "Mostre o cupão no telemóvel ou imprima-o e entregue-o ao seu consultor. É só isso.",
    viewCoupon: "Ver cupão", regularPrice: "Preço normal", validUntil: "Válido até {d}", noExpiry: "Sem data limite", limitedSpots: "Vagas limitadas",
    badgeSale: "Em promoção", badgeSave15: "Poupe 15%", badgeNew: "Novo", badgeFree: "Grátis",
    couponTitle: "Cupão de serviço", presentThis: "Apresente este cupão ao seu consultor de serviço na entrega do veículo.", couponCode: "Código do cupão",
    printCoupon: "Imprimir cupão", saveCoupon: "Guardar no telemóvel", saveHint: "No iPhone: toque em Partilhar e depois em Guardar em Ficheiros ou Adicionar a Fotos. No Android: Partilhar, depois Imprimir, depois Guardar como PDF.", backToHub: "Voltar ao portal",
    bookNow: "Marcar agora", oneCoupon: "Um cupão por visita. Não acumulável com outras ofertas. Impostos e taxas ambientais não incluídos.",
    specialsService: "Serviço", specialsParts: "Peças e acessórios", presentThisParts: "Apresente este cupão no balcão de peças no momento da compra.", plusTax: "mais impostos", partsCoupon: "Cupão de peças", orderParts: "Encomendar online", askParts: "Pergunte à equipa de peças",
    reviewsEyebrow: "Diga-nos como correu"
  },

  quickActions: {
    book:     ["Marcar uma visita ao serviço", "Online em menos de 2 minutos, ou ligue para a ext. 129"],
    call:     ["Ligar para o concessionário", "(705) 726-0649"],
    map:      ["Obter direções", "630 Veterans Dr, Barrie"],
    parts:    ["Encomendar peças originais", "Envio ou levantamento na loja"],
    tires:    ["Centro de pneus", "Pneus, jantes e trocas sazonais"],
    specials: ["Promoções de serviço", "Ofertas atuais em manutenção"]
  },

  specials: {
    oil:     ["Promoção de mudança de óleo", "Mudança de óleo sintético por $109.99 em vez de $139.99.", "A maioria das marcas e modelos. Até 5 L de óleo sintético, filtro incluído."],
    tires:   ["Troca de pneus Early Bird", "Troca, equilibragem das 4 rodas, alinhamento das 4 rodas e uma época de armazenamento de pneus, tudo por $385. Marque e conclua antes de 2 de outubro de 2026 e poupe 15%.", "O desconto de 15% aplica-se se o serviço for concluído até 2 de outubro de 2026. Armazenamento por uma época."],
    storage: ["Novo: armazenamento de pneus", "$60 pela primeira época. Vagas limitadas, por ordem de chegada.", "Preço de lançamento para a primeira época. Depois aplica-se a tarifa normal."],
    wipers:   ["Escovas limpa-vidros + líquido", "Escovas dianteiras e um garrafão de líquido limpa-vidros por $64.99 mais impostos.", "A maioria das marcas e modelos. Apenas escovas em stock."],
    acc:      ["10% de desconto em todos os acessórios", "Todos os acessórios do catálogo, tapetes e protetores incluídos.", "Exclui mão de obra de instalação. Acessórios em stock e por encomenda."],
    battery:  ["$25 de desconto em baterias", "$25 de desconto em qualquer bateria de carro ou carrinha, instalação na hora.", "Uma bateria por cupão. Mão de obra de instalação à parte."],
    tpms:     ["10% de desconto em sensores de pressão", "Dez por cento de desconto em sensores TPMS, mesmo a tempo dos pneus de inverno.", "Apenas peças. Instalação e programação à parte."],
    fob:      ["Pilhas do comando: a 2.ª a metade do preço", "Compre uma pilha para o comando e leve a segunda a 50%.", "A segunda pilha deve ser de valor igual ou inferior."],
    frames:   ["Molduras de matrícula Barrie Nissan grátis", "Molduras de matrícula dianteira e traseira Barrie Nissan, sem custo.", "Um conjunto por cliente, até esgotar o stock."],
    delivery: ["Novo: entrega ao domicílio local", "Encomende as suas peças e acessórios online ou por telefone e entregamos à sua porta na zona de Barrie.", "Pergunte à equipa de peças sobre zonas e prazos de entrega."]
  },

  linkGroups: { shop: "Comprar", finance: "Financiamento", service: "Serviço e peças", owner: "Recursos para proprietários Nissan" },
  links: {
    new: "Veículos novos", used: "Veículos usados", cpo: "Usados certificados", build: "Configurar e orçamentar", offers: "Ofertas atuais", trade: "Avaliar a minha retoma",
    financing: "Opções de financiamento", apply: "Pedir financiamento", credit: "Verificação de crédito gratuita", loyalty: "Programa de fidelização", newcomer: "Programa para recém-chegados", grad: "Programa para recém-graduados",
    serviceDept: "Departamento de serviço", partsDept: "Departamento de peças", partsSpecials: "Promoções em peças", accessories: "Acessórios", collision: "Centro de colisão (Zenetec)",
    recall: "Consultar recalls pelo VIN", manuals: "Manuais do proprietário", connect: "NissanConnect", mynissan: "App MyNissan", roadside: "Assistência em viagem e apoio"
  },

  hmc: {
    title: "High Mileage Club",
    text: "O seu veículo tem mais de seis anos ou mais de 150 000 km? Qualquer marca, qualquer modelo, está dentro. O High Mileage Club é a nossa forma de manter veículos mais antigos na estrada sem o preço de concessionário.",
    bullets: [
      "15% de desconto em peças e mão de obra em reparações e certas manutenções preventivas",
      "Peças originais instaladas por técnicos formados pela fábrica",
      "Garantia de 1 ano / 20 000 km em peças e mão de obra na maioria das reparações",
      "Garantia de 3 anos / km ilimitados em motores e transmissões",
      "Financiamento a 0% em reparações através da Flexiti, sujeito a aprovação de crédito"
    ],
    fineprint: "Exclui manutenção programada, mudanças de óleo e venda de pneus.",
    cta: "Saber mais e aderir"
  },

  value: {
    title: "Valor todos os dias, não promoções pontuais",
    text: "É assim que We Make It Easy aparece na fatura. Todos os dias, para cada cliente.",
    items: [
      ["Diagnóstico gratuito", "com explicação dos resultados"],
      ["Verificação de alinhamento gratuita", "sempre que precisar"],
      ["Veículo de substituição a $20/dia", "sempre que precisar, peça ao marcar"],
      ["Garantia do preço mais baixo em pneus", "no Centro de pneus Barrie Nissan"],
      ["Mudança de óleo sintético a $109.99", "preço de todos os dias"],
      ["Transporte gratuito", "para destinos locais no horário do serviço"]
    ]
  },

  serviceSteps: [
    ["Marcação fácil", "Online ou por telefone, à hora que lhe convier."],
    ["Receção rápida", "É atendido sem demora e o seu consultor confirma o que vai ser feito e quando estará pronto."],
    ["Orçamento claro", "Trabalhos recomendados e custos explicados antes de começar. Sem surpresas na fatura."],
    ["Bem feito, a tempo", "Técnicos formados pela fábrica, peças originais e um veículo pronto à hora prometida."],
    ["Explicação e acompanhamento", "O seu consultor revê o trabalho consigo na entrega. Depois entramos em contacto para confirmar que está tudo bem."]
  ],
  purchaseSteps: [
    ["A sua entrega", "Apresentação completa do veículo, emparelhamento do telemóvel e configuração do NissanConnect antes de partir."],
    ["Papelada explicada", "Cada linha do seu contrato, garantia e produtos de proteção, em linguagem simples."],
    ["Perguntas mais tarde", "Ligue, envie mensagem ou passe por cá. O seu consultor de vendas continua a ser o seu contacto após a compra."],
    ["Primeira revisão", "Lembramos-lhe quando a primeira manutenção estiver a chegar e marcamos de acordo com a sua agenda."]
  ],

  team: {
    booking:  ["Marcar ou alterar uma visita ao serviço", "Coordenadora de marcações"],
    advisors: ["Perguntas durante a sua visita ao serviço", "Consultores de serviço"],
    warranty: ["Questões de garantia", "Consultor de garantia"],
    parts:    ["Peças, acessórios e pneus", "Especialista em peças"],
    finance:  ["Financiamento e produtos de proteção", "Gestores de serviços financeiros"],
    reception: ["Qualquer outro assunto", "Receção"]
  },
  roles: { fixedOps: "Diretor de operações fixas (serviço e peças)", salesMgr: "Diretor geral de vendas", gm: "Diretor geral" },

  reviews: {
    title: "Boa experiência? Conte ao mundo. Má experiência? Conte ao Bjorn.",
    text: "As avaliações são o que faz crescer um concessionário familiar e, sinceramente, alegram o dia à equipa. Se lhe facilitámos a vida, uma avaliação rápida numa destas plataformas leva cerca de um minuto. Se não, esqueça a avaliação e escreva diretamente ao diretor geral. Ele lê todas as mensagens.",
    platforms: {
      google:      ["Avalie-nos no Google", "A nossa ficha no Google, 5 estrelas se as merecermos"],
      facebook:    ["Recomende-nos no Facebook", "Avaliações e recomendações no Facebook"],
      dealerrater: ["Avalie-nos no DealerRater", "O site de avaliações de concessionários do Canadá"]
    },
    unhappyLabel: "Não ficou satisfeito? Escrever ao diretor geral",
    unhappySubject: "Feedback on my visit to Barrie Nissan",
    unhappyBody: "Hi Bjorn,\n\nI recently visited Barrie Nissan and wanted to share some feedback. (Pode escrever em português abaixo.)\n\nDate of visit / Data da visita: \nDepartment / Departamento (Sales / Service / Parts): \nWhat happened / O que aconteceu: \n\nBest way to reach me / Melhor forma de me contactar: \n\nThank you,\n"
  },

  faq: [
    ["Como marco uma visita ao serviço?", "Online em dois minutos com o botão \"Marcar uma visita ao serviço\" acima, ou ligue à Nancy para (705) 726-0649 ext. 129 no horário do serviço. Diga-nos o que está a notar e reservamos o tempo certo. We make it easy."],
    ["O que é que \"We Make It Easy\" me dá, na prática?", "Preços de todos os dias em vez de promoções pontuais: diagnósticos gratuitos, verificações de alinhamento gratuitas, veículos de substituição a $20/dia, garantia do preço mais baixo em pneus e mudança de óleo sintético a $109.99. Além disso, transporte local gratuito e 15% de desconto em reparações para veículos mais antigos ou com muitos quilómetros através do High Mileage Club."],
    ["Fazem serviço a veículos que não são Nissan?", "Sim, qualquer marca e modelo. Se comprou um veículo usado connosco, seja qual for a marca, é cliente da Barrie Nissan e tudo nesta página se aplica a si. O High Mileage Club também está aberto a todas as marcas."],
    ["Vou saber o custo antes de qualquer trabalho?", "Sim. O seu consultor de serviço revê consigo o trabalho recomendado e o orçamento antes de começar, e liga-lhe para aprovação se surgir algo novo durante a visita."],
    ["Como vou ser informado durante a visita?", "O seu consultor confirma a hora prometida na entrega do veículo e contacta-o se o prazo ou o âmbito do trabalho mudar. TODO (a confirmar com o concessionário): só por telefone ou também por SMS."],
    ["Têm transporte ou veículo de cortesia?", "Ambos. Um transporte gratuito serve destinos locais no horário do serviço, e há veículos de substituição por $20 por dia sempre que precisar. Refira-o ao marcar para que esteja pronto quando chegar."],
    ["Posso esperar no concessionário?", "Claro. Tome um café na sala de espera, ligue-se ao Wi-Fi e adiante trabalho enquanto tratamos do veículo. TODO (a confirmar com o concessionário): lista exata de comodidades."],
    ["Como verifico se o meu veículo tem um recall pendente?", "Use a consulta de recalls da Nissan Canada com o seu VIN (ligação acima). As reparações de recall são gratuitas. Também podemos verificar por si na próxima visita."],
    ["Onde vou para pneus e trocas sazonais?", "Ao Centro de pneus Barrie Nissan, aqui mesmo, com garantia do preço mais baixo em pneus. Marque a troca sazonal como qualquer outra visita ao serviço. Novo esta época: armazenamento de pneus por $60 na primeira época, vagas limitadas. Veja o pacote Early Bird nas promoções acima."],
    ["Acabei de comprar o meu veículo. O que se segue?", "O seu especialista de entrega apresenta-lhe o veículo, emparelha o telemóvel e configura o NissanConnect. Se tiver dúvidas em casa, preferimos que ligue a que adivinhe. Uma chamada de acompanhamento nos dias seguintes é normal, e o lembrete da primeira manutenção virá de nós."],
    ["Algo não correu bem na minha visita. Com quem falo?", "Por favor, diga-nos primeiro, e rapidamente. Steve Ward dirige o Serviço e as Peças, Quinn Graham dirige as Vendas e Bjorn Surmann é o diretor geral. As linhas diretas deles estão abaixo para que o problema seja resolvido na mesma semana, e não depois de um inquérito chegar à sua caixa de correio."]
  ]
};
