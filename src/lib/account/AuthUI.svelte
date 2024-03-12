<script>
	export let theme = undefined;
	import { Auth } from '@supabase/auth-ui-svelte';
	import { supabase } from '$lib/supabase';
	import { AuthTheme as defaultTheme }  from '$lib/theme/auth';
</script>
<Auth providers={['google']} appearance={{ theme: theme || defaultTheme }} supabaseClient={supabase} />
