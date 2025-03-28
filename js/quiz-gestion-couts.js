const questions = [
    {
        question: "Quelle est la formule du résultat avant impôts ?",
        options: [
            "Chiffre d'affaires - Coûts variables",
            "Chiffre d'affaires - Coûts fixes",
            "Chiffre d'affaires - Coûts totaux",
            "Marge sur coûts variables - Coûts fixes"
        ],
        correct: 3,
        explanation: "Le résultat avant impôts correspond à la marge sur coûts variables à laquelle on soustrait les coûts fixes. Il permet de déterminer la performance de l'entreprise avant d'intégrer les obligations fiscales."
    },
    {
        question: "La marge sur coûts d'activité est égale à :",
        options: [
            "Chiffre d'affaires - Coûts variables",
            "Chiffre d'affaires - Coûts fixes",
            "Chiffre d'affaires - Coûts totaux",
            "Coûts fixes - Coûts variables"
        ],
        correct: 0,
        explanation: "La marge sur coûts d'activité, aussi appelée marge sur coûts variables, est la différence entre le chiffre d'affaires et les coûts variables. Elle permet de mesurer la contribution de l'activité à la couverture des coûts fixes."
    },
    {
        question: "Le taux de marge sur coûts variables est calculé par :",
        options: [
            "(Marge sur coûts variables / Chiffre d'affaires) * 100",
            "(Coûts variables / Chiffre d'affaires) * 100",
            "(Chiffre d'affaires / Coûts fixes) * 100",
            "(Chiffre d'affaires - Coûts fixes) / Coûts variables"
        ],
        correct: 0,
        explanation: "Ce taux indique la proportion du chiffre d'affaires qui reste disponible après le paiement des coûts variables. Il est essentiel pour évaluer la rentabilité d'une activité."
    },
    {
        question: "Le seuil de rentabilité est atteint lorsque :",
        options: [
            "Le chiffre d'affaires couvre les coûts fixes",
            "Le chiffre d'affaires couvre les coûts variables",
            "La marge sur coûts variables est négative",
            "Les bénéfices sont maximaux"
        ],
        correct: 0,
        explanation: "Le seuil de rentabilité correspond au niveau de chiffre d'affaires à partir duquel l'entreprise ne réalise ni perte ni profit. Il est obtenu lorsque la marge sur coûts variables couvre les coûts fixes."
    },
    {
        question: "La date d'équilibre correspond à :",
        options: [
            "La date où l'entreprise atteint son seuil de rentabilité",
            "La date où l'entreprise devient déficitaire",
            "La date de fin de l'exercice comptable",
            "La date du premier bénéfice réalisé"
        ],
        correct: 0,
        explanation: "Cette date correspond au moment précis où l'entreprise génère un chiffre d'affaires suffisant pour couvrir l'ensemble de ses charges. Avant cette date, l'entreprise est en perte, et après, elle commence à réaliser des profits."
    },
    {
        question: "Quels sont les principaux types de coûts en gestion comptable ?",
        options: [
            "Coûts fixes et coûts variables",
            "Coûts directs et coûts indirects",
            "Coûts opérationnels et coûts d'opportunité",
            "Toutes les réponses ci-dessus"
        ],
        correct: 3,
        explanation: "Les coûts en gestion comptable peuvent être classés de différentes manières, notamment en coûts fixes/variables, directs/indirects ou encore en coûts d'opportunité."
    },
    {
        question: "Comment calcule-t-on le seuil de rentabilité en volume ?",
        options: [
            "Coûts fixes / Marge sur coûts variables unitaire",
            "Chiffre d'affaires / Coûts variables",
            "Coûts fixes + Coûts variables",
            "(Chiffre d'affaires - Coûts fixes) * 100"
        ],
        correct: 0,
        explanation: "Le seuil de rentabilité en volume indique la quantité de produits ou services à vendre pour couvrir tous les coûts fixes."
    },
    {
        question: "Qu'est-ce qu'un coût variable ?",
        options: [
            "Un coût qui reste constant quelle que soit la production",
            "Un coût qui varie en fonction de la production",
            "Un coût qui varie dans le temps",
            "Un coût qui dépend du prix de vente"
        ],
        correct: 1,
        explanation: "Un coût variable est un coût qui évolue proportionnellement au volume de production (ex: matières premières)."
    },
    {
        question: "Quels éléments entrent dans le calcul du coût total ?",
        options: [
            "Coûts fixes uniquement",
            "Coûts variables uniquement",
            "Coûts fixes + Coûts variables",
            "Marge sur coûts variables"
        ],
        correct: 2,
        explanation: "Le coût total d'une entreprise correspond à la somme de ses coûts fixes et variables."
    },
    {
        question: "La rentabilité d'une entreprise est définie comme :",
        options: [
            "Son chiffre d'affaires uniquement",
            "Son bénéfice net rapporté aux capitaux investis",
            "Sa trésorerie disponible",
            "Sa capacité d'endettement"
        ],
        correct: 1,
        explanation: "La rentabilité d'une entreprise mesure sa capacité à générer des profits à partir des capitaux investis."
    },
    {
        question: "Une entreprise réalise un chiffre d'affaires de 20 000 €, des coûts variables de 12 000 € et des coûts fixes de 5 000 €. Quel est son résultat avant impôts ?",
        options: [
            "3 000 €",
            "8 000 €",
            "5 000 €",
            "2 000 €"
        ],
        correct: 0,
        explanation: "Résultat avant impôts = Marge sur coûts variables - Coûts fixes = (20 000 - 12 000) - 5 000 = 3 000 €."
    },
    {
        question: "Une entreprise a un chiffre d'affaires de 15 000 € et un taux de marge sur coûts variables de 40 %. Quelle est sa marge sur coûts variables ?",
        options: [
            "6 000 €",
            "7 500 €",
            "9 000 €",
            "4 500 €"
        ],
        correct: 0,
        explanation: "Marge sur coûts variables = (Taux de marge sur coûts variables * Chiffre d'affaires) = 0,40 * 15 000 = 6 000 €."
    },
    {
        question: "Quelle est la différence principale entre la méthode des coûts complets et la méthode du direct costing ?",
        options: [
            "La méthode des coûts complets prend en compte uniquement les coûts fixes",
            "La méthode du direct costing considère uniquement les coûts variables",
            "La méthode des coûts complets répartit les coûts fixes sur les produits, tandis que le direct costing les considère comme des charges de période",
            "Aucune différence significative entre les deux méthodes"
        ],
        correct: 2,
        explanation: "Le direct costing facilite la prise de décision en court terme en analysant la marge sur coûts variables, tandis que la méthode des coûts complets répartit tous les coûts pour obtenir un coût total par unité."
    },
    {
        question: "Dans la méthode des centres d'analyse, comment répartit-on les charges indirectes ?",
        options: [
            "On les affecte directement aux produits",
            "On les regroupe dans des centres auxiliaires uniquement",
            "On les répartit dans des centres principaux et auxiliaires avant de les imputer aux produits",
            "On les considère uniquement comme des charges fixes"
        ],
        correct: 2,
        explanation: "Cette méthode permet une allocation plus précise des charges indirectes en les ventilant entre plusieurs centres avant imputation."
    },
    {
        question: "Quelle est la formule du seuil de rentabilité en valeur ?",
        options: [
            "Coûts fixes / Taux de marge sur coûts variables",
            "Chiffre d'affaires / Coûts variables",
            "Coûts fixes + Coûts variables",
            "Marge sur coûts variables – Coûts fixes"
        ],
        correct: 0,
        explanation: "Cette formule permet de déterminer le chiffre d'affaires minimum à atteindre pour couvrir l'ensemble des charges fixes et ne réaliser ni perte ni bénéfice."
    },
    {
        question: "Un produit coûte 50 € à fabriquer, et l'entreprise applique un taux de marge de 30 %. Quel est son prix de vente ?",
        options: [
            "50 €",
            "65 €",
            "70 €",
            "80 €"
        ],
        correct: 1,
        explanation: "Prix de vente = Coût de fabrication * (1 + Taux de marge) = 50 * 1,30 = 65 €."
    },
    {
        question: "Que permet d'analyser la méthode du coût cible (target costing) ?",
        options: [
            "La performance d'un produit après sa mise en marché",
            "La rentabilité d'un produit après la phase de production",
            "La maîtrise des coûts dès la conception du produit pour garantir sa rentabilité",
            "L'évolution des charges fixes d'une entreprise sur 5 ans"
        ],
        correct: 2,
        explanation: "Cette approche inverse la logique traditionnelle en partant du prix de vente cible pour déterminer le coût maximum admissible."
    },
    {
        question: "Une entreprise possède deux centres principaux et un centre auxiliaire. Comment répartir les charges du centre auxiliaire ?",
        options: [
            "Directement sur les produits",
            "Proportionnellement entre les deux centres principaux",
            "Seulement sur un des centres principaux",
            "Elles ne sont pas réparties, elles restent fixes"
        ],
        correct: 1,
        explanation: "Les centres auxiliaires servent les centres principaux, et leurs charges doivent être redistribuées avant d'être affectées aux produits."
    },
    {
        question: "Quelle est la finalité principale de l'analyse des écarts en comptabilité de gestion ?",
        options: [
            "Justifier les performances d'une entreprise auprès des actionnaires",
            "Identifier les différences entre coûts prévus et coûts réels pour ajuster la gestion",
            "Calculer uniquement la rentabilité annuelle d'une entreprise",
            "Ajuster les prix de vente automatiquement"
        ],
        correct: 1,
        explanation: "L'analyse des écarts permet d'améliorer le contrôle des coûts en comparant les valeurs budgétées et réelles."
    },
    {
        question: "Quelle est l'unité d'œuvre la plus pertinente pour un atelier de production fortement mécanisé ?",
        options: [
            "Heures de main-d'œuvre directe",
            "Nombre d'unités produites",
            "Heures machine",
            "Surface occupée"
        ],
        correct: 2,
        explanation: "Lorsque la production repose majoritairement sur des machines, le temps d'utilisation des machines est un indicateur clé des coûts."
    },
    {
        question: "Une entreprise a des charges fixes de 20 000 € et un taux de marge sur coûts variables de 40 %. Quel chiffre d'affaires doit-elle réaliser pour atteindre son seuil de rentabilité ?",
        options: [
            "40 000 €",
            "50 000 €",
            "30 000 €",
            "20 000 €"
        ],
        correct: 1,
        explanation: "Seuil de rentabilité = Charges fixes / Taux de marge sur coûts variables = 20 000 / 0,40 = 50 000 €."
    },
    {
        question: "Comment calcule-t-on le coût moyen ?",
        options: [
            "Coût total / Quantité produite",
            "Coût fixe + Coût variable",
            "Coût variable / Quantité produite",
            "Coût fixe / Quantité produite"
        ],
        correct: 0,
        explanation: "Le coût moyen est le coût total divisé par la quantité produite. Il représente le coût unitaire de production."
    },
    {
        question: "Qu'est-ce que le seuil de rentabilité ?",
        options: [
            "Le niveau de production où le profit est maximal",
            "Le niveau de production où les coûts sont minimaux",
            "Le niveau de production où les recettes égalent les coûts",
            "Le niveau de production où les coûts fixes sont couverts"
        ],
        correct: 2,
        explanation: "Le seuil de rentabilité est le niveau d'activité pour lequel les recettes totales égalent les coûts totaux (point mort)."
    },
    {
        question: "Comment calcule-t-on la marge sur coût variable ?",
        options: [
            "Prix de vente - Coût total",
            "Prix de vente - Coût variable",
            "Prix de vente - Coût fixe",
            "Coût total - Coût variable"
        ],
        correct: 1,
        explanation: "La marge sur coût variable est la différence entre le prix de vente et le coût variable unitaire."
    },
    {
        question: "Qu'est-ce que le coût marginal ?",
        options: [
            "Le coût moyen de la dernière unité produite",
            "Le coût variable de la dernière unité produite",
            "Le coût supplémentaire pour produire une unité de plus",
            "Le coût fixe divisé par la quantité produite"
        ],
        correct: 2,
        explanation: "Le coût marginal est le coût supplémentaire engendré par la production d'une unité supplémentaire."
    }
]; 