/** @typedef {typeof __propDef.props}  ListMembersProps */
/** @typedef {typeof __propDef.events}  ListMembersEvents */
/** @typedef {typeof __propDef.slots}  ListMembersSlots */
export default class ListMembers extends SvelteComponent<{
    classes?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ListMembersProps = typeof __propDef.props;
export type ListMembersEvents = typeof __propDef.events;
export type ListMembersSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        classes?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
