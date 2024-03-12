/** @typedef {typeof __propDef.props}  CreateInviteProps */
/** @typedef {typeof __propDef.events}  CreateInviteEvents */
/** @typedef {typeof __propDef.slots}  CreateInviteSlots */
export default class CreateInvite extends SvelteComponent<{
    submitCreateInvite?: () => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get submitCreateInvite(): () => Promise<void>;
}
export type CreateInviteProps = typeof __propDef.props;
export type CreateInviteEvents = typeof __propDef.events;
export type CreateInviteSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        submitCreateInvite?: () => Promise<void>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
