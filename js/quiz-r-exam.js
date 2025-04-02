const questions = [
    // SECTION 1: Structure de l'interface
    {
        question: "Dans quelle zone de RStudio peut-on installer et charger des packages ?",
        options: [
            "Zone 1 (haut gauche)",
            "Zone 2 (bas gauche)",
            "Zone 3 (haut droit)",
            "Zone 4 (bas droit)"
        ],
        correct: 3,
        explanation: "Les packages s'installent et se chargent depuis l'onglet 'Packages' situé dans la zone 4 (bas droit) de RStudio."
    },
    {
        question: "Quelle zone de RStudio correspond à l'éditeur de script ?",
        options: [
            "Zone 1 (haut gauche)",
            "Zone 2 (bas gauche)",
            "Zone 3 (haut droit)",
            "Zone 4 (bas droit)"
        ],
        correct: 0,
        explanation: "L'éditeur de script se trouve dans la zone 1 (haut gauche) de RStudio. C'est là que vous écrivez et modifiez votre code R."
    },
    
    // SECTION 2: Commandes de base
    {
        question: "Quelle commande permet de supprimer tous les objets de l'environnement ?",
        options: [
            "clear(all)",
            "rm(all=TRUE)",
            "rm(list=ls())",
            "delete.all()"
        ],
        correct: 2,
        explanation: "La commande rm(list=ls()) supprime tous les objets présents dans l'environnement."
    },
    {
        question: "Quelle erreur se trouve dans ce code ? setwd(C:/Users/Documents)",
        options: [
            "Le chemin doit être entre guillemets",
            "setwd s'écrit en majuscules SETWD",
            "Il manque une virgule après le chemin",
            "Il faut utiliser getwd() et non setwd()"
        ],
        correct: 0,
        explanation: "Les chemins de fichiers doivent toujours être entre guillemets. Le code correct est setwd(\"C:/Users/Documents\")."
    },
    
    // SECTION 3: Vecteurs et indexation
    {
        question: "Quel résultat renvoie ce code ? x <- c(2, 4, 6, 8, 10); x[x > 5]",
        options: [
            "Un vecteur contenant 2, 4",
            "Un vecteur contenant 6, 8, 10",
            "Un vecteur vide",
            "Une erreur car la syntaxe est incorrecte"
        ],
        correct: 1,
        explanation: "L'expression x[x > 5] sélectionne les éléments de x qui sont strictement supérieurs à 5, donc 6, 8 et 10."
    },
    {
        question: "Quelle erreur contient ce code ? villes = [\"Paris\", \"Lyon\", \"Marseille\"]",
        options: [
            "Les crochets [ ] ne sont pas utilisés pour créer des vecteurs",
            "Il manque une virgule après Marseille",
            "Le signe = devrait être <-",
            "Il manque des guillemets autour des noms de villes"
        ],
        correct: 0,
        explanation: "En R, on crée des vecteurs avec la fonction c() et non avec des crochets [ ]. Le code correct est villes <- c(\"Paris\", \"Lyon\", \"Marseille\")."
    },
    
    // SECTION 4: Data frames
    {
        question: "Comment accéder à la 3ème ligne et à la 2ème colonne d'un data frame nommé 'df' ?",
        options: [
            "df$3,2",
            "df[3,2]",
            "df[2,3]",
            "df(3)(2)"
        ],
        correct: 1,
        explanation: "Pour accéder à un élément d'un data frame, on utilise la syntaxe dataframe[ligne, colonne]. Ici df[3,2] accède à la 3ème ligne et 2ème colonne."
    },
    {
        question: "Pour sélectionner uniquement les femmes (F) dans un data frame 'personnes' ayant une colonne 'sexe', quelle syntaxe utiliser ?",
        options: [
            "personnes[personnes$sexe == \"F\", ]",
            "personnes$sexe == \"F\"",
            "personnes[, personnes$sexe == \"F\"]",
            "subset(personnes, sexe = \"F\")"
        ],
        correct: 0,
        explanation: "La syntaxe personnes[personnes$sexe == \"F\", ] filtre le data frame pour ne garder que les lignes où la colonne sexe a la valeur \"F\"."
    },
    
    // SECTION 5: Importation de données
    {
        question: "Quelle erreur se trouve dans ce code d'importation ? data <- read.csv2(fichier.csv, sep=\";\", dec=\",\")",
        options: [
            "Le nom du fichier doit être entre guillemets",
            "read.csv2 n'existe pas, il faut utiliser read.csv",
            "Les paramètres sep et dec sont inversés",
            "Il manque une parenthèse fermante"
        ],
        correct: 0,
        explanation: "Le nom du fichier doit être entre guillemets. Le code correct est data <- read.csv2(\"fichier.csv\", sep=\";\", dec=\",\")."
    },
    {
        question: "Quel paramètre n'est PAS un paramètre standard de la fonction read.csv() ?",
        options: [
            "header",
            "sep",
            "rows",
            "dec"
        ],
        correct: 2,
        explanation: "Le paramètre 'rows' n'existe pas dans la fonction read.csv(). Les paramètres standards sont header, sep, dec, etc."
    },
    
    // SECTION 6: Statistiques
    {
        question: "Quelle fonction calcule l'écart-type d'un vecteur numérique ?",
        options: [
            "std()",
            "sd()",
            "stdev()",
            "deviation()"
        ],
        correct: 1,
        explanation: "La fonction sd() (standard deviation) calcule l'écart-type d'un vecteur numérique."
    },
    {
        question: "Pour calculer la moyenne d'une colonne 'taille' d'un data frame 'df' en ignorant les valeurs manquantes (NA), quelle syntaxe utiliser ?",
        options: [
            "mean(df$taille)",
            "mean(df$taille, na.rm = TRUE)",
            "mean(df$taille, ignore.na = TRUE)",
            "average(df$taille, na.rm = TRUE)"
        ],
        correct: 1,
        explanation: "La fonction mean() avec le paramètre na.rm = TRUE calcule la moyenne en ignorant les valeurs NA."
    },
    
    // SECTION 7: Tableaux et dénombrement
    {
        question: "Pour créer un tableau de contingence entre deux variables qualitatives 'sexe' et 'fumeur' d'un data frame 'df', quelle fonction utiliser ?",
        options: [
            "crosstab(df$sexe, df$fumeur)",
            "contingency(df$sexe, df$fumeur)",
            "table(df$sexe, df$fumeur)",
            "count(df$sexe, df$fumeur)"
        ],
        correct: 2,
        explanation: "La fonction table() crée un tableau de contingence (ou tableau croisé) entre deux variables qualitatives."
    },
    {
        question: "Pour calculer les proportions par ligne d'un tableau croisé 'tab', quelle syntaxe utiliser ?",
        options: [
            "prop.table(tab)",
            "prop.table(tab, margin = 1)",
            "prop.table(tab, margin = 2)",
            "percent(tab, by = \"row\")"
        ],
        correct: 1,
        explanation: "La fonction prop.table() avec margin = 1 calcule les proportions par ligne. margin = 2 serait pour les proportions par colonne."
    },
    
    // SECTION 8: Manipulations diverses
    {
        question: "Pour arrondir le nombre 3.14159 à deux décimales, quelle syntaxe utiliser ?",
        options: [
            "round(3.14159, 2)",
            "round(3.14159, digits = 2)",
            "Les deux propositions précédentes sont correctes",
            "format(3.14159, decimals = 2)"
        ],
        correct: 2,
        explanation: "Les deux premières syntaxes sont équivalentes et correctes : round(3.14159, 2) et round(3.14159, digits = 2)."
    },
    {
        question: "Quelle erreur se trouve dans ce code ? cor(data$age, data£taille)",
        options: [
            "Le symbole £ devrait être $",
            "La fonction cor() requiert un data frame complet",
            "Il manque une virgule après data$age",
            "Il faut utiliser correlation() et non cor()"
        ],
        correct: 0,
        explanation: "Le symbole pour accéder à une colonne d'un data frame est $ et non £. Le code correct est cor(data$age, data$taille)."
    },
    
    // SECTION 9: Graphiques
    {
        question: "Pour créer un histogramme d'une variable 'age' d'un data frame 'df', quelle fonction utiliser ?",
        options: [
            "histogram(df$age)",
            "hist(df$age)",
            "bar(df$age)",
            "plot.hist(df$age)"
        ],
        correct: 1,
        explanation: "La fonction hist() crée un histogramme d'une variable numérique."
    },
    {
        question: "Pour créer un boxplot (boîte à moustaches) de la variable 'taille' selon la variable 'sexe', quelle syntaxe utiliser ?",
        options: [
            "boxplot(df$taille ~ df$sexe)",
            "boxplot(df$sexe ~ df$taille)",
            "box(taille ~ sexe, data = df)",
            "plot(df$taille, df$sexe, type = \"boxplot\")"
        ],
        correct: 0,
        explanation: "La syntaxe boxplot(variable_numérique ~ variable_de_groupe) crée un boxplot pour chaque modalité de la variable de groupe. Ici, boxplot(df$taille ~ df$sexe) affiche la distribution de la taille pour chaque sexe."
    },
    
    // SECTION 10: Questions synthétiques
    {
        question: "Quelle séquence d'actions permet d'obtenir la moyenne de la colonne 'prix' uniquement pour les produits de la catégorie 'A' ?",
        options: [
            "subset(data, categorie == 'A'); mean(data$prix)",
            "data_filtre <- data[data$categorie == 'A', ]; mean(data_filtre$prix)",
            "mean(data$prix[data$categorie == 'A'])",
            "Toutes les propositions sont correctes"
        ],
        correct: 3,
        explanation: "Les trois approches sont correctes et aboutissent au même résultat : calculer la moyenne des prix pour les produits de catégorie 'A'."
    },
    {
        question: "Pour une analyse complète d'un nouveau jeu de données, quel ordre d'opérations est le plus logique ?",
        options: [
            "Importation → Visualisation → Nettoyage → Analyse statistique",
            "Importation → Nettoyage → Visualisation → Analyse statistique",
            "Nettoyage → Importation → Visualisation → Analyse statistique",
            "Visualisation → Importation → Nettoyage → Analyse statistique"
        ],
        correct: 1,
        explanation: "L'ordre logique est d'abord d'importer les données, puis de les nettoyer (traiter les valeurs manquantes, corriger les erreurs), puis de les visualiser, et enfin de réaliser des analyses statistiques."
    }
]; 