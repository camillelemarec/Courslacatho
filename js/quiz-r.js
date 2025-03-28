const questions = [
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
        question: "Quelle est l'erreur dans ce code pour calculer la moyenne des âges ? data$age = mean(data$age)",
        options: [
            "La syntaxe de l'opérateur d'affectation est incorrecte",
            "Cette ligne remplace toutes les valeurs par la moyenne (erreur conceptuelle)",
            "Il manque des parenthèses",
            "L'objet data n'existe pas"
        ],
        correct: 1,
        explanation: "Ce code remplace chaque valeur de la colonne âge par la moyenne, ce qui fait perdre toutes les données individuelles. Pour calculer la moyenne sans modifier les données, il faudrait créer une nouvelle variable."
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
    {
        question: "Quelle est l'erreur dans ce code pour filtrer un dataframe ? results <- subset(df, Age > 20,)",
        options: [
            "La virgule à la fin est incorrecte",
            "Il manque le paramètre select",
            "La variable Age devrait être entre guillemets",
            "La fonction subset est obsolète"
        ],
        correct: 0,
        explanation: "La virgule à la fin est syntaxiquement incorrecte et provoquera une erreur. Le code correct serait subset(df, Age > 20)."
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
    {
        question: "Quelle fonction devriez-vous utiliser pour fusionner deux dataframes sur une colonne commune ?",
        options: [
            "join(df1, df2, by='id')",
            "merge(df1, df2, by='id')",
            "combine(df1, df2, match='id')",
            "rbind(df1, df2)"
        ],
        correct: 1,
        explanation: "La fonction merge() est utilisée pour fusionner des dataframes en fonction d'une ou plusieurs colonnes communes, similaire aux jointures SQL."
    },
    {
        question: "Quelle différence y a-t-il entre ces deux lignes de code ? 'is.na(x)' et 'x == NA'",
        options: [
            "Aucune différence, les deux renvoient TRUE",
            "is.na(x) renvoie TRUE, tandis que x == NA renvoie NA",
            "is.na(x) renvoie TRUE, tandis que x == NA renvoie FALSE",
            "Les deux renvoient FALSE car NA ne peut pas être comparé"
        ],
        correct: 1,
        explanation: "La valeur NA ne peut pas être comparée directement avec l'opérateur ==, car le résultat de toute comparaison avec NA est NA. La fonction is.na() est spécialement conçue pour tester si une valeur est NA."
    },
    {
        question: "Quel résultat obtiendrez-vous en exécutant ce code ? x <- c(1, 2, 3, 4, 5); x[x > 2]",
        options: [
            "TRUE TRUE TRUE",
            "3 4 5",
            "[1] 3 4 5",
            "Une erreur, car la syntaxe est incorrecte"
        ],
        correct: 2,
        explanation: "R permet d'utiliser des vecteurs logiques pour l'indexation. L'expression x > 2 crée un vecteur logique FALSE FALSE TRUE TRUE TRUE, et x[x > 2] renvoie les éléments de x correspondant aux positions TRUE."
    },
    {
        question: "Quelle est la meilleure façon de convertir un facteur en variable numérique ? x <- factor(c('1', '2', '3'))",
        options: [
            "as.numeric(x)",
            "as.numeric(as.character(x))",
            "strtoi(x)",
            "to.numeric(x)"
        ],
        correct: 1,
        explanation: "L'utilisation directe de as.numeric(x) sur un facteur retourne les codes numériques internes des niveaux, pas les valeurs numériques représentées par les étiquettes. Pour obtenir les valeurs numériques correctes, il faut d'abord convertir en caractères puis en nombres."
    },
    {
        question: "Comment pouvez-vous compter le nombre de valeurs manquantes dans un vecteur ? x <- c(1, NA, 3, NA, 5)",
        options: [
            "count(is.na(x))",
            "sum(x == NA)",
            "sum(is.na(x))",
            "length(x[is.na(x)])"
        ],
        correct: 2,
        explanation: "La fonction sum() appliquée à un vecteur logique compte le nombre de TRUE. Comme is.na(x) renvoie TRUE pour chaque valeur manquante, sum(is.na(x)) compte le nombre total de valeurs manquantes."
    },
    {
        question: "Que fait cette fonction ? f <- function(x) { if(is.null(x)) return(0); return(x^2) }",
        options: [
            "Elle calcule le carré de x, ou renvoie 0 si x est NULL",
            "Elle renvoie toujours 0, car elle vérifie si x est NULL",
            "Elle génère une erreur si x est NULL",
            "Elle retourne NULL si x est 0"
        ],
        correct: 0,
        explanation: "Cette fonction est un exemple de gestion defensive des entrées. Elle vérifie d'abord si l'argument est NULL et retourne 0 dans ce cas. Sinon, elle calcule et retourne le carré de x."
    },
    {
        question: "Quelle instruction manque dans ce code pour créer un graphique à barres ? ggplot(data, aes(x=categorie)) + ______",
        options: [
            "bar()",
            "geom_bar()",
            "barplot()",
            "plot(type='bar')"
        ],
        correct: 1,
        explanation: "Dans ggplot2, les graphiques sont construits par couches. Après avoir défini les données et les mappings esthétiques avec ggplot(), vous devez ajouter un 'geom' qui spécifie le type de visualisation - dans ce cas, geom_bar() pour un graphique à barres."
    }
]; 