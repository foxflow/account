/** @typedef {typeof __propDef.props}  MemberSelectProps */
/** @typedef {typeof __propDef.events}  MemberSelectEvents */
/** @typedef {typeof __propDef.slots}  MemberSelectSlots */
export default class MemberSelect extends SvelteComponent<{
    value: any;
    emptyPrompt: any;
    classes?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MemberSelectProps = typeof __propDef.props;
export type MemberSelectEvents = typeof __propDef.events;
export type MemberSelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        emptyPrompt: any;
        classes?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
