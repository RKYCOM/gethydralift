<section>
	<h2>Contact Us</h2>
	<div class="content">
		<div class="contact-info">
			<p><span class="label">Phone:</span> (307) 255-2260</p>
			<p>414 S. Elm Street<br />Casper, WY 82601</p>
		</div>
		<form action="https://usebasin.com/f/cd8259376bb8" method="POST">
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" required />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" name="email" required />
			</div>
			<div>
				<label for="message">Message</label>
				<textarea name="message" placeholder="Your message here..." required />
			</div>
			<button type="submit">Send</button>
		</form>
	</div>
</section>

<style lang="postcss">
	section {
		@apply w-full bg-hydragreen-500 px-12 py-16 text-white;
	}

	.content {
		@apply flex w-full flex-col-reverse gap-8 sm:flex-row;
	}

	.contact-info {
		@apply w-1/4;
	}

	.label {
		@apply font-inter font-bold uppercase;
	}

	form {
		@apply flex w-3/4 flex-col gap-3;
	}

	form div {
		@apply mb-2;
	}

	form label {
		@apply mb-1 block font-inter text-lg font-bold uppercase;
	}

	form input,
	form textarea {
		@apply w-full rounded-md px-4 py-2 text-black;
	}

	form textarea {
		@apply h-32;
	}

	form button {
		@apply w-1/4 rounded-md bg-black py-2 transition duration-200 ease-in-out hover:bg-white hover:text-black active:scale-90;
	}
</style>
