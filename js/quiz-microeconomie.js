const questions = [
    // SECTION 1: Introduction à la microéconomie
    {
        question: "Quel est l'objet d'étude principal de la microéconomie ?",
        options: [
            "Les grands agrégats économiques comme l'inflation et le chômage",
            "Les comportements des agents économiques individuels et leurs interactions sur les marchés",
            "La politique monétaire et la croissance économique",
            "Les échanges commerciaux internationaux"
        ],
        correct: 1,
        explanation: "La microéconomie étudie le comportement économique des agents individuels (consommateurs, entreprises) et leurs interactions sur des marchés spécifiques, contrairement à la macroéconomie qui s'intéresse aux grands agrégats."
    },
    {
        question: "Qu'est-ce que la rationalité économique dans le cadre de la théorie microéconomique standard ?",
        options: [
            "La capacité à expliquer des comportements économiques complexes",
            "La prise de décision basée uniquement sur l'émotion",
            "La maximisation de l'utilité sous contrainte de ressources limitées",
            "L'absence de préférences stables dans le temps"
        ],
        correct: 2,
        explanation: "La rationalité économique dans le cadre standard suppose que les agents cherchent à maximiser leur utilité (consommateurs) ou leurs profits (entreprises) sous contrainte de ressources limitées."
    },
    
    // SECTION 2: Théorie du consommateur
    {
        question: "Quelle équation représente la contrainte budgétaire d'un consommateur ?",
        options: [
            "U = f(x₁, x₂, ..., xₙ)",
            "p₁x₁ + p₂x₂ + ... + pₙxₙ ≤ R",
            "Q = f(K, L)",
            "CM = CT/Q"
        ],
        correct: 1,
        explanation: "La contrainte budgétaire s'écrit p₁x₁ + p₂x₂ + ... + pₙxₙ ≤ R, où p représente les prix, x les quantités, et R le revenu du consommateur."
    },
    {
        question: "Qu'est-ce que le taux marginal de substitution (TMS) ?",
        options: [
            "Le taux auquel un consommateur est prêt à échanger un bien contre un autre tout en maintenant le même niveau d'utilité",
            "Le rapport entre l'utilité totale et la quantité consommée",
            "Le taux de croissance des préférences du consommateur",
            "Le rapport entre le prix d'un bien et son utilité"
        ],
        correct: 0,
        explanation: "Le TMS mesure le taux auquel un consommateur est prêt à substituer un bien par un autre tout en maintenant le même niveau d'utilité (même courbe d'indifférence)."
    },
    {
        question: "À l'optimum du consommateur, quelle condition est vérifiée ?",
        options: [
            "L'utilité marginale est la même pour tous les biens",
            "Le rapport des prix est égal au rapport des utilités marginales",
            "Les utilités marginales pondérées par les prix sont égales pour tous les biens",
            "La dérivée seconde de l'utilité est positive"
        ],
        correct: 2,
        explanation: "À l'optimum, les utilités marginales pondérées par les prix sont égales : UMx₁/p₁ = UMx₂/p₂ = ... = UMxₙ/pₙ."
    },
    {
        question: "Quelle propriété caractérise généralement les courbes d'indifférence ?",
        options: [
            "Elles sont croissantes",
            "Elles se croisent aux points d'utilité maximale",
            "Elles sont convexes par rapport à l'origine",
            "Elles sont parallèles à la contrainte budgétaire"
        ],
        correct: 2,
        explanation: "Les courbes d'indifférence sont généralement convexes par rapport à l'origine, ce qui reflète le principe de l'utilité marginale décroissante."
    },
    
    // SECTION 3: Théorie du producteur
    {
        question: "Qu'est-ce qu'une fonction de production ?",
        options: [
            "Une relation mathématique entre les prix des inputs et la quantité produite",
            "Une relation entre les facteurs de production et la quantité maximale qui peut être produite",
            "Une fonction qui détermine le prix optimal d'un bien",
            "La relation entre l'offre et la demande"
        ],
        correct: 1,
        explanation: "Une fonction de production décrit la relation technologique entre les quantités d'inputs (facteurs de production) et la quantité maximale d'output (production) qui peut être obtenue."
    },
    {
        question: "Quand dit-on qu'une entreprise a des rendements d'échelle croissants ?",
        options: [
            "Lorsque le coût moyen diminue quand la production augmente",
            "Lorsque la production augmente plus que proportionnellement à l'augmentation des facteurs de production",
            "Lorsque le profit marginal est constant",
            "Lorsque la production augmente dans la même proportion que les facteurs de production"
        ],
        correct: 1,
        explanation: "Une entreprise connaît des rendements d'échelle croissants lorsqu'une augmentation de tous les facteurs de production dans une certaine proportion entraîne une augmentation de la production dans une proportion plus grande."
    },
    {
        question: "Quelle est la définition du coût marginal ?",
        options: [
            "Le coût total divisé par la quantité produite",
            "Le coût de production d'une unité supplémentaire",
            "La variation du coût total suite à une variation unitaire d'un input",
            "Le coût minimum possible pour un niveau de production donné"
        ],
        correct: 1,
        explanation: "Le coût marginal est le coût de production d'une unité supplémentaire. Mathématiquement, c'est la dérivée du coût total par rapport à la quantité."
    },
    {
        question: "À l'optimum du producteur en concurrence parfaite, quelle condition est vérifiée ?",
        options: [
            "Prix = Coût moyen",
            "Prix = Coût marginal",
            "Prix = Recette marginale",
            "Coût marginal = Coût moyen"
        ],
        correct: 1,
        explanation: "En concurrence parfaite, l'entreprise maximise son profit en produisant jusqu'au point où le prix (qui est égal à la recette marginale) est égal au coût marginal."
    },
    
    // SECTION 4: Équilibre des marchés
    {
        question: "Comment se définit l'équilibre de marché dans le modèle de l'offre et de la demande ?",
        options: [
            "Le point où les prix sont stables",
            "Le point où l'offre est égale à la demande",
            "Le point où les profits des entreprises sont maximisés",
            "Le point où la satisfaction des consommateurs est maximisée"
        ],
        correct: 1,
        explanation: "L'équilibre de marché est atteint au point où la quantité offerte égale exactement la quantité demandée, déterminant ainsi le prix d'équilibre et la quantité d'équilibre."
    },
    {
        question: "Si l'élasticité-prix de la demande est égale à -2, cela signifie que :",
        options: [
            "Une augmentation de 1% du prix entraîne une diminution de 2% de la quantité demandée",
            "Une augmentation de 2% du prix entraîne une diminution de 1% de la quantité demandée",
            "La demande est parfaitement inélastique",
            "Une augmentation de 1% du prix entraîne une augmentation de 2% de la quantité demandée"
        ],
        correct: 0,
        explanation: "Une élasticité-prix de la demande de -2 signifie qu'une augmentation de 1% du prix entraîne une diminution de 2% de la quantité demandée. Le signe négatif indique la relation inverse entre prix et quantité demandée."
    },
    {
        question: "Qu'est-ce qui caractérise un bien normal en termes d'élasticité-revenu ?",
        options: [
            "Son élasticité-revenu est négative",
            "Son élasticité-revenu est positive mais inférieure à 1",
            "Son élasticité-revenu est positive",
            "Son élasticité-revenu est égale à 0"
        ],
        correct: 2,
        explanation: "Un bien normal a une élasticité-revenu positive, ce qui signifie que la demande pour ce bien augmente lorsque le revenu augmente. Si l'élasticité est supérieure à 1, il s'agit d'un bien de luxe ; si elle est entre 0 et 1, c'est un bien nécessaire."
    },
    {
        question: "Quel est l'effet d'un prix plafond fixé en dessous du prix d'équilibre ?",
        options: [
            "Un excédent d'offre",
            "Une pénurie (excès de demande)",
            "Une stabilité des prix",
            "Une augmentation de la qualité des produits"
        ],
        correct: 1,
        explanation: "Un prix plafond fixé en dessous du prix d'équilibre crée une pénurie, car la quantité demandée excède la quantité offerte à ce prix. Cela peut conduire à des files d'attente, un rationnement ou des marchés noirs."
    },
    
    // SECTION 5: Structures de marché
    {
        question: "Quelle caractéristique définit la concurrence parfaite ?",
        options: [
            "Un seul vendeur sur le marché",
            "Des barrières à l'entrée élevées",
            "Des produits différenciés",
            "De nombreux vendeurs et acheteurs, aucun ne pouvant influencer le prix du marché"
        ],
        correct: 3,
        explanation: "La concurrence parfaite se caractérise par un grand nombre de vendeurs et d'acheteurs, des produits homogènes, une information parfaite et libre entrée/sortie du marché. Aucun agent ne peut individuellement influencer le prix du marché."
    },
    {
        question: "Dans quelle structure de marché les entreprises sont-elles 'price-takers' (preneuses de prix) ?",
        options: [
            "Monopole",
            "Oligopole",
            "Concurrence parfaite",
            "Concurrence monopolistique"
        ],
        correct: 2,
        explanation: "En concurrence parfaite, les entreprises sont 'price-takers', c'est-à-dire qu'elles acceptent le prix déterminé par le marché et ne peuvent pas l'influencer individuellement."
    },
    {
        question: "Quelle est la principale caractéristique d'un monopole ?",
        options: [
            "De nombreux vendeurs offrant des produits différenciés",
            "Un seul vendeur sur le marché",
            "Quelques grandes entreprises dominantes",
            "Des produits parfaitement substituables"
        ],
        correct: 1,
        explanation: "Un monopole se caractérise par la présence d'un seul vendeur sur le marché, ce qui lui confère un pouvoir significatif pour fixer les prix."
    },
    {
        question: "Comment un monopoleur détermine-t-il son niveau de production optimal ?",
        options: [
            "En produisant jusqu'à ce que le prix égale le coût moyen",
            "En produisant jusqu'à ce que le coût marginal égale le revenu marginal",
            "En produisant jusqu'à ce que le profit soit nul",
            "En produisant jusqu'à ce que l'élasticité de la demande soit égale à 1"
        ],
        correct: 1,
        explanation: "Un monopoleur maximise son profit en produisant la quantité pour laquelle le revenu marginal égale le coût marginal, puis en fixant le prix correspondant à cette quantité sur la courbe de demande."
    },
    {
        question: "Quelle structure de marché combine un grand nombre d'entreprises avec des produits différenciés ?",
        options: [
            "Concurrence parfaite",
            "Monopole",
            "Oligopole",
            "Concurrence monopolistique"
        ],
        correct: 3,
        explanation: "La concurrence monopolistique se caractérise par un grand nombre d'entreprises offrant des produits différenciés, ce qui donne à chaque entreprise un certain pouvoir de marché sur sa niche."
    },
    
    // SECTION 6: Externalités et biens publics
    {
        question: "Qu'est-ce qu'une externalité négative ?",
        options: [
            "Un effet bénéfique de l'activité économique sur des tiers sans compensation",
            "Un effet néfaste de l'activité économique sur des tiers sans compensation",
            "Une diminution du prix d'un bien suite à une innovation",
            "Une perte de profit due à l'entrée de nouveaux concurrents"
        ],
        correct: 1,
        explanation: "Une externalité négative est un coût imposé à des tiers qui n'est pas pris en compte dans les décisions de production ou de consommation. La pollution est un exemple classique d'externalité négative."
    },
    {
        question: "Selon le théorème de Coase, quelle condition est nécessaire pour résoudre efficacement les externalités par la négociation privée ?",
        options: [
            "L'intervention de l'État",
            "Des droits de propriété bien définis et des coûts de transaction faibles",
            "Une taxe pigouvienne",
            "Une réglementation stricte des niveaux de pollution"
        ],
        correct: 1,
        explanation: "Le théorème de Coase stipule que si les droits de propriété sont bien définis et que les coûts de transaction sont faibles, les agents économiques peuvent négocier entre eux pour atteindre une allocation efficace des ressources, indépendamment de l'attribution initiale des droits de propriété."
    },
    {
        question: "Quelles sont les deux caractéristiques définissant un bien public pur ?",
        options: [
            "Rivalité et exclusivité",
            "Non-rivalité et exclusivité",
            "Rivalité et non-exclusivité",
            "Non-rivalité et non-exclusivité"
        ],
        correct: 3,
        explanation: "Un bien public pur est caractérisé par la non-rivalité (la consommation par une personne n'empêche pas la consommation par d'autres) et la non-exclusivité (il est difficile ou impossible d'empêcher quiconque de consommer le bien)."
    },
    {
        question: "Quel problème est associé aux ressources communes ?",
        options: [
            "Le paradoxe de l'épargne",
            "L'asymétrie d'information",
            "La tragédie des communs",
            "L'aléa moral"
        ],
        correct: 2,
        explanation: "La tragédie des communs décrit une situation où des individus, agissant indépendamment selon leur propre intérêt, épuisent une ressource commune limitée, contrairement à l'intérêt du groupe dans son ensemble."
    }
]; 