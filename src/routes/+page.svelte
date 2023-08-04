<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
</script>

<svelte:head>
	<title>Hydralift - A Better Way to Raise and Lower Rods</title>
	<meta
		name="description"
		content="The Hydralift was invented out of necessity. The current industry methods are extremely expensive or primitive and dangerous. They require excessive labor and time. The supplementation of this device will save your company personnel time, money and risk of injury."
	/>
</svelte:head>

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

<section id="kit">
	<h2>The Hydralift Kit</h2>
	<p>Packaged in a Pelican Case</p>
	<div class="info-cards">
		<div class="card">
			<div class="card-header">
				<img src="/images/hydralift-pump.svg" alt="Hydralift Hydraulic Pump" />
			</div>
			<div class="card-text">
				<h3>Hydraulic Pump</h3>
				<p>
					The hydraulic pumps powerful 0,37 kw motor and *qty2 28 volt lithium-ion battery deliver
					exceptional speed and run time.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="card-header">
				<img src="/images/hydralift-spacer.svg" alt="Hydralift Spacers" />
			</div>
			<div class="card-text">
				<h3>Spacers</h3>
				<p>
					Permanent spacers are designed in 3”, 6”, and 9” sizes. The interior spacer teardrop
					design allows for easy removal or insertion of the spacer.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="card-header">
				<img src="/images/hydralift-pole.svg" alt="Hydralift Pole" />
			</div>
			<div class="card-text">
				<h3>Spacer Pole</h3>
				<p>
					Designed to lift the permanent spacers into position or remove easily and safely with no
					additional equipment.
				</p>
			</div>
		</div>
	</div>
	<p>*Operates on one battery and back up battery included.</p>
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
		@apply font-inter text-xl font-bold uppercase md:text-2xl lg:text-4xl;
	}

	.card-text p {
		@apply text-base sm:text-lg;
	}

	.introduction {
		@apply bg-zinc-200 py-10 md:py-16;
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
		@apply mb-1 font-inter text-xl font-bold leading-tight md:text-2xl;
	}

	.intro-text p {
		@apply leading-tight md:text-lg;
	}

	#video {
		@apply py-8;
	}

	#kit {
		@apply bg-zinc-200 py-10 md:py-16;
	}

	#kit > p:first-of-type {
		@apply -mt-7 mb-7 text-center text-base italic md:text-lg;
	}

	#kit > p {
		@apply mt-7 text-center text-sm italic;
	}

	#kit .info-cards .card {
		@apply flex flex-col items-center gap-3;
	}

	#kit .info-cards .card .card-header {
		@apply h-32 sm:h-48;
	}

	#kit .info-cards .card .card-header img {
		@apply h-full w-auto object-contain;
	}

	#kit .info-cards .card .card-text h3 {
		@apply mb-2;
	}
</style>
