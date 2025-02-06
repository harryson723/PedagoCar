import activities from "../activities/saltar/saltar.json";
import { ActivityType } from "./types";

async function fetchDataAndSearchById(id: string, category: string) {
  try {
    const data = await import(`../activities/saltar/saltar.json`);
    const dataMap = new Map(data.default.map((item: any) => [item.id, item]));
    const result = dataMap.get(id);
    return result ? result : `Item with id ${id} not found.`;
  } catch (error: any) {
    return `Failed to load data for category ${category}: ${error.message}`;
  }
}

function fetchAllData() {
  return activities;
}

async function fetchDataAndSearchByKeyword(keyword: string) {
  try {
    const data = await import(`../activities/saltar/saltar.json`);
    const activities: ActivityType[] = data.default;

    const result = activities.filter(activity => {
      return Object.values(activity).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(keyword.toLowerCase());
        } else if (Array.isArray(value)) {
          return value.some(item => {
            if (typeof item === 'string') {
              return item.toLowerCase().includes(keyword.toLowerCase());
            } else if (typeof item === 'object') {
              return Object.values(item).some(subValue =>
                typeof subValue === 'string' && subValue.toLowerCase().includes(keyword.toLowerCase())
              );
            }
            return false;
          });
        }
        return false;
      });
    });

    return result.length > 0 ? result : `No items found containing "${keyword}".`;
  } catch (error: any) {
    return `Failed to load data for category: ${error.message}`;
  }
}

// Definición de los tipos
interface UserData {
  category: string;
  id: string;
}

function saveUserData(data: UserData) {
  let jsonData: UserData[] = [];

  // Leer los datos existentes de localStorage
  const fileData = localStorage.getItem('userData');
  if (fileData) {
      try {
          jsonData = JSON.parse(fileData) as UserData[];
      } catch (err) {
          console.error('Error parsing JSON:', err);
      }
  }

  // Agregar los nuevos datos
  jsonData.push(data);

  // Guardar los datos actualizados en localStorage
  localStorage.setItem('userData', JSON.stringify(jsonData));
  console.log('Data saved successfully');
}

function getUserData(): UserData[] {
  const fileData = localStorage.getItem('userData');
  if (fileData) {
      try {
          return JSON.parse(fileData) as UserData[];
      } catch (err) {
          console.error('Error parsing JSON:', err);
          return [];
      }
  }
  return [];
}

function generateSuggestions(): ActivityType[] {
  const interactions = getUserData();
  const categoryCount: { [key: string]: number } = {};
  const keywordCount: { [key: string]: number } = {};

  // Contar las interacciones por categoría y palabras clave
  interactions.forEach(interaction => {
      // Contar categorías
      if (categoryCount[interaction.category]) {
          categoryCount[interaction.category]++;
      } else {
          categoryCount[interaction.category] = 1;
      }

      // Contar palabras clave
      const activity = activities.find(a => a.id === interaction.id);
      if (activity) {
          const keywords = activity.keywords.split(', ');
          keywords.forEach(keyword => {
              if (keywordCount[keyword]) {
                  keywordCount[keyword]++;
              } else {
                  keywordCount[keyword] = 1;
              }
          });
      }
  });

  // Encontrar la categoría más frecuente
  const mostFrequentCategory = Object.keys(categoryCount).reduce((a, b) => categoryCount[a] > categoryCount[b] ? a : b, "");

  // Encontrar las palabras clave más frecuentes
  const mostFrequentKeywords = Object.keys(keywordCount).sort((a, b) => keywordCount[b] - keywordCount[a]).slice(0, 3);

  // Generar sugerencias basadas en la categoría y palabras clave más frecuentes
  const suggestions = activities.filter(activity =>
      (activity.category === mostFrequentCategory && mostFrequentKeywords.some(keyword => activity.keywords.includes(keyword)))
  );

  return suggestions;
}


export {
  fetchDataAndSearchById,
  fetchAllData,
  fetchDataAndSearchByKeyword,
  saveUserData,
  getUserData,
  generateSuggestions
};
