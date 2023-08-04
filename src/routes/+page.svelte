<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
</script>

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

<section class="introduction">
	<h2>Introducing the Hydralift</h2>
	<div class="intro-content">
		<img src="/images/hydralift-inaction.png" alt="Hydralift in action" />
		<div class="intro-text">
			<div>
				<h3>As a well optimization specialist</h3>
				<p>
					in the Rocky Mountain region, I've worked daily to increase and maintain production on
					artifically lifted oil wells. This often requires adjusting the depth of the pump plunger
					in the barrel to increase compression, battle gas interference, or to temporarily tag the
					pump due to solids in the valves.
				</p>
			</div>
			<div>
				<h3>A better way to raise and lower rods</h3>
				<p>
					If you've ever lowered rods, you know what we're talking about. Even the best impact
					gloves won't save your finders if they're caught in a pinch point with the rod string
					weight on top of them. Being able to optimize wells in this day in age is critical to
					surviving the down turn we are facing.
				</p>
			</div>
			<div>
				<h3>The Hydralift was invented out of necessity</h3>
				<p>
					The current industry methods are extremely expensive, or primative and dangerous. As well,
					they require excessive labor and time. The Hydralift is <strong>80% cheaper</strong> and
					<strong>10x faster</strong> than traditional methods. How often does our industry get to enforce
					a new safety program that simultaneously allows individuals to work safer, save time, and of
					course, money? We decided to throw conventional methods in the trash and went to work creating
					the new standard of safety and operation, the Hydralift.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="video">
	<h2>See The Hydralift in Action</h2>
	<div class="container mx-auto">
		<Youtube id="UKNUuaY5Ezc" --title-color="transparent" --title-shadow-color="transparent" />
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply container mx-auto flex flex-col-reverse items-center justify-between gap-2 sm:flex-row;
	}

	.hero-text h1 {
		@apply mb-2 w-3/4 font-inter text-4xl font-bold uppercase text-hydragreen-500 md:text-5xl lg:text-7xl;
	}

	.hero-text p {
		@apply text-lg font-thin italic leading-tight lg:text-2xl;
	}

	.hero-img {
		@apply w-1/4;
	}

	section {
		@apply mb-8;
	}

	section.introduction,
	#video {
		@apply px-10;
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

	.introduction {
		@apply bg-zinc-200 py-16;
	}

	.intro-content {
		@apply flex gap-8;
	}

	.intro-content img {
		@apply hidden w-1/6 object-contain object-center xl:block;
	}

	.intro-text {
		@apply flex flex-col justify-evenly xl:w-5/6;
	}

	.intro-text > * {
		@apply mb-4 last:mb-0;
	}

	.intro-text h3 {
		@apply mb-1 font-inter text-xl font-bold md:text-2xl;
	}

	.intro-text p {
		@apply leading-tight md:text-lg;
	}

	#video {
		@apply py-8;
	}
</style>
