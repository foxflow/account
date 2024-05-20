/** @typedef {typeof __propDef.props}  CreateAccountProps */
/** @typedef {typeof __propDef.events}  CreateAccountEvents */
/** @typedef {typeof __propDef.slots}  CreateAccountSlots */
export default class CreateAccount extends SvelteComponent<{
    nameLabelText?: string;
    slugLabelText?: string;
    buttonText?: string;
    slugHelpText?: string;
    onAfterCreate?: () => void;
    onError?: (err: any) => void;
    name?: string;
    slug?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CreateAccountProps = typeof __propDef.props;
export type CreateAccountEvents = typeof __propDef.events;
export type CreateAccountSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        nameLabelText?: string;
        slugLabelText?: string;
        buttonText?: string;
        slugHelpText?: string;
        onAfterCreate?: () => void;
        onError?: (err: any) => void;
        name?: string;
        slug?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
