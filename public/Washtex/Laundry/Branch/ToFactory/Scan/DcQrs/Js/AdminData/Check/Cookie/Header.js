import Config from '../../Config.json' with {type: 'json'};


let StartFunc = () => {

    let inLocalStorageKey = Config.kUserNameId;
    let inHeaderLoginButtonId = Config.HeaderLoginButtonId;
    let inHeaderUserIdDropDown = Config.HeaderUserIdDropDown;
    let inNavBarId = Config.NavBarId;

    let LocalUserName = localStorage.getItem(inLocalStorageKey);
    console.log("LocalUserName::",LocalUserName);
    let jVarLocalHeaderLoginButtonId = document.getElementById(inHeaderLoginButtonId);

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById(inHeaderUserIdDropDown).innerHTML =
                document.getElementById(inHeaderUserIdDropDown).innerHTML.replace("UserName", LocalUserName);

            document.getElementById(inNavBarId).classList.remove("bg-danger");
            document.getElementById(inNavBarId).classList.add("bg-primary");
        };
    };
};

export { StartFunc };