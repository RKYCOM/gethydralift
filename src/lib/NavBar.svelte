<script lang="ts">
	import { page } from '$app/stores';
	import { createMenu } from 'svelte-headlessui';

	const menu = createMenu();
	let open: boolean;

	function handleOpen() {
		open = true;
		return () => (open = false);
	}

	const links = [
		{ name: 'Showcase', href: '/showcase' },
		{ name: 'Files', href: '/files' },
		{ name: 'Video', href: '/#video' },
		{ name: 'Contact Us', href: '#contact' }
	];
</script>

<nav>
	<aside>
		<a href="/" class="logo">
			<img src="/images/hydralift-logo.svg" alt="Hydralift logo" />
		</a>
	</aside>
	<ul>
		{#each links as link}
			<li>
				<a class:active={$page.url.pathname === link.href} href={link.href}>{link.name}</a>
			</li>
		{/each}
	</ul>

	<div class="md:hidden">
		<button
			use:menu.button
			on:select={handleOpen}
			class={`${
				open ? 'bg-zinc-200' : ''
			} flex items-center justify-center rounded-md p-2 text-3xl transition duration-150 ease-in-out hover:bg-zinc-200 active:scale-90`}
		>
			<i class="bx bx-menu-alt-right" class:hidden={open} />
			<i class="bx bx-x" class:hidden={!open} />
		</button>
		<div
			use:menu.items
			class="absolute right-3 mt-5 w-48 origin-top-right space-y-2 rounded-md bg-white px-2 py-3 shadow-lg ring-1 ring-black ring-opacity-5"
		>
			{#each links as link}
				<div>
					<a class:active={$page.url.pathname === link.href} href={link.href}>{link.name}</a>
				</div>
			{/each}
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply sticky z-10 flex w-full items-center justify-between border-b-2 border-b-zinc-300 bg-white px-3 py-2 md:px-8 lg:px-14;
	}

	.logo {
		@apply items-center px-3 py-2;
	}

	.logo img {
		@apply h-14 w-auto;
	}

	ul {
		@apply hidden gap-4 text-lg font-bold md:flex;
	}

	a {
		@apply flex rounded-xl px-3 py-2 transition duration-150 ease-in-out hover:bg-zinc-200 active:scale-90;
	}

	.active {
		@apply bg-zinc-200;
	}
</style>
