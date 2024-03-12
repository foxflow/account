/** @typedef {typeof __propDef.props}  SmallFormProps */
/** @typedef {typeof __propDef.events}  SmallFormEvents */
/** @typedef {typeof __propDef.slots}  SmallFormSlots */
export default class SmallForm extends SvelteComponent<{
    classes?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SmallFormProps = typeof __propDef.props;
export type SmallFormEvents = typeof __propDef.events;
export type SmallFormSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        classes?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
