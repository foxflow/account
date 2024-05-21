<script>
	export let theme = undefined;
	export let view = 'sign_in';
	import { Auth } from '@supabase/auth-ui-svelte';
	import { supabase } from '$lib/supabase';
	import { AuthTheme as defaultTheme }  from '$lib/theme/auth';
</script>
<Auth providers={['google']} {view} appearance={{ theme: theme || defaultTheme }} supabaseClient={supabase} />
