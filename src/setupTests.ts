import "@testing-library/jest-dom";
import util from "util";

Object.defineProperties(globalThis, {
  TextEncoder: {
    value: util.TextEncoder,
  },
  TextDecoder: {
    value: util.TextDecoder,
  },
});
