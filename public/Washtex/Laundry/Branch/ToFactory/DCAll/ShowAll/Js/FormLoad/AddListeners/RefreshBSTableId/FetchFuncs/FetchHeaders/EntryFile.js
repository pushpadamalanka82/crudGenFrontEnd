import KeysJson from './Keys.json' with {type: 'json'};
import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }