function el() {
  // import { el } from "redom";
}

export class MyDiv {
  constructor() {
    <div this="el">
      <p>RE:DOM</p>
    </div>;
  }
}
