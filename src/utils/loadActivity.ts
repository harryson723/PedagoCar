import data from "../activities/saltar/saltar.json";

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

export { fetchDataAndSearchById, fetchAllData };
