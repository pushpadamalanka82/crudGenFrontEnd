import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    console.log("field:", field);
    if (field === 9) {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };