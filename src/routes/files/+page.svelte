<section>
	<h2>Files</h2>

	<div class="content">
		<div>
			<h3>Frequently Asked Questions</h3>
			<a href="/files/hydralift-faq.pdf" class="btn">Download</a>
		</div>

		<div>
			<h3>Operation's Procedure</h3>
			<a href="/files/hydralift-operation-procedure.pdf" class="btn">Download</a>
		</div>

		<div>
			<h3>Operation's Manual</h3>
			<a href="/files/hydralift-operations-manual.pdf" class="btn">Download</a>
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		@apply pb-8;
	}

	.content {
		@apply container mx-auto flex flex-col items-center text-center md:flex-row;
	}

	.content div {
		@apply mb-8 w-full last:mb-0 md:mb-0 md:w-1/3;
	}

	.content div h3 {
		@apply mb-2 font-inter text-xl font-bold uppercase md:text-2xl;
	}

	.btn {
		@apply inline-block w-1/3 min-w-fit bg-hydragreen-500 py-2 text-white transition duration-150 ease-in-out hover:cursor-pointer hover:bg-hydragreen-700 active:scale-90;
	}
</style>
