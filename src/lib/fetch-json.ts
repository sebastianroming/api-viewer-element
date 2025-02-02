import { ElementInfo, ElementSetInfo } from './types.js';

export const fetchJson = async (src: string): Promise<ElementInfo[]> => {
  let result: ElementInfo[] = [];
  try {
    const file = await fetch(src);
    const json = (await file.json()) as ElementSetInfo;
    if (Array.isArray(json.tags) && json.tags.length) {
      result = json.tags;
    } else {
      console.error(`No element definitions found at ${src}`);
    }
  } catch (e) {
    console.error(e);
  }
  return result;
};
