import { applyMigrations } from './migrations';
import { initURLSubscription, loadState, updateCodeStore } from './state';

export const loadStateFromURL = (): void => {
  loadState(window.location.hash.slice(1));
};

export const syncDiagram = (): void => {
  updateCodeStore({
    updateDiagram: true
  });
};

export const initHandler = (): void => {
  applyMigrations();
  loadStateFromURL();
  syncDiagram();
  initURLSubscription();
};

export const isMac = navigator.platform.toUpperCase().includes('MAC');
export const cmdKey = isMac ? 'Cmd' : 'Ctrl';

let count = 0;
export const errorDebug = (limit = 1000) => {
  count += 1;
  if (count > limit) {
    console.log(count, limit);
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

export const formatJSON = (data: unknown): string => JSON.stringify(data, undefined, 2);
export const fetchJSON = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return res.json() as T;
};
export const fetchText = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return res.text();
};
