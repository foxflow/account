/** @typedef {typeof __propDef.props}  AuthUiProps */
/** @typedef {typeof __propDef.events}  AuthUiEvents */
/** @typedef {typeof __propDef.slots}  AuthUiSlots */
export default class AuthUi extends SvelteComponent<{
    theme?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AuthUiProps = typeof __propDef.props;
export type AuthUiEvents = typeof __propDef.events;
export type AuthUiSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        theme?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
