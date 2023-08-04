<svelte:head>
	<title>Showcase - Hydralift</title>
	<meta
		name="description"
		content="See exactly why the Hydralift will save your company and personnel time, money, and risk of injury."
	/>
</svelte:head>

<section>
	<h2>JSA Comparison/Advantages</h2>
	<p>
		We developed the Hydralift so that a single operator can perform the task safely while also
		being able to reduce time and cost.
	</p>

	<article>
		<div>
			<h3>Traditional Technique</h3>
			<ul>
				<li>Shut down unit</li>
				<li>Set brake</li>
				<li>Engage pawl</li>
			</ul>
			<h4>Lockout/Tagout</h4>
			<ul>
				<li>Remove pollution control device</li>
				<li>Insert toadstool</li>
				<li>Clean polished rod surface</li>
				<li>Attach bottom clamp</li>
				<li>Torque clamp</li>
			</ul>
			<h4>Remove Lockout/Tagout</h4>
			<ul>
				<li>Disengage pawl</li>
				<li>Disengage brake</li>
				<li>Roll over unit (high stress on motor)</li>
			</ul>
			<h4>Lockout/Tagout</h4>
			<ul>
				<li>Engage brake</li>
				<li>Engage pawl</li>
				<li>Remove top clamp (dangerous pinch point)</li>
				<li>Lower and attach top clamp (dangerous with unsure footing)</li>
				<li>Torque top clamps</li>
			</ul>
			<h4>Remove Lockout/Tagout</h4>
			<ul>
				<li>Disengage pawl</li>
				<li>Disengage brake</li>
				<li>Roll over unit (high stress on motor)</li>
			</ul>
			<h4>Lockout/Tagout</h4>
			<ul>
				<li>Engage brake</li>
				<li>Engage pawl</li>
				<li>Remove lower clamp</li>
				<li>Remove toadstool</li>
				<li>Replace pollution control device</li>
			</ul>
			<h4>Remove Lockout/Tagout</h4>
			<ul>
				<li>Disengage pawl</li>
				<li>Disengage brake</li>
				<li>Repeat if not spaced correctly</li>
			</ul>
		</div>
		<div>
			<h3>Hydralift System</h3>
			<ul>
				<li>Shut down unit</li>
				<li>Set brake</li>
				<li>Engage pawl</li>
			</ul>
			<h4>Lockout/Tagout</h4>
			<ul>
				<li>Remove pollution control device</li>
				<li>Insert Hydralift</li>
				<li>Attach bottom clamp</li>
				<li>Raise hydraulics</li>
				<li>Insert spacer (from a safe distance)</li>
				<li>Lower hydraulics (no impact on unit or rod string)</li>
				<li>Remove bottom clamp</li>
				<li>Remove Hydralift</li>
			</ul>
			<h4>Remove Lockout/Tagout</h4>
			<ul>
				<li>... and that's it!</li>
			</ul>
			<aside>
				<h3>Hydralift saves you</h3>
				<ul>
					<li>OSHA Recordable/Lost Time Accident: $500,000+</li>
					<li>Hired Crew and Equipment: $1,000 + 2 Man Min: $200+</li>
					<li>Increased producivity of company personnel: (1 operator vs. 2 or more)</li>
					<li>Increased BBL/D Production: (fine-tuning pump depth with Hydralift spacers)</li>
					<li>Decreased downtime on pumping unit (One man, one machine, one time, 10 min)</li>
					<li>Reduced risk of dropping rod string or losing fluid</li>
					<li>Wear and tear on pumping unit components</li>
				</ul>
			</aside>
		</div>
	</article>
</section>

<style lang="postcss">
	section {
		@apply container mx-auto flex flex-col items-center;
	}

	p {
		@apply mx-auto -mt-4 mb-8 w-3/4 text-center;
	}

	article {
		@apply flex flex-col gap-4 sm:flex-row sm:px-6 md:px-16 lg:px-24;
	}

	article div {
		@apply w-full sm:w-1/2;
	}

	article div h3,
	article div h4 {
		@apply font-inter font-bold uppercase;
	}

	article div h3 {
		@apply mb-2 text-2xl;
	}

	article div h4 {
		@apply mb-1 text-xl;
	}

	article div ul {
		@apply mb-3;
	}

	article div ul li {
		@apply list-inside list-disc;
	}

	aside {
		@apply my-8 border-4 border-hydragreen-500 px-4 py-3;
	}

	aside ul {
		@apply mb-0 list-inside list-disc;
	}

	aside ul li {
		@apply mb-1;
	}
</style>
