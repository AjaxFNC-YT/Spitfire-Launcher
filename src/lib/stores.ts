import { writable } from 'svelte/store';
import type { AccountData } from '$types/accounts';
import { browser } from '$app/environment';
import type { ParsedWorldInfo } from '$types/game/stw/worldInfo';
import type { EpicOAuthData } from '$types/game/authorizations';

type Theme = 'light' | 'dark';

const defaultTheme: Theme = 'dark';
export const theme = writable(getTheme());

function getTheme() {
  if (!browser) return defaultTheme;

  const storedTheme = localStorage.getItem('theme') as Theme;
  const theme = storedTheme || defaultTheme;
  const rootClasslist = document.documentElement.classList;

  rootClasslist.remove('light', 'dark');
  rootClasslist.add(theme);

  return theme;
}

theme.subscribe((theme) => {
  if (!browser) return;

  localStorage.setItem('theme', theme);

  const rootClasslist = document.documentElement.classList;
  rootClasslist.remove('light', 'dark');

  rootClasslist.add(theme);
});

export const activeAccountId = writable<string | null>();

export const accountsStore = writable<{
  activeAccount: AccountData | null,
  allAccounts: AccountData[]
}>({
  activeAccount: null,
  allAccounts: []
});

activeAccountId.subscribe((activeAccountId) => {
  accountsStore.update((store) => {
    const activeAccount = store.allAccounts.find((account) => account.accountId === activeAccountId) || null;

    return {
      ...store,
      activeAccount
    };
  });
});

export const accessTokenCache = writable<Record<string, EpicOAuthData>>();

export const worldInfoCache = writable<ParsedWorldInfo>();

// To avoid redirecting the user to the home page in bulk operations if there is a credential error
export const doingBulkOperations = writable<boolean>(false);