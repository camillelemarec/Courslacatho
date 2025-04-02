const questions = [
    // SECTION 1: Structure de l'interface RStudio
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
    {
        question: "Dans quelle zone de RStudio pouvez-vous voir l'historique des commandes précédemment exécutées ?",
        options: [
            "Zone Console (en bas à gauche)",
            "Zone Script (en haut à gauche)",
            "Zone Environnement (en haut à droite)",
            "Zone Historique (onglet dans la partie en haut à droite)"
        ],
        correct: 3,
        explanation: "L'historique des commandes est accessible dans l'onglet 'History' (Historique) situé généralement dans le quadrant supérieur droit de RStudio, à côté de l'onglet 'Environment'."
    },
    
    // SECTION 2: Commandes de base
    {
        question: "Quelle est la commande pour créer un vecteur en R ?",
        options: [
            "vector()",
            "c()",
            "array()",
            "list()"
        ],
        correct: 1,
        explanation: "La fonction c() (pour 'combine' ou 'concatenate') est utilisée pour créer des vecteurs en R."
    },
    {
        question: "Comment installer un package en R ?",
        options: [
            "install.packages('nom_du_package')",
            "library(nom_du_package)",
            "require(nom_du_package)",
            "download.packages('nom_du_package')"
        ],
        correct: 0,
        explanation: "install.packages() est la fonction principale pour installer des packages en R depuis CRAN."
    },
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
    
    // SECTION 3: Manipulation de données
    {
        question: "Quelle fonction permet de lire un fichier CSV en R ?",
        options: [
            "read.table()",
            "read.csv()",
            "import.csv()",
            "load.csv()"
        ],
        correct: 1,
        explanation: "read.csv() est la fonction standard pour lire des fichiers CSV en R. C'est un cas particulier de read.table() avec des paramètres adaptés au format CSV."
    },
    {
        question: "Comment créer un data frame en R ?",
        options: [
            "dataframe()",
            "as.data.frame()",
            "data.frame()",
            "create.df()"
        ],
        correct: 2,
        explanation: "data.frame() est la fonction utilisée pour créer un data frame en R, qui est une structure de données tabulaire."
    },
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
    
    // SECTION 4: Statistiques descriptives
    {
        question: "Quelle fonction permet de calculer la moyenne en R ?",
        options: [
            "average()",
            "mean()",
            "median()",
            "sum()/length()"
        ],
        correct: 1,
        explanation: "mean() est la fonction standard pour calculer la moyenne arithmétique en R."
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
    {
        question: "Quel code permet de calculer correctement la médiane de la variable 'salaire' en ignorant les valeurs manquantes ?",
        options: [
            "médiane(df$salaire)",
            "median(df$salaire)",
            "median(df$salaire, na.rm = TRUE)",
            "mean(df$salaire, type = 'median')"
        ],
        correct: 2,
        explanation: "La fonction correcte est median() et le paramètre na.rm = TRUE permet d'ignorer les valeurs manquantes."
    },
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
    
    // SECTION 5: Visualisation de données
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
        question: "Quel code permet de créer un boxplot comparant la distribution d'une variable numérique 'taille' selon les groupes définis par la variable catégorielle 'sexe' ?",
        options: [
            "plot(df$taille ~ df$sexe)",
            "boxplot(df$taille ~ df$sexe)",
            "hist(df$taille, groups = df$sexe)",
            "barplot(df$taille, df$sexe)"
        ],
        correct: 1,
        explanation: "Le code boxplot(df$taille ~ df$sexe) utilise la formule avec ~ pour créer des boîtes à moustaches par groupe."
    },
    
    // SECTION 6: Tableaux et dénombrement
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
    
    // SECTION 7: Gestion des erreurs courantes
    {
        question: "Quelle erreur se trouve dans ce code ? villes = [\"Paris\", \"Lyon\", \"Marseille\"]",
        options: [
            "Les crochets [ ] ne sont pas utilisés pour créer des vecteurs",
            "Il manque une virgule après Marseille",
            "Le signe = devrait être <-",
            "Il manque des guillemets autour des noms de villes"
        ],
        correct: 0,
        explanation: "En R, on crée des vecteurs avec la fonction c() et non avec des crochets [ ]. Le code correct est villes <- c(\"Paris\", \"Lyon\", \"Marseille\")."
    },
    {
        question: "Quelle est l'erreur dans ce code ? setwd(C:/Users/Documents)",
        options: [
            "Le chemin doit être entre guillemets",
            "setwd s'écrit en majuscules SETWD",
            "Il manque une virgule après le chemin",
            "Il faut utiliser getwd() et non setwd()"
        ],
        correct: 0,
        explanation: "Les chemins de fichiers doivent toujours être entre guillemets. Le code correct est setwd(\"C:/Users/Documents\")."
    },
    {
        question: "Quelle est l'erreur dans ce code d'importation ? data <- read.csv2(fichier.csv, sep=\";\", dec=\",\")",
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
        question: "Quelle est l'erreur dans ce code pour calculer la moyenne des âges ? data$age = mean(data$age)",
        options: [
            "La syntaxe de l'opérateur d'affectation est incorrecte",
            "Cette ligne remplace toutes les valeurs par la moyenne (erreur conceptuelle)",
            "Il manque des parenthèses",
            "L'objet data n'existe pas"
        ],
        correct: 1,
        explanation: "Ce code remplace chaque valeur de la colonne âge par la moyenne, ce qui fait perdre toutes les données individuelles. Pour calculer la moyenne sans modifier les données, il faudrait créer une nouvelle variable."
    }
]; 