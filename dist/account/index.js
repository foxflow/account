import { writable } from 'svelte/store';
import { supabase } from '../supabase';

export const accounts = writable([]);
export const currentUser = writable(false);
export const currentAccount = writable(false);
export const session = writable(false);
export const avatar = writable(false);
export { default as AuthUI } from './AuthUI.svelte';
export { default as CreateAccount } from './CreateAccount.svelte';
export { default as ListMembers } from './ListMembers.svelte';
export { default as CreateInvite } from './CreateInvite.svelte';
export { default as ListUserInvites } from './ListUserInvites.svelte';

const fetchAvatar = async (url) => {
	return fetch(url, { mode: 'cors' })
		.then((response) => {
			if (!response.ok) throw new Error('Network response was not ok');
			return response.blob();
		})
		.then((blob) => avatar.set(URL.createObjectURL(blob)))
		.catch((error) => console.error('There has been a problem with your fetch operation:', error));
};

export const trackAuthState = async () => {
	const { data } = supabase.auth.onAuthStateChange((event, theSession) => {
		if (theSession) {
			session.set(theSession);
			const { user } = theSession;
			if (event === 'INITIAL_SESSION') {
				// handle initial session
				if (user) {
					currentUser.set(user);
					supabase
						.rpc('get_accounts')
						.then(({ data }) => accounts.set(data.filter((a) => a.personal_account !== true)));
				}

				// experimental avatar fetch
				if (user && user.user_metadata && theSession.user.user_metadata.avatar_url) {
					fetchAvatar(theSession.user.user_metadata.avatar_url);
				}
			} else if (event === 'SIGNED_IN') {
				// handle sign in event
			} else if (event === 'SIGNED_OUT') {
				// handle sign out event
			} else if (event === 'PASSWORD_RECOVERY') {
				// handle password recovery event
			} else if (event === 'TOKEN_REFRESHED') {
				// handle token refreshed event
			} else if (event === 'USER_UPDATED') {
				// handle user updated event
			}
		}
	});

	// call unsubscribe to remove the callback
	return data;
};
