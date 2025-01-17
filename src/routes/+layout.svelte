<script lang="ts">
  import { base } from '$app/paths';
  import { toggleDarkTheme } from '$lib/util/state';
  import { setTheme, themeStore } from '$lib/util/theme';
  import { initHandler } from '$lib/util/util';
  import { onMount, type Snippet } from 'svelte';
  import '../app.postcss';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  // This can be removed once https://github.com/sveltejs/kit/issues/1612 is fixed.
  // Then move it into src and vite will bundle it automatically.
  onMount(() => {
    window.addEventListener('hashchange', () => {
      void initHandler();
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(`${base}/service-worker.js`, {
          scope: `${base}/`
        })
        .then(function (registration) {
          console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
          console.log('Service worker registration failed, error:', error);
        });
    }

    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if ($themeStore.theme === undefined) {
      setTheme(isDarkMode ? 'dark' : 'light');
    }

    themeStore.subscribe(({ theme, isDark }) => {
      if (theme) {
        document.querySelectorAll('html')[0].dataset.theme = theme;
        toggleDarkTheme(isDark);
      }
    });
  });
</script>

<main class="h-screen text-primary-content">
  {@render children?.()}
</main>

<style>
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
