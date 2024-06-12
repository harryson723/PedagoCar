import data from "../activities/saltar/saltar.json";
import { ActivityType } from "./types";

async function fetchDataAndSearchById(id: string, category: string) {
  try {
    const data = await import(`../activities/${category}/saltar.json`);
    const dataMap = new Map(data.default.map((item: any) => [item.id, item]));
    const result = dataMap.get(id);
    return result ? result : `Item with id ${id} not found.`;
  } catch (error: any) {
    return `Failed to load data for category ${category}: ${error.message}`;
  }
}

function fetchAllData() {
  return data;
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

export {
  fetchDataAndSearchById,
  fetchAllData,
  fetchDataAndSearchByKeyword,
};
