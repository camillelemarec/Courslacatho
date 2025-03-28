const questions = [
    {
        question: "Quelle est la formule de la moyenne arithmétique ?",
        options: [
            "∑x/n",
            "∑(x-μ)²/n",
            "∑(x-μ)/n",
            "∑x²/n"
        ],
        correct: 0,
        explanation: "La moyenne arithmétique est la somme des valeurs divisée par le nombre d'observations (∑x/n)."
    },
    {
        question: "Qu'est-ce que la médiane ?",
        options: [
            "La valeur qui apparaît le plus souvent",
            "La valeur centrale quand les données sont ordonnées",
            "La moyenne des valeurs extrêmes",
            "La racine carrée de la variance"
        ],
        correct: 1,
        explanation: "La médiane est la valeur qui sépare la série ordonnée en deux parties égales."
    },
    {
        question: "Comment calcule-t-on la variance ?",
        options: [
            "∑(x-μ)/n",
            "∑(x-μ)²",
            "∑(x-μ)²/n",
            "√(∑(x-μ)²/n)"
        ],
        correct: 2,
        explanation: "La variance est la moyenne des carrés des écarts à la moyenne : ∑(x-μ)²/n"
    },
    {
        question: "Quelle est la relation entre l'écart-type et la variance ?",
        options: [
            "L'écart-type est le carré de la variance",
            "L'écart-type est la racine carrée de la variance",
            "L'écart-type est la moitié de la variance",
            "L'écart-type est le double de la variance"
        ],
        correct: 1,
        explanation: "L'écart-type (σ) est la racine carrée de la variance : σ = √(variance)"
    },
    {
        question: "Qu'est-ce que le mode ?",
        options: [
            "La valeur la plus grande",
            "La valeur la plus petite",
            "La valeur qui apparaît le plus souvent",
            "La valeur centrale"
        ],
        correct: 2,
        explanation: "Le mode est la valeur qui apparaît le plus fréquemment dans une série statistique."
    }
]; 