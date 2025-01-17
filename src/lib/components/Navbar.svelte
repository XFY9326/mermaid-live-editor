<script lang="ts">
  // noinspection ES6UnusedImports
  import { version } from 'mermaid/package.json';
  import Theme from './Theme.svelte';

  let isMenuOpen = $state(false);
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="navbar z-50 bg-primary p-0 shadow-lg">
  <div class="mx-2 flex flex-1 gap-2 px-2">
    <a href="/"><img class="size-6" src="./favicon.svg" alt="Mermaid Live Editor" /></a>
    <div id="switcher" class="flex items-center justify-center gap-2 font-bold">
      <a href="/"> Mermaid Live Editor </a>
    </div>
  </div>

  <label
    for="menu-toggle"
    class={isMenuOpen ? 'hidden' : 'pointer-cursor fixed right-4 z-[1000] lg:hidden'}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>

  <!-- Cross SVG -->
  <label
    for="menu-toggle"
    class={isMenuOpen ? 'pointer-cursor fixed right-4 z-[1000] lg:hidden' : 'hidden'}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <title>Cross</title>
      <line x1="5" y1="5" x2="15" y2="15" stroke="white" stroke-width="2" />
      <line x1="5" y1="15" x2="15" y2="5" stroke="white" stroke-width="2" />
    </svg>
  </label>

  <input
    class="hidden"
    type="checkbox"
    id="menu-toggle"
    bind:checked={isMenuOpen}
    onclick={toggleMenu} />

  <div class="hidden w-full lg:flex lg:w-auto lg:items-center" id="menu">
    <ul class="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
      <li>
        <Theme />
      </li>
    </ul>
    <span class="ml-2 mr-6 px-2 text-sm">v{version}</span>
  </div>
</div>

<style>
  #menu-toggle:checked + #menu {
    position: absolute;
    top: 2.5rem;
    padding: 1rem 0;
    background: #661ae6;
    display: flex;
  }
</style>
