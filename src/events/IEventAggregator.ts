import { IEvent } from "./IEvent";
import { EventTypes } from "./EventTypes";
import { ISubscription } from "./ISubscription";

export interface IEventAggegator {
    publish(event: IEvent): void;
    subscribe(eventType: string | EventTypes, callback: Function): ISubscription;
    subscribeOnce(eventType: string | EventTypes, callback: Function): ISubscription;
}