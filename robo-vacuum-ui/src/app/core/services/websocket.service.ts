import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type WebsocketConnectionState =
  | 'idle'
  | 'connecting'
  | 'connected'
  | 'disconnected'
  | 'error';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: WebSocket | null = null;
  private readonly connectionStateSubject =
    new BehaviorSubject<WebsocketConnectionState>('idle');
  private readonly messagesSubject = new Subject<string>();

  readonly connectionState$: Observable<WebsocketConnectionState> =
    this.connectionStateSubject.asObservable();
  readonly messages$: Observable<string> = this.messagesSubject.asObservable();

  connect(url: string): void {
    if (typeof globalThis.WebSocket === 'undefined') {
      this.connectionStateSubject.next('error');
      return;
    }

    this.disconnect(false);
    this.connectionStateSubject.next('connecting');
    this.socket = new globalThis.WebSocket(url);

    this.socket.onopen = () => {
      this.connectionStateSubject.next('connected');
    };

    this.socket.onmessage = (event: MessageEvent<unknown>) => {
      const message =
        typeof event.data === 'string'
          ? event.data
          : JSON.stringify(event.data);
      this.messagesSubject.next(message);
    };

    this.socket.onerror = () => {
      this.connectionStateSubject.next('error');
    };

    this.socket.onclose = () => {
      this.socket = null;
      this.connectionStateSubject.next('disconnected');
    };
  }

  disconnect(emitState = true): void {
    if (!this.socket) {
      if (emitState) {
        this.connectionStateSubject.next('disconnected');
      }
      return;
    }

    const activeSocket = this.socket;
    this.socket = null;
    activeSocket.close();

    if (emitState) {
      this.connectionStateSubject.next('disconnected');
    }
  }
}
