function h() {
  // import { h } from "preact";
}

export function f() {
  const ws = new WebSocket("ws://localhost");
  ws.close();
  return <div/>;
}
