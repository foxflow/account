/** @typedef {typeof __propDef.props}  ListUserInvitesProps */
/** @typedef {typeof __propDef.events}  ListUserInvitesEvents */
/** @typedef {typeof __propDef.slots}  ListUserInvitesSlots */
export default class ListUserInvites extends SvelteComponent<{
    [x: string]: never;
}, {
    invites: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ListUserInvitesProps = typeof __propDef.props;
export type ListUserInvitesEvents = typeof __propDef.events;
export type ListUserInvitesSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        invites: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
