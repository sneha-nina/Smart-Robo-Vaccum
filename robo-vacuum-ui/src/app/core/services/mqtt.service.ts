import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs';

export type MqttConnectionState =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error';

export interface MqttMessage {
  payload: unknown;
  topic: string;
}

@Injectable({
  providedIn: 'root',
})
export class MqttService {
  private readonly connectionStateSubject =
    new BehaviorSubject<MqttConnectionState>('disconnected');
  private readonly messagesSubject = new Subject<MqttMessage>();
  private readonly subscribedTopics = new Set<string>();
  private brokerUrl: string | null = null;

  readonly connectionState$: Observable<MqttConnectionState> =
    this.connectionStateSubject.asObservable();
  readonly messages$: Observable<MqttMessage> = this.messagesSubject.asObservable();

  connect(brokerUrl: string): void {
    this.brokerUrl = brokerUrl;
    this.connectionStateSubject.next('connecting');

    queueMicrotask(() => {
      if (this.brokerUrl === brokerUrl) {
        this.connectionStateSubject.next('connected');
      }
    });
  }

  disconnect(): void {
    this.brokerUrl = null;
    this.subscribedTopics.clear();
    this.connectionStateSubject.next('disconnected');
  }

  subscribe(topic: string): Observable<MqttMessage> {
    this.subscribedTopics.add(topic);

    return this.messages$.pipe(filter((message) => message.topic === topic));
  }

  publish(topic: string, payload: unknown): void {
    if (this.connectionStateSubject.value !== 'connected') {
      console.warn(`MQTT client is not connected. Dropping message for ${topic}.`);
      return;
    }

    if (!this.subscribedTopics.has(topic)) {
      this.subscribedTopics.add(topic);
    }

    this.messagesSubject.next({ topic, payload });
  }

  getSubscribedTopics(): string[] {
    return [...this.subscribedTopics];
  }
}
