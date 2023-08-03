<section class="hero">
	<div class="hero-text">
		<h1>The Hydralift</h1>
		<p>is a device that safety officials and production managers can both agree on.</p>
	</div>
	<figure class="hero-img">
		<img src="/images/hydralift.png" alt="Hydralift in action" />
	</figure>
</section>

<section class="info-cards">
	<article class="card">
		<div class="card-header">
			<i class="bx bxs-wallet bx-fw" />
		</div>
		<div class="card-text">
			<h3>cheaper</h3>
			<p>than traditional methods</p>
		</div>
	</article>
	<article class="card">
		<div class="card-header">
			<i class="bx bxs-timer bx-fw" />
		</div>
		<div class="card-text">
			<h3>faster</h3>
			<p>than traditional methods</p>
		</div>
	</article>
	<article class="card">
		<div class="card-header">
			<i class="bx bxs-hard-hat bx-fw" />
		</div>
		<div class="card-text">
			<h3>Safer</h3>
			<p>than traditional methods</p>
		</div>
	</article>
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

	.info-cards {
		@apply container mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:gap-12;
	}

	.card {
		@apply bg-hydragreen-500 p-8 text-center text-white sm:basis-1/3;
	}

	.card-header {
		@apply mb-2 text-5xl md:text-6xl;
	}

	.card-text h3 {
		@apply -mb-1 font-inter text-xl font-bold uppercase md:text-2xl lg:text-4xl;
	}

	.card-text p {
		@apply text-lg;
	}
</style>
