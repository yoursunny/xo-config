function h() {
  // import { h } from "preact";
}

export function f(): unknown {
  const ws = new WebSocket("ws://localhost");
  ws.close();
  return <div/>;
}
