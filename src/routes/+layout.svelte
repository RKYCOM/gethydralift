<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import Footer from '$lib/Footer.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../app.postcss';
</script>

<NavBar />

<main>
	<slot />
</main>

<ContactForm />
<Footer />
