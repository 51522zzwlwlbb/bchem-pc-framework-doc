import {
  flowRendererV2,
  flowStyles
} from "./chunk-PUSMFB63.js";
import "./chunk-BJECHKOR.js";
import {
  flowDb,
  parser$1
} from "./chunk-RKADUYGC.js";
import "./chunk-BU6MJCVE.js";
import "./chunk-2GHRQK7D.js";
import "./chunk-M5ZUAGWM.js";
import "./chunk-FYK4VPVU.js";
import "./chunk-XD6CZ4BI.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-NWE2W6NG.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-58f49b84.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-58f49b84-Z3HXLCJM.js.map
