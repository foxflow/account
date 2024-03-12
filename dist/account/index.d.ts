/// <reference types="svelte" />
export const accounts: import("svelte/store").Writable<any[]>;
export const currentUser: import("svelte/store").Writable<boolean>;
export const currentAccount: import("svelte/store").Writable<boolean>;
export const session: import("svelte/store").Writable<boolean>;
export const avatar: import("svelte/store").Writable<boolean>;
export { default as AuthUI } from "./AuthUI.svelte";
export { default as CreateAccount } from "./CreateAccount.svelte";
export { default as ListMembers } from "./ListMembers.svelte";
export { default as CreateInvite } from "./CreateInvite.svelte";
export { default as ListUserInvites } from "./ListUserInvites.svelte";
export function trackAuthState(): Promise<{
    subscription: import("@supabase/gotrue-js").Subscription;
}>;
