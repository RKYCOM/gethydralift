<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';

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

	<Menu class="md:hidden">
		<MenuButton
			let:open
			class={({ open }) =>
				`${
					open ? 'bg-zinc-200' : ''
				} flex items-center justify-center rounded-md p-2 text-3xl transition duration-150 ease-in-out hover:bg-zinc-200 active:scale-90`}
		>
			<i class="bx bx-menu-alt-right" class:hidden={open} />
			<i class="bx bx-x" class:hidden={!open} />
		</MenuButton>
		<MenuItems
			class="absolute right-14 mt-5 w-48 origin-top-right space-y-2 rounded-md bg-white px-2 py-3 shadow-lg ring-1 ring-black ring-opacity-5"
		>
			{#each links as link}
				<div>
					<MenuItem>
						<a class:active={$page.url.pathname === link.href} href={link.href}>{link.name}</a>
					</MenuItem>
				</div>
			{/each}
		</MenuItems>
	</Menu>
</nav>

<style lang="postcss">
	nav {
		@apply sticky z-10 flex w-full items-center justify-between border-b-2 border-b-zinc-300 bg-white px-14 py-2;
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
