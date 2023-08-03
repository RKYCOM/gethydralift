<section class="hero">
	<div class="hero-text">
		<h1>The Hydralift</h1>
		<p>is a device that safety officials and production managers can both agree on.</p>
	</div>
	<figure class="hero-img">
		<img src="/images/hydralift.png" alt="Hydralift in action" />
	</figure>
</section>

<style lang="postcss">
	.hero {
		@apply container mx-auto flex flex-col-reverse items-center justify-between gap-2 sm:flex-row;
	}

	.hero-text h1 {
		@apply w-3/4 font-inter text-4xl font-bold uppercase text-hydragreen-500 md:text-5xl lg:text-7xl;
	}

	.hero-text p {
		@apply text-lg font-thin italic lg:text-2xl;
	}

	.hero-img {
		@apply w-1/4;
	}

	section {
		@apply mb-8;
	}
</style>
