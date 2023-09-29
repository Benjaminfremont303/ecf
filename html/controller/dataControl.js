import { exporting } from '../javascript/changeQuant';

// Vous pouvez maintenant utiliser les tableaux tab et tab2 dans votre contrôleur
const dataUser = exporting();

// Vous pouvez maintenant utiliser l'objet dataUser dans votre contrôleur
console.log(dataUser.prices);
console.log(dataUser.quantities);

/* // Filtrer les valeurs de tab pour ne garder que les entiers
tab = tab.filter(value => Number.isInteger(value));

// Filtrer les valeurs de tab2 pour ne garder que les entiers
tab2 = tab2.filter(value => Number.isInteger(value));
 */