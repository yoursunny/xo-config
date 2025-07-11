function h() {
  // import { h } from "preact";
}

/**
 * Some function.
 * @returns DIV element.
 */
export function f(): HTMLElement {
  const ws = new WebSocket("ws://localhost");
  ws.close();
  return <div/>;
}
